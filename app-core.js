const PRICING = {
    premiumMonthly: 100,
    yearlyDiscount: 0.25,
    get premiumYearly() {
        return Math.max(1, Math.round(this.premiumMonthly * 12 * (1 - this.yearlyDiscount)) - 1);
    }
};

const UPI_PAYMENT_CONFIG = {
    merchantVpa: 'ar0694066-1@okicici',
    merchantName: 'Dynamate',
    currency: 'INR',
    notePrefix: 'Dynamate Premium'
};

const UPI_PAYMENT_APPS = [
    {
        key: 'gpay',
        name: 'Google Pay',
        icon: 'fa-brands fa-google-pay',
        packageName: 'com.google.android.apps.nbu.paisa.user'
    },
    {
        key: 'phonepe',
        name: 'PhonePe',
        icon: 'fa-solid fa-mobile-screen-button',
        packageName: 'com.phonepe.app'
    },
    {
        key: 'paytm',
        name: 'Paytm',
        icon: 'fa-solid fa-wallet',
        packageName: 'net.one97.paytm'
    }
];

const TRAINING_LABELS = {
    powerlifting: 'Powerlifting',
    strength_training: 'Strength Training',
    weightlifting: 'Weightlifting',
    mma: 'MMA Strength & Conditioning',
    muscle_building: 'Muscle Building Support',
    normal: 'Strength Training',
    competition: 'Powerlifting'
};

const PRIMARY_EXERCISES = {
    powerlifting: ['Squat', 'Bench Press', 'Deadlift'],
    strength_training: ['Squat', 'Bench Press', 'Deadlift', 'Overhead Press', 'Barbell Row'],
    weightlifting: ['Snatch', 'Clean and Jerk', 'Front Squat', 'Squat'],
    mma: ['Trap Bar Deadlift', 'Front Squat', 'Push Press', 'Pull-ups'],
    muscle_building: ['Bench Press', 'Squat', 'Romanian Deadlift', 'Overhead Press', 'Barbell Row']
};

const PROGRAM_KEY_BY_TRAINING = {
    powerlifting: 'powerlifting',
    strength_training: 'normal',
    weightlifting: 'olympic_weightlifting',
    mma: 'crossfit',
    muscle_building: 'normal'
};

const COURSE_LIBRARY = [
    {
        title: 'Powerlifting Foundations',
        level: 'Beginner to Intermediate',
        description: 'Squat, bench, and deadlift technique standards with simple meet-style progression.'
    },
    {
        title: 'RPE Autoregulation for Strength Athletes',
        level: 'Intermediate',
        description: 'Use RPE, fatigue, and readiness to adjust loading without losing long-term progress.'
    },
    {
        title: 'Programming Blocks and Deload Strategy',
        level: 'Coach Track',
        description: 'Plan accumulation, intensification, tapering, and deload weeks for barbell athletes.'
    },
    {
        title: 'Athlete Development Systems',
        level: 'Premium',
        description: 'Build repeatable assessment, goal tracking, and review workflows for coaching clients.'
    }
];

const store = {
    getUser: () => JSON.parse(localStorage.getItem('dm_user')),
    setUser: (user) => localStorage.setItem('dm_user', JSON.stringify(user)),
    getAccounts: () => JSON.parse(localStorage.getItem('dm_accounts')) || [],
    getAccount: (email) => store.getAccounts().find(account => account.email === _normalizeEmail(email)),
    saveAccount: (account) => {
        const accounts = store.getAccounts().filter(item => item.email !== _normalizeEmail(account.email));
        accounts.push({ ...account, email: _normalizeEmail(account.email) });
        localStorage.setItem('dm_accounts', JSON.stringify(accounts));
    },
    syncCurrentUserToAccount: () => {
        const user = store.getUser();
        if (!user || !user.email) return;
        const account = store.getAccount(user.email) || {};
        store.saveAccount({ ...account, ...user, password: account.password || user.password || '' });
    },
    updateUser: (patch) => {
        const current = store.getUser() || {};
        const next = { ...current, ...patch };
        store.setUser(next);
        store.syncCurrentUserToAccount();
        return next;
    },
    getProfile: () => {
        const user = store.getUser() || {};
        const profile = user.profile || {};
        const legacyGoal = profile.goal === 'competition' ? 'powerlifting' : profile.goal;
        return {
            trainingType: profile.trainingType || legacyGoal || 'strength_training',
            bodyweight: parseFloat(profile.bodyweight || profile.weight) || null,
            targetBodyweight: parseFloat(profile.targetBodyweight) || null,
            competitionDate: profile.competitionDate || '',
            experience: profile.experience || 'intermediate',
            injuries: profile.injuries || 'none',
            currentLifts: profile.currentLifts || {},
            targetLifts: profile.targetLifts || {}
        };
    },
    getWorkouts: () => JSON.parse(localStorage.getItem('dm_workouts')) || [],
    saveWorkout: (workout) => {
        const workouts = store.getWorkouts();
        const saved = { ...workout, id: Date.now().toString(), date: new Date().toISOString() };
        workouts.push(saved);
        localStorage.setItem('dm_workouts', JSON.stringify(workouts));
        return saved;
    },
    getRecovery: () => JSON.parse(localStorage.getItem('dm_recovery')) || {
        sleep: 'Average',
        soreness: 'Low',
        fatigue: 5,
        pain: 'none'
    },
    saveRecovery: (recovery) => {
        const saved = {
            sleep: recovery.sleep || 'Average',
            soreness: recovery.soreness || 'Low',
            fatigue: parseInt(recovery.fatigue, 10) || 5,
            pain: recovery.pain || 'none',
            date: new Date().toISOString()
        };
        localStorage.setItem('dm_recovery', JSON.stringify(saved));
        return saved;
    },
    getLastWorkout: (exercise) => {
        const workouts = store.getWorkouts();
        if (!exercise) return workouts.length ? workouts[workouts.length - 1] : null;
        const filtered = workouts.filter(w => w.exercise === exercise);
        return filtered.length ? filtered[filtered.length - 1] : null;
    },
    getExerciseHistory: (exercise, limit = 5) => {
        return store.getWorkouts()
            .filter(w => w.exercise === exercise)
            .slice()
            .reverse()
            .slice(0, limit);
    },
    getUniqueExercises: () => [...new Set(store.getWorkouts().map(w => w.exercise))],
    getGoals: () => JSON.parse(localStorage.getItem('dm_goals')) || [],
    saveGoal: (goal) => {
        const goals = store.getGoals();
        goals.push(goal);
        localStorage.setItem('dm_goals', JSON.stringify(goals));
    },
    upsertGoal: (exercise, target, source = 'profile') => {
        if (!exercise || !target) return;
        const goals = store.getGoals();
        const idx = goals.findIndex(goal => goal.exercise === exercise && goal.source === source);
        const next = { id: idx >= 0 ? goals[idx].id : Date.now().toString() + exercise, exercise, target: parseFloat(target), source };
        if (idx >= 0) goals[idx] = next;
        else goals.push(next);
        localStorage.setItem('dm_goals', JSON.stringify(goals));
    },
    deleteGoal: (id) => {
        localStorage.setItem('dm_goals', JSON.stringify(store.getGoals().filter(goal => goal.id !== id)));
    },
    getBodyMetrics: () => JSON.parse(localStorage.getItem('dm_body')) || [],
    saveBodyMetric: (metric) => {
        const metrics = store.getBodyMetrics();
        metrics.push({ ...metric, id: Date.now().toString(), date: new Date().toISOString() });
        localStorage.setItem('dm_body', JSON.stringify(metrics));
    },
    calculateVolume: (workout) => {
        return (parseFloat(workout.weight) || 0) * (parseInt(workout.sets, 10) || 0) * (parseInt(workout.reps, 10) || 0);
    },
    estimate1RM: (workout) => {
        const weight = parseFloat(workout.weight) || 0;
        const reps = parseInt(workout.reps, 10) || 1;
        return Math.round(weight * (1 + reps / 30));
    },
    getPersonalBest: (exercise) => {
        const values = store.getWorkouts().filter(w => w.exercise === exercise).map(w => parseFloat(w.weight) || 0);
        return values.length ? Math.max(...values) : 0;
    },
    getBestEstimated1RM: (exercise) => {
        const values = store.getWorkouts().filter(w => w.exercise === exercise).map(w => store.estimate1RM(w));
        return values.length ? Math.max(...values) : 0;
    },
    getWeeklyVolume: () => {
        return store.getWorkouts()
            .filter(w => _daysAgo(w.date) <= 7)
            .reduce((sum, w) => sum + store.calculateVolume(w), 0);
    }
};

const engine = {
    getReadiness: (recovery = store.getRecovery()) => {
        let score = 100;
        const fatigue = parseInt(recovery.fatigue, 10) || 5;
        if (recovery.sleep === 'Poor') score -= 25;
        if (recovery.sleep === 'Average') score -= 10;
        if (recovery.soreness === 'Medium') score -= 12;
        if (recovery.soreness === 'High') score -= 25;
        if (fatigue >= 8) score -= 25;
        else if (fatigue >= 6) score -= 12;
        if (recovery.pain === 'minor') score -= 10;
        if (recovery.pain === 'moderate') score -= 30;
        if (recovery.pain === 'high') score -= 50;
        score = Math.max(0, Math.min(100, score));
        if (score < 55) return { score, status: 'Deload', className: 'poor' };
        if (score < 75) return { score, status: 'Manage', className: 'average' };
        return { score, status: 'Ready', className: 'good' };
    },
    getExerciseTrend: (exercise) => {
        const history = store.getExerciseHistory(exercise, 4);
        if (history.length < 3) return 'baseline';
        const e1rms = history.map(w => store.estimate1RM(w));
        const latest = e1rms[0];
        const olderBest = Math.max(...e1rms.slice(1));
        const efforts = history.map(w => parseInt(w.effort, 10) || 5);
        if (latest > olderBest * 1.02 && efforts[0] <= 8) return 'improving';
        if (latest <= olderBest && efforts.slice(0, 3).every(effort => effort >= 8)) return 'stalled';
        return 'stable';
    },
    calculateNextTarget: (exercise) => {
        const history = store.getExerciseHistory(exercise, 4);
        if (!history.length) return null;
        const lastWorkout = history[0];
        const recovery = store.getRecovery();
        const readiness = engine.getReadiness(recovery);
        const effort = parseInt(lastWorkout.effort, 10) || 5;
        const currentWeight = parseFloat(lastWorkout.weight) || 0;
        const trend = engine.getExerciseTrend(exercise);
        const experience = store.getProfile().experience || 'intermediate';
        let action = 'maintain';
        let percentage = 0;

        if (recovery.pain === 'high') {
            action = 'deload';
            percentage = -0.15;
        } else if (recovery.pain === 'moderate' || readiness.score < 55) {
            action = 'decrease';
            percentage = -0.10;
        } else if (trend === 'stalled' && effort >= 8) {
            action = 'deload';
            percentage = -0.075;
        } else if (effort >= 9 || readiness.score < 70) {
            action = 'decrease';
            percentage = -0.05;
        } else if (effort <= 7 && readiness.score >= 80) {
            action = 'increase';
            percentage = experience === 'advanced' ? 0.015 : 0.025;
        } else if (trend === 'improving' && readiness.score >= 75) {
            action = 'increase';
            percentage = 0.02;
        }

        let targetWeight = currentWeight * (1 + percentage);
        targetWeight = Math.round(targetWeight / 2.5) * 2.5;
        if (action === 'increase' && targetWeight <= currentWeight) targetWeight = currentWeight + 2.5;
        if ((action === 'decrease' || action === 'deload') && targetWeight >= currentWeight) targetWeight = Math.max(0, currentWeight - 2.5);

        return {
            exercise,
            currentWeight,
            targetWeight,
            action,
            trend,
            readiness,
            reason: _getRecommendationReason(action, trend, effort, readiness, recovery)
        };
    },
    getGoalProgress: () => {
        return store.getGoals().map(goal => {
            const current = store.getBestEstimated1RM(goal.exercise) || store.getPersonalBest(goal.exercise);
            const progress = goal.target > 0 ? Math.min(100, Math.round((current / goal.target) * 100)) : 0;
            return { ...goal, current, progress, isCompleted: progress >= 100 };
        });
    },
    getInsights: () => {
        const insights = [];
        const recovery = store.getRecovery();
        const readiness = engine.getReadiness(recovery);
        const primary = _getPrimaryExercises(store.getProfile().trainingType);
        if (!store.getWorkouts().length) insights.push('Log your first baseline workout to unlock progression targets.');
        if (readiness.score < 55) insights.push('Recovery is declining. Consider a deload or lighter technical session.');
        if (recovery.sleep === 'Poor') insights.push('Sleep quality is affecting readiness. Keep intensity conservative today.');
        if (recovery.pain === 'moderate' || recovery.pain === 'high') insights.push('Pain is elevated. Reduce load and avoid pushing through heavy sets.');
        primary.forEach(exercise => {
            const trend = engine.getExerciseTrend(exercise);
            if (trend === 'stalled') insights.push(`${exercise} progression has stalled. A lower-stress session may restore momentum.`);
            if (trend === 'improving') insights.push(`${exercise} is trending up. Keep the next jump small and repeatable.`);
        });
        return insights.slice(0, 4);
    }
};

function _getRecommendationReason(action, trend, effort, readiness, recovery) {
    if (recovery.pain === 'high') return 'High pain reported. Stop heavy loading and use a deload approach.';
    if (recovery.pain === 'moderate') return 'Pain is present. Reducing load protects long-term progress.';
    if (readiness.score < 55) return 'Readiness is low. Reduce intensity and accumulate easier work.';
    if (trend === 'stalled') return 'Repeated high-effort work without progress. Deload to manage fatigue.';
    if (action === 'increase') return `RPE ${effort} with solid readiness. Add a small progressive overload.`;
    if (action === 'decrease') return `RPE ${effort} or recovery flags are high. Lower the load for sustainability.`;
    return 'Maintain the load and build repeatable technical quality.';
}

function _normalizeEmail(email) {
    return String(email || '').trim().toLowerCase();
}

function _formatKg(value) {
    if (!value && value !== 0) return '-';
    return `${Math.round(value * 10) / 10} kg`;
}

function _daysAgo(date) {
    return (new Date() - new Date(date)) / (1000 * 60 * 60 * 24);
}

function _getTrainingLabel(type) {
    return TRAINING_LABELS[type] || 'Strength Training';
}

function _getPrimaryExercises(type) {
    return PRIMARY_EXERCISES[type] || PRIMARY_EXERCISES.strength_training;
}

function _getUserGoal() {
    return store.getProfile().trainingType;
}

function _getCompType() {
    return _getUserGoal();
}

function _getCompLabel(type) {
    return _getTrainingLabel(type);
}

function _isPremium(user = store.getUser()) {
    return Boolean(user && user.plan && user.plan.startsWith('premium'));
}

function _getPlanLabel(plan = 'freemium') {
    const labels = {
        freemium: 'Freemium',
        premium_monthly: 'Premium Monthly',
        premium_yearly: 'Premium Yearly'
    };
    return labels[plan] || 'Freemium';
}

function _getPlanAmount(plan = 'freemium') {
    if (plan === 'premium_yearly') return PRICING.premiumYearly;
    if (plan === 'premium_monthly') return PRICING.premiumMonthly;
    return 0;
}

function _formatRupees(amount) {
    return `₹${Number(amount || 0).toLocaleString('en-IN')}`;
}

function _isUpiConfigured() {
    return Boolean(
        UPI_PAYMENT_CONFIG.merchantVpa &&
        !UPI_PAYMENT_CONFIG.merchantVpa.includes('YOUR_UPI_ID') &&
        /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/.test(UPI_PAYMENT_CONFIG.merchantVpa)
    );
}

function _makePaymentReference(plan) {
    const suffix = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`.toUpperCase();
    return `DM-${plan === 'premium_yearly' ? 'YR' : 'MO'}-${suffix}`;
}

function _encodeUpiQuery(fields) {
    return Object.entries(fields)
        .filter(([, value]) => value !== undefined && value !== null && value !== '')
        .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
        .join('&');
}

function _buildUpiPayment(plan, existingReference = '') {
    const amount = _getPlanAmount(plan);
    const reference = existingReference || _makePaymentReference(plan);
    const query = _encodeUpiQuery({
        pa: UPI_PAYMENT_CONFIG.merchantVpa,
        pn: UPI_PAYMENT_CONFIG.merchantName,
        tr: reference,
        tn: `${UPI_PAYMENT_CONFIG.notePrefix} - ${_getPlanLabel(plan)} - ${reference}`,
        am: amount.toFixed(2),
        cu: UPI_PAYMENT_CONFIG.currency
    });
    const uri = `upi://pay?${query}`;

    return {
        plan,
        amount,
        reference,
        merchantVpa: UPI_PAYMENT_CONFIG.merchantVpa,
        merchantName: UPI_PAYMENT_CONFIG.merchantName,
        uri,
        status: 'started',
        createdAt: new Date().toISOString()
    };
}

function _getUpiIntentHref(appInfo, upiUri) {
    const query = upiUri.replace('upi://pay?', '');
    return `intent://pay?${query}#Intent;scheme=upi;package=${appInfo.packageName};end`;
}

function _escapeHTML(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

const app = {
    authMode: 'signup',
    init: () => {
        store.syncCurrentUserToAccount();
        app.renderPricing();
        const dateDisplay = document.getElementById('date-display');
        if (dateDisplay) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateDisplay.textContent = new Date().toLocaleDateString('en-US', options);
        }
        document.querySelectorAll('.nav-item').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const target = el.closest('a').getAttribute('data-target');
                if (target) app.navigateAppPage(target);
            });
        });
        app.updateAuthUI();
        app.loadRecoveryForm();
        app.renderDashboard();
    },
    renderPricing: () => {
        const monthly = document.getElementById('premium-monthly-price');
        const yearly = document.getElementById('premium-yearly-price');
        const savings = document.getElementById('premium-yearly-savings');
        if (monthly) monthly.textContent = PRICING.premiumMonthly;
        if (yearly) yearly.textContent = PRICING.premiumYearly;
        if (savings) {
            const saved = PRICING.premiumMonthly * 12 - PRICING.premiumYearly;
            savings.textContent = `Save ${Math.round((saved / (PRICING.premiumMonthly * 12)) * 100)}% versus monthly billing.`;
        }
    },
    selectPlan: (plan) => {
        if (plan && plan.startsWith('premium')) {
            app.openUpiCheckout(plan);
            return;
        }
        localStorage.setItem('dm_pending_plan', plan);
        const user = store.getUser();
        if (!user) {
            app.navigateToAuth('signup', plan === 'freemium' ? 'Create your free athlete profile to continue.' : 'Create your athlete profile before choosing Premium.');
            return;
        }
        const next = store.updateUser({ plan });
        app.updateAuthUI();
        app.showToast(`${_getPlanLabel(plan)} selected.`);
        if (next.onboardingComplete) app.navigateAppPage(plan === 'freemium' ? 'dashboard' : 'courses');
    },
    openUpiCheckout: (plan) => {
        const user = store.getUser();
        if (!user) {
            localStorage.setItem('dm_pending_upi_plan', plan);
            app.navigateToAuth('signup', 'Create your athlete profile before paying with UPI.');
            return;
        }
        localStorage.removeItem('dm_pending_upi_plan');

        const payment = _buildUpiPayment(plan);
        localStorage.setItem('dm_pending_payment', JSON.stringify(payment));
        app.renderUpiCheckout(payment);

        const modal = document.getElementById('upi-modal');
        if (modal) {
            modal.classList.remove('hidden');
            document.body.classList.add('modal-open');
        }
    },
    renderUpiCheckout: (payment) => {
        const content = document.getElementById('upi-modal-content');
        if (!content) return;

        const isConfigured = _isUpiConfigured();
        const appButtons = isConfigured
            ? UPI_PAYMENT_APPS.map(appInfo => `
                <a class="upi-app-button ${appInfo.key}" href="${_escapeHTML(_getUpiIntentHref(appInfo, payment.uri))}" onclick="app.recordUpiLaunch('${appInfo.name}')" aria-label="Pay with ${appInfo.name}">
                    <i class="${appInfo.icon}"></i>
                    <span>${appInfo.name}</span>
                </a>`).join('')
            : UPI_PAYMENT_APPS.map(appInfo => `
                <button class="upi-app-button ${appInfo.key}" disabled aria-label="${appInfo.name} unavailable until UPI ID is configured">
                    <i class="${appInfo.icon}"></i>
                    <span>${appInfo.name}</span>
                </button>`).join('');

        content.innerHTML = `
            <div class="payment-modal-header">
                <div class="plan-kicker">UPI only</div>
                <h2 id="upi-modal-title">Pay for ${_getPlanLabel(payment.plan)}</h2>
                <p class="text-muted">Use Google Pay, PhonePe, Paytm, or any UPI app on your phone.</p>
            </div>

            <div class="upi-summary">
                <div>
                    <span>Plan</span>
                    <b>${_getPlanLabel(payment.plan)}</b>
                </div>
                <div>
                    <span>Amount</span>
                    <b>${_formatRupees(payment.amount)}</b>
                </div>
                <div>
                    <span>Payment Ref</span>
                    <b>${payment.reference}</b>
                </div>
            </div>

            ${isConfigured ? `
                <div class="upi-app-grid">
                    ${appButtons}
                    <a class="upi-app-button generic" href="${_escapeHTML(payment.uri)}" onclick="app.recordUpiLaunch('Any UPI app')" aria-label="Pay with any UPI app">
                        <i class="fa-solid fa-qrcode"></i>
                        <span>Any UPI App</span>
                    </a>
                </div>

                <div class="upi-copy-row">
                    <div>
                        <span class="text-muted">Merchant UPI ID</span>
                        <b>${_escapeHTML(payment.merchantVpa)}</b>
                    </div>
                    <button class="btn" onclick="app.copyUpiId()">Copy</button>
                </div>

                <div class="form-group mt-4">
                    <label for="upi-reference-input">UPI transaction ID after payment</label>
                    <input id="upi-reference-input" class="form-control" placeholder="Enter UPI reference / UTR">
                    <p class="form-hint">Direct UPI payments need manual verification before Premium is activated.</p>
                </div>
                <button class="btn btn-primary btn-block" onclick="app.submitUpiReference()">Submit for Verification</button>
            ` : `
                <div class="upi-warning">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <b>Merchant UPI ID is not configured.</b>
                        <p>Add your real merchant UPI ID before taking live payments.</p>
                    </div>
                </div>
                <div class="upi-app-grid disabled">
                    ${appButtons}
                </div>
            `}
        `;
    },
    closeUpiCheckout: () => {
        const modal = document.getElementById('upi-modal');
        if (modal) modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    },
    recordUpiLaunch: (appName) => {
        const payment = JSON.parse(localStorage.getItem('dm_pending_payment')) || {};
        localStorage.setItem('dm_pending_payment', JSON.stringify({
            ...payment,
            openedWith: appName,
            status: 'opened_upi_app',
            openedAt: new Date().toISOString()
        }));
        app.showToast(`Opening ${appName}...`);
    },
    copyUpiId: async () => {
        if (!_isUpiConfigured()) {
            app.showToast('Set your merchant UPI ID first.', 'warning');
            return;
        }
        try {
            await navigator.clipboard.writeText(UPI_PAYMENT_CONFIG.merchantVpa);
            app.showToast('UPI ID copied.');
        } catch (error) {
            app.showToast('Copy failed. Select the UPI ID manually.', 'warning');
        }
    },
    submitUpiReference: () => {
        const input = document.getElementById('upi-reference-input');
        const upiReference = input ? input.value.trim() : '';
        if (upiReference.length < 6) {
            app.showToast('Enter a valid UPI transaction ID.', 'warning');
            return;
        }

        const payment = JSON.parse(localStorage.getItem('dm_pending_payment')) || {};
        const submittedPayment = {
            ...payment,
            upiReference,
            status: 'pending_verification',
            submittedAt: new Date().toISOString()
        };
        localStorage.setItem('dm_last_upi_payment', JSON.stringify(submittedPayment));
        localStorage.removeItem('dm_pending_payment');
        store.updateUser({ pendingPayment: submittedPayment });
        app.closeUpiCheckout();
        app.updateAuthUI();
        app.renderSettings();
        app.showToast('UPI payment reference saved for verification.');
    },
    navigateToApp: () => {
        const user = store.getUser();
        if (!user) {
            app.navigateToAuth('signup', 'Create your athlete profile to continue.');
            return;
        }
        if (!user.onboardingComplete) {
            document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
            document.getElementById('onboarding-view').classList.add('active');
            return;
        }
        document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
        document.getElementById('app-view').classList.add('active');
        app.navigateAppPage('dashboard');
    },
    navigateToAuth: (mode = 'signup', message = '') => {
        app.setAuthMode(mode);
        document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
        document.getElementById('auth-view').classList.add('active');
        app.setAuthMessage(message);
    },
    navigateToLanding: () => {
        document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
        document.getElementById('landing-view').classList.add('active');
    },
    navigateAppPage: (pageId) => {
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        const activeNav = document.querySelector(`.nav-item[data-target="${pageId}"]`);
        if (activeNav) activeNav.classList.add('active');
        document.querySelectorAll('.app-page').forEach(el => el.classList.remove('active'));
        const page = document.getElementById(pageId);
        if (page) page.classList.add('active');
        if (pageId === 'dashboard') app.renderDashboard();
        if (pageId === 'my-program') app.renderProgram();
        if (pageId === 'workout') app.updateWorkoutTargetDisplay();
        if (pageId === 'recovery') app.loadRecoveryForm();
        if (pageId === 'progress') app.renderProgress();
        if (pageId === 'goals') app.renderGoals();
        if (pageId === 'courses') app.renderCourses();
        if (pageId === 'settings') app.renderSettings();
    },
    setAuthMode: (mode) => {
        app.authMode = mode === 'login' ? 'login' : 'signup';
        const isLogin = app.authMode === 'login';
        document.getElementById('auth-title').textContent = isLogin ? 'Welcome Back' : 'Create an Athlete Profile';
        document.getElementById('auth-subtitle').textContent = isLogin ? 'Log in to continue your training system.' : 'Start with the free plan and upgrade when you need coaching tools.';
        document.getElementById('auth-submit').textContent = isLogin ? 'Log In' : 'Create Profile';
        document.getElementById('name-group').style.display = isLogin ? 'none' : 'block';
        document.getElementById('auth-switch-text').innerHTML = isLogin
            ? 'New to Dynamate? <a href="#" onclick="app.toggleAuthMode(); return false;" class="text-primary">Sign Up</a>'
            : 'Already have an account? <a href="#" onclick="app.toggleAuthMode(); return false;" class="text-primary">Log In</a>';
    },
    toggleAuthMode: () => {
        app.setAuthMode(app.authMode === 'signup' ? 'login' : 'signup');
        app.setAuthMessage('');
    },
    setAuthMessage: (message, type = 'info') => {
        const el = document.getElementById('auth-message');
        if (!el) return;
        el.textContent = message || '';
        el.className = message ? `auth-message ${type}` : 'auth-message hidden';
    },
    handleAuth: () => {
        const email = _normalizeEmail(document.getElementById('auth-email').value);
        const password = document.getElementById('auth-password').value;
        const name = document.getElementById('auth-name').value.trim();
        if (!email || !email.includes('@')) {
            app.setAuthMessage('Enter a valid email address.', 'danger');
            return;
        }
        if (!password || password.length < 6) {
            app.setAuthMessage('Password must be at least 6 characters.', 'danger');
            return;
        }
        if (app.authMode === 'login') {
            const account = store.getAccount(email);
            if (!account) {
                app.navigateToAuth('signup', 'No account found. Create your athlete profile to continue.');
                document.getElementById('auth-email').value = email;
                return;
            }
            if (account.password && account.password !== password) {
                app.setAuthMessage('Password does not match this account.', 'danger');
                return;
            }
            const user = { ...account };
            delete user.password;
            store.setUser(user);
            app.updateAuthUI();
            app.showToast(`Welcome back, ${user.name || 'Athlete'}!`);
            app.navigateToApp();
            return;
        }
        if (name.length < 2) {
            app.setAuthMessage('Enter your athlete name.', 'danger');
            return;
        }
        if (store.getAccount(email)) {
            app.navigateToAuth('login', 'Account already exists. Log in to continue.');
            document.getElementById('auth-email').value = email;
            return;
        }
        const pendingUpiPlan = localStorage.getItem('dm_pending_upi_plan');
        const pendingPlan = pendingUpiPlan ? 'freemium' : (localStorage.getItem('dm_pending_plan') || 'freemium');
        const user = { email, name, plan: pendingPlan, onboardingComplete: false, profile: {} };
        store.saveAccount({ ...user, password });
        store.setUser(user);
        localStorage.removeItem('dm_pending_plan');
        app.updateAuthUI();
        app.showToast(`Welcome, ${name}!`);
        document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
        document.getElementById('onboarding-view').classList.add('active');
    },
    logout: () => {
        localStorage.removeItem('dm_user');
        app.updateAuthUI();
        app.showToast('Logged out successfully!');
        app.navigateToLanding();
    },
    updateAuthUI: () => {
        const user = store.getUser();
        const loginBtn = document.getElementById('nav-login-btn');
        const signupBtn = document.getElementById('nav-signup-btn');
        const logoutBtn = document.getElementById('nav-logout-btn');
        const sidebarProfile = document.getElementById('sidebar-profile');
        const userDisplayName = document.getElementById('user-display-name');
        const goalBadge = document.getElementById('sidebar-goal-badge');
        if (!loginBtn || !signupBtn || !logoutBtn) return;
        if (user) {
            loginBtn.classList.add('hidden');
            signupBtn.classList.add('hidden');
            logoutBtn.classList.remove('hidden');
            if (sidebarProfile) sidebarProfile.classList.remove('hidden');
            if (userDisplayName) userDisplayName.textContent = user.name || 'Athlete';
            if (goalBadge) goalBadge.textContent = _isPremium(user) ? 'Premium' : _getTrainingLabel(store.getProfile().trainingType);
        } else {
            loginBtn.classList.remove('hidden');
            signupBtn.classList.remove('hidden');
            logoutBtn.classList.add('hidden');
            if (sidebarProfile) sidebarProfile.classList.add('hidden');
        }
    },
    handleOnboardingGoalChange: () => {
        const type = document.getElementById('ob-training-type').value;
        const targetBodyweight = document.getElementById('ob-target-bodyweight');
        if (targetBodyweight) targetBodyweight.placeholder = type === 'powerlifting' ? 'Optional weight class target' : 'Optional';
    },
    handleOnboarding: () => {
        const trainingType = document.getElementById('ob-training-type').value;
        const bodyweight = parseFloat(document.getElementById('ob-current-bodyweight').value);
        const experience = document.getElementById('ob-experience').value;
        if (!trainingType || !bodyweight || !experience) {
            app.showToast('Complete the required athlete profile fields.', 'danger');
            return;
        }
        const profile = {
            trainingType,
            bodyweight,
            experience,
            currentLifts: {
                Squat: parseFloat(document.getElementById('ob-current-squat').value) || 0,
                'Bench Press': parseFloat(document.getElementById('ob-current-bench').value) || 0,
                Deadlift: parseFloat(document.getElementById('ob-current-deadlift').value) || 0
            },
            targetLifts: {
                Squat: parseFloat(document.getElementById('ob-target-squat').value) || 0,
                'Bench Press': parseFloat(document.getElementById('ob-target-bench').value) || 0,
                Deadlift: parseFloat(document.getElementById('ob-target-deadlift').value) || 0
            },
            targetBodyweight: parseFloat(document.getElementById('ob-target-bodyweight').value) || null,
            competitionDate: document.getElementById('ob-competition-date').value || '',
            injuries: document.getElementById('ob-injuries').value,
            baselineSleep: document.getElementById('ob-sleep').value,
            baselineFatigue: parseInt(document.getElementById('ob-fatigue').value, 10) || 5
        };
        Object.entries(profile.targetLifts).forEach(([exercise, target]) => {
            if (target > 0) store.upsertGoal(exercise, target, 'profile');
        });
        store.saveRecovery({ sleep: profile.baselineSleep, soreness: 'Low', fatigue: profile.baselineFatigue, pain: profile.injuries });
        if (!store.getBodyMetrics().length) store.saveBodyMetric({ weight: bodyweight });
        const user = store.getUser() || {};
        store.updateUser({ ...user, onboardingComplete: true, profile });
        app.showToast('Athlete profile created.');
        app.updateAuthUI();
        app.navigateToApp();
        const pendingUpiPlan = localStorage.getItem('dm_pending_upi_plan');
        if (pendingUpiPlan) {
            localStorage.removeItem('dm_pending_upi_plan');
            setTimeout(() => app.openUpiCheckout(pendingUpiPlan), 0);
        }
    },
    saveWorkout: () => {
        const exercise = document.getElementById('w-exercise').value;
        const weight = parseFloat(document.getElementById('w-weight').value);
        const sets = parseInt(document.getElementById('w-sets').value, 10);
        const reps = parseInt(document.getElementById('w-reps').value, 10);
        const effort = parseInt(document.getElementById('w-effort').value, 10);
        if (!exercise || !weight || !sets || !reps) {
            app.showToast('Complete exercise, weight, sets, and reps.', 'danger');
            return;
        }
        const previousBest = store.getBestEstimated1RM(exercise);
        const readiness = engine.getReadiness();
        const saved = store.saveWorkout({ exercise, weight, sets, reps, effort, readinessScore: readiness.score });
        const estimate = store.estimate1RM(saved);
        const rec = engine.calculateNextTarget(exercise);
        document.getElementById('res-exercise').textContent = exercise;
        document.getElementById('res-weight').textContent = `${weight} kg`;
        document.getElementById('res-volume').textContent = `${sets} x ${reps}`;
        document.getElementById('res-effort').textContent = `RPE ${effort}`;
        document.getElementById('res-target').textContent = rec ? `${rec.targetWeight} kg` : `${weight} kg`;
        document.getElementById('res-reason').textContent = estimate > previousBest
            ? `Estimated 1RM improved to ${estimate} kg. Update recovery before planning the next session.`
            : (rec ? rec.reason : 'Baseline established. Update recovery to unlock the next target.');
        document.getElementById('workout-form').reset();
        document.getElementById('effort-val').textContent = '5';
        document.getElementById('active-target-display').classList.add('hidden');
        app.showToast(estimate > previousBest ? 'New estimated PR logged.' : 'Workout logged.');
        app.navigateAppPage('workout-result');
    },
    saveRecovery: () => {
        const sleep = document.querySelector('input[name="r-sleep"]:checked').value;
        const soreness = document.querySelector('input[name="r-soreness"]:checked').value;
        const fatigue = document.getElementById('r-fatigue').value;
        const pain = document.getElementById('r-pain').value;
        store.saveRecovery({ sleep, soreness, fatigue, pain });
        app.showToast('Recovery status updated.');
        setTimeout(() => app.navigateAppPage('dashboard'), 700);
    },
    saveGoal: () => {
        const exercise = document.getElementById('g-exercise').value;
        const target = parseFloat(document.getElementById('g-target').value);
        if (!exercise || !target) {
            app.showToast('Please fill all fields.', 'danger');
            return;
        }
        store.saveGoal({ id: Date.now().toString(), exercise, target, source: 'manual' });
        document.getElementById('goal-form').reset();
        app.showToast('Goal saved successfully.');
        app.renderGoals();
    },
    deleteGoal: (id) => {
        store.deleteGoal(id);
        app.showToast('Goal deleted.');
        app.renderGoals();
    },
    updateWorkoutTargetDisplay: () => {
        const exercise = document.getElementById('w-exercise').value;
        const targetDisplay = document.getElementById('active-target-display');
        const targetVal = document.getElementById('target-weight-val');
        if (!exercise || !targetDisplay || !targetVal) return;
        const rec = engine.calculateNextTarget(exercise);
        if (rec) {
            targetVal.textContent = `${rec.targetWeight} kg - ${rec.reason}`;
            targetDisplay.className = `target-alert ${rec.action}`;
            targetDisplay.classList.remove('hidden');
        } else {
            targetDisplay.classList.add('hidden');
        }
    },
    loadRecoveryForm: () => {
        const recovery = store.getRecovery();
        const sleep = document.querySelector(`input[name="r-sleep"][value="${recovery.sleep}"]`);
        const soreness = document.querySelector(`input[name="r-soreness"][value="${recovery.soreness}"]`);
        if (sleep) sleep.checked = true;
        if (soreness) soreness.checked = true;
        const fatigue = document.getElementById('r-fatigue');
        const fatigueVal = document.getElementById('fatigue-val');
        const pain = document.getElementById('r-pain');
        if (fatigue) fatigue.value = recovery.fatigue || 5;
        if (fatigueVal) fatigueVal.textContent = recovery.fatigue || 5;
        if (pain) pain.value = recovery.pain || 'none';
    },
    renderDashboard: () => {
        const container = document.getElementById('dashboard-content');
        const user = store.getUser() || {};
        const profile = store.getProfile();
        const recovery = store.getRecovery();
        const readiness = engine.getReadiness(recovery);
        const workouts = store.getWorkouts();
        const weeklyVolume = store.getWeeklyVolume();
        const thisWeek = workouts.filter(w => _daysAgo(w.date) <= 7).length;
        const goals = engine.getGoalProgress();
        const avgGoal = goals.length ? Math.round(goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length) : 0;
        const insights = engine.getInsights();
        const recExercises = [...new Set([..._getPrimaryExercises(profile.trainingType), ...store.getUniqueExercises()])].slice(0, 5);
        const recommendations = recExercises.map(ex => engine.calculateNextTarget(ex)).filter(Boolean);
        const recentWorkouts = workouts.slice().reverse().slice(0, 4);
        const recsHTML = recommendations.length ? recommendations.map(rec => app._renderRecommendation(rec)).join('') : '<div class="empty-state">Log a baseline workout to receive smart next-session targets.</div>';
        const recentHTML = recentWorkouts.length ? recentWorkouts.map(w => app._renderWorkoutRow(w)).join('') : '<div class="empty-state">No recent workouts.</div>';
        const insightsHTML = insights.map(item => `<li>${item}</li>`).join('');
        container.innerHTML = `
            <div class="athlete-command glass-card primary-border mb-4">
                <div>
                    <div class="plan-kicker">${_getPlanLabel(user.plan || 'freemium')}</div>
                    <h3>${_escapeHTML(user.name || 'Athlete')} - ${_getTrainingLabel(profile.trainingType)}</h3>
                    <p class="text-muted mt-2">Starting point to current state, driven by RPE, recovery, and long-term goals.</p>
                </div>
                <div class="athlete-command-grid">
                    <div><span class="text-muted">Bodyweight</span><b>${profile.bodyweight ? _formatKg(profile.bodyweight) : '-'}</b></div>
                    <div><span class="text-muted">Target BW</span><b>${profile.targetBodyweight ? _formatKg(profile.targetBodyweight) : '-'}</b></div>
                    <div><span class="text-muted">Event Date</span><b>${profile.competitionDate || '-'}</b></div>
                </div>
            </div>
            <div class="dashboard-stats-row">
                <div class="stat-card glass-card"><div class="stat-icon"><i class="fa-solid fa-gauge-high"></i></div><div class="stat-value">${readiness.score}</div><div class="stat-label">Readiness Score</div></div>
                <div class="stat-card glass-card"><div class="stat-icon"><i class="fa-solid fa-calendar-check"></i></div><div class="stat-value">${thisWeek}</div><div class="stat-label">Sessions This Week</div></div>
                <div class="stat-card glass-card"><div class="stat-icon"><i class="fa-solid fa-weight-hanging"></i></div><div class="stat-value">${Math.round(weeklyVolume / 1000)}k</div><div class="stat-label">Weekly Volume</div></div>
                <div class="stat-card glass-card"><div class="stat-icon"><i class="fa-solid fa-bullseye"></i></div><div class="stat-value">${avgGoal}%</div><div class="stat-label">Avg Goal Completion</div></div>
            </div>
            <div class="dashboard-grid">
                <div class="dashboard-card glass-card">
                    <h3><i class="fa-solid fa-battery-half"></i> Training Readiness</h3>
                    <div class="status-indicator"><div class="status-circle ${readiness.className}"></div><span>${readiness.status}</span></div>
                    <div class="mini-stats mt-3">
                        <div><span class="text-muted">Sleep:</span> <b>${recovery.sleep}</b></div>
                        <div><span class="text-muted">Soreness:</span> <b>${recovery.soreness}</b></div>
                        <div><span class="text-muted">Fatigue:</span> <b>${recovery.fatigue || 5}/10</b></div>
                        <div><span class="text-muted">Pain:</span> <b>${recovery.pain || 'none'}</b></div>
                    </div>
                </div>
                <div class="dashboard-card glass-card recommendation-card primary-border">
                    <div class="card-header-flex"><h3><i class="fa-solid fa-brain"></i> Next Session Targets</h3><span class="badge primary">RPE</span></div>
                    <div class="recommendation-list">${recsHTML}</div>
                </div>
                <div class="dashboard-card glass-card list-card">
                    <h3><i class="fa-solid fa-clock-rotate-left"></i> Recent Workouts</h3>
                    <div class="recent-list">${recentHTML}</div>
                </div>
                <div class="dashboard-card glass-card">
                    <h3><i class="fa-solid fa-clipboard-check"></i> Coaching Notes</h3>
                    <ul class="coaching-notes">${insightsHTML}</ul>
                </div>
            </div>`;
    },
    _renderRecommendation: (rec) => {
        const icons = { increase: 'fa-arrow-trend-up', decrease: 'fa-arrow-trend-down', deload: 'fa-shield-heart', maintain: 'fa-minus' };
        const labels = { increase: 'Add load', decrease: 'Reduce load', deload: 'Deload', maintain: 'Maintain' };
        return `
            <div class="rec-item ${rec.action}" onclick="app.fastLog('${rec.exercise}', ${rec.targetWeight})">
                <div style="flex-grow: 1;">
                    <h4>${rec.exercise}</h4>
                    <p><i class="fa-solid ${icons[rec.action] || 'fa-minus'}"></i> ${labels[rec.action] || 'Maintain'} - ${rec.reason}</p>
                </div>
                <div class="rec-target ${rec.action}">${rec.targetWeight}</div>
            </div>`;
    },
    _renderWorkoutRow: (workout) => {
        const d = new Date(workout.date);
        const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const volume = store.calculateVolume(workout);
        const e1rm = store.estimate1RM(workout);
        return `
            <div class="history-item">
                <div class="history-main">
                    <h4>${workout.exercise}</h4>
                    <p>${dateStr} - ${workout.sets} x ${workout.reps} - <span class="text-accent">${volume} kg volume</span></p>
                </div>
                <div class="history-stats"><span class="weight">${workout.weight} kg</span><span class="effort">e1RM ${e1rm} kg</span><span class="effort">RPE ${workout.effort}</span></div>
            </div>`;
    },
    renderProgram: () => {
        const container = document.getElementById('program-content');
        const profile = store.getProfile();
        const programKey = PROGRAM_KEY_BY_TRAINING[profile.trainingType] || 'normal';
        const program = PROGRAMS[programKey] || PROGRAMS.normal;
        let html = `
            <div class="glass-card mb-4 primary-border">
                <div class="plan-kicker">${_getTrainingLabel(profile.trainingType)}</div>
                <h3 class="text-gradient">${program.title}</h3>
                <p class="text-muted mt-2">${program.subtitle}</p>
            </div>`;
        program.days.forEach(day => {
            html += `
                <div class="glass-card mb-4 program-day-card">
                    <div class="program-day-header">
                        <span class="day-badge">${day.day || ''}</span>
                        <h4 class="program-day-title"><i class="fa-solid fa-calendar-day text-primary"></i> ${day.name}</h4>
                    </div>
                    <div class="program-exercise-list mt-3">`;
            day.exercises.forEach(ex => {
                html += `
                    <div class="program-exercise-item">
                        <div class="prog-ex-name">${ex.name}</div>
                        <div class="prog-ex-detail"><span>${ex.sets} sets</span> x <span>${ex.reps}</span></div>
                        <div class="prog-ex-rest"><i class="fa-solid fa-stopwatch"></i> ${ex.rest}</div>
                    </div>`;
            });
            html += '</div></div>';
        });
        container.innerHTML = html;
    },
    renderProgress: () => {
        const filter = document.getElementById('p-exercise-filter').value;
        const summary = document.getElementById('progress-summary');
        const container = document.getElementById('progress-history');
        const workouts = store.getWorkouts();
        const filtered = filter === 'All' ? workouts : workouts.filter(w => w.exercise === filter);
        const avgRpe = filtered.length ? (filtered.reduce((sum, w) => sum + (parseInt(w.effort, 10) || 0), 0) / filtered.length).toFixed(1) : '-';
        const bestE1RM = filtered.length ? Math.max(...filtered.map(w => store.estimate1RM(w))) : 0;
        const volume = filtered.reduce((sum, w) => sum + store.calculateVolume(w), 0);
        if (summary) {
            summary.innerHTML = `
                <div class="dashboard-stats-row">
                    <div class="stat-card glass-card"><div class="stat-icon"><i class="fa-solid fa-chart-line"></i></div><div class="stat-value">${filtered.length}</div><div class="stat-label">Logged Workouts</div></div>
                    <div class="stat-card glass-card"><div class="stat-icon"><i class="fa-solid fa-trophy"></i></div><div class="stat-value">${bestE1RM || '-'}</div><div class="stat-label">Best e1RM</div></div>
                    <div class="stat-card glass-card"><div class="stat-icon"><i class="fa-solid fa-fire-flame-simple"></i></div><div class="stat-value">${avgRpe}</div><div class="stat-label">Average RPE</div></div>
                    <div class="stat-card glass-card"><div class="stat-icon"><i class="fa-solid fa-weight-hanging"></i></div><div class="stat-value">${Math.round(volume / 1000)}k</div><div class="stat-label">Total Volume</div></div>
                </div>`;
        }
        if (!filtered.length) {
            container.innerHTML = '<div class="empty-state">No workout data available yet.</div>';
            return;
        }
        container.innerHTML = filtered.slice().reverse().map(w => app._renderWorkoutRow(w)).join('');
    },
    renderGoals: () => {
        const container = document.getElementById('goals-list');
        const goals = engine.getGoalProgress();
        if (!goals.length) {
            container.innerHTML = '<div class="empty-state glass-card">No goals set yet. Set a lift target above.</div>';
            return;
        }
        container.innerHTML = goals.map(g => `
            <div class="glass-card mb-4" style="position: relative; overflow: hidden; border-color: ${g.isCompleted ? 'var(--primary)' : 'var(--border)'}">
                ${g.isCompleted ? '<div class="completion-ribbon">COMPLETED <i class="fa-solid fa-check"></i></div>' : ''}
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h4 style="margin:0; font-size: 1.25rem;">${g.exercise}</h4>
                    <button class="btn-icon" onclick="app.deleteGoal('${g.id}')" title="Delete Goal"><i class="fa-solid fa-trash text-muted"></i></button>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.95rem;">
                    <span class="text-muted">Current e1RM: ${g.current ? g.current + ' kg' : 'Not tracked'}</span>
                    <span class="text-primary font-weight-bold">Target: ${g.target} kg</span>
                </div>
                <div class="progress-track"><div style="width: ${g.progress}%;"></div></div>
                <div class="text-right text-muted mt-2" style="font-size: 0.85rem;">${g.progress}% Complete</div>
            </div>`).join('');
    },
    renderCourses: () => {
        const container = document.getElementById('courses-content');
        if (!_isPremium()) {
            container.innerHTML = `
                <div class="glass-card primary-border locked-card">
                    <h3><i class="fa-solid fa-lock text-primary"></i> Premium Courses</h3>
                    <p class="text-muted mt-2">Courses are reserved for Premium athletes and coaches. Freemium keeps the core training log, RPE, recovery, and basic progression tools.</p>
                    <button class="btn btn-primary mt-4" onclick="app.selectPlan('premium_yearly')">Upgrade to Premium</button>
                </div>`;
            return;
        }
        container.innerHTML = `<div class="course-grid">${COURSE_LIBRARY.map(course => `
            <div class="glass-card course-card">
                <div class="plan-kicker">${course.level}</div>
                <h3>${course.title}</h3>
                <p class="text-muted mt-2">${course.description}</p>
                <button class="btn btn-block mt-4">Start Course</button>
            </div>`).join('')}</div>`;
    },
    renderSettings: () => {
        const container = document.getElementById('settings-content');
        const user = store.getUser() || {};
        const profile = store.getProfile();
        const currentTargets = Object.entries(profile.targetLifts || {}).filter(([, target]) => target > 0);
        const pendingPayment = user.pendingPayment && user.pendingPayment.status === 'pending_verification' ? user.pendingPayment : null;
        container.innerHTML = `
            <div class="dashboard-grid">
                <div class="glass-card dashboard-card">
                    <h3><i class="fa-solid fa-user"></i> Athlete Profile</h3>
                    <div class="settings-list">
                        <div><span>Name</span><b>${_escapeHTML(user.name || 'Athlete')}</b></div>
                        <div><span>Training Type</span><b>${_getTrainingLabel(profile.trainingType)}</b></div>
                        <div><span>Experience</span><b>${profile.experience}</b></div>
                        <div><span>Bodyweight</span><b>${profile.bodyweight ? _formatKg(profile.bodyweight) : '-'}</b></div>
                        <div><span>Competition Date</span><b>${profile.competitionDate || '-'}</b></div>
                    </div>
                </div>
                <div class="glass-card dashboard-card">
                    <h3><i class="fa-solid fa-credit-card"></i> Subscription</h3>
                    <p class="text-muted">Current plan</p>
                    <div class="badge primary mt-2" style="width: fit-content;">${_getPlanLabel(user.plan || 'freemium')}</div>
                    ${pendingPayment ? `
                        <div class="payment-status mt-4">
                            <span class="plan-kicker">Pending UPI Verification</span>
                            <b>${_getPlanLabel(pendingPayment.plan)} - ${_formatRupees(pendingPayment.amount)}</b>
                            <p class="text-muted">Ref: ${_escapeHTML(pendingPayment.reference)} / UTR: ${_escapeHTML(pendingPayment.upiReference)}</p>
                        </div>
                    ` : ''}
                    <div class="settings-actions mt-4">
                        <button class="btn btn-primary" onclick="app.openUpiCheckout('premium_monthly')">Premium Monthly</button>
                        <button class="btn" onclick="app.openUpiCheckout('premium_yearly')">Premium Yearly</button>
                        <button class="btn" onclick="app.selectPlan('freemium')">Freemium</button>
                    </div>
                </div>
                <div class="glass-card dashboard-card">
                    <h3><i class="fa-solid fa-bullseye"></i> Stored Targets</h3>
                    <div class="settings-list">
                        ${currentTargets.length ? currentTargets.map(([exercise, target]) => `<div><span>${exercise}</span><b>${target} kg</b></div>`).join('') : '<p class="text-muted">No profile targets stored.</p>'}
                    </div>
                </div>
            </div>`;
    },
    fastLog: (exercise, targetWeight) => {
        app.navigateAppPage('workout');
        document.getElementById('w-exercise').value = exercise;
        document.getElementById('w-weight').value = targetWeight;
        app.updateWorkoutTargetDisplay();
    },
    showToast: (message, type = 'primary') => {
        const toast = document.getElementById('toast');
        const msgEl = document.getElementById('toast-message');
        msgEl.textContent = message;
        toast.style.borderColor = `var(--${type})`;
        toast.querySelector('i').style.color = `var(--${type})`;
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 3000);
    }
};

document.addEventListener('DOMContentLoaded', app.init);
