import React, { useRef } from "react";
import Features from "./Features";
import About from "./About";
import Works from "./Works";
import Clients from "./Clients";
import KeyFeatures from "./KeyFeatures";
import Faq from "./Faq";
import GetStarted from "./GetStarted";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const nav = useNavigate();

  const headerRef = useRef(null);
  const homeRef = useRef(null);
  const worksRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToRef = (ref) => {
    if (!ref?.current) return;
    const top = ref.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <LandingContainer ref={homeRef}>
        <HeaderHolder ref={headerRef}>
          <Header>
            <div className="Logo">
              <img
                src="https://res.cloudinary.com/dp75oveuw/image/upload/v1761207428/Group_1_lnfxe0.png"
                alt=""
              />
            </div>
            <div className="Menu">
              <ul>
                <li onClick={() => scrollToRef(homeRef)}>Home</li>
                <li onClick={() => scrollToRef(aboutRef)}>About</li>
                <li onClick={() => scrollToRef(worksRef)}>How it works</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="login">
              <p onClick={() => nav("/sign_in")}>Sign in</p>
              <button onClick={() => nav("/sign_up")}>Sign up</button>
            </div>
          </Header>
        </HeaderHolder>
        <ContentWrapper>
          <Text>
            <h1>Smart Queue Management System For Modern Enterprise</h1>
            <p>
              KwikQ helps businesses manage queues effortlessly by allowing
              staff to add and track customers in real time.
            </p>
          </Text>
          <ButtonHolder>
            <button>Get Started</button>
            <button className="Onboard">
              Onboard Your Business <MdKeyboardArrowRight />
            </button>
          </ButtonHolder>
        </ContentWrapper>
        <DesignHolder></DesignHolder>
      </LandingContainer>

      <Features />
      <div ref={worksRef}>
        <Works />
      </div>
      <KeyFeatures />
      <div ref={aboutRef}>
        <About />
      </div>
      <Clients />
      <Faq />
      <GetStarted />
    </>
  );
};

export default LandingPage;

const LandingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  background-image: url(https://i.postimg.cc/ZKgTqRjG/background.png);
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 100px;
  position: relative;

  @media (max-width: 768px) {
    padding-top: 90px;
    min-height: 100vh;
    height: auto;
  }

  @media (max-width: 480px) {
    padding-top: 70px;
    min-height: 100vh;
    height: auto;
    justify-content: space-between;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    justify-content: flex-start;
    padding-top: 40px;
  }
`;

const HeaderHolder = styled.div`
  width: 100%;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 20px;
  left: 0;
  z-index: 1000;
  pointer-events: none;

  @media (max-width: 768px) {
    top: 15px;
  }

  @media (max-width: 480px) {
    top: 10px;
    min-height: 10vh;
  }
`;

const Header = styled.div`
  width: min(1039px, 95%);
  height: 69px;
  border-radius: 60px;
  background: linear-gradient(to right, #303bff, #96f7e4);
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  margin-top: 15px;

  .Logo {
    width: 30%;
    height: 70%;
    display: flex;
    align-items: center;

    img {
      width: 35%;
      height: 70%;
      object-fit: cover;
      color: white;
      margin-right: auto;
    }

    @media (max-width: 768px) and (min-width: 481px) {
      width: 25%;

      img {
        width: 50%;
        height: 75%;
        object-fit: contain;
      }
    }
  }

  .Menu {
    width: 50%;
    min-height: 100%;
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      display: flex;
      gap: 20px;

      li {
        color: #ffffff;
        line-height: 150%;
        font-weight: 600;
        cursor: pointer;
      }
    }

    @media (max-width: 768px) and (min-width: 481px) {
      width: 55%;

      ul {
        gap: 15px;

        li {
          font-size: 14px;
        }
      }
    }
  }

  .login {
    width: 17%;
    min-height: 100%;
    display: flex;
    align-items: center;
    gap: 18px;

    p {
      font-weight: 600;
      cursor: pointer;
      color: #ffffff;
    }

    button {
      width: 109px;
      height: 34px;
      background-color: #303bff;
      border-radius: 40px;
      font-size: 16px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      outline: none;
      color: #ffffff;
      line-height: 150%;
    }
    button:hover {
      background-color: #ffffff;
      color: #303bff;
    }

    @media (max-width: 768px) and (min-width: 481px) {
      width: 20%;
      gap: 15px;

      p {
        font-size: 14px;
      }

      button {
        width: 95px;
        height: 32px;
        font-size: 14px;
      }
    }
  }

  @media (max-width: 768px) and (min-width: 481px) {
    height: 62px;
  }

  @media (max-width: 480px) {
    height: 50px;
    justify-content: space-between;
    padding: 0 15px;
    margin-top: 10px;

    .Logo {
      width: 50%;

      img {
        width: 50%;
      }
    }

    .Menu {
      display: none;
    }

    .login {
      width: 50%;
      justify-content: flex-end;
      gap: 12px;

      p {
        font-size: 14px;
      }

      button {
        width: 80px;
        height: 30px;
        font-size: 12px;
      }
    }
  }
`;

const Text = styled.div`
  width: 90%;
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-weight: 700;
    font-size: 61px;
    line-height: 140%;
    color: #ffffff;
    text-align: center;
    width: 900px;
  }

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    width: 40%;
    text-align: center;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    min-height: 35vh;

    h1 {
      font-size: 48px;
      width: 90%;
    }

    p {
      font-size: 18px;
      width: 60%;
    }
  }

  @media (max-width: 480px) {
    min-height: 30vh;

    h1 {
      font-size: 28px;
      width: 95%;
      margin-bottom: 15px;
    }

    p {
      font-size: 16px;
      width: 90%;
    }
  }
`;

const ButtonHolder = styled.div`
  width: 100%;
  min-height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 26px;

  button {
    width: 247px;
    height: 63px;
    border-radius: 33px;
    border: 1px solid #ffffff;
    background-color: transparent;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    line-height: 200%;
    color: #ffffff;
  }

  .Onboard {
    width: 381px;
    height: 62px;
    border-radius: 33px;
    border: 1px solid #ffffff;
    color: #ffffff;
    background-color: #303bff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 73px;
    padding-top: 13px;
    padding-bottom: 13px;
    padding-right: 73px;
    gap: 2px;
  }

  @media (max-width: 768px) {
    min-height: 12vh;
    gap: 20px;

    button {
      width: 220px;
      height: 58px;
      font-size: 18px;
    }

    .Onboard {
      width: 350px;
      height: 58px;
      padding: 10px 60px;
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    min-height: 10vh;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 20px;

    button {
      width: 200px;
      height: 45px;
      font-size: 16px;
    }

    .Onboard {
      width: 200px;
      height: 45px;
      padding: 10px 10px;
      font-size: 14px;
    }
  }
`;

const DesignHolder = styled.div`
  width: 100%;
  min-height: 20vh;
  display: flex;
  background-image: url(https://i.postimg.cc/bJNFLbND/mm-1-1.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    min-height: 15vh;
  }

  @media (max-width: 480px) {
    min-height: 15vh;
    margin-top: auto;
  }
`;
