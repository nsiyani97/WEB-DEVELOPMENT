import React, { useState } from "react";

function FormIndex() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [userName, setUserName] = useState("");
  const [userTel, setUserTel] = useState("");
  const [userEmail, setUserEmail] = useState("");
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "userName") setUserName(value);
    if (name === "userTel") setUserTel(value);
    if (name === "userEmail") setUserEmail(value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (editId !== null) {
      let updateUser = data.map((item, index) =>
        index === editId
          ? {
              ...item,
              name: userName,
              tel: userTel,
              email: userEmail,
            }
          : item
      );
      setData(updateUser);
      setEditId(null);
    } else {
      let newUser = {
        name: userName,
        tel: userTel,
        email: userEmail,
      };
      let updateArray = [...data, newUser];
      setData(updateArray);
    }
    setUserName("");
    setUserTel("");
    setUserEmail("");
  }
  function editUser(index) {
    let editUser = data[index];
    setUserName(editUser.name);
    setUserTel(editUser.tel);
    setUserEmail(editUser.email);
    setEditId(index);
  }
  function deleteUser(index) {
    const newdata = [...data];
    newdata.splice(index, 1);
    setData(newdata);
  }
  return (
    <div>
      <div>
        <form action="#" method="post" onSubmit={handleSubmit}>
          <label htmlFor="name" />
          <input type="text" name="userName" value={userName} id="name" onChange={handleChange} />
          <label htmlFor="tel" />
          <input type="tel" name="userTel" value={userTel} id="tel" onChange={handleChange} />
          <label htmlFor="email" />
          <input type="email" name="userEmail" value={userEmail} id="email" onChange={handleChange} />
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
                <tr key={index + 1}>
                  <td>{index + 1}</td>
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
    </div>
  );
}

export default FormIndex;
