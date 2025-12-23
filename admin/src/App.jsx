import React, { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import AdminProtectedRoute from "./routes/AdminProtectedRoute";
import LoginPopup from "./component/LoginPopup/LoginPopup";
import { ToastContainer } from "react-toastify";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const url = "http://localhost:4000";

  return (
    <>
      <ToastContainer />

      <Navbar setShowLogin={setShowLogin} />

      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <div className="app-content">
        <Sidebar />

        <Routes>
          <Route
            path="/"
            element={
              <AdminProtectedRoute>
                <Add url={url} />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/list"
            element={
              <AdminProtectedRoute>
                <List url={url} />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <AdminProtectedRoute>
                <Orders url={url} />
              </AdminProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}
