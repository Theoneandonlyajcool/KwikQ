import React, { useRef, useState } from "react";
import Features from "./Features";
import About from "./About";
import Works from "./Works";
import Clients from "./Clients";
import KeyFeatures from "./KeyFeatures";
import Faq from "./Faq";
import GetStarted from "./GetStarted";
import FooterPage from "../Footer/Footer";
import styled from "styled-components";
import { MdKeyboardArrowRight, MdMenu, MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const nav = useNavigate();
  const headerRef = useRef(null);
  const homeRef = useRef(null);
  const worksRef = useRef(null);
  const aboutRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToRef = (ref) => {
    if (!ref?.current) return;
    const top = ref.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <LandingContainer ref={homeRef}>
        <HeaderHolder ref={headerRef}>
          <Header>
            <div className="Logo">
              <img
                src="https://res.cloudinary.com/dp75oveuw/image/upload/v1761207428/Group_1_lnfxe0.png"
                alt="Logo"
              />
            </div>

            <MobileMenuButton onClick={toggleMenu}>
              {isMenuOpen ? (
                <MdClose style={{ color: "#222222" }} />
              ) : (
                <MdMenu />
              )}
            </MobileMenuButton>

            <DesktopMenu className="Menu">
              <ul>
                <li onClick={() => scrollToRef(homeRef)}>Home</li>
                <li onClick={() => scrollToRef(aboutRef)}>About</li>
                <li onClick={() => scrollToRef(worksRef)}>How it works</li>
                <li onClick={() => nav("/pricing")}>Pricing</li>
              </ul>
            </DesktopMenu>

            <DesktopLogin className="login">
              <p onClick={() => nav("/businessCategory")}>Sign in</p>
              <button onClick={() => nav("/businessCategory2")}>Sign up</button>
            </DesktopLogin>

            <MobileMenuContainer isOpen={isMenuOpen} onClick={toggleMenu}>
              <MobileMenuContent onClick={(e) => e.stopPropagation()}>
                <ul>
                  <li onClick={() => scrollToRef(homeRef)}>Home</li>
                  <li onClick={() => scrollToRef(aboutRef)}>About</li>
                  <li onClick={() => scrollToRef(worksRef)}>How it works</li>
                  <li onClick={() => nav("/pricing")}>Pricing</li>
                </ul>
                <MobileAuthButtons>
                  <button
                    className="sign-in"
                    onClick={() => nav("/businessCategory")}
                  >
                    Sign in
                  </button>
                  <button
                    className="sign-up"
                    onClick={() => nav("/businessCategory2")}
                  >
                    Sign up
                  </button>
                </MobileAuthButtons>
              </MobileMenuContent>
            </MobileMenuContainer>
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
            <button onClick={() => nav("/businessCategory2")}>
              Get Started
            </button>
            <button
              className="Onboard"
              onClick={() => nav("/businessCategory2")}
            >
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
      <FooterPage />
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

  @media (min-width: 1441px) {
    padding-top: 120px;
    min-height: 100vh;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    padding-top: 110px;
  }

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

  @media (min-width: 1441px) {
    justify-content: center;
  }

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

  @media (min-width: 1441px) {
    top: 25px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    top: 18px;
  }

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
  justify-content: space-between;
  align-items: center;
  pointer-events: auto;
  margin-top: 15px;
  position: relative;
  padding: 0 20px;

  @media (min-width: 1441px) {
    width: min(1200px, 95%);
    height: 75px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: min(1100px, 95%);
    height: 72px;
  }

  .Logo {
    width: auto;
    height: 70%;
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: auto;
      object-fit: contain;
      color: white;
    }

    @media (min-width: 1441px) {
      img {
        width: 140px;
      }
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      img {
        width: 130px;
      }
    }

    @media (max-width: 768px) and (min-width: 481px) {
      img {
        width: 100px;
      }
    }

    @media (max-width: 480px) {
      width: 50%;

      img {
        width: 80px;
      }
    }
  }

  @media (max-width: 768px) and (min-width: 481px) {
    height: 62px;
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    height: 50px;
    padding: 0 15px;
    margin-top: 10px;
    border-radius: 25px;
  }
`;

const DesktopMenu = styled.div`
  width: auto;
  min-height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;

  ul {
    list-style: none;
    display: flex;
    gap: 30px;

    li {
      color: #ffffff;
      line-height: 150%;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.3s ease;
      font-size: 16px;
      white-space: nowrap;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (min-width: 1441px) {
    ul {
      gap: 40px;

      li {
        font-size: 18px;
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    ul {
      gap: 35px;

      li {
        font-size: 17px;
      }
    }
  }

  @media (max-width: 768px) and (min-width: 481px) {
    ul {
      gap: 20px;

      li {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const DesktopLogin = styled.div`
  width: auto;
  min-height: 100%;
  display: flex;
  align-items: center;
  gap: 15px;

  p {
    font-weight: 600;
    cursor: pointer;
    color: #ffffff;
    transition: opacity 0.3s ease;
    font-size: 16px;
    white-space: nowrap;

    &:hover {
      opacity: 0.8;
    }
  }

  button {
    width: 100px;
    height: 34px;
    background-color: #303bff;
    border-radius: 40px;
    font-size: 14px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    outline: none;
    color: #ffffff;
    line-height: 150%;
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  button:hover {
    background-color: #ffffff;
    color: #303bff;
  }

  @media (min-width: 1441px) {
    gap: 20px;

    p {
      font-size: 18px;
    }

    button {
      width: 120px;
      height: 38px;
      font-size: 16px;
    }
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    gap: 18px;

    p {
      font-size: 17px;
    }

    button {
      width: 110px;
      height: 36px;
      font-size: 15px;
    }
  }

  @media (max-width: 768px) and (min-width: 481px) {
    gap: 12px;

    p {
      font-size: 14px;
    }

    button {
      width: 90px;
      height: 32px;
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
  z-index: 1001;

  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenuContainer = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    position: fixed;
    top: 0;
    right: 0;
    width: 65%;
    height: 100vh;
    background: #ffffff;
    z-index: 999;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 0;
    padding-top: 80px;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  padding: 0 20px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    width: 100%;

    li {
      color: #000000;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: left;
      width: 100%;
      padding: 8px 12px;
      border-radius: 6px;

      &:hover {
        background-color: #303bff;
        color: #ffffff;
        transform: translateX(5px);
      }
    }
  }
`;

const MobileAuthButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  width: 100%;
  padding: 0 20px;
  margin-top: 20px;

  button {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    border: none;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .sign-in {
    background: transparent;
    border: 2px solid #303bff;
    color: #303bff;

    &:hover {
      background: #303bff;
      color: #ffffff;
    }
  }

  .sign-up {
    background: #303bff;
    color: #ffffff;

    &:hover {
      background: #1a2ac0;
      transform: translateY(-2px);
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
    line-height: 200%;
    width: 48%;
    text-align: center;
    color: #ffffff;
  }

  @media (min-width: 1441px) {
    h1 {
      font-size: 72px;
      width: 1000px;
    }

    p {
      font-size: 22px;
      width: 50%;
    }
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    h1 {
      font-size: 65px;
      width: 950px;
    }

    p {
      font-size: 21px;
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    min-height: 35vh;

    h1 {
      font-size: 48px;
      width: 90%;
    }

    p {
      font-size: 18px;
      width: 80%;
    }
  }

  @media (max-width: 480px) {
    min-height: 30vh;

    h1 {
      font-size: 28px;
      margin-bottom: 15px;
    }

    p {
      font-size: 16px;
      width: 100%;
      margin-bottom: 15px;
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
    gap: 1.5rem;
  }

  @media (min-width: 1441px) {
    gap: 30px;

    button {
      width: 270px;
      height: 68px;
      font-size: 22px;
    }

    .Onboard {
      width: 420px;
      height: 68px;
      font-size: 22px;
    }
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    gap: 28px;

    button {
      width: 260px;
      height: 65px;
      font-size: 21px;
    }

    .Onboard {
      width: 400px;
      height: 65px;
      font-size: 21px;
    }
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
      width: 300px;
      height: 45px;
      font-size: 16px;
    }

    .Onboard {
      width: 300px;
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

  @media (min-width: 1441px) {
    min-height: 25vh;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    min-height: 22vh;
  }

  @media (max-width: 768px) {
    min-height: 15vh;
  }

  @media (max-width: 480px) {
    min-height: 15vh;
    margin-top: auto;
  }
`;
