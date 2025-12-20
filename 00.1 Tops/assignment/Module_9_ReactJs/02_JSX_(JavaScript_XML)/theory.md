## Question 1: What is JSX in React.js? Why is it used?

**JSX** is a syntax extension to JavaScript and comes with the full power of JavaScript. JSX produces React “elements”. You can embed any JavaScript expression in JSX by wrapping it in curly braces. After compilation, JSX expressions become regular JavaScript objects.

- It makes code more readable and expressive.
- It allows HTML structure and JavaScript logic to exist together in one place.
- JSX is converted into JavaScript using tools like Babel before execution, improving performance and maintainability.
- It helps in creating UI components in a clear and structured way.

---

## Question 2: How is JSX different from regular JavaScript? Can you write JavaScript inside JSX?

**Difference from Regular JavaScript**: In regular JavaScript, elements are created using methods like React.createElement() or document.createElement(), while JSX provides a simpler and more readable way by using HTML-like tags directly inside the code.

**Using JavaScript Inside JSX**: JavaScript code can be embedded inside JSX by enclosing it within curly braces {}. This allows you to use variables, expressions, and function calls directly inside the JSX markup.

---

## Question 3: Discuss the importance of using curly braces {} in JSX expressions.

**Curly Braces {} in JSX**: In JSX, curly braces {} are used to embed JavaScript expressions inside HTML-like code. They allow you to insert dynamic values, variables, or logic directly within the JSX markup.

- You can write a comment in JSX by wrapping it in curly braces and using JavaScript's multi-line comment syntax. {/_ This is a comment _/}

**Dynamic Content**: Curly braces let you display values that change, such as variables or state data.

**Expression Evaluation**: They allow you to perform calculations or call functions directly inside JSX.

**Integration of Logic and UI**: Using {} helps combine JavaScript logic with UI design, making components interactive and flexible.

**Cleaner Syntax**: It avoids the need for string concatenation or separate function calls to update UI content.

---
