import React from "react";
import "./GetStarted.css";
import { FaArrowRight } from "react-icons/fa";
import Kwikq from "../../assets/Kwiq.png";
import img1 from "../../assets/img1.png";

const GetStarted = () => {
  return (
    <div className="onboarding">
      <nav className="nav">
        <div className="logo">
          <img src={Kwikq} alt="Company Logo" />
        </div>
        <div className="signin">
          Have an account? <a href="#">Sign in</a>
        </div>
      </nav>
      <div className="v-line"></div>
      <main className="main">
        <h1 className="main-title">Let's get Started!</h1>
        <p className="main-subtitle">Which of these best describes you?</p>
        <div className="cards">
          <Card
            image={img1}
            title="I'm a Business"
            desc="Register your business and manage queues easily."
          />
          <Card
            image={img1}
            title="I'm a Customer"
            desc="Book queues from your phone without stress."
          />
          <Card
            image={img1}
            title="I'm a Staff Member"
            desc="Help manage and attend to customers faster."
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
        <h3 className="card-title">{title}</h3>
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
