import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Username"></Input>
        <Input type="password" placeholder="Password"></Input>
        {props.idRegistered && <Input type="password" placeholder="Confirm password"></Input>}
        <button type="submit">{props.idRegistered ? "Register" : "Login"}</button>
      </form>
    </div>
  );
}

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.

export default Form;
