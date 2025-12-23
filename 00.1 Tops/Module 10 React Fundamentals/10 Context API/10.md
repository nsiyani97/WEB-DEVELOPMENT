- Context API
- Global state management.
- useContext hook.
- Demo: Theme toggle (dark/light mode).

---

## 🌐 Context API in React

[React Context API](https://uploads.toptal.io/blog/image/129071/toptal-blog-image-1549323314875-d6bc9c753a4c9ac2911e8af17732023d.png) |
[Global State Management](https://miro.medium.com/1%2AmNWg_TjuuG-0SFCSR1jNYg.png) |
[useContext Hook](https://media2.dev.to/dynamic/image/width%3D800%2Cheight%3D%2Cfit%3Dscale-down%2Cgravity%3Dauto%2Cformat%3Dauto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fkm6u04ihmibqsxbyxdpo.png)

---

## 1️⃣ What is this topic about?

As your React apps grow, **passing data through many component levels (props drilling)** becomes messy.

👉 **Context API** solves this by allowing you to create **global data** that any component can access **without passing props manually**.

Typical use cases:

- Theme (dark/light)
- User authentication
- Language (i18n)
- App settings

---

## 2️⃣ Key Concepts (Definitions + Syntax)

---

### 🔹 Global State Management (with Context)

**Definition:**
Global state is data that is **shared across multiple components** in different parts of the app.

❌ Without Context:

```txt
App → Layout → Navbar → ThemeButton
```

✅ With Context:

```txt
ThemeContext → Any Component
```

---

### 🔹 Context API

**Definition:**
React Context API allows you to **create a shared data store** and **provide it to components**.

**Main parts:**

1. `createContext()`
2. `Context.Provider`
3. `useContext()`

---

### 🔹 createContext()

Creates a new context object.

```js
import { createContext } from "react";

export const ThemeContext = createContext();
```

---

### 🔹 Context.Provider

Wraps components and **provides data**.

```js
<ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
```

---

### 🔹 useContext Hook

**Definition:**
Allows components to **consume context data directly**.

```js
const { theme, toggleTheme } = useContext(ThemeContext);
```

✅ No props
✅ Clean code
✅ Easy global access

---

## 3️⃣ Line-by-Line Explanation of Demo Concept

We will build a **Theme Toggle App (Dark / Light Mode)**.

### 🎯 App Flow

1. Create `ThemeContext`
2. Create `ThemeProvider`
3. Wrap `App` with Provider
4. Consume context using `useContext`
5. Toggle theme globally

---

## 4️⃣ Demo Project: Theme Toggle (Dark / Light Mode)

---

### 📁 Project Structure

```txt
src/
 ┣ context/
 ┃ ┗ ThemeContext.jsx
 ┣ components/
 ┃ ┗ ThemeToggle.jsx
 ┣ App.jsx
 ┗ main.jsx
```

---

### 🧠 1. ThemeContext.jsx

```jsx
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
```

#### 🔍 Explanation

- `theme` → global state
- `toggleTheme` → global function
- `value` → shared across app

---

### ⚙️ 2. main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```

✅ Makes theme available everywhere

---

### 🎨 3. App.jsx

```jsx
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    height: "100vh",
    backgroundColor: theme === "light" ? "#fff" : "#121212",
    color: theme === "light" ? "#000" : "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  return (
    <div style={styles}>
      <h1>{theme.toUpperCase()} MODE</h1>
      <ThemeToggle />
    </div>
  );
};

export default App;
```

---

### 🔘 4. ThemeToggle.jsx

```jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggle;
```

---

## 5️⃣ What You Learned

✅ Global state without Redux
✅ No prop drilling
✅ Clean architecture
✅ Real-world feature (theme system)

---

## 6️⃣ When to Use Context vs State

| Use Case              | useState | Context           |
| --------------------- | -------- | ----------------- |
| Local component state | ✅       | ❌                |
| Theme / Auth          | ❌       | ✅                |
| App-wide config       | ❌       | ✅                |
| Heavy async data      | ❌       | ⚠️ (Redux better) |

---
