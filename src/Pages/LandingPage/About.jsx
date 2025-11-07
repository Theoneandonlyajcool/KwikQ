import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutContainer>
      <ImageHolder>
        <img
          src="https://i.postimg.cc/52pBHRyd/bca11ace958fa4ded05ff7d0925d5deb3ed90431.png"
          alt=""
        />
      </ImageHolder>
      <TextHolder>
        <h1>
          About <span>Us</span>
        </h1>
        <p>
          At <strong>KwikQ,</strong> we believe that time is too valuable to be
          wasted in long, disorganized queues. We built KwikQ to help businesses
          manage customer flow effortlessly reducing stress, confusion, and
          waiting frustration. Our goal is simple: to make every service
          experience faster, smarter, and more efficient. With features like
          real-time queue tracking, QR code check-ins, and instant
          notifications, KwikQ empowers businesses to deliver smooth and
          organized customer service without the chaos. Whether it's a bank,
          clinic, or service center, KwikQ transforms waiting lines into
          seamless experiences because great service starts with great order.
          <br />
          <br />
          Whether it's a bank, clinic, or service center, KwikQ transforms
          waiting lines into seamless experiences — because great service starts
          with great order.
        </p>
      </TextHolder>
    </AboutContainer>
  );
};

export default About;

export const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (min-width: 1441px) {
    width: 100%;
    min-height: 100vh;
    gap: 50px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 100%;
    min-height: 100vh;
    gap: 50px;
  }

  @media screen and (max-width: 360px) {
    flex-direction: column;
    gap: 30px;
    padding: 20px;
    min-height: auto;
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    padding: 30px;
    min-height: auto;
  }
`;

export const ImageHolder = styled.div`
  width: 471px;
  height: 423px;

  @media (min-width: 1441px) {
    width: 471px;
    height: 423px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 471px;
    height: 423px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (min-width: 1441px) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 360px) {
    width: 100%;
    max-width: 320px;
    height: 260px;
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    width: 90%;
    height: 320px;
  }
`;

export const TextHolder = styled.div`
  width: 698px;
  height: 457px;
  display: flex;
  flex-direction: column;
  gap: 23px;

  @media (min-width: 1441px) {
    width: 698px;
    height: 457px;
    gap: 23px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 698px;
    height: 457px;
    gap: 23px;
  }

  h1 {
    font-weight: 700;
    font-size: 45px;
    color: #222222;
    line-height: 220%;

    @media (min-width: 1441px) {
      font-size: 45px;
      line-height: 220%;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      font-size: 45px;
      line-height: 220%;
    }

    span {
      color: #303bff;
    }
  }

  p {
    font-size: 20px;
    line-height: 155%;
    color: #222222;
    font-weight: 400;

    @media (min-width: 1441px) {
      font-size: 20px;
      line-height: 155%;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      font-size: 20px;
      line-height: 155%;
    }
  }

  strong {
    color: #303bff;

    @media (min-width: 1441px) {
      color: #303bff;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      color: #303bff;
    }
  }

  @media screen and (max-width: 360px) {
    width: 100%;
    height: auto;
    text-align: center;

    h1 {
      font-size: 28px;
      line-height: 140%;
    }

    p {
      font-size: 14px;
      line-height: 150%;
    }
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    width: 90%;
    height: auto;
    text-align: center;

    h1 {
      font-size: 36px;
      line-height: 160%;
    }

    p {
      font-size: 16px;
      line-height: 150%;
    }
  }
`;
