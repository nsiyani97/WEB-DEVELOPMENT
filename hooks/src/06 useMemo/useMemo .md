- What is useMemo?

`useMemo` is a React Hook that memoizes (remembers) the result of a function so it doesn't recompute on every render unless its dependencies change.

- useMemo Definition

`useMemo` prevents expensive calculations from running on every render.
It returns a cached value and only recomputes when one of the dependencies changes.

```jsx
const memoizedValue = useMemo(() => {
  return computeValue();
}, [dependency]);
```

1. Basic useMemo for Expensive Calculation
   Use it to avoid recalculating heavy computations on every render.

```jsx
import React, { useMemo, useState } from "react";

function App() {
const [count, setCount] = useState(0);

const expensiveValue = useMemo(() => {
console.log("Calculating...");
return count \* 10; // pretend this is expensive
}, [count]); // recalculates only when count changes

return (
<>

<p>{expensiveValue}</p>
<button onClick={() => setCount(count + 1)}>Increase</button>
</>
);
}
```

2. Memoizing Derived State
   Use useMemo when deriving state from other state variables.

```jsx
const doubled = useMemo(() => count \* 2, [count]);
// avoids computing on every render
```

3. Prevent Re-render of Child Components
   useMemo can store stable values that prevent unnecessary re-renders.

```jsx
const data = useMemo(() => ({ count }), [count]);
// ensures "data" is not recreated unless count changes
```

4. useMemo With Objects
   Without useMemo, objects are recreated on every render.

```jsx
const options = useMemo(() => ({ theme: "dark" }), []);
// stays stable across renders
```

5. useMemo With Arrays
   Useful when passing lists to children.

```jsx
const items = useMemo(() => [1, 2, 3], []);
// array memory reference stays same
```

6. Expensive Filtering
   Optimize heavy filtering logic.

```jsx
const filteredUsers = useMemo(() => {
  return users.filter((u) => u.age > 18); // heavy filtering
}, [users]);
```

7. Sorting With useMemo
   Sorting is costly; memoize it.

```jsx
const sortedList = useMemo(() => {
  return [...items].sort(); // sort once
}, [items]);
```

8. useMemo With API Results
   Memoize values derived from API responses.

```jsx
const total = useMemo(() => {
  return data.reduce((sum, item) => sum + item.price, 0);
}, [data]);
```

9. useMemo to Avoid Infinite Loops
   Memoized objects prevent re-renders when used inside useEffect.

```jsx
const memoObj = useMemo(() => ({ id }), [id]);

useEffect(() => {
  // runs only when id changes
}, [memoObj]);
```

10. Memoizing Functions (Not Recommended → useCallback Preferable)
    useMemo can return a function, but useCallback is cleaner.

```jsx
const memoFunc = useMemo(() => () => console.log("Hi"), []);
```

11. Avoiding Re-render on Heavy Components
    Memoize computed props passed to React.memo child.

```jsx
const computed = useMemo(() => heavyCompute(value), [value]);

return <Child data={computed} />;
```

12. Memoizing Multiple Values
    You can memoize an object with multiple computed properties.

```jsx
const result = useMemo(
  () => ({
    sum: a + b,
    diff: a - b,
  }),
  [a, b]
);
```

13. useMemo With Dependencies Array
    Dependencies decide when the memoized value recalculates.

```jsx
// runs only when a or b changes
useMemo(() => a + b, [a, b]);
```

14. Using useMemo for Component-Level Caching
    Cache values for charts, tables, graphs, or reports.

```jsx
const chartData = useMemo(() => processData(rawData), [rawData]);
```

15. Avoiding Expensive JSX Re-renders
    Memoize JSX output when it doesn't change.

```jsx
const memoUI = useMemo(() => {
  return <h2>Heavy UI Layout</h2>;
}, []);
```
