- Introduction to Advanced React Concepts
- Review: props, state, useEffect, component hierarchy.
- Why scalability matters (component reusability, maintainability).
- Introduction to advanced hooks (custom hooks, reducer hooks).
- Depth: Explain problems with prop drilling and redundant code in large apps.
- Practical Demo: Show an example of repetitive API call logic to motivate custom hooks.

---

# 🔥 Introduction to Advanced React Concepts

## 1️⃣ What is this topic about?

**Advanced React concepts** focus on **scaling applications** beyond small demos.

When apps grow:

- Components increase
- Data flows across many levels
- Logic gets repeated
- Code becomes hard to maintain

👉 Advanced React teaches you **how to organize, reuse, and control complexity**.

---

## 2️⃣ Review of Core Concepts (Foundation Check)

Before advanced ideas, you **must be solid** with these 👇

---

### 🔹 Props

**Definition:**
Props are **inputs passed from parent to child components**.

```jsx
<UserCard name="Nikhil" />
```

```jsx
function UserCard({ name }) {
  return <h2>{name}</h2>;
}
```

✔ One-way data flow
✔ Read-only
❌ Cannot be changed by child

---

### 🔹 State

**Definition:**
State is **component-owned data that can change over time**.

```jsx
const [count, setCount] = useState(0);
```

✔ Causes re-render
✔ Local to component
✔ Used for UI changes

---

### 🔹 useEffect

**Definition:**
`useEffect` runs **side effects** (API calls, subscriptions, timers).

```jsx
useEffect(() => {
  console.log("Component mounted");
}, []);
```

✔ Runs after render
✔ Dependency array controls execution

---

### 🔹 Component Hierarchy

React apps are **tree-structured**:

```
App
 ├── Header
 ├── ProductList
 │    └── ProductCard
 └── Footer
```

✔ Data flows **top → down**
❌ Hard to pass data deep (we’ll see why)

---

## 3️⃣ Why Scalability Matters (Very Important)

### ❌ Small App Thinking

Works fine when:

- 3–4 components
- 1 API call
- Simple UI

### 🚨 Large App Reality

- 50+ components
- Multiple APIs
- Shared logic everywhere
- Bugs multiply

---

### ✅ Scalability Means:

#### 1. Component Reusability

Same logic should **not be rewritten** again and again.

#### 2. Maintainability

Fix logic **in one place**, not 10 files.

#### 3. Readability

New developers should understand code quickly.

---

## 4️⃣ Introduction to Advanced Hooks (Conceptual Only)

⚠️ **No custom hook usage yet (as you requested)**

---

### 🔹 Custom Hooks (Concept Only)

- Used to **extract reusable logic**
- Naming convention: `useSomething`
- Helps avoid duplicate logic

(We will **use them in the next session**, not now)

---

### 🔹 useReducer Hook (Intro Only)

**Definition:**
`useReducer` is an alternative to `useState` for **complex state logic**.

Used when:

- Multiple related state values
- Complex update rules

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

Think of it as **mini Redux inside a component**.

---

## 5️⃣ Depth: Problems in Large React Apps

### ❌ Problem 1: Prop Drilling

#### What is Prop Drilling?

Passing props through components that **don’t need them**.

```
App
 └── Dashboard (passes user)
      └── Sidebar (passes user)
           └── Profile (uses user)
```

```jsx
<App user={user} />
<Dashboard user={user} />
<Sidebar user={user} />
<Profile user={user} />
```

🚨 Problems:

- Too many props
- Hard to track data
- Small change breaks many components

---

### ❌ Problem 2: Redundant Code (Very Common)

Same logic copied everywhere:

- API calls
- Loading state
- Error handling

This is the **main motivation** for advanced patterns.

---

## 6️⃣ Practical Demo: Repetitive API Call Logic ❌

### 🎯 Goal

Show **why repetition is bad** before fixing it later.

---

## 📁 Example Project: Product & User Fetching (Bad Approach)

### Folder Structure

```
src/
 ├── App.jsx
 ├── components/
 │    ├── Users.jsx
 │    └── Products.jsx
 └── main.jsx
```

---

## 📄 `App.jsx`

```jsx
import Users from "./components/Users";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Users />
      <Products />
    </>
  );
}

export default App;
```

✔ Simple parent
✔ No shared logic yet

---

## 📄 `Users.jsx`

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load users");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Users;
```

---

## 📄 `Products.jsx`

```jsx
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export default Products;
```

---

## 7️⃣ What Problems Do You See Here? 🚨

### ❌ Repeated Logic

- `useState` (data, loading, error)
- `useEffect`
- `fetch → then → catch`

### ❌ Maintainability Issue

If you change:

- Error handling
- Loading logic
  You must update **every component**

### ❌ Scaling Nightmare

Imagine:

- 10 APIs
- 10 components
- 10 copies of same logic 😵

---

## 8️⃣ Key Takeaways (Important)

✅ Advanced React exists **because small patterns fail at scale**
✅ Prop drilling makes data flow messy
✅ Repetitive logic = technical debt
✅ We **must abstract logic** (next session)
❌ But today we intentionally **did not fix it yet**

---

## 🔜 Next Session (Preview)

👉 **Custom Hooks (Part 1)**
We will:

- Extract API logic
- Write `useFetchData`
- Remove duplicate code
- Make components clean & readable

If you want, next I can:

- 🔁 Convert this exact project into a **clean scalable version**
- 🧠 Or explain **when NOT to use custom hooks**

Just tell me 👍
