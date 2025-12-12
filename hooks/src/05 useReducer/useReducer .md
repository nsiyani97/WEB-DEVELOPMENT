- What is useReducer?

`useReducer` is a React Hook used for managing complex state logic where the next state depends on the previous state.
It is an alternative to `useState`, especially when you have multiple state updates or advanced logic.

- useReducer Definition

`useReducer` accepts a reducer function and an initial state, and returns:

state → the current state
dispatch → a function used to send actions to the reducer

```jsx
const [state, dispatch] = useReducer(reducerFunction, initialState);
```

1. Basic Counter with useReducer
   Simple example to understand how reducer, state, and dispatch work together.

```jsx
import React, { useReducer } from "react";

// 1️⃣ Reducer function
function reducer(state, action) {
  if (action.type === "increment") return state + 1; // increase count
  return state;
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0); // 2️⃣ initial state = 0

  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Inc</button>
      {/* dispatch sends action → reducer updates state */}
    </>
  );
}

export default App;
```

2. Handling Multiple Actions
   Reducer manages different types of actions using switch.

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}
```

3. Using Objects as State
   useReducer works best when managing complex objects.

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload }; // update only name
    case "setAge":
      return { ...state, age: action.payload }; // update only age
    default:
      return state;
  }
}

const initialState = { name: "", age: 0 };
```

4. Passing Payload in Actions
   Actions can carry data through `action.payload`.

```jsx
dispatch({ type: "setName", payload: "Nikhil" });
```

5. Form Handling with useReducer
   Easy way to manage multiple input fields.

```jsx
function reducer(state, action) {
  return { ...state, [action.field]: action.value };
  // update field dynamically
}

function App() {
  const [form, dispatch] = useReducer(reducer, { name: "", email: "" });

  return (
    <>
      <input onChange={(e) => dispatch({ field: "name", value: e.target.value })} />
      {/* dispatch updates specific field */}{" "}
    </>
  );
}
```

6. Toggle Logic (Boolean State)
   Simplify toggling UI elements.

```jsx
function reducer(state) {
  return !state; // flip boolean
}

const [isOpen, toggle] = useReducer(reducer, false);
```

7. useReducer with useContext (Global State)
   Used for global state like Redux.

```jsx
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

function Child() {
  const { state, dispatch } = React.useContext(AppContext);
}
```

8. Lazy Initialization
   Initialize state only once using a function.

```jsx
function init(value) {
  return { count: value }; // computed initial state
}

const [state, dispatch] = useReducer(reducer, 5, init);
```

9. Complex State Transitions
   useReducer is ideal when next state depends on previous state.

```jsx
function reducer(state, action) {
  if (action.type === "add") {
    return { ...state, total: state.total + action.payload };
  }
}
```

10. Undo / Redo State Logic
    Store history of states using reducer.

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        past: [...state.past, state.present],
        present: action.payload,
        future: [],
      };
  }
}
```

11. Array Operations in Reducer
    Handle lists, add/remove items.

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((item) => item.id !== action.payload);
  }
}
```

12. Reducer Outside Component
    Move reducer to its own file for clean architecture.

```jsx
export function todoReducer(state, action) { ... }
```

13. Preventing Re-renders
    useReducer reduces unnecessary renders in complex forms.

14. Combining useReducer With API Calls
    Manage loading, success, error state.

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };
    case "success":
      return { loading: false, data: action.payload };
    case "error":
      return { loading: false, error: action.payload };
  }
}
```

15. Building Redux-Style Architecture
    You can create global store, dispatch, actions, and reducers.

```jsx
const store = useReducer(reducer, initialState);
// similar to Redux store
```
