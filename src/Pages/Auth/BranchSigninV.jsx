import { useState } from "react";
import "../../Styles/BranchSigninV.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

// Validation for email
const isEmailValid = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
};

const BranchSigninV = () => {
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const [inputs, setInputs] = useState({
    managerEmail: "",
    branchCode: "",
  });

  const [errors, setErrors] = useState({
    managerEmail: "",
    branchCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));

    let message = "";

    if (!value.trim()) {
      message = "This field is required.";
    } else if (name === "managerEmail" && !isEmailValid(value)) {
      message = "Invalid email format.";
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const allValid =
    inputs.managerEmail.trim() &&
    inputs.branchCode.trim() &&
    isEmailValid(inputs.managerEmail) &&
    !errors.managerEmail &&
    !errors.branchCode;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!allValid) {
      toast.error("Please fill all required fields correctly.");
      return;
    }
    console.log(inputs);
    try {
      const res = await axios.post(`${BaseUrl}/api/v1/branchlogin`, inputs, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res.data);
      toast.success(res?.data?.message);
      // Add navigation or token storage if needed, e.g., localStorage.setItem("token", res.data.token);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <h1 className="logo-text">KwikQ</h1>
      </div>
      <div className="login-card">
        <div className="login-header">
          <h2 className="login-title">Single-Branch Login</h2>
          <p className="login-subtitle">
            Enter your unique access code to continue
          </p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="managerEmail" className="form-label">
              Branch email
            </label>
            <input
              id="managerEmail"
              type="email"
              name="managerEmail"
              placeholder="Enter your email address"
              value={inputs.managerEmail}
              onChange={handleChange}
              className="form-input"
              style={errors.managerEmail ? { border: "1px solid red" } : {}}
              required
            />
            {errors.managerEmail && (
              <p style={{ color: "red", fontSize: "14px" }}>
                {errors.managerEmail}
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="branchCode" className="form-label">
              Access Code
            </label>
            <input
              id="branchCode"
              type="text"
              name="branchCode"
              placeholder="Enter your access code"
              value={inputs.branchCode}
              onChange={handleChange}
              className="form-input"
              style={errors.branchCode ? { border: "1px solid red" } : {}}
              required
            />
            {errors.branchCode && (
              <p style={{ color: "red", fontSize: "14px" }}>
                {errors.branchCode}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="submit-button"
            disabled={!allValid}
            style={
              !allValid
                ? { backgroundColor: "gray", cursor: "not-allowed" }
                : {}
            }
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
        <div className="back-link-container">
          <a href="/#/businessCategory2" className="back-link">
            Back to Selection
          </a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default BranchSigninV;
