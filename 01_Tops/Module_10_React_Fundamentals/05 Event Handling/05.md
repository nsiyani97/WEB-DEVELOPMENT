- Event Handling
- Handling click, input, form events.
- Demo: Interactive form capturing user data.

---

# 🔔 Event Handling in React

## 1️⃣ What is this topic about?

**Event Handling** in React is how we **respond to user actions** such as:

- Clicking a button
- Typing in an input field
- Submitting a form

In real applications, **nothing works without events**:

- Forms won’t submit
- Buttons won’t respond
- Inputs won’t capture data

👉 Event handling makes your app **interactive**.

---

## 2️⃣ Definition

**Event Handling** is the process of **listening to user events** and **executing functions** when those events occur.

In **React**, events are:

- Written in **camelCase**
- Passed as **functions**, not strings
- Managed using **Synthetic Events** (React’s wrapper around browser events)

---

## 3️⃣ Basic Event Syntax in React

### 🔹 General Syntax

```jsx
<button onClick={handleClick}>Click Me</button>
```

### 🔍 Explanation line by line

- `onClick` → React event (camelCase)
- `{handleClick}` → function reference (❌ not `handleClick()`)
- React automatically passes the event object

---

## 4️⃣ Handling Different Types of Events

---

### 🔹 1. Click Event

```jsx
function handleClick() {
  alert("Button clicked!");
}
```

```jsx
<button onClick={handleClick}>Click</button>
```

✅ Used for:

- Buttons
- Icons
- Submit actions

---

### 🔹 2. Input Change Event

```jsx
<input onChange={handleChange} />
```

```jsx
function handleChange(e) {
  console.log(e.target.value);
}
```

🔍 Explanation:

- `e` → event object
- `e.target.value` → current input value

✅ Used for:

- Forms
- Search bars
- Live validation

---

### 🔹 3. Form Submit Event

```jsx
<form onSubmit={handleSubmit}>
```

```jsx
function handleSubmit(e) {
  e.preventDefault();
}
```

🔍 Explanation:

- `e.preventDefault()` stops page refresh
- React apps **must not reload**

---

## 5️⃣ Demo Project: Interactive Form (User Data Capture)

### 🎯 Goal

Create a form that captures:

- Name
- Email
- Age
  …and displays submitted data.

---

## 6️⃣ Step-by-Step Project Setup

### 📁 Component Structure

```
src/
 ├── App.jsx
 └── main.jsx
```

---

## 7️⃣ `App.jsx` – Full Working Example

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    setSubmittedData({
      name,
      email,
      age,
    });

    setName("");
    setEmail("");
    setAge("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label>Age: </label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
}

export default App;
```

---

## 8️⃣ Line-by-Line Concept Mapping (Very Important)

### 🔹 `useState`

```js
const [name, setName] = useState("");
```

👉 Stores input value
👉 Updates on every keystroke

---

### 🔹 Controlled Inputs

```jsx
value={name}
onChange={(e) => setName(e.target.value)}
```

✅ React **controls** the input
✅ Single source of truth = state

---

### 🔹 Form Submit

```js
function handleSubmit(e) {
  e.preventDefault();
}
```

❌ Prevents page reload
✅ Allows SPA behavior

---

### 🔹 Conditional Rendering

```jsx
{
  submittedData && <div>...</div>;
}
```

👉 Shows data **only after submission**

---

## 9️⃣ Events Used in This Project

| Event    | Purpose                |
| -------- | ---------------------- |
| onChange | Capture input data     |
| onSubmit | Handle form submission |
| onClick  | Button action          |

---

## 🔑 Key Rules to Remember

✔ React events use **camelCase**
✔ Always pass **function reference**
✔ Use `preventDefault()` for forms
✔ Inputs should be **controlled**

---
