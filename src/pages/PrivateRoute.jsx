import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSession } from '../pages/SessionContext';

const PrivateRoute = ({ children, ...rest }) => {
  const { isSessionActive } = useSession();

  return (
    <Route
      {...rest}
      element={isSessionActive ? children : <Navigate to="/" replace />}
    />
  );
};

export default PrivateRoute;
