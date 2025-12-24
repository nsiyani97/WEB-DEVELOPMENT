import React, { useState, useEffect } from "react";

/*
Demo: Fetching Data from a Real API

We'll use the free JSONPlaceholder API (https://jsonplaceholder.typicode.com/users) to simulate a real API fetch.
*/

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create an abort controller to cancel fetch if component unmounts
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal: controller.signal });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function: abort fetch on unmount
    return () => {
      controller.abort();
    };
  }, []); // Empty array → runs once on mount

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

/*
Explanation

Fetching API:
fetch gets data from the JSONPlaceholder API.

AbortController:
Ensures that if the component unmounts before the fetch completes, the request is canceled to prevent memory leaks.

State Management:

users → stores fetched data

loading → shows loading indicator

error → shows errors if fetch fails

Cleanup Function:
The return () => controller.abort() runs on unmount, cleaning up any ongoing side effects.

✅ Key Learnings

useEffect handles API calls on component mount.

Empty dependency array → runs once (like componentDidMount).

Cleanup prevents potential memory leaks when component unmounts during async operations.

Proper error handling improves user experience.
*/
