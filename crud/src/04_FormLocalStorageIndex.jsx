import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function FormLocalStorageIndex() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    tel: "",
    email: "",
  });
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")) || []);
  }, []);
  function handleChange(event) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (editId != null) {
      let updateUser = data.map((item, index) => (index === editId ? userData : item));
      setData(updateUser);
      localStorage.setItem("data", JSON.stringify(updateUser));
      setEditId(null);
    } else {
      setData([...data, userData]);
      localStorage.setItem("data", JSON.stringify([...data, userData]));
    }
  }
  function editUser(id) {
    let editUser = data[id];
    setUserData(editUser);
    setEditId(id);
  }
  function deleteUser(id) {
    let deleteUser = data.filter((_, index) => index != id);
    setData(deleteUser);
    localStorage.setItem("data", JSON.stringify(deleteUser));
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
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.tel}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => editUser(index)}>Edit</button>
                  <button onClick={() => deleteUser(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FormLocalStorageIndex;
