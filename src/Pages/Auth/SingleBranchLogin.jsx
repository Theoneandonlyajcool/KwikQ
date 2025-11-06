import { useEffect, useState } from "react";
import "../../Styles/SingleBranchLogin.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [LoadingState, SetLoadingState] = useState(false);

  const BaseUrl = import.meta.env.VITE_API_BASE_URL;
  console.log(BaseUrl);
  const token = localStorage.getItem("User");
  console.log(token);

  const HandleJoin = async () => {
    try {
      SetLoadingState(true);
      const res = await axios.post(
        `${BaseUrl}/api/v1/branchlogin`,
        {
          managerEmail: email,
          branchCode: accessCode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}"`,
          },
        }
      );
      localStorage.setItem("BranchID", res?.data?.branch?.id);
      SetLoadingState(false);
      toast.success(res?.data?.message);
      setTimeout(() => {
        window.location.reload();
        nav("/admin_dashboard");
      }, 2000);
    } catch (error) {
      SetLoadingState(false);
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
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

        <form
          onSubmit={(e) => {
            HandleJoin();
            e.preventDefault();
          }}
          className="login-form"
        >
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Branch email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              style={{ backgroundColor: "#e8e8e8" }}
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
              style={{ backgroundColor: "#e8e8e8" }}
              onChange={(e) => setAccessCode(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={LoadingState}
            style={{
              backgroundColor: `${LoadingState ? "gray" : "black"}`,
              color: "white",
            }}
          >
            {LoadingState ? "loading....." : "sign in"}
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
