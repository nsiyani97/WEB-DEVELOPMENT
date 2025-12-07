import React, { useState } from "react";

function Events() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseover() {
    setMouseOver(true);
  }

  function handleMouseout() {
    setMouseOver(false);
  }

  return (
    <div>
      <h1>{headingText}</h1>
      <input type="text" placeholder="Enter your name" />
      <button
        onClick={handleClick}
        onMouseOver={handleMouseover}
        onMouseOut={handleMouseout}
        style={{ backgroundColor: isMouseOver ? "lightgreen" : "gray" }}
      >
        Submit
      </button>
    </div>
  );
}

export default Events;
