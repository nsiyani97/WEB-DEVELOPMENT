import React from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes

const SecondComponent = (props) => {
  return (
    <div>
      <h4>Name is -- {props.name}</h4>
      <h4>Age is -- {props.age}</h4>
      <h4>Salary is -- {props.salary}</h4>
    </div>
  );
};

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

export default SecondComponent;
