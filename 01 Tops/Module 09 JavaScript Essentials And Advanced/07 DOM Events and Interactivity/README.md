- DOM Events & Interactivity Coverage Depth:
- Event types: onclick, onchange, addEventListener.
- Event object basics.
- Demo: “Add Link” button creates new card instantly.
- Depth: Explain event flow concept.

---

# 🎯 DOM Events & Interactivity in JavaScript

[Tree](https://javascript.info/article/bubbling-and-capturing/eventflow.svg?utm_source=chatgpt.com)
[Image](https://codyhouse.co/web/assets/img/posts/handle-javascript-events.jpg?utm_source=chatgpt.com)
[Image](https://i.sstatic.net/3kKua.png?utm_source=chatgpt.com)
[Image](https://i.sstatic.net/04iQA.png?utm_source=chatgpt.com)

## 1️⃣ What is this topic about?

**DOM Events** are actions performed by the user or browser that JavaScript can **listen to and respond to**.

Examples:

- Clicking a button
- Typing in an input
- Changing a dropdown
- Submitting a form

👉 **Interactivity** means your webpage **reacts instantly** to user actions.

In real apps (Bio-Link, Dashboard, Forms):

- Button click → Add new card
- Input change → Update UI
- Submit → Save data

---

## 2️⃣ Core Definition

### ✅ DOM Event

An **event** is a signal that something has happened in the browser.

JavaScript uses **event listeners** to:

- Detect events
- Execute code in response

---

## 3️⃣ Event Types (Explained One by One)

---

### 🔹 1. `onclick`

**Definition:**
Runs code when an element is clicked.

**Syntax:**

```html
<button onclick="sayHello()">Click Me</button>
```

```js
function sayHello() {
  alert("Hello!");
}
```

⚠️ **Limitation:**

- Mixes HTML + JS
- Not scalable
- Can overwrite previous handlers

---

### 🔹 2. `onchange`

**Definition:**
Triggered when an input’s value **changes and loses focus**.

**Example:**

```html
<input type="text" onchange="showValue(this.value)" />
```

```js
function showValue(value) {
  console.log(value);
}
```

Used in:

- Forms
- Dropdowns
- Settings panels

---

### 🔹 3. `addEventListener` ✅ (BEST PRACTICE)

**Definition:**
Attaches an event handler **without touching HTML**.

**Syntax:**

```js
element.addEventListener("event", function);
```

**Example:**

```js
btn.addEventListener("click", () => {
  alert("Button clicked");
});
```

✅ Advantages:

- Clean separation of HTML & JS
- Multiple listeners allowed
- Professional & scalable

---

## 4️⃣ Event Object Basics

When an event happens, JS automatically provides an **event object**.

```js
button.addEventListener("click", function (event) {
  console.log(event);
});
```

### 🔍 Common Event Object Properties

| Property                 | Meaning                      |
| ------------------------ | ---------------------------- |
| `event.target`           | Element that triggered event |
| `event.type`             | Type of event (`click`)      |
| `event.preventDefault()` | Stops default behavior       |

**Example:**

```js
button.addEventListener("click", (e) => {
  console.log(e.target.innerText);
});
```

---

## 5️⃣ 🔁 Event Flow Concept (VERY IMPORTANT)

When an event occurs, it travels through **3 phases**:

### 🧭 Event Flow Order

1️⃣ **Capturing Phase** (Top → Down)
2️⃣ **Target Phase** (Actual element)
3️⃣ **Bubbling Phase** (Bottom → Up) ✅ default

```
document
  ↓
parent
  ↓
button  ← target
  ↑
parent
  ↑
document
```

### Example:

```js
parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

Click button → Output:

```
Button clicked
Parent clicked
```

👉 This is **event bubbling**

---

## 6️⃣ DEMO PROJECT: “Add Link” Button (Instant Card Creation)

### 📁 Project Structure

```
add-link-app/
│── index.html
│── style.css
│── script.js
```

---

### 🧾 `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Add Link App</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h2>My Bio Links</h2>

    <input type="text" id="linkInput" placeholder="Enter link name" />
    <button id="addBtn">Add Link</button>

    <div id="linkContainer"></div>

    <script src="script.js"></script>
  </body>
</html>
```

---

### 🎨 `style.css`

```css
.card {
  background: #222;
  color: #fff;
  padding: 10px;
  margin: 8px 0;
  border-radius: 6px;
}
```

---

### ⚙️ `script.js` (EVENT MAGIC HERE)

```js
const addBtn = document.getElementById("addBtn");
const input = document.getElementById("linkInput");
const container = document.getElementById("linkContainer");

addBtn.addEventListener("click", () => {
  const value = input.value;

  if (value === "") return;

  const card = document.createElement("div");
  card.className = "card";
  card.innerText = value;

  container.appendChild(card);
  input.value = "";
});
```

---

## 7️⃣ Line-by-Line Explanation (IMPORTANT)

```js
addBtn.addEventListener("click", () => {
```

➡ Listen for button click

```js
const value = input.value;
```

➡ Get input value

```js
document.createElement("div");
```

➡ Create new DOM element

```js
container.appendChild(card);
```

➡ Add card instantly to UI

🎉 **No page refresh → Real-time DOM update**

---

## 8️⃣ Learning Outcome 🎯

After this topic, you understand:

✅ What DOM events are
✅ Difference between `onclick` & `addEventListener`
✅ How event object works
✅ Event bubbling & flow
✅ Real-time interactivity using JS

---
