import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

const GetStarted = () => {
  return (
    <GetStartedBody>
      <GetStartedWrapper>
        <HeroText>
          <h1>Get rid of long line and wait times</h1>
          <button>
            Get started <MdKeyboardArrowRight />{" "}
          </button>
        </HeroText>
      </GetStartedWrapper>
    </GetStartedBody>
  );
};

export default GetStarted;

const GetStartedBody = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  @media screen and (max-width: 360px) {
    height: auto;
    min-height: 100vh;
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    height: auto;
  }
`;

const GetStartedWrapper = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 80px;
  color: #ffffff;
  overflow: hidden;
  background-image: url(https://i.postimg.cc/t4Tf9pnr/section.png);
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 360px) {
    height: auto;
    padding: 40px 20px;
    gap: 25px;
    text-align: center;
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    height: auto;
    padding: 60px 40px;
    gap: 30px;
    text-align: center;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  h1 {
    font-size: 96px;
    font-weight: 600;
    line-height: 100%;
    width: 70%;
  }

  button {
    width: 265px;
    height: 60px;
    background-color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    color: #222222;
    border-radius: 20px;
    border: none;
    gap: 5px;
    line-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    line-height: 100%;
    transition: all 0.3s ease;

    &:hover {
      background-color: #14196b;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    .arrow-icon {
      font-size: 25px;
      transition: transform 0.3s ease;
    }

    &:hover .arrow-icon {
      transform: translateX(4px);
    }
  }

  @media screen and (max-width: 360px) {
    align-items: center;
    gap: 30px;

    h1 {
      font-size: 36px;
      width: 100%;
      line-height: 110%;
      text-align: center;
    }
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    align-items: center;
    gap: 40px;

    h1 {
      font-size: 60px;
      width: 90%;
      line-height: 110%;
      text-align: center;
    }

    button {
      width: 230px;
      height: 55px;
      font-size: 18px;
      border-radius: 18px;
    }
  }
`;
