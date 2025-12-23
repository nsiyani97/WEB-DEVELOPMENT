## Question 1: What are components in React? Explain the difference between functional components and class components.

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

## Question 2: How do you pass data to a component using props?

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

## Question 3: What is the role of render() in class components?

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
