import React, { useState } from "react";

/*
• Create a React app crud and Authentication with firebase API.
• Implement google Authentication with firebase API.
*/

import { auth, provider } from "./firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

function FirebaseAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert("User Registered"))
      .catch((err) => alert(err.message));
  };

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => alert(result.user.displayName))
      .catch((err) => alert(err.message));
  };

  const logout = () => {
    signOut(auth);
  };

  return (
    <div>
      <h2>Firebase Authentication</h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={signup}>Sign Up</button>
      <button onClick={googleLogin}>Login with Google</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default FirebaseAuth;
