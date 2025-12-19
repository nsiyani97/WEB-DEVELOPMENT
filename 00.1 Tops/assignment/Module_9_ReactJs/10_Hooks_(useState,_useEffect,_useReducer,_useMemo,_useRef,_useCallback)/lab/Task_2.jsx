import React, { useEffect, useState } from "react";

// Use the useEffect() hook to fetch and display data from an API when the component mounts.

function Task2FetchData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []); // empty dependency array → runs once on mount

  return (
    <div>
      <h2>Task 2: Fetch Data using useEffect</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task2FetchData;
