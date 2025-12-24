import React, { useState } from "react";

function CRUD() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState("");

  function submitData(event) {
    event.preventDefault();

    if (editId) {
      let updateData = data.map((item) => (item.id === editId ? { ...item, name: newName, age: newAge } : item));
      setData(updateData);
      setEditId(null);
    } else {
      let newId = Date.now().toString(36);
      setData([
        ...data,
        {
          id: newId,
          name: newName,
          age: newAge,
        },
      ]);
    }

    setNewName("");
    setNewAge("");
  }

  function editData(id) {
    let editEntry = data.find((item) => item.id === id);

    setEditId(id);
    setNewName(editEntry.name);
    setNewAge(editEntry.age);
  }

  function deleteData(id) {
    let deleteEntry = data.filter((item) => item.id !== id);
    setData(deleteEntry);
    setNewName("");
    setNewAge("");
  }

  return (
    <div>
      <form action="#" method="post" onSubmit={submitData}>
        <input type="text" placeholder="name" value={newName} onChange={(e) => setNewName(e.target.value)} />
        <input type="number" placeholder="age" value={newAge} onChange={(e) => setNewAge(e.target.value)} />
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
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  <button onClick={() => editData(item.id)}>Edit</button>
                  <button onClick={() => deleteData(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CRUD;
