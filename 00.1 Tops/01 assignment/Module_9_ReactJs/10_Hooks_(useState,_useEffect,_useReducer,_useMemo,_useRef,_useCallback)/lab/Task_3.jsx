import React from "react";

// • Create react app with use of useSelector & useDispatch.

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store";

function Task3ReduxCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Task 3: Redux Counter</h2>
      <p>Count: {count}</p>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Task3ReduxCounter;
