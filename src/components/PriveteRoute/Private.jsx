import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation } from "react-router-dom";

const Private = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <div>...loading</div>;
  }
  if (user) {
    return children;
  }
};

export default Private;
