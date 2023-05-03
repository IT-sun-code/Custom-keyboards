import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const childName = children.type.name;
  const { currentUser } = useAuth();
  console.log(childName);
  if (
    !currentUser ||
    (!currentUser.admin && childName === "Admin") ||
    (currentUser.admin && childName !== "Admin")
  ) {
    return <Navigate to="/" />;
  }
  if (currentUser.admin && childName === "Admin") {
    return children;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default PrivateRoute;
