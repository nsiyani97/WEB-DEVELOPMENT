- Routing
- React Router setup.
- Routes, NavLink, BrowserRouter.
- Demo: Multi-page navigation (Home, About, Contact).

---

# 🔀 Routing in React (React Router)

## 1️⃣ What is this topic about?

**Routing** allows a React application to behave like a **multi-page website**, **without reloading the page**.

👉 Instead of loading a new HTML file, React:

- Changes the **URL**
- Shows a **different component**
- Keeps the app fast (SPA – Single Page Application)

💡 Example URLs:

- `/` → Home page
- `/about` → About page
- `/contact` → Contact page

---

## 2️⃣ What is React Router?

**React Router** is a **library** used to handle navigation and routing in React apps.

### ✅ Why we need it?

Because React **does not support routing by default**.

### ✅ What React Router gives us:

- URL-based navigation
- Multiple pages using components
- No page reload
- Browser history support (back/forward buttons)

---

## 3️⃣ React Router Setup (using Vite + React)

### 📦 Step 1: Install React Router

```bash
npm install react-router-dom
```

---

## 4️⃣ Core Routing Components (Very Important)

Let’s understand **each line & concept** 👇

---

### 🔹 1. `BrowserRouter`

**Definition:**
Wraps your entire app and enables routing using browser URL.

👉 Think of it as **“routing engine”**.

```jsx
import { BrowserRouter } from "react-router-dom";
```

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

---

### 🔹 2. `Routes`

**Definition:**
A container that holds **all route definitions**.

```jsx
import { Routes } from "react-router-dom";
```

```jsx
<Routes>{/* all Route components go here */}</Routes>
```

---

### 🔹 3. `Route`

**Definition:**
Maps a **URL path** to a **component**.

```jsx
import { Route } from "react-router-dom";
```

```jsx
<Route path="/about" element={<About />} />
```

🧠 Meaning:

- When URL is `/about`
- Show `<About />` component

---

### 🔹 4. `NavLink`

**Definition:**
Used for navigation links (like `<a>` tag) but **without page reload**.

Extra benefit 👉 **active styling**.

```jsx
import { NavLink } from "react-router-dom";
```

```jsx
<NavLink to="/about">About</NavLink>
```

---

## 5️⃣ Demo Project: Multi-Page Navigation App

### 🧩 Pages:

- Home
- About
- Contact

---

## 6️⃣ Project Folder Structure

```
src/
│── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
│── App.jsx
│── main.jsx
```

---

## 7️⃣ Code Implementation (Full Working Example)

---

### 📄 `main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

✅ BrowserRouter wraps the whole app
✅ Enables routing everywhere

---

### 📄 `App.jsx`

```jsx
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: "15px" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
```

🧠 What’s happening?

- `NavLink` → navigation menu
- `Routes` → route container
- `Route` → path → component mapping

---

### 📄 `Home.jsx`

```jsx
function Home() {
  return <h2>🏠 Home Page</h2>;
}

export default Home;
```

---

### 📄 `About.jsx`

```jsx
function About() {
  return <h2>ℹ️ About Page</h2>;
}

export default About;
```

---

### 📄 `Contact.jsx`

```jsx
function Contact() {
  return <h2>📞 Contact Page</h2>;
}

export default Contact;
```

---

## 8️⃣ Visual Behavior (Important for Understanding)

| Action        | Result                               |
| ------------- | ------------------------------------ |
| Click Home    | URL → `/` → Home component           |
| Click About   | URL → `/about` → About component     |
| Click Contact | URL → `/contact` → Contact component |
| Page Reload?  | ❌ NO                                |

---

## 9️⃣ Why `NavLink` over `Link`?

| Feature        | Link | NavLink |
| -------------- | ---- | ------- |
| Navigation     | ✅   | ✅      |
| Page reload    | ❌   | ❌      |
| Active styling | ❌   | ✅      |

Example active style:

```jsx
<NavLink
  to="/about"
  style={({ isActive }) => ({
    color: isActive ? "red" : "black",
  })}
>
  About
</NavLink>
```

---

## 🔑 Key Takeaways (Exam + Interview Ready)

- React Router enables **SPA navigation**
- `BrowserRouter` → routing engine
- `Routes` → route container
- `Route` → URL → component mapping
- `NavLink` → navigation + active state
- No page reloads → fast UX

---
