import React, { useState } from "react";

// Build a crud application using Redux-Toolkit for state management. Allow users to add, remove, delete and update.

import { useSelector, useDispatch } from "react-redux";
import { addItem, updateItem, deleteItem } from "../redux/crudSlice";

function CrudReduxToolkit() {
  const items = useSelector((state) => state.crud);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Redux Toolkit CRUD</h2>

      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter value" />
      <button
        onClick={() => {
          dispatch(addItem({ id: Date.now(), text }));
          setText("");
        }}
      >
        Add
      </button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => dispatch(updateItem({ ...item, text: "Updated" }))}>Update</button>
            <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudReduxToolkit;
