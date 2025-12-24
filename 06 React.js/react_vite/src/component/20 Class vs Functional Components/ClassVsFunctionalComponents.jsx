import React from "react";

function ClassVsFunctionalComponents() {
    return (
        <div>
            <h1>Class Components vs. Functional Components</h1>
            <div style={{ textAlign: "left", padding: "20px" }}>
                <h3>Class Components</h3>
                <p>
                    - Older way of writing React components.
                    <br />
                    - Use ES6 classes extending <code>React.Component</code>.
                    <br />
                    - Have lifecycle methods (<code>componentDidMount</code>,{" "}
                    <code>componentDidUpdate</code>, etc.).
                    <br />- Use <code>this.state</code> and <code>this.setState</code>.
                </p>
                <pre>
                    {`
    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }
          `}
                </pre>

                <h3>Functional Components</h3>
                <p>
                    - Modern way of writing React components (Recommended).
                    <br />
                    - Just JavaScript functions.
                    <br />
                    - Use <strong>Hooks</strong> (<code>useState</code>,{" "}
                    <code>useEffect</code>) for state and side effects.
                    <br />- Simpler, cleaner, and easier to read/test.
                </p>
                <pre>
                    {`
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
          `}
                </pre>
            </div>
        </div>
    );
}

export default ClassVsFunctionalComponents;
