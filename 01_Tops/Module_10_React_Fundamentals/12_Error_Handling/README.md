- Error Handling
- Try/catch in API calls.
- Demo: Display “Error loading data” message.

---

# ❌ Error Handling in React (API Calls)

## 1️⃣ What is this topic about?

**Error handling** is the process of **gracefully managing failures** in your application.

In real-world apps, things can go wrong:

- Internet not working
- Server down
- API returns wrong data
- Invalid response

👉 Instead of **app crashing**, we show a **friendly error message** like:

> ❌ _Error loading data_

---

## 2️⃣ Why Error Handling is Important

Without error handling:

- App crashes ❌
- Blank screen ❌
- Bad user experience ❌

With error handling:

- App stays stable ✅
- User understands what went wrong ✅
- Developer can debug easily ✅

💡 **Rule**:

> _Never trust APIs to always succeed._

---

## 3️⃣ JavaScript `try / catch` – Core Concept

### ✅ Definition

`try...catch` is used to **catch runtime errors** and handle them safely.

### 🔹 Syntax

```js
try {
  // risky code (may fail)
} catch (error) {
  // handle error
} finally {
  // optional (runs always)
}
```

---

### 🔹 Simple Example

```js
try {
  let data = JSON.parse("invalid-json");
} catch (error) {
  console.log("Something went wrong");
}
```

✔ App does NOT crash
✔ Error is handled

---

## 4️⃣ Try/Catch in API Calls (React)

In React, API calls usually happen inside:

- `useEffect`
- `async` functions

### 🔹 Common API Failure Scenarios

- Wrong URL
- Network issue
- Server error (404, 500)

---

## 5️⃣ Demo: Display “Error loading data” Message

We’ll build a **small React demo** 👇

### 🎯 Goal

- Fetch data from API
- If success → show data
- If error → show **“Error loading data”**

---

## 6️⃣ Example Project: Error Handling Demo

### 📁 Component: `UserList.jsx`

```jsx
import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // ❌ intentionally wrong URL to simulate error
        const response = await fetch("https://wrong-api-url.com/users");

        if (!response.ok) {
          throw new Error("API failed");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // ⏳ Loading state
  if (loading) {
    return <h3>Loading...</h3>;
  }

  // ❌ Error state
  if (error) {
    return <h3 style={{ color: "red" }}>Error loading data</h3>;
  }

  // ✅ Success state
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default UserList;
```

---

## 7️⃣ Line-by-Line Concept Explanation

### 🔹 State Variables

```js
const [users, setUsers] = useState([]);
```

➡ Stores API data

```js
const [error, setError] = useState(false);
```

➡ Tracks error state

```js
const [loading, setLoading] = useState(true);
```

➡ Tracks loading state

---

### 🔹 try block

```js
const response = await fetch(url);
```

➡ Risky code (may fail)

```js
if (!response.ok) {
  throw new Error("API failed");
}
```

➡ Manually throw error if status is not OK

---

### 🔹 catch block

```js
catch (err) {
  setError(true);
}
```

➡ Runs only when error occurs

---

### 🔹 finally block

```js
finally {
  setLoading(false);
}
```

➡ Runs **always** (success or error)

---

## 8️⃣ UI Logic (Very Important)

```js
if (loading) return <h3>Loading...</h3>;
```

```js
if (error) return <h3>Error loading data</h3>;
```

✔ Clean
✔ Predictable
✔ Professional pattern

---

## 9️⃣ Final Learning Pattern (Remember This)

Every API screen should have:

```txt
1. Loading state
2. Error state
3. Success state
```

---

## 🔑 Key Takeaways

- `try/catch` prevents app crashes
- Always handle API failures
- Show user-friendly messages
- `finally` is perfect for loading cleanup

---

### 🚀 Next Logical Step

We can now cover:

- Axios error handling
- Error handling with status codes
- Retry button (“Try again”)
- Centralized error handling

Tell me what you want next 👍
