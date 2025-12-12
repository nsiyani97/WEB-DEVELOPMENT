- What is useEffect?

`useEffect` is a React Hook that lets you perform side effects in functional components.
Side effects include things that happen outside the UI, such as API calls, timers, logging, subscriptions, and DOM operations.

- useEffect Definition

`useEffect` allows your component to run specific logic after rendering.
You control when the effect runs using a dependency array.

```jsx
useEffect(() => {
  // effect logic
}, [dependencies]);
```

If `[]` → runs once on mount
If `[state]` → runs when that state changes
If nothing → runs on every render
It can return a cleanup function

1. useEffect Without Dependencies (Runs on Every Render)
   This effect runs after every render, including the initial one.
   Useful for tasks like logging or animations that must track every state update.

```jsx
import React, { useState, useEffect } from "react";

const EveryRenderEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // runs after every render
    console.log("Component rendered. Count:", count);
  }); // no dependency array

  return <button onClick={() => setCount(count + 1)}>+</button>;
};
export default EveryRenderEffect;
```

2. useEffect with Empty Dependency Array (Runs Once: Component Mount)
   Runs only one time after the component first loads.
   Used for API calls, initial data load, or setting up listeners.

```jsx
useEffect(() => {
  // runs only once (componentDidMount)
  console.log("App loaded!");
}, []); // empty array = run only on mount
```

3. useEffect with Specific Dependencies
   Runs whenever specific state/props change.
   Good for reacting to controlled changes.

```jsx
const [name, setName] = useState("");

useEffect(() => {
  // runs only when "name" updates
  console.log("Name changed:", name);
}, [name]); // watches "name"
```

4. useEffect for API Calls
   Common pattern for fetching data from servers.
   Runs only once when the component loads.

```jsx
useEffect(() => {
  // simulate API call
  fetch("https://api.example.com/user")
    .then((res) => res.json())
    .then((data) => console.log(data));
}, []); // fetch only once
```

5. useEffect with Cleanup (Unmount Logic)
   Cleanup functions run when component unmounts.
   Used for removing listeners or stopping timers.

```jsx
useEffect(() => {
  console.log("Mounted");

  return () => {
    // cleanup when unmounted
    console.log("Unmounted");
  };
}, []);
```

6. Timer with useEffect (setTimeout)
   Run delayed logic after a specific amount of time.
   Must clear timeout to avoid memory leaks.

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    console.log("2 seconds passed");
  }, 2000);

  return () => clearTimeout(timer); // cleanup
}, []);
```

7. Repeating Timer with useEffect (setInterval)
   useEffect can create repeating intervals.
   Always clear interval in cleanup.

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Interval running");
  }, 1000);

  return () => clearInterval(interval); // stop interval on unmount
}, []);
```

8. useEffect for Form Validation
   Update validation messages reactively when user types.
   Runs whenever input value changes.

```jsx
const [email, setEmail] = useState("");
const [isValid, setIsValid] = useState(true);

useEffect(() => {
  setIsValid(email.includes("@")); // validate email
}, [email]); // run when email changes
```

9. useEffect Watching Multiple Dependencies
   Effect runs whenever ANY dependency value changes.

```jsx
useEffect(() => {
  console.log("Name or Age updated!");
}, [name, age]); // runs if either changes
```

10. useEffect for Event Listeners
    Add listeners (scroll, resize, keypress) safely.
    Cleanup removes listener.

```jsx
useEffect(() => {
  const onResize = () => console.log("Resized!");

  window.addEventListener("resize", onResize);

  return () => window.removeEventListener("resize", onResize);
}, []);
```

11. useEffect to Sync State With Local Storage
    Save data automatically when state changes.
    Useful for saving user preferences.

```jsx
useEffect(() => {
  // store in localStorage
  localStorage.setItem("theme", theme);
}, [theme]); // update when theme changes
```

12. useEffect Cleanup for API AbortController
    Cancel fetch request if component unmounts.
    Prevents race conditions.

```jsx
useEffect(() => {
  const controller = new AbortController();

  fetch("https://example.com/data", { signal: controller.signal });

  return () => controller.abort(); // cancel API request
}, []);
```

13. useEffect for Derived State (Side Computations)
    Calculate something based on another state.
    Runs whenever dependency changes.

```jsx
const [count, setCount] = useState(0);
const [double, setDouble] = useState(0);

useEffect(() => {
// compute new value from count
setDouble(count \* 2);
}, [count]);
```

14. useEffect for Scroll Events
    Track scroll position or perform lazy loading.
    Always remove scroll listener.

```jsx
useEffect(() => {
  const onScroll = () => console.log(window.scrollY);

  window.addEventListener("scroll", onScroll);

  return () => window.removeEventListener("scroll", onScroll);
}, []);
```

15. useEffect to Sync React With Non-React Systems (3rd Party Libraries)
    UseEffect connects React to external JS libraries (charts, maps, modals).
    Cleanup removes old instances to avoid duplication.

```jsx
useEffect(() => {
// initialize library
const chart = new ChartJS(...);

// cleanup: destroy chart instance
return () => chart.destroy();
}, []);
```
