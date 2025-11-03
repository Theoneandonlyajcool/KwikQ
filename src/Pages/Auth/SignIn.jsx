import React from "react";
import { Loginbackground } from "./SignInStyle";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { TbEyeFilled } from "react-icons/tb";
import { RiEyeOffFill } from "react-icons/ri";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const nav = useNavigate();
  const [loginput, setLoginput] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState({
    email: "",
    password: "",
  });

  const [eyePassword, setEyePassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginput((prev) => ({ ...prev, [name]: value }));
    if (!value.trim()) {
      setErr((prev) => ({ ...prev, [name]: "This field is required" }));
    } else {
      setErr((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    setIsLoading(true);
    let valid = true;
    const newErr = { email: "", password: "" };

    if (
      !loginput.email.trim() ||
      !loginput.email.includes("@") ||
      !loginput.email.includes(".com")
    ) {
      toast.error("Invalid email formart");
      newErr.email = "This field is required";
      valid = false;
    }
    if (!loginput.password.trim()) {
      newErr.password = "This field is required";
      valid = false;
    }
    setErr(newErr);
    return valid;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await axios.post(`${BaseUrl}/api/v1/login`, loginput, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res);
      toast.success(res?.data?.message);
      console.log(res);
      setTimeout(() => {
        nav("/Sevenday_free");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  //   console.log("this is my input", loginput);
  const toggleEye = () => {
    setEyePassword((prev) => !prev);
  };

  return (
    // <div>
    <Loginbackground>
      <section className="loginrap">
        <div className="login_context">
          <div className="loginlogo">
            <img
              src="https://res.cloudinary.com/dmqhseusw/image/upload/v1760739526/35379ce965af990a259b5b98b745a14f6d61bddc_edhy49.png"
              className="imagestyled"
              alt="kwikQlogo"
            />
          </div>

          <div className="aligment_to_logo">
            <div className="singintext">
              <p className="text1">Sign In</p>
              <span className="text2">
                Enter your credentials to access your account
              </span>
            </div>

            <form action="" className="frominfor" onSubmit={handlesubmit}>
              <label htmlFor="email"> Business Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={loginput.email}
                onChange={handleLoginChange}
                required
                className="inpuled"
              />
              {err.email && (
                <p
                  style={{
                    color: "red",
                    fontSize: "14px",
                    fontFamily: "Inter",
                  }}
                >
                  {err.email}
                </p>
              )}

              <label htmlFor="password">Password</label>
              <div className="for_eye1">
                <input
                  type={eyePassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your Password"
                  value={loginput.password}
                  onChange={handleLoginChange}
                  required
                  className="inputstyled2"
                />
                {eyePassword ? (
                  <TbEyeFilled className="EyeClosed2" onClick={toggleEye} />
                ) : (
                  <RiEyeOffFill className="EyeClosed" onClick={toggleEye} />
                )}
              </div>
              {err.password && (
                <p
                  style={{
                    color: "red",
                    fontSize: "14px",
                    fontFamily: "Inter",
                  }}
                >
                  {err.password}
                </p>
              )}

              <div className="forgetpass">
                <div className="checkbox-rpass">
                  <input type="checkbox" className="checkbox" />
                  <span>Remember password</span>
                </div>
                <div
                  className="Forgot_password"
                  onClick={() => nav("/forget_password")}
                >
                  Forgot password?
                </div>
              </div>

              {/* <div className="google_or">
                <div className="or_">
                  <span>or</span>
                </div>
                <div className="googlelink">
                  <FcGoogle className="gogole_icon" />
                  <span>Sign in with google</span>
                </div>
              </div> */}

              <button type="submit" className="btn" disabled={isLoading}>
                {isLoading ? (
                  <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(0, 0, 0, 0.5)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 9999,
                      backdropFilter: "blur(3px)",
                    }}
                  >
                    <div
                      style={{
                        width: "35%",
                        height: "40%",
                        background: "white",
                        borderRadius: "17px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "red",
                      }}
                    >
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          border: "4px solid #f3f3f3",
                          borderTop: "4px solid #1466FF",
                          borderRadius: "50%",
                          animation: "spin 0.8s linear infinite",
                          background: "white",
                        }}
                      />
                      <style>
                        {`
                      @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                      }
                    `}
                      </style>
                    </div>
                  </div>
                ) : (
                  "Sign in"
                )}
              </button>
              <div className="linksignup">
                <span>Don’t have an account?</span>{" "}
                <span className="linkssignup" onClick={() => nav("/sign_up")}>
                  Sign Up
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="imagelogin">
          <div className="holdimageandtext">
            <div className="imageholder">
              <img
                src="https://res.cloudinary.com/dmqhseusw/image/upload/v1760744630/a45208ae1e8d1ae47174c3000e4b0859ee1487f4_lqbpw1.png"
                className="imagestyled2"
                alt="image of quiet"
              />
            </div>
            <div className="text_image">
              <p>Smart waiting starts here.</p>
              <span>Your turn, right when it matters</span>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </Loginbackground>
    // </div>
  );
};

export default SignIn;
