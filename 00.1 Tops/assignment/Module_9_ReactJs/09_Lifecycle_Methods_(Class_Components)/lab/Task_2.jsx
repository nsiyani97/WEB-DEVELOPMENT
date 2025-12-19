import React, { Component } from "react";

// Implement a component that logs a message to the console when it updates using componentDidUpdate(). Log another message when the component unmounts using componentWillUnmount().

class Task2LifecycleLogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Component updated: count changed to", this.state.count);
    }
  }

  componentWillUnmount() {
    console.log("Component is being unmounted");
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Task 2: Lifecycle Methods</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Task2LifecycleLogs;
