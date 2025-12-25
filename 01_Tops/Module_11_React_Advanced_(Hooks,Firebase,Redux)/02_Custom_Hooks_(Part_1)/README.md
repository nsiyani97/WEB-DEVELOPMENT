- Custom Hooks (Part 1)
- What is a custom hook and naming conventions (useSomething).
- Converting logic from components into hooks.
- Rules of hooks (only call at top level).
- Demo: Build useFetchData() hook for fetching API data.
- Depth: Explain how custom hooks promote reusability across components.

---

# 🔧 Custom Hooks (Part 1)

## 1️⃣ What is this topic about?

As React apps grow, **logic inside components starts repeating**:

- API calls
- Loading & error state
- Data fetching patterns
- Side-effects using `useEffect`

👉 **Custom Hooks** allow us to **extract reusable logic** from components and share it across multiple components **without duplicating code**.

Think of it as:

> “Functions for React logic”

---

## 2️⃣ What is a Custom Hook?

### ✅ Definition

A **Custom Hook** is a **JavaScript function** that:

- Starts with the prefix **`use`**
- Uses **built-in React hooks** internally (`useState`, `useEffect`, etc.)
- Returns reusable logic or data

### ✅ Naming Convention

🔴 **Must start with `use`**

```js
useFetchData;
useAuth;
useTheme;
useForm;
```

❌ Invalid names:

```js
fetchDataHook;
customFetch;
myHook;
```

👉 React relies on the `use` prefix to **enforce Rules of Hooks**

---

## 3️⃣ Why Do We Need Custom Hooks?

### ❌ Problem: Repetitive Logic in Components

Imagine **multiple components fetching data**:

```jsx
useEffect(() => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => setData(data));
}, []);
```

You’ll repeat:

- `useEffect`
- `useState`
- `loading`
- `error`
- fetch logic

📉 This leads to:

- Code duplication
- Hard maintenance
- Bugs in multiple places

---

### ✅ Solution: Extract Logic into a Custom Hook

```txt
Component = UI
Custom Hook = Logic
```

---

## 4️⃣ Rules of Hooks (VERY IMPORTANT)

Custom Hooks must follow **all Rules of Hooks**.

### 📜 Rule 1: Only call hooks at the **top level**

❌ Wrong:

```js
if (condition) {
  useEffect(() => {});
}
```

✅ Correct:

```js
useEffect(() => {});
```

---

### 📜 Rule 2: Only call hooks from:

- React components
- Custom hooks

❌ Wrong:

```js
function helper() {
  useState();
}
```

✅ Correct:

```js
function useHelper() {
  useState();
}
```

---

## 5️⃣ Converting Component Logic into a Custom Hook

### 🔁 Before: Logic Inside Component

```jsx
const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div>{data.length}</div>;
};
```

---

### 🔁 After: Logic Extracted

```txt
Component → calls hook → hook handles logic
```

---

## 6️⃣ Demo Project: `useFetchData()` Custom Hook

### 🗂 Folder Structure

```
src/
│── hooks/
│   └── useFetchData.js
│
│── components/
│   ├── Users.jsx
│   └── Posts.jsx
│
│── App.jsx
│── main.jsx
```

---

## 7️⃣ Writing the Custom Hook

### 📁 `src/hooks/useFetchData.js`

```js
import { useEffect, useState } from "react";

/*
  Custom Hook: useFetchData
  - Handles API fetching
  - Manages loading & error states
  - Reusable across components
*/
const useFetchData = (url) => {
  const [data, setData] = useState(null); // Stores API data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-run if URL changes

  // Hook returns values to component
  return { data, loading, error };
};

export default useFetchData;
```

---

## 8️⃣ Using the Hook in Components

### 📁 `src/components/Users.jsx`

```jsx
import useFetchData from "../hooks/useFetchData";

const Users = () => {
  const { data, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Users</h2>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Users;
```

---

### 📁 `src/components/Posts.jsx`

```jsx
import useFetchData from "../hooks/useFetchData";

const Posts = () => {
  const { data, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      {data.slice(0, 5).map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default Posts;
```

---

## 9️⃣ App Entry

### 📁 `src/App.jsx`

```jsx
import Users from "./components/Users";
import Posts from "./components/Posts";

const App = () => {
  return (
    <div>
      <Users />
      <hr />
      <Posts />
    </div>
  );
};

export default App;
```

---

## 🔍 Data Flow Explanation

```
Component
   ↓
useFetchData(url)
   ↓
useEffect runs
   ↓
fetch API
   ↓
setState inside hook
   ↓
Hook returns data
   ↓
Component re-renders
```

---

## 🔁 Depth: Why Custom Hooks Improve Reusability

### ✅ Benefits

| Benefit                | Explanation                        |
| ---------------------- | ---------------------------------- |
| Reusability            | Same logic used in many components |
| Clean Components       | UI-only components                 |
| Single Source of Truth | Bug fix in one place               |
| Scalable               | Easier to grow large apps          |
| Testable               | Logic isolated from UI             |

---

## 🧠 Mental Model (Very Important)

> **Components describe UI** > **Custom Hooks describe behavior**

---

## ⏭️ What’s Next (Part 2 Preview)

In **Custom Hooks – Part 2**, we will:

- Add **dependency control**
- Improve error handling
- Combine hooks with Context
- Optimize performance

If you want, next I can:
✅ Add **caching logic**
✅ Convert this hook to Axios
✅ Explain **why hooks don’t break React rules**

Just tell me 👍
