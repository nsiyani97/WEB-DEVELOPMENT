- Error Handling in JS Coverage Depth:
- try…catch…finally, custom errors, throw.
- Importance of defensive coding.
- Demo: If URL input invalid ? throw custom Error (“Invalid URL”).
- explain error stack trace.

---

# ❌ Error Handling in JavaScript

## 1️⃣ What is this topic about?

**Error Handling** is the process of **detecting, managing, and responding to runtime problems** in your JavaScript code **without crashing the application**.

In real apps (forms, APIs, user input, payments):

- Users enter **wrong data**
- APIs **fail**
- Network issues occur
- Unexpected values appear

👉 Error handling keeps your app **stable, predictable, and user-friendly**.

---

## 2️⃣ Why Error Handling is IMPORTANT (Defensive Coding)

### 🛡️ Defensive Coding means:

> Writing code assuming **things can go wrong**

Instead of:

```js
"Everything will work";
```

We think:

```js
"What if input is wrong?";
"What if API fails?";
"What if value is undefined?";
```

### Without Error Handling ❌

- App crashes
- White screen
- Bad user experience

### With Error Handling ✅

- Controlled messages
- App keeps running
- Easy debugging

---

## 3️⃣ Types of Errors in JavaScript

### 🔹 1. Syntax Error

Wrong JS syntax (caught before execution)

```js
if (true {
```

### 🔹 2. Runtime Error

Occurs while code is running

```js
let x = undefined;
x.toUpperCase(); // error
```

### 🔹 3. Logical Error

Code runs but result is wrong

```js
total = price - tax; // should be +
```

---

## 4️⃣ try…catch…finally (CORE CONCEPT)

### ✅ Definition

Used to **handle runtime errors safely**.

### ✅ Syntax

```js
try {
  // risky code
} catch (error) {
  // runs if error occurs
} finally {
  // always runs
}
```

---

### 🧠 How it works (line by line)

```js
try {
  let result = JSON.parse("invalid json");
  console.log(result);
} catch (error) {
  console.log("Something went wrong");
} finally {
  console.log("Execution completed");
}
```

#### Execution Flow:

1. `try` runs first
2. Error occurs → JS jumps to `catch`
3. `finally` runs **no matter what**

---

## 5️⃣ Understanding the `error` Object

Inside `catch(error)`:

```js
catch(error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
```

### 🔍 Common Properties

| Property  | Meaning                |
| --------- | ---------------------- |
| `name`    | Type of error          |
| `message` | Human-readable message |
| `stack`   | Error stack trace      |

---

## 6️⃣ What is an Error Stack Trace? 🧠

### 📌 Definition

A **stack trace** shows:

- Where the error happened
- Which function called which
- File & line number

### Example Stack Trace

```
Error: Invalid URL
    at validateURL (app.js:15)
    at submitForm (app.js:30)
```

👉 Helps developers **debug faster**

---

## 7️⃣ Custom Errors & `throw`

### ❓ Why custom errors?

Built-in errors are generic.
We want **meaningful messages** for users & developers.

---

### 🔥 `throw` keyword

```js
throw new Error("Something bad happened");
```

👉 Immediately stops execution and sends error to `catch`.

---

## 8️⃣ DEMO: URL Validation with Custom Error 🚀

### 🧩 Scenario

User enters a URL in input field.
If invalid → throw custom error **“Invalid URL”**

---

### 🧪 HTML

```html
<input type="text" id="urlInput" placeholder="Enter website URL" />
<button onclick="checkURL()">Submit</button>

<p id="message"></p>
```

---

### 🧠 JavaScript (FULL LOGIC)

```js
function checkURL() {
  const url = document.getElementById("urlInput").value;
  const message = document.getElementById("message");

  try {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      throw new Error("Invalid URL");
    }

    message.textContent = "Valid URL ✅";
    message.style.color = "green";
  } catch (error) {
    message.textContent = error.message;
    message.style.color = "red";

    console.error(error.stack); // debugging
  } finally {
    console.log("URL validation attempt completed");
  }
}
```

---

## 9️⃣ Line-by-Line Explanation

### 🔹 Validation Check

```js
if (!url.startsWith("http://") && !url.startsWith("https://")) {
```

Checks defensive condition (user input safety)

---

### 🔹 Throwing Custom Error

```js
throw new Error("Invalid URL");
```

- Creates error manually
- Stops normal execution
- Jumps to `catch`

---

### 🔹 Catch Block

```js
catch (error) {
```

- Receives thrown error
- Displays error message safely

---

### 🔹 Finally Block

```js
finally {
  console.log("URL validation attempt completed");
}
```

- Runs always
- Used for cleanup/logging

---

## 🔟 Mini Project Idea 💡 (Practice)

### 📌 Project: **Safe Bio-Link Form**

Features:

- Name validation
- URL validation
- Custom errors
- Error messages on UI
- Console stack trace logging

---

## 🎯 Learning Outcome (VERY IMPORTANT)

After this topic, you should understand:
✅ How runtime errors occur
✅ How `try…catch…finally` works
✅ How to create **custom errors**
✅ How to read **error stack traces**
✅ How to write **defensive JavaScript code**

---
