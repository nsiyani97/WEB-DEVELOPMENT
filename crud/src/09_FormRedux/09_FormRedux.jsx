import React from "react";
import { Provider } from "react-redux";
import Form from "./component/Form";
import { store } from "./redux/store";

function FormRedux() {
  return (
    <Provider store={store}>
      <h1>React Redux CRUD</h1> <hr />
      <Form></Form>
    </Provider>
  );
}

export default FormRedux;
