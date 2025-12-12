- What is ReactJS?
  ReactJS is a JavaScript library for building fast, interactive user interfaces using a component-based architecture.

- Difference Between DOM & Virtual DOM
  DOM - The actual structure of the webpage in the browser.
  Virtual DOM - A lightweight JS copy of the DOM used by React to update only changed elements, improving performance.

- SPA vs Traditional Web App
  SPA (Single Page Application) - Loads once and updates content dynamically without full page reloads.
  Traditional Web App - Reloads the entire page for every action.

- What is JSX?
  JSX is a syntax that lets you write HTML-like code inside JavaScript.
  (Full form: JavaScript XML)

- Rules for Creating Components in React
  Component name must start with a capital letter.
  Must return a single parent element.
  Must be pure (same input → same output).
  Components can be function or class-based.

- Fragment & Types of Fragment
  Fragment - A wrapper to group elements without adding extra DOM nodes.
  Types:
  `<React.Fragment>...</React.Fragment>`
  `<>...</>` (shorthand)

- CSS in React (3 Types)
  Inline: Style inside a tag using JS objects.
  Internal: Styles defined inside the component file.
  External: Styles written in separate `.css` files and imported.

- Difference Between State & Props
  State: Mutable data managed inside a component.
  Props: Immutable data passed from parent to child components.

- useState Hook - Allows a functional component to create and manage state.

- useEffect Hook - Runs side effects (API calls, subscriptions, timers) after rendering.

- Props (Destructuring & Default Props)
  Destructuring - Extracting values directly from props.
  Default Props - Providing fallback values when no props are passed.

- Constructor in React (Class Components)
  Default Constructor - No parameters; initializes basic setup.
  Parameterized Constructor - Accepts `props` and passes them to `super(props)` for initialization.
