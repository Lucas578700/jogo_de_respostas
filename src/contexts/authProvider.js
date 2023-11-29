import React, { useState, useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from './authContext';
import { app } from "../firebase/firebaseConnection";

export function AuthProvider({ children }) {
  const [userAuth, setUserAuth] = useState(null);
  const [loading, setLoading] = useState(false);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUserCredentials) => {
      setLoading(true);
      setUserAuth(authUserCredentials);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

   async function signIn(email, password) {
    setLoading(true);
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
        setLoading(false);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

  async function logout() {
    let result = null,
      error = null;
    try {
      result = await signOut(auth);
    } catch (e) {
      error = e;
    }

    return { result, error };
  }

  return (
    <AuthContext.Provider
      value={{
        userAuth,
        signIn,
        logout,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

