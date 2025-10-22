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
    <div className="sign-up-cont">
      <ToastContainer />
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
                src="https://res.cloudinary.com/dmqhseusw/image/upload/v1760739526/35379ce965af990a259b5b98b745a14f6d61bddc_edhy49.png"
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
                HandleSubmit();
              }}
              className="sign-up-input-form"
            >
              <div className="inputs-cont">
                <label htmlFor="" style={{ fontSize: "1.1rem" }}>
                  Buisness Name
                </label>
                <input
                  type="text"
                  className="sign-up-input"
                  placeholder="Enter your first name"
                  value={inputValues.businessName}
                  onChange={(e) => {
                    SetInputValues({
                      ...inputValues,
                      businessName: e.target.value,
                    });
                  }}
                />
                <p
                  style={{
                    alignSelf: "center",
                    color: "red",
                    height: ".5rem",
                  }}
                >
                  {ErrorMsg.NameError}
                </p>
              </div>

              {/* <div className="inputs-cont">
                <label htmlFor="">Last name</label>
                <input
                  type="text"
                  className="sign-up-input"
                  placeholder="Enter your last name"
                  value={inputValues.lastName}
                  onChange={(e) => {
                    SetInputValues({
                      ...inputValues,
                      lastName: e.target.value,
                    });
                  }}
                />
              </div> */}

              <div className="inputs-cont">
                <label htmlFor="">Email </label>
                <input
                  type="email"
                  className="sign-up-input"
                  placeholder="Enter your last name"
                  value={inputValues.email}
                  onChange={(e) => {
                    SetInputValues({
                      ...inputValues,
                      email: e.target.value,
                    });
                  }}
                />

                <p
                  style={{
                    alignSelf: "center",
                    color: "red",
                    height: ".5rem",
                  }}
                >
                  {ErrorMsg.EmailError}
                </p>
              </div>

              <div className="inputs-cont">
                <label htmlFor="">Password </label>

                <div className="psw-input">
                  <input
                    type={ShowPsw ? "text" : "password"}
                    placeholder="Create your password"
                    value={inputValues.password}
                    onChange={(e) => {
                      SetInputValues({
                        ...inputValues,
                        password: e.target.value,
                      });
                    }}
                  />

                  <div
                    style={{
                      // border: "2px solid green",
                      width: "10%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {ShowPsw ? (
                      <FaEye
                        style={{ width: "50%", cursor: "pointer" }}
                        onClick={() => SetShowPsw(!ShowPsw)}
                      />
                    ) : (
                      <FaEyeSlash
                        style={{ width: "50%", cursor: "pointer" }}
                        onClick={() => SetShowPsw(!ShowPsw)}
                      />
                    )}
                  </div>
                </div>

                <p
                  style={{
                    alignSelf: "center",
                    color: "red",
                    height: ".5rem",
                    marginBottom: ".1rem",
                  }}
                >
                  {ErrorMsg.PswError}
                </p>
              </div>
              <p>Or</p>

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

              <button
                className="sign-up-btn"
                style={{
                  backgroundColor: LoadingState ? "gray" : "",
                  cursor: LoadingState ? "not-allowed" : "pointer",
                }}
                disabled={LoadingState}
              >
                {LoadingState ? "Loading" : "Sign up"}
              </button>

              <p>
                Already have an account?{" "}
                <a href="#" onClick={() => nav("/sign_in")}>
                  sign in
                </a>{" "}
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
