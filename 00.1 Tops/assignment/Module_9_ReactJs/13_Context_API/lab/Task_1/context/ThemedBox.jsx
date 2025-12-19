import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemedBox() {
  const { theme } = useContext(ThemeContext);

  const style = {
    padding: "20px",
    marginTop: "10px",
    backgroundColor: theme === "light" ? "#f2f2f2" : "#333",
    color: theme === "light" ? "#000" : "#fff",
  };

  return <div style={style}>Current Theme: {theme}</div>;
}

export default ThemedBox;
