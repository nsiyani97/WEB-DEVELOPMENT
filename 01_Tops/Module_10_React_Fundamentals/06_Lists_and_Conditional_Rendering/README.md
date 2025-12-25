- Lists & Conditional Rendering
- Rendering arrays with map().
- Conditional rendering (if, ternary).
- Demo: Render dynamic product list.

---

# 🔹 Lists & Conditional Rendering in React

## 1️⃣ What is this topic about?

In real React applications, **data is not static**.

You usually have:

- Lists of products
- Users
- Posts
- Links
- Cards

👉 **Lists & Conditional Rendering** allow React to:

- Display **multiple items dynamically**
- Show or hide UI based on **conditions** (login, stock, loading, etc.)

This is **core React thinking** 🧠.

---

## 2️⃣ Definitions

### ✅ Lists Rendering

Rendering **arrays of data** into UI elements using JavaScript’s `map()` method.

### ✅ Conditional Rendering

Showing **different UI** depending on a condition (`true/false`).

---

## 3️⃣ Rendering Arrays with `map()`

### 🔹 Why `map()`?

React cannot render arrays directly.
We must **convert array items into JSX elements**.

---

### 📌 Syntax

```js
array.map((item, index) => <JSXElement key={index} />);
```

---

### 📌 Example (Basic)

```js
const numbers = [1, 2, 3];

return (
  <ul>
    {numbers.map((num) => (
      <li key={num}>{num}</li>
    ))}
  </ul>
);
```

🔑 **Key Points**

- `map()` returns a **new array**
- Each element must have a **key**
- `key` helps React optimize rendering

---

## 4️⃣ Conditional Rendering in React

---

### 🔹 1. Using `if` statement (Outside JSX)

```js
let message;

if (isLoggedIn) {
  message = <h2>Welcome Back!</h2>;
} else {
  message = <h2>Please Login</h2>;
}

return <div>{message}</div>;
```

✔ Used when logic is complex

---

### 🔹 2. Ternary Operator (Most Common)

```js
{
  isLoggedIn ? <h2>Welcome</h2> : <h2>Please Login</h2>;
}
```

✔ Best for simple conditions

---

### 🔹 3. Logical AND (`&&`)

```js
{
  isAdmin && <button>Delete User</button>;
}
```

✔ When you only need **true case**

---

## 5️⃣ Demo Project: Dynamic Product List 🛒

We will:

- Render products using `map()`
- Show **In Stock / Out of Stock**
- Conditionally show **Buy button**

---

## 📁 Project Structure

```
src/
 ├─ App.jsx
 ├─ ProductList.jsx
 └─ index.js
```

---

## 🧩 `index.js`

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

---

## 🧩 `App.jsx`

```js
import ProductList from "./ProductList";

function App() {
  return (
    <div>
      <h1>🛍️ Product Store</h1>
      <ProductList />
    </div>
  );
}

export default App;
```

---

## 🧩 `ProductList.jsx`

```js
const products = [
  { id: 1, name: "Laptop", price: 50000, inStock: true },
  { id: 2, name: "Mobile", price: 20000, inStock: false },
  { id: 3, name: "Headphones", price: 3000, inStock: true },
];

function ProductList() {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>

          {/* Conditional Rendering */}
          {product.inStock ? <button>Buy Now</button> : <p style={{ color: "red" }}>Out of Stock</p>}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
```

---

## 6️⃣ Concept Breakdown (Very Important)

### 🔹 `products.map(...)`

- Loops through product array
- Converts each object → JSX card

### 🔹 `key={product.id}`

- Helps React identify each item uniquely
- **Never skip keys**

### 🔹 Conditional Buy Button

```js
product.inStock ? <button>Buy Now</button> : <p>Out of Stock</p>;
```

✔ Real-world logic like Amazon / Flipkart

---

## 7️⃣ Real-World Use Cases

| Concept | Real App Example              |
| ------- | ----------------------------- |
| map()   | Product list, posts, comments |
| Ternary | Login / Logout button         |
| &&      | Admin-only actions            |
| if      | Loading / error handling      |

---

## 8️⃣ Mini Task (Practice)

Try adding:

1. `rating` field ⭐
2. Show **“Top Rated”** only if rating > 4
3. Show **“No Products Available”** if array is empty

---
s