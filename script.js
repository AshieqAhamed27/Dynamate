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
                day: 'Monday',
                name: 'Upper Body Strength',
                exercises: [
                    { name: 'Bench Press', sets: 3, reps: '8-10', rest: '90s' },
                    { name: 'Barbell Row', sets: 3, reps: '8-10', rest: '90s' },
                    { name: 'Overhead Press', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Dumbbell Curl', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Tricep Pushdown', sets: 3, reps: '12-15', rest: '60s' },
                ],
            },
            {
                day: 'Tuesday',
                name: 'Lower Body Strength',
                exercises: [
                    { name: 'Squat', sets: 4, reps: '6-8', rest: '2min' },
                    { name: 'Romanian Deadlift', sets: 3, reps: '8-10', rest: '90s' },
                    { name: 'Leg Press', sets: 3, reps: '10-12', rest: '90s' },
                    { name: 'Leg Curl', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Calf Raises', sets: 4, reps: '15-20', rest: '45s' },
                ],
            },
            {
                day: 'Wednesday',
                name: 'Active Recovery & Core',
                exercises: [
                    { name: 'Plank', sets: 4, reps: '45-60s', rest: '45s' },
                    { name: 'Dead Bug', sets: 3, reps: '10/side', rest: '45s' },
                    { name: 'Bird Dog', sets: 3, reps: '10/side', rest: '45s' },
                    { name: '20-min Light Cardio (bike/walk)', sets: 1, reps: '20min', rest: '-' },
                ],
            },
            {
                day: 'Thursday',
                name: 'Full Body Power',
                exercises: [
                    { name: 'Deadlift', sets: 3, reps: '5', rest: '3min' },
                    { name: 'Incline Dumbbell Press', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Pull-ups', sets: 3, reps: 'AMRAP', rest: '90s' },
                    { name: 'Dumbbell Lunges', sets: 3, reps: '12/leg', rest: '60s' },
                    { name: 'Face Pulls', sets: 3, reps: '15-20', rest: '45s' },
                ],
            },
            {
                day: 'Friday',
                name: 'Upper Body Hypertrophy',
                exercises: [
                    { name: 'Cable Flyes', sets: 4, reps: '12-15', rest: '45s' },
                    { name: 'Lat Pulldown', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Lateral Raises', sets: 4, reps: '15-20', rest: '45s' },
                    { name: 'Hammer Curl', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Tricep Dips', sets: 3, reps: '10-12', rest: '60s' },
                ],
            },
            {
                day: 'Saturday',
                name: 'Lower Body Volume + Cardio',
                exercises: [
                    { name: 'Hack Squat', sets: 4, reps: '10-12', rest: '90s' },
                    { name: 'Hip Thrust', sets: 4, reps: '12-15', rest: '60s' },
                    { name: 'Leg Extension', sets: 3, reps: '15-20', rest: '45s' },
                    { name: 'Calf Raises', sets: 4, reps: '20', rest: '45s' },
                    { name: '20-min HIIT Cardio', sets: 1, reps: '20min', rest: '-' },
                ],
            },
            {
                day: 'Sunday',
                name: 'Rest & Recovery',
                exercises: [
                    { name: 'Gentle Yoga / Stretching', sets: 1, reps: '20-30min', rest: '-' },
                    { name: 'Foam Rolling (full body)', sets: 1, reps: '10-15min', rest: '-' },
                ],
            },
        ]
    },

    bodybuilding: {
        title: 'Bodybuilding Split (PPL)',
        subtitle: 'Push/Pull/Legs hypertrophy focus for stage-ready physique.',
        days: [
            {
                day: 'Monday',
                name: 'Push â€” Chest, Shoulders & Triceps',
                exercises: [
                    { name: 'Bench Press', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Incline Dumbbell Press', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Overhead Press', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Cable Flyes', sets: 3, reps: '12-15', rest: '45s' },
                    { name: 'Lateral Raises', sets: 4, reps: '15-20', rest: '45s' },
                    { name: 'Tricep Overhead Extension', sets: 3, reps: '12-15', rest: '45s' },
                ],
            },
            {
                day: 'Tuesday',
                name: 'Pull â€” Back & Biceps',
                exercises: [
                    { name: 'Barbell Row', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Lat Pulldown', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Seated Cable Row', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Face Pulls', sets: 3, reps: '15-20', rest: '45s' },
                    { name: 'Barbell Curl', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Hammer Curl', sets: 3, reps: '12-15', rest: '45s' },
                ],
            },
            {
                day: 'Wednesday',
                name: 'Legs â€” Quads, Hamstrings & Calves',
                exercises: [
                    { name: 'Squat', sets: 4, reps: '6-8', rest: '2min' },
                    { name: 'Leg Press', sets: 4, reps: '10-12', rest: '90s' },
                    { name: 'Romanian Deadlift', sets: 3, reps: '8-10', rest: '90s' },
                    { name: 'Leg Extension', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Leg Curl', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Calf Raises', sets: 4, reps: '15-20', rest: '45s' },
                ],
            },
            {
                day: 'Thursday',
                name: 'Push â€” Volume Day',
                exercises: [
                    { name: 'Incline Barbell Press', sets: 4, reps: '10-12', rest: '90s' },
                    { name: 'Dumbbell Shoulder Press', sets: 4, reps: '12-15', rest: '60s' },
                    { name: 'Pec Deck Flyes', sets: 4, reps: '12-15', rest: '45s' },
                    { name: 'Lateral Raises', sets: 5, reps: '15-20', rest: '45s' },
                    { name: 'Tricep Pushdown (rope)', sets: 4, reps: '12-15', rest: '45s' },
                ],
            },
            {
                day: 'Friday',
                name: 'Pull â€” Volume Day',
                exercises: [
                    { name: 'Pull-ups (Weighted)', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Single-Arm Dumbbell Row', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Chest-Supported Row', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Rear Delt Flyes', sets: 4, reps: '15-20', rest: '45s' },
                    { name: 'Preacher Curl', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Cable Curl', sets: 3, reps: '12-15', rest: '45s' },
                ],
            },
            {
                day: 'Saturday',
                name: 'Legs â€” Volume + Posing Practice',
                exercises: [
                    { name: 'Hack Squat', sets: 4, reps: '10-12', rest: '90s' },
                    { name: 'Hip Thrust', sets: 4, reps: '12-15', rest: '60s' },
                    { name: 'Leg Extension (single leg)', sets: 3, reps: '15', rest: '45s' },
                    { name: 'Seated Leg Curl', sets: 3, reps: '15', rest: '45s' },
                    { name: 'Standing Calf Raises', sets: 5, reps: '20', rest: '45s' },
                    { name: 'Posing Practice', sets: 1, reps: '15min', rest: '-' },
                ],
            },
            {
                day: 'Sunday',
                name: 'Rest & Recovery',
                exercises: [
                    { name: 'Posing Practice', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Full-Body Stretching / Yoga', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Foam Rolling', sets: 1, reps: '10min', rest: '-' },
                ],
            },
        ]
    },

    classic_physique: {
        title: 'Classic Physique Program',
        subtitle: 'Balanced aesthetics with emphasis on V-taper, arms, and posing.',
        days: [
            {
                day: 'Monday',
                name: 'Chest & Back â€” Width & Thickness',
                exercises: [
                    { name: 'Bench Press', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Pull-ups (Wide Grip)', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Incline Dumbbell Press', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Lat Pulldown', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Dumbbell Pullover', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Cable Crossover', sets: 3, reps: '15', rest: '45s' },
                ],
            },
            {
                day: 'Tuesday',
                name: 'Shoulders & Arms â€” V-Taper Focus',
                exercises: [
                    { name: 'Overhead Press', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Lateral Raises', sets: 5, reps: '15-20', rest: '45s' },
                    { name: 'Rear Delt Flyes', sets: 4, reps: '15', rest: '45s' },
                    { name: 'Barbell Curl', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Tricep Dips', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Concentration Curl', sets: 3, reps: '12-15', rest: '45s' },
                ],
            },
            {
                day: 'Wednesday',
                name: 'Legs & Glutes â€” Symmetry',
                exercises: [
                    { name: 'Squat', sets: 4, reps: '8-10', rest: '2min' },
                    { name: 'Hip Thrust', sets: 4, reps: '12', rest: '90s' },
                    { name: 'Romanian Deadlift', sets: 3, reps: '10-12', rest: '90s' },
                    { name: 'Leg Curl', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Calf Raises', sets: 5, reps: '20', rest: '45s' },
                    { name: 'Hanging Leg Raise', sets: 3, reps: '15', rest: '45s' },
                ],
            },
            {
                day: 'Thursday',
                name: 'Back Detail & Biceps Peak',
                exercises: [
                    { name: 'Barbell Row', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Seated Cable Row (narrow grip)', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Lat Pulldown (underhand)', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Single-Arm Dumbbell Row', sets: 3, reps: '12', rest: '60s' },
                    { name: 'Spider Curl', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Cable Curl', sets: 3, reps: '12-15', rest: '45s' },
                ],
            },
            {
                day: 'Friday',
                name: 'Chest & Triceps â€” Fullness',
                exercises: [
                    { name: 'Incline Barbell Press', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Flat Dumbbell Press', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Decline Cable Flyes', sets: 3, reps: '12-15', rest: '45s' },
                    { name: 'Overhead Tricep Extension', sets: 4, reps: '12-15', rest: '45s' },
                    { name: 'Skull Crushers', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Tricep Kickbacks', sets: 3, reps: '15', rest: '45s' },
                ],
            },
            {
                day: 'Saturday',
                name: 'Legs Volume + Posing Practice',
                exercises: [
                    { name: 'Leg Press', sets: 5, reps: '12-15', rest: '90s' },
                    { name: 'Leg Extension', sets: 4, reps: '15-20', rest: '45s' },
                    { name: 'Lying Leg Curl', sets: 4, reps: '15', rest: '45s' },
                    { name: 'Standing Calf Raises', sets: 5, reps: '20', rest: '45s' },
                    { name: 'Posing Practice (mandatory compulsories)', sets: 1, reps: '20min', rest: '-' },
                ],
            },
            {
                day: 'Sunday',
                name: 'Rest & Recovery',
                exercises: [
                    { name: 'Posing & Transitions Practice', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Light Stretching / Yoga', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Foam Rolling', sets: 1, reps: '10min', rest: '-' },
                ],
            },
        ]
    },

    mens_physique: {
        title: "Men's Physique Program",
        subtitle: 'Upper body focus with sculpted delts, no heavy legs needed.',
        days: [
            {
                day: 'Monday',
                name: 'Shoulders â€” Cannonball Delts',
                exercises: [
                    { name: 'Overhead Press', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Lateral Raises', sets: 5, reps: '15-20', rest: '45s' },
                    { name: 'Rear Delt Flyes', sets: 4, reps: '15-20', rest: '45s' },
                    { name: 'Cable Lateral Raise', sets: 3, reps: '15-20', rest: '45s' },
                    { name: 'Arnold Press', sets: 3, reps: '12', rest: '60s' },
                ],
            },
            {
                day: 'Tuesday',
                name: 'Chest & Triceps â€” Upper Chest Focus',
                exercises: [
                    { name: 'Incline Dumbbell Press', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Cable Flyes (high-to-low)', sets: 4, reps: '12-15', rest: '60s' },
                    { name: 'Push-ups (weighted vest)', sets: 3, reps: '15-20', rest: '45s' },
                    { name: 'Tricep Pushdown', sets: 4, reps: '12-15', rest: '45s' },
                    { name: 'Overhead Tricep Extension', sets: 3, reps: '12-15', rest: '45s' },
                ],
            },
            {
                day: 'Wednesday',
                name: 'Back & Biceps â€” Width & Thickness',
                exercises: [
                    { name: 'Pull-ups (wide grip)', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Lat Pulldown', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Seated Cable Row', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Barbell Curl', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Hammer Curl', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Face Pulls', sets: 3, reps: '20', rest: '45s' },
                ],
            },
            {
                day: 'Thursday',
                name: 'Shoulders â€” Volume Day',
                exercises: [
                    { name: 'Dumbbell Shoulder Press', sets: 4, reps: '12-15', rest: '60s' },
                    { name: 'Upright Row', sets: 3, reps: '12', rest: '60s' },
                    { name: 'Cable Lateral Raise', sets: 5, reps: '15-20', rest: '45s' },
                    { name: 'Rear Delt Machine Fly', sets: 4, reps: '15-20', rest: '45s' },
                    { name: 'Shrugs', sets: 3, reps: '15', rest: '60s' },
                ],
            },
            {
                day: 'Friday',
                name: 'Arms & Core â€” Arm Detail',
                exercises: [
                    { name: 'Preacher Curl', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Cable Curl', sets: 3, reps: '12-15', rest: '45s' },
                    { name: 'Skull Crushers', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Tricep Dips', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Hanging Leg Raise', sets: 4, reps: '15', rest: '45s' },
                    { name: 'Cable Crunch', sets: 3, reps: '20', rest: '45s' },
                ],
            },
            {
                day: 'Saturday',
                name: 'Light Legs, Core & Posing',
                exercises: [
                    { name: 'Leg Press', sets: 3, reps: '12-15', rest: '90s' },
                    { name: 'Walking Lunges', sets: 3, reps: '16 steps', rest: '60s' },
                    { name: 'Calf Raises', sets: 4, reps: '20', rest: '45s' },
                    { name: 'Plank', sets: 3, reps: '60s', rest: '45s' },
                    { name: 'Posing Practice (front & side)', sets: 1, reps: '20min', rest: '-' },
                ],
            },
            {
                day: 'Sunday',
                name: 'Rest & Recovery',
                exercises: [
                    { name: 'Posing Practice', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Light Stretching', sets: 1, reps: '15min', rest: '-' },
                ],
            },
        ]
    },

    powerlifting: {
        title: 'Powerlifting Program (SBD)',
        subtitle: 'Squat, Bench, Deadlift focused with heavy singles and volume blocks.',
        days: [
            {
                day: 'Monday',
                name: 'Heavy Squat Day',
                exercises: [
                    { name: 'Squat (90%+ intensity)', sets: 5, reps: '3-5', rest: '3-5min' },
                    { name: 'Pause Squat (75%)', sets: 3, reps: '3', rest: '3min' },
                    { name: 'Leg Press', sets: 3, reps: '8-10', rest: '2min' },
                    { name: 'Good Mornings', sets: 3, reps: '8-10', rest: '90s' },
                    { name: 'Core: Weighted Plank', sets: 3, reps: '45s', rest: '60s' },
                ],
            },
            {
                day: 'Tuesday',
                name: 'Heavy Bench Press Day',
                exercises: [
                    { name: 'Bench Press (90%+ intensity)', sets: 5, reps: '3-5', rest: '3-5min' },
                    { name: 'Close-Grip Bench (75%)', sets: 3, reps: '6-8', rest: '2min' },
                    { name: 'Overhead Press', sets: 3, reps: '6-8', rest: '2min' },
                    { name: 'Dumbbell Rows', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Tricep Pushdown', sets: 3, reps: '12-15', rest: '60s' },
                ],
            },
            {
                day: 'Wednesday',
                name: 'Squat Accessory & Recovery',
                exercises: [
                    { name: 'Front Squat (technique focus)', sets: 4, reps: '3', rest: '2min' },
                    { name: 'Romanian Deadlift', sets: 3, reps: '8', rest: '90s' },
                    { name: 'Hip Thrust', sets: 3, reps: '10', rest: '90s' },
                    { name: 'Leg Curl', sets: 3, reps: '12', rest: '60s' },
                    { name: 'Ab Wheel Rollout', sets: 3, reps: '10', rest: '60s' },
                ],
            },
            {
                day: 'Thursday',
                name: 'Heavy Deadlift Day',
                exercises: [
                    { name: 'Deadlift (90%+ intensity)', sets: 5, reps: '2-3', rest: '4-5min' },
                    { name: 'Deficit Deadlift (75%)', sets: 3, reps: '3', rest: '3min' },
                    { name: 'Barbell Row', sets: 4, reps: '6-8', rest: '2min' },
                    { name: 'Lat Pulldown', sets: 3, reps: '10-12', rest: '90s' },
                    { name: 'Farmer Walks', sets: 3, reps: '30m', rest: '2min' },
                ],
            },
            {
                day: 'Friday',
                name: 'Bench Accessory & Upper Volume',
                exercises: [
                    { name: 'Paused Bench Press (70%)', sets: 4, reps: '5', rest: '2min' },
                    { name: 'Pin Press', sets: 3, reps: '5', rest: '2min' },
                    { name: 'Incline Dumbbell Press', sets: 3, reps: '8-10', rest: '90s' },
                    { name: 'Pull-ups', sets: 4, reps: 'AMRAP', rest: '90s' },
                    { name: 'Tricep Dips (weighted)', sets: 3, reps: '8-10', rest: '90s' },
                ],
            },
            {
                day: 'Saturday',
                name: 'Competition Simulation / Volume',
                exercises: [
                    { name: 'Squat (meet-style, opener weight)', sets: 3, reps: '1', rest: '5min' },
                    { name: 'Bench Press (meet-style, opener weight)', sets: 3, reps: '1', rest: '5min' },
                    { name: 'Deadlift (meet-style, opener weight)', sets: 3, reps: '1', rest: '5min' },
                ],
            },
            {
                day: 'Sunday',
                name: 'Full Rest',
                exercises: [
                    { name: 'Light Walking (15-20min)', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Full-Body Foam Rolling & Stretching', sets: 1, reps: '15min', rest: '-' },
                ],
            },
        ]
    },

    deadlift: {
        title: 'Deadlift Specialist Program',
        subtitle: 'Maximize your pulling power with deadlift-focused training.',
        days: [
            {
                day: 'Monday',
                name: 'Max Effort Deadlift',
                exercises: [
                    { name: 'Deadlift (heavy singles)', sets: 6, reps: '1-3', rest: '4-5min' },
                    { name: 'Deficit Deadlift', sets: 3, reps: '3-5', rest: '3min' },
                    { name: 'Barbell Row', sets: 4, reps: '6-8', rest: '2min' },
                    { name: 'Ab Rollout', sets: 3, reps: '10', rest: '60s' },
                ],
            },
            {
                day: 'Tuesday',
                name: 'Lower Accessories & Posterior Chain',
                exercises: [
                    { name: 'Romanian Deadlift', sets: 4, reps: '6-8', rest: '2min' },
                    { name: 'Good Mornings', sets: 3, reps: '8-10', rest: '90s' },
                    { name: 'Hip Thrust', sets: 4, reps: '10-12', rest: '90s' },
                    { name: 'Leg Curl', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Farmer Walks', sets: 3, reps: '40m', rest: '2min' },
                ],
            },
            {
                day: 'Wednesday',
                name: 'Upper Body & Grip',
                exercises: [
                    { name: 'Pull-ups (Weighted)', sets: 4, reps: '5-8', rest: '2min' },
                    { name: 'Seated Cable Row', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Overhead Press', sets: 3, reps: '6-8', rest: '2min' },
                    { name: 'Farmer Walks (heavy)', sets: 4, reps: '30m', rest: '2min' },
                    { name: 'Wrist Roller', sets: 3, reps: '3 rolls', rest: '90s' },
                ],
            },
            {
                day: 'Thursday',
                name: 'Volume Deadlift Day',
                exercises: [
                    { name: 'Deadlift (70% 1RM)', sets: 5, reps: '5', rest: '2-3min' },
                    { name: 'Paused Deadlift (at knee)', sets: 3, reps: '3', rest: '2-3min' },
                    { name: 'Snatch-Grip Deadlift', sets: 3, reps: '4', rest: '2min' },
                    { name: 'Leg Press', sets: 3, reps: '10-12', rest: '90s' },
                ],
            },
            {
                day: 'Friday',
                name: 'Squat & Back Strength',
                exercises: [
                    { name: 'Squat (supporting the pull)', sets: 4, reps: '5', rest: '3min' },
                    { name: 'Lat Pulldown', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Single-Arm Dumbbell Row', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Face Pulls', sets: 3, reps: '20', rest: '45s' },
                    { name: 'Hanging Leg Raise', sets: 3, reps: '15', rest: '45s' },
                ],
            },
            {
                day: 'Saturday',
                name: 'Conditioning & Grip Endurance',
                exercises: [
                    { name: 'Trap Bar Deadlift (moderate)', sets: 4, reps: '8', rest: '2min' },
                    { name: 'Sled Pull / Push', sets: 5, reps: '30m', rest: '90s' },
                    { name: 'Finger Curls (barbell)', sets: 4, reps: '15-20', rest: '60s' },
                    { name: 'Hex Bar Hold', sets: 3, reps: '30-60s', rest: '90s' },
                ],
            },
            {
                day: 'Sunday',
                name: 'Full Rest',
                exercises: [
                    { name: 'Light Walking', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Stretching & Foam Rolling', sets: 1, reps: '15min', rest: '-' },
                ],
            },
        ]
    },

    strongman: {
        title: 'Strongman Training Program',
        subtitle: 'Brutal, event-based training for atlas stones, yoke, and more.',
        days: [
            {
                day: 'Monday',
                name: 'Max Effort Upper Body',
                exercises: [
                    { name: 'Log Press / Axle Overhead Press', sets: 5, reps: '3-5', rest: '3min' },
                    { name: 'Bench Press', sets: 4, reps: '5-8', rest: '2min' },
                    { name: 'Barbell Row', sets: 4, reps: '6-8', rest: '2min' },
                    { name: 'Farmer Walks', sets: 4, reps: '50m', rest: '2min' },
                    { name: 'Dumbbell Rows', sets: 3, reps: '10', rest: '90s' },
                ],
            },
            {
                day: 'Tuesday',
                name: 'Max Effort Lower Body',
                exercises: [
                    { name: 'Squat (comp style)', sets: 5, reps: '3-5', rest: '3-5min' },
                    { name: 'Deadlift (comp style)', sets: 4, reps: '2-3', rest: '4min' },
                    { name: 'Yoke Walk', sets: 4, reps: '30m', rest: '3min' },
                    { name: 'Leg Press', sets: 3, reps: '10-12', rest: '2min' },
                    { name: 'Good Mornings', sets: 3, reps: '8', rest: '90s' },
                ],
            },
            {
                day: 'Wednesday',
                name: 'Event Conditioning',
                exercises: [
                    { name: 'Tire Flips', sets: 5, reps: '5', rest: '2-3min' },
                    { name: 'Sandbag Loaded Carry', sets: 4, reps: '40m', rest: '2min' },
                    { name: 'Sled Drag', sets: 4, reps: '40m', rest: '2min' },
                    { name: 'Rope Battle', sets: 4, reps: '30s', rest: '90s' },
                ],
            },
            {
                day: 'Thursday',
                name: 'Upper Volume & Overhead Strength',
                exercises: [
                    { name: 'Dumbbell Overhead Press', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Pull-ups (Weighted)', sets: 4, reps: '5-8', rest: '2min' },
                    { name: 'Close-Grip Bench Press', sets: 3, reps: '8-10', rest: '90s' },
                    { name: 'Lat Pulldown', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Wrist Roller', sets: 3, reps: '3 rolls', rest: '90s' },
                ],
            },
            {
                day: 'Friday',
                name: 'Event-Specific Training',
                exercises: [
                    { name: 'Atlas Stones (loading)', sets: 5, reps: '1-3', rest: '3min' },
                    { name: 'Keg Carry', sets: 4, reps: '30m', rest: '2min' },
                    { name: 'Frame Carry', sets: 3, reps: '40m', rest: '2-3min' },
                    { name: 'Grip Training (thick bar)', sets: 4, reps: '30-60s', rest: '90s' },
                ],
            },
            {
                day: 'Saturday',
                name: 'Lower Volume & Recovery Work',
                exercises: [
                    { name: 'Box Squat (60-70%)', sets: 4, reps: '5', rest: '2min' },
                    { name: 'Romanian Deadlift', sets: 3, reps: '8', rest: '90s' },
                    { name: 'Hip Thrust', sets: 3, reps: '12', rest: '90s' },
                    { name: 'Calf Raises', sets: 3, reps: '20', rest: '60s' },
                    { name: 'Core: Pallof Press', sets: 3, reps: '10/side', rest: '60s' },
                ],
            },
            {
                day: 'Sunday',
                name: 'Full Rest & Refeed',
                exercises: [
                    { name: 'Light Walking', sets: 1, reps: '20-30min', rest: '-' },
                    { name: 'Soft-Tissue Work / Massage', sets: 1, reps: '15min', rest: '-' },
                ],
            },
        ]
    },

    crossfit: {
        title: 'CrossFit Competition Prep',
        subtitle: 'WOD-ready programming with strength, cardio, and skill work.',
        days: [
            {
                day: 'Monday',
                name: 'Strength + Metcon',
                exercises: [
                    { name: 'Back Squat', sets: 5, reps: '3', rest: '2-3min' },
                    { name: 'WOD: 21-15-9 Thrusters & Pull-ups', sets: 1, reps: 'For Time', rest: '-' },
                    { name: 'Ring Muscle-ups', sets: 4, reps: '3-5', rest: '2min' },
                    { name: 'Toes-to-Bar', sets: 3, reps: '15', rest: '60s' },
                ],
            },
            {
                day: 'Tuesday',
                name: 'Olympic Lifts + Cardio Engine',
                exercises: [
                    { name: 'Clean & Jerk', sets: 5, reps: '2', rest: '2-3min' },
                    { name: 'Snatch (technique focus)', sets: 5, reps: '2', rest: '2-3min' },
                    { name: 'WOD: 5 Rounds (200m Run, 15 Burpees)', sets: 1, reps: 'For Time', rest: '-' },
                ],
            },
            {
                day: 'Wednesday',
                name: 'Gymnastics & Skill Work',
                exercises: [
                    { name: 'Handstand Walk', sets: 5, reps: '15m', rest: '2min' },
                    { name: 'Bar Muscle-ups', sets: 5, reps: '3-5', rest: '90s' },
                    { name: 'Double Unders', sets: 5, reps: '50', rest: '45s' },
                    { name: 'L-Sit Hold', sets: 4, reps: '20s', rest: '60s' },
                    { name: 'WOD: EMOM 15min (5 HSPU + 10 GHD Sit-ups)', sets: 1, reps: 'EMOM', rest: '-' },
                ],
            },
            {
                day: 'Thursday',
                name: 'Heavy Lifting Day',
                exercises: [
                    { name: 'Deadlift (heavy)', sets: 5, reps: '3', rest: '3min' },
                    { name: 'Overhead Squat', sets: 4, reps: '3', rest: '2min' },
                    { name: 'Push Press (heavy)', sets: 4, reps: '5', rest: '2min' },
                    { name: 'Pull-ups (weighted)', sets: 4, reps: '6', rest: '2min' },
                    { name: 'WOD: "DT" â€” 5 Rounds (12 DL, 9 Hang PC, 6 Push Jerk)', sets: 1, reps: 'For Time', rest: '-' },
                ],
            },
            {
                day: 'Friday',
                name: 'Aerobic Engine & Rowing',
                exercises: [
                    { name: 'Rowing Intervals (500m x 8)', sets: 8, reps: '500m', rest: '90s' },
                    { name: 'Assault Bike Intervals', sets: 5, reps: '1min ON / 1min OFF', rest: '-' },
                    { name: 'WOD: AMRAP 12min (10 Box Jumps, 10 T2B)', sets: 1, reps: 'AMRAP', rest: '-' },
                ],
            },
            {
                day: 'Saturday',
                name: 'Competition Simulation',
                exercises: [
                    { name: 'Event 1: Max Lift (Snatch or Clean & Jerk)', sets: 3, reps: '1 attempt', rest: 'Full recovery' },
                    { name: 'Event 2: Chipper WOD (team or solo)', sets: 1, reps: 'For Time', rest: 'Full recovery' },
                    { name: 'Event 3: AMRAP (sport-specific)', sets: 1, reps: 'AMRAP', rest: '-' },
                ],
            },
            {
                day: 'Sunday',
                name: 'Active Recovery',
                exercises: [
                    { name: 'Easy 20-min Zone 2 Row or Bike', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Mobility Flow & Yoga', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Foam Rolling', sets: 1, reps: '10min', rest: '-' },
                ],
            },
        ]
    },

    olympic_weightlifting: {
        title: 'Olympic Weightlifting Program',
        subtitle: 'Snatch and Clean & Jerk periodized training.',
        days: [
            {
                day: 'Monday',
                name: 'Snatch Focus â€” Heavy',
                exercises: [
                    { name: 'Snatch (work to daily max)', sets: 6, reps: '2', rest: '2-3min' },
                    { name: 'Snatch Pull', sets: 4, reps: '3', rest: '2min' },
                    { name: 'Overhead Squat', sets: 4, reps: '3', rest: '2min' },
                    { name: 'Back Squat (heavy)', sets: 4, reps: '3', rest: '3min' },
                ],
            },
            {
                day: 'Tuesday',
                name: 'Clean & Jerk Focus â€” Heavy',
                exercises: [
                    { name: 'Clean & Jerk (work to daily max)', sets: 6, reps: '1+1', rest: '2-3min' },
                    { name: 'Clean Pull', sets: 4, reps: '3', rest: '2min' },
                    { name: 'Front Squat (heavy)', sets: 4, reps: '3', rest: '3min' },
                    { name: 'Push Press', sets: 4, reps: '5', rest: '2min' },
                ],
            },
            {
                day: 'Wednesday',
                name: 'Technique & Skill Refinement',
                exercises: [
                    { name: 'Hang Snatch (light-moderate)', sets: 5, reps: '3', rest: '90s' },
                    { name: 'Hang Clean & Jerk', sets: 5, reps: '2', rest: '90s' },
                    { name: 'Power Snatch', sets: 4, reps: '3', rest: '2min' },
                    { name: 'Power Clean (technique)', sets: 4, reps: '3', rest: '2min' },
                    { name: 'Back Squat (moderate, volume)', sets: 4, reps: '5', rest: '2min' },
                ],
            },
            {
                day: 'Thursday',
                name: 'Snatch + Strength',
                exercises: [
                    { name: 'Snatch (85-90%)', sets: 5, reps: '2', rest: '2-3min' },
                    { name: 'Snatch Balance', sets: 4, reps: '3', rest: '2min' },
                    { name: 'Deadlift (snatch-grip)', sets: 3, reps: '5', rest: '3min' },
                    { name: 'Good Mornings', sets: 3, reps: '8-10', rest: '90s' },
                ],
            },
            {
                day: 'Friday',
                name: 'Clean & Jerk + Front Squat Volume',
                exercises: [
                    { name: 'Clean & Jerk (80-90%)', sets: 5, reps: '1+1', rest: '2-3min' },
                    { name: 'Jerk from Rack', sets: 4, reps: '3', rest: '2min' },
                    { name: 'Front Squat (volume)', sets: 4, reps: '5', rest: '2-3min' },
                    { name: 'Push Press (85%)', sets: 3, reps: '3', rest: '2min' },
                ],
            },
            {
                day: 'Saturday',
                name: 'Competition Simulation',
                exercises: [
                    { name: 'Snatch (opener, 2nd & 3rd attempt simulation)', sets: 3, reps: '1', rest: '6-8min (comp style)' },
                    { name: 'Clean & Jerk (opener, 2nd & 3rd attempt simulation)', sets: 3, reps: '1+1', rest: '6-8min (comp style)' },
                ],
            },
            {
                day: 'Sunday',
                name: 'Full Rest',
                exercises: [
                    { name: 'Light Stretching & Mobility', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Take technique videos / film review', sets: 1, reps: '15min', rest: '-' },
                ],
            },
        ]
    },

    arm_wrestling: {
        title: 'Arm Wrestling Prep Program',
        subtitle: 'Grip, wrist, and pulling chain dominance.',
        days: [
            {
                day: 'Monday',
                name: 'Table Training & Pulling Power',
                exercises: [
                    { name: 'Table Sparring', sets: 6, reps: '30s bouts', rest: '2min' },
                    { name: 'Wrist Curl (Pronation)', sets: 4, reps: '12-15', rest: '60s' },
                    { name: 'Wrist Curl (Supination)', sets: 4, reps: '12-15', rest: '60s' },
                    { name: 'Hammer Curl', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Wrist Roller', sets: 3, reps: '3 rolls', rest: '90s' },
                ],
            },
            {
                day: 'Tuesday',
                name: 'Back & Biceps â€” Pulling Chain',
                exercises: [
                    { name: 'Barbell Row (supinated grip)', sets: 4, reps: '6-8', rest: '2min' },
                    { name: 'Pull-ups (Weighted)', sets: 4, reps: '5-8', rest: '2min' },
                    { name: 'Preacher Curl', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Hammer Curl', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Grip Trainer (Crush)', sets: 5, reps: '15-20', rest: '60s' },
                ],
            },
            {
                day: 'Wednesday',
                name: 'Wrist & Forearm Deep Work',
                exercises: [
                    { name: 'Thumb-Side Wrist Curl', sets: 4, reps: '15', rest: '60s' },
                    { name: 'Pinch Grip Plates', sets: 4, reps: '30-60s hold', rest: '90s' },
                    { name: 'Finger Extension Band', sets: 4, reps: '20', rest: '45s' },
                    { name: 'Rope Clamp Rows', sets: 4, reps: '10-12', rest: '90s' },
                    { name: 'Forearm Flexion Machine', sets: 3, reps: '15-20', rest: '60s' },
                ],
            },
            {
                day: 'Thursday',
                name: 'Table Sparring + Elbow Conditioning',
                exercises: [
                    { name: 'Table Sparring (top roll focus)', sets: 6, reps: '30s bouts', rest: '2min' },
                    { name: 'Zottman Curl', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Reverse Curl (barbell)', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Cable Wrist Curl', sets: 3, reps: '15-20', rest: '60s' },
                    { name: 'Grip Endurance: High-Rep Hang', sets: 3, reps: '30-60s', rest: '90s' },
                ],
            },
            {
                day: 'Friday',
                name: 'Endurance & Conditioning',
                exercises: [
                    { name: 'Rope Climbing', sets: 4, reps: '1 climb', rest: '2min' },
                    { name: 'Farmer Walks', sets: 4, reps: '40m', rest: '2min' },
                    { name: 'Finger Curls', sets: 4, reps: '15-20', rest: '60s' },
                    { name: 'Towel Pull-ups', sets: 3, reps: 'AMRAP', rest: '2min' },
                    { name: 'Kettlebell Swings', sets: 4, reps: '15', rest: '60s' },
                ],
            },
            {
                day: 'Saturday',
                name: 'Match Day Simulation',
                exercises: [
                    { name: 'Live Table Sparring (competition rounds)', sets: 8, reps: '10s-30s bouts', rest: '3min' },
                    { name: 'Light Accessory: Wrist Flexion & Extension', sets: 2, reps: '15', rest: '60s' },
                    { name: 'Grip Finisher: Barbell Holds', sets: 3, reps: '30s each hand', rest: '90s' },
                ],
            },
            {
                day: 'Sunday',
                name: 'Rest & Forearm Recovery',
                exercises: [
                    { name: 'Ice/Contrast Bath for Forearms', sets: 1, reps: '10min', rest: '-' },
                    { name: 'Wrist & Elbow Mobility Routine', sets: 1, reps: '15min', rest: '-' },
                ],
            },
        ]
    },

    other: {
        title: 'General Competition Prep',
        subtitle: 'A well-rounded strength & conditioning base for any sport.',
        days: [
            {
                day: 'Monday',
                name: 'Strength Foundation',
                exercises: [
                    { name: 'Squat', sets: 4, reps: '5', rest: '3min' },
                    { name: 'Bench Press', sets: 4, reps: '5', rest: '3min' },
                    { name: 'Barbell Row', sets: 4, reps: '6-8', rest: '2min' },
                    { name: 'Core: Plank', sets: 3, reps: '60s', rest: '45s' },
                ],
            },
            {
                day: 'Tuesday',
                name: 'Power & Explosiveness',
                exercises: [
                    { name: 'Deadlift', sets: 4, reps: '3', rest: '3min' },
                    { name: 'Overhead Press', sets: 4, reps: '5', rest: '2min' },
                    { name: 'Box Jumps', sets: 4, reps: '5', rest: '90s' },
                    { name: 'Pull-ups', sets: 3, reps: 'AMRAP', rest: '90s' },
                    { name: 'Broad Jumps', sets: 3, reps: '5', rest: '90s' },
                ],
            },
            {
                day: 'Wednesday',
                name: 'Sport Conditioning',
                exercises: [
                    { name: 'Rowing Intervals (90% effort)', sets: 6, reps: '500m', rest: '90s' },
                    { name: 'Farmer Walks', sets: 4, reps: '40m', rest: '2min' },
                    { name: 'Burpees', sets: 3, reps: '15', rest: '60s' },
                    { name: 'Plank', sets: 3, reps: '60s', rest: '45s' },
                ],
            },
            {
                day: 'Thursday',
                name: 'Strength Volume',
                exercises: [
                    { name: 'Squat (70% 1RM)', sets: 5, reps: '5', rest: '2min' },
                    { name: 'Bench Press (70% 1RM)', sets: 5, reps: '5', rest: '2min' },
                    { name: 'Lat Pulldown', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Dumbbell Shoulder Press', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Hanging Leg Raise', sets: 3, reps: '15', rest: '45s' },
                ],
            },
            {
                day: 'Friday',
                name: 'Speed & Plyometrics',
                exercises: [
                    { name: 'Sprint Intervals (30m)', sets: 6, reps: '30m', rest: '2min' },
                    { name: 'Trap Bar Jumps', sets: 4, reps: '5', rest: '90s' },
                    { name: 'Lateral Bounds', sets: 3, reps: '10/side', rest: '60s' },
                    { name: 'Med Ball Slam', sets: 4, reps: '10', rest: '60s' },
                    { name: 'Battle Ropes', sets: 3, reps: '30s', rest: '60s' },
                ],
            },
            {
                day: 'Saturday',
                name: 'Full Competition Simulation',
                exercises: [
                    { name: 'Competition Round (sport-specific)', sets: 1, reps: 'Full effort', rest: 'Full recovery' },
                    { name: 'Strength Top-Off: Squat + Deadlift openers', sets: 2, reps: '1 each', rest: '5min' },
                    { name: 'Conditioning Finisher: 10min AMRAP', sets: 1, reps: 'AMRAP', rest: '-' },
                ],
            },
            {
                day: 'Sunday',
                name: 'Full Rest & Reflection',
                exercises: [
                    { name: 'Light Walk / Jog', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Stretching & Foam Rolling', sets: 1, reps: '15min', rest: '-' },
                ],
            },
        ]
    }
};
