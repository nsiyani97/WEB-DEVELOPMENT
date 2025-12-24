//  Create a JavaScript program using a switch statement to display the day of theweek based on the user input (e.g., 1 for Monday, 2 for Tuesday, etc.).

// User input (1 to 7)
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid input! Please enter a number between 1 and 7.");
}

// output: Wednesday
