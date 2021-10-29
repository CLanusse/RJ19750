import React, { createContext, useState, useEffect } from 'react';
import { getAuth, provider } from '../firebase/config';

const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const auth = getAuth();

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const singup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const signInWithGoogle = () => {
    return auth.signInWithPopup(provider);
  };

  useEffect(() => {
    if (currentUser) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [currentUser]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    login,
    singup,
    logout,
    signInWithGoogle,
    isAuthenticated,
    currentUser,
  };

  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContext;
