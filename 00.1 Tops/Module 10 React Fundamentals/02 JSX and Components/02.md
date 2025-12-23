- JSX & Components
- JSX syntax and rules
- Function vs Class components.
- Demo: Render “Hello {username}” component.

---

# ⚛️ JSX & Components (React Fundamentals)

## 1️⃣ What is this topic about?

In **React**, everything you see on the screen is built using **components**.
Components are written using **JSX**, which looks like HTML but works inside JavaScript.

👉 This topic teaches you:

- How JSX works
- Rules of JSX
- What components are
- Difference between **Function** and **Class** components
- How to render dynamic data like a username

---

## 2️⃣ What is JSX?

### ✅ Definition

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows you to write **HTML-like code inside JavaScript**.

React uses JSX to describe **what the UI should look like**.

### 🔹 Without JSX (hard to read)

```js
React.createElement("h1", null, "Hello World");
```

### 🔹 With JSX (easy & readable)

```jsx
<h1>Hello World</h1>
```

👉 JSX is **not HTML**
👉 JSX is converted to JavaScript by **Babel**

---

## 3️⃣ JSX Syntax Rules (Very Important)

### ✅ Rule 1: Must return ONE parent element

❌ Wrong:

```jsx
return (
  <h1>Hello</h1>
  <p>Welcome</p>
);
```

✅ Correct:

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```

Or using **React Fragment**:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

---

### ✅ Rule 2: Use `className` instead of `class`

```jsx
<h1 className="title">Hello</h1>
```

---

### ✅ Rule 3: JavaScript inside `{ }`

```jsx
const name = "Nikhil";

<h1>Hello {name}</h1>;
```

✔ Expressions allowed
❌ Statements not allowed (`if`, `for` directly)

---

### ✅ Rule 4: Tags must be closed

```jsx
<img src="logo.png" />
<input type="text" />
```

---

## 4️⃣ What are Components?

### ✅ Definition

A **component** is a **reusable piece of UI** written as a JavaScript function or class.

Think of components like:

- Lego blocks 🧱
- Functions that return UI

---

## 5️⃣ Function Components (Modern & Recommended)

### ✅ Definition

A **Function Component** is a normal JavaScript function that **returns JSX**.

### 🔹 Syntax

```jsx
function ComponentName() {
  return <h1>Hello</h1>;
}
```

### 🔹 Example

```jsx
function Welcome() {
  return <h2>Welcome to React</h2>;
}

export default Welcome;
```

✅ Simple
✅ Easy to read
✅ Supports Hooks
👉 **Used in 99% of modern React apps**

---

## 6️⃣ Class Components (Old Style – Still Important to Know)

### ✅ Definition

A **Class Component** is a JavaScript class that extends `React.Component` and has a `render()` method.

### 🔹 Syntax

```jsx
class ComponentName extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

### 🔹 Example

```jsx
import React from "react";

class Welcome extends React.Component {
  render() {
    return <h2>Welcome to React</h2>;
  }
}

export default Welcome;
```

⚠️ More boilerplate
⚠️ Harder to read
⚠️ Mostly replaced by Function Components

---

## 7️⃣ Function vs Class Components (Comparison)

| Feature        | Function       | Class     |
| -------------- | -------------- | --------- |
| Syntax         | Simple         | Verbose   |
| Hooks          | ✅ Yes         | ❌ No     |
| Readability    | High           | Medium    |
| Modern usage   | ✅ Recommended | ❌ Legacy |
| `this` keyword | ❌ No          | ✅ Yes    |

👉 **We will use Function Components only going forward**

---

## 8️⃣ Demo Project: “Hello {username}” Component

### 🎯 Goal

Render:

```
Hello Nikhil
```

---

### 📁 File Structure (Vite / CRA)

```
src/
 ├─ App.jsx
 ├─ main.jsx
```

---

### 🔹 `main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### 🔹 `App.jsx`

```jsx
function App() {
  const username = "Nikhil";

  return (
    <div>
      <h1>Hello {username}</h1>
    </div>
  );
}

export default App;
```

---

## 9️⃣ What Concepts Did We Use?

✔ JSX syntax
✔ `{}` for JavaScript
✔ Function Component
✔ Dynamic rendering
✔ Reusability mindset

---
