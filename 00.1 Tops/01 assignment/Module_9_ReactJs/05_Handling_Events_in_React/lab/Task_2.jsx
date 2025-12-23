import React, { useState } from "react";

// Create a form with an input field in React. Display the value of the input field dynamically as the user types in it.

function InputForm() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Type something..." value={inputValue} onChange={handleChange} />
      <p>Typed Value: {inputValue}</p>
    </div>
  );
}

export default InputForm;
