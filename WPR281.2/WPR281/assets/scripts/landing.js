document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("logWorkoutForm");
    const workoutList = document.getElementById("workoutList");
    const totalWorkouts = document.getElementById("totalWorkouts");
    const totalCalories = document.getElementById("totalCalories");
    const avgDuration = document.getElementById("avgDuration");
    const goalType = document.getElementById("goalType");
    const goalAmount = document.getElementById("goalAmount");
    const goalProgress = document.getElementById("goalProgress");
    const progressBar = document.getElementById("progress");
    let workouts = JSON.parse(localStorage.getItem("workouts")) || [];
    let goal = JSON.parse(localStorage.getItem("goal")) || { type: "calories", target: 0 };

    document.getElementById("setGoal").addEventListener("click", () => {
        goal = { type: goalType.value, target: parseInt(goalAmount.value) };
        localStorage.setItem("goal", JSON.stringify(goal));
        updateGoalProgress();
    });

    function updateGoalProgress() {
        let progress = 0;
        if (goal.type === "calories") {
            progress = (totalCalories.textContent / goal.target) * 100;
        } else {
            progress = (totalWorkouts.textContent / goal.target) * 100;
        }
        progress = Math.min(progress, 100);
        goalProgress.textContent = progress.toFixed(2) + "%";
        progressBar.style.width = progress + "%";
    }
    
    function renderWorkouts() {
        workoutList.innerHTML = "";
        let totalDur = 0;
        let totalCal = 0;
        workouts.forEach((workout) => {
            totalDur += workout.duration;
            totalCal += workout.calories;
            const li = document.createElement("li");
            li.textContent = `${workout.type} - ${workout.duration} min - ${workout.calories} cal - ${workout.date}`;
            workoutList.appendChild(li);
        });
        totalWorkouts.textContent = workouts.length;
        totalCalories.textContent = totalCal;
        avgDuration.textContent = workouts.length ? (totalDur / workouts.length).toFixed(2) : 0;
        updateGoalProgress();
    }
    
    renderWorkouts();
});