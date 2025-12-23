- Asynchronous JS
- Callbacks, Promises, Async/Await (Part 1) Coverage Depth:
- Blocking vs non-blocking code.
- What are callbacks?
- Creating and resolving Promises.
- Demo: Simulate loading message using setTimeout.

---

# 🔄 Asynchronous JavaScript (Part 1)

[Asynchronous](https://framerusercontent.com/images/oyf1FaA8kyZa0Y22FvN9UPQyEk.png?height=2156&width=3833&utm_source=chatgpt.com) | 
[Event Loop](https://media.geeksforgeeks.org/wp-content/uploads/20250208123836185275/Event-Loop-in-JavaScript.jpg?utm_source=chatgpt.com) | 
[Async Await](https://nikgrozev.com/images/blog/async-await/SimplePromiseExample.png?utm_source=chatgpt.com)

## 1️⃣ What is this topic about?

**Asynchronous JavaScript** is about handling tasks that **take time** (like loading data, waiting for a response, timers) **without stopping the rest of the program**.

👉 JavaScript is **single-threaded**, but it can still handle async tasks using:

- Callbacks
- Promises
- Async / Await

This is **very important** for real applications:

- Loading data from APIs
- Showing loaders (`Loading...`)
- Saving data to servers
- Delaying actions (timers, animations)

---

## 2️⃣ Blocking vs Non-Blocking Code

### 🔴 Blocking (Synchronous) Code

**Definition:**
Blocking code **stops execution** until the task is finished.

**Example:**

```js
console.log("Start");

alert("Blocking Alert"); // stops everything

console.log("End");
```

⛔ User cannot interact until alert closes.

---

### 🟢 Non-Blocking (Asynchronous) Code

**Definition:**
Non-blocking code allows JavaScript to **continue executing** while a task runs in the background.

**Example:**

```js
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 2000);

console.log("End");
```

✅ Output order:

```
Start
End
Async Task
```

👉 JavaScript **does not wait** for `setTimeout`.

---

## 3️⃣ What are Callbacks?

### ✅ Definition

A **callback** is a **function passed as an argument** to another function, which is executed **after a task is completed**.

### 🔹 Simple Callback Example

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Aarya", function () {
  console.log("Welcome to the app!");
});
```

---

### 🔹 Callback with `setTimeout`

```js
setTimeout(function () {
  console.log("Data loaded using callback");
}, 2000);
```

⚠️ **Problem with Callbacks:**
Too many callbacks → **Callback Hell** (hard to read & maintain).

---

## 4️⃣ Promises

### ✅ Definition

A **Promise** represents a value that will be available:

- ✅ **Resolved** (success)
- ❌ **Rejected** (error)
- ⏳ **Pending** (waiting)

---

### 🔹 Creating a Promise

```js
const loadData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded successfully");
  }, 2000);
});
```

---

### 🔹 Consuming a Promise

```js
loadData
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
```

✅ Cleaner than callbacks
✅ Better error handling

---

## 5️⃣ Async / Await (Preview)

### ✅ Definition

`async/await` is **syntactic sugar** over promises that makes async code look **synchronous**.

---

### 🔹 Example

```js
async function fetchData() {
  const result = await loadData;
  console.log(result);
}

fetchData();
```

✔ Easier to read
✔ Easier to debug

---

## 6️⃣ Demo: Simulate Loading Message (setTimeout)

### 🎯 Goal

Show **Loading…** → then **Loaded Successfully**

---

### 🧪 HTML

```html
<h2 id="status">Loading...</h2>
```

---

### 🧪 JavaScript

```js
setTimeout(() => {
  document.getElementById("status").innerText = "Loaded Successfully!";
}, 3000);
```

🧠 Explanation:

- Page loads instantly
- JS waits **3 seconds**
- Text updates asynchronously

---

## 7️⃣ Real-World Connection (Student Level)

| Concept      | Real App Example          |
| ------------ | ------------------------- |
| Callbacks    | Button click, form submit |
| Promises     | API call to server        |
| Async/Await  | Fetch user profile        |
| Non-Blocking | Loading spinner           |
| setTimeout   | Delay animations          |

---

## 8️⃣ Mini Practice Task 🧠

👉 Try this yourself:

1. Show `"Please wait..."` on page
2. After 2 seconds → show `"Welcome Back!"`
3. Use **Promise + setTimeout**

If you want, next we can:

- Build a **fake API loader**
- Convert callback → promise → async/await
- Create a **mini project (Loading Screen App)** 🚀
