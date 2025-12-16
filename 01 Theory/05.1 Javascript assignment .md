# JavaScript Assignment

### Question 1: What is JavaScript? Explain the role of JavaScript in web development.

JavaScript is a high-level, interpreted programming language that allows developers to add interactivity, dynamic behavior, and logic to web pages. It works alongside HTML and CSS to create responsive and interactive websites.

1. **Interactivity**: JavaScript makes web pages interactive by responding to user actions such as clicks, typing, or scrolling.

- Showing an alert when a button is clicked or validating a form before submission.

2. **DOM Manipulation**: The Document Object Model (DOM) represents the structure of an HTML document. JavaScript can access and modify this structure in real-time to update content dynamically.

- Changing text, adding elements, or updating styles without reloading the page.

3. **Event Handling**: JavaScript can listen for events (like clicks, mouse movements, or keyboard presses) and execute specific code in response.

- Changing the background color when a button is clicked.

4. **Asynchronous Communication**: Using technologies like AJAX or the Fetch API, JavaScript can communicate with servers to send and receive data without reloading the page.

- Loading new content dynamically in a web app such as chat messages or live updates.

5. **Form Validation**: JavaScript checks the correctness of user input in forms before sending it to the server.

- Ensuring that an email address or password field is filled correctly.

6. **Enhancing User Experience (UX)**: JavaScript improves how users interact with a website by adding smooth transitions, animations, and instant feedback.

- Sliders, pop-up modals, and animated menus.

7. **Frontend and Backend Development**: JavaScript runs in both the browser (frontend) and on the server (backend) using environments like Node.js.

- Frontend: React.js for UI
- Backend: Node.js for server logic

8. **Dynamic Content Creation**: JavaScript can generate or change HTML content dynamically based on data or user interaction.

- Displaying live search results as the user types.

9. **Cross-Browser Compatibility**: JavaScript helps ensure web pages function correctly across different web browsers with consistent behavior.

- Adjusting styles or features depending on the user’s browser.

10. **Integration with Other Technologies**: JavaScript integrates with HTML (for structure) and CSS (for style) to create complete, interactive web applications.

- Using JavaScript with CSS animations or HTML5 APIs like Geolocation or Canvas.

---

### Question 2: How is JavaScript different from other programming languages like Python or Java?

1. **Syntax**: JavaScript uses curly braces `{}` to define code blocks and semicolons `;` to end statements, while Python relies on indentation and Java requires class and method structures.

2. **Execution**: JavaScript runs directly in web browsers and on servers via Node.js, whereas Python and Java usually run on servers, desktops, or other standalone environments.

3. **Typing**: JavaScript is loosely (dynamically) typed, meaning variable types can change at runtime. Java is statically typed, and Python is dynamically typed but strongly enforced.

4. **Use Case**: JavaScript is mainly used for frontend web development (and full-stack with Node.js), while Python and Java are commonly used for backend development, data analysis, AI, or system-level applications.

5. **Object-Oriented Approach**: JavaScript uses a prototype-based object system, while Python and Java are class-based and follow traditional object-oriented principles.

6. **Concurrency Model**: JavaScript uses an event-driven, asynchronous model with callbacks and promises, whereas Python and Java handle concurrency using threads or processes.

7. **Compilation**: JavaScript is interpreted and runs instantly in browsers. Python is also interpreted, while Java must be compiled into bytecode before execution.

8. **Learning Curve**: JavaScript and Python are easier to learn due to simpler syntax, while Java is more verbose and requires more setup.

---

### Question 3: Discuss the use of `<script>` tag in HTML. How can you link an external JavaScript file to an HTML document?

- The `<script>` tag is used to insert or reference JavaScript code in HTML. To link an external JS file, use <script src="script.js"></script>. This tag is usually placed before </body> for faster page loading.

- To include JavaScript directly:
  ```html
  <script>
    alert("Hello, World!");
  </script>
  ```
- To link an external file:
  ```html
  <script src="script.js"></script>
  ```

---

### Question 4: What are variables in JavaScript? How do you declare a variable using var, let, and const?

- a **variable** is a container for storing data values such as numbers, strings, objects, or functions. Variables make code reusable and dynamic because they allow us to work with data in memory.

- var has a global scope or function scope; let and const are block-scoped.

- var can be re-declared and updated, let can be updated but not re-declared.

- const cannot be re-declared or updated, that’s why they’re called “constants”.

Variables store data values.

```javascript
var name = "John";
let age = 25;
const country = "India";
```

---

### Question 5: Explain the different data types in JavaScript. Provide examples for each.

- primitive : String, Number, Boolean, Null, Undefined, Symbols
  Primitive data types are the main elements that make up all the data you work with in JavaScript. They are immutable, meaning you can't change their values once you create them. Also, they're stored in memory as single values.

- non-primitive : Object, Array, Function
  Non-primitive data types, also called reference data types, store groups of data or complex structures. They are mutable, meaning you can change their values once you create them. Unlike primitive data types, they're stored in memory as references rather than single values.

1. **String** – `"Hello"`
2. **Number** – `42`
3. **Boolean** – `true`
4. **Null** – intentional absence of value
5. **Undefined** – a variable declared but not assigned
6. **Object** – `{name: "John"}`
7. **Array** – `[1, 2, 3]`
8. **Function** - `function add(a = 10, b = 5) { return a + b; }`

---

### Question 6: What is the difference between undefined and null in JavaScript?

- **undefined**: A variable has been declared but not assigned a value.
- **null**: A null variable is a variable or property that is empty. You use null variables when you want to show that a variable has no values or want to clear the value of a variable.

---

### Question 7: What are the different types of operators in JavaScript? Explain with examples.

**Arithmetic operators:** `+ , - , * , / , % , ++ , -- , **`

- Arithmetic operators in JavaScript are used to perform mathematical calculations on numbers or variables such as addition, subtraction, multiplication, division, Exponentiation and more.

Arithmetic operators perform arithmetic on numbers .
The numbers (in an arithmetic operation) are called operands.
The operation (to be performed between the two operands) is defined by an operator.

**Assignment operators:** `=`, `+=`, `-=`  
Assignment operators assign values to JavaScript variables.

**Comparison operators:** `==`, `===`, `!=`, `>`

- Comparison operators is used to compare two values or expressions. They return a Boolean value — true or false — based on whether the comparison condition is satisfied.
- They are commonly used in conditional statements like if, while, and loops to make decisions in the program.

**Logical operators:** `&&`, `||`, `!`

- Logical operators is used to combine or compare multiple conditions and return a Boolean value (true or false).
- They are commonly used in decision-making statements like if, while, and loops.

**Spread operators:** The `...` operator splits iterables into individual elements.
The spread operator expands an iterable into a list of individual elements, while the rest parameter gathers a variable number of arguments into a single array. The latter is used to define functions with a variable number of parameters.

---

### Question 8: What is the difference between == and === in JavaScript?

- Are the comparison operators.
- `==` compares values after type conversion.
- `===` compares values **and** types (strict equality).

---

### Question 9: What is control flow in JavaScript? Explain how if-else statements work with an example.

- Control Flow is the order in which statements are executed in a program.

- By default, JavaScript runs code from top to bottom and left to right.

- Control flow statements let you change that order, based on conditions (if, else if, switch), loops (for, while, do while) or keywords (break, continue, return).

- Control flow determines the order in which code executes.

- They help a program make decisions, repeat tasks, or jump to specific sections of code.

```javascript
let age = 20;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

### Question 10: Describe how switch statements work in JavaScript. When should you use a switch statement instead of if-else?

- A switch statement is used to execute one block of code out of many options based on the value of a variable or expression.

- It’s an alternative to writing multiple if...else if conditions — making code cleaner and easier to read when checking the same variable against multiple values.

```javascript
let color = "red";
switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Wait");
}
```

- Use `switch` when checking the same variable against multiple values.

---

### Question 11: Explain the different types of loops in JavaScript (for, while, do-while). Provide a basic example of each.

- For Loops can execute a block of code a number of times.
- For Loops are fundamental for tasks like performing an action multiple times.

- The while loop loops through a block of code as long as a specified condition is true.

- The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

```javascript
for (let i = 0; i < 3; i++) console.log(i);

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);
```

---

### Question 12: What is the difference between a while loop and a do-while loop?

- **while:** Condition is checked before executing.
- The while loop loops through a block of code as long as a specified condition is true.

- **do-while:** Executes once before checking condition.
- The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

---

### Question 13: What are functions in JavaScript? Explain the syntax for declaring and calling a function.

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

### Question 14: What is the difference between a function declaration and a function expression?

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

### Question 15: Discuss the concept of parameters and return values in functions.

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

### Question 16: What is an array in JavaScript? How do you declare and initialize an array?

- An array in JavaScript is a special type of object used to store multiple values in a single variable.
- Each value in an array is called an element, and each element has an index number (starting from 0).

1. Using Square Brackets [] (Most Common Way)
2. Using the new Array() Constructor

```javascript
let fruits = ["apple", "banana", "cherry"];
let numbers = new Array(10, 20, 30, 40);

// access
console.log(fruits[0]);

console.log(fruits[fruits.length - 1]);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}
```

---

### Question 17: Explain the methods push(), pop(), shift(), and unshift() used in arrays.

- `push()` – Add to end
- `pop()` – Remove from end
- `shift()` – Remove from start
- `unshift()` – Add to start

---

### Question 18: What is an object in JavaScript? How are objects different from arrays?

- An object in JavaScript is a collection of data represented as key–value pairs. It is used to store multiple related pieces of information together under one name.

- There are two ways to access values of objects: Dot notation, Bracket notation.

```javascript
// object
let person = {
  name: "Nikhil",
  age: 25,
  city: "Mumbai",
};

console.log(person.name);
console.log(person["city"]);
```

1. **Structure**: Objects store data in key–value pairs, where each key maps to a value, while arrays store data in indexed positions starting from 0.

2. **Syntax**: Objects use curly braces {} with key–value pairs like `{name: "Nikhil", age: 25}`, while arrays use square brackets [] like `["Apple", "Banana", "Mango"]`.

3. **Access**: Object values are accessed using property names `(obj.key or obj["key"])`, while array elements are accessed using numeric indexes `(arr[0], arr[1])`.

4. **Order**: Objects are unordered collections — the order of keys is not guaranteed, while arrays are ordered by their index positions.

5. **Use Case**: Objects are best for representing entities with named properties (like a person or product), while arrays are ideal for lists or sequences of data (like items, numbers, or names).

---

### Question 19: Explain how to access and update object properties using dot notation and bracket notation.

- Uses a dot (.) to access or modify a property directly.
- Dot notation use the object name, followed by a dot, and then the property name.

- Uses square brackets ([]) with a string key.
- Bracket notation allows you to access or update object properties using string keys placed inside square brackets.
- It is useful when the property name is stored in a variable, or contains spaces or special characters.

```javascript
let person = { name: "Nikhil", age: 25 };
console.log(person.name); // Access → Output: Nikhil

person.age = 26; // Update
console.log(person.age); // Output: 26

let person = { name: "Nikhil", age: 25, "home city": "Mumbai" };

console.log(person["age"]); // Access → Output: 25
console.log(person["home city"]); // Works, unlike dot notation

person["age"] = 27; // Update
console.log(person["age"]); // Output: 27
```

---

### Question 20: What are JavaScript events? Explain the role of event listeners.

- JavaScript **events** are actions or occurrences that happen in the browser — such as a user clicking a button, typing in a textbox, or loading a webpage.
- These events allow JavaScript to make web pages interactive and dynamic.
- ex. : click, mouseover, keydown, load

- An **event listener** is a function in JavaScript that waits for a specific event to happen on an element and then executes code in response.
- It allows you to separate HTML and JavaScript logic for cleaner and more flexible code.

```javascript
let button = document.getElementById("myBtn");

button.addEventListener("click", function () {
  alert("Button was clicked!");
});
```

- Keeps HTML and JavaScript code separate
- Allows multiple events on the same element
- Makes code easier to maintain and debug
- Supports modern event handling practices

---

### Question 21: How does the addEventListener() method work in JavaScript? Provide an example.

- The addEventListener() method in JavaScript is used to attach an event handler to an HTML element.
- It listens for a specific event type (like click, mouseover, or keydown) and executes a function when that event occurs.

- element.addEventListener(event, function, useCapture);

```html
<button id="myBtn">Click Me</button>

<script>
  let button = document.getElementById("myBtn");

  button.addEventListener("click", function () {
    alert("Button was clicked!");
  });
</script>
```

---

### Question 22: What is the DOM (Document Object Model) in JavaScript? How does JavaScript interact with the DOM?

- The DOM is a structured representation of a webpage's elements (HTML or XML page). Whenever an HTML page loads, the web browser creates a DOM for that page. It's a way for JavaScript to understand and change a webpage's content, layout, and style.

- The DOM represents the web page as a tree-like structure of objects. Each web page element, like paragraphs and images, becomes an object in this tree. JavaScript uses the DOM to manipulate these objects and make the webpage interactive.

- The DOM allows JavaScript to access, modify, add, or delete HTML elements and their content dynamically.

```javascript
// 1. Accessing Elements
document.getElementById("title"); // by ID
document.getElementsByClassName("class"); // by class name
document.getElementsByTagName("p"); // by tag name
document.querySelector(".class"); // first matching element
document.querySelectorAll("p"); // all matching elements

// 2. Changing Content
heading.innerText = "Welcome to JavaScript!";
heading.style.color = "blue";

// 3. Creating and Adding New Elements
let newPara = document.createElement("p");
newPara.innerText = "This is a new paragraph.";
document.body.appendChild(newPara);

// 4. Removing Elements
heading.remove(); // Removes the <h1> element
```

---

### Question 23: Explain the methods getElementById(), getElementsByClassName(), and querySelector() used to select elements from the DOM.

- `getElementById("id")` – is used to select a single HTML element by its unique id attribute.

- `getElementsByClassName("class")` – is used to select all elements that share the same class name.

- `querySelector("selector")` – selects the first element that matches a CSS selector (like #id, .class, or tag name).

---

### Question 24: Explain the setTimeout() and setInterval() functions in JavaScript. How are they used for timing events?

- **setTimeout()** – The setTimeout() function is used to execute a function once — after a specified delay (in milliseconds).

- **setInterval()** – The setInterval() function is used to execute a function repeatedly — at fixed time intervals (in milliseconds).

- You can stop the repeated execution using **clearInterval()**

```javascript
setTimeout(function, delay);
setInterval(function, interval);
```

---

### Question 25: Provide an example of how to use setTimeout() to delay an action by 2 seconds.

```javascript
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);
```

---

### Question 26: What is error handling in JavaScript? Explain the try, catch, and finally blocks with an example.

**Error handling** in JavaScript is a mechanism that allows developers to detect, handle, and respond to runtime errors — preventing the entire program from crashing and providing meaningful feedback to users or developers.

- JavaScript provides several ways to handle errors gracefully, the most common being the `try...catch...finally` statement.

1. **try**: The `try` block contains the code that might throw an error. If no error occurs, the `catch` block is skipped.

2. **catch**: The `catch` block runs only if an error occurs inside the `try` block. It receives the error object (usually named `error` or `err`) which provides details about what went wrong.

3. **finally**: The `finally` block always executes, whether or not an error occurred. It’s typically used for cleanup tasks, like closing connections or clearing temporary data.

```javascript
try {
  // Code that may cause an error
  let num = 10;
  console.log("Before error");

  // Intentional error
  console.log(num.toUpperCase()); // ❌ num is a number, not a string

  console.log("This line won't run");
} catch (error) {
  // Handles the error
  console.log("An error occurred:", error.message);
} finally {
  // Always runs
  console.log("Execution completed (with or without error).");
}
```

**Custom error** is an error that developers create intentionally using the `throw` statement to handle specific situations or invalid conditions in a program.

- It allows developers to display meaningful error messages instead of system-generated ones, making debugging and user feedback easier.

```javascript
try {
  let marks = -10;
  if (marks < 0) {
    throw new Error("Marks cannot be negative!");
  }
} catch (error) {
  console.log("Error:", error.message);
}
```

---

### Question 27: Why is error handling important in JavaScript applications?

- **Error handling** is crucial in JavaScript because it ensures that programs run smoothly even when unexpected problems occur. It helps maintain application stability, user experience, and code reliability.

1. Prevents Application Crashes

- Without error handling, even a small runtime error can stop the entire program.
- Proper handling ensures the app continues running smoothly.

2. Improves User Experience

- Instead of showing confusing error messages or breaking the UI, users can see friendly messages like “Something went wrong, please try again.”

3. Makes Debugging Easier

- Errors can be logged or displayed in a controlled way, helping developers quickly identify and fix issues.

4. Ensures Program Stability

- Helps maintain consistent behavior and prevents unexpected failures during execution.

5. Handles Unexpected Situations

- Allows developers to deal with issues such as invalid input, failed network requests, or missing data gracefully.

6. Supports Secure and Reliable Code

- Prevents exposure of sensitive technical details and ensures the program behaves predictably in all cases.
