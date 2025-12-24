import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  onSnapshot
} from "firebase/firestore";

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

function FormFirebaseSnapshot() {
  // Firestore-driven data (no setData)
  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({
    name: "",
    tel: "",
    email: "",
  });

  const [editId, setEditId] = useState(null);

  // 🔥 Real-time Firestore subscription
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsub();
  }, []);

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await updateDoc(doc(db, "users", editId), user);
      setEditId(null);
    } else {
      await addDoc(collection(db, "users"), user);
    }

    setUser({ name: "", tel: "", email: "" });
  };

  const editUser = (u) => {
    setUser({
      name: u.name,
      tel: u.tel,
      email: u.email,
    });
    setEditId(u.id);
  };

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="tel"
          value={user.tel}
          onChange={handleChange}
          placeholder="Telephone"
        />
        <input
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">
          {editId ? "Update" : "Submit"}
        </button>
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
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.tel}</td>
              <td>{u.email}</td>
              <td>
                <button onClick={() => editUser(u)}>Edit</button>
                <button onClick={() => deleteUser(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FormFirebaseSnapshot;
