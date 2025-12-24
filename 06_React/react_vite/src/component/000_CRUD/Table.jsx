import React, { memo } from "react";

// Memoize the Table to prevent unnecessary re-renders
const Table = memo(({ userData, onEdit, onDelete }) => {
  console.log("Table rendered");

  return (
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
        {userData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.tel}</td>
            <td>{item.email}</td>
            <td>
              <button onClick={() => onEdit(item.id)}>Edit</button>
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default Table;
