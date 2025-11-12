import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.aside`
  width: ${(props) => (props.collapsed ? "72px" : "240px")};
  background-color: #0c1a32;
  color: #fff;
  font-family: inter, sans-serif;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
`;
export const Logo = styled.div`
  width: 100%;
  height: 15%;
  /* background: red; */
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.1);
  font-family: inter, sans-serif;
  font-weight: bold;
  /* padding: 10px; */
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
    /* background: red; */
    padding: 10px;

    .logoholder {
      width: 68%;
      height: 60%;
      /* background: green; */
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
  /* background: blueviolet; */
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
  /* background: red; */
  padding: 0px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;

  .orgholder {
    width: 100%;
    height: 60%;
    /* background: green; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .avater {
      width: 22%;
      height: 55%;
      border-radius: 50%;
      /* background: pink; */
      background: linear-gradient(90deg, #303bff 0%, #96f7e4 100%);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .textorg {
      width: 70%;
      height: 55%;
      /* background: pink; */
      display: flex;
      justify-content: center;
      /* align-items: center; */
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
