import React from "react";
import Form from "./Form";

function Login() {
  let isLoggedIn = false;
  var userIsRegistered = true;
  return (
    <div className="container">
      {
        isLoggedIn ? <h1>Hello</h1> : <Form idRegistered={!userIsRegistered}></Form>

        // CONDITION && EXPRESSION
        // true && EXPRESSION
        // false && ~~EXPRESSION~~

      }
    </div>
  );
}

export default Login;
