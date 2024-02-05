import React, { createContext, useContext, useState, useEffect } from 'react';

const SessionContext = createContext();

export const useSession = () => {
  return useContext(SessionContext);
};

export const SessionProvider = ({ children }) => {
  const initialSessionStatus = localStorage.getItem('isSessionActive') === 'true';
  const [isSessionActive, setSessionActive] = useState(initialSessionStatus);

  const activateSession = () => {
    setSessionActive(true);
    localStorage.setItem('isSessionActive', 'true');
  };

  const deactivateSession = () => {
    setSessionActive(false);
    localStorage.removeItem('isSessionActive');
  };

  // Clear session status from local storage when the component unmounts
  useEffect(() => {
    const initialSessionStatus = localStorage.getItem('isSessionActive') === 'true';
    setSessionActive(initialSessionStatus);
  }, []); // empty dependency array to run only once during component mount
  

  return (
    <SessionContext.Provider value={{ isSessionActive, activateSession, deactivateSession }}>
      {children}
    </SessionContext.Provider>
  );
};
