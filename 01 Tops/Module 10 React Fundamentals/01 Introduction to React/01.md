- Introduction to React.
- What is React?
- Why React (Virtual DOM, Components).
- create-react-app setup.
- Demo: Run first React app and modify default component.

---

# ⚛️ Introduction to React (Beginner Friendly)

## 1️⃣ What is this topic about?

This topic introduces **React**, a **JavaScript library** used to build **modern, fast, and interactive user interfaces**.

👉 React is mainly used to build **Single Page Applications (SPAs)** like:

- Instagram
- Facebook
- Netflix
- WhatsApp Web

Instead of reloading entire pages, React **updates only what changes** on the screen.

---

## 2️⃣ What is React?

### ✅ Definition

**React** is an **open-source JavaScript library** developed by Facebook for building **user interfaces using reusable components**.

### ✅ Key points

- UI is built using **components**
- Uses **JavaScript + HTML (JSX)**
- Works efficiently using **Virtual DOM**
- Component-based architecture

---

### 🔹 Simple Mental Model

> React = **UI made of small reusable blocks**

Example:

- Header
- Profile Card
- Button
- Footer

Each is a **component**.

---

## 3️⃣ Why React?

Let’s break this into the two most important reasons 👇

---

## 🔹 A) Components

### ✅ Definition

A **component** is a **reusable piece of UI**.

Think of components like **functions for UI**.

### 🔹 Example Components

```txt
App
 ├── Header
 ├── ProfileCard
 ├── SocialLinks
 └── Footer
```

### 🔹 Example Component Code

```jsx
function Welcome() {
  return <h1>Hello React!</h1>;
}
```

✅ This component:

- Is reusable
- Is readable
- Can be combined with other components

---

## 🔹 B) Virtual DOM (Most Important Concept)

### ❌ Traditional DOM (Slow)

If you update **one button**, the browser:

- Recalculates
- Repaints
- Reloads large parts of the page

This is **slow**.

---

### ✅ Virtual DOM (Fast)

React creates a **virtual copy of the DOM** in memory.

#### How it works:

1. Change happens (state/props)
2. React updates **Virtual DOM**
3. React compares old vs new (diffing)
4. Only **changed elements** update in real DOM

👉 Result: **Very fast UI updates**

---

### 🔹 Simple Example

If only a **like counter** changes:
❌ Page reload? → NO
✅ Only number updates → YES

---

## 4️⃣ create-react-app Setup

Now let’s move from theory → practice 💻

---

### ✅ What is `create-react-app`?

It is a **tool** that:

- Sets up React project automatically
- Handles Webpack, Babel, folder structure
- Saves beginner time

---

### 🔹 Step 1: Check Node.js

React needs **Node.js**.

```bash
node -v
npm -v
```

If not installed 👉 download from nodejs.org

---

### 🔹 Step 2: Create React App

```bash
npx create-react-app my-first-react-app
```

📁 Folder created:

```txt
my-first-react-app
```

---

### 🔹 Step 3: Run the App

```bash
cd my-first-react-app
npm start
```

🌐 Browser opens:

```
http://localhost:3000
```

🎉 Your **first React app is running!**

---

## 5️⃣ Understanding Default Project Structure

Important files 👇

```txt
src/
 ├── App.js        ← main component
 ├── index.js      ← entry point
 ├── index.css
 └── App.css
```

---

### 🔹 `index.js` (Entry Point)

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

📌 Meaning:

- React starts here
- `<App />` is rendered inside `index.html`

---

### 🔹 `App.js` (Main Component)

```jsx
function App() {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
```

---

## 6️⃣ Demo: Modify Default Component

Let’s customize it like a **Bio App** 👇

### 🔹 Updated `App.js`

```jsx
function App() {
  const userName = "Nikhil";
  const followers = 1500;

  return (
    <div>
      <h1>Welcome, {userName} 👋</h1>
      <p>Followers: {followers}</p>

      {followers > 1000 && <span>✔ Verified Creator</span>}
    </div>
  );
}

export default App;
```

---

### 🧠 Concepts Used Here

| Concept               | Used                      |
| --------------------- | ------------------------- |
| JSX                   | `<h1>Welcome</h1>`        |
| JavaScript inside JSX | `{userName}`              |
| Conditional rendering | `followers > 1000 && ...` |
| Component             | `App()`                   |

---

## 7️⃣ What You Learned So Far

✅ What React is
✅ Why React is powerful
✅ Virtual DOM vs Real DOM
✅ Components & reusability
✅ create-react-app setup
✅ Running and editing first React app

---
