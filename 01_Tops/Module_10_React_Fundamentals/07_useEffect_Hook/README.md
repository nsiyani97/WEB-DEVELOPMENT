- useEffect Hook
- Component lifecycle and side effects.
- Demo: Simulate API fetch on mount.

---

# 🔁 useEffect Hook

## 1️⃣ What is this topic about?

In React, components don’t just **render UI** — they also need to do **side work**, like:

- Fetching data from an API
- Updating the document title
- Setting timers or event listeners

👉 The **`useEffect` hook** is how we handle these **side effects** in **function components**.

---

## 2️⃣ What is `useEffect`? (Definition)

**`useEffect`** is a React Hook that lets you run code **after rendering**.

It replaces lifecycle methods from class components such as:

- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

---

## 3️⃣ Basic Syntax of `useEffect`

```js
useEffect(() => {
  // side-effect code
}, [dependencies]);
```

### 🔍 Parts explained

| Part               | Meaning                     |
| ------------------ | --------------------------- |
| callback function  | Code to run after render    |
| dependency array   | Controls _when_ effect runs |
| cleanup (optional) | Runs before unmount         |

---

## 4️⃣ Component Lifecycle (in simple words)

Even function components have a lifecycle:

### 🔹 Mount

Component appears on screen for the first time

### 🔹 Update

Component re-renders due to state/props change

### 🔹 Unmount

Component is removed from the screen

---

## 5️⃣ useEffect vs Lifecycle Methods

| useEffect usage                | Lifecycle equivalent |
| ------------------------------ | -------------------- |
| `useEffect(() => {}, [])`      | componentDidMount    |
| `useEffect(() => {}, [state])` | componentDidUpdate   |
| `return () => {}`              | componentWillUnmount |

---

## 6️⃣ Side Effects – Explained Simply

A **side effect** is anything that:

- Affects something **outside** the component
- Is not part of JSX rendering

Examples:

- API calls
- Timers (`setTimeout`)
- LocalStorage
- DOM manipulation

---

## 7️⃣ Demo: Simulate API Fetch on Mount

We’ll **simulate an API call** using `setTimeout` (like real network delay).

---

### 📁 Example Project: `FakeApiFetch.jsx`

```jsx
import { useEffect, useState } from "react";

function FakeApiFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Component mounted");

    setTimeout(() => {
      const fakeUsers = [
        { id: 1, name: "Aarya" },
        { id: 2, name: "Nikhil" },
        { id: 3, name: "Riya" },
      ];

      setUsers(fakeUsers);
      setLoading(false);
    }, 2000);
  }, []); // runs once on mount

  return (
    <div>
      <h2>Users List</h2>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FakeApiFetch;
```

---

## 8️⃣ Line-by-Line Explanation

```js
useEffect(() => {
```

➡ Runs after component renders

```js
setTimeout(() => {
```

➡ Simulates API delay

```js
setUsers(fakeUsers);
```

➡ Updates state → triggers re-render

```js
}, []);
```

➡ Empty dependency array = **run only once (on mount)**

---

## 9️⃣ What Happens Step-by-Step?

1. Component renders
2. `useEffect` runs
3. Shows **Loading...**
4. Fake API returns data
5. State updates
6. Component re-renders with data

---

## 🔟 Common Mistakes (Very Important ⚠️)

❌ Forgetting dependency array → infinite loop
❌ Updating state without condition
❌ Fetching data directly inside render

---

## ✅ Key Takeaways

- `useEffect` handles **side effects**
- Dependency array controls **when it runs**
- Empty array `[]` = **on mount**
- Essential for **API calls**

---
