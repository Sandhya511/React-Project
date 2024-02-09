import React, { useState, createContext } from 'react';
import { PersonObject } from 'react-chat-engine-advanced';

export const Context = createContext({
  user: undefined,
  setUser: (u) => {},
});

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const value = { user, setUser };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
