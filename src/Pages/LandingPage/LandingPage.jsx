import React, { useRef } from "react";
import Features from "./Features";
import About from "./About";
import Works from "./Works";
import Clients from "./Clients";
import KeyFeatures from "./KeyFeatures";
import Faq from "./Faq";
import GetStarted from "./GetStarted";
import styled from "styled-components";

const LandingPage = () => {
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
            <div className="Logo"></div>
            <div className="Menu">
              <ul>
                <li onClick={() => scrollToRef(homeRef)}>Home</li>
                <li onClick={() => scrollToRef(aboutRef)}>About</li>
                <li onClick={() => scrollToRef(worksRef)}>How it works</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="login">
              <p>Sign in</p>
              <button>Sign up</button>
            </div>
          </Header>
        </HeaderHolder>
        <Text>
          <h1>Smart Queue Management System For Modern Enterprise</h1>
          <p>
            KwikQ helps businesses manage queues effortlessly by allowing staff
            to add and track customers in real time.
          </p>
        </Text>
        <ButtonHolder>
          <button>Get Started</button>
        </ButtonHolder>
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
  /* min-height: 100vh; */
  height: 857px;
  display: flex;
  background-image: url(https://i.postimg.cc/ZKgTqRjG/background.png);
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 100px;
`;

const HeaderHolder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 20px;
  left: 0;
  z-index: 1000;
  pointer-events: none;
`;
const Header = styled.div`
  width: min(1039px, 95%);
  height: 69px;
  border-radius: 60px;
  background-color: #8090e1;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;

  .Logo {
    width: 30%;
    min-height: 100%;
  }

  .Menu {
    width: 50%;
    min-height: 100%;
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      display: flex;
      gap: 28px;

      li {
        color: #ffffff;
        line-height: 150%;
        font-weight: 600;
        cursor: pointer;
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
  }
`;

const Text = styled.div`
  width: 90%;
  min-height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
`;

const ButtonHolder = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    width: 247px;
    height: 63px;
    border-radius: 33px;
    border: 1px solid #ffffff;
    background-color: transparent;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    line-height: 200%;
    color: #ffffff;
  }
`;

const DesignHolder = styled.div`
  width: 100%;
  min-height: 30vh;
  display: flex;
  background-image: url(https://i.postimg.cc/bJNFLbND/mm-1-1.png);
  background-color: deeppink;
`;
