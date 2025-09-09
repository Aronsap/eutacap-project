import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to the Eutacap website</h1>
      <Link to="/login">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
          Go to Login
        </button>
      </Link>
    </div>
  );
}

export default Header;
