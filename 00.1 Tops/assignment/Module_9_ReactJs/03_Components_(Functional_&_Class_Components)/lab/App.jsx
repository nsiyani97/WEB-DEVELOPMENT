import React from "react";
import Greeting from "./Task_1";
import WelcomeMessage from "./Task_2";

function App() {
  return (
    <div>
      <Greeting name="Nikhil" />
      <Greeting name="Alice" />
      {/* output: 
      Hello, Nikhil!
      Hello, Alice!
       */}
      <WelcomeMessage />
      {/* output: 
      Welcome to React!
       */}
    </div>
  );
}

export default App;
