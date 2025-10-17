import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  onRegister: () => void;
};

const RegisterPage: React.FC<Props> = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь ты можешь добавить сохранение данных
    onRegister();
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "40px", textAlign: "center" }}>
      <h2>Регистрация</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        style={{ display: "block", margin: "10px auto" }}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        style={{ display: "block", margin: "10px auto" }}
      />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegisterPage;
