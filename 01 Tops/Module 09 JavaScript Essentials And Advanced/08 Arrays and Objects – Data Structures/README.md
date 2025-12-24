- Arrays & Objects – Data Structures Coverage Depth:
- Array creation, methods (push, pop, splice).
- Object literals and nested objects.
- Demo: let links=[{title:"Instagram",url:"..."},...] Loop to display all cards.
- Learning Goal: Represent app data as structured collections

---

# 📦 Arrays & Objects – Data Structures in JavaScript

## 1️⃣ What is this topic about?

In real applications, **data is never single values**.

Example:

- A user has **many links**
- Each link has **title + URL + icon**
- An app shows **multiple cards dynamically**

👉 To handle this, JavaScript provides **Data Structures**:

- **Arrays** → ordered list of items
- **Objects** → structured data with properties

💡 In a **Bio-Link App**, links are best stored as:

> **Array of Objects**

---

## 2️⃣ Definitions & Syntax

---

## 🔹 Arrays

### ✅ Definition

An **array** stores **multiple values** in a single variable.

### ✅ Syntax

```js
let arrayName = [item1, item2, item3];
```

### ✅ Example

```js
let colors = ["red", "blue", "green"];
```

---

## 🔹 Common Array Methods

### ➕ `push()` → Add item at end

```js
colors.push("yellow");
```

### ➖ `pop()` → Remove last item

```js
colors.pop();
```

### ✂️ `splice()` → Add / remove items at specific index

```js
colors.splice(1, 1); // remove 1 item from index 1
```

---

## 🔹 Objects

### ✅ Definition

An **object** stores data in **key : value** pairs.

### ✅ Syntax

```js
let objectName = {
  key: value,
  key2: value2,
};
```

### ✅ Example

```js
let user = {
  name: "Aarya",
  followers: 1500,
  verified: true,
};
```

---

## 🔹 Nested Objects (Object inside Object / Array)

```js
let profile = {
  username: "aarya.dev",
  links: [
    { title: "Instagram", url: "https://instagram.com" },
    { title: "GitHub", url: "https://github.com" },
  ],
};
```

---

## 3️⃣ Line-by-Line Explanation of Demo Concept

### 🔸 Demo Data (Array of Objects)

```js
let links = [
  { title: "Instagram", url: "https://instagram.com" },
  { title: "YouTube", url: "https://youtube.com" },
  { title: "GitHub", url: "https://github.com" },
];
```

### 🔍 Explanation

```js
let links = [ ... ];
```

➡️ `links` is an **array**

```js
{ title: "Instagram", url: "https://instagram.com" }
```

➡️ Each item is an **object**

```js
title;
```

➡️ Name shown on card

```js
url;
```

➡️ Link destination

👉 This structure perfectly matches **real app data**

---

## 4️⃣ Loop Through Array to Display Cards (Core Demo)

```js
links.forEach(function (link) {
  console.log(link.title, link.url);
});
```

### 🔍 Explanation

```js
links.forEach(...)
```

➡️ Loop through each array item

```js
function(link)
```

➡️ `link` = current object from array

```js
link.title;
```

➡️ Access object property

```js
link.url;
```

➡️ Access URL value

---

## 5️⃣ Mini Project: Bio-Link Cards App (Arrays + Objects)

### 📁 Project Structure

```
bio-links/
│── index.html
│── script.js
```

---

### 📄 `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Bio Links</title>
    <style>
      body {
        font-family: Arial;
        background: #f4f4f4;
      }
      .card {
        background: white;
        padding: 15px;
        margin: 10px;
        border-radius: 8px;
      }
      a {
        text-decoration: none;
        color: blue;
      }
    </style>
  </head>
  <body>
    <h2>🔗 My Bio Links</h2>
    <div id="linksContainer"></div>

    <script src="script.js"></script>
  </body>
</html>
```

---

### 📄 `script.js`

```js
let links = [
  { title: "Instagram", url: "https://instagram.com" },
  { title: "YouTube", url: "https://youtube.com" },
  { title: "GitHub", url: "https://github.com" },
];

let container = document.getElementById("linksContainer");

links.forEach(function (link) {
  let card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${link.title}</h3>
    <a href="${link.url}" target="_blank">Visit</a>
  `;

  container.appendChild(card);
});
```

---

## 6️⃣ What Student Should Learn (Learning Goal ✅)

✔ Arrays store **multiple items**
✔ Objects store **structured data**
✔ Array of Objects = **real application data model**
✔ Loop + DOM = **dynamic UI rendering**
✔ Same pattern used in:

- React state
- API responses
- Firebase data
- Redux store

---
