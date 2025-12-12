1. What is Redux Toolkit?
   Redux Toolkit (RTK) is the official, recommended way to write Redux logic.

Think of it like: “Modern Redux made easy, fast, and clean.”

Redux Toolkit removes:
❌ long boilerplate
❌ huge switch-case reducers
❌ manual immutable updates
❌ actionTypes + action creators files
❌ complex store setup

RTK gives you:
✔ shorter code
✔ automatic immutable updates
✔ slices (reducers + actions together)
✔ built-in async handling (createAsyncThunk)
✔ easy devtools + middleware setup

🧠 Why Redux Toolkit exists?

- Because old Redux was too much code, something like:
  `actions.js`
  `actionTypes.js`
  `reducers.js`
  long switch-case
  always avoiding state mutation
  complicated store setup
  manual Thunks for async

- Developers complained: “Redux is powerful but too difficult/boilerplate-heavy.”
  So the Redux team created RTK to fix all old Redux problems.

2. Why should YOU use Redux Toolkit?

1. Less Code

```jsx
// Plain Redux reducer:
switch (action.type) {
  case "ADD":
    return { ...state, value: state.value + 1 };
}

// RTK:
add: (state) => {
  state.value++;
};
// RTK allows mutation safely, because it uses Immer internally.
```

2. Slices = actions + reducer merged

- Old Redux:
  create actionTypes
  create actions
  create reducer separately

- RTK:
  All in one file using `createSlice()`.

3. Built-in Thunk for APIs

Old Redux: install `redux-thunk` separately.
RTK: already included.

4. Better Developer Experience

- Store setup already includes:
  Redux DevTools
  Middleware
  Thunk

5. Officially Recommended

- Redux docs say: “Redux Toolkit is the standard way to write Redux logic.”
  So RTK is not optional — it's now the new Redux.

6. install RTK

```bash
npm install @reduxjs/toolkit react-redux
```

7. Folder Structure

```css
src/
  redux/
    store.js
    counterSlice.js
  App.js
  index.js
```

8. counterSlice.js

```jsx
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  // initial state
  initialState: { value: 0 },

  // reducers (actions + reducer logic together)
  reducers: {
    increment: (state) => {
      state.value++; // allowed (Immer handles immutability)
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// exporting actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// exporting reducer
export default counterSlice.reducer;
```

9. store.js

```jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

10. index.js

```jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

11. App.js

```jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/counterSlice";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20 }}>
      <h1>Redux Toolkit Counter</h1>
      <h2>{count}</h2>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
}
```
