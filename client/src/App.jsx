import {
  Routes,
  Route,
} from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";

// Route Protection
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";
import ClientRoute from "./routes/ClientRoute";

function App() {
  return (
    <Routes>

      {/* Login */}
      <Route
        path="/"
        element={<Login />}
      />

      {/* CLIENT DASHBOARD */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <ClientRoute>
              <Dashboard />
            </ClientRoute>
          </ProtectedRoute>
        }
      />

      {/* ADMIN DASHBOARD */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <Admin />
            </AdminRoute>
          </ProtectedRoute>
        }
      />

      {/* USERS PAGE */}
      <Route
        path="/admin/users"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <Users />
            </AdminRoute>
          </ProtectedRoute>
        }
      />

      {/* CREATE USER PAGE */}
      <Route
        path="/admin/create-user"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <CreateUser />
            </AdminRoute>
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;