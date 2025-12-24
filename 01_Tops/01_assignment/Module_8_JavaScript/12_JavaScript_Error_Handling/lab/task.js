// Write a JavaScript program that attempts to divide a number by zero. Use try-catch to handle the error and display an appropriate error message.

try {
  let a = 10;
  let b = 0;

  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  let result = a / b;
  console.log("Result:", result);
} catch (error) {
  console.log("Error:", error.message);
}

// output: Error: Cannot divide by zero
