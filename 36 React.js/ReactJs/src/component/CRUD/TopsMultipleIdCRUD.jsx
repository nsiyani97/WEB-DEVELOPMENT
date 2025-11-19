import React, { useState } from "react";

function CRUDmultipleVarialbes() {
  const [form, setForm] = useState({ name: "", age: "", salary: "" });
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  function saveData(event) {
    event.preventDefault();

    if (editId) {
      const updatedData = data.map((item) => (item.id === editId ? { ...item, ...form } : item));
      setData(updatedData);
      setEditId(null);
    } else {
      setData([...data, { id: Date.now().toString(36), ...form }]);
    }

    setForm({ name: "", age: "", salary: "" });
  }

  function deleteData(id) {
    const updateData = data.filter((item) => item.id !== id);
    setData(updateData);
    setForm({ name: "", age: "", salary: "" });
  }

  function editData(id) {
    const selectedItem = data.find((item) => item.id === id);
    setForm({
      name: selectedItem.name,
      age: selectedItem.age,
      salary: selectedItem.salary,
    });
    setEditId(id);
  }

  return (
    <div>
      <form onSubmit={saveData}>
        <input placeholder="Enter your name" onChange={(e) => setForm({ ...form, name: e.target.value })} value={form.name} />
        <input placeholder="Enter your age" onChange={(e) => setForm({ ...form, age: e.target.value })} value={form.age} />
        <input placeholder="Enter your slary" onChange={(e) => setForm({ ...form, salary: e.target.value })} value={form.salary} />
        <button>{editId ? "Update" : "Submit"}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.salary}</td>
                <td>
                  <button onClick={() => deleteData(item.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => editData(item.id)}>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CRUDmultipleVarialbes;

// --------------------------------------------
// HOW THIS FORM WORKS (STEP-BY-STEP)
// --------------------------------------------

// 1. Create a single state object to store multiple input fields:
//    Instead of separate states like:
//      const [name, setName] = useState("");
//      const [age, setAge] = useState("");
//    This component stores all form values inside a single `form` object:
//
//    Code:
//    const [form, setForm] = useState({ name: "", age: "", salary: "" });
//
//    This makes the form easier to manage, update, and reset.

// 2. Maintain a list of all records inside the `data` array:
//
//    Code:
//    const [data, setData] = useState([]);
//
//    Each record will have:
//    - id (unique)
//    - name
//    - age
//    - salary

// 3. Track edit mode using `editId`:
//    - If `editId` is null → Adding new record
//    - If `editId` contains an id → Updating an existing record
//
//    Code:
//    const [editId, setEditId] = useState(null);

// 4. Bind form inputs to the `form` object using computed values:
//    Each input updates only its specific key using the spread operator.
//
//    Example for updating just the name:
//    onChange={(e) => setForm({ ...form, name: e.target.value })}
//
//    This ensures other fields remain unchanged while updating one.

// 5. Handle submit with saveData():
//    The function determines whether to add or update a record:
//
//    Code:
//    function saveData(event) {
//      event.preventDefault();
//
//      if (editId) {
//        const updatedData = data.map((item) =>
//          item.id === editId ? { ...item, ...form } : item
//        );
//        setData(updatedData);
//        setEditId(null);
//      } else {
//        setData([...data, { id: Date.now().toString(36), ...form }]);
//      }
//
//      setForm({ name: "", age: "", salary: "" });
//    }
//
//    Explanation:
//    - `event.preventDefault()` stops page reload.
//    - If editing: use `map()` to replace only the matching item by merging
//      the old item with the updated form fields: `{ ...item, ...form }`.
//    - If adding: create a new entry using `{ id, ...form }`.
//    - Finally, reset the form fields.

// 6. Delete a record using deleteData(id):
//
//    Code:
//    function deleteData(id) {
//      const updateData = data.filter((item) => item.id !== id);
//      setData(updateData);
//    }
//
//    Explanation:
//    - `filter()` removes only the matching item.
//    - Updates the state with the filtered array.

// 7. Edit a record using editData(id):
//    Load the selected record’s values back into the form:
//
//    Code:
//    function editData(id) {
//      const selectedItem = data.find((item) => item.id === id);
//      setForm({
//        name: selectedItem.name,
//        age: selectedItem.age,
//        salary: selectedItem.salary,
//      });
//      setEditId(id);
//    }
//
//    Explanation:
//    - `find()` locates the target item.
//    - Its fields are placed back inside the `form` object.
//    - `editId` is set so the submit button becomes "Update".

// 8. Render all records using data.map():
//
//    Code:
//    {data.map((item) => (
//      <tr key={item.id}>
//        <td>{item.name}</td>
//        <td>{item.age}</td>
//        <td>{item.salary}</td>
//        <td><button onClick={() => deleteData(item.id)}>Delete</button></td>
//        <td><button onClick={() => editData(item.id)}>Edit</button></td>
//      </tr>
//    ))}
//
//    This dynamically displays all added rows in the table.

// 9. Submit button changes automatically based on mode:
//
//    Code:
//    <button>{editId ? "Update" : "Submit"}</button>
//
//    - When editing → shows "Update"
//    - When adding → shows "Submit"

// 10. Summary:
//     - This component handles multiple form fields using one state object.
//     - Supports full CRUD (Create, Read, Update, Delete).
//     - Uses `map()`, `filter()`, and `find()` to update, remove, and load records.
//     - The form resets after each action for clean and smooth workflow.

// --------------------------------------------
