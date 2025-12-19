### Question 1: What are functions in JavaScript? Explain the syntax for declaring and calling a function.

- In JavaScript, a function is a reusable block of code designed to perform a specific task.
  Functions help make your code modular, organized, and reusable — instead of writing the same code multiple times, you can define it once and call it whenever needed.

```javascript
function greet(name) {
  console.log("Hello!" + name);
}
greet("Nikhil");
```

`function` — keyword used to declare a function.
`functionName` — name of the function (used to call it later).
`parameters` — optional input values passed into the function (comma-separated).

- You call the function using its name followed by parentheses ()
- Inside the parentheses, you can pass arguments that match the parameters

{ } — block containing the statements to execute.

---

### Question 2: What is the difference between a function declaration and a function expression?

- A function declaration is a statement used to create functions in JavaScript. It starts with the function keyword followed by the function name and parameters. As long as you stick to the naming conventions, you can provide your function or parameters with any name you want. Also, function declarations are "hoisted," meaning you can call them before they're defined.

- **Function Declaration:**

  ```javascript
  function add(a, b) {
    return a + b;
  }
  ```

- A function expression is also a statement, defining a function as an expression. It starts with you declaring a variable such as let, const, or var, followed by an assignment operator (=), and it doesn't need a name (an anonymous function) unless you give it one. Also, they are not "hoisted," meaning you can only use them after you define them, or you'll get an error.

- **Function Expression:**

  ```javascript
  const add = function (a, b) {
    return a + b;
  };
  ```

- Declarations are hoisted; expressions are not.

---

### Question 3: Discuss the concept of parameters and return values in functions.

- Parameters are variables listed inside the parentheses of a function definition. They allow you to pass data into a function so it can work with dynamic values.

- The return statement sends a value back to the place where the function was called.
- It allows functions to produce results that can be stored or reused.

- Parameters accept input values; `return` sends output back.

```javascript
function greet(name) {
  // 'name' is a parameter
  console.log("Hello, " + name + "!");
}

greet("Nikhil"); // 'Nikhil' is an argument (actual value)

function add(a, b) {
  return a + b; // returns the sum of a and b
}

let sum = add(5, 3);
console.log(sum); // Output: 8
```

---
