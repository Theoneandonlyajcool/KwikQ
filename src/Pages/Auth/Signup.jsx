import React, { useState } from "react";
import "../../Styles/SignUp.css";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const nav = useNavigate();
  const BaseUrl = import.meta.env.VITE_API_BASE_URL;
  const OrgRole = localStorage.getItem("UserRole");
  console.log(OrgRole);

  const [inputValues, SetInputValues] = useState({
    businessName: "",
    // lastName: "",
    email: "",
    password: "",
    role: OrgRole,
  });

  const [ErrorMsg, SetErrorMsg] = useState({
    NameError: "",
    EmailError: "",
    PswError: "",
  });

  const [ShowPsw, SetShowPsw] = useState(false);
  const [LoadingState, SetLoadingState] = useState(false);

  const validation = () => {
    const newErrors = {};

    if (inputValues.businessName == "") {
      newErrors.NameError = "Name is required";
    }

    if (inputValues.email === "") {
      newErrors.EmailError = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValues.email)) {
      newErrors.EmailError = "Invalid Email Format";
    }

    if (inputValues.password == "") {
      newErrors.PswError = "Password is required";
    } else if (
      inputValues.password[0] !== inputValues.password[0].toUpperCase()
    ) {
      newErrors.PswError = "Password must start with an uppercase";
    } else if (inputValues.password.length <= 2) {
      newErrors.PswError = "Password must be 8 digits long";
    }

    SetErrorMsg(newErrors);
    setTimeout(() => {
      SetErrorMsg({
        NameError: "",
        EmailError: "",
        PswError: "",
      });
    }, 4000);

    return Object.keys(newErrors).length === 0;
  };

  // const formData = new FormData();
  // formData.append();

  const CreateAcct = async () => {
    try {
      SetLoadingState(true);
      const res = await axios.post(`${BaseUrl}/api/v1/create`, inputValues);
      SetLoadingState(false);
      toast.success(res?.data?.message);
      localStorage.setItem("OrgEmail", JSON.stringify(inputValues.email));
      localStorage.setItem("OrgInfo", JSON.stringify(inputValues));
      setTimeout(() => {
        nav("/verification");
      }, 3000);
      // const tosignin = await nav("/sign_in");
    } catch (error) {
      console.log(error);
      SetLoadingState(false);
      toast.error(error?.response?.data?.message);
    }
  };

  const HandleSubmit = async (e) => {
    // e.preventDefault();
    if (validation()) {
      // toast.success("Validation was succesful");
      CreateAcct();
      // nav("/sign_in");
    } else {
      // toast.error("validation Error");
    }
  };

  return (
    <div className="signup-container">
      <ToastContainer />
      <div className="signup-form-section">
        <div className="signup-form-wrapper">
          <div className="signup-logo">
            <img
              style={{ width: "18rem", height: "5rem", objectFit: "cover" }}
              src="https://res.cloudinary.com/dp75oveuw/image/upload/v1761195059/kwikq_logo-removebg-preview_ilmsvd.png"
              alt="logo"
            />
          </div>

          <h1 className="signup-title">Sign Up</h1>
          <p className="signup-subtitle">Let's create your account</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              HandleSubmit();
            }}
            className="signup-form"
          >
            <div className="form-group">
              <label htmlFor="businessName" className="form-label">
                Business name
              </label>
              <input
                style={{ backgroundColor: "#f2f2f5" }}
                type="text"
                placeholder="Enter your name"
                className="form-input"
                value={inputValues.businessName}
                onChange={(e) =>
                  SetInputValues({
                    ...inputValues,
                    businessName: e.target.value,
                  })
                }
              />
              <p style={{ color: "red", height: ".2rem", alignSelf: "center" }}>
                {ErrorMsg.NameError}
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                style={{ backgroundColor: "#f2f2f5" }}
                placeholder="Enter your email"
                className="form-input"
                value={inputValues.email}
                onChange={(e) =>
                  SetInputValues({
                    ...inputValues,
                    email: e.target.value,
                  })
                }
              />
              <p style={{ color: "red", height: ".2rem", alignSelf: "center" }}>
                {ErrorMsg.EmailError}
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div
                className="password-input-wrapper"
                style={{ backgroundColor: "#f2f2f5" }}
              >
                <input
                  type={ShowPsw ? "password" : "text"}
                  placeholder="Create your password"
                  className="form-input"
                  value={inputValues.password}
                  onChange={(e) =>
                    SetInputValues({
                      ...inputValues,
                      password: e.target.value,
                    })
                  }
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => SetShowPsw(!ShowPsw)}
                >
                  {/* {showPassword ? (
                    <FaEyeSlash className="w-5 h-5" />
                  ) : (
                    <FaEye className="w-5 h-5" />
                  // )} */}

                  {ShowPsw ? <FaEyeSlash /> : <FaEye />}
                  {/* <FaEye /> */}
                </button>
              </div>
              <p style={{ color: "red", height: ".2rem", alignSelf: "center" }}>
                {ErrorMsg.PswError}
              </p>
            </div>

            <button
              disabled={LoadingState}
              type="submit"
              className="submit-button"
              style={{
                backgroundColor: `${LoadingState ? "gray" : "#303bff"}`,
                color: "white",
              }}
            >
              {LoadingState ? "Loading....." : "sign up"}
            </button>
          </form>

          <p className="signin-link">
            Already have an account?{" "}
            <Link to={"/sign_in"} style={{ textDecoration: "none" }}>
              Sign in
            </Link>
          </p>
        </div>
      </div>

      <div className="signup-hero-section">
        <div className="hero-content">
          <div className="hero-illustration">
            <img
              src="https://res.cloudinary.com/dp75oveuw/image/upload/v1760744406/sign-up-image_rz6rge.png"
              alt="Queue management illustration"
            />
          </div>
          <h2 className="hero-title">
            The smarter way to queue anywhere, anytime.
          </h2>
          <p className="hero-subtitle">
            Go in line digitally, arrive right on time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
