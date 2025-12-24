import React, { useState } from "react";

function CRUD() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  function saveData(event) {
    event.preventDefault();

    if (editId) {
      const updatedData = data.map((item) =>
        item.id === editId ? { ...item, name } : item
      );
      setData(updatedData);
      setEditId(null);
    } else {
      setData([...data, { id: Date.now().toString(36), name }]);
    }
    setName("");
  }

  function deleteData(id) {
    const updateData = data.filter((item) => item.id !== id);
    setData(updateData);
  }

  function editData(id) {
    const selectedItem = data.find((item) => item.id === id);
    setName(selectedItem.name);
    setEditId(id);
  }

  return (
    <div>
      <form onSubmit={saveData}>
        <input
          placeholder="Enter your name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <button>{editId ? "Update" : "Submit"}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
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

export default CRUD;

// --------------------------------------------
// HOW THIS COMPONENT WORKS
// --------------------------------------------

// 1. Create input and state for simple form data:
//    The component uses three state variables:
//    - `name` holds the input value.
//    - `data` is an array of records.
//    - `editId` indicates the record being edited (null when adding).
//
//    Code:
//    const [name, setName] = useState("");
//    const [data, setData] = useState([]);
//    const [editId, setEditId] = useState(null);

// 2. Form binding (input ↔ state):
//    The input element is controlled by `name` and updates via `setName`.
//
//    Code:
//    <input
//      placeholder="Enter your name"
//      onChange={(event) => setName(event.target.value)}
//      value={name}
//    />
//
//    This keeps the UI and state synchronized so the latest typed value
//    is always in `name`.

// 3. Handle submission — saveData(event):
//    The form submission is handled by `saveData`. It prevents default
//    navigation and decides between "create" and "update" based on `editId`.
//
//    Code snippet (main logic):
//    function saveData(event) {
//      event.preventDefault();
//
//      if (editId) {
//        const updatedData = data.map((item) =>
//          item.id === editId ? { ...item, name } : item
//        );
//        setData(updatedData);
//        setEditId(null);
//      } else {
//        setData([...data, { id: Date.now().toString(36), name }]);
//      }
//      setName("");
//    }
//
//    Explanation:
//    - If `editId` is truthy → update the matching item using `map()`.
//      The expression `item.id === editId ? { ...item, name } : item`
//      replaces only the target record while keeping others unchanged.
//    - If `editId` is null → create a new record with a unique id:
//      `{ id: Date.now().toString(36), name }` and append it to `data`.
//    - After saving, `setName("")` clears the input; `setEditId(null)` exits edit mode.

// 4. Delete a record — deleteData(id):
//    Removing a record uses `filter()` to generate a new array excluding the id.
//
//    Code:
//    function deleteData(id) {
//      const updateData = data.filter((item) => item.id !== id);
//      setData(updateData);
//    }
//
//    Explanation:
//    - `filter()` returns all items whose `id` does not match the provided id.
//    - `setData(updateData)` replaces the state with the filtered array.

// 5. Edit a record — editData(id):
//    To edit, load the record into the form and set `editId` so `saveData` will update.
//
//    Code:
//    function editData(id) {
//      const selectedItem = data.find((item) => item.id === id);
//      setName(selectedItem.name);
//      setEditId(id);
//    }
//
//    Explanation:
//    - `find()` locates the target item by id.
//    - `setName(selectedItem.name)` populates the input with existing value.
//    - `setEditId(id)` signals that the next submit should update this item.

// 6. Render the table (Read):
//    The component displays all saved entries with `data.map()`.
//
//    Code (render loop):
//    {data.map((item) => {
//      return (
//        <tr key={item.id}>
//          <td>{item.name}</td>
//          <td>
//            <button onClick={() => deleteData(item.id)}>Delete</button>
//          </td>
//          <td>
//            <button onClick={() => editData(item.id)}>Edit</button>
//          </td>
//        </tr>
//      );
//    })}
//
//    Explanation:
//    - Each row shows `item.name` and provides Delete / Edit buttons.
//    - Buttons call `deleteData(item.id)` and `editData(item.id)` respectively.

// 7. Button label changes depending on mode:
//    The submit button text switches between "Submit" and "Update" based on `editId`.
//
//    Code:
//    <button>{editId ? "Update" : "Submit"}</button>
//
//    Explanation:
//    - This gives a visual cue to the user whether they are creating a new record
//      or updating an existing one.

// 8. Typical usage flow (quick sequence):
//    - User types a name → `name` updates.
//    - User clicks Submit → `saveData` either appends a new item to `data`
//      or updates an existing item if in edit mode.
//    - Table displays saved entries immediately because `data` changed.
//    - User clicks Edit on a row → `editData` fills the form and sets `editId`.
//    - User modifies input and clicks Update → `saveData` updates that row.
//    - User clicks Delete → `deleteData` removes the row from `data`.

// 9. Notes and small improvements you may consider:
//    - Validation: prevent empty names before saving.
//    - Confirmation before delete to avoid accidental removal.
//    - Persist data (localStorage or API) if records should survive reloads.
//    - Extract table rows into a child component for larger UIs.
//    - Use UUID library if stronger unique ids are required.

// --------------------------------------------
