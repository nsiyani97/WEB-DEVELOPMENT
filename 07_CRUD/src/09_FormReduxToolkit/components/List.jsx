import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, setEditUser } from "../features/formSlice";

function List() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.form.users);

  return (
    <>
      <h2>User List</h2>

      {users.map((u) => (
        <div key={u.id} style={{ marginBottom: "10px" }}>
          <p>
            <b>{u.name}</b> - {u.email}
          </p>

          <button onClick={() => dispatch(setEditUser(u))}>Edit</button>
          <button onClick={() => dispatch(deleteUser(u.id))}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default List;
