import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./loginform.css";
import loginImage from "../assets/logo_kopi.png";

const LoginForm = () => {
  return (
    <div className="login-container">
      <form id="login-form">
        <img src={loginImage} alt="Login" style={{ width: "20%", maxHeight: "100px" }} />
        <h2 style={{ textAlign: "center" }}>Sign in your account</h2>

        {/* Username Input */}
        <div className="input-container">
          <div className="icon-container">
            <FaUser className="icon" />
          </div>
          <input type="text" id="username" name="username" required placeholder="Username" />
        </div>

        {/* Password Input */}
        <div className="input-container">
          <div className="icon-container">
            <FaLock className="icon" />
          </div>
          <input type="password" id="password" name="password" required placeholder="Password" />
        </div>

        <button type="button" onClick={() => LoginForm()}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
