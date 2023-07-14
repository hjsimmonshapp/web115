function generateMealPlan() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var goal = document.getElementById("goal").value;
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    var meals = {
      Monday: ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"],
      Tuesday: ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"],
      Wednesday: ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"],
      Thursday: ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"],
      Friday: ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"],
      Saturday: ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"],
      Sunday: ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"]
    };
  
    var htmlContent = "<html><head><title>Meal Plan</title>";
    htmlContent += "<style>body { font-family: monospace; }</style>";
    htmlContent += "</head><body>";
    htmlContent += "<h1>Meal Plan for the Week</h1>";
    htmlContent += "<h2>Name: " + name + "</h2>";
    htmlContent += "<h2>Email: " + email + "</h2>";
    htmlContent += "<h2>Goal: " + goal + "</h2>";
    htmlContent += "<table><thead><tr><th>Day</th><th>Meals</th></tr></thead><tbody>";
  
    for (var day in meals) {
      htmlContent += "<tr><td>" + day + "</td><td>";
      htmlContent += "<ul>";
  
      meals[day].forEach(function (meal) {
        htmlContent += "<li>" + meal + "</li>";
      });
  
      htmlContent += "</ul></td></tr>";
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
