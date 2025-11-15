import React, { useState } from "react";
import styled from "styled-components";
import { TiArrowRight } from "react-icons/ti";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiProfileLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { SlRocket } from "react-icons/sl";
import { MdCancel } from "react-icons/md";

const MonthlyPrice = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const starterPrice = isAnnual ? "₦144,000/year" : "₦15,000/month";
  const professionalPrice = isAnnual ? "₦336,000/year" : "₦35,000/month";

  return (
    <MonthlyPriceContainer>
      <MonthlyWrapper>
        <div className="Btn_holder">
          <button
            style={{
              background: !isAnnual ? "#ffffff" : "transparent",
              color: !isAnnual ? "#303bff" : "#ffffff",
            }}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </button>

          <button
            style={{
              background: isAnnual ? "#ffffff" : "transparent",
              color: isAnnual ? "#303bff" : "#ffffff",
            }}
            onClick={() => setIsAnnual(true)}
          >
            Annual
          </button>
        </div>

        <small>Save 20% on annual billing</small>
      </MonthlyWrapper>

      <MonthlyCardsHolder>
        <Cards>
          <div className="Top">
            <div className="Icons_holder">
              <div className="Icons">
                <FaUserGroup />
              </div>
            </div>
            <h2>Starter</h2>
            <p>Perfect for small businesses getting started</p>
          </div>
          <div className="price">
            <h4>{starterPrice}</h4>
          </div>
          <button>
            Start free Trial <TiArrowRight />
          </button>
          <div className="ListHolder">
            <ul>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Up to 5 service queue points
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                2,000 monthly queue entries
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Email notifications
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Basic analytics
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                QR code access
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Standard support
              </li>
              <li style={{ color: "#eaebff" }}>
                <MdCancel style={{ color: "#303fbe" }} />
                Priority queue management
              </li>
              <li style={{ color: "#eaebff" }}>
                <MdCancel style={{ color: "#303fbe" }} />
                Advanced analytics & reports
              </li>
              <li style={{ color: "#eaebff" }}>
                <MdCancel style={{ color: "#303fbe" }} />
                Custom branding
              </li>
              <li style={{ color: "#eaebff" }}>
                <MdCancel style={{ color: "#303fbe" }} />
                API access
              </li>
              <li style={{ color: "#eaebff" }}>
                <MdCancel style={{ color: "#303fbe" }} />
                Dedicated account manager
              </li>
            </ul>
          </div>
        </Cards>

        <MiddleCard>
          <div className="Top">
            <div className="Icons_holder">
              <div className="Icons">
                <RiProfileLine />
              </div>
              <small>Most Popular</small>
            </div>
            <h2>Professional</h2>
            <p>Ideal for growing organizations</p>
          </div>
          <div className="price">
            <h4>{professionalPrice}</h4>
          </div>
          <button>
            Start free Trial <TiArrowRight />
          </button>
          <div className="ListHolder">
            <ul>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Up to 2 service queue points
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                500 monthly queue entries
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Email notifications
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Basic analytics
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                QR code access
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Standard support
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Priority queue management
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Advanced analytics & reports
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Custom branding
              </li>
              <li style={{ color: "#eaebff" }}>
                <MdCancel style={{ color: "#303fbe" }} />
                API access
              </li>
              <li style={{ color: "#eaebff" }}>
                <MdCancel style={{ color: "#303fbe" }} />
                Dedicated account manager
              </li>
            </ul>
          </div>
        </MiddleCard>

        <Cards>
          <div className="Top">
            <div className="Icons_holder">
              <div className="Icons">
                <SlRocket />
              </div>
            </div>
            <h2>Enterprise</h2>
            <p>For large organizations with complex needs</p>
          </div>
          <div className="price">
            <h4>Custom Pricing</h4>
          </div>
          <button>
            Contact Sales <TiArrowRight />
          </button>
          <div className="ListHolder">
            <ul>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Unlimited service points
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Unlimited queue entries
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Email notifications
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Basic analytics
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                QR code access
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Standard support
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Priority queue management
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Advanced analytics & reports
              </li>
              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Custom branding
              </li>

              <li>
                <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                Dedicated account manager
              </li>
            </ul>
          </div>
        </Cards>
      </MonthlyCardsHolder>
    </MonthlyPriceContainer>
  );
};

export default MonthlyPrice;
const MonthlyPriceContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f7ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    min-height: auto;
    padding: 30px 15px;
  }
`;

const MonthlyWrapper = styled.div`
  width: 99%;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  .Btn_holder {
    width: 339px;
    height: 58px;
    border-radius: 40px;
    background-color: #303bff;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: 165px;
      height: 53px;
      border-radius: 40px;
      border: none;
      cursor: pointer;
      outline: none;
      font-size: 20px;
      font-weight: 600;
      color: #ffffff;
    }
  }
  small {
    font-size: 12px;
    font-weight: 400;
    color: #222222;
    line-height: 16px;
    background-color: #eaebff;
    border-radius: 8px;
    padding: 2px 8px;
    color: #303bff;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: 15vh;
    gap: 12px;
    padding: 0 20px;

    .Btn_holder {
      width: 300px;
      height: 52px;

      button {
        width: 145px;
        height: 47px;
        font-size: 18px;
      }
    }
  }

  @media (max-width: 480px) {
    min-height: 12vh;
    gap: 10px;
    padding: 0 15px;

    .Btn_holder {
      width: 280px;
      height: 50px;

      button {
        width: 135px;
        height: 45px;
        font-size: 16px;
      }
    }
  }
`;

const MonthlyCardsHolder = styled.div`
  width: 99%;
  height: 1103px;
  display: flex;
  margin-top: 80px;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-top: 40px;
    gap: 25px;
    width: 100%;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-top: 30px;
    gap: 20px;
    width: 100%;
    padding: 0 15px;
  }
`;

const Cards = styled.div`
  width: 28%;
  min-height: 865px;
  height: 70vh;
  border-radius: 24px;
  border: 1.25px solid #d0d0d0;
  display: flex;
  gap: 50px;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;

  .Top {
    width: 333px;
    height: 125.94px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .Icons_holder {
      width: 100%;
      height: 50px;
      display: flex;

      .Icons {
        width: 50px;
        height: 50px;
        background-color: #303bff;
        border-radius: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        color: #ffffff;
      }

      small {
        font-size: 13px;
        font-weight: 600;
        color: #ffffff;
        background-color: #303bff;
        border-radius: 8px;
        height: 26px;
        line-height: 180%;
        padding: 2px 8px;
        text-align: center;
      }
    }

    h2 {
      font-size: 31px;
      font-weight: 600;
      color: #222222;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      color: #222222;
      line-height: 20px;
    }
  }

  .price {
    display: flex;
    align-items: center;
    width: 333px;

    h4 {
      font-size: 20px;
      font-weight: 600;
      color: #101828;
      line-height: 140%;
    }
  }

  button {
    width: 333px;
    height: 50.37px;
    background-color: #ffffff;
    border-radius: 14px;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    color: #222222;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1.25px solid #d0d0d0;
  }

  .ListHolder {
    width: 333px;
    height: 447px;
    display: flex;
    flex-direction: column;
    gap: 17px;

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 17px;
    }

    li {
      font-size: 16px;
      font-weight: 400;
      color: #222222;
      display: flex;
      align-items: center;
      gap: 10px;
      line-height: 24px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    min-height: auto;
    height: auto;
    gap: 35px;
    padding: 30px 25px;
    margin-bottom: 10px;

    .Top,
    .price,
    button,
    .ListHolder {
      width: 100%;
    }

    .Top {
      height: auto;

      h2 {
        font-size: 28px;
      }

      p {
        font-size: 15px;
      }
    }

    button {
      height: 55px;
      font-size: 17px;
    }

    .ListHolder {
      height: auto;

      li {
        font-size: 15px;
        line-height: 22px;
      }
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    min-height: auto;
    height: auto;
    gap: 30px;
    padding: 25px 20px;
    border-radius: 20px;

    .Top {
      h2 {
        font-size: 26px;
      }

      p {
        font-size: 14px;
      }
    }

    button {
      height: 50px;
      font-size: 16px;
    }

    .ListHolder {
      li {
        font-size: 14px;
      }
    }
  }
`;

const MiddleCard = styled.div`
  width: 30%;
  min-height: 900px;
  height: 70vh;
  border-radius: 24px;
  border: 1.25px solid #303bff;
  border-top: 4px solid #303bff;
  margin-top: -35px;
  display: flex;
  gap: 50px;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;

  .Top {
    width: 333px;
    height: 125.94px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .Icons_holder {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;

      .Icons {
        width: 50px;
        height: 50px;
        background-color: #303bff;
        border-radius: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        color: #ffffff;
      }

      small {
        font-size: 13px;
        font-weight: 600;
        color: #ffffff;
        background-color: #303bff;
        border-radius: 8px;
        height: 26px;
        line-height: 180%;
        padding: 2px 8px;
        text-align: center;
      }
    }

    h2 {
      font-size: 31px;
      font-weight: 600;
      color: #222222;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      color: #222222;
      line-height: 20px;
    }
  }

  .price {
    display: flex;
    align-items: center;
    width: 333px;

    h4 {
      font-size: 20px;
      font-weight: 600;
      color: #101828;
      line-height: 140%;
    }
  }

  button {
    width: 333px;
    height: 50.37px;
    background-color: #303bff;
    border-radius: 14px;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .ListHolder {
    width: 333px;
    height: 447px;
    display: flex;
    flex-direction: column;
    gap: 17px;

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 17px;
    }

    li {
      font-size: 16px;
      font-weight: 400;
      color: #222222;
      display: flex;
      align-items: center;
      gap: 10px;
      line-height: 24px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    min-height: auto;
    height: auto;
    gap: 35px;
    padding: 30px 25px;
    margin-top: 0;
    order: -1;

    .Top,
    .price,
    button,
    .ListHolder {
      width: 100%;
    }

    .Top {
      height: auto;

      h2 {
        font-size: 28px;
      }

      p {
        font-size: 15px;
      }
    }

    button {
      height: 55px;
      font-size: 17px;
    }

    .ListHolder {
      height: auto;

      li {
        font-size: 15px;
        line-height: 22px;
      }
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    min-height: auto;
    height: auto;
    gap: 30px;
    padding: 25px 20px;
    border-radius: 20px;

    .Top {
      h2 {
        font-size: 26px;
      }

      p {
        font-size: 14px;
      }
    }

    button {
      height: 50px;
      font-size: 16px;
    }

    .ListHolder {
      li {
        font-size: 14px;
      }
    }
  }
`;
