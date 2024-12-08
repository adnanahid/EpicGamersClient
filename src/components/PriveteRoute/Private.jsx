import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>...loading</div>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/"></Navigate>;
  }
};

export default Private;
