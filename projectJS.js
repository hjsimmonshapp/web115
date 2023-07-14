function generateMealPlan() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var goal = document.getElementById("goal").value;
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    var meals = {
      Monday: {
        Breakfast: document.getElementById("mondayBreakfast").value,
        Snack: document.getElementById("mondaySnack").value,
        Lunch: document.getElementById("mondayLunch").value,
        SecondSnack: document.getElementById("mondaySecondSnack").value,
        Dinner: document.getElementById("mondayDinner").value
      },
      Tuesday: {
        Breakfast: document.getElementById("tuesdayBreakfast").value,
        Snack: document.getElementById("tuesdaySnack").value,
        Lunch: document.getElementById("tuesdayLunch").value,
        SecondSnack: document.getElementById("tuesdaySecondSnack").value,
        Dinner: document.getElementById("tuesdayDinner").value
      },
      Wednesday: {
        Breakfast: document.getElementById("wednesdayBreakfast").value,
        Snack: document.getElementById("wednesdaySnack").value,
        Lunch: document.getElementById("wednesdayLunch").value,
        SecondSnack: document.getElementById("wednesdaySecondSnack").value,
        Dinner: document.getElementById("wednesdayDinner").value
      },
      Thursday: {
        Breakfast: document.getElementById("thursdayBreakfast").value,
        Snack: document.getElementById("thursdaySnack").value,
        Lunch: document.getElementById("thursdayLunch").value,
        SecondSnack: document.getElementById("thursdaySecondSnack").value,
        Dinner: document.getElementById("thursdayDinner").value
      },
      Friday: {
        Breakfast: document.getElementById("fridayBreakfast").value,
        Snack: document.getElementById("fridaySnack").value,
        Lunch: document.getElementById("fridayLunch").value,
        SecondSnack: document.getElementById("fridaySecondSnack").value,
        Dinner: document.getElementById("fridayDinner").value
      },
      Saturday: {
        Breakfast: document.getElementById("saturdayBreakfast").value,
        Snack: document.getElementById("saturdaySnack").value,
        Lunch: document.getElementById("saturdayLunch").value,
        SecondSnack: document.getElementById("saturdaySecondSnack").value,
        Dinner: document.getElementById("saturdayDinner").value
      },
      Sunday: {
        Breakfast: document.getElementById("sundayBreakfast").value,
        Snack: document.getElementById("sundaySnack").value,
        Lunch: document.getElementById("sundayLunch").value,
        SecondSnack: document.getElementById("sundaySecondSnack").value,
        Dinner: document.getElementById("sundayDinner").value
      }
    };
  
    var htmlContent = "<html><head><title>Meal Plan</title>";
    htmlContent += "<style>body { font-family: monospace; }</style>";
    htmlContent += "</head><body>";
    htmlContent += "<h1>Meal Plan for the Week</h1>";
    htmlContent += "<h2>Name: " + name + "</h2>";
    htmlContent += "<h2>Email: " + email + "</h2>";
    htmlContent += "<h2>Goal: " + goal + "</h2>";
    htmlContent += "<table><thead><tr><th>Day</th><th>Breakfast</th><th>Snack</th><th>Lunch</th><th>Snack</th><th>Dinner</th></tr></thead><tbody>";
  
    for (var day in meals) {
      htmlContent += "<tr><td>" + day + "</td>";
      htmlContent += "<td>" + meals[day].Breakfast + "</td>";
      htmlContent += "<td>" + meals[day].Snack + "</td>";
      htmlContent += "<td>" + meals[day].Lunch + "</td>";
      htmlContent += "<td>" + meals[day].SecondSnack + "</td>";
      htmlContent += "<td>" + meals[day].Dinner + "</td></tr>";
    }
  
    htmlContent += "</tbody></table>";
  
    document.write(htmlContent);
    document.write("<button onclick='window.print();'>Print Meal Plan</button>");
    document.write("<button onclick='downloadMealPlan();'>Download Meal Plan</button>");
    document.write("</body></html>");
  }

  function validateEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  function downloadMealPlan() {
    var htmlContent = document.documentElement.innerHTML;
    var element = document.createElement("a");
    element.setAttribute("href", "data:text/html;charset=utf-8," + encodeURIComponent(htmlContent));
    element.setAttribute("download", "meal_plan.htm");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }