import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {

  // Get user from localStorage
  const user = JSON.parse(
    localStorage.getItem("user")
  );



  // If user not logged in
  if (!user) {
    return <Navigate to="/" />;
  }



  // If not admin
  if (user.role !== "admin") {
    return <Navigate to="/dashboard" />;
  }



  return children;
};

export default AdminRoute;