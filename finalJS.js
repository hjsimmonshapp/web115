// Validate email address
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to generate the meal plan
function generateMealPlan(event) {
    event.preventDefault(); // Prevent form submission

    const form = document.getElementById("mealPlanForm");
    const email = form.email.value;

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false; // Stop form submission
    }

    const name = form.name.value;
    const goal = form.goal.value;

    const mealPlan = `
        <html>
        <head>
            <title>Weekly Meal Plan</title>
            <style>
                body { font-family: monospace; background: linear-gradient(to top, #FF6F61, #FFD194); color: white; }
                h1 { text-align: center; }
                .meal-plan { padding: 10px; }
            </style>
        </head>
        <body>
            <h1>Weekly Meal Plan</h1>
            <div class="meal-plan">
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Weekly Goal: ${goal}</p>
                <h2>Meal Plan:</h2>
                <ul>
                    <li>Breakfast: ${form.breakfast.value}</li>
                    <li>Morning Snack: ${form.snack1.value}</li>
                    <li>Lunch: ${form.lunch.value}</li>
                    <li>Afternoon Snack: ${form.snack2.value}</li>
                    <li>Dinner: ${form.dinner.value}</li>
                </ul>
                <h2>Weekly Schedule:</h2>
                <ul>
                    <li>Monday: ${form.monday.value}</li>
                    <li>Tuesday: ${form.tuesday.value}</li>
                    <li>Wednesday: ${form.wednesday.value}</li>
                    <li>Thursday: ${form.thursday.value}</li>
                    <li>Friday: ${form.friday.value}</li>
                    <li>Saturday: ${form.saturday.value}</li>
                    <li>Sunday: ${form.sunday.value}</li>
                </ul>
            </div>
        </body>
        </html>
    `;

    // Open new window with generated meal plan
    const newWindow = window.open("", "_blank");
    newWindow.document.write(mealPlan);

    return false; // Prevent default form submission behavior
}

// Function to clear the form
function clearForm() {
    document.getElementById("mealPlanForm").reset();
}
