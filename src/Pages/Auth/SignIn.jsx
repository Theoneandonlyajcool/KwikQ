import React from "react";
import { Loginbackground } from "./SignInStyle";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { TbEyeFilled} from "react-icons/tb";
import { RiEyeOffFill } from "react-icons/ri";
import { toast } from "react-toastify";

const SignIn = () => {
  const [loginput, setLoginput] = useState({
    email: "",
    password: "",
  });

 const [err, setErr] = useState({
    email: "",
    password: "",
  });

  const [eyePassword, setEyePassword] = useState(false);

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
    let valid = true;
    const newErr = { email: "", password: "" };

    if (!inputs.email.trim()) {
      newErr.email = "This field is required";
      valid = false;
    }
    if (!inputs.password.trim()) {
      newErr.password = "This field is required";
      valid = false;
    }
    setErr(newErr);
    return valid;
  };


//   console.log("this is my input", loginput);
    const toggleEye = () => {
        setEyePassword((prev) => !prev)
    };
  return (
    // <div>
    <Loginbackground>
      <section className="loginrap">
        <div className="login_context">
            <div className="loginlogo">
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1760739526/35379ce965af990a259b5b98b745a14f6d61bddc_edhy49.png" className="imagestyled" alt="kwikQlogo" />
            </div>

            <div className="aligment_to_logo">

                <div className="singintext">
                    <p className="text1">Sing In</p>
                    <span className="text2">Enter your credentials to access your account</span>
                </div>

                <form action="" className="frominfor" >
                    <label htmlFor="Email"> Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={loginput.email}
                        onChange={handleLoginChange}
                        required
                        className="inputstyled"
                    />
                    {err.email && (
                     <p style={{ color: "red", fontSize: "14px", fontFamily: "Inter" }}>{err.email}</p>
                    )}
                    
                    
                        <label htmlFor="Password">
                        Password
                        </label>
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
                        )};
                    </div>
                    {err.password && (
                      <p style={{ color: "red", fontSize: "14px", fontFamily: "Inter" }}>{err.password}</p>
                    )}

                    <div className="forgetpass">
                        <div className="checkbox-rpass">
                            <input type="checkbox" className="checkbox" />
                            <span>Remember password</span>
                        </div>
                        <div className="Forgot_password">
                            Forgot password?
                        </div>
                    </div>


                    <div className="google_or">
                        <div className="or_"><span>or</span></div>
                        <div className="googlelink">
                            <FcGoogle className="gogole_icon"/>
                            <span>Sign in with google</span>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn">Sign in</button>
                    <div className="linksignup">
                        <span>Don’t have an account?</span> <span className="linkssignup">Sign in</span>
                    </div>
                </form>
            </div>
        </div>
        <div className="imagelogin">
            <div className="holdimageandtext">
            <div className="imageholder">
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1760744630/a45208ae1e8d1ae47174c3000e4b0859ee1487f4_lqbpw1.png" className="imagestyled2" alt="image of quiet" />
            </div>
            <div className="text_image">
                <p>Smart waiting starts here.</p>
                <span>Your turn, right when it matters</span>
            </div>
            </div>
        </div>
      </section>
    </Loginbackground>
    // </div>
  );
};

export default SignIn;
