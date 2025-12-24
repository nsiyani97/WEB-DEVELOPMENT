import React from "react";

/*
Create a React component that renders the following JSX elements:
• A heading with the text "Welcome to JSX".
• A paragraph explaining JSX with dynamic data (use curly braces to insert
variables).
*/

function WelcomeJSX() {
  const topic = "JSX";
  const description = "JSX allows us to write HTML-like code inside JavaScript.";

  return (
    <div>
      <h1>Welcome to JSX</h1>
      <p>
        {topic} is a syntax extension for React. {description}
      </p>
    </div>
  );
}

export default WelcomeJSX;
