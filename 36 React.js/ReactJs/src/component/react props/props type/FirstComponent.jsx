import React from "react";
import PropTypes from "prop-types";
import SecondComponent from "./SecondComponent";

function FirstComponent() {
  let name = 'nikhil';
  let age = 22;
  let salary = 1000;

  return (
    <div>
      <h1>Hi</h1>
      <SecondComponent name={name} age={age} salary={salary} />
    </div>
  );
};

// proptyle is desabled in react 19 version, you can see warming above 18 version
// ✅ Define prop types for validation
SecondComponent.propTypes = {
  name: PropTypes.string.isRequired,  // must be a string
  age: PropTypes.number.isRequired,   // must be a number
  salary: PropTypes.number            // optional, but should be a number if passed
};

// ✅ Optional: Set default values (if props are missing)
SecondComponent.defaultProps = {
  salary: 0
};

export default FirstComponent;
