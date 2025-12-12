- What is useContext?

`useContext` is a React Hook that allows components to access values from React Context without needing to pass props manually through multiple component levels (prop-drilling).

- useContext Definition

`useContext` lets you consume values from a Context object created by `React.createContext()`.
It helps share state, functions, themes, settings, user data, etc., across deeply nested components.

```jsx
const value = useContext(MyContext);
```

1. Creating and Using Basic Context
   You create a Context with `createContext()` and then read it using `useContext()` inside a component.

```jsx
import React, { createContext, useContext } from "react";

// 1️⃣ Create Context
const MyContext = createContext("Default Value");

function Child() {
  const value = useContext(MyContext); // 2️⃣ Consume context
  return <p>{value}</p>; // 3️⃣ Display context
}

function App() {
  return (
    <MyContext.Provider value="Hello from Context!">
      {/* 4️⃣ Provide value */}
      <Child />
    </MyContext.Provider>
  );
}

export default App;
```

2. Avoiding Prop Drilling
   `useContext` removes the need to pass props through multiple intermediate components.

```jsx
// Value travels directly to GrandChild without passing through Parent

const UserContext = createContext();

function GrandChild() {
  const user = useContext(UserContext); // direct access
  return <h3>{user}</h3>;
}

function Parent() {
  return <GrandChild />; // no props passed
}

function App() {
  return (
    <UserContext.Provider value="Nikhil">
      <Parent />
    </UserContext.Provider>
  );
}
```

3. Providing Objects in Context
   You can store objects instead of simple strings.

```jsx
const UserContext = createContext();

function Profile() {
  const user = useContext(UserContext); // {name, age}
  return (
    <p>
      {user.name} - {user.age}
    </p>
  );
}

function App() {
  return (
    <UserContext.Provider value={{ name: "Nikhil", age: 27 }}>
      <Profile />
    </UserContext.Provider>
  );
}
```

4. Using Context with Functions
   Context can store and share functions globally.

```jsx
const ThemeContext = createContext();

function Button() {
  const toggleTheme = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Theme</button>;
}

function App() {
  const switchTheme = () => console.log("Theme switched!");

  return (
    <ThemeContext.Provider value={switchTheme}>
      <Button />
    </ThemeContext.Provider>
  );
}
```

5. Multiple Contexts
   You can combine more than one context in a single component.

```jsx
const UserContext = createContext();
const ThemeContext = createContext();

function Info() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  return (
    <h3>
      {user} - {theme}
    </h3>
  );
}

function App() {
  return (
    <UserContext.Provider value="Nikhil">
      <ThemeContext.Provider value="Dark">
        <Info />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
```

6. Using Context with State (Provider Updates)
   State inside Provider updates all consumers automatically.

```jsx
const CountContext = createContext();

function Counter() {
  const { count, increase } = useContext(CountContext);
  return (
    <>
      <p>{count}</p>
      <button onClick={increase}>+</button>
    </>
  );
}

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <CountContext.Provider value={{ count, increase: () => setCount((c) => c + 1) }}>
      <Counter />
    </CountContext.Provider>
  );
}
```

7. Avoid Re-renders with Context Splitting
   Split different data into separate contexts to reduce unnecessary re-renders.

```jsx
const NameContext = createContext();
const AgeContext = createContext();
```

- Consumers only re-render for the context they use.

8. Context with Nested Components
   Consumers can be deeply nested.

```jsx
function Level3() {
  const value = useContext(MyContext);
  return <p>{value}</p>;
}

// Level1 → Level2 → Level3
```

9. Default Value Usage
   If no Provider is found, default value is used.

```jsx
const MyContext = createContext("Default");

function App() {
  return <Child />; // no provider → default value
}
```

10. Context Outside Provider (Common Error)
    Using useContext without Provider gives the default value.

```jsx
const C = createContext("Default");

// Using <C.Provider> is required for custom value
```

11. Updating Context with Reducer
    Share reducer values and dispatch via context.

```jsx
const CountContext = createContext();

function reducer(state, action) {
  if (action.type === "inc") return state + 1;
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      <Child />
    </CountContext.Provider>
  );
}
```

12. Context for Theme Switching
    Common use-case for UI themes.

```jsx
const ThemeContext = createContext();

function Page() {
  const theme = useContext(ThemeContext);
  return <div style={{ background: theme === "dark" ? "#333" : "#fff" }} />;
}
```

13. Context for Authentication
    Store logged-in user data globally.

```jsx
const AuthContext = createContext();

function Navbar() {
  const user = useContext(AuthContext);
  return <p>{user ? "Logged In" : "Guest"}</p>;
}
```

14. Context as Global Store (Redux Alternative)
    useContext + useReducer can replace Redux for small apps.

15. Custom Hook for Cleaner Context Usage
    Wrap context logic in a custom hook to simplify consumption.

```jsx
const UserContext = createContext();

export function useUser() {
  return useContext(UserContext); // custom hook
}

function Display() {
  const user = useUser(); // very clean usage
  return <p>{user}</p>;
}
```
