import React from "react";
import "../../Styles/BranchLogin.css";

const BranchLogin = () => {
  return (
    <div className="login-container">
      <div className="login-logo">
        <img
          src="https://res.cloudinary.com/dp75oveuw/image/upload/v1760854502/Mask_group_wsdoqc.png"
          alt="KwikQ Logo"
          className="logo-image"
        />
      </div>

      <hr className="divider" />

      <div className="login-card">
        <h2 className="login-title">Single-Branch Login</h2>
        <p className="login-subtitle">
          Enter your unique access code to continue
        </p>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Branch email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="access">Access Code</label>
            <input
              type="text"
              id="access"
              placeholder="Enter your access code"
            />
          </div>

          <button type="submit" className="sign-in-btn">
            Sign in
          </button>
        </form>

        <p className="access-link">
          Don’t have an access code? <a href="#">Contact your organization</a>
        </p>

        <button className="back-btn">Back to Selection</button>
      </div>
    </div>
  );
};
export default BranchLogin;
