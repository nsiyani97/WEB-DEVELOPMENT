import React from "react";

function StateDeclarativeVsImperative() {
    return (
        <div>
            <h1>State in React - Declarative vs. Imperative Programming</h1>
            <div style={{ textAlign: "left", padding: "20px" }}>
                <h3>Imperative Programming</h3>
                <p>
                    You tell the computer <strong>HOW</strong> to do something, step by step.
                </p>
                <p>Example (UI): Manually selecting an element and changing its style.</p>
                <pre>
                    {`
    document.getElementById("btn").style.backgroundColor = "red";
          `}
                </pre>

                <h3>Declarative Programming</h3>
                <p>
                    You tell the computer <strong>WHAT</strong> you want to achieve.
                </p>
                <p>
                    Example (React): You define the UI state based on data, and React handles the updates.
                </p>
                <pre>
                    {`
    // React Component
    function Button() {
      const [isRed, setIsRed] = useState(false);
      return (
        <button 
          style={{ backgroundColor: isRed ? "red" : "white" }}
          onClick={() => setIsRed(true)}
        >
          Click me
        </button>
      );
    }
          `}
                </pre>
                <p>
                    React is declarative. We simply describe the UI for a given state, and React updates the DOM to match that state.
                </p>
            </div>
        </div>
    );
}

export default StateDeclarativeVsImperative;
