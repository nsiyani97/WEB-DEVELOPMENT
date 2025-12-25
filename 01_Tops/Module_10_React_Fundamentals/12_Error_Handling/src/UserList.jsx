import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // ❌ intentionally wrong URL to simulate error
        const response = await fetch("https://wrong-api-url.com/users");

        if (!response.ok) {
          throw new Error("API failed");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // ⏳ Loading state
  if (loading) {
    return <h3>Loading...</h3>;
  }

  // ❌ Error state
  if (error) {
    return <h3 style={{ color: "red" }}>Error loading data</h3>;
  }

  // ✅ Success state
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default UserList;
