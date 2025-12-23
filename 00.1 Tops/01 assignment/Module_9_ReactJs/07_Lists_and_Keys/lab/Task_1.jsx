import React from "react";

// Create a React component that renders a list of items (e.g., a list of fruit names). Usethe map() function to render each item in the list.

function FruitList() {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

  return (
    <div>
      <h3>Fruit List:</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
