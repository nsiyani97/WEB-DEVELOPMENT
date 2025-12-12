import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../features/formSlice";

function FormShort() {
  const dispatch = useDispatch();

  // access current edit data from redux store
  const editUser = useSelector((state) => state.form.editUser);

  // local form state
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
  });

  // when user clicks edit → fill the form
  useEffect(() => {
    if (editUser) {
      setFormData(editUser);
    }
  }, [editUser]);

  // input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editUser) {
      // update existing user
      dispatch(updateUser(formData));
    } else {
      // add new user
      dispatch(addUser({ ...formData, id: Date.now() }));
    }

    // reset fields
    setFormData({ id: "", name: "", email: "" });
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>{editUser ? "Update User" : "Add User"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <button type="submit">
          {editUser ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default FormShort;
