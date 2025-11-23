import React, { useState } from "react";

function FormStateObject() {
  const [form, setForm] = useState({
    userName: "",
    userAge: "",
    userEmail: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={submitForm}>myName
      <input name="userName" value={form.userName} onChange={handleChange} />
      <input name="userAge" value={form.userAge} onChange={handleChange} />
      <input name="userEmail" value={form.userEmail} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormStateObject;

/* 
--------------------------------------------
HOW THIS FORM WORKS
--------------------------------------------

1. The component uses a single state object called "form" to hold 
   all input values (name, age, email) in one place.

2. Each input has a "name" attribute that matches a key in the state object.
   Example: <input name="age" ...> updates form.age.

3. handleChange() runs whenever an input changes:
      - It reads e.target.name → decides which field to update.
      - It updates only that one field while keeping the others the same:
        setForm({ ...form, [fieldName]: newValue })

4. submitForm() prevents the page from refreshing and logs the whole form object.

5. The form uses value={form.fieldName} so each input is always synced 
   with the state (controlled components).

--------------------------------------------
*/
