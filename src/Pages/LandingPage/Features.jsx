import React from "react";
import styled from "styled-components";
import { CardsDisplay } from "./FeaturesCards";

const Features = () => {
  return (
    <FeaturesContainer>
      <FeaturesWrapper>
        <div className="main">
          <h4>Key Features Of Our Queue System</h4>
          <p>
            Explore the powerful features of KwikQ Queue Management system
            designed to streamline operations, improve service speed, and
            enhance customer satisfaction
          </p>
        </div>

        <CardHolder>
          {CardsDisplay?.map((item) => (
            <div className="Cards" key={item?.id}>
              <div
                className="icon"
                style={{ background: item.backgroundcolor }}
              >
                {item.icons}
              </div>
              <div className="text">
                <h3>{item?.Title}</h3>
                <p>{item?.Description}</p>
              </div>
            </div>
          ))}
        </CardHolder>
      </FeaturesWrapper>
    </FeaturesContainer>
  );
};

export default Features;
const FeaturesContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaedff;

  @media screen and (max-width: 360px) {
    height: auto;
    padding: 20px 0;
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    height: auto;
    padding: 30px 0;
  }
`;

const FeaturesWrapper = styled.div`
  width: 90%;
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .main {
    width: 843px;
    height: 154px;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 10px;

    h4 {
      font-weight: 700;
      font-size: 45px;
      color: #222222;
    }

    p {
      font-size: 20px;
      font-weight: 500;
      width: 80%;
      line-height: 140%;
    }
  }

  @media screen and (max-width: 360px) {
    height: auto;

    .main {
      width: 100%;
      height: auto;
      gap: 8px;

      h4 {
        font-size: 28px;
      }

      p {
        font-size: 14px;
        width: 95%;
      }
    }
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    height: auto;

    .main {
      width: 100%;
      height: auto;

      h4 {
        font-size: 36px;
      }

      p {
        font-size: 16px;
        width: 90%;
      }
    }
  }
`;

const CardHolder = styled.div`
  width: 100%;
  height: 398px;
  gap: 11px;
  flex-wrap: wrap;
  min-height: max-content;
  justify-content: center;
  align-items: center;
  display: flex;

  .Cards {
    width: 295.3px;
    height: 326px;
    display: flex;
    flex-direction: column;
    padding: 15px 10px;
    gap: 13px;
    border-radius: 10px;
    background-color: #ffffff;

    .icon {
      width: 50.57px;
      height: 60px;
      padding: 10px;
      margin-left: 25px;
      display: flex;
      border-radius: 14.45px;
      align-items: center;
      justify-content: center;
      font-size: 25px;
      color: white;
      background-color: red;
    }

    .text {
      width: 100%;
      height: 100%;
      min-height: max-content;
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;

      h3 {
        font-weight: 600;
        font-size: 18px;
        width: 80%;
        line-height: 140%;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
        width: 80%;
      }
    }
  }

  @media screen and (max-width: 360px) {
    height: auto;
    gap: 15px;
    padding: 20px 0;

    .Cards {
      width: 90%;
      height: auto;
      padding: 20px 15px;

      .icon {
        margin-left: 0;
      }

      .text {
        h3 {
          font-size: 16px;
          width: 100%;
        }

        p {
          font-size: 14px;
          width: 100%;
        }
      }
    }
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    height: auto;
    gap: 20px;
    padding: 30px 0;

    .Cards {
      width: 45%;
      height: auto;
      padding: 20px 15px;

      .text {
        h3 {
          font-size: 17px;
        }

        p {
          font-size: 15px;
        }
      }
    }
  }
`;
