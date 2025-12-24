import React from "react";

// Create a simple counter application using Redux for state management. Implement actions to increment and decrement the counter.

import { useSelector, useDispatch } from "react-redux";

function CounterRedux() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Counter</h2>
      <p>Count: {count}</p>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default CounterRedux;
