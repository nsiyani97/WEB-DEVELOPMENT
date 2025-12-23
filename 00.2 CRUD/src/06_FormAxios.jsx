import React, { useEffect, useState } from "react";
import axios from "axios";

function FormAxios() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    tel: "",
    email: "",
  });
  useEffect(() => {
    axios.get("http://localhost:3333/users").then((res) => {
      setData(res.data);
    });
  }, []);
  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (editId != null) {
      axios.patch("http://localhost:3333/users/" + editId, userData).then((res) => {
        let updateUser = res.data;
        setData(data.map((item) => (item.id === editId ? updateUser : item)));
        setEditId(null);
      });
    } else {
      axios.post("http://localhost:3333/users", userData).then((res) => {
        setData([...data, res.data]);
      });
    }
    setUserData({ name: "", tel: "", email: "" });
  }
  function editUser(id) {
    axios.get("http://localhost:3333/users/" + id).then((res) => {
      setUserData(res.data);
      setEditId(id);
    });
  }
  function deleteUser(id) {
    axios.delete("http://localhost:3333/users/" + id);
    setData(data.filter((item) => item.id !== id));
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

export default FormAxios;
