const express = require('express');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-dynamate-key';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// JWT Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// --- AUTH ROUTES ---
app.post('/api/auth/signup', async (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        db.run(`INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)`, [name, email, hashedPassword], function(err) {
            if (err) {
                if (err.message.includes('UNIQUE constraint failed')) {
                    return res.status(400).json({ error: 'Email already exists' });
                }
                return res.status(500).json({ error: err.message });
            }
            
            const token = jwt.sign({ id: this.lastID, email }, JWT_SECRET, { expiresIn: '7d' });
            res.json({ token, user: { id: this.lastID, name, email } });
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

    db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, user) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!user) return res.status(400).json({ error: 'User not found' });

        const validPassword = await bcrypt.compare(password, user.password_hash);
        if (!validPassword) return res.status(400).json({ error: 'Invalid password' });

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
        res.json({ token, user: { id: user.id, name: user.name, email: user.email, goal: user.goal } });
    });
});

app.get('/api/auth/me', authenticateToken, (req, res) => {
    db.get(`SELECT id, name, email, goal, weight, height, comp_type FROM users WHERE id = ?`, [req.user.id], (err, user) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(user);
    });
});

app.put('/api/users/onboarding', authenticateToken, (req, res) => {
    const { goal, weight, height, comp_type } = req.body;
    db.run(
        `UPDATE users SET goal = ?, weight = ?, height = ?, comp_type = ? WHERE id = ?`,
        [goal, weight, height, comp_type, req.user.id],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true });
        }
    );
});

// --- WORKOUT ROUTES ---
app.post('/api/workouts', authenticateToken, (req, res) => {
    const { exercise, weight, sets, reps, effort } = req.body;
    db.run(
        `INSERT INTO workouts (user_id, exercise, weight, sets, reps, effort) VALUES (?, ?, ?, ?, ?, ?)`,
        [req.user.id, exercise, weight, sets, reps, effort],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID, exercise, weight, sets, reps, effort });
        }
    );
});

app.get('/api/workouts', authenticateToken, (req, res) => {
    db.all(`SELECT * FROM workouts WHERE user_id = ? ORDER BY date DESC`, [req.user.id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// --- RECOVERY ROUTES ---
app.post('/api/recovery', authenticateToken, (req, res) => {
    const { sleep, soreness } = req.body;
    db.run(
        `INSERT INTO recovery (user_id, sleep, soreness) VALUES (?, ?, ?)`,
        [req.user.id, sleep, soreness],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID, sleep, soreness });
        }
    );
});

// --- GOALS ROUTES ---
app.post('/api/goals', authenticateToken, (req, res) => {
    const { exercise, target_weight } = req.body;
    db.run(
        `INSERT INTO goals (user_id, exercise, target_weight) VALUES (?, ?, ?)`,
        [req.user.id, exercise, target_weight],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID, exercise, target_weight });
        }
    );
});

app.get('/api/goals', authenticateToken, (req, res) => {
    db.all(`SELECT * FROM goals WHERE user_id = ? ORDER BY date DESC`, [req.user.id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// --- BODY METRICS ROUTES ---
app.post('/api/metrics', authenticateToken, (req, res) => {
    const { weight, body_fat } = req.body;
    db.run(
        `INSERT INTO body_metrics (user_id, weight, body_fat) VALUES (?, ?, ?)`,
        [req.user.id, weight, body_fat],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID, weight, body_fat });
        }
    );
});

app.get('/api/metrics', authenticateToken, (req, res) => {
    db.all(`SELECT * FROM body_metrics WHERE user_id = ? ORDER BY date DESC`, [req.user.id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// --- DIET LOGS ROUTES ---
app.post('/api/diet', authenticateToken, (req, res) => {
    const { meal_name, food, calories, protein, carbs, fats } = req.body;
    db.run(
        `INSERT INTO diet_logs (user_id, meal_name, food, calories, protein, carbs, fats) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [req.user.id, meal_name, food, calories, protein, carbs, fats],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID, meal_name, food, calories, protein, carbs, fats });
        }
    );
});

app.get('/api/diet', authenticateToken, (req, res) => {
    db.all(`SELECT * FROM diet_logs WHERE user_id = ? ORDER BY date DESC`, [req.user.id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Fallback to index.html for SPA routing (if any)
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
