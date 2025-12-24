## Question 1: What are RESTful web services?

RESTful services use HTTP methods (GET, POST, PUT, DELETE) for communication between client and server.

---

## Question 2: What is Json-Server?

`json-server` is a lightweight mock REST API that uses a JSON file as a database.

---

## Question 3: How to fetch data from Json-server in React.

Using `fetch()` or `axios()`:

```jsx
useEffect(() => {
  fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((data) => setPosts(data));
}, []);
```

---

## Question 4: What is Firebase?

Firebase is Google’s platform offering backend services like authentication, real-time databases, hosting, and cloud storage.

---

## Question 5: Importance of handling errors and loading states in APIs.

Helps maintain good UX by showing feedback while data loads or errors occur.
    
---
