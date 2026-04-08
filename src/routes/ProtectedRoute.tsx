import { Navigate } from "react-router-dom";
import { JSX } from "react/jsx-runtime";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("adminToken");

  // If token exists → allow access
  if (token) {
    return children;
  }

  // If not logged in → redirect to home
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
