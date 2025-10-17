import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem("auth") === "1";
  });

  useEffect(() => {
    localStorage.setItem("auth", isAuthenticated ? "1" : "0");
  }, [isAuthenticated]);

  return (
    <Router>
      <Header
        isAuthenticated={isAuthenticated}
        onLogout={() => setIsAuthenticated(false)}
      />

      <Routes>
        {/* ГЛАВНАЯ — показывается сразу при заходе */}
        <Route path="/" element={<LandingPage />} />

        {/* Логин и регистрация: после успеха возвращаем на "/" */}
        <Route
          path="/login"
          element={
            isAuthenticated
              ? <Navigate to="/" replace />
              : <LoginPage onLogin={() => setIsAuthenticated(true)} />
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated
              ? <Navigate to="/" replace />
              : <RegisterPage onRegister={() => setIsAuthenticated(true)} />
          }
        />

        {/* Дэшборд остаётся доступным по прямой ссылке */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* Подстраховка: любой левый путь -> на главную */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
