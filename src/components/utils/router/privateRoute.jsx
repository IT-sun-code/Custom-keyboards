import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  if (currentUser) {
    return children;
  }
  return <Navigate to="/" />;
};

export default PrivateRoute;
