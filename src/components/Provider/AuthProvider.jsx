import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "../../firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  const registerWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const allAuth = {
    user,
    setUser,
    registerWithGoogle,
  };
  return (
    <AuthContext.Provider value={allAuth}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
