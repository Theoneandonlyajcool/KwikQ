import React, { useState } from "react";
import { Resetpasswordbackground } from "./ResetPasswordStyle";
import { CiLock } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { TbEyeFilled } from "react-icons/tb";
import { RiEyeOffFill } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const ResetPassword = () => {
  const [seset, setSeset] = useState({
    password: "",
    ConfirmPassword: "",
  });
  const [eyePassword, setEyePassword] = useState(false);
  const [eyePassword2, setEyePassword2] = useState(false);

  const handlechange = (e) => {
    const { value, name } = e.target;
    setSeset((prev) => ({ ...prev, [name]: value }));
  };

  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const handlesubmit = async (e) => {
    try {
      const res = await axios.put(`${BaseUrl}/api/v1/change-password`, seset, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res);
      toast.success(res?.data?.message);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const toggleEye = () => {
    setEyePassword((prev) => !prev);
  };
  const toggleEye2 = () => {
    setEyePassword2((prev) => !prev);
  };

  console.log("my data", seset);
  return (
    <Resetpasswordbackground>
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
        <div className="ResetPassword">
          <section className="body_fg">
            <div className="FG_text">
              <div className="FG_icon">
                <CiLock />
              </div>
              <div className="RP_rap">
                <p className="FG_1">Reset Password</p>
                <span className="FG_2">Please put in a new password</span>
              </div>
            </div>
            <div className="RP_Input">
              <label For="password">Password</label>
              <div className="for_eye1">
                <input
                  type="password"
                  name="password"
                  placeholder="enter your password"
                  value={seset.password}
                  onChange={handlechange}
                  className="RP_password1"
                />
                {eyePassword ? (
                  <TbEyeFilled className="EyeClosed2" onClick={toggleEye} />
                ) : (
                  <RiEyeOffFill className="EyeClosed" onClick={toggleEye} />
                )}
              </div>

              <label For="password">Confirm Password</label>
              <div className="for_eye2">
                <input
                  type="password"
                  name="ConfirmPassword"
                  placeholder="Confirm Password"
                  value={seset.ConfirmPassword}
                  onChange={handlechange}
                  className="RP_password"
                />
                {eyePassword2 ? (
                  <TbEyeFilled className="EyeClosed2" onClick={toggleEye2} />
                ) : (
                  <RiEyeOffFill className="EyeClosed" onClick={toggleEye2} />
                )}
              </div>

              <div className="FG_Btn1rap">
                <button className="FG_Btn2">Reset Password</button>
              </div>
              <div className="FG_link">
                <a href="/#/sign_in" className="RP_linkrap">
                  <IoIosArrowBack />
                  <span>Back to log in</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Resetpasswordbackground>
  );
};

export default ResetPassword;
