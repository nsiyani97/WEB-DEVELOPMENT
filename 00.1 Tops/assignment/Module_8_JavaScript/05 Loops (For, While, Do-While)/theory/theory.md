### Question 1: Explain the different types of loops in JavaScript (for, while, do-while). Provide a basic example of each.

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

### Question 2: What is the difference between a while loop and a do-while loop?

- **while:** Condition is checked before executing.
- The while loop loops through a block of code as long as a specified condition is true.

- **do-while:** Executes once before checking condition.
- The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

---
