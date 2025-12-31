import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserManagement from "./pages/UserManagemet";
import "./App.scss";
import Header from "./components/Header";
import Toast from "./components/ToastContainer";
function App() {
  return (
    <div className="app-container">
      <Header />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-management" element={<UserManagement />} />
      </Routes>
      <Toast />
    </div>
  );
}

export default App;
