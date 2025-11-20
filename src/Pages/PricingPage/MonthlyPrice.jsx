import React, { useState } from "react";
import styled from "styled-components";
import { TiArrowRight } from "react-icons/ti";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiProfileLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { SlRocket } from "react-icons/sl";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const MonthlyPrice = () => {
  const nav = useNavigate();

  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      description: "Perfect for small businesses getting started",
      icon: FaUserGroup,
      price: {
        monthly: "₦15,000/month",
        annual: "₦144,000/year",
      },
      buttonText: "Start free Trial",
      isPopular: false,
      features: [
        { text: "Up to 5 service queue points", included: true },
        { text: "2,000 monthly queue entries", included: true },
        { text: "Email notifications", included: true },
        { text: "Basic analytics", included: true },
        { text: "QR code access", included: true },
        { text: "Standard support", included: true },
        { text: "Priority queue management", included: false },
        { text: "Advanced analytics & reports", included: false },
        { text: "Custom branding", included: false },
        { text: "API access", included: false },
        { text: "Dedicated account manager", included: false },
      ],
    },
    {
      id: 2,
      name: "Professional",
      description: "Ideal for growing organizations",
      icon: RiProfileLine,
      price: {
        monthly: "₦35,000/month",
        annual: "₦336,000/year",
      },
      buttonText: "Start free Trial",
      isPopular: true,
      features: [
        { text: "Up to 2 service queue points", included: true },
        { text: "500 monthly queue entries", included: true },
        { text: "Email notifications", included: true },
        { text: "Basic analytics", included: true },
        { text: "QR code access", included: true },
        { text: "Standard support", included: true },
        { text: "Priority queue management", included: true },
        { text: "Advanced analytics & reports", included: true },
        { text: "Custom branding", included: true },
        { text: "API access", included: false },
        { text: "Dedicated account manager", included: false },
      ],
    },
    {
      id: 3,
      name: "Enterprise",
      description: "For large organizations with complex needs",
      icon: SlRocket,
      price: {
        custom: "Custom Pricing",
      },
      buttonText: "Contact Sales",
      isPopular: false,
      features: [
        { text: "Unlimited service points", included: true },
        { text: "Unlimited queue entries", included: true },
        { text: "Email notifications", included: true },
        { text: "Basic analytics", included: true },
        { text: "QR code access", included: true },
        { text: "Standard support", included: true },
        { text: "Priority queue management", included: true },
        { text: "Advanced analytics & reports", included: true },
        { text: "Custom branding", included: true },
        { text: "Dedicated account manager", included: true },
      ],
    },
  ];

const token = localStorage.getItem("User");
const Role = localStorage.getItem("UserRole")
const setRole = Role

const checktoken =()=>{
    if(setRole == "individual" && token ){
      nav("/admin_dashboard")
    }
    else if(setRole == "multi" && token ){
      nav("/dashboard/")
    }
    else if(!setRole && !token){
      nav("/sign_up/")
    }
  }

  const getPriceDisplay = (plan) => {
    if (plan.price.custom) {
      return plan.price.custom;
    }
    return isAnnual ? plan.price.annual : plan.price.monthly;
  };

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
        {pricingPlans.map((plan) => {
          const CardComponent = plan.isPopular ? MiddleCard : Cards;
          const IconComponent = plan.icon;

          return (
            <CardComponent key={plan.id}>
              <div className="Top">
                <div className="Icons_holder">
                  <div className="Icons">
                    <IconComponent />
                  </div>
                  {plan.isPopular && <small>Most Popular</small>}
                </div>
                <h2>{plan.name}</h2>
                <p>{plan.description}</p>
              </div>
              <div className="price">
                <h4>{getPriceDisplay(plan)}</h4>
              </div>
              <button onClick={() => checktoken()}>
                {plan.buttonText} <TiArrowRight />
              </button>
              <div className="ListHolder">
                <ul>
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      style={{
                        color: feature.included ? "#222222" : "#eaebff",
                      }}
                    >
                      {feature.included ? (
                        <IoIosCheckmarkCircle style={{ color: "#303fbe" }} />
                      ) : (
                        <MdCancel style={{ color: "#303fbe" }} />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
            </CardComponent>
          );
        })}
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

  @media (min-width: 1441px) {
    width: 100%;
    min-height: 100vh;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 100%;
    min-height: 100vh;
  }

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

  @media (min-width: 1441px) {
    width: 99%;
    min-height: 20vh;
    gap: 15px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 99%;
    min-height: 20vh;
    gap: 15px;
  }

  .Btn_holder {
    width: 339px;
    height: 58px;
    border-radius: 40px;
    background-color: #303bff;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1441px) {
      width: 339px;
      height: 58px;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      width: 339px;
      height: 58px;
    }

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

      @media (min-width: 1441px) {
        width: 165px;
        height: 53px;
        font-size: 20px;
      }

      @media (min-width: 1025px) and (max-width: 1440px) {
        width: 165px;
        height: 53px;
        font-size: 20px;
      }
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

    @media (min-width: 1441px) {
      font-size: 12px;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      font-size: 12px;
    }
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

  @media (min-width: 1441px) {
    width: 99%;
    height: 1103px;
    margin-top: 80px;
    gap: 20px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 99%;
    height: 1103px;
    margin-top: 80px;
    gap: 20px;
  }

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

  @media (min-width: 1441px) {
    width: 28%;
    min-height: 865px;
    height: 70vh;
    gap: 50px;
    padding-top: 30px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 28%;
    min-height: 865px;
    height: 70vh;
    gap: 50px;
    padding-top: 30px;
  }

  .Top {
    width: 333px;
    height: 125.94px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 1441px) {
      width: 333px;
      height: 125.94px;
      gap: 10px;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      width: 333px;
      height: 125.94px;
      gap: 10px;
    }

    .Icons_holder {
      width: 100%;
      height: 50px;
      display: flex;

      @media (min-width: 1441px) {
        width: 100%;
        height: 50px;
      }

      @media (min-width: 1025px) and (max-width: 1440px) {
        width: 100%;
        height: 50px;
      }

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

        @media (min-width: 1441px) {
          width: 50px;
          height: 50px;
          font-size: 24px;
        }

        @media (min-width: 1025px) and (max-width: 1440px) {
          width: 50px;
          height: 50px;
          font-size: 24px;
        }
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

        @media (min-width: 1441px) {
          font-size: 13px;
        }

        @media (min-width: 1025px) and (max-width: 1440px) {
          font-size: 13px;
        }
      }
    }

    h2 {
      font-size: 31px;
      font-weight: 600;
      color: #222222;

      @media (min-width: 1441px) {
        font-size: 31px;
      }

      @media (min-width: 1025px) and (max-width: 1440px) {
        font-size: 31px;
      }
    }
    p {
      font-size: 16px;
      font-weight: 400;
      color: #222222;
      line-height: 20px;

      @media (min-width: 1441px) {
        font-size: 16px;
      }

      @media (min-width: 1025px) and (max-width: 1440px) {
        font-size: 16px;
      }
    }
  }

  .price {
    display: flex;
    align-items: center;
    width: 333px;

    @media (min-width: 1441px) {
      width: 333px;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      width: 333px;
    }

    h4 {
      font-size: 20px;
      font-weight: 600;
      color: #101828;
      line-height: 140%;

      @media (min-width: 1441px) {
        font-size: 20px;
      }

      @media (min-width: 1025px) and (max-width: 1440px) {
        font-size: 20px;
      }
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

    @media (min-width: 1441px) {
      width: 333px;
      height: 50.37px;
      font-size: 16px;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      width: 333px;
      height: 50.37px;
      font-size: 16px;
    }
  }

  .ListHolder {
    width: 333px;
    height: 447px;
    display: flex;
    flex-direction: column;
    gap: 17px;

    @media (min-width: 1441px) {
      width: 333px;
      height: 447px;
      gap: 17px;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      width: 333px;
      height: 447px;
      gap: 17px;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 17px;

      @media (min-width: 1441px) {
        gap: 17px;
      }

      @media (min-width: 1025px) and (max-width: 1440px) {
        gap: 17px;
      }
    }

    li {
      font-size: 16px;
      font-weight: 400;
      color: #222222;
      display: flex;
      align-items: center;
      gap: 10px;
      line-height: 24px;

      @media (min-width: 1441px) {
        font-size: 16px;
      }

      @media (min-width: 1025px) and (max-width: 1440px) {
        font-size: 16px;
      }
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

  @media (min-width: 1441px) {
    width: 30%;
    min-height: 900px;
    height: 70vh;
    gap: 50px;
    padding-top: 30px;
    margin-top: -35px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 30%;
    min-height: 900px;
    height: 70vh;
    gap: 50px;
    padding-top: 30px;
    margin-top: -35px;
  }

  .Top {
    width: 333px;
    height: 125.94px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 1441px) {
      width: 333px;
      height: 125.94px;
      gap: 10px;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      width: 333px;
      height: 125.94px;
      gap: 10px;
    }

    .Icons_holder {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;

      @media (min-width: 1441px) {
        width: 100%;
        height: 50px;
      }

      @media (min-width: 1025px) and (max-width: 1440px) {
        width: 100%;
        height: 50px;
      }

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

        @media (min-width: 1441px) {
          width: 50px;
          height: 50px;
          font-size: 24px;
        }

        @media (min-width: 1025px) and (max-width: 1440px) {
          width: 50px;
          height: 50px;
          font-size: 24px;
        }
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

        @media (min-width: 1441px) {
          font-size: 13px;
        }

        @media (min-width: 1025px) and (max-width: 1440px) {
          font-size: 13px;
        }
      }
    }

    h2 {
      font-size: 31px;
      font-weight: 600;
      color: #222222;

      @media (min-width: 1441px) {
        font-size: 31px;
      }

      @media (min-width: 1025px) and (max-width: 1440px) {
        font-size: 31px;
      }
    }
    p {
      font-size: 16px;
      font-weight: 400;
      color: #222222;
      line-height: 20px;

      @media (min-width: 1441px) {
        font-size: 16px;
      }

      @media (min-width: 1025px) and (max-width: 1440px) {
        font-size: 16px;
      }
    }
  }

  .price {
    display: flex;
    align-items: center;
    width: 333px;

    @media (min-width: 1441px) {
      width: 333px;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      width: 333px;
    }

    h4 {
      font-size: 20px;
      font-weight: 600;
      color: #101828;
      line-height: 140%;

      @media (min-width: 1441px) {
        font-size: 20px;
      }

      @media (min-width: 1025px) and (max-width: 1440px) {
        font-size: 20px;
      }
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

    @media (min-width: 1441px) {
      width: 333px;
      height: 50.37px;
      font-size: 16px;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      width: 333px;
      height: 50.37px;
      font-size: 16px;
    }
  }

  .ListHolder {
    width: 333px;
    height: 447px;
    display: flex;
    flex-direction: column;
    gap: 17px;

    @media (min-width: 1441px) {
      width: 333px;
      height: 447px;
      gap: 17px;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      width: 333px;
      height: 447px;
      gap: 17px;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 17px;

      @media (min-width: 1441px) {
        gap: 17px;
      }

      @media (min-width: 1025px) and (max-width: 1440px) {
        gap: 17px;
      }
    }

    li {
      font-size: 16px;
      font-weight: 400;
      color: #222222;
      display: flex;
      align-items: center;
      gap: 10px;
      line-height: 24px;

      @media (min-width: 1441px) {
        font-size: 16px;
      }

      @media (min-width: 1025px) and (max-width: 1440px) {
        font-size: 16px;
      }
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
