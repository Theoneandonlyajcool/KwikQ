import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Landing Page</h1>
      <button
        style={{
          width: "fit-content",
          padding: "0 .5rem",
          backgroundColor: "teal",
          border: "none",
          height: "2rem",
          fontSize: "1.1rem",
          color: "white",
          margin: "1rem",
        }}
        onClick={() => navigate("/sign_up")}
      >
        Sign up
      </button>
      <br />
      <button
        style={{
          bwidth: "fit-content",
          padding: "0 .5rem",
          backgroundColor: "teal",
          border: "none",
          height: "2rem",
          fontSize: "1.1rem",
          color: "white",
          margin: "1rem",
        }}
        onClick={() => navigate("/sign_in")}
      >
        Signin
      </button>
      <br />
      <button
        style={{
          bwidth: "fit-content",
          padding: "0 .5rem",
          backgroundColor: "teal",
          border: "none",
          height: "2rem",
          fontSize: "1.1rem",
          color: "white",
          margin: "1rem",
        }}
        onClick={() => navigate("/forget_password")}
      >
        forget password
      </button>
      <br />
      <button
        style={{
          width: "fit-content",
          padding: "0 .5rem",
          backgroundColor: "teal",
          border: "none",
          height: "2rem",
          fontSize: "1.1rem",
          color: "white",
          margin: "1rem",
        }}
        onClick={() => navigate("/category")}
      >
        Sign up Category
      </button>
      <br />
      <button
        style={{
          width: "fit-content",
          padding: "0 .5rem",
          backgroundColor: "teal",
          border: "none",
          height: "2rem",
          fontSize: "1.1rem",
          color: "white",
          margin: "1rem",
        }}
        onClick={() => navigate("/verification")}
      >
        Verify email
      </button>{" "}
      <br />
      <button
        style={{
          width: "fit-content",
          padding: "0 .5rem",
          backgroundColor: "teal",
          border: "none",
          height: "2rem",
          fontSize: "1.1rem",
          color: "white",
          margin: "1rem",
        }}
        onClick={() => navigate("/businessCategory")}
      >
        business Category
      </button>
    </div>
  );
};

export default LandingPage;
