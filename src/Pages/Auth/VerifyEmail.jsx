import React, { useRef, useState } from "react";
import {
  VerifyEmailContainer,
  LogoHolder,
  VerifyEmailHolder,
} from "./VerifyEmailStyle";
import { MdOutlineVerifiedUser } from "react-icons/md";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const VerifyEmail = ({ length = 6 }) => {
  const nav = useNavigate();
  const [BtnLoadingState, SetBtnLoadingState] = useState(false);

  const BaseURL = import.meta.env.VITE_API_BASE_URL;
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
  const userEmail = JSON.parse(localStorage.getItem("OrgEmail"));
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
      const res = await axios.post(`${BaseURL}/api/v1/verify`, {
        email: userEmail,
        otp: otp.join(""),
      });
      toast.success(res?.data?.message);
      SetBtnLoadingState(false);
      setOtp("");
      setTimeout(() => {
        nav("/sign_in");
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
      SetBtnLoadingState(false);
      toast.error(error?.response?.data?.message);
    }
  };

  const Validation = () => {
    if (otp.length < 6) {
      toast.error("Verification code not complete");
    } else {
      SendOTP();
    }
  };

  const handleResetOtp = async () => {
    // SetBtnLoadingState(true);
    try {
      const response = await axios.post(`${BaseURL}/api/v1/resend-otp`, {
        email: userEmail,
      });
      console.log(response.data);
      toast.success(response?.data?.message);
      setOtp(new Array(length).fill(""));
      setTimeLeft(2 * 60);
    } catch (error) {
      console.log(error);
    }
  };

  // Counter part
  const [timeLeft, setTimeLeft] = useState(2 * 60); // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Convert seconds → MM:SS format
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Add leading zeros (e.g. 05:09 instead of 5:9)
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  return (
    <VerifyEmailContainer>
      <ToastContainer />
      <LogoHolder>
        <div className="Logo">
          <img
            src="https://i.postimg.cc/VLXcTvc2/35379ce965af990a259b5b98b745a14f6d61bddc-2.png"
            alt=""
          />
        </div>
      </LogoHolder>

      <VerifyEmailHolder>
        <div className="top_holder">
          <div className="Icons">
            <MdOutlineVerifiedUser />
          </div>
          <h2>Verify Email</h2>
          <p>Please input code sent to your email</p>
        </div>

        <div className="InputHolder">
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
        <div className="button-holder">
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
            <span>
              {timeLeft > 0 ? (
                <span>
                  Resend code in ({timeLeft > 0 ? formattedTime : "Time’s up!"})
                </span>
              ) : (
                <span onClick={handleResetOtp}>Resend code</span>
              )}
            </span>
          </p>
        </div>
      </VerifyEmailHolder>
    </VerifyEmailContainer>
  );
};

export default VerifyEmail;
