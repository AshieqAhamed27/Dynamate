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
                foods: ['Oats with banana & honey (pre-workout)', 'Grilled chicken breast with brown rice', 'Whole eggs & avocado toast', 'Greek yoghurt with berries', 'Lean beef stir-fry with vegetables']
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
                foods: ['Sweet potato with eggs (pre-workout)', 'Salmon with quinoa & steamed broccoli', 'Cottage cheese with almonds', 'Protein shake post-workout', 'Lentil soup with whole-grain bread']
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
                foods: ['Smoothie: spinach, banana, protein powder, almond milk', 'Tuna salad wrap with mixed greens', 'Apple with peanut butter', 'Grilled salmon with asparagus', 'Almonds & dark chocolate (evening snack)']
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
                foods: ['Rice cakes with almond butter (pre-workout)', 'Chicken & sweet potato bowl', 'Hard-boiled eggs with celery sticks', 'Protein shake with oats', 'Turkey mince with pasta & tomato sauce']
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
                foods: ['Banana & protein shake (pre-workout)', 'Grilled tilapia with roasted vegetables', 'Hummus with cucumber & peppers', 'Brown rice with black beans', 'Cottage cheese with berries (before bed)']
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
                foods: ['Omelette with vegetables & cheese (pre-workout)', 'Beef & sweet potato bowl', 'Protein bar + fruit', 'Whole-grain pasta with chicken & pesto', 'Casein protein shake (before bed)']
            },
            {
                day: 'Sunday',
                name: 'Rest & Recovery',
                exercises: [
                    { name: 'Gentle Yoga / Stretching', sets: 1, reps: '20-30min', rest: '-' },
                    { name: 'Foam Rolling (full body)', sets: 1, reps: '10-15min', rest: '-' },
                ],
                foods: ['Overnight oats with berries', 'Grilled chicken salad with olive oil dressing', 'Mixed nuts & fruit', 'Vegetable soup with whole-grain bread', 'Greek yoghurt with honey']
            },
        ]
    },

    bodybuilding: {
        title: 'Bodybuilding Split (PPL)',
        subtitle: 'Push/Pull/Legs hypertrophy focus for stage-ready physique.',
        days: [
            {
                day: 'Monday',
                name: 'Push — Chest, Shoulders & Triceps',
                exercises: [
                    { name: 'Bench Press', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Incline Dumbbell Press', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Overhead Press', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Cable Flyes', sets: 3, reps: '12-15', rest: '45s' },
                    { name: 'Lateral Raises', sets: 4, reps: '15-20', rest: '45s' },
                    { name: 'Tricep Overhead Extension', sets: 3, reps: '12-15', rest: '45s' },
                ],
                foods: ['Egg white omelette with oats (pre-workout)', 'Chicken breast with white rice & broccoli', 'Casein protein pudding', 'Brown rice with tuna & avocado', 'Whole eggs with spinach stir-fry']
            },
            {
                day: 'Tuesday',
                name: 'Pull — Back & Biceps',
                exercises: [
                    { name: 'Barbell Row', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Lat Pulldown', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Seated Cable Row', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Face Pulls', sets: 3, reps: '15-20', rest: '45s' },
                    { name: 'Barbell Curl', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Hammer Curl', sets: 3, reps: '12-15', rest: '45s' },
                ],
                foods: ['Protein shake + banana (pre-workout)', 'Salmon fillet with sweet potato & green beans', 'Greek yoghurt with almonds', 'Chicken & quinoa salad', 'Cottage cheese with peanut butter (night)']
            },
            {
                day: 'Wednesday',
                name: 'Legs — Quads, Hamstrings & Calves',
                exercises: [
                    { name: 'Squat', sets: 4, reps: '6-8', rest: '2min' },
                    { name: 'Leg Press', sets: 4, reps: '10-12', rest: '90s' },
                    { name: 'Romanian Deadlift', sets: 3, reps: '8-10', rest: '90s' },
                    { name: 'Leg Extension', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Leg Curl', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Calf Raises', sets: 4, reps: '15-20', rest: '45s' },
                ],
                foods: ['Oatmeal with whey protein (pre-workout)', 'Ground turkey with brown rice & asparagus', 'Rice cakes with almond butter', 'Beef with roasted vegetables', 'Casein shake before bed']
            },
            {
                day: 'Thursday',
                name: 'Push — Volume Day',
                exercises: [
                    { name: 'Incline Barbell Press', sets: 4, reps: '10-12', rest: '90s' },
                    { name: 'Dumbbell Shoulder Press', sets: 4, reps: '12-15', rest: '60s' },
                    { name: 'Pec Deck Flyes', sets: 4, reps: '12-15', rest: '45s' },
                    { name: 'Lateral Raises', sets: 5, reps: '15-20', rest: '45s' },
                    { name: 'Tricep Pushdown (rope)', sets: 4, reps: '12-15', rest: '45s' },
                ],
                foods: ['Egg whites + oats (pre-workout)', 'Grilled tilapia with jasmine rice & broccoli', 'Protein bar', 'Chicken caesar salad (no croutons)', 'Mixed nuts & low-fat dairy']
            },
            {
                day: 'Friday',
                name: 'Pull — Volume Day',
                exercises: [
                    { name: 'Pull-ups (Weighted)', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Single-Arm Dumbbell Row', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Chest-Supported Row', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Rear Delt Flyes', sets: 4, reps: '15-20', rest: '45s' },
                    { name: 'Preacher Curl', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Cable Curl', sets: 3, reps: '12-15', rest: '45s' },
                ],
                foods: ['Smoothie with oats, protein, banana (pre-workout)', 'Shrimp & brown rice with stir-fry veggies', 'Hard-boiled eggs with celery', 'Lean steak with sweet potato & spinach', 'Casein protein shake (night)']
            },
            {
                day: 'Saturday',
                name: 'Legs — Volume + Posing Practice',
                exercises: [
                    { name: 'Hack Squat', sets: 4, reps: '10-12', rest: '90s' },
                    { name: 'Hip Thrust', sets: 4, reps: '12-15', rest: '60s' },
                    { name: 'Leg Extension (single leg)', sets: 3, reps: '15', rest: '45s' },
                    { name: 'Seated Leg Curl', sets: 3, reps: '15', rest: '45s' },
                    { name: 'Standing Calf Raises', sets: 5, reps: '20', rest: '45s' },
                    { name: 'Posing Practice', sets: 1, reps: '15min', rest: '-' },
                ],
                foods: ['Rice & egg whites (pre-workout)', 'Chicken breast with sweet potato & veggies', 'Low-fat Greek yoghurt with berries', 'Tuna with brown rice', 'Cottage cheese + casein before bed']
            },
            {
                day: 'Sunday',
                name: 'Rest & Recovery',
                exercises: [
                    { name: 'Posing Practice', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Full-Body Stretching / Yoga', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Foam Rolling', sets: 1, reps: '10min', rest: '-' },
                ],
                foods: ['Overnight oats with protein powder', 'Lean chicken salad with olive oil', 'Mixed nuts & an apple', 'Grilled fish with steamed rice & greens', 'Greek yoghurt with almonds (night)']
            },
        ]
    },

    classic_physique: {
        title: 'Classic Physique Program',
        subtitle: 'Balanced aesthetics with emphasis on V-taper, arms, and posing.',
        days: [
            {
                day: 'Monday',
                name: 'Chest & Back — Width & Thickness',
                exercises: [
                    { name: 'Bench Press', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Pull-ups (Wide Grip)', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Incline Dumbbell Press', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Lat Pulldown', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Dumbbell Pullover', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Cable Crossover', sets: 3, reps: '15', rest: '45s' },
                ],
                foods: ['Egg white omelette with toast (pre-workout)', 'Chicken breast with pasta & marinara', 'Cottage cheese with walnuts', 'Tuna wrap with avocado & greens', 'Casein protein shake (night)']
            },
            {
                day: 'Tuesday',
                name: 'Shoulders & Arms — V-Taper Focus',
                exercises: [
                    { name: 'Overhead Press', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Lateral Raises', sets: 5, reps: '15-20', rest: '45s' },
                    { name: 'Rear Delt Flyes', sets: 4, reps: '15', rest: '45s' },
                    { name: 'Barbell Curl', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Tricep Dips', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Concentration Curl', sets: 3, reps: '12-15', rest: '45s' },
                ],
                foods: ['Protein shake + banana (pre-workout)', 'Salmon with quinoa & asparagus', 'Almonds & an orange', 'Lean beef stir-fry with brown rice', 'Greek yoghurt before bed']
            },
            {
                day: 'Wednesday',
                name: 'Legs & Glutes — Symmetry',
                exercises: [
                    { name: 'Squat', sets: 4, reps: '8-10', rest: '2min' },
                    { name: 'Hip Thrust', sets: 4, reps: '12', rest: '90s' },
                    { name: 'Romanian Deadlift', sets: 3, reps: '10-12', rest: '90s' },
                    { name: 'Leg Curl', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Calf Raises', sets: 5, reps: '20', rest: '45s' },
                    { name: 'Hanging Leg Raise', sets: 3, reps: '15', rest: '45s' },
                ],
                foods: ['Oatmeal with protein powder (pre-workout)', 'Ground turkey with sweet potato & broccoli', 'Rice cakes with peanut butter', 'Grilled chicken salad', 'Cottage cheese + almonds (night)']
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
                foods: ['Egg whites + oats (pre-workout)', 'Shrimp with jasmine rice & zucchini', 'Protein bar + apple', 'Lean steak with roasted sweet potato', 'Casein shake (night)']
            },
            {
                day: 'Friday',
                name: 'Chest & Triceps — Fullness',
                exercises: [
                    { name: 'Incline Barbell Press', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Flat Dumbbell Press', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Decline Cable Flyes', sets: 3, reps: '12-15', rest: '45s' },
                    { name: 'Overhead Tricep Extension', sets: 4, reps: '12-15', rest: '45s' },
                    { name: 'Skull Crushers', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Tricep Kickbacks', sets: 3, reps: '15', rest: '45s' },
                ],
                foods: ['Banana + whey shake (pre-workout)', 'Chicken caesar salad (no croutons)', 'Mixed nuts & dried fruit', 'Tilapia with quinoa & spinach', 'Greek yoghurt with berries (night)']
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
                foods: ['White rice + egg whites (pre-workout)', 'Grilled chicken with roasted veg & brown rice', 'Protein shake post-workout', 'Lean beef & vegetable soup', 'Cottage cheese with honey (night)']
            },
            {
                day: 'Sunday',
                name: 'Rest & Recovery',
                exercises: [
                    { name: 'Posing & Transitions Practice', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Light Stretching / Yoga', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Foam Rolling', sets: 1, reps: '10min', rest: '-' },
                ],
                foods: ['Overnight oats with fruit', 'Grilled salmon with salad', 'Almonds & an apple', 'Chicken & sweet potato bowl', 'Casein shake + berries (night)']
            },
        ]
    },

    mens_physique: {
        title: "Men's Physique Program",
        subtitle: 'Upper body focus with sculpted delts, no heavy legs needed.',
        days: [
            {
                day: 'Monday',
                name: 'Shoulders — Cannonball Delts',
                exercises: [
                    { name: 'Overhead Press', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Lateral Raises', sets: 5, reps: '15-20', rest: '45s' },
                    { name: 'Rear Delt Flyes', sets: 4, reps: '15-20', rest: '45s' },
                    { name: 'Cable Lateral Raise', sets: 3, reps: '15-20', rest: '45s' },
                    { name: 'Arnold Press', sets: 3, reps: '12', rest: '60s' },
                ],
                foods: ['Egg whites with oats (pre-workout)', 'Chicken breast with white rice & broccoli', 'Almonds & an apple', 'Shrimp stir-fry with brown rice', 'Casein shake (before bed)']
            },
            {
                day: 'Tuesday',
                name: 'Chest & Triceps — Upper Chest Focus',
                exercises: [
                    { name: 'Incline Dumbbell Press', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Cable Flyes (high-to-low)', sets: 4, reps: '12-15', rest: '60s' },
                    { name: 'Push-ups (weighted vest)', sets: 3, reps: '15-20', rest: '45s' },
                    { name: 'Tricep Pushdown', sets: 4, reps: '12-15', rest: '45s' },
                    { name: 'Overhead Tricep Extension', sets: 3, reps: '12-15', rest: '45s' },
                ],
                foods: ['Banana + whey protein (pre-workout)', 'Salmon with sweet potato & green beans', 'Greek yoghurt with berries', 'Turkey wrap with avocado & veggies', 'Cottage cheese (night)']
            },
            {
                day: 'Wednesday',
                name: 'Back & Biceps — Width & Thickness',
                exercises: [
                    { name: 'Pull-ups (wide grip)', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Lat Pulldown', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Seated Cable Row', sets: 3, reps: '10-12', rest: '60s' },
                    { name: 'Barbell Curl', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Hammer Curl', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Face Pulls', sets: 3, reps: '20', rest: '45s' },
                ],
                foods: ['Protein shake + oats (pre-workout)', 'Ground turkey with quinoa & asparagus', 'Rice cakes with peanut butter', 'Lean beef with roasted potatoes & spinach', 'Casein shake (night)']
            },
            {
                day: 'Thursday',
                name: 'Shoulders — Volume Day',
                exercises: [
                    { name: 'Dumbbell Shoulder Press', sets: 4, reps: '12-15', rest: '60s' },
                    { name: 'Upright Row', sets: 3, reps: '12', rest: '60s' },
                    { name: 'Cable Lateral Raise', sets: 5, reps: '15-20', rest: '45s' },
                    { name: 'Rear Delt Machine Fly', sets: 4, reps: '15-20', rest: '45s' },
                    { name: 'Shrugs', sets: 3, reps: '15', rest: '60s' },
                ],
                foods: ['Egg white omelette + toast (pre-workout)', 'Grilled tilapia with jasmine rice & veggies', 'Protein bar', 'Chicken caesar salad', 'Greek yoghurt with almonds (night)']
            },
            {
                day: 'Friday',
                name: 'Arms & Core — Arm Detail',
                exercises: [
                    { name: 'Preacher Curl', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Cable Curl', sets: 3, reps: '12-15', rest: '45s' },
                    { name: 'Skull Crushers', sets: 4, reps: '10-12', rest: '60s' },
                    { name: 'Tricep Dips', sets: 3, reps: '12-15', rest: '60s' },
                    { name: 'Hanging Leg Raise', sets: 4, reps: '15', rest: '45s' },
                    { name: 'Cable Crunch', sets: 3, reps: '20', rest: '45s' },
                ],
                foods: ['Brown rice + chicken (pre-workout)', 'Shrimp with brown rice & steamed veg', 'Mixed nuts & dried fruit', 'Turkey mince with pasta', 'Casein protein shake (night)']
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
                foods: ['Oatmeal + egg whites (pre-workout)', 'Chicken breast with sweet potato & broccoli', 'Protein shake post-workout', 'Lean steak with salad', 'Cottage cheese with berries (night)']
            },
            {
                day: 'Sunday',
                name: 'Rest & Recovery',
                exercises: [
                    { name: 'Posing Practice', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Light Stretching', sets: 1, reps: '15min', rest: '-' },
                ],
                foods: ['Overnight oats with banana', 'Grilled chicken salad', 'Almonds & an apple', 'Salmon with steamed rice & veggies', 'Greek yoghurt (night)']
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
                foods: ['White rice + eggs (pre-workout)', 'Beef steak with mashed potato & greens', 'Protein shake with whole milk', 'Peanut butter toast + banana', 'Casein shake with whole milk (night)']
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
                foods: ['Oatmeal + whey (pre-workout)', 'Ground beef with rice & roasted carrots', 'Hard-boiled eggs & almonds', 'Chicken pasta with olive oil', 'Full-fat Greek yoghurt (night)']
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
                foods: ['Sweet potato + eggs (pre-workout)', 'Salmon with quinoa & asparagus', 'Cottage cheese + walnuts', 'Turkey with pasta & marinara sauce', 'Casein shake (night)']
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
                foods: ['White rice + beef (pre-workout)', 'Lean beef with roasted potato & broccoli', 'Protein shake + milk', 'Peanut butter & banana sandwich on whole grain', 'Full-fat yoghurt (night)']
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
                foods: ['Eggs + toast + OJ (pre-workout)', 'Chicken thighs with rice & green beans', 'Almonds & a protein bar', 'Beef mince with whole-grain pasta', 'Casein shake with peanut butter (night)']
            },
            {
                day: 'Saturday',
                name: 'Competition Simulation / Volume',
                exercises: [
                    { name: 'Squat (meet-style, opener weight)', sets: 3, reps: '1', rest: '5min' },
                    { name: 'Bench Press (meet-style, opener weight)', sets: 3, reps: '1', rest: '5min' },
                    { name: 'Deadlift (meet-style, opener weight)', sets: 3, reps: '1', rest: '5min' },
                ],
                foods: ['Big carb meal 2h before (rice + banana + eggs)', 'Post-session: steak, potato & broccoli', 'Protein shake + whole milk', 'Heavy dinner: pasta bolognese with beef', 'Casein shake + whole milk (night)']
            },
            {
                day: 'Sunday',
                name: 'Full Rest',
                exercises: [
                    { name: 'Light Walking (15-20min)', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Full-Body Foam Rolling & Stretching', sets: 1, reps: '15min', rest: '-' },
                ],
                foods: ['Oatmeal with honey & nuts', 'Grilled chicken with salad & olive oil', 'Mixed nuts & fruit', 'Beef stew with roasted vegetables', 'Greek yoghurt with almonds (night)']
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
                foods: ['Rice + eggs + coffee (pre-workout)', 'Lean beef with roasted potato & spinach', 'Protein shake + whole milk', 'Steak & sweet potato', 'Casein shake (night)']
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
                foods: ['Oatmeal + whey (pre-workout)', 'Chicken thighs with rice & green beans', 'Hard-boiled eggs + almonds', 'Turkey with pasta & tomato sauce', 'Full-fat yoghurt (night)']
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
                foods: ['Eggs + toast + banana (pre-workout)', 'Salmon with brown rice & broccoli', 'Cottage cheese + walnuts', 'Beef stir-fry with vegetables', 'Casein shake (night)']
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
                foods: ['Rice + beef + black coffee (pre-workout)', 'Ground turkey with mashed potato & peas', 'Protein bar + fruit', 'Chicken with pasta & olive oil', 'Whole milk + casein (night)']
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
                foods: ['Oatmeal + eggs + OJ (pre-workout)', 'Beef steak with roasted sweet potato & greens', 'Mixed nuts & protein bar', 'Salmon with quinoa salad', 'Casein shake + almond butter (night)']
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
                foods: ['Rice + eggs (pre-workout)', 'Chicken thighs with baked potato & salad', 'Protein shake post-workout', 'Lean beef with roasted vegetables', 'Whole milk + casein (night)']
            },
            {
                day: 'Sunday',
                name: 'Full Rest',
                exercises: [
                    { name: 'Light Walking', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Stretching & Foam Rolling', sets: 1, reps: '15min', rest: '-' },
                ],
                foods: ['Overnight oats + banana', 'Grilled chicken caesar salad', 'Almonds & dried fruit', 'Beef stew with vegetables & bread', 'Greek yoghurt (night)']
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
                foods: ['Large rice bowl + eggs + coffee (pre-workout)', 'Steak with baked potato & vegetables', 'Protein shake + whole milk + banana', 'Pulled pork with rice & beans', 'Casein shake + peanut butter (night)']
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
                foods: ['Oatmeal + eggs + whole milk (pre-workout)', 'Ground beef with mashed potato & broccoli', 'Protein bar + apple + nuts', 'Pasta bolognese with lean beef', 'Whole-fat cottage cheese (night)']
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
                foods: ['Rice + beef + banana (pre-workout)', 'Chicken stew with rice & root vegetables', 'Whole milk + protein shake', 'Salmon with quinoa & sweet potato', 'Casein shake (night)']
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
                foods: ['Eggs + toast + OJ (pre-workout)', 'Beef mince with pasta & tomato sauce', 'Mixed nuts & protein bar', 'Grilled chicken with sweet potato & greens', 'Whole milk kefir (night)']
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
                foods: ['Big carb meal pre-session: rice + eggs + honey', 'Steak with baked potato & coleslaw', 'Protein shake + whole milk', 'Pulled chicken with quinoa & roasted veg', 'Full-fat yoghurt + honey (night)']
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
                foods: ['Oatmeal + whey (pre-workout)', 'Chicken thighs with rice & roasted vegetables', 'Protein bar + banana', 'Ground beef & vegetable stew', 'Casein shake + peanut butter (night)']
            },
            {
                day: 'Sunday',
                name: 'Full Rest & Refeed',
                exercises: [
                    { name: 'Light Walking', sets: 1, reps: '20-30min', rest: '-' },
                    { name: 'Soft-Tissue Work / Massage', sets: 1, reps: '15min', rest: '-' },
                ],
                foods: ['Large pancake breakfast with syrup & eggs', 'Pasta with beef & tomato sauce', 'Ice cream + fruit (treat meal)', 'Grilled salmon with large potato & broccoli', 'Whole milk + casein (night)']
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
                foods: ['Banana + rice cakes + honey (pre-WOD)', 'Chicken with white rice & sweet potato', 'Protein shake post-WOD', 'Turkey wrap with avocado & greens', 'Casein shake (night)']
            },
            {
                day: 'Tuesday',
                name: 'Olympic Lifts + Cardio Engine',
                exercises: [
                    { name: 'Clean & Jerk', sets: 5, reps: '2', rest: '2-3min' },
                    { name: 'Snatch (technique focus)', sets: 5, reps: '2', rest: '2-3min' },
                    { name: 'WOD: 5 Rounds (200m Run, 15 Burpees)', sets: 1, reps: 'For Time', rest: '-' },
                ],
                foods: ['Oatmeal + whey (pre-workout)', 'Salmon with sushi rice & cucumber', 'Energy gels / fruit during WOD', 'Ground chicken with pasta & pesto', 'Full-fat Greek yoghurt (night)']
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
                foods: ['Bagel with peanut butter + banana (pre-workout)', 'Grilled tilapia with rice & vegetables', 'Protein bar + apple', 'Chicken caesar salad', 'Casein shake (night)']
            },
            {
                day: 'Thursday',
                name: 'Heavy Lifting Day',
                exercises: [
                    { name: 'Deadlift (heavy)', sets: 5, reps: '3', rest: '3min' },
                    { name: 'Overhead Squat', sets: 4, reps: '3', rest: '2min' },
                    { name: 'Push Press (heavy)', sets: 4, reps: '5', rest: '2min' },
                    { name: 'Pull-ups (weighted)', sets: 4, reps: '6', rest: '2min' },
                    { name: 'WOD: "DT" — 5 Rounds (12 DL, 9 Hang PC, 6 Push Jerk)', sets: 1, reps: 'For Time', rest: '-' },
                ],
                foods: ['White rice + eggs + coffee (pre-WOD)', 'Steak with sweet potato & broccoli', 'Protein shake + banana post-WOD', 'Chicken & rice bowl', 'Casein shake + almond butter (night)']
            },
            {
                day: 'Friday',
                name: 'Aerobic Engine & Rowing',
                exercises: [
                    { name: 'Rowing Intervals (500m x 8)', sets: 8, reps: '500m', rest: '90s' },
                    { name: 'Assault Bike Intervals', sets: 5, reps: '1min ON / 1min OFF', rest: '-' },
                    { name: 'WOD: AMRAP 12min (10 Box Jumps, 10 T2B)', sets: 1, reps: 'AMRAP', rest: '-' },
                ],
                foods: ['Oatmeal + honey + protein (pre-workout)', 'Grilled chicken with rice & avocado', 'Coconut water + banana (mid-session)', 'Turkey & sweet potato bowl', 'Greek yoghurt with berries (night)']
            },
            {
                day: 'Saturday',
                name: 'Competition Simulation',
                exercises: [
                    { name: 'Event 1: Max Lift (Snatch or Clean & Jerk)', sets: 3, reps: '1 attempt', rest: 'Full recovery' },
                    { name: 'Event 2: Chipper WOD (team or solo)', sets: 1, reps: 'For Time', rest: 'Full recovery' },
                    { name: 'Event 3: AMRAP (sport-specific)', sets: 1, reps: 'AMRAP', rest: '-' },
                ],
                foods: ['Full carb breakfast: pancakes + eggs + fruit', 'Chicken with white rice & banana (between events)', 'Electrolyte drinks throughout', 'Post-comp: Pasta with beef sauce', 'Recovery shake + casein (night)']
            },
            {
                day: 'Sunday',
                name: 'Active Recovery',
                exercises: [
                    { name: 'Easy 20-min Zone 2 Row or Bike', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Mobility Flow & Yoga', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Foam Rolling', sets: 1, reps: '10min', rest: '-' },
                ],
                foods: ['Overnight oats + berries', 'Grilled salmon with salad', 'Mixed nuts & fruit', 'Chicken soup with whole-grain bread', 'Greek yoghurt with honey (night)']
            },
        ]
    },

    olympic_weightlifting: {
        title: 'Olympic Weightlifting Program',
        subtitle: 'Snatch and Clean & Jerk periodized training.',
        days: [
            {
                day: 'Monday',
                name: 'Snatch Focus — Heavy',
                exercises: [
                    { name: 'Snatch (work to daily max)', sets: 6, reps: '2', rest: '2-3min' },
                    { name: 'Snatch Pull', sets: 4, reps: '3', rest: '2min' },
                    { name: 'Overhead Squat', sets: 4, reps: '3', rest: '2min' },
                    { name: 'Back Squat (heavy)', sets: 4, reps: '3', rest: '3min' },
                ],
                foods: ['White rice + egg whites + banana (pre-workout)', 'Grilled chicken with jasmine rice & broccoli', 'Rice cakes + honey (between sessions if 2x day)', 'Lean beef with roasted potato & spinach', 'Casein shake (night)']
            },
            {
                day: 'Tuesday',
                name: 'Clean & Jerk Focus — Heavy',
                exercises: [
                    { name: 'Clean & Jerk (work to daily max)', sets: 6, reps: '1+1', rest: '2-3min' },
                    { name: 'Clean Pull', sets: 4, reps: '3', rest: '2min' },
                    { name: 'Front Squat (heavy)', sets: 4, reps: '3', rest: '3min' },
                    { name: 'Push Press', sets: 4, reps: '5', rest: '2min' },
                ],
                foods: ['Egg whites + oats + fruit (pre-workout)', 'Salmon with white rice & asparagus', 'Coconut water + protein shake (mid-session)', 'Chicken with pasta & tomato sauce', 'Casein shake (night)']
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
                foods: ['Oatmeal + banana + honey (pre-workout)', 'Tuna with brown rice & cucumber', 'Almonds & dried fruit', 'Grilled chicken with sweet potato', 'Cottage cheese + walnuts (night)']
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
                foods: ['White rice + eggs + coffee (pre-workout)', 'Lean beef with mashed potato & vegetables', 'Protein shake post-session', 'Turkey wrap with avocado', 'Casein shake (night)']
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
                foods: ['Banana + rice cakes + honey (pre-workout)', 'Salmon with jasmine rice & green beans', 'Mixed nuts & protein shake', 'Chicken & sweet potato bowl', 'Casein shake (night)']
            },
            {
                day: 'Saturday',
                name: 'Competition Simulation',
                exercises: [
                    { name: 'Snatch (opener, 2nd & 3rd attempt simulation)', sets: 3, reps: '1', rest: '6-8min (comp style)' },
                    { name: 'Clean & Jerk (opener, 2nd & 3rd attempt simulation)', sets: 3, reps: '1+1', rest: '6-8min (comp style)' },
                ],
                foods: ['Large carb meal 2h before: rice + eggs + OJ', 'Intra-session: electrolyte drinks + banana', 'Post-session: steak + large portion of rice & veg', 'Evening: pasta with meatballs & marinara', 'Casein shake + full-fat milk (night)']
            },
            {
                day: 'Sunday',
                name: 'Full Rest',
                exercises: [
                    { name: 'Light Stretching & Mobility', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Take technique videos / film review', sets: 1, reps: '15min', rest: '-' },
                ],
                foods: ['Pancakes with eggs & fruit', 'Grilled chicken salad with olive oil', 'Almonds & an orange', 'Beef stew with roasted vegetables', 'Greek yoghurt with honey (night)']
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
                foods: ['Oatmeal + banana + coffee (pre-workout)', 'Grilled chicken with brown rice & spinach', 'Almonds & an apple', 'Beef stir-fry with vegetables & rice', 'Casein shake (night)']
            },
            {
                day: 'Tuesday',
                name: 'Back & Biceps — Pulling Chain',
                exercises: [
                    { name: 'Barbell Row (supinated grip)', sets: 4, reps: '6-8', rest: '2min' },
                    { name: 'Pull-ups (Weighted)', sets: 4, reps: '5-8', rest: '2min' },
                    { name: 'Preacher Curl', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Hammer Curl', sets: 4, reps: '8-10', rest: '90s' },
                    { name: 'Grip Trainer (Crush)', sets: 5, reps: '15-20', rest: '60s' },
                ],
                foods: ['Egg whites + oats (pre-workout)', 'Salmon with quinoa & asparagus', 'Cottage cheese + walnuts', 'Turkey mince with pasta & tomato sauce', 'Casein shake (night)']
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
                foods: ['Rice cakes + peanut butter (pre-workout)', 'Chicken breast with sweet potato & green beans', 'Protein bar + fruit', 'Lean beef wrap with greens', 'Cottage cheese + almonds (night)']
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
                foods: ['Banana + protein shake (pre-workout)', 'Grilled tilapia with brown rice & broccoli', 'Greek yoghurt + berries', 'Salmon salad with avocado', 'Casein shake (night)']
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
                foods: ['Oatmeal + eggs (pre-workout)', 'Ground turkey with rice & mixed veg', 'Mixed nuts & an orange', 'Chicken with pasta & olive oil', 'Cottage cheese + honey (night)']
            },
            {
                day: 'Saturday',
                name: 'Match Day Simulation',
                exercises: [
                    { name: 'Live Table Sparring (competition rounds)', sets: 8, reps: '10s-30s bouts', rest: '3min' },
                    { name: 'Light Accessory: Wrist Flexion & Extension', sets: 2, reps: '15', rest: '60s' },
                    { name: 'Grip Finisher: Barbell Holds', sets: 3, reps: '30s each hand', rest: '90s' },
                ],
                foods: ['Pre-match: banana + rice cakes + coffee', 'Between rounds: electrolytes + fruit', 'Post-session: chicken with white rice & salad', 'Evening: lean beef with roasted potato & greens', 'Casein shake (night)']
            },
            {
                day: 'Sunday',
                name: 'Rest & Forearm Recovery',
                exercises: [
                    { name: 'Ice/Contrast Bath for Forearms', sets: 1, reps: '10min', rest: '-' },
                    { name: 'Wrist & Elbow Mobility Routine', sets: 1, reps: '15min', rest: '-' },
                ],
                foods: ['Scrambled eggs with avocado & toast', 'Grilled chicken salad', 'Almonds & berries', 'Salmon with brown rice & spinach', 'Greek yoghurt with honey (night)']
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
                foods: ['Oatmeal + eggs + coffee (pre-workout)', 'Chicken with brown rice & broccoli', 'Greek yoghurt + almonds', 'Lean beef with roasted sweet potato & greens', 'Casein shake (night)']
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
                foods: ['Banana + rice cakes + honey (pre-workout)', 'Salmon with white rice & asparagus', 'Protein shake post-workout', 'Turkey wrap with avocado', 'Cottage cheese (night)']
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
                foods: ['Smoothie: oats + fruit + protein + almond milk', 'Grilled chicken with quinoa & vegetables', 'Almonds & an apple', 'Ground turkey with pasta', 'Greek yoghurt + berries (night)']
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
                foods: ['Egg whites + oats (pre-workout)', 'Tuna with rice & cucumber', 'Protein bar + fruit', 'Chicken thighs with sweet potato & greens', 'Casein shake (night)']
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
                foods: ['Banana + protein shake (pre-workout)', 'Grilled tilapia with jasmine rice & broccoli', 'Mixed nuts & dried fruit', 'Chicken caesar salad', 'Cottage cheese (night)']
            },
            {
                day: 'Saturday',
                name: 'Full Competition Simulation',
                exercises: [
                    { name: 'Competition Round (sport-specific)', sets: 1, reps: 'Full effort', rest: 'Full recovery' },
                    { name: 'Strength Top-Off: Squat + Deadlift openers', sets: 2, reps: '1 each', rest: '5min' },
                    { name: 'Conditioning Finisher: 10min AMRAP', sets: 1, reps: 'AMRAP', rest: '-' },
                ],
                foods: ['Large pre-event meal: rice + chicken + banana + OJ', 'Between events: electrolytes + fruit', 'Post-event: steak with potato & salad', 'Evening: pasta bolognese with beef', 'Casein shake (night)']
            },
            {
                day: 'Sunday',
                name: 'Full Rest & Reflection',
                exercises: [
                    { name: 'Light Walk / Jog', sets: 1, reps: '20min', rest: '-' },
                    { name: 'Stretching & Foam Rolling', sets: 1, reps: '15min', rest: '-' },
                ],
                foods: ['Overnight oats with berries & banana', 'Grilled salmon with salad & olive oil', 'Mixed nuts & an apple', 'Chicken & vegetable soup with bread', 'Greek yoghurt with honey (night)']
            },
        ]
    }
};

// ==========================================
// COURSES DATA
// ==========================================
const COURSES = [
    {
        id: 'course_beginner',
        title: 'Beginner to Strong: 12-Week Transformation',
        instructor: 'Coach Rahul Sharma',
        duration: '12 Weeks',
        modules: 24,
        price: 999,
        originalPrice: 1999,
        level: 'Beginner',
        icon: 'fa-dumbbell',
        color: '#ef4444',
        description: 'A complete beginner-friendly strength program. Go from zero to lifting confidently with structured progressions, form guides, and nutrition coaching.',
        highlights: ['Full workout plans (Mon–Sat)', 'Form video references', 'Beginner diet guide', 'Lifetime access']
    },
    {
        id: 'course_hypertrophy',
        title: 'Muscle Hypertrophy Masterclass',
        instructor: 'Coach Priya Nair',
        duration: '16 Weeks',
        modules: 32,
        price: 1499,
        originalPrice: 2999,
        level: 'Intermediate',
        icon: 'fa-bolt',
        color: '#f59e0b',
        description: 'Science-based hypertrophy programming for maximum muscle growth. Covers PPL splits, periodisation, and advanced techniques like drop sets & supersets.',
        highlights: ['PPL Split + Deload weeks', 'Supplement guide', 'Advanced nutrition tracking', 'Weekly check-in template']
    },
    {
        id: 'course_fat_loss',
        title: 'Fat Loss Blueprint: Lean & Athletic',
        instructor: 'Coach Arjun Mehta',
        duration: '8 Weeks',
        modules: 16,
        price: 799,
        originalPrice: 1599,
        level: 'All Levels',
        icon: 'fa-fire',
        color: '#10b981',
        description: 'Combine strength training and cardio intelligently to shed fat while preserving hard-earned muscle. Includes TDEE calculation, cardio protocols and flexible dieting.',
        highlights: ['HIIT + Strength hybrid program', 'Calorie cycling plan', 'Flexible dieting guide', 'Progress tracking sheets']
    },
    {
        id: 'course_competition',
        title: 'Competition Prep Masterclass',
        instructor: 'Coach Vikram Singh',
        duration: '20 Weeks',
        modules: 40,
        price: 2499,
        originalPrice: 4999,
        level: 'Advanced',
        icon: 'fa-trophy',
        color: '#8b5cf6',
        description: 'Stage-ready physique coaching for bodybuilding, classic physique, and men\'s physique competitors. Peak week protocol, posing practice, and contest day strategy included.',
        highlights: ['Peak week & water manipulation guide', 'Posing coaching', 'Stage-ready nutrition plan', '1-on-1 Q&A sessions']
    }
];

const PLANS = [
    {
        id: 'plan_monthly',
        title: 'Monthly Pro Plan',
        instructor: 'DynaMate Premium',
        duration: '1 Month',
        modules: 'All Features',
        price: 299,
        originalPrice: 299,
        level: 'Pro',
        icon: 'fa-calendar-day',
        color: '#ef4444'
    },
    {
        id: 'plan_yearly',
        title: 'Yearly Pro Plan',
        instructor: 'DynaMate Premium',
        duration: '1 Year',
        modules: 'All Features',
        price: 2499,
        originalPrice: 3588,
        level: 'Pro',
        icon: 'fa-calendar-check',
        color: '#ef4444'
    }
];

// ==========================================
// STORE (Local Storage Wrapper)
// ==========================================
const store = {
    // Multi-user store
    getUsers: () => JSON.parse(localStorage.getItem('dm_users')) || [],
    setUsers: (users) => localStorage.setItem('dm_users', JSON.stringify(users)),

    getUserByEmail: (email) => {
        const users = store.getUsers();
        return users.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
    },

    getUser: () => {
        const sessionEmail = localStorage.getItem('dm_current_session');
        if (!sessionEmail) return null;
        return store.getUserByEmail(sessionEmail);
    },

    setUser: (user) => {
        const users = store.getUsers();
        const idx = users.findIndex(u => u.email.toLowerCase() === user.email.toLowerCase());
        if (idx >= 0) {
            users[idx] = { ...users[idx], ...user };
        } else {
            users.push(user);
        }
        store.setUsers(users);
        localStorage.setItem('dm_current_session', user.email);
    },
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
    },

    // Analytics Helpers
    getExerciseHistory: (exercise, limit = 5) => {
        const workouts = store.getWorkouts();
        return workouts.filter(w => w.exercise === exercise).reverse().slice(0, limit);
    },

    calculateVolume: (workout) => {
        return (parseFloat(workout.weight) || 0) * (parseInt(workout.sets) || 0) * (parseInt(workout.reps) || 0);
    },

    getPersonalBest: (exercise) => {
        const workouts = store.getWorkouts();
        const filtered = workouts.filter(w => w.exercise === exercise);
        if (filtered.length === 0) return 0;
        return Math.max(...filtered.map(w => parseFloat(w.weight)));
    },

    getUserStats: () => {
        const user = store.getUser() || {};
        const profile = user.profile || {};
        const metrics = store.getBodyMetrics();
        const currentWeight = metrics.length > 0 ? parseFloat(metrics[metrics.length - 1].weight) : parseFloat(profile.weight) || 70;
        const currentHeight = parseFloat(profile.height) || 170;
        const age = 25; // Default age if not provided
        const gender = 'male'; // Default
        
        return { weight: currentWeight, height: currentHeight, age, gender, goal: profile.goal || 'normal' };
    }
};

// ==========================================
// RECOMMENDATION ENGINE
// ==========================================
const engine = {
    // Calculates the recommended next session weight for an exercise
    calculateNextTarget: (exercise) => {
        const history = store.getExerciseHistory(exercise, 3);
        if (history.length === 0) return null;

        const lastWorkout = history[0];
        const recovery = store.getRecovery();
        const effort = parseInt(lastWorkout.effort);
        const currentWeight = parseFloat(lastWorkout.weight);
        
        let action = 'maintain'; // maintain, increase, decrease, deload
        let targetWeight = currentWeight;
        let percentage = 0;
        let trend = 'stable';

        // Trend Analysis
        if (history.length >= 3) {
            const efforts = history.map(h => parseInt(h.effort));
            if (efforts.every(e => e <= 4)) trend = 'improving';
            if (efforts.every(e => e >= 9)) trend = 'plateauing';
        }

        // Core Logic - Multi-Factor Recommendation
        if (trend === 'improving' && recovery.sleep === 'Good') {
            action = 'increase';
            percentage = 0.075; // Aggressive 7.5% increase
        } else if (effort <= 5 && recovery.sleep !== 'Poor' && recovery.soreness === 'Low') {
            action = 'increase';
            percentage = 0.05; // Standard 5% increase
        } else if (trend === 'plateauing' || effort >= 10 || (effort >= 9 && recovery.soreness === 'High')) {
            action = 'decrease';
            percentage = 0.10; // 10% deload to break plateau or manage fatigue
        } else if (effort >= 8 || recovery.soreness === 'High' || recovery.sleep === 'Poor') {
            action = 'decrease';
            percentage = 0.05; // Light 5% reduction
        } else {
            action = 'maintain';
        }

        // Apply math and round to nearest 2.5 kg
        if (action === 'increase') {
            targetWeight = currentWeight * (1 + percentage);
        } else if (action === 'decrease') {
            targetWeight = currentWeight * (1 - percentage);
        }

        // Rounding logic
        targetWeight = Math.round(targetWeight / 2.5) * 2.5;

        // Ensure change happens if action is not maintain
        if (action === 'increase' && targetWeight <= currentWeight) targetWeight = currentWeight + 2.5;
        if (action === 'decrease' && targetWeight >= currentWeight) targetWeight = Math.max(0, currentWeight - 2.5);

        return {
            exercise: exercise,
            currentWeight,
            targetWeight,
            action,
            trend,
            reason: _getImprovedReason(action, trend, effort, recovery)
        };
    },

    // Calculate TDEE using Mifflin-St Jeor Equation
    calculateTDEE: () => {
        const stats = store.getUserStats();
        // Base BMR
        let bmr = (10 * stats.weight) + (6.25 * stats.height) - (5 * stats.age);
        bmr = stats.gender === 'male' ? bmr + 5 : bmr - 161;
        
        // Activity Multiplier (assuming moderate activity 1.55)
        const activityMultiplier = 1.45;
        let tdee = bmr * activityMultiplier;
        
        // Goal Adjustment
        if (stats.goal === 'competition') tdee -= 300; // Deficit for prep
        else tdee += 200; // Slight surplus for fitness/growth
        
        return Math.round(tdee);
    }
};

// Helper for more sophisticated reasoning
function _getImprovedReason(action, trend, effort, recovery) {
    if (trend === 'improving') return `Exceptional trend detected. Pushing weight higher.`;
    if (trend === 'plateauing') return `Consistent high effort detected. Deloading 10% to prevent stall.`;
    if (action === 'increase') return `Low effort (${effort}/10) & good recovery. Time to progress.`;
    if (action === 'decrease') {
        if (recovery.sleep === 'Poor') return `Poor sleep detected. Reducing intensity to aid recovery.`;
        if (recovery.soreness === 'High') return `Significant soreness. Reducing weight to manage fatigue.`;
        return `High intensity (${effort}/10). Adjusting for sustainable volume.`;
    }
    return `Maintaining current weight to build technical proficiency.`;
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
        // Close mobile sidebar if open
        app.closeSidebar();

        // Scroll app content to top
        const content = document.querySelector('.app-content');
        if (content) content.scrollTop = 0;

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
        if (pageId === 'courses') app.renderCourses();
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
         // Show forgot password link only on login
         const forgotLink = document.getElementById('forgot-link');
         if (forgotLink) forgotLink.style.display = isLogin ? 'block' : 'none';
         // Clear any errors
         const errEl = document.getElementById('auth-error');
         if (errEl) errEl.classList.add('hidden');
         document.getElementById('auth-switch-text').innerHTML = isLogin ?
             'New to Dynamate? <a href="#" onclick="app.toggleAuthMode(); return false;" class="text-primary">Sign Up</a>' :
             'Already have an account? <a href="#" onclick="app.toggleAuthMode(); return false;" class="text-primary">Log In</a>';
    },

    handleAuth: () => {
        const email = document.getElementById('auth-email').value.trim();
        const password = document.getElementById('auth-password').value;
        const errorEl = document.getElementById('auth-error');

        const showError = (msg) => {
            errorEl.textContent = msg;
            errorEl.classList.remove('hidden');
        };
        const clearError = () => errorEl.classList.add('hidden');
        clearError();

        if (app.authMode === 'login') {
            // ── LOGIN FLOW ──
            const existingUser = store.getUserByEmail(email);
            if (!existingUser) {
                showError("No account found with this email. Please sign up first.");
                return;
            }
            if (existingUser.password !== password) {
                showError("Incorrect password. Please try again.");
                return;
            }
            // Success
            localStorage.setItem('dm_current_session', email);
            app.updateAuthUI();
            app.showToast(`Welcome back, ${existingUser.name || email.split('@')[0]}!`);
            if (!existingUser.onboardingComplete) {
                document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
                document.getElementById('onboarding-view').classList.add('active');
            } else {
                document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
                document.getElementById('app-view').classList.add('active');
                app.navigateAppPage('dashboard');
            }

        } else {
            // ── SIGN UP FLOW ──
            const name = document.getElementById('auth-name').value.trim();
            if (!name) { showError('Please enter your full name.'); return; }
            if (password.length < 6) { showError('Password must be at least 6 characters.'); return; }

            if (store.getUserByEmail(email)) {
                showError('An account with this email already exists. Please log in.');
                return;
            }

            const newUser = { email, name, password, onboardingComplete: false, profile: {} };
            store.setUser(newUser);
            app.updateAuthUI();
            app.showToast(`Welcome, ${name}! Let's set up your profile.`);
            document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
            document.getElementById('onboarding-view').classList.add('active');
        }
    },

    handleGoogleLogin: () => {
        app.showToast('Connecting to Google...', 'primary');
        setTimeout(() => {
            document.getElementById('google-modal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }, 800);
    },

    closeGoogleModal: (event) => {
        if (event && event.target !== document.getElementById('google-modal')) return;
        document.getElementById('google-modal').classList.add('hidden');
        document.body.style.overflow = '';
    },

    selectGoogleAccount: (email, name) => {
        document.getElementById('google-modal').classList.add('hidden');
        document.body.style.overflow = '';
        
        app.showToast(`Signing in as ${name}...`, 'primary');
        
        setTimeout(() => {
            // Check if user already exists
            let user = store.getUserByEmail(email);
            
            if (!user) {
                // Create new mock user from Google data
                user = {
                    email: email.toLowerCase(),
                    name: name,
                    onboardingComplete: false,
                    profile: {},
                    proStatus: 'inactive'
                };
            }
            
            store.setUser(user);
            app.updateAuthUI();
            app.showToast(`Success! Welcome, ${name.split(' ')[0]}.`, 'primary');

            // Handle post-login redirection
            if (!user.onboardingComplete) {
                document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
                document.getElementById('onboarding-view').classList.add('active');
            } else {
                app.showApp();
            }
        }, 1200);
    },

    logout: () => {
        localStorage.removeItem('dm_current_session');
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
                    if (user.proStatus === 'active') {
                        goalBadge.textContent = 'PRO Athlete';
                        goalBadge.classList.add('primary');
                    } else if (user.profile.goal === 'competition') {
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
        const bodyFields = document.getElementById('ob-body-fields');
        const compFields = document.getElementById('ob-competition-fields');

        if (goal === 'normal') {
            bodyFields.classList.remove('hidden');
            compFields.classList.add('hidden');
            document.getElementById('ob-weight').required = true;
            document.getElementById('ob-height').required = true;
            document.getElementById('ob-comp-type').required = false;
        } else if (goal === 'competition') {
            bodyFields.classList.remove('hidden');
            compFields.classList.remove('hidden');
            document.getElementById('ob-weight').required = true;
            document.getElementById('ob-height').required = true;
            document.getElementById('ob-comp-type').required = true;
        } else {
            bodyFields.classList.add('hidden');
            compFields.classList.add('hidden');
            document.getElementById('ob-weight').required = false;
            document.getElementById('ob-height').required = false;
            document.getElementById('ob-comp-type').required = false;
        }
    },

    handleOnboarding: () => {
        const goal = document.getElementById('ob-goal').value;
        let profile = { goal };

        // Capture weight & height for BOTH normal and competition
        const weight = document.getElementById('ob-weight').value;
        const height = document.getElementById('ob-height').value;
        if (weight) profile.weight = weight;
        if (height) profile.height = height;

        if (goal === 'competition') {
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

        // Recommendations with Trend Analysis
        const exercises = store.getUniqueExercises();
        let recsHTML = '<div class="empty-state">Log a workout to receive smart targets.</div>';
        if (exercises.length > 0) {
            recsHTML = '';
            exercises.forEach(ex => {
                const rec = engine.calculateNextTarget(ex);
                if (rec) {
                    let icon = 'fa-minus', text = 'Maintain weight';
                    if (rec.action === 'increase') { icon = 'fa-arrow-trend-up'; text = 'Increase weight'; }
                    if (rec.action === 'decrease') { icon = 'fa-arrow-trend-down'; text = 'Reduce weight'; }
                    
                    const pb = store.getPersonalBest(ex);
                    const isPB = rec.targetWeight > pb;
                    const trendIcon = rec.trend === 'improving' ? '<i class="fa-solid fa-bolt text-warning" title="improving trend"></i>' : '';

                    recsHTML += `
                        <div class="rec-item ${rec.action}" onclick="app.fastLog('${ex}', ${rec.targetWeight})">
                            <div style="flex-grow: 1;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <h4>${ex}</h4>
                                    ${trendIcon}
                                    ${isPB ? '<span class="badge text-xs" style="background: rgba(255,215,0,0.2); color: gold; border: 1px solid gold;">Potential PB</span>' : ''}
                                </div>
                                <p><i class="fa-solid ${icon}"></i> ${text}</p>
                            </div>
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
                const volume = store.calculateVolume(w);
                recentHTML += `
                    <div class="history-item">
                        <div class="history-main">
                            <h4>${w.exercise}</h4>
                            <p>${dateStr} • <span class="text-accent">${volume} kg vol</span></p>
                        </div>
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
                    <div class="stat-label">Lifetime Workouts</div>
                </div>
                <div class="stat-card glass-card">
                    <div class="stat-icon"><i class="fa-solid fa-weight-hanging"></i></div>
                    <div class="stat-value">${Math.round(workouts.filter(w => (new Date() - new Date(w.date)) / (1000 * 60 * 60 * 24) <= 7).reduce((s, w) => s + store.calculateVolume(w), 0) / 1000)}k</div>
                    <div class="stat-label">Weekly Vol (kg)</div>
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
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <h4>${ex}</h4>
                        ${rec && rec.trend === 'improving' ? '<i class="fa-solid fa-bolt text-warning" style="font-size: 0.8rem;"></i>' : ''}
                    </div>
                    <div class="comp-lift-stats">
                        <div><span class="text-muted">Current</span><br><b>${last ? last.weight + ' kg' : '—'}</b></div>
                        <div><span class="text-muted">Target</span><br><b class="text-primary">${rec ? rec.targetWeight + ' kg' : '—'}</b></div>
                    </div>
                    ${rec && rec.targetWeight > store.getPersonalBest(ex) ? '<div style="font-size: 0.65rem; color: gold; margin-top: 5px;"><i class="fa-solid fa-star"></i> Potential PB</div>' : ''}
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
                const volume = store.calculateVolume(w);
                recentHTML += `
                    <div class="history-item">
                        <div class="history-main">
                            <h4>${w.exercise}</h4>
                            <p>${dateStr} • <span class="text-accent">${volume} kg vol</span></p>
                        </div>
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
                    <div class="program-day-header">
                        <span class="day-badge">${day.day || ''}</span>
                        <h4 class="program-day-title"><i class="fa-solid fa-calendar-day text-primary"></i> ${day.name}</h4>
                    </div>
                    
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
                    </div>`;
            
            if (day.foods && day.foods.length > 0) {
                html += `
                    <div class="program-food-section mt-4 pt-3" style="border-top: 1px solid var(--border)">
                        <h5 class="mb-2"><i class="fa-solid fa-utensils text-primary"></i> Daily Nutrition Focus</h5>
                        <ul class="program-food-list">
                            ${day.foods.map(food => `<li>${food}</li>`).join('')}
                        </ul>
                    </div>`;
            }
            
            html += `
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
            const volume = store.calculateVolume(w);
            
            container.innerHTML += `
                <div class="history-item">
                    <div class="history-main">
                        <h4>${w.exercise}</h4>
                        <p>${dateStr} • ${w.sets} sets x ${w.reps} reps</p>
                        <p class="text-accent" style="font-size: 0.8rem; margin-top: 4px;">Total Volume: ${volume} kg</p>
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
                    
                    <h4 class="mt-4 mb-3">Your Personalized Daily Targets</h4>
                    <div class="diet-macros">
                        <div class="macro-card" style="border-bottom: 2px solid var(--accent)">
                            <h4>Calories</h4>
                            <div class="value" style="color: var(--accent)">${engine.calculateTDEE()}</div>
                            <small class="text-muted">Target based on goals</small>
                        </div>
                        <div class="macro-card" style="border-bottom: 2px solid var(--accent)">
                            <h4>Protein</h4>
                            <div class="value" style="color: var(--accent)">${Math.round(store.getUserStats().weight * (parseFloat(macros.protein) || 2.2))}g</div>
                            <small class="text-muted">High frequency intake</small>
                        </div>
                        <div class="macro-card" style="border-bottom: 2px solid var(--accent)">
                            <h4>Carbs</h4>
                            <div class="value" style="color: var(--accent)">${Math.round(store.getUserStats().weight * (parseFloat(macros.carbs) || 2.5))}g</div>
                            <small class="text-muted">Performance fuel</small>
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
                    
                    <h4 class="mt-4 mb-3">Daily Target Baseline</h4>
                    <div class="diet-macros">
                        <div class="macro-card">
                            <h4>Calories</h4>
                            <div class="value">${engine.calculateTDEE()}</div>
                            <small class="text-muted">Sustainable intake</small>
                        </div>
                        <div class="macro-card">
                            <h4>Protein</h4>
                            <div class="value">${Math.round(store.getUserStats().weight * 1.8)}g</div>
                            <small class="text-muted">Muscle preservation</small>
                        </div>
                        <div class="macro-card">
                            <h4>Carbs/Fats</h4>
                            <div class="value">Flexible</div>
                            <small class="text-muted">Focus on whole foods</small>
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

        const targetCals = engine.calculateTDEE();
        const progress = Math.min(100, Math.round((totals.calories / targetCals) * 100));
        
        summaryContainer.innerHTML = `
            <div style="margin-bottom: 1.5rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span class="text-muted">Daily Calorie Budget</span>
                    <span class="font-weight-bold">${Math.round(totals.calories)} / ${targetCals} kcal</span>
                </div>
                <div style="height: 10px; background: var(--bg-card-hover); border-radius: 5px; overflow: hidden; border: 1px solid var(--border);">
                    <div style="width: ${progress}%; height: 100%; background: ${progress > 100 ? 'var(--danger)' : 'var(--primary)'}; transition: width 0.5s ease-out;"></div>
                </div>
            </div>
            <div class="diet-summary-grid">
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

    // ==========================================
    // PASSWORD & AUTH UTILITIES
    // ==========================================
    togglePasswordVisibility: (fieldId) => {
        const field = document.getElementById(fieldId);
        const icon = document.getElementById(fieldId + '-eye');
        if (!field) return;
        if (field.type === 'password') {
            field.type = 'text';
            if (icon) { icon.className = 'fa-solid fa-eye-slash'; }
        } else {
            field.type = 'password';
            if (icon) { icon.className = 'fa-solid fa-eye'; }
        }
    },

    // Forgot password state
    _forgotEmail: null,

    showForgotPassword: () => {
        // Reset modal state
        document.getElementById('forgot-step1').classList.remove('hidden');
        document.getElementById('forgot-step2').classList.add('hidden');
        document.getElementById('forgot-error').classList.add('hidden');
        document.getElementById('forgot-email').value = '';
        const np = document.getElementById('forgot-new-password');
        const cp = document.getElementById('forgot-confirm-password');
        if (np) np.value = '';
        if (cp) cp.value = '';
        app._forgotEmail = null;
        document.getElementById('forgot-modal').classList.remove('hidden');
    },

    closeForgotPasswordModal: (event) => {
        if (event && event.target !== document.getElementById('forgot-modal')) return;
        document.getElementById('forgot-modal').classList.add('hidden');
    },

    verifyForgotEmail: () => {
        const email = document.getElementById('forgot-email').value.trim();
        const errorEl = document.getElementById('forgot-error');
        errorEl.classList.add('hidden');

        if (!email) {
            errorEl.textContent = 'Please enter your email address.';
            errorEl.classList.remove('hidden');
            return;
        }

        const user = store.getUserByEmail(email);
        if (!user) {
            errorEl.textContent = 'No account found with this email address.';
            errorEl.classList.remove('hidden');
            return;
        }

        app._forgotEmail = email;
        document.getElementById('forgot-step1').classList.add('hidden');
        document.getElementById('forgot-step2').classList.remove('hidden');
    },

    resetPassword: () => {
        const newPass = document.getElementById('forgot-new-password').value;
        const confirmPass = document.getElementById('forgot-confirm-password').value;
        const errorEl = document.getElementById('forgot-error');
        errorEl.classList.add('hidden');

        if (!newPass || newPass.length < 6) {
            errorEl.textContent = 'Password must be at least 6 characters.';
            errorEl.classList.remove('hidden');
            return;
        }
        if (newPass !== confirmPass) {
            errorEl.textContent = 'Passwords do not match. Please try again.';
            errorEl.classList.remove('hidden');
            return;
        }

        // Update user password in store
        const user = store.getUserByEmail(app._forgotEmail);
        if (user) {
            user.password = newPass;
            store.setUser(user);
        }

        document.getElementById('forgot-modal').classList.add('hidden');
        app._forgotEmail = null;
        app.showToast('Password reset successfully! Please log in.');

        // Switch to login mode
        if (app.authMode !== 'login') app.toggleAuthMode();
    },

    // ==========================================
    // COURSES & UPI PAYMENT
    // ==========================================
    renderCourses: () => {
        const container = document.getElementById('courses-content');
        let html = `<div class="courses-grid">`;

        COURSES.forEach(course => {
            const discount = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);
            const isPurchased = localStorage.getItem(`dm_course_${course.id}`) === 'purchased';
            html += `
                <div class="course-card glass-card">
                    <div class="course-card-header" style="--course-color: ${course.color}">
                        <div class="course-icon-wrap"><i class="fa-solid ${course.icon}"></i></div>
                        <div class="course-level-badge">${course.level}</div>
                    </div>
                    <div class="course-card-body">
                        <h3 class="course-title">${course.title}</h3>
                        <div class="course-meta">
                            <span><i class="fa-solid fa-user-tie"></i> ${course.instructor}</span>
                            <span><i class="fa-solid fa-clock"></i> ${course.duration}</span>
                            <span><i class="fa-solid fa-layer-group"></i> ${course.modules} Modules</span>
                        </div>
                        <p class="course-desc">${course.description}</p>
                        <ul class="course-highlights">
                            ${course.highlights.map(h => `<li><i class="fa-solid fa-check text-primary"></i> ${h}</li>`).join('')}
                        </ul>
                        <div class="course-footer">
                            <div class="course-price-wrap">
                                <div class="course-price">&#8377;${course.price.toLocaleString('en-IN')}</div>
                                <div class="course-original-price">&#8377;${course.originalPrice.toLocaleString('en-IN')}</div>
                                <div class="course-discount-badge">${discount}% OFF</div>
                            </div>
                            ${isPurchased
                                ? `<button class="btn btn-block course-enrolled-btn" disabled><i class="fa-solid fa-check-circle"></i> Enrolled</button>`
                                : `<button class="btn btn-primary btn-block course-buy-btn" onclick="app.openPaymentModal('${course.id}')"><i class="fa-solid fa-bolt"></i> Enroll Now</button>`
                            }
                        </div>
                    </div>
                </div>`;
        });

        html += `</div>`;
        container.innerHTML = html;
    },

    // Current course being purchased
    _activeCourseId: null,

    openPaymentModal: (itemId) => {
        const item = COURSES.find(c => c.id === itemId) || PLANS.find(p => p.id === itemId);
        if (!item) return;
        app._activeCourseId = itemId;

        document.getElementById('modal-course-title').textContent = item.title;
        document.getElementById('modal-course-sub').textContent = `${item.instructor} · ${item.duration} · ${item.modules} Modules`;
        document.getElementById('modal-course-price').innerHTML = `&#8377;${item.price.toLocaleString('en-IN')}`;
        document.getElementById('utr-input').value = '';

        const modal = document.getElementById('payment-modal');
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    },

    closePaymentModal: (event) => {
        if (event && event.target !== document.getElementById('payment-modal')) return;
        document.getElementById('payment-modal').classList.add('hidden');
        document.body.style.overflow = '';
        app._activeCourseId = null;
    },

    copyUPIId: () => {
        const upiId = document.getElementById('upi-id-display').textContent;
        navigator.clipboard.writeText(upiId).then(() => {
            app.showToast('UPI ID copied to clipboard!');
        }).catch(() => {
            app.showToast('dynamate@upi — copy manually.');
        });
    },

    processUPIPayment: () => {
        const utr = document.getElementById('utr-input').value.trim();
        if (!utr || utr.length < 8) {
            app.showToast('Please enter a valid Transaction ID (UTR).', 'danger');
            return;
        }
        if (!app._activeCourseId) return;

        const isPlan = app._activeCourseId.startsWith('plan_');
        
        if (isPlan) {
            const user = store.getUser();
            if (user) {
                user.proStatus = 'active';
                user.planId = app._activeCourseId;
                store.setUser(user);
                app.showToast('Payment confirmed! Your Pro Subscription is now active. 🚀');
            } else {
                // If not logged in, we mark it as paid for this session
                localStorage.setItem('dm_pending_pro', app._activeCourseId);
                app.showToast('Payment confirmed! Please log in or sign up to activate your subscription.');
                app.navigateToAuth('signup');
            }
        } else {
            // Mark course as purchased
            localStorage.setItem(`dm_course_${app._activeCourseId}`, 'purchased');
            app.showToast('Payment confirmed! You are now enrolled. 🎉');
        }

        document.getElementById('payment-modal').classList.add('hidden');
        document.body.style.overflow = '';
        app._activeCourseId = null;

        // Re-render UI
        setTimeout(() => {
            app.updateAuthUI();
            app.renderCourses();
        }, 500);
    },

    // Mobile sidebar toggle
    toggleSidebar: () => {
        const nav = document.getElementById('app-nav');
        const overlay = document.getElementById('sidebar-overlay');
        if (nav) nav.classList.toggle('sidebar-open');
        if (overlay) overlay.classList.toggle('hidden');
    },

    closeSidebar: () => {
        const nav = document.getElementById('app-nav');
        const overlay = document.getElementById('sidebar-overlay');
        if (nav) nav.classList.remove('sidebar-open');
        if (overlay) overlay.classList.add('hidden');
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
