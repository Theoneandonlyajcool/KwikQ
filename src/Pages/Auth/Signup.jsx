import React, { useState } from "react";
import "../../Styles/SignUp.css";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const nav = useNavigate();
  const BaseUrl = import.meta.env.VITE_API_BASE_URL;

  const [inputValues, SetInputValues] = useState({
    businessName: "",
    // lastName: "",
    email: "",
    password: "",
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

    if (inputValues.buisnessName == "") {
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

  const CreateAcct = async () => {
    try {
      SetLoadingState(true);
      const res = await axios.post(`${BaseUrl}/api/v1/create`, inputValues);
      SetLoadingState(false);
      toast.success(res?.data?.message);
      localStorage.setItem("OrgEmail", JSON.stringify(inputValues.email));
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
      toast.error("validation Error");
    }
  };

  return (
    <div className="sign-up-screen-cont">
      <div className="signup-container">
        {/* Left Section - Form */}
        <div className="signup-form-section">
          <div className="signup-form-wrapper">
            <div className="brand-header">
              {/* <h1 className="brand-logo">KwikQ</h1> */}
              <img
                className="brand-logo"
                src="https://res.cloudinary.com/dmqhseusw/image/upload/v1760739526/35379ce965af990a259b5b98b745a14f6d61bddc_edhy49.png"
                alt=""
              />
              <h2 className="signup-title">Sign Up</h2>
              <p className="signup-subtitle">Let's create your account</p>
            </div>

            {/* {message && (
            <div
              className={`message ${
                message.includes("success") ? "success" : "error"
              }`}
            >
              {message}
            </div>
          )} */}

            <form onSubmit={(e) => e.preventDefault()} className="signup-form">
              <div className="form-group">
                <label htmlFor="firstName"> Business name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  // value={firstName}
                  // onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={ShowPsw ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  {ShowPsw ? (
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => SetShowPsw(!ShowPsw)}
                      // onClick={() => setShowPassword(!showPassword)}
                      aria-label="Toggle password visibility"
                    >
                      <FaEye />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => SetShowPsw(!ShowPsw)}
                      // onClick={() => setShowPassword(!showPassword)}
                      aria-label="Toggle password visibility"
                    >
                      <FaEyeSlash />
                    </button>
                  )}
                </div>
              </div>

              <button type="submit" className="signup-button">
                sign up
              </button>

              <div className="divider">
                <span>Or</span>
              </div>

              <button type="button" className="google-button">
                <svg
                  className="google-icon"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign up with google
              </button>

              <p className="signin-link">
                Already have an account? <a href="#">Sign in</a>
              </p>
            </form>
          </div>
        </div>

        {/* Right Section - Illustration */}
        <div className="signup-illustration-section">
          <div className="illustration-content">
            <div className="illustration-circle">
              <img
                src="
https://res.cloudinary.com/dp75oveuw/image/upload/v1760744406/sign-up-image_rz6rge.png"
                alt=""
                className="queue-illustration"
              />

              {/* <svg
              className="queue-illustration"
              viewBox="0 0 400 400"
              fill="none"
            >
              <path
                d="M 50 100 Q 150 80, 250 100 T 350 100"
                stroke="#2DD4BF"
                strokeWidth="40"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 50 200 Q 150 180, 250 200 T 350 200"
                stroke="#2DD4BF"
                strokeWidth="40"
                fill="none"
                strokeLinecap="round"
              />

              <circle cx="60" cy="100" r="18" fill="#FF6B6B" />
              <circle cx="140" cy="95" r="18" fill="#4ECDC4" />
              <circle cx="200" cy="100" r="18" fill="#FFD93D" />
              <circle cx="280" cy="95" r="18" fill="#95E1D3" />
              <circle cx="340" cy="100" r="18" fill="#F38181" />

              <circle cx="60" cy="200" r="18" fill="#AA96DA" />
              <circle cx="140" cy="195" r="18" fill="#FCBAD3" />
              <circle cx="200" cy="200" r="18" fill="#A8D8EA" />
              <circle cx="280" cy="195" r="18" fill="#FFD93D" />
              <circle cx="340" cy="200" r="18" fill="#6BCB77" />

              <path
                d="M 350 280 L 370 300 L 350 320"
                stroke="#2DD4BF"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 330 300 L 370 300"
                stroke="#2DD4BF"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
              />
            </svg> */}
            </div>

            <div className="illustration-text">
              <h3>The smarter way to queue anywhere, anytime.</h3>
              <p>Get in line digitally, arrive right on time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
