import { useState } from "react";

function App() {
  // 1️⃣ Declare state
  const [count, setCount] = useState(0);

  // 2️⃣ Increment function
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  // 3️⃣ Decrement function
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        ➖ Decrement
      </button>
    </div>
  );
}

export default App;
