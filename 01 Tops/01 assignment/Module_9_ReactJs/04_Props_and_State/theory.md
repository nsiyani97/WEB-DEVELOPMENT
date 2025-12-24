## Question 1: What are props in React.js? How are props different from state?

**Props**: Props are read-only attributes in React used to pass data from a parent component to a child component, making components reusable and dynamic.

**State**: State is a built-in object in React used to store and manage data within a component, allowing it to change over time and trigger UI updates automatically.

**Mutability**: Props are immutable, meaning they cannot be modified by the component that receives them, while State is mutable and can be updated using setState (class components) or useState (functional components).

**Control**: Props are controlled by the parent component, whereas State is controlled and managed by the component itself.

**Purpose**: Props are used for passing data and configuration between components, while State is used to handle internal data and user interactions within a component.

**Data Flow**: Props support unidirectional data flow (from parent to child), whereas State is local to the component and not directly accessible by others.

**Usage Example**: Props are used to send static or dynamic values like text, numbers, or functions as inputs, while State is used for real-time updates such as form inputs, counters, or toggles.

**Reusability**: Components using Props are easily reusable, as they can display different data based on the props received, while State makes a component self-contained with its own behavior.

**Updating UI**: Props update the UI when parent data changes, while State updates the UI when internal data changes within the same component.

**Example Summary**: Props are like function parameters, passed from outside, while State is like variables declared inside a function, managed internally.

---

## Question 2: Explain the concept of state in React and how it is used to manage component data.

**State**: State is a built-in object in React that allows components to store and manage dynamic data that can change over time. When the state changes, the component automatically re-renders to reflect the updated data.

- State is mutable (can be changed) and is used to handle data within a component.
- In functional components, state is managed using the `useState` Hook.
- In class components, state is managed using the `this.state` object and updated with `this.setState()`.

```jsx
// Functional Component using useState
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // useState initializes state

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

- State is local to the component (cannot be accessed directly by other components).
- Changes in state trigger re-rendering of the component.
- Used for managing interactive and dynamic data, such as form inputs, counters, or UI changes.
- Helps make components responsive and data-driven.

---

## Question 3: Why is this.setState() used in class components, and how does it work?

**this.setState()**: In React class components, `this.setState()` is used to update the component’s state. It tells React that the state has changed and triggers a re-render of the component to display the updated data.

- `this.setState()` merges the new state values with the existing state.
- React then re-renders the component with the updated state data.
- It works asynchronously, meaning multiple state updates may be batched for performance.

```jsx
import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 }; // Initial state
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }); // Update state
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

- Used only in class components to modify state.
- Automatically re-renders the component after state changes.
- Should not directly modify state using this.state = ... because React will not detect the change.
- Can accept a callback function to perform actions after state updates:

```jsx
this.setState({ count: this.state.count + 1 }, () => {
  console.log("State updated:", this.state.count);
});
```

---
