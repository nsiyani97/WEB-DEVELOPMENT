import React, { createContext, useState } from "react";

// Use the Context API to create a global user authentication system. If the user is logged in, display a welcome message; otherwise, prompt them to log in.

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}
