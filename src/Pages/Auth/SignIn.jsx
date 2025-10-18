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
  const [error, setError] = useState("")
  const [eyePassword, setEyePassword] = useState(false);


  const handlesumit = (e)=> {
    e.preventDefault();
    setError("")
    if(!loginput.email ||  !loginput.password){
    setError("Please enter both email and password")
    return;
     }
  }


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

                <form action="" className="frominfor" onSubmit={handlesumit}>
                    <label htmlFor="Email"> Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={loginput.email}
                        onChange={(e) => setLoginput(e.target.value)}
                        required
                        className="inputstyled"
                    />
                    
                    
                        <label htmlFor="Password">
                        Password
                        </label>
                        <div className="for_eye1">
                        <input
                            type={eyePassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter your Password"
                            value={loginput.password}
                            onChange={(e) => setLoginput(e.target.value)}
                            required
                            className="inputstyled2"
                        />
                        {eyePassword ? (
                            <TbEyeFilled className="EyeClosed2" onClick={toggleEye} />
                            ) : (
                            <RiEyeOffFill className="EyeClosed" onClick={toggleEye} />
                        )}
                    </div>

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
