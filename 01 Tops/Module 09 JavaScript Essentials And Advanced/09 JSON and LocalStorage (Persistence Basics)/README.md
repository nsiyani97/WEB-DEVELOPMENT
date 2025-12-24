- JSON & LocalStorage (Persistence Basics) Coverage Depth:
- Converting data: JSON.stringify() ? JSON.parse().
- Using localStorage.
- setItem/getItem/removeItem.
- Demo: Save links to localStorage; reload page = data persists.
- Note: Relate this to database persistence after (JDBC concept preview).

---

# 🔐 JSON & LocalStorage (Persistence Basics)

## 1️⃣ What is this topic about?

Normally, JavaScript data lives **only in memory**.

👉 If you refresh the page:

- Variables reset
- Arrays become empty
- Objects are lost ❌

**Persistence** means:

> 👉 _Saving data so it survives page reloads_

In frontend JavaScript, we achieve **basic persistence** using:

- **JSON**
- **localStorage**

This is the **first step before real databases**.

---

## 2️⃣ Core Definitions

### 🔹 What is JSON?

**JSON (JavaScript Object Notation)** is a **text-based data format** used to store and transfer data.

✅ It looks like JavaScript objects
❌ But it is **pure string text**

**Example JSON:**

```json
{ "name": "Instagram", "url": "https://instagram.com" }
```

---

### 🔹 Why JSON is needed?

👉 `localStorage` can store **only strings**

So we convert:

- Object / Array → String → Save
- String → Object / Array → Use

That’s where:

- `JSON.stringify()`
- `JSON.parse()`

come in.

---

## 3️⃣ JSON Methods (Very Important)

---

### 🔹 `JSON.stringify()`

**Definition:**
Converts **JS object/array → JSON string**

**Syntax:**

```js
JSON.stringify(data);
```

**Example:**

```js
let user = { name: "Aarya", followers: 1500 };
let jsonData = JSON.stringify(user);
```

👉 Output:

```text
'{"name":"Aarya","followers":1500}'
```

---

### 🔹 `JSON.parse()`

**Definition:**
Converts **JSON string → JS object/array**

**Syntax:**

```js
JSON.parse(jsonString);
```

**Example:**

```js
let obj = JSON.parse(jsonData);
```

👉 Now `obj.name` works again ✅

---

## 4️⃣ localStorage Basics

### 🔹 What is localStorage?

`localStorage` is a **browser storage** that:

- Stores data **permanently**
- Survives page reloads
- Is key–value based

---

### 🔹 localStorage Methods

| Method                | Purpose     |
| --------------------- | ----------- |
| `setItem(key, value)` | Save data   |
| `getItem(key)`        | Read data   |
| `removeItem(key)`     | Delete data |
| `clear()`             | Delete all  |

---

### 🔹 Basic Example

```js
localStorage.setItem("name", "Nikhil");
localStorage.getItem("name");
localStorage.removeItem("name");
```

⚠️ Values are always stored as **strings**

---

## 5️⃣ Line-by-Line Explanation (Core Concept)

```js
let links = [{ title: "Instagram", url: "https://instagram.com" }];
```

➡️ JavaScript array of objects (memory only)

```js
JSON.stringify(links);
```

➡️ Converts array → string

```js
localStorage.setItem("links", JSON.stringify(links));
```

➡️ Saves string permanently in browser

---

```js
let savedLinks = JSON.parse(localStorage.getItem("links"));
```

➡️ Reads string → converts back to array

---

## 6️⃣ Practical Mini Project

### 📌 Bio-Link App with Persistence

---

### 📁 `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Bio Link App</title>
  </head>
  <body>
    <h2>My Bio Links</h2>

    <input id="title" placeholder="Title" />
    <input id="url" placeholder="URL" />
    <button onclick="addLink()">Add Link</button>

    <ul id="list"></ul>

    <script src="script.js"></script>
  </body>
</html>
```

---

### 📁 `script.js`

```js
// Load saved data or empty array
let links = JSON.parse(localStorage.getItem("links")) || [];

// Render on page load
renderLinks();

function addLink() {
  let title = document.getElementById("title").value;
  let url = document.getElementById("url").value;

  links.push({ title, url });

  // Save to localStorage
  localStorage.setItem("links", JSON.stringify(links));

  renderLinks();
}

function renderLinks() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  links.forEach((link) => {
    let li = document.createElement("li");
    li.innerHTML = `<a href="${link.url}" target="_blank">${link.title}</a>`;
    list.appendChild(li);
  });
}
```

---

### ✅ What you learned from this project

✔ JSON conversion
✔ localStorage persistence
✔ Data survives refresh
✔ Real app behavior

Try refreshing — **data stays** 🔥

---

## 7️⃣ Important Notes & Common Mistakes

❌ Forgetting `JSON.parse()` → data becomes string
❌ Saving objects directly → `[object Object]`
❌ Not handling empty storage

✅ Always use:

```js
JSON.parse(localStorage.getItem("key")) || [];
```

---

## 8️⃣ JDBC / Database Concept Preview (Very Important)

| Frontend (Now) | Backend (Later) |
| -------------- | --------------- |
| localStorage   | Database        |
| JSON           | Rows / Records  |
| setItem()      | INSERT          |
| getItem()      | SELECT          |
| removeItem()   | DELETE          |

👉 Later with **JDBC / SQL**:

```sql
INSERT INTO links VALUES(...)
```

👉 Now:

```js
localStorage.setItem("links", JSON.stringify(links));
```

🧠 **Same concept – different layer**

---
