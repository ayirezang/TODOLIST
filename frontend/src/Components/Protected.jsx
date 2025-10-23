import React from "react";

const Protected = ({ children }) => {
  const isAuthenticated = document.cookie.includes("token");
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default Protected;
