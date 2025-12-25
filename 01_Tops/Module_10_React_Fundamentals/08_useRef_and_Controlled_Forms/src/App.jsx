import { useState, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") return;

    alert(`Submitted: ${name}`);

    setName(""); // clear input
    inputRef.current.focus(); // focus input
    /*
    👀 What you will SEE now
    After clicking Submit:
    ✔ Blue border appears
    ✔ Glow effect around input
    ✔ Cursor blinking inside input
    💯 Clear visual confirmation of focus.
    */
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>useRef & Controlled Form Demo</h2>

      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} className="input" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
