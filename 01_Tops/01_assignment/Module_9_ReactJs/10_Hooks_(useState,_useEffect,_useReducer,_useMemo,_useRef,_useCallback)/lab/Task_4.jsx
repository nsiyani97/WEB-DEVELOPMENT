import React, { useRef, useState } from "react";

// • Create react app to avoid re-renders in react application by useRef?

function Task4UseRef() {
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  renderCount.current += 1;

  return (
    <div>
      <h2>Task 4: Avoid Re-render using useRef</h2>

      <p>State Count: {count}</p>
      <p>Component Rendered: {renderCount.current} times</p>

      <button onClick={() => setCount(count + 1)}>Increase State</button>
    </div>
  );
}

export default Task4UseRef;
