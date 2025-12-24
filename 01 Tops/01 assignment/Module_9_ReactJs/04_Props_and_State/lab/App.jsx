import React from "react";
import UserCard from "./Task_1";
import Counter from "./Task_2";

function App() {
  return (
    <div>
      <UserCard name="Nikhil" age={27} location="India" />
      <UserCard name="Alice" age={30} location="USA" />
      {/* output:
      ------------------------
      | Nikhil               |
      | Age: 27              |
      | Location: India      |
      ------------------------
      
      ------------------------
      | Alice                |
      | Age: 30              |
      | Location: USA        |
      ------------------------
       */}
      <Counter />
    </div>
  );
}

export default App;
