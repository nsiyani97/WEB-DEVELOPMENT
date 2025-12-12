import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy } from "../redux/actions";

/*
  Counter component demonstrates:
  - Reading state from Redux store via useSelector.
  - Dispatching actions to update state via useDispatch.
  - Local component state (for the input) for UI-only concerns.
*/

export default function Counter() {
  // useSelector reads the required slice from the Redux store.
  // Here we select state.count from the reducer's state object.
  const count = useSelector((state) => state.count);

  // useDispatch gives us the dispatch function to send actions to the store
  const dispatch = useDispatch();

  // local state to hold value for "increment by" input
  const [value, setValue] = useState(1);

  return (
    <div style={{ maxWidth: 400, marginTop: 20 }}>
      {/* Display current count from Redux store */}
      <h2>Count: {count}</h2>

      {/* Dispatch a simple increment action when button clicked */}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        + Increment
      </button>

      {/* Dispatch a simple decrement action */}
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        style={{ marginLeft: 8 }}
      >
        - Decrement
      </button>

      <div style={{ marginTop: 12 }}>
        {/* Input to specify the amount to increment by */}
        <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} style={{ width: 80 }} />
        <button
          onClick={() => {
            // dispatch an action with a payload to increment by a specific number
            dispatch(incrementBy(Number(value)));
          }}
          style={{ marginLeft: 8 }}
        >
          Increment By
        </button>
      </div>
    </div>
  );
}
