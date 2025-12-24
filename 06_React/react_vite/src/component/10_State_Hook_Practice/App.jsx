import React, { useState } from "react";
import TimeExample from "./TimeExample";

function App() {
  const [count, setCount] = useState(0);
  function add() {
    setCount(count + 1);
  }
  function sub() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>useState</h1>
      <h2>{count}</h2>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <hr />
      <TimeExample></TimeExample>
    </div>
  );
}

export default App;
