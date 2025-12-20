import React, { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, addDoc, doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB4GW8B0OA9wzX4UAiBeLDa3w0eWGNFez8",
  authDomain: "my-first-project-bec63.firebaseapp.com",
  projectId: "my-first-project-bec63",
  storageBucket: "my-first-project-bec63.firebasestorage.app",
  messagingSenderId: "701356026896",
  appId: "1:701356026896:web:40ff4d86e2042525b4ee95",
  measurementId: "G-2QQL1EC1GZ",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function FormFirebase() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    name: "",
    tel: "",
    email: "",
  });
  const [editId, setEditId] = useState(null);

  const fetchUsers = async () => {
    const snapshot = await getDocs(collection(db, "users"));
    let userData = [];
    snapshot.forEach((doc) => {
      let data = doc.data();
      let id = doc.id;
      userData.push({ ...data, id });
    });
    setData(userData);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (editId != null) {
      await updateDoc(doc(db, "users", editId), user);
      setEditId(null);
    } else {
      const docRef = await addDoc(collection(db, "users"), user);
      setData([...data, { ...user, id: docRef.id }]);
    }

    setUser({ name: "", tel: "", email: "" });
    fetchUsers();
  }
  async function editUser(item) {
    setUser({
      name: item.name,
      tel: item.tel,
      email: item.email,
    });
    setEditId(item.id);
  }
  async function deleteUser(id) {
    await deleteDoc(doc(db, "users", id));
    fetchUsers();
  }
  return (
    <div>
      <form action="#" method="post" onSubmit={handleSubmit}>
        <label htmlFor="name" />
        <input type="text" name="name" value={user.name} id="name" onChange={handleChange} />
        <label htmlFor="tel" />
        <input type="tel" name="tel" value={user.tel} id="tel" onChange={handleChange} />
        <label htmlFor="email" />
        <input type="email" name="email" value={user.email} id="email" onChange={handleChange} />
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
                  <button onClick={() => editUser(item)}>Edit</button>
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

export default FormFirebase;
