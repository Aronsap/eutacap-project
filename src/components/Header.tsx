import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { applyTheme, getTheme, type Theme } from "../lib/theme";

export default function Header() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<Theme>(() => getTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const onLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <header className="border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="mx-auto max-w-5xl flex items-center justify-between p-4">
        <Link to="/dashboard" className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          UTACAPT
        </Link>

        <nav className="flex items-center gap-2">
          <Button
            variant="ghost"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title={theme === "dark" ? "Светлая тема" : "Тёмная тема"}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </Button>

          <Button variant="outline" onClick={onLogout}>Выйти</Button>
        </nav>
      </div>
    </header>
  );
}
