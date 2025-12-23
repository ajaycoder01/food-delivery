import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AdminAuthContext } from "../../context/AdminAuthContext";

export default function LoginPopup({ setShowLogin }) {
  const navigate = useNavigate();
  const { setToken, setRole } = useContext(AdminAuthContext);

  const [data, setData] = useState({ email: "", password: "" });

  const onLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:4000/api/user/login",
      data
    );

    if (!res.data.success) {
      alert(res.data.message);
      return;
    }

    if (res.data.role !== "admin") {
      alert("Admin access only!");
      return;
    }

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", "admin");

    setToken(res.data.token);
    setRole("admin");

    setShowLogin(false);
    navigate("/");
  };

  return (
    <div className="login-overlay">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>Admin Login</h2>
          <IoClose onClick={() => setShowLogin(false)} className="close-icon" />
        </div>

        <form onSubmit={onLogin} className="login-popup-inputs">
          <input
            type="email"
            placeholder="Admin Email"
            required
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <button className="login-btn-submit">Login</button>
        </form>
      </div>
    </div>
  );
}
