import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContainer,
  CloseBtn,
  SuccessIconHolder,
  TitleSection,
  InfoCardHolder,
  InfoItem,
  ButtonsHolder,
  PrimaryBtn,
  SecondaryBtn,
} from "./SuccessPaymentStyle";
import { IoClose, IoCheckmarkCircle } from "react-icons/io5";
import { MdEmail, MdCall, MdChat } from "react-icons/md";

const ThankYouModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [userEmail] = useState("Jacobhenry56@gmail.com");
  const [userPhone] = useState("09096828156");

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDone = () => {
    console.log("Done clicked");
    setIsOpen(false);
  };

  const handleBackToHome = () => {
    console.log("Back to Home clicked");
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseBtn onClick={handleClose}>
          <IoClose />
        </CloseBtn>

        <SuccessIconHolder>
          <div className="success_circle">
            <IoCheckmarkCircle />
          </div>
        </SuccessIconHolder>

        <TitleSection>
          <h1 className="title_text">Thank You!</h1>
          <p className="subtitle_text">
            We've received your request. Our sales team will contact you within
            24 hours.
          </p>
        </TitleSection>

        <InfoCardHolder>
          <InfoItem>
            <div className="info_icon">
              <MdEmail />
            </div>
            <div className="info_content">
              <h3 className="info_title">Check Your Email</h3>
              <p className="info_description">
                We've sent a confirmation to {userEmail}
              </p>
            </div>
          </InfoItem>

          <InfoItem>
            <div className="info_icon">
              <MdCall />
            </div>
            <div className="info_content">
              <h3 className="info_title">Expect a Call</h3>
              <p className="info_description">
                Our team will reach out to {userPhone}
              </p>
            </div>
          </InfoItem>

          <InfoItem>
            <div className="info_icon">
              <MdChat />
            </div>
            <div className="info_content">
              <h3 className="info_title">What's Next?</h3>
              <p className="info_description">
                Our sales specialist will prepare a custom demo based on your
                requirements
              </p>
            </div>
          </InfoItem>
        </InfoCardHolder>

        <ButtonsHolder>
          <PrimaryBtn onClick={handleDone}>Done</PrimaryBtn>
          <SecondaryBtn onClick={handleBackToHome}>Back to Home</SecondaryBtn>
        </ButtonsHolder>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ThankYouModal;
