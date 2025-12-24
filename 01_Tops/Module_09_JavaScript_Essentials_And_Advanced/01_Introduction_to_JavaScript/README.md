- Introduction to JavaScript & Environment Setup Coverage Depth:
- What JavaScript is (client-side vs server-side).
- How browsers interpret JS and connect it with HTML via & script & tag.
- Running JS in console (browser + VS Code Live Server).
- Demo: Add alert(Welcome to your Bio-Link App!) inside an HTML file.
- Learning Goal: Students understand how JS executes and connects to DOM.

---

# 📘 Introduction to JavaScript & Environment Setup

## 1️⃣ What is this topic about?

This topic introduces **JavaScript** as a programming language and explains:

- Where JavaScript runs (browser vs server)
- How JavaScript connects with HTML
- How JavaScript code executes
- How to run JavaScript in real environments
- How JavaScript interacts with the **DOM (Document Object Model)**

👉 By the end, students should clearly understand **how JS executes and controls web pages**.

---

## 2️⃣ What is JavaScript? (Definition + Syntax)

### ✅ Definition

**JavaScript** is a **high-level, interpreted programming language** used to make web pages **interactive, dynamic, and functional**.

JavaScript can run in:

- **Client-side** (browser)
- **Server-side** (Node.js)

---

### ✅ Basic JavaScript Syntax

```js
alert("Hello World");
```

- `alert` → built-in JavaScript function
- `"Hello World"` → string value
- `;` → statement end (optional but recommended)

---

## 3️⃣ Client-side vs Server-side JavaScript

### 🔹 Client-side JavaScript

Runs **inside the browser**.

Used for:

- Button clicks
- Form validation
- Showing alerts
- DOM manipulation

Example:

```js
document.body.style.backgroundColor = "yellow";
```

📌 Runs on:

- Chrome
- Edge
- Firefox

---

### 🔹 Server-side JavaScript

Runs **on the server** using **Node.js**.

Used for:

- APIs
- Database operations
- Authentication

Example:

```js
console.log("Server is running");
```

📌 Runs on:

- Node.js environment (not browser)

---

## 4️⃣ How Browsers Interpret JavaScript

### 🔄 Execution Flow

```
HTML loads
↓
Browser sees <script>
↓
JavaScript engine executes JS line by line
↓
JS interacts with DOM
```

Each browser has a **JavaScript engine**:

- Chrome → V8
- Firefox → SpiderMonkey

---

## 5️⃣ Connecting JavaScript with HTML (`<script>` tag)

### ✅ Inline JavaScript

```html
<script>
  alert("Hello");
</script>
```

⚠️ Not recommended for large projects.

---

### ✅ External JavaScript (BEST PRACTICE)

```html
<script src="script.js"></script>
```

Benefits:

- Clean code
- Reusable JS
- Easy maintenance

---

### 📌 Important Placement

```html
<body>
  <!-- HTML Content -->

  <script src="script.js"></script>
</body>
```

Why?

- HTML loads first
- JS runs after DOM is ready

---

## 6️⃣ Running JavaScript in Console

### 🖥️ Browser Console

Steps:

1. Open browser
2. Right-click → Inspect
3. Go to **Console**
4. Type:

```js
alert("Hello from Console");
```

---

### 🧑‍💻 VS Code + Live Server

Steps:

1. Install **Live Server extension**
2. Right-click `index.html`
3. Click **Open with Live Server**
4. JS executes automatically in browser

---

## 7️⃣ Demo: Add Alert to HTML File

### 📁 Project Structure

```
bio-link-app/
│
├── index.html
└── script.js
```

---

### 📝 index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Bio-Link App</title>
  </head>
  <body>
    <h1>Welcome to My Bio-Link App</h1>

    <script src="script.js"></script>
  </body>
</html>
```

---

### 📝 script.js

```js
alert("Welcome to your Bio-Link App!");
```

✅ What happens:

- Browser loads HTML
- `<script>` tag loads `script.js`
- JS executes alert
- User sees popup

---

## 8️⃣ How JavaScript Connects to DOM

### 🧠 DOM Definition

**DOM (Document Object Model)** is a tree-like structure representing HTML elements.

JavaScript can:

- Read elements
- Modify content
- Change styles
- Add events

Example:

```js
document.querySelector("h1").style.color = "blue";
```

---

## 9️⃣ Execution Summary (Very Important for Students)

```
HTML → Parsed
↓
DOM Created
↓
JavaScript Executes
↓
JS Manipulates DOM
```

---

## 🎯 Learning Goal (Achieved)

After this lesson, students understand:

✅ What JavaScript is
✅ Where JavaScript runs
✅ How JS connects to HTML
✅ How browsers execute JS
✅ How JS interacts with DOM

---
