## Question 1: What are lifecycle methods in React class components?

- **Lifecycle methods** in React are special functions that are automatically called at different stages of a component’s existence — from when it is created, updated, to when it is removed from the DOM.

- These methods help developers perform specific tasks like fetching data, updating the UI, or cleaning up resources at the right moment.

1. **Mounting Phase** The mounting phase is when a component is created and inserted into the DOM for the first time. During this phase, React sets up the component, initializes state, and renders the UI.

- `constructor()` – Initializes state and binds event handlers.
- `render()` – Returns JSX that defines the UI.
- `componentDidMount()` – Runs after the component has been added to the DOM; used for side effects like API calls or setting timers.

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  constructor() {
    super();
    this.state = { name: "Nikhil" };
    console.log("Constructor: Component created!");
  }

  componentDidMount() {
    console.log("ComponentDidMount: Component mounted!");
  }

  render() {
    console.log("Render: Component rendering...");
    return <h1>Welcome, {this.state.name}!</h1>;
  }
}

export default Welcome;
```

2. **Updating Phase** The updating phase occurs whenever a component’s state or props change, causing React to re-render the component to reflect the latest data.

- `shouldComponentUpdate(nextProps, nextState)` – Determines whether the component should re-render.
- `render()` – Re-renders the component to update the UI.
- `componentDidUpdate(prevProps, prevState)` – Executes after the update; often used for DOM operations or additional API calls.

```jsx
class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("ShouldComponentUpdate: Checking for update...");
    return true; // Allow update
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentDidUpdate: Count updated from", prevState.count, "to", this.state.count);
  }

  render() {
    console.log("Render: Updating component...");
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

3. **Unmounting Phase** The unmounting phase happens when a component is removed from the DOM, usually when navigating away from a page or hiding a component. This is where you perform cleanup tasks to prevent memory leaks.

- `componentWillUnmount()` – Used for cleanup, such as removing event listeners, stopping timers, or canceling API requests.

```jsx
class Timer extends Component {
  constructor() {
    super();
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("ComponentWillUnmount: Timer stopped and cleaned up!");
  }

  render() {
    return <h2>Timer: {this.state.seconds}s</h2>;
  }
}

export default Timer;
```

**Mounting**: Component is created and added to the DOM.
**Updating**: Component is re-rendered when state or props change.
**Unmounting**: Component is removed and cleaned up.

- These lifecycle methods help React developers manage data flow, side effects, and performance efficiently.

---

## Question 2: Explain componentDidMount(), componentDidUpdate(), and componentWillUnmount().

1. **componentDidMount()** `componentDidMount()` is invoked immediately after a component is mounted (inserted into the DOM). It is called only once in the lifecycle of a component.

- Used for initializing processes that require the component to be present in the DOM.
- Commonly used for API calls, event listener setup, or timers.
- It’s the ideal place to perform side effects or data fetching after the initial render.

2. **componentDidUpdate(prevProps, prevState)** `componentDidUpdate()` is called immediately after an update occurs — that is, after the component’s state or props change and the component re-renders.

- Used to perform actions after the component updates, such as updating the DOM or making network requests based on changed data.
- Can compare previous and current props or state using the parameters prevProps and prevState to control when certain actions run.
- Should be used carefully to avoid infinite update loops (by checking for changes before setting state).

3. **componentWillUnmount()** `componentWillUnmount()` is invoked just before a component is unmounted and destroyed (removed from the DOM).

- Used to perform cleanup operations to prevent memory leaks.
- Commonly used to clear timers, remove event listeners, or cancel API requests.
- It ensures that when a component is no longer needed, all background tasks related to it are properly terminated.

---
