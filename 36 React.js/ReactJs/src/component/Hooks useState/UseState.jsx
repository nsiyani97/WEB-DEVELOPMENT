import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  function add() {
    setCount(count + 1);
  }
  function sub() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
    </div>
  );
}

export default UseState;
