**Redux Toolkit** (RTK) is the official, recommended way to write Redux code.
It makes Redux easier, faster, and less boilerplate compared to traditional Redux.

# What is Redux Toolkit?

- Redux Toolkit is a set of tools built on top of Redux that helps you:
  Create slices of state easily
  Write reducers with less code
  Automatically generate actions
  Use Immer for mutation-like syntax
  Handle async logic with createAsyncThunk
  Configure the store with best practices by default

- It is designed to simplify common Redux tasks.

# Why Redux Toolkit Exists

- Traditional Redux required:
  Manual action types
  Manual action creators
  Immutable logic in reducers
  Complicated store setup

- This caused a lot of boilerplate and complexity.
- Redux Toolkit solves all of this.

# Key Features of Redux Toolkit

1. `createSlice()`
   Defines state + reducers + action creators in one place.

```jsx
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});
```

2. `configureStore()`
   Creates the Redux store with:
   Good defaults
   Built-in middleware (e.g. for async and debugging)

```jsx
const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
```

3. `createAsyncThunk()`
   Simplifies async actions (API calls).

```jsx
export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await fetch("/users");
  return res.json();
});
```

4. Built-in Immer
   Allows "mutating" state safely.

```jsx
increment: (state) => {
  state.value++;
};
```

- Redux Toolkit automatically converts it into immutable updates.

5. DevTools Support
   Works with Redux DevTools out of the box.
