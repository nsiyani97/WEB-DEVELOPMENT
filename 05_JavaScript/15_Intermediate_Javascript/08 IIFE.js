/*
  IIFE: Immediately Invoked Function Expression
  
  An IIFE is a function that runs the moment it is defined.
  
  Syntax:
  (function() {
    // code
  })();

  Why use it?
  1. To avoid polluting the global namespace. Variables defined inside an IIFE are not accessible from the outside.
  2. To create a private scope for variables.
  3. Often used in older JavaScript (pre-ES6) to simulate block scope, though block-scoped variables (let/const) have largely replaced this need.
*/

// 1. Basic IIFE
(function () {
    console.log("I run immediately!");
})();

// 2. IIFE with parameters
(function (name) {
    console.log(`Hello, ${name}!`);
})("Antigravity");

// 3. Avoiding Global Pollution
// 'secret' is not accessible outside the IIFE
(function () {
    const secret = "I am hidden";
    console.log("Inside IIFE:", secret);
})();

// console.log(secret); // ReferenceError: secret is not defined

// 4. Returning values from IIFE
const result = (function (num1, num2) {
    return num1 + num2;
})(5, 10);

console.log("Result from IIFE:", result);