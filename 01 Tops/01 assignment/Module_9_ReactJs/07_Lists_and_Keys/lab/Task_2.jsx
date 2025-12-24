import React from "react";

// Create a list of users where each user has a unique id. Render the user list usingReact and assign a unique key to each user.

function UserList() {
  const users = [
    { id: 101, name: "Nikhil" },
    { id: 102, name: "Alice" },
    { id: 103, name: "Bob" },
  ];

  return (
    <div>
      <h3>User List:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
