import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import AppContent from "./components/AppContent";

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

/*
1. `ThemeContext.js` (Context Provider File)

Contains the Context creation, ThemeProvider, and useTheme hook.
Manages global state (`theme`) and logic (`toggleTheme`, localStorage).
Does not render UI directly.

2. `App.js` (Main App File)

Imports the ThemeProvider from `ThemeContext.js`.
Contains UI components (`AppContent`, `ThemeToggleButton`) and renders them.
Wraps the content in `<ThemeProvider>` so all components inside can access the theme.

✅ Summary

Main entry file: `App.js` (this is the file React renders in `index.js`).
Supporting/context file: `ThemeContext.js` (provides global state to App.js).

Think of it as:
App.js → main file with UI
`ThemeContext.js` → helper file that provides state & logic

1. src/context/`ThemeContext.js`
2. src/components/ThemeToggleButton.js
3. src/components/AppContent.js
4. src/App.js

Separation of concerns :
`context/` → global state logic
`components/` → UI components

Scalable - Easy to add new themes or more context providers.

Readable & maintainable - Clear distinction between provider logic and UI.
*/
