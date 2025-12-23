import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    height: "100vh",
    backgroundColor: theme === "light" ? "#fff" : "#121212",
    color: theme === "light" ? "#000" : "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  return (
    <div style={styles}>
      <h1>{theme.toUpperCase()} MODE</h1>
      <ThemeToggle />
    </div>
  );
};

export default App;
