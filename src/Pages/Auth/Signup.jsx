import React from "react";
import "../../Styles/SignUp.css";
import { FaEyeSlash } from "react-icons/fa6";

const Signup = () => {
  return (
    <div className="sign-up-cont">
      <div className="sign-up-child">
        {/* Content cont */}

        <div className="sign-up-form-cont">
          <div className="sign-up-form-child">
            {/* heading / logo */}
            <div
              style={{
                height: "12%",
                // border: "1px solid green",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "2px",
              }}
            >
              <img
                style={{
                  // border: "2px solid red",
                  width: "10rem",
                  height: "3rem",
                  objectFit: "cover",
                }}
                src="https://res.cloudinary.com/dp75oveuw/image/upload/v1760468659/logo-removebg-preview_mouzpd.png"
                alt=""
              />
              <h2>Sign up</h2>
              <p>Let's create an account</p>
            </div>

            {/* form inputs */}
            <form
              action="#"
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="sign-up-input-form"
            >
              <div className="inputs-cont">
                <label htmlFor="">First name</label>
                <input
                  type="text"
                  className="sign-up-input"
                  placeholder="Enter your first name"
                />
              </div>

              <div className="inputs-cont">
                <label htmlFor="">Last name</label>
                <input
                  type="text"
                  className="sign-up-input"
                  placeholder="Enter your last name"
                />
              </div>

              <div className="inputs-cont">
                <label htmlFor="">Email </label>
                <input
                  type="email"
                  className="sign-up-input"
                  placeholder="Enter your last name"
                />
              </div>

              <div className="inputs-cont">
                <label htmlFor="">Password </label>

                <div className="psw-input">
                  <input type="text" placeholder="Create your password" />
                  <FaEyeSlash />
                </div>
              </div>
              <p>or</p>

              <div className="sign-up-horizon-line"></div>

              {/* Google sign in */}
              <div className="google-sign-cont">
                <img
                  style={{ width: "3rem" }}
                  src="https://res.cloudinary.com/dp75oveuw/image/upload/v1760744520/download__1_-removebg-preview_ttqmib.png"
                  alt=""
                />
                Sign up with google
              </div>

              <button className="sign-up-btn">Sign up</button>

              <p>
                Already have an account? <a href="#">sign in</a>{" "}
              </p>
            </form>
          </div>
        </div>

        {/* Image /background container */}
        <div className="sign-up-image-cont">
          <div className="sign-up-image-child">
            <div className="sign-up-img-bg">
              <img
                className="sign-up-image"
                src="https://res.cloudinary.com/dp75oveuw/image/upload/v1760744406/sign-up-image_rz6rge.png"
                alt="sign-img"
              />
            </div>

            <h2>The smarter way to queue anywhere, anytime.</h2>
            <p>Get in line digitally, arrive right on time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
