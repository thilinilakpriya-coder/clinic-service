import React from "react";
import heroImage from "../assets/hero-image.png";

function LoginCard() {
  return (
    <div className="login-card">
      <div className="login-left">
        <img src={heroImage} alt="Clinic" className="hero-image" />
        <h2>Your health, our priority.</h2>
      </div>
      <div className="login-right">
        <h2>Welcome Back</h2>
        <p>Please log in to your account</p>
        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">Login</button>
          <p className="register-text">
            Don’t have an account? <a href="#">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginCard;