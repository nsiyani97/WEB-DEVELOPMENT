import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(5);
  return (
    <div>
      <h1>useState</h1> <hr />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count * 2)}>Double</button>
      <button onClick={() => setCount(count / 2)}>Half</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
