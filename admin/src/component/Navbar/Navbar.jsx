import React from "react";
import "./Navbar.css";
import logo from "../../assets/foodlogo.png";

export default function Navbar({ setShowLogin }) {
  const isAdminLoggedIn = localStorage.getItem("role") === "admin";

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} id="mylogo" />
        <h4>Admin Panel</h4>
      </div>

      {!isAdminLoggedIn ? (
        <button className="login-btn" onClick={() => setShowLogin(true)}>
          Admin Login
        </button>
      ) : (
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
}
