- Props
- Passing data between components.
- Default props and prop types.
- Demo: Reusable “Card” component with props.

---

# 📦 Props in React

## 1️⃣ What is this topic about?

In React, **components should be reusable**.
To make components reusable, we need a way to **send data from one component to another**.

👉 That’s where **Props** come in.

Think of props like **function arguments**, but for **components**.

---

## 2️⃣ What are Props?

### ✅ Definition

**Props (short for properties)** are **read-only data** passed from a **parent component** to a **child component**.

- Props help components become **dynamic**
- Props allow **component communication**
- Props cannot be modified by the child

---

### 🔑 Simple Analogy

```js
function greet(name) {
  return "Hello " + name;
}

greet("Nikhil");
```

⬆️
`name` is like **props**
`greet()` is like a **component**

---

## 3️⃣ Basic Props Syntax

### 🔹 Parent → Child

```jsx
<Card title="React Basics" />
```

### 🔹 Child receives props

```jsx
function Card(props) {
  return <h2>{props.title}</h2>;
}
```

---

## 4️⃣ Passing Data Between Components

### 📁 File Structure

```
src/
 ├─ App.jsx
 ├─ Card.jsx
```

---

### 🧩 App.jsx (Parent Component)

```jsx
import Card from "./Card";

function App() {
  return (
    <div>
      <Card title="React" description="UI Library" />
      <Card title="JavaScript" description="Programming Language" />
    </div>
  );
}

export default App;
```

### 🧠 Explanation (Line by Line)

- `title="React"` → sending data
- `description="UI Library"` → another prop
- Same `Card` component reused with **different data**

---

### 🧩 Card.jsx (Child Component)

```jsx
function Card(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
```

### 🧠 Explanation

- `props` is an **object**
- `props.title` → value sent from parent
- `props.description` → another value

---

## 5️⃣ Props with Destructuring (Best Practice)

Instead of:

```jsx
function Card(props) {
  return <h2>{props.title}</h2>;
}
```

✅ Use **destructuring**:

```jsx
function Card({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
```

✔ Cleaner
✔ More readable
✔ Industry standard

---

## 6️⃣ Default Props

### ❓ Why Default Props?

If parent **doesn’t pass a prop**, the app may break or show nothing.

👉 Default props provide **fallback values**.

---

### 🔹 Example

```jsx
function Card({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

Card.defaultProps = {
  description: "No description provided",
};

export default Card;
```

Now this works safely:

```jsx
<Card title="HTML" />
```

---

## 7️⃣ Prop Types (Type Checking)

### ❓ Why PropTypes?

JavaScript is **loosely typed**.
PropTypes help catch **wrong data types** during development.

---

### 🔧 Install (once)

```bash
npm install prop-types
```

---

### 🔹 Using PropTypes in Card.jsx

```jsx
import PropTypes from "prop-types";

function Card({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Card;
```

### 🧠 Explanation

- `string` → must be text
- `isRequired` → prop **must be passed**
- Helps during **development only**

---

## 8️⃣ Demo Mini-Project: Reusable Card Component

### 🎯 Goal

Create a **reusable Card component** that displays:

- Title
- Description
- Author

---

### 🧩 Card.jsx

```jsx
import PropTypes from "prop-types";

function Card({ title, description, author }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <small>By: {author}</small>
    </div>
  );
}

Card.defaultProps = {
  author: "Unknown",
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string,
};

export default Card;
```

---

### 🧩 App.jsx

```jsx
import Card from "./Card";

function App() {
  return (
    <div>
      <Card title="React Props" description="Props allow data passing" author="Nikhil" />

      <Card title="Reusable Components" description="Write once, use many times" />
    </div>
  );
}

export default App;
```

---

## 9️⃣ Key Takeaways (Very Important ⭐)

- Props = **data passed to components**
- Props are **read-only**
- Parent → Child only
- Props make components **reusable**
- Use:

  - ✅ Destructuring
  - ✅ DefaultProps
  - ✅ PropTypes

---
