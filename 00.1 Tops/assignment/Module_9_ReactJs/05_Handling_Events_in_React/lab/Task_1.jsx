import React, { useState } from "react";

// Create a button in a React component that, when clicked, changes the text from"Not Clicked" to "Clicked!" using event handling.

function ClickButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <button onClick={handleClick}>{clicked ? "Clicked!" : "Not Clicked"}</button>
    </div>
  );
}

export default ClickButton;
