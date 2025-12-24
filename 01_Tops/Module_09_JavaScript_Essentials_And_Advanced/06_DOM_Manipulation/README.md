- DOM Manipulation
- Selecting Elements Coverage Depth:
- getElementById, querySelector, innerHTML, style.
- Reading & updating content dynamically.
- Demo: Add new link element dynamically from input form.
- Note: Show real-time DOM change in browser.

---

# 🧩 DOM Manipulation & Selecting Elements in JavaScript

## 1️⃣ What is this topic about?

**DOM Manipulation** means **using JavaScript to read, change, add, or remove HTML elements dynamically** after the page has loaded.

👉 DOM = **Document Object Model**

- HTML = structure
- CSS = style
- JavaScript = **logic + interaction**

💡 Without DOM manipulation:

- Websites would be static (no dynamic updates)
- No forms, buttons, animations, or live content

👉 In real apps (Bio-Link, Dashboard, Forms):

- Add links dynamically
- Update text without reloading
- Change styles on click
- Show real-time changes

---

## 2️⃣ Core Concepts: Definitions & Syntax

---

## 🔹 Selecting Elements from DOM

Before changing anything, **JavaScript must select an element**.

---

### 1️⃣ `getElementById()`

**Definition:**
Selects an element using its `id`.

**Syntax:**

```js
document.getElementById("idName");
```

**Example:**

```html
<h1 id="title">My Bio</h1>
```

```js
const heading = document.getElementById("title");
```

✅ Fast
❌ Works only with `id`

---

### 2️⃣ `querySelector()`

**Definition:**
Selects **any element using CSS selectors**.

**Syntax:**

```js
document.querySelector("selector");
```

**Examples:**

```js
document.querySelector("h1");
document.querySelector(".link");
document.querySelector("#title");
```

✅ Very powerful
❌ Selects only **first matching element**

---

## 🔹 Reading & Updating Content

---

### 3️⃣ `innerHTML`

**Definition:**
Used to **read or change HTML content inside an element**.

**Syntax:**

```js
element.innerHTML = "new content";
```

**Example:**

```js
heading.innerHTML = "Welcome to My Bio-Link App";
```

⚠️ Can insert HTML tags too:

```js
div.innerHTML = "<a href='#'>Instagram</a>";
```

---

## 🔹 Styling Elements Using JS

---

### 4️⃣ `style`

**Definition:**
Used to change CSS styles dynamically.

**Syntax:**

```js
element.style.property = "value";
```

**Example:**

```js
heading.style.color = "blue";
heading.style.fontSize = "24px";
```

📌 CSS property → **camelCase**

- `font-size` → `fontSize`
- `background-color` → `backgroundColor`

---

## 3️⃣ Reading & Updating Content Dynamically

Dynamic update means:

- No page reload
- Instant change in browser

**Example:**

```js
const message = document.getElementById("msg");
message.innerHTML = "Link Added Successfully!";
```

👉 This is how:

- Notifications work
- Counters update
- Forms respond live

---

## 4️⃣ DEMO PROJECT

### 🎯 Project: Add Social Link Dynamically from Input Form

We will:

- Take link name + URL from input
- Click button
- Add new link **live on page**

---

## 📁 Project Structure

```
dom-manipulation-project/
│
├── index.html
└── script.js
```

---

## 🧱 index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>DOM Manipulation Demo</title>
  </head>
  <body>
    <h1 id="title">My Bio Links</h1>

    <input type="text" id="linkName" placeholder="Link Name" />
    <input type="text" id="linkURL" placeholder="Link URL" />
    <button id="addBtn">Add Link</button>

    <p id="msg"></p>

    <div id="linksContainer"></div>

    <script src="script.js"></script>
  </body>
</html>
```

---

## 🧠 Explanation (Line by Line)

- `id="linkName"` → input for platform name
- `id="linkURL"` → input for URL
- `id="linksContainer"` → where links will be added
- `script.js` → JS logic connects to DOM

---

## ⚙️ script.js

```js
// Selecting elements
const addBtn = document.getElementById("addBtn");
const linkNameInput = document.getElementById("linkName");
const linkURLInput = document.getElementById("linkURL");
const linksContainer = document.getElementById("linksContainer");
const message = document.getElementById("msg");

// Button click event
addBtn.addEventListener("click", function () {
  const name = linkNameInput.value;
  const url = linkURLInput.value;

  // Validation
  if (name === "" || url === "") {
    message.innerHTML = "Please enter both fields!";
    message.style.color = "red";
    return;
  }

  // Create link element
  const link = document.createElement("a");
  link.innerHTML = name;
  link.href = url;
  link.target = "_blank";

  // Styling link
  link.style.display = "block";
  link.style.margin = "8px 0";
  link.style.color = "blue";

  // Add link to container
  linksContainer.appendChild(link);

  // Success message
  message.innerHTML = "Link added successfully!";
  message.style.color = "green";

  // Clear inputs
  linkNameInput.value = "";
  linkURLInput.value = "";
});
```

---

## 🧩 Concept Breakdown

### ✅ `document.createElement("a")`

Creates new HTML element dynamically

### ✅ `appendChild()`

Adds element inside another element

### ✅ Real-Time DOM Update

- Link appears instantly
- No reload
- This is **live DOM manipulation**

---

## 5️⃣ Learning Outcome

After this topic, you should understand:

✔ What DOM is
✔ How JS connects with HTML
✔ How to select elements
✔ How to change content & style
✔ How to add elements dynamically
✔ How real websites update UI live

---
