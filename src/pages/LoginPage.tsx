import React, { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      return;
    } else {
      setPasswordError("");
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      return;
    }

    
    if (email === "eutacap@gmail.com" && password === "qwerty123") {
      setEmailError("");
      setPasswordError("");
      localStorage.setItem("isAuthenticated", "true");
      alert("Login successful!");
      navigate("/dashboard");
    } else {
     
      setPasswordError("Incorrect email or password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Invoice Audit Agent</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailError) setEmailError("");
          }}
          onBlur={() =>
            setEmailError(
              !email.trim()
                ? "Email is required"
                : !/^\S+@\S+\.\S+$/.test(email)
                ? "Invalid email format"
                : ""
            )
          }
        />
        {emailError && <p className="error">{emailError}</p>}

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (passwordError) setPasswordError(""); 
          }}
          onBlur={() =>
            setPasswordError(
              !password.trim()
                ? "Password is required"
                : password.length < 6
                ? "Password must be at least 6 characters"
                : ""
            )
          }
        />
        {passwordError && <p className="error">{passwordError}</p>}

       
        <button
          type="submit"
          disabled={!!emailError || !!passwordError || !email || !password}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
