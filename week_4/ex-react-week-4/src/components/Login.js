import { useState } from "react";
import "../styles/Login.scss";
import { Link } from "react-router-dom";
import { login } from "../services/AuthService";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await login(email, password);
      console.log("Login successful:", response.data);
      if (response && response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", email);
        toast.success("Login successful!");
        window.location.href = "/";
      } else {
        if (response && response.data && response.data.error) {
          toast.error(`Login failed: ${response.data.error}`);
        }
      }

    } catch (error) {
        console.error("Login error:", error);
        if (error.response && error.response.data && error.response.data.error) {
          toast.error(`Login failed: ${error.response.data.error}`);
        } else {
          toast.error("An error occurred during login. Please try again.");
        }
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group password-group">
          <label htmlFor="password">Password:</label>
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
              onClick={togglePassword}
            ></i>
          </div>
        </div>
        <Link to="/forgot-password" className="forgot-password-link">
          Forgot Password?
        </Link>
        <button
          type="submit"
          className={
            email && password ? "login-button" : "login-button disabled"
          }
          disabled={!(email && password) || loading}
        >
            {loading && 
            <i className="fa-solid fa-circle-notch fa-spin"></i>
            }
        
          Login
        </button>

        <Link className="back-link" to="/">
          {" "}
          <i className="fa-solid fa-angles-left"></i>Back
        </Link>
      </form>
    </div>
  );
}

export default Login;
