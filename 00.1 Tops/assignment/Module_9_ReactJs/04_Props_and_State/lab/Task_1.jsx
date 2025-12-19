import React from "react";

// Create a React component UserCard that accepts name, age, and location asprops and displays them in a card format.

// Functional Component: UserCard
function UserCard({ name, age, location }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "250px",
        marginBottom: "16px",
      }}
    >
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default UserCard;
