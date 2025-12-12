Topic: useEffect Hook

Purpose:
useEffect allows functional components to handle side effects such as data fetching, subscriptions, or manually changing the DOM. It replaces most lifecycle methods in class components like componentDidMount, componentDidUpdate, and componentWillUnmount.

1. Component Lifecycle and Side Effects

Mounting (componentDidMount): Code runs once after the component is mounted.

Updating (componentDidUpdate): Code runs when dependencies change.

Unmounting (componentWillUnmount): Cleanup code runs before the component is removed.

useEffect can cover all these lifecycle behaviors depending on how it’s used.

2. useEffect Syntax
useEffect(() => {
  // Side effect code here

  return () => {
    // Optional cleanup code here
  };
}, [dependencies]);


The first argument is a function where side effects are performed.

The return function is optional, used for cleanup (like unsubscribing or clearing timers).

Dependencies array ([]) controls when the effect runs:

[] → runs once on mount

[dep1, dep2] → runs when dep1 or dep2 change

omitted → runs after every render

3. Demo: Simulate API Fetch on Mount
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with setTimeout
    setTimeout(() => {
      const fetchedData = ["Apple", "Banana", "Orange"];
      setData(fetchedData);
      setLoading(false);
    }, 2000); // 2-second delay
  }, []); // Empty dependency array → runs once on mount

  if (loading) return <p>Loading data...</p>;

  return (
    <div>
      <h1>Fruits List</h1>
      <ul>
        {data.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


Explanation:

useEffect runs once after the component mounts.

setTimeout simulates an API call.

setData updates the state after fetching data.

Component re-renders automatically after state update.

✅ Key Takeaways

useEffect replaces class lifecycle methods.

Dependency array controls when effects run.

Always clean up effects if needed (like clearing timers or subscriptions).

Perfect for fetching API data on mount.