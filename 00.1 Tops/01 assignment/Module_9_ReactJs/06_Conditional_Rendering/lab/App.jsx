import React from "react";
import LoginControl from "./Task_1";
import VotingEligibility from "./Task_2";

function App() {
  return (
    <div>
      <LoginControl />
      <VotingEligibility age={20} />
      <VotingEligibility age={16} />
    </div>
  );
}

export default App;
