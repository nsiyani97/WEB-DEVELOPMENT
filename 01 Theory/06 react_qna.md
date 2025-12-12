# React.js Assignment

## Question 1: What is React.js? How is it different from other JavaScript frameworks and libraries?

- React, is an open-source JavaScript library for building user interfaces (UIs). It was developed and is maintained by Meta, and is widely used by developers to create interactive and dynamic web applications. It focuses on building reusable UI components.

- Unlike other frameworks such as Angular or Vue, React only handles the **view layer** (UI) of the application and uses a **virtual DOM** for efficient rendering.

1. **Type (Library vs Framework)**: React is a JavaScript library focused mainly on building the UI layer, giving developers freedom to choose other tools.

- Frameworks like Angular and Vue are full-featured frameworks that include built-in support for routing, form handling, and state management.

2. **Virtual DOM**: React uses a Virtual DOM to efficiently update only changed elements, resulting in faster performance.

- Angular works with the real DOM, which can slow down larger apps, while Vue also uses a Virtual DOM similar to React for better speed.

3. **Component-Based Architecture**: React builds UIs using independent, reusable components, improving maintainability and reusability.

- Angular and Vue also use component-based structures, but React emphasizes functional components and hooks for managing state more flexibly.

4. **Data Flow**: React uses unidirectional (one-way) data binding, meaning data flows from parent to child, making debugging simpler.

- Angular supports two-way data binding, where data changes in both directions, while Vue supports both one-way and two-way binding.

5. **JSX (JavaScript XML)**: React uses JSX, allowing HTML and JavaScript to be written together in the same file, which improves readability and integration.

- Angular uses TypeScript with templates, and Vue separates HTML, CSS, and JS in .vue single-file components.

6. **Flexibility**: React is highly flexible, letting developers choose libraries for routing (like React Router) or state management (like Redux).

- Angular provides these features built-in, while Vue offers them as official add-ons, giving a middle-ground approach.

7. **Performance**: React’s Virtual DOM and efficient diffing make it high-performing, especially in large-scale apps.

- Angular can be heavier due to its complex structure, while Vue performs similarly to React with smaller bundle sizes.

8. **Community and Ecosystem**: React has a large global community, Facebook support, and extensive third-party libraries.

- Angular, maintained by Google, also has strong support but a smaller community, while Vue is community-driven and popular among independent developers.

9. **Learning Curve**: React has a moderate learning curve — easier to start but requires understanding JSX and component states.

- Angular has a steeper learning curve due to its many built-in features, while Vue is known for being beginner-friendly and simpler to learn.

---

## Question 2: Explain the core principles of React such as the virtual DOM and component-based architecture.

1. **Virtual DOM**: React uses a Virtual DOM (Document Object Model), which is a lightweight copy of the real DOM. When the UI changes, React updates the virtual DOM first, compares it with the previous version (using a process called diffing), and then updates only the parts of the real DOM that actually changed.
   → This makes updates faster and more efficient, improving app performance.

2. **Component-Based Architecture**:
   React applications are built using components, which are small, reusable, and independent pieces of UI. Each component represents a specific part of the interface, such as a button, header, or form.
   → This promotes code reusability, easy maintenance, and modular development.

3. **Unidirectional Data Flow**: React follows a one-way data flow, meaning data moves from parent components to child components through props. This predictable flow makes it easier to understand, debug, and maintain complex applications.
   → Unlike two-way binding (as in Angular), it provides better control over data changes.

4. **Declarative UI**: React uses a declarative approach to describe the UI. Developers specify what the UI should look like for a given state, and React automatically updates the DOM when the state changes.
   → This makes the code more readable and easier to debug compared to imperative DOM manipulation.

5. **JSX (JavaScript XML)**: React uses JSX, a syntax extension that allows writing HTML-like code inside JavaScript. JSX makes it easier to visualize the UI structure and combine logic with markup in the same file.
   → It improves readability and makes component creation simpler.

6. **State Management**: Each React component can maintain its own state, which stores dynamic data that changes over time. When the state changes, React automatically re-renders that part of the UI.
   → This ensures real-time updates without manually handling DOM changes.

7. **Lifecycle Methods / Hooks**: React components have lifecycle methods (in class components) or hooks (in functional components) that let you run code at specific points — such as when a component mounts, updates, or unmounts.
   → These make it easy to manage side effects like data fetching or animations.

---

## Question 3: What are the advantages of using React.js in web development?

1. **Reusable Components**: React is built around components, which can be reused across different parts of an application.
   → This saves development time, reduces code duplication, and ensures consistent design.

2. **Virtual DOM for Performance**: React uses a Virtual DOM to efficiently update only the parts of the webpage that change.
   → This makes React apps faster and more responsive, even with complex UIs.

3. **Declarative UI**: React uses a declarative approach, meaning developers describe what the UI should look like, and React updates it automatically when data changes.
   → This makes the code easier to read, debug, and maintain.

4. **Unidirectional Data Flow**: React follows one-way data binding, where data flows from parent to child components.
   → This makes data management predictable and easier to debug compared to two-way binding.

5. **Strong Community Support**: React has a large developer community and is maintained by Meta (Facebook).
   → This ensures regular updates, rich documentation, and plenty of third-party libraries and tools.

6. **Flexibility and Ecosystem**:
   React is not a full framework, so developers can choose libraries for routing, state management, and APIs.
   → This offers greater flexibility and control over the tech stack.

7. **JSX Syntax**: React uses JSX (JavaScript XML), allowing developers to write HTML-like code inside JavaScript.
   → This makes the UI code more readable and expressive.

8. **Fast Rendering and Optimization**: React’s diffing algorithm minimizes the number of real DOM operations.
   → This ensures better rendering performance for large and dynamic applications.

9. **SEO Friendly**: React can be rendered on the server side using tools like Next.js, helping search engines crawl pages effectively.
   → This improves the SEO performance of web applications.

10. **Cross-Platform Development**: With React Native, developers can use the same React concepts to build mobile applications for iOS and Android.
    → This promotes code reusability across web and mobile platforms.

---

## Question 4: What is JSX in React.js? Why is it used?

**JSX** is a syntax extension to JavaScript and comes with the full power of JavaScript. JSX produces React “elements”. You can embed any JavaScript expression in JSX by wrapping it in curly braces. After compilation, JSX expressions become regular JavaScript objects.

- It makes code more readable and expressive.
- It allows HTML structure and JavaScript logic to exist together in one place.
- JSX is converted into JavaScript using tools like Babel before execution, improving performance and maintainability.
- It helps in creating UI components in a clear and structured way.

---

## Question 5: How is JSX different from regular JavaScript? Can you write JavaScript inside JSX?

**Difference from Regular JavaScript**: In regular JavaScript, elements are created using methods like React.createElement() or document.createElement(), while JSX provides a simpler and more readable way by using HTML-like tags directly inside the code.

**Using JavaScript Inside JSX**: JavaScript code can be embedded inside JSX by enclosing it within curly braces {}. This allows you to use variables, expressions, and function calls directly inside the JSX markup.

---

## Question 6: Discuss the importance of using curly braces {} in JSX expressions.

**Curly Braces {} in JSX**: In JSX, curly braces {} are used to embed JavaScript expressions inside HTML-like code. They allow you to insert dynamic values, variables, or logic directly within the JSX markup.

- You can write a comment in JSX by wrapping it in curly braces and using JavaScript's multi-line comment syntax. {/_ This is a comment _/}

**Dynamic Content**: Curly braces let you display values that change, such as variables or state data.

**Expression Evaluation**: They allow you to perform calculations or call functions directly inside JSX.

**Integration of Logic and UI**: Using {} helps combine JavaScript logic with UI design, making components interactive and flexible.

**Cleaner Syntax**: It avoids the need for string concatenation or separate function calls to update UI content.

---

## Question 7: What are components in React? Explain the difference between functional components and class components.

**Components in React**: Components are the building blocks of a React application. They are reusable, independent pieces of code that define how a part of the user interface (UI) should look and behave. Each component can contain its own logic, data, and styling, and can be combined to build complex UIs.

**Functional Components**: Functional components are simple JavaScript functions that return JSX. They are stateless or use hooks (like `useState`, `useEffect`) to manage state and lifecycle features.

- Easier to write and understand.
- Do not require the `class` keyword.
- Commonly used in modern React applications.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**Class Components**: Class components are ES6 classes that extend `React.Component`. They can hold state and use lifecycle methods such as `componentDidMount()` and `componentDidUpdate()`.

- Use the `class` keyword.
- Access props using `this.props`.
- Used more in older React code before hooks were introduced.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

---

## Question 8: How do you pass data to a component using props?

**Props (Properties)**: Props are read-only attributes used to pass data from a parent component to a child component in React. They make components reusable by allowing them to receive different data values each time they are used.

- In the parent component, you pass data to the child component by adding attributes to the component tag.
- In the child component, you access the data using `props` (for functional components) or `this.props` (for class components).

```jsx
// Parent Component
function App() {
  return <Greeting name="Nikhil" age={21} />;
}

// Child Component
function Greeting(props) {
  return (
    <h1>
      Hello {props.name}, you are {props.age} years old.
    </h1>
  );
}
```

- Props are immutable (cannot be changed by the child).
- Used for data communication from parent to child.
- Help in component reusability and customization.

---

## Question 9: What is the role of render() in class components?

**render() Method**: The `render()` method in a React class component is a required lifecycle method that defines what the component should display on the screen. It returns the JSX code (or `null`) that represents the UI of that component.

**Defines UI**: It specifies the structure and content of the component using JSX.
**Returns Elements**: It must return a single root element (like a `<div>` or `<section>`).
**Re-renders on Updates**: It automatically re-runs when the component’s state or props change, updating the UI accordingly.
**Pure Function Rule**: It should remain pure, meaning it does not modify state or interact with the browser directly.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

- The `render()` method returns JSX: `<h1>Hello, {this.props.name}</h1>`.
- Whenever `props.name` changes, the `render()` method is called again to update the UI.

---

## Question 10: What are props in React.js? How are props different from state?

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

## Question 12: Explain the concept of state in React and how it is used to manage component data.

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

## Question 13: Why is this.setState() used in class components, and how does it work?

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

## Question 14: How are events handled in React compared to vanilla JavaScript? Explain the concept of synthetic events.

React uses **synthetic events**, a wrapper around native events, ensuring cross-browser compatibility. Event handlers are written in camelCase, and you pass the function reference.

---

## Question 15: What are some common event handlers in React.js?

Examples:

**onClick:** `onClick={() => alert("Clicked!")}`
**onChange:** `onChange={(e) => setValue(e.target.value)}`
**onSubmit:** `onSubmit={(e) => e.preventDefault()}`

---

## Question 16: Why do you need to bind event handlers in class components?

In class components, methods don’t bind `this` automatically. Binding ensures the correct context of `this` inside the handler.

---

## Question 17: What is conditional rendering in React?

Conditional rendering displays components or elements based on certain conditions using logic like if-else or ternary operators.

---

## Question 18: Explain how if-else, ternary operators, and && are used in JSX for conditional rendering.

```jsx
if (isLoggedIn) return <Dashboard />;
return <Login />;

// Ternary
{
  isLoggedIn ? <Dashboard /> : <Login />;
}

// Logical AND
{
  isAdmin && <AdminPanel />;
}
```

---

## Question 19: How do you render a list of items in React? Why is it important to use keys when rendering lists?

Using `map()`:

```jsx
items.map((item) => <li key={item.id}>{item.name}</li>);
```

Keys help React efficiently identify changed, added, or removed elements.

---

## Question 20: What are keys in React, and what happens if you do not provide a unique key?

Keys are unique identifiers for list elements. Without keys, React may re-render incorrectly, leading to performance issues or UI bugs.

---

## Question 21: How do you handle forms in React? Explain the concept of controlled components.

Controlled components manage form data via React state:

```jsx
const [value, setValue] = useState("");
<input value={value} onChange={(e) => setValue(e.target.value)} />;
```

---

## Question 22: Difference between controlled and uncontrolled components in React.

**Controlled:** Data managed via React state.
**Uncontrolled:** Data handled by the DOM directly using `ref`.

---

## Question 23: What are lifecycle methods in React class components?

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

## Question 24: Explain componentDidMount(), componentDidUpdate(), and componentWillUnmount().

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

## Question 25: What are React hooks? How do useState() and useEffect() work?

Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes. Some common hooks include useState, useEffect, useMemo, useRef, useCallback, etc.

---

## Question 26: Why are hooks important in React?

Hooks eliminate the need for class components, simplify code reuse, and make logic easier to share.

---

## Question 27: What is useReducer?

`useReducer()` is an alternative to `useState()` for complex state logic.  
It uses a reducer function with actions:

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

---

## Question 28: What is the purpose of useCallback & useMemo Hooks?

- `useCallback()` memoizes callback functions.
- `useMemo()` memoizes computed values.

---

## Question 29: Difference between useCallback & useMemo Hooks.

- `useCallback` returns a **function**.
- `useMemo` returns a **computed value**.

---

## Question 30: What is useRef?

`useRef()` stores mutable values that persist across renders and can access DOM elements directly.

---

## Question 31: What is React Router?

React Router is a library for handling navigation in single-page applications without full page reloads.

---

## Question 32: Explain BrowserRouter, Route, Link, and Switch components.

**BrowserRouter:** Wraps the app for routing.
**Route:** Defines the path and component.
**Link:** Navigates between routes.
**Switch:** Renders only the first matching route.

---

## Question 33: What are RESTful web services?

RESTful services use HTTP methods (GET, POST, PUT, DELETE) for communication between client and server.

---

## Question 34: What is Json-Server?

`json-server` is a lightweight mock REST API that uses a JSON file as a database.

---

## Question 35: How to fetch data from Json-server in React.

Using `fetch()` or `axios()`:

```jsx
useEffect(() => {
  fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((data) => setPosts(data));
}, []);
```

---

## Question 36: What is Firebase?

Firebase is Google’s platform offering backend services like authentication, real-time databases, hosting, and cloud storage.

---

## Question 37: Importance of handling errors and loading states in APIs.

Helps maintain good UX by showing feedback while data loads or errors occur.

---

## Question 38: What is the Context API in React?

Context API allows sharing state across multiple components without prop drilling.

---

## Question 39: Explain createContext() and useContext().

- `createContext()` creates a context.
- `useContext()` accesses its value in components.

---

## Question 40: What is Redux?

Redux is a predictable state management library for React.

**Actions:** Describe what to do.
**Reducers:** Handle state changes.
**Store:** Centralized state container.

---

## Question 41: How does Recoil simplify state management compared to Redux?

Recoil provides an easier API, atom-based state pieces, and direct integration with React hooks without boilerplate reducers or actions.
