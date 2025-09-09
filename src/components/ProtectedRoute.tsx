import type { ReactElement } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = { children: ReactElement };

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated ? children : <Navigate to="/login" />;
}


