import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateLoginStatus = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <AuthContext.Provider value={[ isLoggedIn, updateLoginStatus ]}>
      {children}
    </AuthContext.Provider>
  );
};