import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function AuthStatus() {
  const { user, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState("");

  return (
    <div>
      {user ? (
        <>
          <h3>Welcome, {user}!</h3>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <input placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
          <button onClick={() => login(username)}>Login</button>
        </>
      )}
    </div>
  );
}

export default AuthStatus;
