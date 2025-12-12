import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import FormShort from "./components/FormShort";
import List from "./components/List";

function FormReduxToolkit() {
  return (
    <div>
      <Provider store={store}>
        <h1>CRUD using Redux Toolkit</h1>
        <FormShort />
        <List />
      </Provider>
    </div>
  );
}

export default FormReduxToolkit;
