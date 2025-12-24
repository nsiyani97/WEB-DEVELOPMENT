- What is useCallback?

`useCallback` is a React Hook that memoizes (remembers) a function so that it is not recreated on every render unless its dependencies change.

- useCallback Definition

`useCallback` returns a memoized version of a function.
It is used to prevent unnecessary re-renders, especially when passing functions as props to child components.

```jsx
const memoizedFunction = useCallback(() => {
  // function logic
}, [dependencies]);
```

1. Basic useCallback
   Memoizes a function so it does not get recreated on every render.

```jsx
import React, { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1); // updates state
  }, []); // function is created once

  return <button onClick={handleClick}>Count: {count}</button>;
}
```

2. useCallback With Dependencies
   Function only changes when dependencies change.

```jsx
const handleClick = useCallback(() => {
  console.log(value);
}, [value]); // re-created only when value updates
```

3. Passing Callback to Child Components
   Prevents child re-render when parent renders.

```jsx
const onSave = useCallback(() => {
  console.log("Saved!");
}, []);

// passed to memoized child
<MemoChild onSave={onSave} />;
```

4. useCallback With React.memo
   Combo ensures child doesn’t re-render unnecessarily.

```jsx
const Child = React.memo(({ onAdd }) => {
  console.log("Child Render");
  return <button onClick={onAdd}>Add</button>;
});
```

5. Avoid Recreating Inline Functions
   Inline functions re-render children; useCallback stabilizes them.

```jsx
const deleteItem = useCallback(() => removeItem(id), [id]);
// stable reference
```

6. useCallback With Lists (Dynamic Actions)
   Avoids creating separate functions inside .map()

```jsx
const handleSelect = useCallback((id) => {
  console.log("Selected:", id);
}, []);
```

7. useCallback for Debounced or Throttled Functions
   Wrap debounce/throttle inside useCallback to maintain stability.

```jsx
const search = useCallback(
  _.debounce((text) => console.log(text), 300),
  []
);
```

8. useCallback with API Calls
   Keeps API call function stable.

```jsx
const fetchData = useCallback(async () => {
  const res = await fetch("/api/data");
}, []);
```

9. useCallback to Memoize Dispatch Functions
   Functions updating state can be memoized.

```jsx
const increase = useCallback(() => {
  dispatch({ type: "inc" });
}, []);
```

10. Avoiding Infinite Loops in useEffect
    A non-memoized function causes effect to run endlessly.

```jsx
const stableFunc = useCallback(() => doSomething(), []);

useEffect(() => {
  stableFunc();
}, [stableFunc]); // safe
```

11. useCallback Inside Custom Hooks
    Custom hooks return memoized functions for better performance.

```jsx
function useCounter() {
  const [count, setCount] = useState(0);

  const inc = useCallback(() => setCount((c) => c + 1), []);

  return { count, inc };
}
```

12. useCallback for Complex Event Logic
    Makes event handlers stable across re-renders.

```jsx
const handleSubmit = useCallback((e) => {
  e.preventDefault();
  console.log("Submitted");
}, []);
```

13. Memoizing Functions Passed to Third-party Components
    Prevent re-renders in forms, charts, tables.

```jsx
<DataTable onRowClick={useCallback((row) => console.log(row), [])} />
```

14. Using useCallback for Functional Updates
    When state updates depend on previous state.

```jsx
const increase = useCallback(() => {
  setCount((prev) => prev + 1);
}, []);
```

15. useCallback vs useMemo
    useMemo returns value, useCallback returns function.

```jsx
comparison;
const memoizedValue = useMemo(() => expensiveCalc(), [x]);
const memoizedFn = useCallback(() => console.log("Hi"), []);
```
