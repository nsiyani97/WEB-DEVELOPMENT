- Axios & API Integration
- GET and POST using Axios.
- Demo: Fetch product list from mock API.
  - install axios
  - [Api](https://fakestoreapi.com/products)

---

## 🔌 Axios & API Integration (React)

[Api Connection](https://miro.medium.com/v2/resize%3Afit%3A1360/1%2ASTRUDze6-hwKBtYWVIRUVg.png) |
[Axios Interceptor](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AMl_FWnUbGkcwT8QJsNxdqg.png)

---

## 1️⃣ What is this topic about?

**Axios & API Integration** is about connecting your React application to **external data sources (APIs)** so your app can:

- Fetch data from a server (GET)
- Send data to a server (POST)
- Work with real-world backend systems

👉 In real apps (E-commerce, Dashboards, Admin Panels), **API integration is mandatory**.

---

## 2️⃣ What is Axios?

### ✅ Definition

**Axios** is a **promise-based HTTP client** used to make API requests from the browser or Node.js.

### ✅ Why Axios over fetch?

| Fetch API              | Axios                  |
| ---------------------- | ---------------------- |
| Manual JSON conversion | Auto JSON parsing      |
| No interceptors        | Interceptors supported |
| Verbose error handling | Better error handling  |
| Built-in browser only  | Browser + Node         |

---

## 3️⃣ Installing Axios

```bash
npm install axios
```

Import it:

```js
import axios from "axios";
```

---

## 4️⃣ Axios Syntax (Core Concepts)

### 🔹 GET Request (Fetch Data)

**Syntax:**

```js
axios.get(url);
```

**Example:**

```js
axios
  .get("https://fakestoreapi.com/products")
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));
```

---

### 🔹 POST Request (Send Data)

**Syntax:**

```js
axios.post(url, data);
```

**Example:**

```js
axios.post("https://fakestoreapi.com/products", {
  title: "New Product",
  price: 99,
});
```

---

## 5️⃣ Line-by-Line Concept Explanation

```js
axios.get(url);
```

- Makes an HTTP GET request

```js
.then(response => response.data)
```

- Axios automatically converts JSON → JS object

```js
.catch(error => ...)
```

- Handles network / server errors

---

## 6️⃣ Demo Project: Fetch Product List (GET)

### 🧠 Goal

- Fetch products from mock API
- Display product list
- Show loading state

---

### 📁 Project Structure

```
src/
 ├─ App.jsx
 ├─ ProductList.jsx
 └─ main.jsx
```

---

### 🔹 ProductList.jsx

```jsx
import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading products...</h2>;

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", margin: 10 }}>
          <h4>{product.title}</h4>
          <p>₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
```

---

### 🔹 App.jsx

```jsx
import ProductList from "./ProductList";

function App() {
  return (
    <div>
      <h1>Axios API Demo</h1>
      <ProductList />
    </div>
  );
}

export default App;
```

---

## 7️⃣ Demo: Add Product (POST)

### 🔹 AddProduct.jsx

```jsx
import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
  const [title, setTitle] = useState("");

  const addProduct = () => {
    axios
      .post("https://fakestoreapi.com/products", {
        title: title,
        price: 199,
      })
      .then((res) => {
        console.log("Created:", res.data);
        alert("Product added!");
      });
  };

  return (
    <div>
      <input placeholder="Product Name" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;
```

---

## 8️⃣ Real-World Flow (Important Interview Point)

```
React Component
   ↓
Axios Request
   ↓
API Server
   ↓
JSON Response
   ↓
State Update (useState)
   ↓
UI Re-render
```

---

## 9️⃣ Common Mistakes (⚠️ Exam + Interview)

❌ Calling API outside `useEffect`
❌ Forgetting dependency array `[]`
❌ Not handling loading state
❌ Using index instead of `id` as key

---

## 🔑 Key Takeaways

- Axios simplifies API calls
- GET → Fetch data
- POST → Send data
- Always handle loading & errors
- API data → state → UI

---

### 👉 Next Recommended Topic

- **Async/Await with Axios**
- **Axios Interceptors**
- **CRUD App with Axios + LocalStorage**

If you want, I can convert this demo into a **mini Product CRUD project (Create, Read, Update, Delete)** step-by-step.
