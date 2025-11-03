import React, { useState } from "react";
import { Forgetpasswordbackgroud } from "./ForgetPasswordStyle";
import { CiLock } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [useremail, setUseremail] = useState({
    email: "",
  });

  const [ErrorMsg, SetErrorMsg] = useState({
    EmailError: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();

  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const validation = () => {
    const newErrors = {};

    if (useremail.email === "") {
      newErrors.EmailError = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(useremail.email)) {
      newErrors.EmailError = "Invalid Email Format";
    }

    SetErrorMsg(newErrors);
    setTimeout(() => {
      SetErrorMsg({
        EmailError: "",
      });
    }, 4000);
    return Object.keys(newErrors).length === 0;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    validation();
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${BaseUrl}/api/v1/forgot-password`,
        useremail,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("this is my res", res);
      toast.success(res?.data?.message);
      localStorage.setItem("ResetEmail", JSON.stringify(useremail.email));

      setTimeout(() => {
        nav("/verification");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Forgetpasswordbackgroud>
      {isLoading && (
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
              width: "60px",
              height: "60px",
              border: "4px solid #f3f3f3",
              borderTop: "4px solid #303bff",
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
      )}

      <div className="rapperfp">
        <div className="logofg">
          <div className="logfgrap">
            <img
              src="https://res.cloudinary.com/dmqhseusw/image/upload/v1760820927/35379ce965af990a259b5b98b745a14f6d61bddc_2_x3qlfx.png"
              className="imageFG"
              alt="imageFG"
            />
          </div>
        </div>
        <div className="Forgetpassword">
          <section className="body_fg">
            <div className="FG_text">
              <div className="FG_icon">
                <CiLock />
              </div>
              <p className="FG_1">Forgot Password</p>
              <span className="FG_2">
                Don't worry, we'll help you recover your account
              </span>
            </div>
            <div className="FG_Input">
              <label htmlFor="Email">Input email address</label>
              <input
                type="email"
                name="email"
                id="Email"
                placeholder="enter your email"
                value={useremail.email}
                onChange={(e) =>
                  setUseremail({ ...useremail, email: e.target.value })
                }
                className="FG_email"
                disabled={isLoading}
              />

              <p style={{ color: "red" }}>{ErrorMsg.EmailError}</p>

              <div className="FG_Btn1rap">
                <button
                  className="FG_Btn2"
                  onClick={handlesubmit}
                  disabled={isLoading}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {isLoading && (
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        border: "2px solid #ffffff50",
                        borderTop: "2px solid #ffffff",
                        borderRadius: "50%",
                        animation: "spin 0.6s linear infinite",
                        marginRight: "10px",
                      }}
                    />
                  )}
                  {isLoading ? "Sending..." : "Send Verification code"}
                </button>
              </div>
              <div className="FG_link">
                <a
                  href="/#/sign_in"
                  className="FG_linkrap"
                  style={{
                    pointerEvents: isLoading ? "none" : "auto",
                    opacity: isLoading ? 0.5 : 1,
                  }}
                >
                  <IoIosArrowBack />
                  <div
                    style={{
                      width: "fit-content",
                      textWrap: "nowrap",
                    }}
                  >
                    Back to log in
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
        <ToastContainer />
      </div>
    </Forgetpasswordbackgroud>
  );
};

export default ForgetPassword;
