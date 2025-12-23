import { useEffect, useState } from "react";

function FakeApiFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Component mounted");

    setTimeout(() => {
      const fakeUsers = [
        { id: 1, name: "Aarya" },
        { id: 2, name: "Nikhil" },
        { id: 3, name: "Riya" },
      ];

      setUsers(fakeUsers);
      setLoading(false);
    }, 2000);
  }, []); // runs once on mount

  return (
    <div>
      <h2>Users List</h2>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FakeApiFetch;
