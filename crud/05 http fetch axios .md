1. What is an **HTTP** Request?

HTTP = HyperText Transfer Protocol

- It is the way browsers and servers communicate with each other.
- A website or frontend sends an HTTP request → server sends back an HTTP response.

2. Types of HTTP Requests (**CRUD**)

| Method | Meaning             | CRUD   |
| ------ | ------------------- | ------ |
| GET    | Fetch data          | Read   |
| POST   | Send new data       | Create |
| PUT    | Replace entire data | Update |
| PATCH  | Update part of data | Update |
| DELETE | Remove data         | Delete |

3. How does **fetch()** work? (Browser built-in API)

- `fetch()` is built into every browser — no installation needed.

```js
// GET request using fetch
fetch("http://localhost:3001/users")
  .then((res) => res.json())
  .then((data) => console.log(data));

// POST request using fetch
fetch("http://localhost:3001/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Nikhil",
    email: "nikhil@example.com",
  }),
});
```

- What you must do manually with fetch:
  call res.json() yourself
  handle errors
  set headers
  convert object to JSON (stringify)
  no timeout
  no automatic error handling

4. How does **Axios** work? (External library)

```js
// GET request using axios
axios.get("http://localhost:3001/users").then((res) => console.log(res.data));

// POST request using axios
axios.post("http://localhost:3001/users", {
  name: "Nikhil",
  email: "nikhil@example.com",
});

// must add this inside your HTML:
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>;
```

- What Axios does automatically:
  converts response to JSON
  handles errors cleanly
  automatically adds headers
  automatically stringifies objects
  supports timeouts
  works on older browsers
  has interceptors (global middleware)

===================================================================================================

npm i json-server // **json-server** is an npm package that turns a simple JSON file into a full REST API—without writing a backend.

1. You provide a db.json file.
   json-server reads it and treats every key as a database table (collection).

2. Creates a Fake Database (In Memory)
   The JSON file is copied into an in-memory database (handled by the lowdb library).

3. Runs an HTTP server
   It starts an Express.js server behind the scenes and auto-generates routes.

4. Watches for changes
   Whenever you edit db.json, the server auto-updates.

5. Handles CRUD (REST) automatically
   GET Read data
   POST Add new record
   PUT Replace entire record
   PATCH Update part of record
   DELETE Remove record
