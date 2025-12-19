import React from "react";
import { ThemeProvider } from "./Task_1/components/ThemeContext";
import { AuthProvider } from "./Task_2/components/AuthContext";
import ThemeToggle from "./Task_1/context/ThemeToggle";
import ThemedBox from "./Task_1/context/ThemedBox";
import AuthStatus from "./Task_2/context/AuthStatus";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div>
          <h2>Context API Demo</h2>

          <ThemeToggle />
          <ThemedBox />

          <hr />

          <AuthStatus />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
