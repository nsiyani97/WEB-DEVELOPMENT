import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  function handleClick() {
    setHeading(name);
  }
  return (
    <div>
      <h1>Hello {headingText} </h1>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={handleClick}>Submit</button>
      <p>State Event</p>
    </div>
  );
}

export default App;
