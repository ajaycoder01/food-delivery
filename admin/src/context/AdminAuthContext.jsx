import { createContext, useState } from "react";

export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );

  const [role, setRole] = useState(
    localStorage.getItem("role") || null
  );

  return (
    <AdminAuthContext.Provider value={{ token, setToken, role, setRole }}>
      {children}
    </AdminAuthContext.Provider>
  );
};
