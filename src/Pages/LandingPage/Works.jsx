import React from "react";
import styled from "styled-components";
import { IoIosPeople } from "react-icons/io";
import { BiTargetLock } from "react-icons/bi";
import { RiSendPlaneLine } from "react-icons/ri";
import { FaChartBar } from "react-icons/fa";

const Works = () => {
  return (
    <WorksContainer>
      <TopSection>
        <h1>
          How It <span>Works</span>
        </h1>
        <p>Get started in just 4 simple steps</p>
      </TopSection>
      <FirstSection>
        <div className="Textholder">
          <div className="circle" style={{ background: "#303BFF" }}>
            <IoIosPeople />
          </div>
          <h4>Add Customers Easily</h4>
          <p>Staff simply enters customer details to add them to the queue .</p>
        </div>

        <div className="Textholder">
          <div className="circle" style={{ background: "#22C55E" }}>
            <BiTargetLock />
          </div>
          <h4>Track Queue in Real Time</h4>
          <p>
            View the number of customers waiting, their positions, and estimated
            service times instantly.
          </p>
        </div>
      </FirstSection>
      <SecondSection>
        <div className="Textholder">
          <div className="circle" style={{ background: "#F59E0B" }}>
            <RiSendPlaneLine />
          </div>
          <h4>Serve and Move On </h4>
          <p>
            Mark customers as served, and the system automaticallyupdates the
            queue for the next in line.
          </p>
        </div>

        <div className="Textholder">
          <div className="circle" style={{ background: "#D6252C" }}>
            <FaChartBar />
          </div>
          <h4>Analyze and Improve</h4>
          <p>
            Access insightful analytics to understand wait times, staff
            performance, and peak hours.
          </p>
        </div>
      </SecondSection>
    </WorksContainer>
  );
};

export default Works;
const WorksContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-direction: column;

  @media screen and (max-width: 360px) {
    height: auto;
    gap: 40px;
    padding: 40px 0;
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    height: auto;
    gap: 50px;
    padding: 50px 0;
  }
`;

const TopSection = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 45px;
    color: #222222;
    line-height: 200%;

    span {
      color: #303bff;
    }
  }

  p {
    font-size: 20px;
    line-height: 28%;
    color: #4b5563;
    font-weight: 400;
  }

  @media screen and (max-width: 360px) {
    text-align: center;
    height: auto;

    h1 {
      font-size: 28px;
      line-height: 150%;
    }

    p {
      font-size: 14px;
      width: 90%;
      line-height: 140%;
    }
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    text-align: center;
    height: auto;

    h1 {
      font-size: 36px;
      line-height: 160%;
    }

    p {
      font-size: 16px;
      width: 80%;
      line-height: 150%;
    }
  }
`;

const FirstSection = styled.div`
  width: 90%;
  height: 216px;
  display: flex;
  gap: 210px;
  justify-content: center;

  .Textholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    .circle {
      width: 80px;
      height: 80px;
      display: flex;
      font-size: 30px;
      font-weight: 700;
      align-items: center;
      justify-content: center;
      color: white;
      border-radius: 9999px;
    }

    h4 {
      font-weight: 600;
      font-size: 20px;
      line-height: 140%;
    }

    p {
      width: 350px;
      text-align: center;
      color: #222222;
      line-height: 140%;
    }
  }

  @media screen and (max-width: 360px) {
    flex-direction: column;
    gap: 40px;
    height: auto;

    .Textholder {
      .circle {
        width: 60px;
        height: 60px;
        font-size: 22px;
      }

      h4 {
        font-size: 16px;
      }

      p {
        width: 90%;
        font-size: 14px;
      }
    }
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 80px;
    height: auto;

    .Textholder {
      .circle {
        width: 70px;
        height: 70px;
        font-size: 25px;
      }

      h4 {
        font-size: 18px;
      }

      p {
        width: 80%;
        font-size: 15px;
      }
    }
  }
`;

const SecondSection = styled.div`
  width: 90%;
  height: 210px;
  display: flex;
  gap: 210px;
  justify-content: center;

  .Textholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    .circle {
      width: 80px;
      height: 80px;
      display: flex;
      font-size: 30px;
      font-weight: 700;
      align-items: center;
      justify-content: center;
      color: white;
      background-color: white;
      border-radius: 9999px;
    }

    h4 {
      font-weight: 600;
      font-size: 20px;
      line-height: 140%;
    }

    p {
      width: 350px;
      text-align: center;
      color: #222222;
      line-height: 120%;
    }
  }

  @media screen and (max-width: 360px) {
    flex-direction: column;
    gap: 40px;
    height: auto;

    .Textholder {
      .circle {
        width: 60px;
        height: 60px;
        font-size: 22px;
      }

      h4 {
        font-size: 16px;
      }

      p {
        width: 90%;
        font-size: 14px;
      }
    }
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 80px;
    height: auto;

    .Textholder {
      .circle {
        width: 70px;
        height: 70px;
        font-size: 25px;
      }

      h4 {
        font-size: 18px;
      }

      p {
        width: 80%;
        font-size: 15px;
      }
    }
  }
`;
