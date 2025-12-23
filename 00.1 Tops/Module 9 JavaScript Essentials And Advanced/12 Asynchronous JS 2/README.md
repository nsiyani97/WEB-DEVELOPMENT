- Asynchronous JS (Part 2)
- Fetch API Coverage Depth:
- fetch() GET & POST.
- Chaining Promises & handling responses.
- Parsing JSON responses.
- Demo: Fetch mock user data from https://jsonplaceholder.typicode.com/users.
- Depth: Show network tab request ? response cycle

---

# 🌐 Asynchronous JavaScript (Part 2) – Fetch API

## 1️⃣ What is this topic about?

In real-world applications, JavaScript **communicates with servers** to:

- Get data (users, posts, products)
- Send data (forms, login, orders)
- Update UI based on server response

👉 **Fetch API** is the modern way to handle **HTTP requests** in JavaScript.

It works asynchronously and **returns Promises**, so it fits perfectly with what you learned in **Callbacks → Promises → Async/Await**.

---

## 2️⃣ Definition: Fetch API

### ✅ Definition

**Fetch API** is a built-in JavaScript function used to make **network requests** (HTTP requests) like GET, POST, PUT, DELETE.

```js
fetch(url, options);
```

It returns a **Promise** that resolves to a **Response object**.

---

## 3️⃣ Basic Fetch Syntax (GET)

### 🔹 Syntax

```js
fetch("API_URL")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

### 🔍 What happens step-by-step?

1. `fetch()` sends request to server
2. Server sends response
3. `response.json()` converts JSON → JS object
4. `.then()` receives final data
5. `.catch()` handles errors

---

## 4️⃣ Fetch GET – Real Example (Users API)

### 📡 API Used

```
https://jsonplaceholder.typicode.com/users
```

### 🧪 Code

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json(); // parsing JSON
  })
  .then((users) => {
    console.log("Users:", users);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

📌 **Important Concept**

- `response` is NOT the data
- `response.json()` is also async → returns a Promise

---

## 5️⃣ Chaining Promises (Important Concept)

### ✅ Definition

**Promise chaining** means passing data from one `.then()` to another.

```js
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    // use data
  })
  .then(() => {
    // next async step
  })
  .catch((err) => console.log(err));
```

👉 This avoids **callback hell** and keeps code readable.

---

## 6️⃣ Fetch POST – Sending Data to Server

### 🔹 Syntax

```js
fetch("API_URL", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(dataObject),
});
```

### 🧪 Example: Create New User

```js
fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Nikhil",
    email: "nikhil@gmail.com",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Created User:", data);
  });
```

📌 JSONPlaceholder **simulates** POST (no real DB).

---

## 7️⃣ Parsing JSON Responses

### 🔹 Why needed?

Servers send data as **JSON string**, not JS objects.

### 🔄 Conversion

```js
JSON string → response.json() → JavaScript object
```

Example:

```js
{
  "name": "Leanne Graham"
}
```

Becomes:

```js
data.name; // "Leanne Graham"
```

---

## 8️⃣ Network Tab – Request ↔ Response Cycle (VERY IMPORTANT)

### 🧪 Steps to Observe

1. Open **Chrome DevTools**
2. Go to **Network tab**
3. Reload page
4. Click on `users`
5. Observe:

   - Request URL
   - Method (GET / POST)
   - Status (200, 404)
   - Response JSON
   - Headers

📌 This shows how frontend talks to backend in real apps.

---

# 🧩 Mini Project: Fetch Users App

### 📁 Project Structure

```
fetch-users-app/
│
├── index.html
├── style.css
└── script.js
```

---

## 📄 index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Fetch Users</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Users List</h1>
    <button id="loadBtn">Load Users</button>

    <ul id="userList"></ul>

    <script src="script.js"></script>
  </body>
</html>
```

---

## 📄 style.css

```css
body {
  font-family: Arial;
  padding: 20px;
}

li {
  margin: 8px 0;
}
```

---

## 📄 script.js

```js
const button = document.getElementById("loadBtn");
const userList = document.getElementById("userList");

button.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      userList.innerHTML = "";

      users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = `${user.name} - ${user.email}`;
        userList.appendChild(li);
      });
    })
    .catch((error) => {
      console.log("Error loading users", error);
    });
});
```

---

## 9️⃣ What You Learned (Learning Goals Achieved)

✅ Fetch API GET & POST
✅ Promise chaining
✅ JSON parsing
✅ Real API usage
✅ Network tab understanding
✅ Dynamic DOM rendering

---

# 🔄 Fetch API using Async / Await

## 1️⃣ What is async / await? (Quick Recap)

### ✅ Definition

- `async` makes a function return a **Promise**
- `await` pauses execution until the Promise resolves

👉 It makes **asynchronous code look synchronous**, which is easier to read and debug.

---

## 2️⃣ Old Way vs New Way (Concept Comparison)

### ❌ Promise Chaining

```js
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

### ✅ Async / Await

```js
try {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
} catch (error) {
  console.log(error);
}
```

📌 `try...catch` replaces `.catch()`.

---

## 3️⃣ Project Structure (Same as Before)

```
fetch-users-app/
│
├── index.html
├── style.css
└── script.js
```

No changes in HTML or CSS ✔️

---

## 4️⃣ index.html (No Change)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Fetch Users</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Users List</h1>
    <button id="loadBtn">Load Users</button>

    <ul id="userList"></ul>

    <script src="script.js"></script>
  </body>
</html>
```

---

## 5️⃣ script.js – Async / Await Version (IMPORTANT)

### 🔹 Step 1: Select DOM Elements

```js
const button = document.getElementById("loadBtn");
const userList = document.getElementById("userList");
```

---

### 🔹 Step 2: Create Async Function

```js
async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    userList.innerHTML = "";

    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(li);
    });
  } catch (error) {
    console.log("Error loading users:", error);
  }
}
```

---

### 🔹 Step 3: Attach Event Listener

```js
button.addEventListener("click", loadUsers);
```

---

## 6️⃣ Full script.js (Final)

```js
const button = document.getElementById("loadBtn");
const userList = document.getElementById("userList");

async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    userList.innerHTML = "";

    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(li);
    });
  } catch (error) {
    console.log("Error loading users:", error);
  }
}

button.addEventListener("click", loadUsers);
```

---

## 7️⃣ What Happens Internally? (Execution Flow)

1. Button clicked
2. `loadUsers()` runs
3. `fetch()` sends GET request
4. `await` pauses until response arrives
5. JSON parsed
6. Users rendered to DOM
7. Errors handled in `catch`

---

## 8️⃣ Network Tab (Same Observation)

Even with async/await:

- Request → Response flow is **identical**
- Only syntax changes
- Browser behavior stays the same

📌 Async/await is just **syntax sugar** over Promises.

---

## 9️⃣ Interview Tip 💡

> **Q:** Does async/await make JS synchronous?
> **A:** ❌ No. It only makes async code _look_ synchronous.

---
