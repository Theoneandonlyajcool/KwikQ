import React from "react";
import "../../Styles/GetStarted.css";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const GetStarted2 = () => {
  const nav = useNavigate();
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
          Have an account? <Link to={"/businessCategory"}>Sign in</Link>
        </div>
      </nav>
      <div className="v-line"></div>
      <main className="main">
        <h1 className="main-title">
          Let's get Started! <br /> Which of these best describes you?
        </h1>
        <div className="cards">
          <Card
            image="https://res.cloudinary.com/dmqhseusw/image/upload/v1760783258/374da1b547a439fa5c2a4ee0f923a871458d0381_1_pfvxvt.png"
            title="Independent Organization"
            desc="A single, independent entity that operates from one main location or unit"
          />
          <Card
            image="https://res.cloudinary.com/dmqhseusw/image/upload/v1760783257/6deb3f53715c252d7279ab294c1fc5bf1b3e46d3_wjp2w1.jpg"
            title="Multi-Branch organization"
            desc=" A parent oranization that operates multiple physical or functional branches"
          />
          {/* <Card
            image="https://res.cloudinary.com/dp75oveuw/image/upload/v1761682523/Single_brnach_Image_ehl9lb.png"
            title="Single-Branch"
            desc="Individual organization that operates under an entity"
          /> */}
        </div>
      </main>
    </div>
  );
};

const Card = ({ image, title, desc }) => {
  const nav = useNavigate();
  return (
    <div className="card" onClick={() => nav("/sign_up")}>
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

export default GetStarted2;
