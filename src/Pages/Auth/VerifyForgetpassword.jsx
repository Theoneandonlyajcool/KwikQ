import React, { useRef, useState } from "react";
import {
  VerifyForgetpassworddiv,
  VerifyFGHolder,
  VFGLogoHolder,
  VerifyFGHolderRight,
} from "./VerifyForgetpasswordStyle";
import { MdOutlineVerifiedUser } from "react-icons/md";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const VerifyForgetpassword = ({ length = 6 }) => {
  const nav = useNavigate();
  const [BtnLoadingState, SetBtnLoadingState] = useState(false);

  const BaseURL = import.meta.env.VITE_API_BASE_URL;
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
  const userEmail = JSON.parse(localStorage.getItem("ResetEmail"));
  console.log(otp);

  const handleInputChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < length - 1 && value) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
        newOtp[index - 1] = "";
        setOtp(newOtp);
      }
    }
  };

  const SendOTP = async () => {
    try {
      SetBtnLoadingState(true);
      const res = await axios.post(`${BaseURL}/api/v1/reset-password-otp`, {
        email: userEmail,
        otp: otp.join(""),
      });
      toast.success(res?.data?.message);
      SetBtnLoadingState(false);
      setOtp("");
      setTimeout(() => {
      }, 2000);
      nav("/reset_password");
    } catch (error) {
      console.log(error);
      SetBtnLoadingState(false);
      toast.error(error?.message);
    }
  };

  const Validation = () => {
    if (otp.length < 6) {
      toast.error("Verification code not complete");
    } else {
      SendOTP();
    }
  };

  let timeLeft = 120; // total seconds (2 minutes)

  const countdown = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    console.log(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(countdown);
      console.log("Countdown finished!");
    }
  }, 1000);

  const handleResetOtp = async () => {
    SetBtnLoadingState(true);
    try {
      const response = await axios.post(`${BaseURL}/api/v1/resend-otp`, {
        email: userEmail,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VerifyForgetpassworddiv>
      <ToastContainer />
      <VerifyFGHolder>
        <VFGLogoHolder>
          <img
            src="https://res.cloudinary.com/dp75oveuw/image/upload/v1760468659/logo-removebg-preview_mouzpd.png"
            alt="KWIKQLogo"
          />
        </VFGLogoHolder>
        <VerifyFGHolderRight>
          <div className="VFGtop_holder">
            <div className="VFGIcons">
              <MdOutlineVerifiedUser />
            </div>
            <h2>Verify Email</h2>
            <p>Please input code sent to your email</p>
          </div>

          <div className="VFGInputHolder">
            <p>Input code</p>
            <div>
              {otp.map((length, index) => (
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  value={length}
                  onChange={(e) => handleInputChange(e.target, index)}
                  onKeyDown={(e) => handleKeyPress(e, index)}
                  autoFocus={index === 0}
                />
              ))}
            </div>
          </div>
          <div className="VFGbutton-holder">
            <button
              onClick={() => Validation()}
              style={{
                backgroundColor: `${BtnLoadingState ? "gray" : "blue"}`,
                cursor: `${BtnLoadingState ? "not-allowed" : "pointer"}`,
              }}
            >
              Verify
            </button>
            <p>
              Didn't receive any code?{" "}
              <span onClick={handleResetOtp}>Resend codes (59s)</span>
            </p>
          </div>
        </VerifyFGHolderRight>
      </VerifyFGHolder>
    </VerifyForgetpassworddiv>
  );
};

export default VerifyForgetpassword;
