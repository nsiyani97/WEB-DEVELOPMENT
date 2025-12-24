import React, { useState } from "react";

function FormState() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  function saveData(e) {
    e.preventDefault();

    if (id !== "") {
      const updated = data.map((item, index) =>
        index === id ? { name, age, email } : item
      );
      setData(updated);
      setId("");
    } else {
      setData([...data, { name, age, email }]);
    }

    setName("");
    setAge("");
    setEmail("");
  }

  const delData = (id) => {
    setData(data.filter((_, index) => index !== id));
    setName("");
    setAge("");
    setEmail("");
  };

  const editData = (id) => {
    const item = data[id];
    setName(item.name);
    setAge(item.age);
    setEmail(item.email);
    setId(id);
  };

  return (
    <div>
      <form onSubmit={saveData}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter a Name"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="Enter an Age"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter an Email"
        />
        <button type="submit">Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => editData(index)}>Edit</button>
                <button onClick={() => delData(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FormState;

// --------------------------------------------
// HOW THIS FORM WORKS
// --------------------------------------------

// 1. Create input fields for Name, Age, and Email.

// 2. Set up state variables to store form values:
//    const [name, setName] = useState("");
//    const [age, setAge] = useState("");
//    const [email, setEmail] = useState("");

// 3. Bind each input field to its state variable:
//    value={name}  onChange={(e) => setName(e.target.value)}

// 4. Maintain a list of all submitted entries:
//    const [data, setData] = useState([]);

// 5. Handle form submission using saveData():
//    - Add a new record to the table OR
//    - Update an existing record if we are in edit mode.

// 6. Display all user entries in a table.

// 7. Use data.map() to render each row of the table.

// 8. Add Edit and Delete buttons for each row.

// 9. deleteData(id):
//    Removes the selected entry from the table.

// 10. editData(id):
//     Loads the selected row back into the input fields
//     so it can be edited.

// 11. saveData() also handles edit mode:
//     If `id` is not empty → update the selected row.
//     Otherwise → add a new record.
// --------------------------------------------
