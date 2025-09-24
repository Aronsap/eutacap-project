import React from "react";
import { Navigate, useLocation } from "react-router-dom";

type Props = { children: React.ReactElement };

export default function ProtectedRoute({ children }: Props) {
  const user = localStorage.getItem("userEmail");
  const location = useLocation();

  return user ? children : <Navigate to="/login" replace state={{ from: location }} />;
}
