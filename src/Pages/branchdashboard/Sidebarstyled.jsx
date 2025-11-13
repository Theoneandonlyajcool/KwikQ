import styled from "styled-components";
import { NavLink } from "react-router-dom";

const device = {
  android: "(min-width: 360px)",
  iphone: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
};

export const SidebarContainer = styled.aside`
  width: ${(props) => (props.collapsed ? "72px" : "240px")};
  background: #0c1a32;
  color: #fff;
  font-family: inter, sans-serif;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease, transform 0.3s ease;
  position: relative;
  z-index: 1000;

  @media (max-width: 1023px) {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    transform: ${(props) =>
      props.mobileOpen ? "translateX(0)" : "translateX(-100%)"};
    width: 240px;
    box-shadow: ${(props) =>
      props.mobileOpen ? "2px 0 10px rgba(0,0,0,0.3)" : "none"};
  }
`;

export const ToggleButton = styled.button`
  position: fixed;
  left: ${(props) => (props.mobileOpen ? "240px" : "0px")};
  top: 20px;
  width: 40px;
  height: 40px;
  background: linear-gradient(90deg, #303bff 0%, #96f7e4 100%);
  border: none;
  border-radius: ${(props) =>
    props.mobileOpen ? "0 8px 8px 0" : "0 8px 8px 0"};
  color: #fff;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: left 0.3s ease;
  z-index: 1001;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 1023px) {
    display: flex;
  }

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${(props) => (props.show ? "1" : "0")};
  pointer-events: ${(props) => (props.show ? "all" : "none")};
  transition: opacity 0.3s ease;

  @media (max-width: 1023px) {
    display: block;
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 15%;
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.1);
  font-family: inter, sans-serif;
  font-weight: bold;
  color: #fff;
  margin-bottom: 15px;
  font-family: inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 16.01px;
  line-height: 24.01px;
  letter-spacing: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  .logoContainer {
    width: 85%;
    height: 90%;
    padding: 10px;

    .logoholder {
      width: 68%;
      height: 60%;
      position: relative;

      .imagelogo {
        width: 100%;
        height: 100%;
        object-fit: contain;
        position: absolute;
        left: 0px;
        top: 0px;
        right: 0px;
      }
    }
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`;

export const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  margin: 0 12px;
  font-size: 15px;

  &.active {
    background: linear-gradient(90deg, #303bff 0%, #96f7e4 100%);
    color: #fff;
  }
`;

export const MenuItem2 = styled(NavLink)`
  width: 90%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 22px 20px;
  color: black;
  text-decoration: none;
  border-radius: 8px;
  margin: 0 12px;
  font-size: 15px;
  background: #fff;

  &.active {
    background: linear-gradient(90deg, #303bff 0%, #96f7e4 100%);
    color: #fff;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 25%;
  padding: 0px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;

  .orgholder {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .avater {
      width: 22%;
      height: 55%;
      border-radius: 50%;
      background: linear-gradient(90deg, #303bff 0%, #96f7e4 100%);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .textorg {
      width: 70%;
      height: 55%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 5px;

      .supertext {
        font-family: inter;
        font-weight: 400;
        font-style: Regular;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0px;
        color: #99a1af;
      }

      .admintext {
        font-family: inter;
        font-weight: 400;
        font-style: Regular;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0px;
        color: #ffffff;

        .shield {
          font-size: 12px;
        }
      }
    }
  }
`;