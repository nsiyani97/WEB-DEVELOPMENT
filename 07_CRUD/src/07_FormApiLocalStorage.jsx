import React, { useState, useEffect } from "react";

function FormApiLocalStorage() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({ name: "", tel: "", email: "" });
  const [editId, setEditId] = useState(null);

  const API_URL = "http://localhost:3333/users";

  // Load API data and sync to localStorage on first load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const apiData = await res.json();
        setData(apiData);
        localStorage.setItem("data", JSON.stringify(apiData));
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      // Update existing user
      const updatedUser = { ...user, id: editId };

      // Update API
      await fetch(`${API_URL}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });

      // Update state
      const updatedData = data.map((item) => (item.id === editId ? updatedUser : item));
      setData(updatedData);

      // Update localStorage
      localStorage.setItem("data", JSON.stringify(updatedData));

      setEditId(null);
    } else {
      // Add new user
      const newUser = { ...user, id: Date.now() % 10000 };

      // Add to API
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      // Update state
      const newData = [...data, newUser];
      setData(newData);

      // Update localStorage
      localStorage.setItem("data", JSON.stringify(newData));
    }

    setUser({ name: "", tel: "", email: "" });
  };  

  const editUser = (id) => {
    const selected = data.find((item) => item.id === id);
    setUser({ name: selected.name, tel: selected.tel, email: selected.email });
    setEditId(id);
  };

  const deleteUser = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    const updated = data.filter((item) => item.id !== id);
    setData(updated);
    localStorage.setItem("data", JSON.stringify(updated));
  };

  return (
    <div>
      <h1>CRUD API + LocalStorage</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} />
        <input type="tel" name="tel" placeholder="Tel" value={user.tel} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Tel</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.tel}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => editUser(item.id)}>Edit</button>
                <button onClick={() => deleteUser(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FormApiLocalStorage;
