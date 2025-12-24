Topic: useRef & Controlled Forms

Purpose of useRef:

useRef provides a way to directly access DOM elements or persist values across renders without triggering re-renders.

Useful for things like:

Managing focus

Storing timers

Accessing previous values

Controlled Forms:

A controlled form is when React state is the “single source of truth” for form inputs.

Input values are tied to state, and updates happen via onChange.

Demo: Focus Input Field After Submit
import React, { useState, useRef } from "react";

function App() {
  const [name, setName] = useState(""); // Controlled input
  const inputRef = useRef(null); // Ref to access DOM input

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${name}`);
    setName(""); // Clear input
    inputRef.current.focus(); // Focus input after submit
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Controlled Form with useRef</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef} // Attach ref
          value={name} // Controlled input
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

Explanation

Controlled Input:

value={name} ensures input is controlled by React state.

onChange updates the state.

useRef for DOM Access:

inputRef = useRef(null) creates a reference to the input element.

ref={inputRef} attaches it to the input.

Focus After Submit:

After submitting, inputRef.current.focus() sets focus back to the input.

State Reset:

setName("") clears the input so the user can type a new value.

✅ Key Takeaways

useRef is perfect for direct DOM manipulations without triggering re-renders.

Controlled forms ensure React state is in sync with input values.

Combining useRef and controlled forms allows for enhanced form UX, like automatically focusing inputs or selecting text.