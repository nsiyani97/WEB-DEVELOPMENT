import React from "react";
import "./greeting.css";

function Greetings() {
  const date = new Date();
  const currentTime = date.getHours();

  let greetings;

  const customStyle = {
    color: "",
  };

  if (currentTime < 12) {
    greetings = "Good Morning";
    customStyle.color = "orange";
  } else if (currentTime < 18) {
    greetings = "Good Evening";
    customStyle.color = "green";
  } else {
    greetings = "Good Night";
    customStyle.color = "blue";
  }

  return (
    <div>
      <h1 className="stylingheading" style={customStyle}>
        {greetings}
      </h1>
    </div>
  );
}

export default Greetings;
