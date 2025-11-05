import React, { useState } from "react";
// import "../../Styles/GetStarted.css";
import "../../Styles/GetStarted.css";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { Role } from "../../Components/Context";
import { toast } from "react-toastify";
import { useContext } from "react";

const GetStarted = () => {
  // const { OrgRole } = useContext(Role);
  // console.log("User Role:", OrgRole);
  const nav = useNavigate();

  return (
    <div className="onboarding">
      {/* <nav className="nav">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dp75oveuw/image/upload/v1760854502/Mask_group_wsdoqc.png"
            alt="company_logo"
            className="img-cover"
          />
        </div>
      </nav> */}

      <header className="bc-heading-cont">
        <div className="bc-heading-child">
          <div className="image-cont">
            <img
              style={{ width: "100%", cursor: "pointer" }}
              onClick={() => {
                nav("/");
              }}
              src="
            https://res.cloudinary.com/dp75oveuw/image/upload/v1760854502/Mask_group_wsdoqc.png"
              alt=""
            />
          </div>
          <div className="signin">
            Don't Have an account?{" "}
            <Link to={"/businessCategory2"}>Sign up</Link>
          </div>
        </div>
      </header>

      <div className="v-line"></div>
      <main className="main">
        <h1 className="main-title">
          Welcome Back ! <br /> Which of these best describes you?
        </h1>
        <div className="cards">
          <Card
            image="https://res.cloudinary.com/dmqhseusw/image/upload/v1760783257/6deb3f53715c252d7279ab294c1fc5bf1b3e46d3_wjp2w1.jpg"
            title="individual"
            desc="A single, independent entity that operates from one main location or unitu"
            role={"independent"}
          />
          <Card
            image="https://res.cloudinary.com/dmqhseusw/image/upload/v1760783258/374da1b547a439fa5c2a4ee0f923a871458d0381_1_pfvxvt.png"
            title="Multi"
            desc="A parent organization that operates multiple physical or functional branches"
            role={"multi"}
          />
          <Card
            image="https://res.cloudinary.com/dmqhseusw/image/upload/v1760783258/00b3d0ee57c80d978da5663d9527775dd153430e_lvedc4.png"
            title="single"
            desc="Individual organization that operates under an entity"
            role={"single"}
          />
        </div>
      </main>
    </div>
  );
};

const Card = ({ image, title, desc, role, ChangeRole }) => {
  const nav = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        localStorage.setItem("UserRole", role);
        if (role == "single") {
          nav(`/singleBranch/`);
          // alert("single");
        } else {
          nav(`/sign_in/`);
          // alert("Sign in");
        }
      }}
    >
      <div className="Card_description">
        <h1 className="card-title">{title}</h1>
        <p className="card-desc">{desc}</p>
      </div>
      <img src={image} alt={title} className="card-image" />

      <div className="arrow-circle">
        <FaArrowRight className="arrow-icon" />
      </div>
    </div>
  );
};

export default GetStarted;
