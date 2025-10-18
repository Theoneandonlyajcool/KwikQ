import React from "react";
import {
  VerifyEmailContainer,
  VerifyEmailHolder,
  LogoHolder,
  VerifyEmailHolderRight,
} from "./VerifyEmailStyle";
import { MdOutlineVerifiedUser } from "react-icons/md";

const VerifyEmail = () => {
  return (
    <VerifyEmailContainer>
      <VerifyEmailHolder>
        <LogoHolder>
          <img
            src="https://res.cloudinary.com/dp75oveuw/image/upload/v1760468659/logo-removebg-preview_mouzpd.png"
            alt=""
          />
        </LogoHolder>
        <VerifyEmailHolderRight>
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
              <input type="text" inputMode="numeric" maxLength={1} />
              <input type="tel" inputMode="numeric" maxLength={1} />
              <input type="tel" inputMode="numeric" maxLength={1} />
              <input type="tel" inputMode="numeric" maxLength={1} />
              <input type="tel" inputMode="numeric" maxLength={1} />
              <input type="tel" inputMode="numeric" maxLength={1} />
            </div>
          </div>
          <div className="button-holder">
            <button>Verify</button>
            <p>
              Didn't receive any code? <span>Resend codes (59s)</span>
            </p>
          </div>
        </VerifyEmailHolderRight>
      </VerifyEmailHolder>
    </VerifyEmailContainer>
  );
};

export default VerifyEmail;
