import React, { useState } from "react";

function FormShort() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [userData, setUserData] = useState({
    userName: "",
    userTel: "",
    userEmail: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (editId != null) {
      setData(data.map((item) => (item.id === editId ? { ...userData, id: editId } : item)));
      setEditId(null);
    } else {
      setData([...data, { ...userData, id: Date.now() % 10000 }]);
    }
    setUserData({
      userName: "",
      userTel: "",
      userEmail: "",
    });
  }
  function editUser(id) {
    let editUser = data.find((item) => item.id === id);
    if (editUser) setUserData(editUser);
    setEditId(id);
  }
  function deleteUser(id) {
    setData(data.filter((item) => item.id !== id));
  }
  return (
    <div>
      <form action="#" method="post" onSubmit={handleSubmit}>
        <label htmlFor="name" />
        <input type="text" name="userName" value={userData.userName} id="name" onChange={handleChange} />
        <label htmlFor="tel" />
        <input type="tel" name="userTel" value={userData.userTel} id="tel" onChange={handleChange} />
        <label htmlFor="email" />
        <input type="email" name="userEmail" value={userData.userEmail} id="email" onChange={handleChange} />
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
                <td>{item.userName}</td>
                <td>{item.userTel}</td>
                <td>{item.userEmail}</td>
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

export default FormShort;
