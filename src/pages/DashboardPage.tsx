import React from "react";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem("isAuthenticated");
      navigate("/login");
    };


  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome to the Dashboard!</h2>
      <p>Your content will appear here.</p>

      <button
        onClick={handleLogout}
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}

        >
        Logout
        </button>
    </div>
  );
}

export default DashboardPage;
