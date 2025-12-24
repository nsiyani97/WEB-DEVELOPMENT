import React, { useEffect, useState, useReducer } from "react";

// 1️⃣ Reducer to manage 'data' and sync with localStorage
function dataReducer(state, action) {
  switch (action.type) {
    case "LOAD":
      return action.payload || [];

    case "SET":
      localStorage.setItem("data", JSON.stringify(action.payload)); // sync to localStorage
      return action.payload;

    default:
      return state;
  }
}

function App() {
  const [data, dispatch] = useReducer(dataReducer, []); // useReducer for array + localStorage
  const [editId, setEditId] = useState(null);
  const [userData, setUserData] = useState({ name: "", tel: "", email: "" });

  // 2️⃣ Load data from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("data")) || [];
    dispatch({ type: "LOAD", payload: saved });
  }, []);

  // 3️⃣ Handle input changes
  function handleChange(event) {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  }

  // 4️⃣ Submit: add or edit user
  function handleSubmit(event) {
    event.preventDefault();

    if (editId != null) {
      // edit existing
      const updatedArr = data.map((item) => (item.id === editId ? { ...userData, id: editId } : item));
      dispatch({ type: "SET", payload: updatedArr }); // update data + localStorage
      setEditId(null);
    } else {
      // add new
      const newArr = [...data, { ...userData, id: Date.now() % 10000 }];
      dispatch({ type: "SET", payload: newArr }); // update data + localStorage
    }

    setUserData({ name: "", tel: "", email: "" });
  }

  // 5️⃣ Edit user
  function editUser(id) {
    const editUser = data.find((item) => item.id === id);
    setUserData({ name: editUser.name, tel: editUser.tel, email: editUser.email });
    setEditId(id);
  }

  // 6️⃣ Delete user
  function deleteUser(id) {
    const filtered = data.filter((item) => item.id !== id);
    dispatch({ type: "SET", payload: filtered }); // update data + localStorage
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Name" />
        <input type="tel" name="tel" value={userData.tel} onChange={handleChange} placeholder="Tel" />
        <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" />
        <button type="submit">{editId != null ? "Update" : "Submit"}</button>
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

export default App;
