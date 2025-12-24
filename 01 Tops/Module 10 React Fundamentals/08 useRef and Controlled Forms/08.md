- useRef & Controlled Forms
- Managing DOM elements using refs.
- Demo: Focus input field after submit.

---

# 🔁 useRef & Controlled Forms in React

## 1️⃣ What is this topic about?

This topic is about **handling form inputs** and **directly interacting with DOM elements** in React.

In React:

- **Controlled Forms** → React controls the input value using `state`
- **useRef** → Gives direct access to a DOM element **without re-rendering**

👉 Together, they help you:

- Manage form data cleanly
- Focus inputs
- Access DOM properties (like `.focus()`, `.value`, `.scrollIntoView()`)

---

## 2️⃣ Controlled Forms

### ✅ Definition

A **controlled component** is a form element whose value is controlled by **React state**.

> The source of truth is **React**, not the DOM.

---

### ✅ Syntax (Basic Controlled Input)

```jsx
const [value, setValue] = useState("");

<input value={value} onChange={(e) => setValue(e.target.value)} />;
```

---

### 🔍 Explanation Line by Line

- `useState("")`
  → Creates state to store input value
- `value={value}`
  → Input always shows state value
- `onChange`
  → Updates state whenever user types
- `e.target.value`
  → Current text inside input

📌 **Result:** Input and state stay in sync.

---

## 3️⃣ useRef Hook

### ✅ Definition

`useRef` is a React hook that allows you to:

- Reference a DOM element directly
- Store mutable values **without re-rendering**

---

### ✅ Syntax

```jsx
const inputRef = useRef(null);

<input ref={inputRef} />;
```

---

### 🔍 Explanation

- `useRef(null)`
  → Creates a reference object
- `inputRef.current`
  → Points to the actual DOM element
- Changing `.current` **does NOT re-render** the component

---

## 4️⃣ Controlled Forms vs useRef

| Feature          | Controlled Form             | useRef                      |
| ---------------- | --------------------------- | --------------------------- |
| Value stored in  | React state                 | DOM                         |
| Causes re-render | ✅ Yes                      | ❌ No                       |
| Best for         | Form validation, submission | Focus, scrolling, measuring |
| React way        | ✅ Recommended              | ⚠️ Limited use              |

👉 **Rule of thumb:**
Use **state for data**, **useRef for DOM actions**.

---

## 5️⃣ Demo: Focus Input Field After Submit 🎯

### 🎯 Goal

- User types text
- Clicks **Submit**
- Input clears
- Cursor automatically focuses back on input

---

## 6️⃣ Full Example Project

### 📁 `App.jsx`

```jsx
import { useState, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") return;

    alert(`Submitted: ${name}`);

    setName(""); // clear input
    inputRef.current.focus(); // focus input
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>useRef & Controlled Form Demo</h2>

      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
```

---

## 7️⃣ Line-by-Line Explanation (Important Part)

### 🔹 `const inputRef = useRef(null);`

- Creates a reference to the input element

### 🔹 `ref={inputRef}`

- Connects React ref to the actual input DOM

### 🔹 `inputRef.current.focus()`

- Directly focuses the input field
- No re-render triggered

---

## 8️⃣ Why NOT use useRef for everything?

❌ Bad practice:

```jsx
<input ref={inputRef} />
```

Using `useRef` to read input values skips React’s control.

✅ Best practice:

- **State** → input values
- **useRef** → DOM actions only

---

## 9️⃣ Real-World Use Cases

✔ Login / Signup forms
✔ Search box auto-focus
✔ OTP input fields
✔ Scroll to error field
✔ Auto-focus after modal open

---

## 🔚 Summary

- **Controlled Forms** = React controls input data
- **useRef** = Direct DOM access without re-render
- Combine both for **clean + powerful forms**
- Perfect for professional React apps 🚀

---
