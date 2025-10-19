import React from "react";
import { Forgetpasswordbackgroud } from "./ForgetPasswordStyle";
import { CiLock } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";


const ForgetPassword = () => {
  return (
      <Forgetpasswordbackgroud>
        <div className="rapperfp">
          <div className="logofg">
            <div className="logfgrap">
              <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1760820927/35379ce965af990a259b5b98b745a14f6d61bddc_2_x3qlfx.png" className="imageFG" alt="imageFG" />
            </div>
          </div>
            <div className="Forgetpassword">
                <section className="body_fg">
                    <div className="FG_text">
                      <div className="FG_icon">
                        <CiLock />
                      </div>
                      <p className="FG_1">Forgot Password</p>
                      <span className="FG_2">Don’t worry, we’ll help you recover your account</span>
                    </div>
                    <div className="FG_Input">
                      <label For="Email">Input email address</label>
                      <input type="email" placeholder="enter your email"  className="FG_email"/>
                      <div className="FG_Btn1rap">
                        <button className="FG_Btn2">Send Verification code</button>
                      </div>
                      <div className="FG_link">
                        <IoIosArrowBack />
                        <span>Back to log in</span>
                      </div>
                    </div>
                </section>
            </div>
        </div>
      </Forgetpasswordbackgroud>
  )
};

export default ForgetPassword;
