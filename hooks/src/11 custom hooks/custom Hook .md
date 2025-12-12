A custom hook in React is a reusable function that uses built-in React hooks (`useState`, `useEffect`, etc.) to share logic across multiple components.

🔥 Why use Custom Hooks?

To reuse logic (e.g., form handling, API calls, timers)
Keep components clean and readable
Improve maintainability

🧩 Basic Structure

- A custom hook:
  Is just a JavaScript function
  Must start with `use`
  Can call other hooks
  Returns data, functions, or both

✅ Example: Custom Hook for Fetching Data
useFetch.js

```jsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

Using the Hook in a Component

```jsx
import useFetch from "./useFetch";

export default function Users() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

🎯 When to create a custom hook?

- Create one when:
  Multiple components use the same logic
  State + side-effects keep repeating
  You want to isolate logic (e.g., authentication, localStorage, pagination, counters)
