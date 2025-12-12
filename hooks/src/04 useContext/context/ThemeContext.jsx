import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

/*
Explanation

Persisting Theme
On mount: `useEffect` reads the saved theme from `localStorage`.
On theme change: another `useEffect` updates `localStorage` automatically.

Global Access with Context
`ThemeProvider` wraps the app, giving all components access to theme and toggle function.

Seamless UX
Users see their preferred theme even after refreshing the page.
Context + `useEffect` + `localStorage` ensures persistence.

✅ Key Takeaways

Context API manages global state.
`useContext` allows functional components to consume context easily.
`localStorage` combined with `useEffect` enables persistent settings.
Useful for theme toggles, user preferences, or app settings.
*/