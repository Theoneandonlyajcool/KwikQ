import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContainer,
  CloseBtn,
  TopBadge,
  TitleSection,
  PlanCard,
  PlanHeader,
  TrialBadge,
  PlanBody,
  InfoBox,
  InfoIcon,
  InfoText,
  ButtonsHolder,
  CancelBtn,
  ContinueBtn,
} from "./SubscriptionModalStyle";
import {
  IoClose,
  IoSparkles,
  IoShieldCheckmark,
  IoArrowForward,
} from "react-icons/io5";
import { MdClose } from "react-icons/md";
import axios from "axios";

const ConfirmPlanModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [planData] = useState({
    planName: "Professional Plan",
    billingCycle: "Billed monthly",
    price: "₦35,000",
    period: "/month",
  });

  const BaseURL = import.meta.env.VITE_API_BASE_URL;

  const token = localStorage.getItem("User");
  const individualId = sessionStorage.getItem("user-recog");

  //   let formData = new FormData();
  //   formData.append();

  const Payment = async () => {
    try {
      const res = await axios.post(
        `${BaseURL}/api/v1/initialize`,
        {
          individualId: individualId,
          planType: "starter",
          billingCycle: "monthly",
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("value", individualId, planType, billingCycle);
      console.log(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseBtn>
          <IoClose />
        </CloseBtn>

        <TopBadge>
          <div className="badge_icon">
            <IoSparkles />
          </div>
          <span className="badge_text">Start Your Free Trial</span>
        </TopBadge>

        <TitleSection>
          <h1 className="title_text">Confirm Your Plan</h1>
          <p className="subtitle_text">
            Review your selection and start your 7-day free trial
          </p>
        </TitleSection>

        <PlanCard>
          <PlanHeader>
            <h2 className="plan_name">{planData.planName}</h2>
            <TrialBadge>7-Day Free Trial</TrialBadge>
          </PlanHeader>

          <PlanBody>
            <p className="billing_cycle">{planData.billingCycle}</p>
            <div className="price_holder">
              <span className="price">{planData.price}</span>
              <span className="period">{planData.period}</span>
            </div>
          </PlanBody>
        </PlanCard>

        <InfoBox>
          <InfoIcon>
            <IoShieldCheckmark />
          </InfoIcon>
          <InfoText>
            <h3 className="info_title">No charge today</h3>
            <p className="info_description">
              Your free trial starts now. You'll only be charged after 7 days,
              and you can cancel anytime before then.
            </p>
          </InfoText>
        </InfoBox>

        <ButtonsHolder>
          <CancelBtn>
            <MdClose />
            <span>Cancel</span>
          </CancelBtn>
          <ContinueBtn onClick={() => console.log(individualId)}>
            <span>Continue</span>
            <IoArrowForward />
          </ContinueBtn>
        </ButtonsHolder>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ConfirmPlanModal;
