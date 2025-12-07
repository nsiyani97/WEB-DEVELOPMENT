import React, { useState } from "react";

const Usercomponent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState([]);

  let handleAge = (e) => {
    setAge(e.target.value);
  };

  const saveData = (e) => {
    e.preventDefault();

    if (id !== "") {
      let res = data.map((item, index) => {
        if (index === id) {
          return { ...item, name, age, salary };
        }
        return item;
      });
      setData(res);
    } else {
      setData([...data, { name, age, salary }]);
    }

    setName("");
    setAge("");
    setSalary("");
    setId("");
  };

  const delData = (deleteId) => {
    let res = data.filter((_, index) => index !== deleteId);
    setData(res);
  };

  const editData = (editId) => {
    let item = data.find((_, index) => index === editId);
    setName(item.name);
    setAge(item.age);
    setSalary(item.salary);
    setId(editId);
  };

  return (
    <div>
      <h3>User Registration Form</h3>

      <form onSubmit={saveData}>
        <div>
          <label>Username</label>
          <input type="text" placeholder="Enter name" name="name" onChange={(e) => setName(e.target.value)} value={name} />
        </div>

        <div>
          <label>Age</label>
          <input type="number" placeholder="Age" name="age" onChange={handleAge} value={age} />
        </div>

        <div>
          <label>Salary</label>
          <input type="number" placeholder="Salary" name="salary" onChange={(e) => setSalary(e.target.value)} value={salary} />
        </div>

        <button type="submit">Save</button>
        <button type="reset">Cancel</button>
      </form>

      <br />

      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.salary}</td>
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
};

export default Usercomponent;

// -------------------------------------------------------------
// HOW THIS USER REGISTRATION FORM WORKS
// -------------------------------------------------------------

// 1. Declare independent state variables for each input field:
//    const [name, setName] = useState("");
//    const [age, setAge] = useState("");
//    const [salary, setSalary] = useState("");
//
//    These store the live values entered by the user.

// 2. Maintain an 'id' state to detect edit mode:
//    const [id, setId] = useState("");
//    If 'id' contains a value → user is editing a specific row.
//    If 'id' is empty → user is adding a new record.

// 3. Maintain a 'data' array to store all submitted user entries:
//    const [data, setData] = useState([]);
//    Each entry contains: { name, age, salary }.

// 4. Input fields update their state on every change:
//    <input value={name} onChange={(e) => setName(e.target.value)} />
//    <input value={age} onChange={handleAge} />
//    <input value={salary} onChange={(e) => setSalary(e.target.value)} />

// 5. saveData(e):
//    - Prevents page reload with e.preventDefault().
//    - Checks if we are in EDIT mode using 'id'.
//
//    • If id !== "" (EDIT MODE)
//         Loop through 'data' using map()
//         Replace the item whose index === id
//         Return updated record: { ...item, name, age, salary }
//
//    • Else (ADD MODE)
//         Append a new object into the array:
//         setData([...data, { name, age, salary }])
//
//    After saving, reset all fields and clear 'id'.

// 6. delData(deleteId):
//    - Removes a row permanently.
//    - Uses filter() to keep only items NOT matching the index:
//        data.filter((_, index) => index !== deleteId)
//    - Updates 'data' with the filtered list.

// 7. editData(editId):
//    - Finds the selected row using its index.
//    - Loads values back into input fields:
//        setName(item.name)
//        setAge(item.age)
//        setSalary(item.salary)
//    - Stores the current index in setId(editId)
//      This switches the form into EDIT mode.

// 8. The table displays all stored records using map():
//    data.map((item, index) => (
//      <tr>
//        <td>{item.name}</td>
//        <td>{item.age}</td>
//        <td>{item.salary}</td>
//      </tr>
//    ))
//
//    Each row also contains:
//    - Edit button → loads values for editing.
//    - Delete button → removes that entry.

// 9. The form button always says "Save":
//    Because logic (add vs update) is handled in saveData(),
//    not by the button label.

// 10. Overall Flow Summary:
//     - User enters data → submits form.
//     - Data saved to table.
//     - User can edit an existing row → fields pre-filled → update applied.
//     - User can delete any row → table refreshes.
//     - All logic is index-based, making it simple and predictable.
// -------------------------------------------------------------
