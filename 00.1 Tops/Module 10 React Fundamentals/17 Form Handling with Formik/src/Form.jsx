import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
  age: Yup.number().typeError("Age must be a number").min(1, "Age must be greater than 0").required("Age is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
});

const UserForm = () => {
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem("users", JSON.stringify(data));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      let updatedUsers;

      if (editIndex !== null) {
        updatedUsers = [...users];
        updatedUsers[editIndex] = values;
        setEditIndex(null);
      } else {
        updatedUsers = [...users, values];
      }

      setUsers(updatedUsers);
      saveToLocalStorage(updatedUsers);
      resetForm();
    },
  });

  const handleEdit = (index) => {
    setEditIndex(index);
    formik.setValues(users[index]);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    saveToLocalStorage(updatedUsers);
  };

  return (
    <div>
      <h2>User Form (Formik + Yup)</h2>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <input type="text" name="name" placeholder="Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
          {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
        </div>

        <div>
          <input type="text" name="age" placeholder="Age" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.age} />
          {formik.touched.age && formik.errors.age && <div>{formik.errors.age}</div>}
        </div>

        <div>
          <input type="email" name="email" placeholder="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
          {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
        </div>

        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
      </form>

      <h3>Saved Users</h3>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} | {user.age} | {user.email}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserForm;
