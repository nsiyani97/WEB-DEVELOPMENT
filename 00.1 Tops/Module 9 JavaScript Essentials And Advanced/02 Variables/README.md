- Variables & Data Types Coverage
- Depth: var, let, const—scope & reassignment.
- Primitive vs Reference types.
- Dynamic typing in JS.
- Demo: Create variables: let userName="Aarya", let followers=1500. Display in console.
- Link to App: Represent profile details in JS variables.

---

# 📘 Variables & Data Types in JavaScript

## 1️⃣ What is this topic about?

In JavaScript, **variables** are used to **store data**, and **data types** describe **what kind of data** is stored.

👉 In real apps (like your **Bio-Link App**), variables hold:

- User name
- Followers count
- Bio text
- Links
- Profile status

JavaScript is **dynamically typed**, meaning:

> You don’t need to declare the data type explicitly.

---

## 2️⃣ Variables in JavaScript (var, let, const)

### ✅ Definition

A **variable** is a container that stores values which can be used and manipulated in a program.

### ✅ Syntax

```js
keyword variableName = value;
```

---

## 3️⃣ var, let, const — Scope & Reassignment (Depth)

### 🔹 1. `var` (OLD – avoid using)

```js
var name = "Aarya";
```

❌ Problems with `var`:

- Function scoped (not block scoped)
- Can be redeclared
- Causes bugs in large apps

```js
var x = 10;
var x = 20; // allowed ❌
```

👉 **Not recommended in modern JavaScript**

---

### 🔹 2. `let` (MOST USED)

```js
let followers = 1500;
```

✅ Features:

- Block scoped `{ }`
- Can be reassigned
- Cannot be redeclared in same scope

```js
let age = 22;
age = 23; // allowed ✅
```

❌

```js
let age = 25; // error ❌
```

👉 Use `let` when value **changes**

---

### 🔹 3. `const` (FIXED VALUE)

```js
const country = "India";
```

✅ Features:

- Block scoped
- Cannot be reassigned
- Must be initialized

❌

```js
const city;
city = "Mumbai"; // error ❌
```

👉 Use `const` when value **should not change**

---

### ✅ Quick Comparison Table

| Keyword | Scope    | Reassign | Redeclare | Use Case        |
| ------- | -------- | -------- | --------- | --------------- |
| var     | Function | ✅       | ✅        | Avoid           |
| let     | Block    | ✅       | ❌        | Changing values |
| const   | Block    | ❌       | ❌        | Fixed values    |

---

## 4️⃣ JavaScript Data Types

### 🔹 Primitive Types (Stored by VALUE)

| Type      | Example    |
| --------- | ---------- |
| String    | `"Aarya"`  |
| Number    | `1500`     |
| Boolean   | `true`     |
| Undefined | `let x;`   |
| Null      | `null`     |
| Symbol    | `Symbol()` |
| BigInt    | `123n`     |

```js
let userName = "Aarya"; // String
let followers = 1500; // Number
let isVerified = true; // Boolean
```

---

### 🔹 Reference Types (Stored by REFERENCE)

| Type     | Example      |
| -------- | ------------ |
| Object   | `{}`         |
| Array    | `[]`         |
| Function | `function()` |

```js
let profile = {
  name: "Aarya",
  followers: 1500,
};
```

📌 Difference:

- **Primitive** → copies value
- **Reference** → shares memory location

---

## 5️⃣ Dynamic Typing in JavaScript

### ✅ Definition

JavaScript allows changing data type **at runtime**.

```js
let data = "Hello";
data = 100;
data = true;
```

✔ No error
❗ Powerful but dangerous if misused

👉 That’s why **good naming + discipline** matters.

---

## 6️⃣ Demo: Create Variables & Display in Console

### 🎯 Given Demo Requirement

> Create variables:
> `let userName = "Aarya"` > `let followers = 1500`
> Display in console

### ✅ Code Example

```js
let userName = "Aarya";
let followers = 1500;

console.log(userName);
console.log(followers);
```

### 🖥 Console Output

```
Aarya
1500
```

---

## 7️⃣ Link to App: Bio-Link Profile Representation

Now let’s **connect this topic to a real app idea** 💡

### 🎯 Bio-Link Profile Variables

```js
const profileName = "Aarya";
let followerCount = 1500;
const bio = "Frontend Developer | Learner";
let isOnline = true;
```

### 🔍 Why this matters?

- These variables later connect to:

  - DOM elements
  - Buttons
  - API data
  - User interactions

---

## 8️⃣ Mini Project: Profile Console App

### 📂 `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Bio Link App</title>
  </head>
  <body>
    <h1>Open Console</h1>

    <script src="script.js"></script>
  </body>
</html>
```

---

### 📂 `script.js`

```js
const userName = "Aarya";
let followers = 1500;
const profession = "Frontend Developer";

console.log("User Name:", userName);
console.log("Followers:", followers);
console.log("Profession:", profession);

// Update followers
followers += 100;

console.log("Updated Followers:", followers);
```

---

## 9️⃣ Learning Outcome ✅

After this lesson, students understand:

- ✔ Difference between `var`, `let`, `const`
- ✔ Primitive vs Reference types
- ✔ Dynamic typing in JavaScript
- ✔ How variables represent **real app data**
- ✔ How JS executes logic before DOM usage

---
