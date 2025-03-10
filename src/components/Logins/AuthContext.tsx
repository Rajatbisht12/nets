// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

// Create context with default values
const AuthContext = createContext({
  currentUser: null,
  logout: () => Promise.resolve(),
  loading: true
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logout = () => {
    return signOut(auth);
  };

  const value = {
    currentUser,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}