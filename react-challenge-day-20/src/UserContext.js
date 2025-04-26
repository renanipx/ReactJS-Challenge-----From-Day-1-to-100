import React, { createContext, useState } from 'react';

// Create Context
export const UserContext = createContext();

// Create Provider Component
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('Guest');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
