import React, { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4GW8B0OA9wzX4UAiBeLDa3w0eWGNFez8",
  authDomain: "my-first-project-bec63.firebaseapp.com",
  projectId: "my-first-project-bec63",
  storageBucket: "my-first-project-bec63.firebasestorage.app",
  messagingSenderId: "701356026896",
  appId: "1:701356026896:web:40ff4d86e2042525b4ee95",
  measurementId: "G-2QQL1EC1GZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

function FormFirebase() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    name: "",
    tel: "",
    email: "",
  });
  // const [editId, setEditId] = useState(null);
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setData([...data, user]);
  }
  useEffect(() => {
    const firestore = getDocs(collection(db, "users"));
    let userData = [];
    firestore.forEach((doc) => {
      let data = doc.data();
      let id = doc.id;
      userData.push({ ...data, id });
    });
    setData(userData);
  }, []);

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
                  {/* <button onClick={() => editUser(item.id)}>Edit</button>
                  <button onClick={() => deleteUser(item.id)}>Delete</button> */}
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
