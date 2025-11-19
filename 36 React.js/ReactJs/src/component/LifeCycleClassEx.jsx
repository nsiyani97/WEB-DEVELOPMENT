import React, { Component } from "react";

class LifeCycleClassEx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: this.props.myname,
    };
    console.log("constructor called...");
  }
  componentDidMount() {
    console.log("componentDidMount called..");
    setTimeout(() => {
      this.setState({
        name: "ABCD",
      });
    }, 3000);
  }
  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps called..");
    console.log("props");
    console.log(props);
    console.log("state");
    console.log(state);
    return null
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate called');
    return true
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('getSnapshotBeforeUpdate called');
    console.log('Previous state');
    console.log(prevState);
    return null   
  }
  componentDidUpdate(){
    console.log('FInally component updated...');    
  }
  render() {
    console.log("render called..");
    return (
      <div>
        <h3>Lifecyle</h3>
        <h4>Name is -- {this.state.name}</h4>
        <h4>Count is -- {this.state.count}</h4>
      </div>
    );
  }
}
export default LifeCycleClassEx;