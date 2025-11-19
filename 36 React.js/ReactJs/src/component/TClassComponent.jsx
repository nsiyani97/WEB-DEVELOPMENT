import React, { Component } from "react";

export class TClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "nikhil",
      age: 25,
      city: "Mumbai",
    };

    this.handleClick = () => {
      this.setState((prevState) => ({
        name: prevState.name === 'nikhil' ? 'niraj' : 'nikhil'
      }))
    };
  }

  render() {
    return (
      <div>
        <p>Name is {this.state.name}</p>
        <p>Age is {this.state.age}</p>
        <p>City is {this.state.city}</p>
        <button onClick={this.handleClick}>Change name!</button>
      </div>
    );
  }
}

export default TClassComponent;
