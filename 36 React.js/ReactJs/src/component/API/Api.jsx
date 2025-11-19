import React, { useEffect, useState } from "react";

function CRUD() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  const API_URL = "http://localhost:3000/users"; // your database url

  // 🔹 Load data on mount
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  // 🔹 Add or Update data
  async function submitData(event) {
    event.preventDefault();

    // -------- UPDATE --------
    if (editId) {
      await fetch(`${API_URL}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newName,
          age: newAge,
        }),
      });

      // update state
      setData((prev) => prev.map((item) => (item.id === editId ? { ...item, name: newName, age: newAge } : item)));

      setEditId(null);
    } else {
      // -------- ADD --------
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newName,
          age: newAge,
        }),
      });

      const createdUser = await response.json();

      // update state
      setData([...data, createdUser]);
    }

    // Clear input fields
    setNewName("");
    setNewAge("");
  }

  // 🔹 Edit user
  function editData(id) {
    const item = data.find((i) => i.id === id);
    setEditId(id);
    setNewName(item.name);
    setNewAge(item.age);
  }

  // 🔹 Delete user
  async function deleteData(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });

    setData(data.filter((item) => item.id !== id));
  }

  return (
    <div>
      <form onSubmit={submitData}>
        <input type="text" placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)} />

        <input type="number" placeholder="Age" value={newAge} onChange={(e) => setNewAge(e.target.value)} />

        <button type="submit">{editId ? "Update" : "Submit"}</button>
      </form>

      <hr />

      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
                <button onClick={() => editData(item.id)}>Edit</button>
                <button onClick={() => deleteData(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CRUD;
