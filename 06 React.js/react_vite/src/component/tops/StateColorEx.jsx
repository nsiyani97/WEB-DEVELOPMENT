import React from "react";
import { useState, useEffect } from "react";

function StateColorEx() {
// color is var or value, setcolor is function, usestate is statehook
  const [color, setColor] = useState("red");

// changecolor is event handler function, prevcolor is callback function with trinary
  const changeColor = () => {
    setColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red'))
  }

  return (
    <div>
      <h1 style={{color}}>Hello World!</h1>
      <button onClick={changeColor}>Click Me!</button>
      <p>Current Color is: {color}</p>
    </div>
  );
}

export default StateColorEx;
