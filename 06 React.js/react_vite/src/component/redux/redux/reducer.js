import { INCREMENT, DECREMENT, INCREMENT_BY } from "./actionTypes";

/*
  Reducer:
  - A pure function that takes (state, action) and returns new state.
  - Must NOT mutate the incoming state; always return a new object.
  - Handles action types and updates the portion of state it controls.
*/

// initial state for the counter slice
const initialState = {
  count: 0,
};

// counterReducer manages count in state
export default function counterReducer(state = initialState, action) {
  // We use a switch to pick behavior based on action.type
  switch (action.type) {
    case INCREMENT:
      // Return a brand new object (do not mutate)
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case INCREMENT_BY:
      // Guard: ensure payload is a number (defensive programming)
      const n = typeof action.payload === "number" ? action.payload : 0;
      return {
        ...state,
        count: state.count + n,
      };

    default:
      // For unknown actions, always return current state unchanged
      return state;
  }
}
