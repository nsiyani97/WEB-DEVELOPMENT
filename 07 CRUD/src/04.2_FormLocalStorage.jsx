import React, { useEffect, useState } from "react";

function FormLocalStorage() {
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
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }
  function updateBothArr(setData, newData) {
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (editId != null) {
      let updateArr = data.map((item) => (item.id === editId ? { ...userData, id: editId } : item));
      updateBothArr(setData, updateArr);
      setEditId(null);
    } else {
      let newArr = [
        ...data,
        {
          ...userData,
          id: Date.now() % 10000,
        },
      ];
      updateBothArr(setData, newArr);
    }
    setUserData({
      name: "",
      tel: "",
      email: "",
    });
  }
  function editUser(id) {
    let editUser = data.find((item) => item.id === id);
    // not passing id to input fields so destructured
    const { name, tel, email } = editUser;
    setUserData({ name, tel, email });
    setEditId(id);
  }
  function deleteUser(id) {
    let deleteUser = data.filter((item) => item.id !== id);
    updateBothArr(setData, deleteUser);
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

export default FormLocalStorage;
