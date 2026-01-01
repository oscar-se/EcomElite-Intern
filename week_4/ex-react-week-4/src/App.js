import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import UserManagement from "./pages/UserManagemet";
import "./App.scss";
import Header from "./components/Header";
import Toast from "./components/ToastContainer";
import { toast } from "react-toastify";
import Login from "./components/Login";
import { useEffect, useRef } from "react";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const hasShownToast = useRef(false);
  
  useEffect(() => {
    if (!token && !hasShownToast.current) {
      hasShownToast.current = true;
      toast.error("You must login to access this page!");
    }
  }, [token, location.pathname]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

function App() {
  return (
    <div className="app-container">
      <Header />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-management" element={
          <ProtectedRoute>
            <UserManagement />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toast />
    </div>
  );
}

export default App;
