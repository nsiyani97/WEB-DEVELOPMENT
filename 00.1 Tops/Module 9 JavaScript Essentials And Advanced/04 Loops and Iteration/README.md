- Loops & Iteration
- For, While, Do-While, For-of, ForEach.
- Difference between indexed and iterable loops.
- Demo: Loop through an array of social links and print each in console.
- Learning Goal: Understand repetition and dynamic rendering concept.

---

# 🔁 Loops & Iteration in JavaScript

## 1️⃣ What is this topic about?

**Loops** allow us to **repeat a block of code** until a condition is satisfied or until all values are processed.

They are fundamental when working with:

- Arrays and lists
- Dynamic UI rendering
- Data coming from APIs
- Automation and repetitive logic

👉 In real-world apps (Bio-Link, Social Profile, Dashboard apps), loops help you:

- Display multiple social links
- Render lists dynamically
- Process user or API data efficiently

---

## 2️⃣ Loop Types: Definitions, Syntax & Examples

---

### 🔹 1. `for` Loop

**Definition:**
A `for` loop is used when the **number of iterations is known in advance**.
It gives full control over start, end, and step.

**Syntax:**

```js
for (initialization; condition; increment) {
  // code to execute
}
```

**Example:**

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

### 🔹 2. `while` Loop

**Definition:**
A `while` loop runs **as long as a condition is true**.
The condition is checked **before each iteration**.

**Syntax:**

```js
while (condition) {
  // code
}
```

**Example:**

```js
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

---

### 🔹 3. `do...while` Loop

**Definition:**
A `do...while` loop **executes at least once**, even if the condition is false.

**Syntax:**

```js
do {
  // code
} while (condition);
```

**Example:**

```js
let i = 5;
do {
  console.log(i);
} while (i < 3);
```

---

### 🔹 4. `for...of` Loop

**Definition:**
Used to loop directly over **values of iterable objects** such as arrays and strings.

**Syntax:**

```js
for (value of iterable) {
  // code
}
```

**Example:**

```js
let colors = ["red", "blue", "green"];
for (let color of colors) {
  console.log(color);
}
```

---

### 🔹 5. `forEach()` Method

**Definition:**
`forEach()` is an **array method** that executes a callback function for **each element**.

**Syntax:**

```js
array.forEach((item, index) => {
  // code
});
```

**Example:**

```js
colors.forEach((color, index) => {
  console.log(index, color);
});
```

---

## 3️⃣ Indexed Loops vs Iterable Loops (Conceptual Explanation)

---

## 🔢 Indexed Loops

### ✅ Definition: Indexed Loop

An **indexed loop** is a loop where:

- You manually control a **numeric index**
- You decide where the loop starts and ends
- Data is accessed using **index positions** (`array[i]`)

👉 The loop operates on **numbers first**, values second.

---

### 🔹 Common Indexed Loops

- `for`
- `while`
- `do...while`

---

### 🔹 Example (Indexed Loop)

```js
let users = ["Aarya", "Rahul", "Neha"];

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}
```

**What’s happening here?**

- `i` represents the index
- `users[i]` fetches the value
- Full logical control over iteration

---

### 🔹 When to Use Indexed Loops

Use indexed loops when:

- You need **position-based logic**
- You want to **skip, jump, reverse**
- You have **complex conditions**

```js
if (i % 2 === 0) {
  console.log("Even index:", users[i]);
}
```

---

## 🔁 Iterable Loops

### ✅ Definition: Iterable Loop

An **iterable loop** automatically loops through **each value** of an iterable object.

- No manual index handling
- Focuses directly on **values**
- Cleaner and more readable

---

### 🔹 Common Iterable Loops

- `for...of`
- `forEach()`

---

### 🔹 Example (Iterable Loop)

```js
let users = ["Aarya", "Rahul", "Neha"];

for (let user of users) {
  console.log(user);
}
```

**What’s happening here?**

- Values are accessed directly
- No index variable needed
- Code is concise and readable

---

### 🔹 When to Use Iterable Loops

Use iterable loops when:

- Rendering UI lists
- Iterating arrays without index logic
- Writing clean, readable code

---

### 🔍 Comparison Summary

| Feature       | Indexed Loops          | Iterable Loops        |
| ------------- | ---------------------- | --------------------- |
| Examples      | `for`, `while`         | `for...of`, `forEach` |
| Index control | ✅ Yes                 | ❌ No                 |
| Focus         | Index + Value          | Value only            |
| Best use      | Logic-heavy operations | UI rendering          |
| Readability   | Medium                 | High                  |

📌 **Trainer Tip:**

> Use **indexed loops** for logic and calculations,
> use **iterable loops** for rendering and traversal.

---

## 4️⃣ Demo: Loop Through Social Links

### 🔹 Data

```js
let socialLinks = ["https://instagram.com/nikhil", "https://github.com/nikhil", "https://linkedin.com/in/nikhil"];
```

---

### 🔹 Using `for`

```js
for (let i = 0; i < socialLinks.length; i++) {
  console.log(socialLinks[i]);
}
```

---

### 🔹 Using `for...of`

```js
for (let link of socialLinks) {
  console.log(link);
}
```

---

### 🔹 Using `forEach`

```js
socialLinks.forEach((link) => {
  console.log(link);
});
```

---

## 5️⃣ Mini Project: Dynamic Rendering Concept

### 🔹 HTML

```html
<ul id="links"></ul>
<script src="script.js"></script>
```

---

### 🔹 JavaScript (`script.js`)

```js
let socialLinks = ["Instagram", "GitHub", "LinkedIn"];
let ul = document.getElementById("links");

socialLinks.forEach((platform) => {
  let li = document.createElement("li");
  li.innerText = platform;
  ul.appendChild(li);
});
```

📌 **Result:**
Each array item is dynamically converted into a UI element.

---
