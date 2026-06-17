import { Navigate } from "react-router-dom";

const ClientRoute = ({ children }) => {

  // Get logged-in user
  const user = JSON.parse(
    localStorage.getItem("user")
  );



  // If not logged in
  if (!user) {
    return <Navigate to="/" />;
  }



  // If not client
  if (user.role !== "client") {
    return <Navigate to="/admin" />;
  }



  return children;
};

export default ClientRoute;