import React, { useEffect, useState } from "react";

function FormFetch() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    tel: "",
    email: "",
  });
  useEffect(() => {
    fetch("http://localhost:3333/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (editId != null) {
      fetch("http://localhost:3333/users/" + editId, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      })
        //   patch returns single updated obj
        .then((res) => res.json())
        .then((updateUser) => {
          setData(data.map((item) => (item.id === editId ? updateUser : item)));
          setEditId(null);
        });
    } else {
      fetch("http://localhost:3333/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      })
        //   post returns newly created object
        .then((res) => res.json())
        .then((newUser) => {
          setData((prev) => [...prev, newUser]);
        });
    }
    setUserData({ name: "", tel: "", email: "" });
  }
  function editUser(id) {
    fetch("http://localhost:3333/users/" + id, {
      method: "GET",
    })
      // get returns whole array but with id returns particular single object
      .then((res) => res.json())
      .then((editUser) => {
        setUserData(editUser);
        setEditId(id);
      });
  }
  function deleteUser(id) {
    fetch("http://localhost:3333/users/" + id, {
      method: "DELETE",
    })
      // delete returns nothing thus need to manually update state
      .then(() => {
        setData(data.filter((item) => item.id !== id));
      });
  }
  return (
    <div>
      <form action="#" method="post" onSubmit={handleSubmit}>
        <label htmlFor="name" />
        <input type="text" name="name" value={userData.name} id="name" onChange={handleChange} />
        <label htmlFor="tel" />
        <input type="tel" name="tel" value={userData.tel} id="tel" onChange={handleChange} />
        <label htmlFor="email" />
        <input type="email" name="email" value={userData.email} id="email" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <table>
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
          {data.map((item) => {
            return (
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
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FormFetch;
