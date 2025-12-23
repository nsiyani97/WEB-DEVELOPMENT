## 🚀 Mini Project: **Async Loading Simulator App**

_(Covers: Blocking vs Non-Blocking, Callbacks, Promises, Async/Await, setTimeout)_

[Spinner](https://www.jqueryscript.net/images/jQuery-Plugin-For-Creating-Loading-Overlay-with-CSS3-Animations-waitMe.jpg?utm_source=chatgpt.com) |
[Loading](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AmI8CGKPrzYlAmmvC98Rbig.png?utm_source=chatgpt.com) |
[Async Await](https://nikgrozev.com/images/blog/async-await/SimplePromiseExample.png?utm_source=chatgpt.com) |
[Async Await](https://techbrij.com/img/1535/async-await-javascript-flow.png?utm_source=chatgpt.com)

---

## 🎯 Project Goal

We will build a **single mini app** that demonstrates **all async concepts step-by-step**:

1. Non-blocking behavior (`setTimeout`)
2. Callback-based async
3. Promise-based async
4. Async / Await usage
5. Real UI update (DOM)

👉 Result:
A page with **buttons** that simulate loading data in **different async styles**.

---

## 📁 Project Structure

```
async-mini-project/
│
├── index.html
├── style.css
└── script.js
```

---

## 1️⃣ index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Async JS Mini Project</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Asynchronous JavaScript Demo</h1>

    <p id="status">Click a button to load data</p>

    <div class="buttons">
      <button onclick="loadWithCallback()">Load with Callback</button>
      <button onclick="loadWithPromise()">Load with Promise</button>
      <button onclick="loadWithAsyncAwait()">Load with Async/Await</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

### 🔍 What’s happening?

- Buttons trigger **different async approaches**
- `<p id="status">` shows loading state
- JS runs **non-blocking**

---

## 2️⃣ style.css (Simple UI)

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 40px;
}

.buttons button {
  margin: 10px;
  padding: 10px 20px;
  cursor: pointer;
}

#status {
  margin: 20px;
  font-size: 18px;
  color: #333;
}
```

---

## 3️⃣ script.js (ALL CONCEPTS HERE)

---

### 🔹 A. Non-Blocking Example (Console Proof)

```js
console.log("Start");

setTimeout(() => {
  console.log("Async task finished");
}, 2000);

console.log("End");
```

✅ Shows JS does **not wait**

---

### 🔹 B. Callback Example

```js
function fakeApiCallback(callback) {
  setTimeout(() => {
    callback("Data loaded using CALLBACK");
  }, 2000);
}

function loadWithCallback() {
  document.getElementById("status").innerText = "Loading (Callback)...";

  fakeApiCallback(function (message) {
    document.getElementById("status").innerText = message;
  });
}
```

🧠 Concept used:

- Function passed as argument
- Executes **after async task**

---

### 🔹 C. Promise Example

```js
function fakeApiPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded using PROMISE");
    }, 2000);
  });
}

function loadWithPromise() {
  document.getElementById("status").innerText = "Loading (Promise)...";

  fakeApiPromise()
    .then((message) => {
      document.getElementById("status").innerText = message;
    })
    .catch((error) => {
      document.getElementById("status").innerText = error;
    });
}
```

🧠 Concept used:

- `resolve`
- `.then()` and `.catch()`

---

### 🔹 D. Async / Await Example

```js
async function loadWithAsyncAwait() {
  document.getElementById("status").innerText = "Loading (Async/Await)...";

  const message = await fakeApiPromise();

  document.getElementById("status").innerText = message;
}
```

🧠 Concept used:

- `async` function
- `await` pauses **inside function only**
- Clean, readable code

---

## 4️⃣ Concept Mapping (VERY IMPORTANT)

| Concept      | Where Used           |
| ------------ | -------------------- |
| Blocking     | ❌ Not used (bad UX) |
| Non-Blocking | setTimeout           |
| Callback     | fakeApiCallback      |
| Promise      | fakeApiPromise       |
| Async/Await  | loadWithAsyncAwait   |
| DOM Update   | status.innerText     |

---

## 5️⃣ How This Relates to Real Apps

| Real App Feature | This Project      |
| ---------------- | ----------------- |
| Loading Spinner  | “Loading…” text   |
| API Call         | fakeApi functions |
| User Click       | Button            |
| Server Delay     | setTimeout        |
| React / Redux    | Same async logic  |

---

## 6️⃣ Practice Upgrade (Try Yourself)

👉 Improve this project by:

1. Add **loading spinner**
2. Add **error case** using `reject()`
3. Disable button while loading
4. Convert callback → promise → async

---

## ✅ Learning Outcome

After this mini project, you should clearly understand:

- Why JS is non-blocking
- How callbacks work (and why they’re messy)
- Why promises exist
- Why async/await is preferred
- How async code updates the DOM

---
