import React, { useEffect, useRef, useState } from "react";
import Monthly from "./MonthlyPrice";
import Clients from "./Clients";
import Plans from "./Plan";
import Faq from "./Faq";
import GetStarted from "../AdminLandingPage/GetStarted";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import { MdMenu, MdClose } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const AdminLandingPage = () => {
  const nav = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AdminLandingContainer>
        <HeaderHolder>
          <Header>
            <div className="Logo">
              <img
                style={{ cursor: "pointer" }}
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
                <li>Home</li>
                <li>About</li>
                <li>How it works</li>
                <li>Pricing</li>
              </ul>
            </DesktopMenu>

            <DesktopLogin className="login">
              <button onClick={() => nav("/admin_dashboard")}>
                Admin <HiUser style={{ color: "white" }} />
              </button>
            </DesktopLogin>

            <MobileMenuContainer isOpen={isMenuOpen} onClick={toggleMenu}>
              <MobileMenuContent onClick={(e) => e.stopPropagation()}>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>How it works</li>
                  <li>Pricing</li>
                </ul>
                <MobileAuthButtons>
                  <button onClick={() => nav(-1)}>Admin</button>
                </MobileAuthButtons>
              </MobileMenuContent>
            </MobileMenuContainer>
          </Header>
        </HeaderHolder>
        <Text>
          <h1>Enterprise-Ready Plans Built for Every Business Need</h1>
          <h3>
            Whether you're scaling across locations or optimizing a single
            branch, KwikQ offers flexible, cost-effective plans that grow with
            you.
          </h3>
          <button>Start Your Free Trial</button>
          <p>Choose the Perfect Plan for your business</p>
        </Text>
        <DesignHolder></DesignHolder>
      </AdminLandingContainer>
      <Monthly />
      <Clients />
      <Plans />
      <Faq />
      <GetStarted />
      <Footer />
    </>
  );
};

export default AdminLandingPage;

const AdminLandingContainer = styled.div`
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
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding-top: 100px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding-top: 100px;
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
    width: 100%;
    min-height: 20vh;
    top: 20px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 100%;
    min-height: 20vh;
    top: 20px;
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
    width: min(1039px, 95%);
    height: 69px;
    margin-top: 15px;
    padding: 0 20px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: min(1039px, 95%);
    height: 69px;
    margin-top: 15px;
    padding: 0 20px;
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
        width: 120px;
      }
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      img {
        width: 120px;
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
      gap: 30px;

      li {
        font-size: 16px;
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    ul {
      gap: 30px;

      li {
        font-size: 16px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  button:hover {
    background-color: #ffffff;
    color: #303bff;
  }

  @media (min-width: 1441px) {
    gap: 15px;

    p {
      font-size: 16px;
    }

    button {
      width: 100px;
      height: 34px;
      font-size: 14px;
    }
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    gap: 15px;

    p {
      font-size: 16px;
    }

    button {
      width: 100px;
      height: 34px;
      font-size: 14px;
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
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 27px;
  padding-top: 35px;

  @media (min-width: 1441px) {
    width: 90%;
    min-height: 500px;
    gap: 27px;
    padding-top: 35px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 90%;
    min-height: 500px;
    gap: 27px;
    padding-top: 35px;
  }

  h1 {
    font-weight: 700;
    font-size: 50px;
    line-height: 130%;
    color: #ffffff;
    text-align: center;
    width: 792px;

    @media (min-width: 1441px) {
      font-size: 50px;
      width: 792px;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      font-size: 50px;
      width: 792px;
    }
  }

  h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    width: 60%;
    text-align: center;
    color: #ffffff;

    @media (min-width: 1441px) {
      font-size: 20px;
      width: 60%;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      font-size: 20px;
      width: 60%;
    }
  }

  button {
    width: 224.66px;
    height: 41.98px;
    border-radius: 33px;
    border: 1.25px solid #ffffff;
    background-color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    color: #222222;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: #303bff;
    color: #ffffff;
    border-color: #303bff;
  }

  p {
    font-size: 16px;
    color: #ffffff;
    font-weight: 400;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    min-height: 400px;
    padding-top: 25px;
    gap: 20px;

    h1 {
      font-size: 40px;
      width: 90%;
    }

    h3 {
      font-size: 18px;
      width: 70%;
    }
  }

  @media (max-width: 480px) {
    min-height: 350px;
    padding-top: 20px;
    gap: 20px;
    margin-top: 30px;

    h1 {
      font-size: 28px;
      width: 95%;
    }

    h3 {
      font-size: 16px;
      width: 100%;
    }

    button {
      width: 200px;
      height: 40px;
      font-size: 14px;
    }

    p {
      font-size: 14px;
    }
  }
`;

const DesignHolder = styled.div`
  width: 100%;
  min-height: 15vh;
  display: flex;
  background-image: url(https://i.postimg.cc/bJNFLbND/mm-1-1.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 1441px) {
    width: 100%;
    min-height: 15vh;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 100%;
    min-height: 15vh;
  }

  @media (max-width: 768px) {
    min-height: 15vh;
  }

  @media (max-width: 480px) {
    min-height: 15vh;
    margin-top: auto;
  }
`;
