import { useState } from "react";
import "../../Styles/SingleBranchLogin.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [accessCode, setAccessCode] = useState("");

  //   const handleSubmit = () => {
  //     e.preventDefault();
  //     console.log("Login submitted", { email, accessCode });
  //   };

  return (
    <div className="login-container">
      <div className="logo-container">
        <h1 className="logo-text">KwikIQ</h1>
      </div>

      <div className="login-card">
        <div className="login-header">
          <h2 className="login-title">Single-Branch Login</h2>
          <p className="login-subtitle">
            Enter your unique access code to continue
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Branch email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="accessCode" className="form-label">
              Access Code
            </label>
            <input
              id="accessCode"
              type="text"
              placeholder="Enter your access code"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Sign in
          </button>

          <div className="help-links">
            <span className="help-text">Don't have an access code?</span>{" "}
            <a href="#" className="help-link">
              Contact your organization
            </a>
          </div>
        </form>

        <div className="back-link-container">
          <a href="#" className="back-link">
            Back to Selection
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
