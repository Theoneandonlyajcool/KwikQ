import React from "react";
import styled from "styled-components";
import { KeyFeaturesCards } from "./KeyFeaturesCard";

const KeyFeatures = () => {
  return (
    <KeyFeaturesWraper>
      <KeyFeaturesHolder>
        <h1>
          Key Features That Drives <span>Results</span>
        </h1>
        {KeyFeaturesCards?.map((item) => (
          <div className="cards" key={item.id}>
            <img src={item?.Image} alt="" />
            <div className="Text_holder">
              <h3>{item?.title}</h3>
              <p>{item?.details}</p>
            </div>
          </div>
        ))}
      </KeyFeaturesHolder>
    </KeyFeaturesWraper>
  );
};

export default KeyFeatures;

const KeyFeaturesWraper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  @media screen and (max-width: 360px) {
    padding: 30px 10px;
    min-height: auto;
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    padding: 40px 20px;
    min-height: auto;
  }
`;

const KeyFeaturesHolder = styled.div`
  width: 100%;
  max-width: 967px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 59px;
  justify-content: center;

  h1 {
    font-weight: 600;
    font-size: 45px;
    color: #222222;
    line-height: 200%;

    span {
      color: #303bff;
    }
  }

  .cards {
    width: 430px;
    min-height: 257px;
    background-color: #ffffff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

    img {
      width: 50px;
      height: 50px;
      object-fit: contain;
    }

    .Text_holder {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      h3 {
        font-weight: 600;
        font-size: 25px;
        line-height: 200%;
        color: #000000;
      }

      p {
        width: 340px;
        font-weight: 400;
        font-size: 18px;
        line-height: 130%;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 360px) {
    gap: 30px;
    flex-direction: column;

    h1 {
      font-size: 28px;
      text-align: center;
      line-height: 140%;
    }

    .cards {
      width: 100%;
      max-width: 320px;
      padding: 15px;
      min-height: 230px;

      img {
        width: 40px;
        height: 40px;
      }

      .Text_holder {
        h3 {
          font-size: 18px;
          line-height: 150%;
        }

        p {
          width: 90%;
          font-size: 14px;
          line-height: 140%;
        }
      }
    }
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    gap: 40px;

    h1 {
      font-size: 36px;
      text-align: center;
      line-height: 160%;
    }

    .cards {
      width: 90%;
      max-width: 380px;
      min-height: 240px;

      img {
        width: 45px;
        height: 45px;
      }

      .Text_holder {
        h3 {
          font-size: 20px;
        }

        p {
          width: 90%;
          font-size: 15px;
        }
      }
    }
  }
`;
