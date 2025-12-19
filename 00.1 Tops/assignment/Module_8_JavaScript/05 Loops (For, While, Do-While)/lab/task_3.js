// Write a do-while loop that continues to ask the user for input until they enter a number greater than 10.

let userNumber;

do {
  userNumber = Number(prompt("Enter a number greater than 10:"));
} while (userNumber <= 10);

console.log("You entered a valid number:", userNumber);

/*
output:
Enter a number greater than 10:
You entered a valid number: 15
*/
