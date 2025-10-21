import React from "react";
import "./GetStarted.css";
import { FaArrowRight } from "react-icons/fa";

const GetStarted = () => {
  return (
    <div className="onboarding">
      <nav className="nav">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dp75oveuw/image/upload/v1760854502/Mask_group_wsdoqc.png"
            alt="company_logo"
            className="img-cover"
          />
        </div>

        <div className="signin">
          Have an account? <a href="#">Sign in</a>
        </div>
      </nav>
      <div className="v-line"></div>
      <main className="main">
        <h1 className="main-title">
          Let's get Started! <br /> Which of these best describes you?
        </h1>
        <div className="cards">
          <Card
            image="https://res.cloudinary.com/dmqhseusw/image/upload/v1760783257/6deb3f53715c252d7279ab294c1fc5bf1b3e46d3_wjp2w1.jpg"
            title="I'm a Business"
            desc="I want to let my clients wait from nywhere or schedule appointments."
          />
          <Card
            image="https://res.cloudinary.com/dmqhseusw/image/upload/v1760783258/374da1b547a439fa5c2a4ee0f923a871458d0381_1_pfvxvt.png"
            title="I'm a Customer"
            desc=" I’m trying to join a queue."
          />
          <Card
            image="https://res.cloudinary.com/dmqhseusw/image/upload/v1760783258/00b3d0ee57c80d978da5663d9527775dd153430e_lvedc4.png"
            title="I'm a Staff Member"
            desc="I want to let my clients wait from anywhere or schedule appointments"
          />
        </div>
      </main>
    </div>
  );
};

const Card = ({ image, title, desc }) => {
  return (
    <div className="card">
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
