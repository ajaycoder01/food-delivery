import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminAuthContext } from "../context/AdminAuthContext";

const AdminProtectedRoute = ({ children }) => {
  const { token, role } = useContext(AdminAuthContext);

  if (!token || role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AdminProtectedRoute;
