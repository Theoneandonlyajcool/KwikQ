import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { GoQuestion } from "react-icons/go";

const Faq = () => {
  const questions = [
    {
      text: "How does the free trial work?",
      title:
        "All plans come with a 7-day free trial. Credit card required to start. You'll have full access to all features during the trial period and can cancel anytime before it ends. ",
    },
    {
      text: "Can I change my plan later?",
      title:
        "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges or credits to your account.",
    },
    {
      text: "What happens if I exceed my monthly queue limit?",
      title:
        "We'll notify you when you're approaching your limit. You can upgrade to a higher plan.",
    },
    {
      text: "Do you offer discounts for annual billing?",
      title:
        "Yes! Annual billing saves you 20% compared to monthly billing. That's like getting 2+ months free every year.",
    },
    {
      text: "What payment methods do you accept?",
      title: "We make use of Korapay for easy payment",
    },

    {
      text: "Is there a setup fee?",
      title:
        "No setup fees at all. Your subscription price is all you pay, and it includes onboarding support to help you get started quickly.",
    },
    {
      text: "Can I cancel my subscription?",
      title:
        "Yes, you can cancel at any time. Your service will continue until the end of your billing period, and you won't be charged again.",
    },
    {
      text: "Do you provide technical support?",
      title:
        "All plans include standard email support during business hours. Professional and Enterprise plans get priority support with faster response times.",
    },
  ];

  const [dropDown, setDropDown] = useState(null);

  const handleDrop = (index) => {
    setDropDown(dropDown === index ? null : index);
  };

  return (
    <MainContainer>
      <HeaderText>
        <div className="Top_icon">
          <GoQuestion />
        </div>
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know about our pricing and plans</p>
      </HeaderText>
      <MiddleHolder>
        <ImageHolder>
          <img
            src="https://i.postimg.cc/KYVWYFCq/6e11b1324118f24b1a59a24204bb3997cb04331a.png"
            alt=""
          />
        </ImageHolder>

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
      </MiddleHolder>
    </MainContainer>
  );
};

export default Faq;
const MainContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 43px;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;

  @media (min-width: 1441px) {
    width: 100%;
    height: auto;
    gap: 43px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 100%;
    height: auto;
    gap: 43px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media (max-width: 768px) {
    gap: 30px;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const HeaderText = styled.div`
  width: 100%;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 1441px) {
    width: 100%;
    min-height: 20vh;
    gap: 10px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 100%;
    min-height: 20vh;
    gap: 10px;
  }

  .Top_icon {
    width: 47.99px;
    min-height: 47.88px;
    border-radius: 14px;
    background-color: #303bff;
    justify-content: center;
    align-items: center;
    display: flex;
    color: white;
    font-size: 20px;

    @media (min-width: 1441px) {
      width: 47.99px;
      min-height: 47.88px;
      font-size: 20px;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      width: 47.99px;
      min-height: 47.88px;
      font-size: 20px;
    }
  }

  h2 {
    font-size: 39px;
    font-weight: 600;
    color: #101828;
    font-weight: 600;

    @media (min-width: 1441px) {
      font-size: 39px;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      font-size: 39px;
    }
  }

  p {
    font-size: 16px;
    color: #4a5565;
    font-weight: 400;

    @media (min-width: 1441px) {
      font-size: 16px;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    min-height: 15vh;

    h2 {
      font-size: 32px;
    }

    p {
      font-size: 15px;
    }
  }

  @media (max-width: 480px) {
    min-height: 12vh;

    h2 {
      font-size: 26px;
      text-align: center;
    }

    p {
      font-size: 13px;
      text-align: center;
      width: 90%;
    }

    .Top_icon {
      width: 40px;
      min-height: 40px;
      font-size: 18px;
    }
  }
`;

const MiddleHolder = styled.div`
  width: 100%;
  max-width: 1331px;
  min-height: 546.66px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 0 20px;

  @media (min-width: 1441px) {
    width: 100%;
    max-width: 1331px;
    min-height: 546.66px;
    gap: 30px;
    padding: 0 20px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 100%;
    max-width: 1331px;
    min-height: 546.66px;
    gap: 30px;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
    padding: 0 10px;
  }
`;

const ImageHolder = styled.div`
  width: 599px;
  height: 516.54px;

  @media (min-width: 1441px) {
    width: 599px;
    height: 516.54px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 599px;
    height: 516.54px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (min-width: 1441px) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    height: 400px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 400px;
    height: 300px;
  }
`;

const CardHolder = styled.div`
  width: 45%;
  height: 546.66px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;

  @media (min-width: 1441px) {
    width: 45%;
    height: 546.66px;
    gap: 16px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 45%;
    height: 546.66px;
    gap: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 600px;
    height: auto;
    max-height: 400px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 400px;
    height: auto;
    max-height: 350px;
    gap: 12px;
  }
`;

const QuestionsHolder = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e5e7eb;

  @media (min-width: 1441px) {
    width: 100%;
    border-radius: 10px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 100%;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;

const QuestionsCard = styled.div`
  width: 100%;
  height: 51.99px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: #f5f7fa;
  border-radius: 10px;

  @media (min-width: 1441px) {
    width: 100%;
    height: 51.99px;
    padding: 0 20px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 100%;
    height: 51.99px;
    padding: 0 20px;
  }

  .rotate {
    transform: rotate(180deg);
  }

  .dropdown_icon {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    color: #303bff;
    background-color: #ffffff;
    padding: 3px;

    @media (min-width: 1441px) {
      width: 22px;
      height: 22px;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
      width: 22px;
      height: 22px;
    }
  }

  @media (max-width: 768px) {
    height: 48px;
    padding: 0 18px;
  }

  @media (max-width: 480px) {
    height: 45px;
    padding: 0 15px;

    .dropdown_icon {
      width: 20px;
      height: 20px;
    }
  }
`;

const AnswerCard = styled.div`
  width: 100%;
  background-color: #f9fafb;
  color: #333333;
  padding: 14px 22px;
  border-top: 1px solid #e5e7eb;
  font-size: 14px;
  line-height: 1.5;

  @media (min-width: 1441px) {
    width: 100%;
    padding: 14px 22px;
    font-size: 14px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 100%;
    padding: 14px 22px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    padding: 12px 18px;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 13px;
    line-height: 1.4;
  }
`;

const QuestionText = styled.h4`
  font-size: 15px;
  font-weight: 600;
  color: #101828;
  line-height: 140%;
  width: 90%;
  margin: 0;

  @media (min-width: 1441px) {
    font-size: 15px;
    width: 90%;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    font-size: 15px;
    width: 90%;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    width: 85%;
  }
`;
