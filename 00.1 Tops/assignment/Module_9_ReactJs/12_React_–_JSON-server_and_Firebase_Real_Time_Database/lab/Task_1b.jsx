import React, { useEffect, useState } from "react";

// Create a React app with Json-server and use Get , Post , Put , Delete & patch method on Json-server API.

const API = "http://localhost:3001/users";

function JsonServerCrud() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  // GET
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // POST
  const addUser = () => {
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then((data) => setUsers([...users, data]));
  };

  // PUT
  const updateUser = (id) => {
    fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Updated Name" }),
    });
  };

  // PATCH
  const patchUser = (id) => {
    fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Patched Name" }),
    });
  };

  // DELETE
  const deleteUser = (id) => {
    fetch(`${API}/${id}`, { method: "DELETE" }).then(() => setUsers(users.filter((u) => u.id !== id)));
  };

  return (
    <div>
      <h2>JSON Server CRUD</h2>

      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
      <button onClick={addUser}>Add</button>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name}
            <button onClick={() => updateUser(u.id)}>PUT</button>
            <button onClick={() => patchUser(u.id)}>PATCH</button>
            <button onClick={() => deleteUser(u.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JsonServerCrud;
