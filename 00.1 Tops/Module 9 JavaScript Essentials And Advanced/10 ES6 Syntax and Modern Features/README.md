- ES6 Syntax & Modern Features Coverage Depth:
- Template literals, default params, destructuring, spread/rest.
- Arrow functions recap.
- Demo: console.log`(Hello ${userName}, you have ${followers} followers!`)`.
- Depth: Use modern syntax in all subsequent examples.

---

# 🔶 ES6 Syntax & Modern JavaScript Features

## 1️⃣ What is this topic about?

**ES6 (ECMAScript 2015)** introduced **modern, cleaner, and more powerful syntax** to JavaScript.

👉 Before ES6, JavaScript code was:

- Longer
- Harder to read
- Less structured

👉 After ES6, code became:

- Shorter ✨
- Easier to understand
- More reusable
- More similar to modern frameworks (React, Angular, Vue)

📌 **Important:**
From now on, **ALL examples will use ES6 syntax** (industry standard).

---

## 2️⃣ Core ES6 Features (Definitions + Syntax)

---

## 🔹 1. Template Literals

### ✅ Definition

Template literals allow you to **embed variables inside strings** using backticks `` ` `` instead of quotes.

### ❌ Old way (ES5)

```js
console.log("Hello " + userName + ", you have " + followers + " followers!");
```

### ✅ ES6 Syntax

```js
console.log(`Hello ${userName}, you have ${followers} followers!`);
```

### 🧠 Why better?

- Cleaner
- No string concatenation
- More readable

---

## 🔹 2. Default Parameters

### ✅ Definition

Default parameters give **default values** to function parameters if no argument is passed.

### ❌ Old way

```js
function greet(name) {
  if (!name) {
    name = "Guest";
  }
  console.log(name);
}
```

### ✅ ES6 Syntax

```js
const greet = (name = "Guest") => {
  console.log(name);
};
```

### Example

```js
greet("Aarya"); // Aarya
greet(); // Guest
```

---

## 🔹 3. Destructuring (Array & Object)

### ✅ Definition

Destructuring allows you to **extract values directly** from arrays or objects.

---

### 📦 Object Destructuring

```js
const user = {
  userName: "Aarya",
  followers: 1500,
  verified: true,
};

const { userName, followers } = user;

console.log(userName); // Aarya
console.log(followers); // 1500
```

🧠 Instead of:

```js
user.userName;
user.followers;
```

---

### 📦 Array Destructuring

```js
const links = ["Instagram", "GitHub", "LinkedIn"];

const [first, second] = links;

console.log(first); // Instagram
console.log(second); // GitHub
```

---

## 🔹 4. Spread & Rest Operator (`...`)

### ✅ Definition

The **spread/rest operator** is used to:

- Copy data
- Merge data
- Collect remaining values

---

### 🔹 Spread (Expanding values)

```js
const socialLinks = ["Instagram", "GitHub"];
const moreLinks = ["LinkedIn", "Twitter"];

const allLinks = [...socialLinks, ...moreLinks];

console.log(allLinks);
```

📌 Output:

```js
["Instagram", "GitHub", "LinkedIn", "Twitter"];
```

---

### 🔹 Rest (Collecting values)

```js
const addNumbers = (...numbers) => {
  console.log(numbers);
};

addNumbers(10, 20, 30);
```

📌 Output:

```js
[10, 20, 30];
```

---

## 🔹 5. Arrow Functions (Quick Recap)

### ❌ Old Function

```js
function add(a, b) {
  return a + b;
}
```

### ✅ Arrow Function

```js
const add = (a, b) => a + b;
```

### With one parameter

```js
const greet = (name) => `Hello ${name}`;
```

📌 Arrow functions:

- Shorter syntax
- No `function` keyword
- Used everywhere in modern JS & React

---

## 3️⃣ Line-by-Line Explanation of Demo

### 🎯 Demo Code

```js
let userName = "Aarya";
let followers = 1500;

console.log(`Hello ${userName}, you have ${followers} followers!`);
```

### 🔍 Explanation

```js
let userName = "Aarya";
```

➡ Stores username

```js
let followers = 1500;
```

➡ Stores follower count

```js
`Hello ${userName}, you have ${followers} followers!`;
```

➡ Template literal:

- `${userName}` → replaced with value
- `${followers}` → replaced with value

```js
console.log(...)
```

➡ Prints final string to console

---

## 4️⃣ Mini Project – ES6 Powered Profile Logger 🚀

### 📁 Project Goal

Use **ES6 syntax only** to:

- Store user data
- Use destructuring
- Use template literals
- Use arrow functions

---

### 📄 `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>ES6 Profile</title>
  </head>
  <body>
    <h2>Check Console</h2>

    <script src="script.js"></script>
  </body>
</html>
```

---

### 📄 `script.js`

```js
// User object
const user = {
  userName: "Aarya",
  followers: 1500,
  links: ["Instagram", "GitHub"],
};

// Destructuring
const { userName, followers, links } = user;

// Arrow function
const showProfile = (name, count) => {
  console.log(`Hello ${name}, you have ${count} followers!`);
};

// Spread operator
const allLinks = [...links, "LinkedIn"];

// Call function
showProfile(userName, followers);

console.log("Social Links:", allLinks);
```

---

## 5️⃣ Learning Outcome ✅

After this topic, you now understand:

✔ ES6 modern syntax
✔ Template literals
✔ Default parameters
✔ Destructuring
✔ Spread & rest operator
✔ Arrow functions
✔ Writing **clean, modern JS code**

---
