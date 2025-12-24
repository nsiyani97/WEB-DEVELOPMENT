Topic: Context API & useContext

Purpose of Context API:

React’s Context API allows global state management without prop drilling.

Useful for themes, user authentication, language settings, etc.

useContext hook:

Allows functional components to consume context easily.

Provides access to global state and functions provided by the context.

1. Creating a Theme Context
import React, { createContext, useState, useContext } from "react";

// 1. Create context
const ThemeContext = createContext();

// 2. Create provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom hook for easy use
export const useTheme = () => useContext(ThemeContext);

2. Consuming Context in Components
import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ padding: "10px 20px" }}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

function AppContent() {
  const { theme } = useTheme();

  const appStyle = {
    backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
    color: theme === "light" ? "#333" : "#f5f5f5",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyle}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <ThemeToggleButton />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

Explanation

ThemeContext

Holds global theme state (light or dark) and the toggle function.

ThemeProvider

Wraps the app and provides theme state to all child components.

useTheme hook

Simplifies context consumption in functional components.

ThemeToggleButton

Consumes context and toggles the theme.

AppContent

Reads theme from context and dynamically updates background and text colors.

✅ Key Takeaways

Context API eliminates prop drilling for global state.

useContext allows easy access to context in functional components.

Perfect for themes, authentication, language settings, or any global app state.

Works seamlessly with multiple nested components.