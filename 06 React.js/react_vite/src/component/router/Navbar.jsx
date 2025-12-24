import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
        <Link to="/home">Home</Link> ||
        <Link to="/about"> About</Link> ||
        <Link to="/about/a1"> About 1</Link> ||
        <Link to="/about/a2"> About 2</Link> ||
        <Link to="/contact"> Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
