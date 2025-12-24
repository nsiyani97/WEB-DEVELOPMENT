import { INCREMENT, DECREMENT, INCREMENT_BY } from "./actionTypes";

/*
  Action creators:
  - Functions that return action objects.
  - Using creators keeps dispatch calls cleaner and allows adding payloads easily.
*/

// Simple action (no payload) to increment
export const increment = () => {
  return { type: INCREMENT };
};

// Simple action to decrement
export const decrement = () => {
  return { type: DECREMENT };
};

// Action with payload to increment by a specific amount
export const incrementBy = (amount) => {
  return {
    type: INCREMENT_BY,
    payload: amount, // payload carries extra info needed by reducer
  };
};
