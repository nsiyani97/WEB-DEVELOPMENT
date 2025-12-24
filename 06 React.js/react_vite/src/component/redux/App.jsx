import React from "react";
import Counter from "./components/Counter";

/*
  App component:
  - Simple container for our Counter component.
  - Could add more components connected to the same Redux store.
*/
export default function App() {
  return (
    <div>
      <h1>React + Redux Counter</h1>
      <Counter />
    </div>
  );
}
