import React, { useState } from "react";

// Create a Counter component with a button that increments a count value usingReact state. Display the current count on the screen.

// Functional Component: Counter
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
