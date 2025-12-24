import React, { useState } from "react";

// Create a functional component with a counter using the useState() hook. Include buttons to increment and decrement the counter

function Task1Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Task 1: Counter using useState</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Task1Counter;
