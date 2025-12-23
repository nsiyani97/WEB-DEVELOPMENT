import React, { useState } from "react";

function SimpleInput() {
  // 1. Initialize State
  const [inputValue, setInputValue] = useState("");

  // 2. Define the Event Handler
  const handleChange = (event) => {
    // Get the new text from the DOM event
    const newValue = event.target.value;

    // Update the React state
    setInputValue(newValue);
  };

  return (
    <div style={{ padding: "20px" }}>
      <label>Type here: </label>

      {/* 3. Connect State and Event to the Input */}
      <input
        type="text"
        value={inputValue} // Controlled by State
        onChange={handleChange} // Triggers State update
      />

      <p>Current State: {inputValue}</p>
    </div>
  );
}

export default SimpleInput;
