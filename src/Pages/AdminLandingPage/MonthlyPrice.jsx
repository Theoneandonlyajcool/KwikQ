import React, { useState } from "react";
import { TiArrowRight } from "react-icons/ti";
import { FaUsers } from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";
import { SlRocket } from "react-icons/sl";

import {
  MonthlyPriceContainer,
  MonthlyWrapper,
  ToggleButton,
  MonthlyCardsHolder,
  Cards,
  MiddleCard,
  ListItem,
  PlanButton,
  PriceText,
  CheckIcon,
  CancelIcon,
} from "./MonthlyPriceStyle";

import axios from "axios";
import FreeTrialModal from "../Admin/components/MonthlyPricingCard";

const MonthlyPrice = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [isAnnual, setIsAnnual] = useState(false);

  const BaseUrl = import.meta.env.VITE_API_BASE_URL;
  const Token = localStorage.getItem("User");
  const ID = localStorage.getItem("user_ID");

  const plans = [
    {
      name: "Starter",
      icon: <FaUsers />,
      desc: "Perfect for small businesses getting started",
      priceMonthly: "₦15,000/month",
      priceYearly: "₦144,000/year",
      button: "Subscribe",
      popular: false,
      features: [
        { text: "Up to 5 service queue points", available: true },
        { text: "2,000 monthly queue entries", available: true },
        { text: "Email notifications", available: true },
        { text: "Basic analytics", available: true },
        { text: "QR code access", available: true },
        { text: "Standard support", available: true },
      ],
    },
    {
      name: "Professional",
      icon: <RiProfileLine />,
      desc: "Ideal for growing organizations",
      priceMonthly: "₦35,000/month",
      priceYearly: "₦336,000/year",
      button: "Subscribe",
      popular: true,
      features: [
        { text: "Up to 2 service queue points", available: true },
        { text: "500 monthly queue entries", available: true },
        { text: "Email notifications", available: true },
        { text: "Basic analytics", available: true },
        { text: "QR code access", available: true },
        { text: "Standard support", available: true },
        { text: "Priority queue management", available: true },
      ],
    },
    {
      name: "Enterprise",
      icon: <SlRocket />,
      desc: "For large organizations with complex needs",
      priceMonthly: "Custom Pricing",
      priceYearly: "Custom Pricing",
      button: "Subscribe",
      popular: false,
      features: [
        { text: "Unlimited service points", available: true },
        { text: "Unlimited queue entries", available: true },
        { text: "Email notifications", available: true },
        { text: "Basic analytics", available: true },
        { text: "QR code access", available: true },
        { text: "Standard support", available: true },
        { text: "Priority queue management", available: true },
      ],
    },
  ];

  const handleContinuePayment = async (payload) => {
    try {
      const { data } = await axios.post(
        `${BaseUrl}/api/v1/initialize`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );

      const checkoutURL = data?.data?.url;
      if (checkoutURL) window.location.href = checkoutURL;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MonthlyPriceContainer>
      <MonthlyWrapper>
        <div className="Btn_holder">
          <ToggleButton active={!isAnnual} onClick={() => setIsAnnual(false)}>
            Monthly
          </ToggleButton>

          <ToggleButton active={isAnnual} onClick={() => setIsAnnual(true)}>
            Annual
          </ToggleButton>
        </div>

        <small>Save 20% on annual billing</small>
      </MonthlyWrapper>

      {showPaymentModal && (
        <FreeTrialModal
          data={selectedPlan}
          closeModal={() => setShowPaymentModal(false)}
          proceed={(payload) => handleContinuePayment(payload)}
        />
      )}

      <MonthlyCardsHolder>
        {plans.map((plan, index) => {
          const PriceCard = plan.popular ? MiddleCard : Cards;
          const price = isAnnual ? plan.priceYearly : plan.priceMonthly;

          return (
            <PriceCard key={index}>
              <div className="Top">
                <div className="Icons_holder">
                  <div className="Icons">{plan.icon}</div>
                  {plan.popular && <small>Most Popular</small>}
                </div>

                <h2>{plan.name}</h2>
                <p>{plan.desc}</p>
              </div>

              <div className="price">
                <PriceText>{price}</PriceText>
              </div>

              <PlanButton
                popular={plan.popular}
                onClick={() => {
                  const payload = {
                    individualId: ID,
                    planType: plan.name,
                    billingCycle: isAnnual ? "Annually" : "Monthly",
                  };

                  setSelectedPlan(payload);
                  setShowPaymentModal(true);
                }}
              >
                {plan.button} <TiArrowRight />
              </PlanButton>

              <div className="ListHolder">
                <ul>
                  {plan.features.map((item, i) => (
                    <ListItem key={i} available={item.available}>
                      {item.available ? <CheckIcon /> : <CancelIcon />}
                      {item.text}
                    </ListItem>
                  ))}
                </ul>
              </div>
            </PriceCard>
          );
        })}
      </MonthlyCardsHolder>
    </MonthlyPriceContainer>
  );
};

export default MonthlyPrice;
