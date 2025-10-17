import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  isAuthenticated: boolean;
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<Props> = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

export default ProtectedRoute;
