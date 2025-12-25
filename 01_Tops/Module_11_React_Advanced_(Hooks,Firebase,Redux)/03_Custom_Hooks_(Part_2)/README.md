- Custom Hooks (Part 2)
- Passing parameters to custom hooks.
- Managing multiple useEffects inside a custom hook.
- Returning data and loading/error states.
- Demo: Enhance useFetchData() to include loading spinner and error handling.

---

> ⚠️ Note: In **Part 1** you already learned _what a custom hook is_.
> Here we focus on **parameters, multiple `useEffect`s, and loading/error states**.

---

# 🪝 Custom Hooks (Part 2)

## 1️⃣ What is this topic about?

In real React apps, **data fetching is not just “get data”**.
You must also handle:

- ⏳ Loading states
- ❌ Error handling
- 🔁 Refetching when parameters change
- 🧹 Cleanup and separation of concerns

This lesson enhances `useFetchData()` so it behaves like **production-ready logic**.

---

## 2️⃣ Key Concepts (Definitions + Syntax)

---

### 🔹 Passing parameters to a custom hook

**Definition:**
A custom hook is just a **JavaScript function**, so it can accept parameters.

**Syntax:**

```js
function useSomething(param1, param2) {
  // hook logic
}
```

**Example:**

```js
useFetchData("https://api.example.com/users");
```

➡️ This allows the same hook to fetch **different APIs**.

---

### 🔹 Managing multiple `useEffect`s inside a hook

**Definition:**
A custom hook can use **multiple `useEffect`s** for different responsibilities.

**Why multiple effects?**

- One effect → fetch data
- Another effect → reset error when URL changes
- Another effect → cleanup / cancel requests

✅ This improves **readability and control**.

---

### 🔹 Returning data + loading + error

**Definition:**
A good custom hook returns an **object** containing all states the component needs.

**Common pattern:**

```js
return { data, loading, error };
```

➡️ Components stay **clean and declarative**.

---

## 3️⃣ Problem Before Custom Hook (Motivation)

### ❌ Without enhanced hook (inside component)

```js
useEffect(() => {
  setLoading(true);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, [url]);
```

❌ Repeated everywhere
❌ Hard to maintain
❌ Messy components

---

## 4️⃣ Enhanced `useFetchData()` – Final Goal

We want:

- ✅ Parameterized API URL
- ✅ Loading spinner support
- ✅ Error handling
- ✅ Clean component usage

---

## 5️⃣ Example Mini Project

### 📁 Folder Structure

```
src/
│── hooks/
│   └── useFetchData.js
│
│── components/
│   ├── Users.jsx
│   ├── Posts.jsx
│
│── App.jsx
│── main.jsx
```

---

## 6️⃣ Code Implementation (All Files)

---

### 📄 `src/hooks/useFetchData.js`

```js
import { useEffect, useState } from "react";

/**
 * Custom Hook: useFetchData
 * @param {string} url - API endpoint
 */
function useFetchData(url) {
  // Data state
  const [data, setData] = useState(null);

  // Loading state
  const [loading, setLoading] = useState(false);

  // Error state
  const [error, setError] = useState(null);

  /**
   * Effect 1: Fetch data whenever URL changes
   */
  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  /**
   * Effect 2: Reset data when URL changes (optional but clean)
   */
  useEffect(() => {
    setData(null);
  }, [url]);

  // Return everything the component needs
  return { data, loading, error };
}

export default useFetchData;
```

🧠 **What’s happening here**

- Multiple `useEffect`s ✔
- URL passed as parameter ✔
- Loading & error managed internally ✔
- Component stays clean ✔

---

### 📄 `src/components/Users.jsx`

```js
import useFetchData from "../hooks/useFetchData";

function Users() {
  const { data: users, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Users</h2>
      <ul>{users && users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
}

export default Users;
```

---

### 📄 `src/components/Posts.jsx`

```js
import useFetchData from "../hooks/useFetchData";

function Posts() {
  const { data: posts, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>{posts && posts.slice(0, 5).map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </div>
  );
}

export default Posts;
```

---

### 📄 `src/App.jsx`

```js
import Users from "./components/Users";
import Posts from "./components/Posts";

function App() {
  return (
    <div>
      <h1>Custom Hook – useFetchData (Enhanced)</h1>
      <Users />
      <Posts />
    </div>
  );
}

export default App;
```

---

## 7️⃣ Data Flow (Very Important for Interviews)

```
Component
  ↓ passes URL
useFetchData(url)
  ↓
useEffect triggers fetch
  ↓
updates loading / data / error
  ↓
returns object
  ↓
Component re-renders UI
```

---

## 8️⃣ Why This Is Powerful (Depth)

✅ One hook → many components
✅ Centralized error handling
✅ Cleaner JSX
✅ Easier testing
✅ Scales well in large apps

👉 This pattern is used in **real production apps**.

---

## 9️⃣ What’s Next (Preview)

Next sessions we can cover:

- `useReducer` inside custom hooks
- AbortController (cancel fetch)
- Context + custom hooks combo
- Replacing this logic with React Query

If you want, I can **add a loading spinner UI**, or **convert this to Axios**, or **explain your 404 error from earlier** step-by-step.
