import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  const questions = [
    {
      text: "What is KwikQ and who is it for?",
      title:
        "Kwik Q is a queue management system that helps businesses reduce their customer wait times, manage walk-ins, and improve customer service.",
    },
    {
      text: "How does KwikQ improve customer experience and reduce wait times?",
      title:
        "Kwik Q makes check-ins simple, manages virtual queues, shares live wait updates, and shows Organized queue so organization always know users place.",
    },
    {
      text: "Is KwikQ suitable for my industry or organization size?",
      title:
        "Yes, with its highly scalable and flexible features, KwikQ is suitable for all industries bank, healthcare, government, education, and many others.",
    },
    {
      text: "What's included in the free trial, and how do I get started?",
      title:
        "The 14-day free trial offers you full access to KwikQ core features like virtual queues, appointment booking, and live dashboards. No credit card needed.",
    },
    {
      text: "Can KwikQ be customized for my workflow or brand?",
      title:
        "Yes. KwikQ is fully customizable! Businesses can tailor workflows, queue logic, user roles, and branding (logos, colors, messages) to match their industry's exact needs.",
    },
  ];

  const [dropDown, setDropDown] = useState(null);

  const handleDrop = (index) => {
    setDropDown(dropDown === index ? null : index);
  };

  return (
    <MainContainer>
      <h2>Frequently Asked Questions</h2>

      <CardHolder>
        {questions.map((item, index) => (
          <QuestionsHolder key={index}>
            <QuestionsCard>
              <QuestionText>{item.text}</QuestionText>
              <IoIosArrowDown
                className={`dropdown_icon ${
                  dropDown === index ? "rotate" : ""
                }`}
                onClick={() => handleDrop(index)}
                style={{ color: "black" }}
              />
            </QuestionsCard>
            {dropDown === index && <AnswerCard>{item.title}</AnswerCard>}
          </QuestionsHolder>
        ))}
      </CardHolder>
    </MainContainer>
  );
};

export default Faq;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: max-content;
  display: flex;
  gap: 43px;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  padding-top: 20px;
  padding-bottom: 20px;

  h2 {
    font-size: 48px;
    font-weight: 700;
    line-height: 150%;
    color: #000000;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    gap: 35px;
    padding: 30px 20px;
    height: auto;

    h2 {
      font-size: 36px;
      text-align: center;
      line-height: 140%;
    }
  }

  @media (max-width: 480px) {
    gap: 25px;
    padding: 20px 15px;
    height: auto;

    h2 {
      font-size: 28px;
      text-align: center;
      line-height: 130%;
    }
  }
`;

const CardHolder = styled.div`
  width: 55%;
  height: 70%;
  min-height: max-content;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    width: 80%;
    gap: 18px;
  }

  @media (max-width: 480px) {
    width: 95%;
    gap: 15px;
  }
`;

const QuestionsHolder = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  min-height: max-content;
  background-color: #222222;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const QuestionsCard = styled.div`
  width: 100%;
  min-height: 70px;
  border-radius: 10px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  .dropdown_icon {
    cursor: pointer;
    width: 24px;
    height: 24px;
    background-color: #ffffff;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }

  .dropdown_icon.rotate {
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    min-height: 65px;

    .dropdown_icon {
      width: 22px;
      height: 22px;
    }
  }

  @media (max-width: 480px) {
    padding: 0 15px;
    min-height: 60px;

    .dropdown_icon {
      width: 20px;
      height: 20px;
    }
  }
`;

const AnswerCard = styled.div`
  width: 100%;
  min-height: 80px;
  background-color: #222222;
  padding: 20px 25px;
  display: flex;
  color: #ffffff;
  align-items: center;
  border-top: 1px solid #444;
  animation: slideDown 0.3s ease-out;

  @media (max-width: 768px) {
    padding: 18px 20px;
    min-height: 70px;
    font-size: 15px;
    line-height: 140%;
  }

  @media (max-width: 480px) {
    padding: 15px;
    min-height: 60px;
    font-size: 14px;
    line-height: 130%;
  }
`;

const QuestionText = styled.h4`
  font-size: 15px;
  font-weight: 700;
  color: white;
  line-height: 140%;
  width: 90%;

  @media (max-width: 768px) {
    font-size: 14px;
    width: 85%;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    width: 80%;
  }
`;
