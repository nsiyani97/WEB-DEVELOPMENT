import React, { useState } from "react";

// Create a form with inputs for name, email, and password. Use state to control the form and display the form data when the user submits it.

function Task1Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div>
      <h2>Task 1: Basic Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div>
          <label>Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Data</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}

export default Task1Form;
