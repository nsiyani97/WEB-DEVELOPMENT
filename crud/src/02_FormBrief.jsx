import React, { useState } from "react";

function FormBrief() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [userName, setUserName] = useState("");
  const [userTel, setUserTel] = useState("");
  const [userEmail, setUserEmail] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    if (editId !== null) {
      let updateUser = data.map((item) =>
        item.id === editId
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
      setData([
        ...data,
        {
          id: Date.now() % 10000,
          name: userName,
          tel: userTel,
          email: userEmail,
        },
      ]);
    }
    setUserName("");
    setUserTel("");
    setUserEmail("");
  }
  function editUser(id) {
    let editUser = data.find((item) => item.id === id);
    setUserName(editUser.name);
    setUserTel(editUser.tel);
    setUserEmail(editUser.email);
    setEditId(id);
  }
  function deleteUser(id) {
    let deleteUser = data.filter((item) => item.id !== id);
    setData(deleteUser);
  }
  return (
    <div>
      <div>
        <form action="#" method="post" onSubmit={handleSubmit}>
          <label htmlFor="name" />
          <input type="text" name="userName" value={userName} id="name" onChange={(e) => setUserName(e.target.value)} />
          <label htmlFor="tel" />
          <input type="tel" name="userTel" value={userTel} id="tel" onChange={(e) => setUserTel(e.target.value)} />
          <label htmlFor="email" />
          <input type="email" name="userEmail" value={userEmail} id="email" onChange={(e) => setUserEmail(e.target.value)} />
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
    </div>
  );
}

export default FormBrief;
