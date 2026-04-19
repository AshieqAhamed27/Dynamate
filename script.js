/**
 * Dynamate - Intelligent Training System
 * Core Application Logic
 */

// ==========================================
// WORKOUT PROGRAM DATA
// ==========================================
const PROGRAMS = {
    normal: {
        title: 'General Fitness Program',
        subtitle: 'A balanced full-body approach for health and strength.',
        days: [
            {
                name: 'Day 1 — Upper Body',
                exercises: [
                    { name: 'Bench Press', sets: 3, reps: '8-10', rest: '90s' },
                    { name: 'Barbell Row', sets: 3, reps: '8-10', rest: '90s' },
                    { name: 'Overhead Press', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Dumbbell Curl', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Tricep Pushdown', sets: 3, reps: '12-15', rest: '60s' },
                ]
            },
            {
                name: 'Day 2 — Lower Body',
                exercises: [
                    { name: 'Squat', sets: 4, reps: '6-8', rest: '2min' },
                    { name: 'Romanian Deadlift', sets: 3, reps: '8-10', rest: '90s' },
                    { name: 'Leg Press', sets: 3, reps: '10-12', rest: '90s' },
                    { name: 'Leg Curl', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Calf Raises', sets: 4, reps: '15-20', rest: '45s' },
                ]
            },
            {
                name: 'Day 3 — Full Body / Active Recovery',
                exercises: [
                    { name: 'Deadlift', sets: 3, reps: '5', rest: '3min' },
                    { name: 'Incline Dumbbell Press', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Pull-ups', sets: 3, reps: 'AMRAP', rest: '90s' },
                    { name: 'Plank', sets: 3, reps: '45-60s', rest: '45s' },
                    { name: 'Face Pulls', sets: 3, reps: '15-20', rest: '45s' },
                ]
            },
        ]
    },
    bodybuilding: {
        title: 'Bodybuilding Split (PPL)',
        subtitle: 'Push/Pull/Legs hypertrophy focus for stage-ready physique.',
        days: [
            {
                name: 'Push Day',
                exercises: [
                    { name: 'Bench Press', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Incline Dumbbell Press', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Overhead Press', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Cable Flyes', sets: 3, reps: '12-15', rest: '45s' },
                    { name: 'Lateral Raises', sets: 4, reps: '15-20', rest: '45s' },
                    { name: 'Tricep Overhead Extension', sets: 3, reps: '12-15', rest: '45s' },
                ]
            },
            {
                name: 'Pull Day',
                exercises: [
                    { name: 'Barbell Row', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Lat Pulldown', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Seated Cable Row', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Face Pulls', sets: 3, reps: '15-20', rest: '45s' },
                    { name: 'Barbell Curl', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Hammer Curl', sets: 3, reps: '12-15', rest: '45s' },
                ]
            },
            {
                name: 'Legs Day',
                exercises: [
                    { name: 'Squat', sets: 4, reps: '6-8', rest: '2min' },
                    { name: 'Leg Press', sets: 4, reps: '10-12', rest: '90s' },
                    { name: 'Romanian Deadlift', sets: 3, reps: '8-10', rest: '90s' },
                    { name: 'Leg Extension', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Leg Curl', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Calf Raises', sets: 4, reps: '15-20', rest: '45s' },
                ]
            },
        ]
    },
    classic_physique: {
        title: 'Classic Physique Program',
        subtitle: 'Balanced aesthetics with emphasis on V-taper, arms, and posing.',
        days: [
            {
                name: 'Day 1 — Chest & Back',
                exercises: [
                    { name: 'Bench Press', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Barbell Row', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Incline Dumbbell Press', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Lat Pulldown', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Dumbbell Pullover', sets: 3, reps: '12-15', rest: '60s' },
                ]
            },
            {
                name: 'Day 2 — Shoulders & Arms',
                exercises: [
                    { name: 'Overhead Press', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Lateral Raises', sets: 4, reps: '15-20', rest: '45s' },
                    { name: 'Barbell Curl', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Tricep Dips', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Concentration Curl', sets: 3, reps: '12-15', rest: '45s' },
                ]
            },
            {
                name: 'Day 3 — Legs & Abs',
                exercises: [
                    { name: 'Squat', sets: 4, reps: '6-8', rest: '2min' },
                    { name: 'Leg Press', sets: 3, reps: '10-12', rest: '90s' },
                    { name: 'Romanian Deadlift', sets: 3, reps: '8-10', rest: '90s' },
                    { name: 'Leg Curl', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Calf Raises', sets: 4, reps: '15-20', rest: '45s' },
                    { name: 'Hanging Leg Raise', sets: 3, reps: '15-20', rest: '45s' },
                ]
            },
        ]
    },
    mens_physique: {
        title: "Men's Physique Program",
        subtitle: 'Upper body focus with sculpted delts, no heavy legs needed.',
        days: [
            {
                name: 'Day 1 — Shoulders & Arms',
                exercises: [
                    { name: 'Overhead Press', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Lateral Raises', sets: 5, reps: '15-20', rest: '45s' },
                    { name: 'Rear Delt Flyes', sets: 4, reps: '15-20', rest: '45s' },
                    { name: 'Barbell Curl', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Tricep Pushdown', sets: 3, reps: '12-15', rest: '60s' },
                ]
            },
            {
                name: 'Day 2 — Chest & Back',
                exercises: [
                    { name: 'Incline Dumbbell Press', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Cable Flyes', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Lat Pulldown', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Seated Cable Row', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Face Pulls', sets: 3, reps: '15-20', rest: '45s' },
                ]
            },
            {
                name: 'Day 3 — Light Legs & Core',
                exercises: [
                    { name: 'Leg Press', sets: 3, reps: '12-15', rest: '90s' },
                    { name: 'Leg Curl', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Walking Lunges', sets: 3, reps: '16 steps', rest: '60s' },
                    { name: 'Calf Raises', sets: 4, reps: '15-20', rest: '45s' },
                    { name: 'Plank', sets: 3, reps: '60s', rest: '45s' },
                ]
            },
        ]
    },
    powerlifting: {
        title: 'Powerlifting Program (SBD)',
        subtitle: 'Squat, Bench, Deadlift focused with heavy singles and volume blocks.',
        days: [
            {
                name: 'Day 1 — Heavy Squat',
                exercises: [
                    { name: 'Squat', sets: 5, reps: '3-5', rest: '3-5min' },
                    { name: 'Pause Squat', sets: 3, reps: '3', rest: '3min' },
                    { name: 'Leg Press', sets: 3, reps: '8-10', rest: '2min' },
                    { name: 'Good Mornings', sets: 3, reps: '8-10', rest: '90s' },
                ]
            },
            {
                name: 'Day 2 — Heavy Bench',
                exercises: [
                    { name: 'Bench Press', sets: 5, reps: '3-5', rest: '3-5min' },
                    { name: 'Close-Grip Bench', sets: 3, reps: '6-8', rest: '2min' },
                    { name: 'Overhead Press', sets: 3, reps: '6-8', rest: '2min' },
                    { name: 'Dumbbell Rows', sets: 3, reps: '8-10', rest: '90s' },
                ]
            },
            {
                name: 'Day 3 — Heavy Deadlift',
                exercises: [
                    { name: 'Deadlift', sets: 5, reps: '2-3', rest: '3-5min' },
                    { name: 'Deficit Deadlift', sets: 3, reps: '3-5', rest: '3min' },
                    { name: 'Barbell Row', sets: 3, reps: '6-8', rest: '2min' },
                    { name: 'Lat Pulldown', sets: 3, reps: '10-12', rest: '90s' },
                ]
            },
        ]
    },
    deadlift: {
        title: 'Deadlift Specialist Program',
        subtitle: 'Maximize your pulling power with deadlift-focused training.',
        days: [
            {
                name: 'Day 1 — Heavy Deadlift',
                exercises: [
                    { name: 'Deadlift', sets: 6, reps: '1-3', rest: '4-5min' },
                    { name: 'Deficit Deadlift', sets: 3, reps: '3-5', rest: '3min' },
                    { name: 'Barbell Row', sets: 4, reps: '6-8', rest: '2min' },
                ]
            },
            {
                name: 'Day 2 — Accessories',
                exercises: [
                    { name: 'Romanian Deadlift', sets: 4, reps: '6-8', rest: '2min' },
                    { name: 'Leg Press', sets: 3, reps: '10-12', rest: '90s' },
                    { name: 'Good Mornings', sets: 3, reps: '8-10', rest: '90s' },
                    { name: 'Pull-ups', sets: 3, reps: 'AMRAP', rest: '90s' },
                    { name: 'Farmer Walks', sets: 3, reps: '40m', rest: '2min' },
                ]
            },
            {
                name: 'Day 3 — Volume Deadlift',
                exercises: [
                    { name: 'Deadlift (70%)', sets: 5, reps: '5', rest: '2min' },
                    { name: 'Paused Deadlift', sets: 3, reps: '3', rest: '2min' },
                    { name: 'Hip Thrust', sets: 3, reps: '10-12', rest: '90s' },
                    { name: 'Lat Pulldown', sets: 3, reps: '10-12', rest: '60s' },
                ]
            },
        ]
    },
    strongman: {
        title: 'Strongman Training Program',
        subtitle: 'Brutal, event-based training for atlas stones, yoke, and more.',
        days: [
            {
                name: 'Day 1 — Max Effort Upper',
                exercises: [
                    { name: 'Overhead Press (Log/Axle)', sets: 5, reps: '3-5', rest: '3min' },
                    { name: 'Bench Press', sets: 4, reps: '5-8', rest: '2min' },
                    { name: 'Barbell Row', sets: 4, reps: '6-8', rest: '2min' },
                    { name: 'Farmer Walks', sets: 4, reps: '50m', rest: '2min' },
                ]
            },
            {
                name: 'Day 2 — Max Effort Lower',
                exercises: [
                    { name: 'Squat', sets: 5, reps: '3-5', rest: '3-5min' },
                    { name: 'Deadlift', sets: 5, reps: '2-3', rest: '3-5min' },
                    { name: 'Yoke Walk', sets: 4, reps: '30m', rest: '3min' },
                    { name: 'Leg Press', sets: 3, reps: '10-12', rest: '2min' },
                ]
            },
            {
                name: 'Day 3 — Events Day',
                exercises: [
                    { name: 'Atlas Stones', sets: 5, reps: '1-3', rest: '3min' },
                    { name: 'Tire Flips', sets: 5, reps: '3-5', rest: '2min' },
                    { name: 'Sandbag Carry', sets: 4, reps: '40m', rest: '2min' },
                    { name: 'Grip Training', sets: 3, reps: '30-60s', rest: '90s' },
                ]
            },
        ]
    },
    crossfit: {
        title: 'CrossFit Competition Prep',
        subtitle: 'WOD-ready programming with strength, cardio, and skill work.',
        days: [
            {
                name: 'Day 1 — Strength + Metcon',
                exercises: [
                    { name: 'Back Squat', sets: 5, reps: '3', rest: '2-3min' },
                    { name: 'WOD: 21-15-9 Thrusters & Pull-ups', sets: 1, reps: 'For Time', rest: '-' },
                    { name: 'Ring Muscle-ups', sets: 4, reps: '3-5', rest: '2min' },
                ]
            },
            {
                name: 'Day 2 — Olympic Lifts + Cardio',
                exercises: [
                    { name: 'Clean & Jerk', sets: 5, reps: '2', rest: '2-3min' },
                    { name: 'Snatch', sets: 5, reps: '2', rest: '2-3min' },
                    { name: 'WOD: 5 Rounds (200m Run, 15 Burpees)', sets: 1, reps: 'For Time', rest: '-' },
                ]
            },
            {
                name: 'Day 3 — Engine & Bodyweight',
                exercises: [
                    { name: 'Rowing Intervals', sets: 8, reps: '500m', rest: '90s' },
                    { name: 'Handstand Walk', sets: 4, reps: '15m', rest: '2min' },
                    { name: 'WOD: AMRAP 12 min (10 Box Jumps, 10 Toes-to-Bar)', sets: 1, reps: 'AMRAP', rest: '-' },
                ]
            },
        ]
    },
    olympic_weightlifting: {
        title: 'Olympic Weightlifting Program',
        subtitle: 'Snatch and Clean & Jerk periodized training.',
        days: [
            {
                name: 'Day 1 — Snatch Focus',
                exercises: [
                    { name: 'Snatch', sets: 6, reps: '2', rest: '2-3min' },
                    { name: 'Snatch Pull', sets: 3, reps: '3', rest: '2min' },
                    { name: 'Overhead Squat', sets: 3, reps: '3', rest: '2min' },
                    { name: 'Back Squat', sets: 4, reps: '3', rest: '3min' },
                ]
            },
            {
                name: 'Day 2 — Clean & Jerk Focus',
                exercises: [
                    { name: 'Clean & Jerk', sets: 6, reps: '1+1', rest: '2-3min' },
                    { name: 'Clean Pull', sets: 3, reps: '3', rest: '2min' },
                    { name: 'Front Squat', sets: 4, reps: '3', rest: '3min' },
                    { name: 'Push Press', sets: 3, reps: '5', rest: '2min' },
                ]
            },
            {
                name: 'Day 3 — Technique + Strength',
                exercises: [
                    { name: 'Power Snatch', sets: 5, reps: '3', rest: '2min' },
                    { name: 'Power Clean', sets: 5, reps: '2', rest: '2min' },
                    { name: 'Deadlift', sets: 3, reps: '5', rest: '3min' },
                    { name: 'Good Mornings', sets: 3, reps: '8-10', rest: '90s' },
                ]
            },
        ]
    },
    arm_wrestling: {
        title: 'Arm Wrestling Prep Program',
        subtitle: 'Grip, wrist, and pulling chain dominance.',
        days: [
            {
                name: 'Day 1 — Table Training & Pulling',
                exercises: [
                    { name: 'Table Sparring', sets: 6, reps: '30s bouts', rest: '2min' },
                    { name: 'Wrist Curl (Pronation)', sets: 4, reps: '12-15', rest: '60s' },
                    { name: 'Wrist Curl (Supination)', sets: 4, reps: '12-15', rest: '60s' },
                    { name: 'Hammer Curl', sets: 4, reps: '8-10', rest: '90s' },
                ]
            },
            {
                name: 'Day 2 — Back & Biceps Power',
                exercises: [
                    { name: 'Barbell Row', sets: 4, reps: '6-8', rest: '2min' },
                    { name: 'Pull-ups (Weighted)', sets: 4, reps: '5-8', rest: '2min' },
                    { name: 'Preacher Curl', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Grip Trainer (Crush)', sets: 5, reps: '15-20', rest: '60s' },
                ]
            },
            {
                name: 'Day 3 — Endurance & Conditioning',
                exercises: [
                    { name: 'Rope Climbing', sets: 4, reps: '1 rep', rest: '2min' },
                    { name: 'Farmer Walks', sets: 3, reps: '40m', rest: '2min' },
                    { name: 'Finger Curls', sets: 4, reps: '15-20', rest: '60s' },
                    { name: 'Wrist Roller', sets: 3, reps: '3 rolls', rest: '90s' },
                ]
            },
        ]
    },
    other: {
        title: 'General Competition Prep',
        subtitle: 'A well-rounded strength & conditioning base for any sport.',
        days: [
            {
                name: 'Day 1 — Strength',
                exercises: [
                    { name: 'Squat', sets: 4, reps: '5', rest: '3min' },
                    { name: 'Bench Press', sets: 4, reps: '5', rest: '3min' },
                    { name: 'Barbell Row', sets: 4, reps: '6-8', rest: '2min' },
                ]
            },
            {
                name: 'Day 2 — Power & Explosiveness',
                exercises: [
                    { name: 'Deadlift', sets: 4, reps: '3', rest: '3min' },
                    { name: 'Overhead Press', sets: 4, reps: '5', rest: '2min' },
                    { name: 'Box Jumps', sets: 4, reps: '5', rest: '90s' },
                    { name: 'Pull-ups', sets: 3, reps: 'AMRAP', rest: '90s' },
                ]
            },
            {
                name: 'Day 3 — Conditioning',
                exercises: [
                    { name: 'Rowing Intervals', sets: 6, reps: '500m', rest: '90s' },
                    { name: 'Farmer Walks', sets: 4, reps: '40m', rest: '2min' },
                    { name: 'Plank', sets: 3, reps: '60s', rest: '45s' },
                    { name: 'Burpees', sets: 3, reps: '15', rest: '60s' },
                ]
            },
        ]
    }
};

// ==========================================
// STORE (Local Storage Wrapper)
// ==========================================
const store = {
    getUser: () => JSON.parse(localStorage.getItem('dm_user')),
    setUser: (user) => localStorage.setItem('dm_user', JSON.stringify(user)),
    getWorkouts: () => JSON.parse(localStorage.getItem('dm_workouts')) || [],
    
    saveWorkout: (workout) => {
        const workouts = store.getWorkouts();
        workout.id = Date.now().toString();
        workout.date = new Date().toISOString();
        workouts.push(workout);
        localStorage.setItem('dm_workouts', JSON.stringify(workouts));
        return workout;
    },

    getRecovery: () => JSON.parse(localStorage.getItem('dm_recovery')) || { sleep: 'Average', soreness: 'Low' },
    
    saveRecovery: (recovery) => {
        localStorage.setItem('dm_recovery', JSON.stringify(recovery));
        return recovery;
    },

    getLastWorkout: (exercise) => {
        const workouts = store.getWorkouts();
        if (!exercise) return workouts.length ? workouts[workouts.length - 1] : null;
        
        const filtered = workouts.filter(w => w.exercise === exercise);
        return filtered.length ? filtered[filtered.length - 1] : null;
    },

    getUniqueExercises: () => {
        const workouts = store.getWorkouts();
        return [...new Set(workouts.map(w => w.exercise))];
    },

    getGoals: () => JSON.parse(localStorage.getItem('dm_goals')) || [],
    
    saveGoal: (goal) => {
        const goals = store.getGoals();
        goals.push(goal);
        localStorage.setItem('dm_goals', JSON.stringify(goals));
    },
    
    deleteGoal: (id) => {
        let goals = store.getGoals();
        goals = goals.filter(g => g.id !== id);
        localStorage.setItem('dm_goals', JSON.stringify(goals));
    },

    getBodyMetrics: () => JSON.parse(localStorage.getItem('dm_body')) || [],
    
    saveBodyMetric: (metric) => {
        const metrics = store.getBodyMetrics();
        metric.id = Date.now().toString();
        metric.date = new Date().toISOString();
        metrics.push(metric);
        localStorage.setItem('dm_body', JSON.stringify(metrics));
    },

    // Diet / Meals
    getMeals: () => JSON.parse(localStorage.getItem('dm_meals')) || [],
    
    saveMeal: (meal) => {
        const meals = store.getMeals();
        meal.id = Date.now().toString();
        meal.date = new Date().toISOString();
        meals.push(meal);
        localStorage.setItem('dm_meals', JSON.stringify(meals));
        return meal;
    },

    deleteMeal: (id) => {
        let meals = store.getMeals();
        meals = meals.filter(m => m.id !== id);
        localStorage.setItem('dm_meals', JSON.stringify(meals));
    },

    getTodayMeals: () => {
        const meals = store.getMeals();
        const today = new Date().toDateString();
        return meals.filter(m => new Date(m.date).toDateString() === today);
    }
};

// ==========================================
// RECOMMENDATION ENGINE
// ==========================================
const engine = {
    // Calculates the recommended next session weight for an exercise
    calculateNextTarget: (exercise) => {
        const lastWorkout = store.getLastWorkout(exercise);
        if (!lastWorkout) return null; // No history

        const recovery = store.getRecovery();
        const effort = parseInt(lastWorkout.effort);
        const currentWeight = parseFloat(lastWorkout.weight);

        let action = 'maintain'; // maintain, increase, decrease
        let targetWeight = currentWeight;
        let percentage = 0;

        // Core Logic
        if (effort <= 5 && recovery.sleep === 'Good' && recovery.soreness === 'Low') {
            action = 'increase';
            percentage = 0.05; // 5% increase
        } else if (effort >= 8 || recovery.soreness === 'High') {
            action = 'decrease';
            percentage = 0.05; // 5% decrease
        } else {
            action = 'maintain';
        }

        // Apply math and round to nearest 2.5 kg (standard micro-plate)
        if (action === 'increase') {
            targetWeight = currentWeight * (1 + percentage);
        } else if (action === 'decrease') {
            targetWeight = currentWeight * (1 - percentage);
        }

        // Rounding to nearest 2.5
        targetWeight = Math.round(targetWeight / 2.5) * 2.5;

        // Edge case: if rounded weight equals current weight but action was not maintain
        if (action === 'increase' && targetWeight <= currentWeight) {
             targetWeight = currentWeight + 2.5;
        }
        if (action === 'decrease' && targetWeight >= currentWeight) {
             targetWeight = currentWeight - 2.5;
        }

        return {
            exercise: exercise,
            currentWeight,
            targetWeight,
            action,
            reason: _getReason(action, effort, recovery)
        };
    }
};

// Helper to formulate human-readable reasoning
function _getReason(action, effort, recovery) {
    if (action === 'increase') return `Low effort (${effort}/10) last time. Good recovery.`;
    if (action === 'decrease') return (recovery.soreness === 'High') ? `High soreness detected. Deload.` : `High effort (${effort}/10) last time. Need recovery.`;
    return `Solid effort. Maintain to build volume.`;
}

// Helper: get user goal
function _getUserGoal() {
    const user = store.getUser();
    return user && user.profile ? user.profile.goal : 'normal';
}

function _getCompType() {
    const user = store.getUser();
    return user && user.profile && user.profile.compType ? user.profile.compType : 'other';
}

function _getCompLabel(type) {
    const labels = {
        bodybuilding: 'Bodybuilding',
        classic_physique: 'Classic Physique',
        mens_physique: "Men's Physique",
        powerlifting: 'Powerlifting',
        deadlift: 'Deadlift Only',
        strongman: 'Strongman',
        crossfit: 'CrossFit',
        olympic_weightlifting: 'Olympic Weightlifting',
        arm_wrestling: 'Arm Wrestling',
        other: 'General Competition'
    };
    return labels[type] || type;
}

// ==========================================
// APP CONTROLLER & UI
// ==========================================
const app = {
    init: () => {
        // Initialize Date
        const dateDisplay = document.getElementById('date-display');
        if (dateDisplay) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateDisplay.textContent = new Date().toLocaleDateString('en-US', options);
        }

        // Setup Event Listeners
        document.querySelectorAll('.nav-item').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                // Ensure desktop click works correctly whether inner element or outer element is clicked
                const target = el.closest('a').getAttribute('data-target');
                if (target) app.navigateAppPage(target);
            });
        });

        // Initialize values
        app.updateAuthUI();
        app.loadRecoveryForm();
        app.renderDashboard();
    },

    // Navigation Methods
    navigateToApp: () => {
        const user = store.getUser();
        if (!user) {
             app.navigateToAuth();
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

    navigateToAuth: (mode = 'signup') => {
        app.authMode = mode === 'login' ? 'signup' : 'login';
        app.toggleAuthMode();
        document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
        document.getElementById('auth-view').classList.add('active');
    },

    navigateToLanding: () => {
        document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
        document.getElementById('landing-view').classList.add('active');
    },

    navigateAppPage: (pageId) => {
        // Update nav UI
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        const activeNav = document.querySelector(`.nav-item[data-target="${pageId}"]`);
        if (activeNav) activeNav.classList.add('active');

        // Update pages
        document.querySelectorAll('.app-page').forEach(el => el.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');

        // Page specific logic
        if (pageId === 'dashboard') app.renderDashboard();
        if (pageId === 'my-program') app.renderProgram();
        if (pageId === 'progress') app.renderProgress();
        if (pageId === 'goals') app.renderGoals();
        if (pageId === 'body') app.renderBodyHistory();
        if (pageId === 'diet') app.renderDietPlan();
        if (pageId === 'workout') {
            app.updateWorkoutTargetDisplay();
        }
    },

    // Actions
    saveWorkout: () => {
        const exercise = document.getElementById('w-exercise').value;
        const weight = document.getElementById('w-weight').value;
        const sets = document.getElementById('w-sets').value;
        const reps = document.getElementById('w-reps').value;
        const effort = document.getElementById('w-effort').value;

        if (!exercise) {
            app.showToast('Please select an exercise.', 'danger');
            return;
        }

        store.saveWorkout({ exercise, weight, sets, reps, effort });
        
        // Show result
        document.getElementById('res-exercise').textContent = exercise;
        document.getElementById('res-weight').textContent = `${weight} kg`;
        document.getElementById('res-volume').textContent = `${sets} x ${reps}`;
        document.getElementById('res-effort').textContent = `RPE ${effort}`;
        
        const rec = engine.calculateNextTarget(exercise);
        if (rec) {
             document.getElementById('res-target').textContent = `${rec.targetWeight} kg`;
             document.getElementById('res-reason').textContent = rec.reason;
        } else {
             document.getElementById('res-target').textContent = `${weight} kg`;
             document.getElementById('res-reason').textContent = "Baseline established.";
        }
        
        // Reset form
        document.getElementById('workout-form').reset();
        document.getElementById('effort-val').textContent = "5";
        document.getElementById('active-target-display').classList.add('hidden');

        app.showToast('Workout successfully logged!');
        
        app.navigateAppPage('workout-result');
    },

    authMode: 'signup',
    
    toggleAuthMode: () => {
         app.authMode = app.authMode === 'signup' ? 'login' : 'signup';
         const isLogin = app.authMode === 'login';
         document.getElementById('auth-title').textContent = isLogin ? 'Welcome Back' : 'Create an Account';
         document.getElementById('auth-subtitle').textContent = isLogin ? 'Log in to continue your journey.' : 'Join us to start optimizing your training.';
         document.getElementById('auth-submit').textContent = isLogin ? 'Log In' : 'Sign Up';
         document.getElementById('name-group').style.display = isLogin ? 'none' : 'block';
         document.getElementById('auth-switch-text').innerHTML = isLogin ? 
             'New to Dynamate? <a href="#" onclick="app.toggleAuthMode(); return false;" class="text-primary">Sign Up</a>' :
             'Already have an account? <a href="#" onclick="app.toggleAuthMode(); return false;" class="text-primary">Log In</a>';
    },

    handleAuth: () => {
         const email = document.getElementById('auth-email').value;
         let name = document.getElementById('auth-name').value;
         let onboardingComplete = false;
         let profile = {};
         
         if (app.authMode === 'login') {
             const existingUser = store.getUser();
             if (existingUser && existingUser.email === email) {
                 name = existingUser.name || email.split('@')[0];
                 onboardingComplete = existingUser.onboardingComplete || false;
                 profile = existingUser.profile || {};
             } else {
                 name = email.split('@')[0];
             }
         }
         
         store.setUser({ email, name, onboardingComplete, profile });
         app.updateAuthUI();
         app.showToast(`Welcome, ${name}!`);
         
         if (!onboardingComplete) {
             document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
             document.getElementById('onboarding-view').classList.add('active');
         } else {
             document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
             document.getElementById('app-view').classList.add('active');
             app.navigateAppPage('dashboard');
         }
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
        
        if (loginBtn && signupBtn && logoutBtn) {
            if (user) {
                loginBtn.classList.add('hidden');
                signupBtn.classList.add('hidden');
                logoutBtn.classList.remove('hidden');
                
                if (sidebarProfile) sidebarProfile.classList.remove('hidden');
                if (userDisplayName) userDisplayName.textContent = user.name || 'Athlete';
                if (goalBadge && user.profile) {
                    if (user.profile.goal === 'competition') {
                        goalBadge.textContent = _getCompLabel(_getCompType());
                    } else {
                        goalBadge.textContent = 'Fitness';
                    }
                }
            } else {
                loginBtn.classList.remove('hidden');
                signupBtn.classList.remove('hidden');
                logoutBtn.classList.add('hidden');
                
                if (sidebarProfile) sidebarProfile.classList.add('hidden');
            }
        }
    },

    handleOnboardingGoalChange: () => {
        const goal = document.getElementById('ob-goal').value;
        const compFields = document.getElementById('ob-competition-fields');
        if (goal === 'competition') {
            compFields.classList.remove('hidden');
            document.getElementById('ob-weight').required = true;
            document.getElementById('ob-height').required = true;
            document.getElementById('ob-comp-type').required = true;
        } else {
            compFields.classList.add('hidden');
            document.getElementById('ob-weight').required = false;
            document.getElementById('ob-height').required = false;
            document.getElementById('ob-comp-type').required = false;
        }
    },

    handleOnboarding: () => {
        const goal = document.getElementById('ob-goal').value;
        let profile = { goal };
        
        if (goal === 'competition') {
            profile.weight = document.getElementById('ob-weight').value;
            profile.height = document.getElementById('ob-height').value;
            profile.compType = document.getElementById('ob-comp-type').value;
        }

        const user = store.getUser();
        user.onboardingComplete = true;
        user.profile = profile;
        store.setUser(user);
        
        // Also update diet preference to match their goal
        localStorage.setItem('dm_diet_pref', goal);

        // If they gave bodyweight, add it to body metrics history
        if (profile.weight && store.getBodyMetrics().length === 0) {
            store.saveBodyMetric({ weight: profile.weight, fat: "" });
        }

        app.showToast('Setup complete!');
        app.updateAuthUI();
        app.navigateToApp();
    },

    saveRecovery: () => {
        const sleep = document.querySelector('input[name="r-sleep"]:checked').value;
        const soreness = document.querySelector('input[name="r-soreness"]:checked').value;

        store.saveRecovery({ sleep, soreness });
        app.showToast('Recovery status updated!');
        
        setTimeout(() => app.navigateAppPage('dashboard'), 1000);
    },

    saveGoal: () => {
        const exercise = document.getElementById('g-exercise').value;
        const target = parseFloat(document.getElementById('g-target').value);

        if (!exercise || !target) {
            app.showToast('Please fill all fields.', 'danger');
            return;
        }

        store.saveGoal({ id: Date.now().toString(), exercise, target });
        document.getElementById('goal-form').reset();
        app.showToast('Goal saved successfully!');
        app.renderGoals();
    },

    deleteGoal: (id) => {
        store.deleteGoal(id);
        app.showToast('Goal deleted.');
        app.renderGoals();
    },

    // UI Rendering
    updateWorkoutTargetDisplay: () => {
        const exercise = document.getElementById('w-exercise').value;
        const targetDisplay = document.getElementById('active-target-display');
        const targetVal = document.getElementById('target-weight-val');
        
        if (!exercise) {
            targetDisplay.classList.add('hidden');
            return;
        }

        const rec = engine.calculateNextTarget(exercise);
        if (rec) {
            targetVal.textContent = `${rec.targetWeight} kg`;
            targetDisplay.className = `target-alert ${rec.action}`;
            targetDisplay.classList.remove('hidden');
        } else {
            targetDisplay.classList.add('hidden');
        }
    },

    loadRecoveryForm: () => {
        const recovery = store.getRecovery();
        document.querySelector(`input[name="r-sleep"][value="${recovery.sleep}"]`).checked = true;
        document.querySelector(`input[name="r-soreness"][value="${recovery.soreness}"]`).checked = true;
    },

    // ==========================================
    // DASHBOARD - Separate for Normal vs Competition
    // ==========================================
    renderDashboard: () => {
        const container = document.getElementById('dashboard-content');
        const goal = _getUserGoal();
        const recovery = store.getRecovery();

        if (goal === 'competition') {
            app._renderCompetitionDashboard(container, recovery);
        } else {
            app._renderNormalDashboard(container, recovery);
        }
    },

    _renderNormalDashboard: (container, recovery) => {
        const workouts = store.getWorkouts();
        const totalWorkouts = workouts.length;
        const thisWeek = workouts.filter(w => {
            const d = new Date(w.date);
            const now = new Date();
            const diff = (now - d) / (1000 * 60 * 60 * 24);
            return diff <= 7;
        }).length;
        const todayMeals = store.getTodayMeals();
        const todayCals = todayMeals.reduce((s, m) => s + (parseFloat(m.calories) || 0), 0);
        const todayProtein = todayMeals.reduce((s, m) => s + (parseFloat(m.protein) || 0), 0);

        // Recovery status
        let recoveryStatus = 'Good', recoveryClass = 'good';
        if (recovery.sleep === 'Poor' || recovery.soreness === 'High') { recoveryStatus = 'Poor'; recoveryClass = 'poor'; }
        else if (recovery.sleep === 'Average' && recovery.soreness !== 'Low') { recoveryStatus = 'Average'; recoveryClass = 'average'; }

        // Recommendations
        const exercises = store.getUniqueExercises();
        let recsHTML = '<div class="empty-state">Log a workout to receive smart targets.</div>';
        if (exercises.length > 0) {
            recsHTML = '';
            exercises.forEach(ex => {
                const rec = engine.calculateNextTarget(ex);
                if (rec) {
                    let icon = 'fa-minus', text = 'Maintain weight';
                    if (rec.action === 'increase') { icon = 'fa-arrow-trend-up'; text = 'Increase by 5%'; }
                    if (rec.action === 'decrease') { icon = 'fa-arrow-trend-down'; text = 'Reduce by 5%'; }
                    recsHTML += `
                        <div class="rec-item ${rec.action}" onclick="app.fastLog('${ex}', ${rec.targetWeight})">
                            <div><h4>${ex}</h4><p><i class="fa-solid ${icon}"></i> ${text}</p></div>
                            <div class="rec-target ${rec.action}">${rec.targetWeight}</div>
                        </div>`;
                }
            });
        }

        // Recent workouts
        const recentWorkouts = store.getWorkouts().reverse().slice(0, 3);
        let recentHTML = '<div class="empty-state">No recent workouts.</div>';
        if (recentWorkouts.length > 0) {
            recentHTML = '';
            recentWorkouts.forEach(w => {
                const d = new Date(w.date);
                const dateStr = `${d.getMonth()+1}/${d.getDate()} - ${w.sets}x${w.reps}`;
                recentHTML += `
                    <div class="history-item">
                        <div class="history-main"><h4>${w.exercise}</h4><p>${dateStr}</p></div>
                        <div class="history-stats"><span class="weight">${w.weight} kg</span><span class="effort">RPE ${w.effort}</span></div>
                    </div>`;
            });
        }

        container.innerHTML = `
            <!-- Quick Stats Row -->
            <div class="dashboard-stats-row">
                <div class="stat-card glass-card">
                    <div class="stat-icon"><i class="fa-solid fa-dumbbell"></i></div>
                    <div class="stat-value">${thisWeek}</div>
                    <div class="stat-label">Workouts This Week</div>
                </div>
                <div class="stat-card glass-card">
                    <div class="stat-icon"><i class="fa-solid fa-fire"></i></div>
                    <div class="stat-value">${todayCals}</div>
                    <div class="stat-label">Calories Today</div>
                </div>
                <div class="stat-card glass-card">
                    <div class="stat-icon"><i class="fa-solid fa-egg"></i></div>
                    <div class="stat-value">${todayProtein}g</div>
                    <div class="stat-label">Protein Today</div>
                </div>
                <div class="stat-card glass-card">
                    <div class="stat-icon"><i class="fa-solid fa-calendar-check"></i></div>
                    <div class="stat-value">${totalWorkouts}</div>
                    <div class="stat-label">Total Workouts</div>
                </div>
            </div>

            <div class="dashboard-grid">
                <!-- Recovery Status Card -->
                <div class="dashboard-card glass-card">
                    <h3><i class="fa-solid fa-battery-half"></i> Recovery Status</h3>
                    <div class="status-indicator">
                        <div class="status-circle ${recoveryClass}"></div>
                        <span>${recoveryStatus}</span>
                    </div>
                    <div class="mini-stats mt-3">
                        <div><span class="text-muted">Sleep:</span> <b>${recovery.sleep}</b></div>
                        <div><span class="text-muted">Soreness:</span> <b>${recovery.soreness}</b></div>
                    </div>
                </div>

                <!-- Smart Recommendation Card -->
                <div class="dashboard-card glass-card recommendation-card primary-border">
                    <div class="card-header-flex">
                        <h3><i class="fa-solid fa-brain"></i> Smart Target</h3>
                        <span class="badge primary">Adaptive</span>
                    </div>
                    <div class="recommendation-list">${recsHTML}</div>
                </div>

                <!-- Last Workout Card -->
                <div class="dashboard-card glass-card list-card">
                    <h3><i class="fa-solid fa-clock-rotate-left"></i> Recent Workouts</h3>
                    <div class="recent-list">${recentHTML}</div>
                </div>
            </div>
        `;
    },

    _renderCompetitionDashboard: (container, recovery) => {
        const user = store.getUser();
        const compType = _getCompType();
        const compLabel = _getCompLabel(compType);
        const profileWeight = user.profile.weight || '—';
        const profileHeight = user.profile.height || '—';
        const workouts = store.getWorkouts();
        const totalWorkouts = workouts.length;
        const thisWeek = workouts.filter(w => {
            const d = new Date(w.date);
            const now = new Date();
            return (now - d) / (1000 * 60 * 60 * 24) <= 7;
        }).length;
        const todayMeals = store.getTodayMeals();
        const todayCals = todayMeals.reduce((s, m) => s + (parseFloat(m.calories) || 0), 0);
        const todayProtein = todayMeals.reduce((s, m) => s + (parseFloat(m.protein) || 0), 0);
        const todayCarbs = todayMeals.reduce((s, m) => s + (parseFloat(m.carbs) || 0), 0);
        const todayFats = todayMeals.reduce((s, m) => s + (parseFloat(m.fats) || 0), 0);

        // Recovery
        let recoveryStatus = 'Good', recoveryClass = 'good';
        if (recovery.sleep === 'Poor' || recovery.soreness === 'High') { recoveryStatus = 'Poor'; recoveryClass = 'poor'; }
        else if (recovery.sleep === 'Average' && recovery.soreness !== 'Low') { recoveryStatus = 'Average'; recoveryClass = 'average'; }

        // Key lifts for this comp type
        let keyLifts = ['Bench Press', 'Squat', 'Deadlift'];
        if (compType === 'deadlift') keyLifts = ['Deadlift'];
        if (compType === 'arm_wrestling') keyLifts = ['Barbell Row', 'Barbell Curl'];
        
        let keyLiftsHTML = '';
        keyLifts.forEach(ex => {
            const last = store.getLastWorkout(ex);
            const rec = engine.calculateNextTarget(ex);
            keyLiftsHTML += `
                <div class="comp-lift-card glass-card" onclick="${rec ? `app.fastLog('${ex}', ${rec.targetWeight})` : ''}">
                    <h4>${ex}</h4>
                    <div class="comp-lift-stats">
                        <div><span class="text-muted">Current</span><br><b>${last ? last.weight + ' kg' : '—'}</b></div>
                        <div><span class="text-muted">Target</span><br><b class="text-primary">${rec ? rec.targetWeight + ' kg' : '—'}</b></div>
                    </div>
                </div>`;
        });

        // Recent
        const recentWorkouts = store.getWorkouts().reverse().slice(0, 3);
        let recentHTML = '<div class="empty-state">No recent workouts.</div>';
        if (recentWorkouts.length > 0) {
            recentHTML = '';
            recentWorkouts.forEach(w => {
                const d = new Date(w.date);
                const dateStr = `${d.getMonth()+1}/${d.getDate()} - ${w.sets}x${w.reps}`;
                recentHTML += `
                    <div class="history-item">
                        <div class="history-main"><h4>${w.exercise}</h4><p>${dateStr}</p></div>
                        <div class="history-stats"><span class="weight">${w.weight} kg</span><span class="effort">RPE ${w.effort}</span></div>
                    </div>`;
            });
        }

        container.innerHTML = `
            <!-- Competition Profile Banner -->
            <div class="comp-banner glass-card primary-border mb-4">
                <div class="comp-banner-header">
                    <div>
                        <h3 class="text-gradient"><i class="fa-solid fa-trophy"></i> ${compLabel} Athlete</h3>
                        <p class="text-muted mt-2">Competition-focused dashboard with strict tracking.</p>
                    </div>
                    <div class="comp-banner-stats">
                        <div><span class="text-muted">Weight</span><br><b>${profileWeight} kg</b></div>
                        <div><span class="text-muted">Height</span><br><b>${profileHeight} cm</b></div>
                    </div>
                </div>
            </div>

            <!-- Quick Stats Row -->
            <div class="dashboard-stats-row">
                <div class="stat-card glass-card">
                    <div class="stat-icon"><i class="fa-solid fa-dumbbell"></i></div>
                    <div class="stat-value">${thisWeek}</div>
                    <div class="stat-label">This Week</div>
                </div>
                <div class="stat-card glass-card">
                    <div class="stat-icon"><i class="fa-solid fa-fire"></i></div>
                    <div class="stat-value">${todayCals}</div>
                    <div class="stat-label">Calories</div>
                </div>
                <div class="stat-card glass-card">
                    <div class="stat-icon"><i class="fa-solid fa-egg"></i></div>
                    <div class="stat-value">${todayProtein}g</div>
                    <div class="stat-label">Protein</div>
                </div>
                <div class="stat-card glass-card">
                    <div class="stat-icon"><i class="fa-solid fa-wheat-awn"></i></div>
                    <div class="stat-value">${todayCarbs}g</div>
                    <div class="stat-label">Carbs</div>
                </div>
            </div>

            <!-- Key Lifts -->
            <div class="page-header mt-4"><h3><i class="fa-solid fa-crosshairs text-primary"></i> Key Lifts</h3></div>
            <div class="comp-lifts-grid">${keyLiftsHTML}</div>

            <div class="dashboard-grid mt-4">
                <!-- Recovery -->
                <div class="dashboard-card glass-card">
                    <h3><i class="fa-solid fa-battery-half"></i> Recovery</h3>
                    <div class="status-indicator">
                        <div class="status-circle ${recoveryClass}"></div>
                        <span>${recoveryStatus}</span>
                    </div>
                    <div class="mini-stats mt-3">
                        <div><span class="text-muted">Sleep:</span> <b>${recovery.sleep}</b></div>
                        <div><span class="text-muted">Soreness:</span> <b>${recovery.soreness}</b></div>
                    </div>
                </div>

                <!-- Recent -->
                <div class="dashboard-card glass-card list-card">
                    <h3><i class="fa-solid fa-clock-rotate-left"></i> Recent Workouts</h3>
                    <div class="recent-list">${recentHTML}</div>
                </div>

                <!-- Daily Nutrition Totals -->
                <div class="dashboard-card glass-card">
                    <h3><i class="fa-solid fa-utensils"></i> Today's Nutrition</h3>
                    <div class="comp-nutrition-grid mt-3">
                        <div class="comp-nut-item"><span class="comp-nut-val">${todayCals}</span><span class="comp-nut-label">Calories</span></div>
                        <div class="comp-nut-item"><span class="comp-nut-val">${todayProtein}g</span><span class="comp-nut-label">Protein</span></div>
                        <div class="comp-nut-item"><span class="comp-nut-val">${todayCarbs}g</span><span class="comp-nut-label">Carbs</span></div>
                        <div class="comp-nut-item"><span class="comp-nut-val">${todayFats}g</span><span class="comp-nut-label">Fats</span></div>
                    </div>
                </div>
            </div>
        `;
    },

    // ==========================================
    // MY PROGRAM - Recommended Workouts
    // ==========================================
    renderProgram: () => {
        const container = document.getElementById('program-content');
        const goal = _getUserGoal();
        const compType = _getCompType();
        let programKey = goal === 'competition' ? compType : 'normal';
        const program = PROGRAMS[programKey] || PROGRAMS['other'];

        let html = `
            <div class="glass-card mb-4 primary-border">
                <h3 class="text-gradient">${program.title}</h3>
                <p class="text-muted mt-2">${program.subtitle}</p>
            </div>`;

        program.days.forEach(day => {
            html += `
                <div class="glass-card mb-4 program-day-card">
                    <h4 class="program-day-title"><i class="fa-solid fa-calendar-day text-primary"></i> ${day.name}</h4>
                    <div class="program-exercise-list mt-3">`;
            day.exercises.forEach(ex => {
                html += `
                        <div class="program-exercise-item">
                            <div class="prog-ex-name">${ex.name}</div>
                            <div class="prog-ex-detail"><span>${ex.sets} sets</span> × <span>${ex.reps}</span></div>
                            <div class="prog-ex-rest"><i class="fa-solid fa-stopwatch"></i> ${ex.rest}</div>
                        </div>`;
            });
            html += `
                    </div>
                </div>`;
        });

        container.innerHTML = html;
    },

    renderProgress: () => {
        const filter = document.getElementById('p-exercise-filter').value;
        const container = document.getElementById('progress-history');
        let workouts = store.getWorkouts();
        
        if (workouts.length === 0) {
            container.innerHTML = '<div class="empty-state">No workout data available yet.</div>';
            return;
        }

        if (filter !== 'All') {
            workouts = workouts.filter(w => w.exercise === filter);
        }

        workouts = workouts.reverse(); // Newest first

        if (workouts.length === 0) {
            container.innerHTML = '<div class="empty-state">No workouts for this exercise yet.</div>';
            return;
        }

        container.innerHTML = '';
        workouts.forEach(w => {
            const d = new Date(w.date);
            const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            
            container.innerHTML += `
                <div class="history-item">
                    <div class="history-main">
                        <h4>${w.exercise}</h4>
                        <p>${dateStr} • ${w.sets} sets x ${w.reps} reps</p>
                    </div>
                    <div class="history-stats">
                        <span class="weight">${w.weight} kg</span>
                        <span class="effort">Effort: ${w.effort}/10</span>
                    </div>
                </div>
            `;
        });
    },

    renderGoals: () => {
        const container = document.getElementById('goals-list');
        const goals = store.getGoals();

        if (goals.length === 0) {
            container.innerHTML = '<div class="empty-state glass-card">No goals set yet. Set a goal above!</div>';
            return;
        }

        container.innerHTML = '';
        goals.forEach(g => {
            const lastWorkout = store.getLastWorkout(g.exercise);
            const currentWeight = lastWorkout ? parseFloat(lastWorkout.weight) : 0;
            const progress = g.target > 0 ? Math.min(100, Math.round((currentWeight / g.target) * 100)) : 0;
            const isCompleted = progress >= 100;

            container.innerHTML += `
                <div class="glass-card mb-4" style="position: relative; overflow: hidden; border-color: ${isCompleted ? 'var(--primary)' : 'var(--border)'}">
                    ${isCompleted ? '<div style="position:absolute; top:0; right:0; background:var(--primary); color:#000; padding:0.25rem 0.75rem; border-bottom-left-radius:var(--radius-sm); font-size:0.75rem; font-weight:bold;">COMPLETED <i class="fa-solid fa-check"></i></div>' : ''}
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <h4 style="margin:0; font-size: 1.25rem;">${g.exercise}</h4>
                        <button class="btn-icon" onclick="app.deleteGoal('${g.id}')" title="Delete Goal"><i class="fa-solid fa-trash text-muted"></i></button>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.95rem;">
                        <span class="text-muted">Current: ${currentWeight > 0 ? currentWeight + ' kg' : 'Not tracked'}</span>
                        <span class="text-primary font-weight-bold">Target: ${g.target} kg</span>
                    </div>

                    <div style="background-color: var(--bg-card-hover); border-radius: 999px; height: 12px; width: 100%; overflow: hidden; margin-top: 0.5rem; border: 1px solid var(--border);">
                        <div style="background-color: var(--primary); height: 100%; width: ${progress}%; transition: width 0.3s ease;"></div>
                    </div>
                    <div class="text-right text-muted mt-2" style="font-size: 0.85rem;">${progress}% Completed</div>
                </div>
            `;
        });
    },

    saveBodyMetrics: () => {
        const weight = document.getElementById('b-weight').value;
        const fat = document.getElementById('b-fat').value;

        if (!weight) {
            app.showToast('Please enter your weight.', 'danger');
            return;
        }

        store.saveBodyMetric({ weight, fat });
        document.getElementById('body-form').reset();
        app.showToast('Body metrics saved!');
        app.renderBodyHistory();
    },

    renderBodyHistory: () => {
        const container = document.getElementById('body-history');
        const metrics = store.getBodyMetrics().reverse(); // Newest first

        if (metrics.length === 0) {
            container.innerHTML = '<div class="empty-state">No body metrics logged yet.</div>';
            return;
        }

        container.innerHTML = '';
        metrics.forEach(m => {
            const d = new Date(m.date);
            const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            
            container.innerHTML += `
                <div class="history-item">
                    <div class="history-main">
                        <h4>${dateStr}</h4>
                    </div>
                    <div class="history-stats">
                        <span class="weight">${m.weight} kg</span>
                        <span class="effort">${m.fat ? 'BF: ' + m.fat + '%' : ''}</span>
                    </div>
                </div>
            `;
        });
    },

    // ==========================================
    // DIET PLAN + MEAL TRACKING
    // ==========================================
    renderDietPlan: () => {
        let typeSelect = document.getElementById('diet-type');
        
        // Pre-select based on boarding if not manually changed recently
        if (!typeSelect.dataset.initialized) {
            const pref = localStorage.getItem('dm_diet_pref');
            if (pref) {
                typeSelect.value = pref;
            }
            typeSelect.dataset.initialized = 'true';
        }
        
        const type = typeSelect.value;
        const container = document.getElementById('diet-plan-container');

        if (type === 'competition') {
            const user = store.getUser();
            const compType = user && user.profile && user.profile.compType ? user.profile.compType : 'competition';
            let titleExtra = compType !== 'competition' && compType !== 'other' ? ` (${_getCompLabel(compType)})` : '';
            
            // Macros vary by competition type
            let macros = { protein: '2.5g', carbs: '1.5g', fats: '0.5g' };
            if (['powerlifting','deadlift','strongman'].includes(compType)) {
                macros = { protein: '2.2g', carbs: '3.0g', fats: '0.8g' };
            } else if (['crossfit','olympic_weightlifting'].includes(compType)) {
                macros = { protein: '2.0g', carbs: '3.5g', fats: '0.8g' };
            } else if (compType === 'arm_wrestling') {
                macros = { protein: '2.0g', carbs: '2.5g', fats: '0.7g' };
            }

            container.innerHTML = `
                <div class="glass-card mb-4" style="border-color: var(--accent);">
                    <h3 class="text-gradient">Competition Prep Plan${titleExtra}</h3>
                    <p class="text-muted mt-2">Strict adherence required. Aimed at preserving muscle while aggressively stripping body fat or peaking for performance.</p>
                    
                    <h4 class="mt-4 mb-3">Daily Target Macros</h4>
                    <div class="diet-macros">
                        <div class="macro-card" style="border-bottom: 2px solid var(--accent)">
                            <h4>Protein</h4>
                            <div class="value" style="color: var(--accent)">${macros.protein}</div>
                            <small class="text-muted">per kg of bodyweight</small>
                        </div>
                        <div class="macro-card" style="border-bottom: 2px solid var(--accent)">
                            <h4>Carbs</h4>
                            <div class="value" style="color: var(--accent)">${macros.carbs}</div>
                            <small class="text-muted">per kg of bodyweight</small>
                        </div>
                        <div class="macro-card" style="border-bottom: 2px solid var(--accent)">
                            <h4>Fats</h4>
                            <div class="value" style="color: var(--accent)">${macros.fats}</div>
                            <small class="text-muted">per kg of bodyweight</small>
                        </div>
                    </div>

                    <h4 class="mt-4 mb-3">Sample Meal Structure</h4>
                    <div class="meal-list">
                        <div class="meal-item" style="border-left-color: var(--accent)">
                            <h4>Meal 1 (Breakfast)</h4>
                            <p>Egg whites, spinach, and a small portion of oats. Water or black coffee.</p>
                        </div>
                        <div class="meal-item" style="border-left-color: var(--accent)">
                            <h4>Meal 2 (Pre-Workout)</h4>
                            <p>Chicken breast, jasmine rice, and asparagus. 1.5 hours before training.</p>
                        </div>
                        <div class="meal-item" style="border-left-color: var(--accent)">
                            <h4>Meal 3 (Post-Workout)</h4>
                            <p>Whey protein isolate shake and rice cakes.</p>
                        </div>
                        <div class="meal-item" style="border-left-color: var(--accent)">
                            <h4>Meal 4 (Dinner)</h4>
                            <p>White fish (cod/tilapia), large green salad with lemon juice (no oil).</p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            container.innerHTML = `
                <div class="glass-card mb-4">
                    <h3 class="text-gradient">Normal Fitness Life</h3>
                    <p class="text-muted mt-2">Sustainable habits for building muscle and feeling good year-round without extreme tracking.</p>
                    
                    <h4 class="mt-4 mb-3">Daily Target Macros</h4>
                    <div class="diet-macros">
                        <div class="macro-card">
                            <h4>Protein</h4>
                            <div class="value">1.8g</div>
                            <small class="text-muted">per kg of bodyweight</small>
                        </div>
                        <div class="macro-card">
                            <h4>Carbs</h4>
                            <div class="value">Flexible</div>
                            <small class="text-muted">Eat to fuel workouts</small>
                        </div>
                        <div class="macro-card">
                            <h4>Fats</h4>
                            <div class="value">0.8g</div>
                            <small class="text-muted">per kg of bodyweight</small>
                        </div>
                    </div>

                    <h4 class="mt-4 mb-3">Sample Meal Structure</h4>
                    <div class="meal-list">
                        <div class="meal-item">
                            <h4>Meal 1 (Breakfast)</h4>
                            <p>Whole eggs, toast, and a piece of fruit. Coffee or tea.</p>
                        </div>
                        <div class="meal-item">
                            <h4>Meal 2 (Lunch)</h4>
                            <p>Chicken, turkey, or tofu wrap with mixed greens and a side of greek yogurt.</p>
                        </div>
                        <div class="meal-item">
                            <h4>Meal 3 (Snack)</h4>
                            <p>Protein shake, apple, and a handful of mixed nuts.</p>
                        </div>
                        <div class="meal-item">
                            <h4>Meal 4 (Dinner)</h4>
                            <p>Steak or salmon, roasted sweet potatoes, and mixed vegetables. (Room for a moderate dessert).</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Render today's meals log
        app.renderMealLog();
    },

    saveMeal: () => {
        const name = document.getElementById('m-name').value;
        const food = document.getElementById('m-food').value;
        const calories = document.getElementById('m-calories').value || 0;
        const protein = document.getElementById('m-protein').value || 0;
        const carbs = document.getElementById('m-carbs').value || 0;
        const fats = document.getElementById('m-fats').value || 0;

        if (!name || !food) {
            app.showToast('Please fill meal name and food items.', 'danger');
            return;
        }

        store.saveMeal({ name, food, calories, protein, carbs, fats });
        document.getElementById('meal-form').reset();
        app.showToast('Meal logged!');
        app.renderMealLog();
    },

    deleteMealEntry: (id) => {
        store.deleteMeal(id);
        app.showToast('Meal deleted.');
        app.renderMealLog();
    },

    renderMealLog: () => {
        const summaryContainer = document.getElementById('diet-daily-summary');
        const logContainer = document.getElementById('diet-log-container');
        const todayMeals = store.getTodayMeals();

        // Summary
        const totals = todayMeals.reduce((acc, m) => {
            acc.calories += parseFloat(m.calories) || 0;
            acc.protein += parseFloat(m.protein) || 0;
            acc.carbs += parseFloat(m.carbs) || 0;
            acc.fats += parseFloat(m.fats) || 0;
            return acc;
        }, { calories: 0, protein: 0, carbs: 0, fats: 0 });

        summaryContainer.innerHTML = `
            <div class="diet-summary-grid">
                <div class="diet-sum-item">
                    <span class="diet-sum-val">${Math.round(totals.calories)}</span>
                    <span class="diet-sum-label">Calories</span>
                </div>
                <div class="diet-sum-item">
                    <span class="diet-sum-val">${Math.round(totals.protein)}g</span>
                    <span class="diet-sum-label">Protein</span>
                </div>
                <div class="diet-sum-item">
                    <span class="diet-sum-val">${Math.round(totals.carbs)}g</span>
                    <span class="diet-sum-label">Carbs</span>
                </div>
                <div class="diet-sum-item">
                    <span class="diet-sum-val">${Math.round(totals.fats)}g</span>
                    <span class="diet-sum-label">Fats</span>
                </div>
            </div>
        `;

        // Meal log
        if (todayMeals.length === 0) {
            logContainer.innerHTML = '<div class="glass-card"><div class="empty-state">No meals logged today. Start tracking above!</div></div>';
            return;
        }

        logContainer.innerHTML = '';
        todayMeals.forEach(m => {
            const time = new Date(m.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            logContainer.innerHTML += `
                <div class="glass-card mb-4 meal-log-card">
                    <div class="meal-log-header">
                        <div>
                            <h4>${m.name}</h4>
                            <p class="text-muted">${time} — ${m.food}</p>
                        </div>
                        <button class="btn-icon" onclick="app.deleteMealEntry('${m.id}')"><i class="fa-solid fa-xmark text-muted"></i></button>
                    </div>
                    <div class="meal-log-macros mt-3">
                        <span class="badge">${m.calories || 0} cal</span>
                        <span class="badge">P: ${m.protein || 0}g</span>
                        <span class="badge">C: ${m.carbs || 0}g</span>
                        <span class="badge">F: ${m.fats || 0}g</span>
                    </div>
                </div>
            `;
        });
    },

    // Shortcut for clicking a recommendation
    fastLog: (exercise, targetWeight) => {
        app.navigateAppPage('workout');
        document.getElementById('w-exercise').value = exercise;
        document.getElementById('w-weight').value = targetWeight;
        app.updateWorkoutTargetDisplay();
    },

    // Notification UI
    showToast: (message, type = 'primary') => {
        const toast = document.getElementById('toast');
        const msgEl = document.getElementById('toast-message');
        msgEl.textContent = message;
        
        toast.style.borderColor = `var(--${type})`;
        toast.querySelector('i').style.color = `var(--${type})`;
        
        toast.classList.remove('hidden');
        
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', app.init);
