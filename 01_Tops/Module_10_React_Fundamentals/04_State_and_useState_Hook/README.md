- State & useState Hook
- State management basics.
- Updating state.
- Demo: Counter increment/decrement app.

---

# 🔁 State & `useState` Hook (React Fundamentals)

## 1️⃣ What is this topic about?

In React, **state** is how a component **remembers data** and **reacts to changes**.

👉 Whenever state changes:

- React **re-renders** the component
- UI updates automatically

Without state, React apps would be **static**.

---

## 2️⃣ What is _State_?

### ✅ Definition

**State** is a **built-in object** that stores **dynamic data** for a component.

Examples of state:

- Counter value
- User input
- Toggle (true/false)
- Logged-in user data

🧠 Think of state as:

> “Data that can change over time and affects the UI”

---

## 3️⃣ Why do we need State?

### ❌ Without State

```js
let count = 0;
count++;
```

❌ UI will **NOT update** in React

### ✅ With State

```js
setCount(count + 1);
```

✅ UI updates automatically

---

## 4️⃣ `useState` Hook – Basics

### ✅ Definition

`useState` is a **React Hook** that allows **functional components** to have state.

---

### 🔹 Syntax

```js
const [stateValue, setStateFunction] = useState(initialValue);
```

### 🔹 Example

```js
const [count, setCount] = useState(0);
```

| Part       | Meaning                  |
| ---------- | ------------------------ |
| `count`    | current state value      |
| `setCount` | function to update state |
| `0`        | initial value            |

---

## 5️⃣ Rules of `useState` (Very Important ❗)

1️⃣ Only call hooks **at the top level**

```js
❌ inside if / loops
✅ directly inside component
```

2️⃣ Only call hooks **inside React components**

---

## 6️⃣ Updating State

### ❌ Wrong way

```js
count = count + 1;
```

### ✅ Correct way

```js
setCount(count + 1);
```

---

### 🔁 Functional Update (Best Practice)

```js
setCount((prevCount) => prevCount + 1);
```

✅ Safer
✅ Avoids bugs
✅ Used in real projects

---

## 7️⃣ Demo Project – Counter App (Increment / Decrement)

We’ll build a **mini project** using **only React fundamentals**.

---

### 📁 File Structure (Vite or CRA)

```
src/
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css
```

---

## 8️⃣ Counter App – Code

### 🔹 `App.jsx`

```jsx
import { useState } from "react";

function App() {
  // 1️⃣ Declare state
  const [count, setCount] = useState(0);

  // 2️⃣ Increment function
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  // 3️⃣ Decrement function
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        ➖ Decrement
      </button>
    </div>
  );
}

export default App;
```

---

## 9️⃣ Line-by-Line Explanation

### 🔹 Import hook

```js
import { useState } from "react";
```

➡️ We import `useState` from React

---

### 🔹 Create state

```js
const [count, setCount] = useState(0);
```

➡️ `count` starts from **0**
➡️ `setCount` updates it

---

### 🔹 Update state

```js
setCount((prev) => prev + 1);
```

➡️ Uses previous value
➡️ Recommended for counters

---

### 🔹 Render state

```jsx
<h2>{count}</h2>
```

➡️ JSX automatically updates when state changes

---

### 🔹 Event handling

```jsx
<button onClick={increment}>
```

➡️ Clicking button updates state
➡️ React re-renders UI

---

## 🔟 How React Re-renders (Very Important Concept)

1️⃣ Button clicked
2️⃣ `setCount()` called
3️⃣ State changes
4️⃣ React re-renders component
5️⃣ Updated value appears on screen

🧠 React does **NOT reload page**

---

## 1️⃣1️⃣ Real-World Examples of State

| Feature | State        |
| ------- | ------------ |
| Likes   | `likesCount` |
| Login   | `isLoggedIn` |
| Form    | `inputValue` |
| Toggle  | `isDarkMode` |

---

## 1️⃣2️⃣ Common Beginner Mistakes ❌

❌ Direct state mutation

```js
count++;
```

❌ Using state outside component

❌ Forgetting to import `useState`

---

## 1️⃣3️⃣ Mini Practice Tasks for You 🧪

Try this next 👇

1️⃣ Disable decrement when count is 0
2️⃣ Add **Reset** button
3️⃣ Change color when count > 10
4️⃣ Convert to reusable `<Counter />` component

---
F