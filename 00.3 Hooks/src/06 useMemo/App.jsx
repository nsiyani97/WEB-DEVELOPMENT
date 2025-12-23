import React, { useState, useMemo } from "react";

function App() {
  // useState allows us to create state variables in functional components
  const [count, setCount] = useState(0); // State for main counter
  const [other, setOther] = useState(0); // State for another unrelated counter

  /**
   * useMemo memoizes the result of a computation.
   * It only recalculates the value when one of its dependencies changes.
   * Here, `doubleCount` is recalculated only when `count` changes.
   */
  const doubleCount = useMemo(() => {
    console.log("Calculating doubleCount..."); // Demonstrates when the function runs
    // Simulate a heavy computation (e.g., large loop)
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result = count * 2; // Imagine this is an expensive calculation
    }
    return result;
  }, [count]); // Dependency array: only recalc if count changes

  /**
   * Another example: memoized function to calculate triple count
   * Only recalculated when `count` changes
   */
  const tripleCount = useMemo(() => {
    console.log("Calculating tripleCount...");
    return count * 3;
  }, [count]);

  return (
    <div>
      <h1>useMemo</h1> <hr />
      <h2>Main Count: {count}</h2>
      <h3>Double Count: {doubleCount}</h3>
      <h3>Triple Count: {tripleCount}</h3>

      {/* Button to increment main count */}
      <button onClick={() => setCount(count + 1)}>Increment Countx</button>

      {/* Button to increment another unrelated state */}
      <button onClick={() => setOther(other + 1)}>Increment Other</button>

      <p>Other counter: {other}</p>

      {/* Explanation */}
      <p>
        Note: Changing "Other counter" does <strong>not</strong> recalculate doubleCount or tripleCount, because they depend only on `count`.
      </p>
    </div>
  );
}

export default App;
