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

  @media (max-width: 768px) {
    padding: 30px 0;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 20px 0;
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

  @media (max-width: 768px) {
    gap: 30px;
    padding: 0 20px;

    h1 {
      font-size: 38px;
      line-height: 150%;
      text-align: center;
      width: 100%;
    }

    .cards {
      width: calc(50% - 15px);
      min-height: 220px;
      gap: 15px;

      .Text_holder {
        h3 {
          font-size: 22px;
          line-height: 150%;
        }

        p {
          width: 100%;
          font-size: 16px;
          line-height: 120%;
        }
      }
    }
  }

  @media (max-width: 480px) {
    gap: 20px;
    padding: 0 15px;

    h1 {
      font-size: 28px;
      line-height: 130%;
    }

    .cards {
      width: 100%;
      max-width: 350px;
      min-height: 200px;
      padding: 15px;

      .Text_holder {
        gap: 8px;

        h3 {
          font-size: 20px;
          line-height: 130%;
          text-align: center;
        }

        p {
          width: 100%;
          font-size: 14px;
          line-height: 120%;
        }
      }
    }
  }
`;
