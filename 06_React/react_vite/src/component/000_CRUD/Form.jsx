import React, { useState, useCallback } from "react";
import Table from "./Table";

function Form() {
  const [editId, setEditId] = useState(null);
  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState("");
  const [userTel, setUserTel] = useState("");
  const [userEmail, setUserEmail] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "userName") setUserName(value);
    if (name === "userTel") setUserTel(value);
    if (name === "userEmail") setUserEmail(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editId != null) {
      const updated = userData.map((item) =>
        item.id === editId
          ? { ...item, name: userName, tel: userTel, email: userEmail }
          : item
      );
      setUserData(updated);
      setEditId(null);
      setUserName("");
      setUserTel("");
      setUserEmail("");
      return;
    }
    const newUser = {
      id: Date.now() % 1000,
      name: userName,
      tel: userTel,
      email: userEmail,
    };
    setUserData([...userData, newUser]);
    setUserName("");
    setUserTel("");
    setUserEmail("");
  }

  // useCallback ensures stable references to prevent unnecessary re-renders
  const editUser = useCallback(
    (id) => {
      const user = userData.find((item) => item.id === id);
      setUserName(user.name);
      setUserTel(user.tel);
      setUserEmail(user.email);
      setEditId(user.id);
    },
    [userData]
  );

  const deleteUser = useCallback(
    (id) => {
      const filtered = userData.filter((item) => item.id !== id);
      setUserData(filtered);
    },
    [userData]
  );

  // useCallback hooks = to prevent unneccesary fucntion
  // --> returns memoized funtion
  // --> to freeze a function

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="tel"
          name="userTel"
          value={userTel}
          onChange={handleChange}
          placeholder="Tel"
        />
        <input
          type="email"
          name="userEmail"
          value={userEmail}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>

      {/* Pass data and callback handlers to the Table */}
      <Table userData={userData} onEdit={editUser} onDelete={deleteUser} />
    </div>
  );
}

export default Form;
