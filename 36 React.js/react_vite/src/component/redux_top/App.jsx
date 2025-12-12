// App.jsx
import React from "react";
import { Provider } from "react-redux";
import store from "./CounterStore";
import CounterComponent from "./CounterComponents";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>React Counter App</h1>
        <CounterComponent />
      </div>
    </Provider>
  );
}

export default App;
