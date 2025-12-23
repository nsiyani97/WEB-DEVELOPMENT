import React, { Component } from "react";
import Task1FetchData from "./Task1FetchData";
import Task2LifecycleLogs from "./Task2LifecycleLogs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTask2: true,
    };
  }

  toggleComponent = () => {
    this.setState({ showTask2: !this.state.showTask2 });
  };

  render() {
    return (
      <div>
        <Task1FetchData />

        <hr />

        <button onClick={this.toggleComponent}>Toggle Task 2 Component</button>

        {this.state.showTask2 && <Task2LifecycleLogs />}
      </div>
    );
  }
}

export default App;
