### Question 1: What is control flow in JavaScript? Explain how if-else statements work with an example.

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

### Question 2: Describe how switch statements work in JavaScript. When should you use a switch statement instead of if-else?

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
