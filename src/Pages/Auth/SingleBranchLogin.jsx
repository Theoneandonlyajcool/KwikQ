import { useState } from "react";
import "../../Styles/SingleBranchLogin.css";
import axios from "axios";
import { PreviousPage } from "../../Components/ReUsableFunction";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [accessCode, setAccessCode] = useState("");

  const Validation = () => {};

  const BaseURL = import.meta.env.VITE_API_BASE_URL;
  const [LoadingState, SetLoadingState] = useState(false);
  const SingleLogin = async () => {
    try {
      SetLoadingState(true);
      const res = await axios.post(
        `${BaseURL}/api/v1/branchlogin`,
        {
          managerEmail: email,
          branchCode: accessCode,
        },
        {
          headers: {
            Authorization: `Bearer `,
          },
        }
      );
      SetLoadingState(false);
      toast.success(res?.data?.message);
      localStorage.setItem("BranchID", res?.data?.branch?.id);
      localStorage.setItem("Org_ID", res?.data?.organization);
      setTimeout(() => {
        nav("/admin_dashboard");
      }, 2000);
    } catch (error) {
      SetLoadingState(false);
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const goBack = PreviousPage();
  return (
    <div className="login-container">
      <ToastContainer />
      <div className="holder_content">
        <div className="logo-container">
          <h1 className="logo-text">
            <img
              src="                 https://res.cloudinary.com/dp75oveuw/image/upload/v1760854502/Mask_group_wsdoqc.png
"
              alt=""
            />
          </h1>
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
              e.preventDefault();
              SingleLogin();
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
                style={{ backgroundColor: "#e8e8eb" }}
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
                style={{ backgroundColor: "#e8e8eb" }}
              />
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={LoadingState}
              style={{
                backgroundColor: `${LoadingState ? "gray" : ""}`,
                cursor: `${LoadingState ? "not-allowed" : "pointer"}`,
              }}
            >
              Sign in
            </button>

            <div className="help-links">
              <span className="help-text">Don't have an access code?</span>{" "}
              <a href="#" className="help-link">
                Contact your organization
              </a>
            </div>
          </form>

          <div
            className="back-link-container"
            onClick={goBack}
            style={{ cursor: "pointer" }}
          >
            Back to Selection
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
