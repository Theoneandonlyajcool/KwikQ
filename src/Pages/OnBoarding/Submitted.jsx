import React from "react";
import styled from "styled-components";
import { GrStatusGood } from "react-icons/gr";
import { IoArrowBackSharp } from "react-icons/io5";

const Submitted = () => {
  return (
    <PreviewContainer>
      <BoardingLogo>
        <div className="empty"></div>
        <div className="logo">
          <img
            src="https://i.postimg.cc/hvw7KVFS/35379ce965af990a259b5b98b745a14f6d61bddc-1.png"
            alt=""
          />
          <div>
            <p>Branch Onboarding</p>
          </div>
        </div>
        <Back>
          <div className="circle">
            <IoArrowBackSharp />
            Back
          </div>
        </Back>
      </BoardingLogo>

      <SubmittedHolder>
        <IconHolder>
          <div className="Icon">
            <GrStatusGood />
          </div>
        </IconHolder>
        <Message>
          <h4>Onboarding Submitted Successfully!</h4>
          <p>
            Thank you for choosing KwikQ! We've received your organization and
            branch details.
          </p>
        </Message>
        <ContentWrapper>
          <div>
            <h4 className="question-holder">
              <GrStatusGood style={{ color: "#747cff" }} />
              Confirmation emails sent
            </h4>
            <p>We've sent confirmation emails to all 1 branch manager(s)</p>
          </div>

          <div>
            <h4 className="question-holder">
              <GrStatusGood style={{ color: "#747cff" }} />
              Admin account being set up
            </h4>
            <p>You'll receive admin credentials within 24-48 hours</p>
          </div>
          <div>
            <h4 className="question-holder">
              <GrStatusGood style={{ color: "#747cff" }} />
              Onboarding reference
            </h4>
            <p>
              Reference ID: <span>ONB-49235686</span>
            </p>
          </div>
        </ContentWrapper>
        <Bottomholder>
          <button className="Btn">DashBoard</button>
          <button>View Pricing Plans</button>
        </Bottomholder>
      </SubmittedHolder>
    </PreviewContainer>
  );
};

export default Submitted;

const PreviewContainer = styled.div`
  width: 100%;
  height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1024px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    gap: 10px;
  }
`;

const BoardingLogo = styled.div`
  width: 100%;
  min-height: 15vh;
  background-color: #f5f9fe;
  border-bottom: 1.25px solid #f3f4f6;
  display: flex;
  align-items: center;

  .empty {
    width: 126px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    width: 180px;
    height: 40px;
    justify-content: center;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    p {
      color: red;
      margin-left: 34px;
      color: #6a7282;
      font-variant: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }

  @media (max-width: 1024px) {
    min-height: 12vh;
  }

  @media (max-width: 768px) {
    min-height: 10vh;

    .empty {
      display: none;
    }

    .logo {
      width: 150px;
      height: 35px;

      p {
        margin-left: 20px;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
`;

const Back = styled.div`
  width: 70%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 60%;
    height: 70px;
  }

  .circle {
    width: 88px;
    min-height: 36px;
    background-color: #ffffff;
    border-radius: 20px;
    border: 1.25px solid #6a7282;
    justify-content: center;
    display: flex;
    font-size: 14px;
    gap: 10px;
    align-items: center;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 80px;
      min-height: 32px;
      font-size: 12px;
      gap: 8px;
      margin-right: 10px;
    }
  }
`;

const SubmittedHolder = styled.div`
  width: 645px;
  min-height: 607px;

  @media (max-width: 1024px) {
    width: 85%;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    width: 90%;
    min-height: 500px;
  }
`;

const IconHolder = styled.div`
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 15vh;
  }

  .Icon {
    width: 96px;
    min-height: 96px;
    border-radius: 50px;
    background: linear-gradient(90deg, #303bff, #96f7e4);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: white;

    @media (max-width: 768px) {
      width: 80px;
      min-height: 80px;
      font-size: 35px;
    }
  }
`;

const Message = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 70px;
    text-align: center;
    padding: 0 10px;
  }

  h4 {
    font-size: 20px;
    line-height: 140%;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #222222;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 227px;
  background-color: #ffffff;
  border: 1.25px solid #e8e8eb;
  border-radius: 14px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-right: 25.23px;
  padding-left: 25.23px;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    padding: 18px;
    min-height: 200px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    min-height: 180px;
    margin-top: 15px;
    gap: 8px;
  }

  .question-holder {
    display: flex;
    gap: 10px;
    align-items: center;

    @media (max-width: 768px) {
      gap: 8px;
    }
  }

  h4 {
    line-height: 150%;
    font-size: 16px;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  p {
    line-height: 150%;
    font-size: 16px;
    font-weight: 400;
    padding-left: 25.23px;

    @media (max-width: 768px) {
      font-size: 14px;
      padding-left: 20px;
    }
  }
  span {
    color: #747cff;
  }
`;

const Bottomholder = styled.div`
  width: 100%;
  min-height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    min-height: 12vh;
    margin-top: 20px;
  }

  .Btn {
    width: 155.72px;
    height: 36px;
    background-color: #ffffff;
    border-radius: 20px;
    color: #222222;
    font-weight: 400;
    font-size: 16px;
    border: 1.25px solid #e8e8eb;

    @media (max-width: 768px) {
      width: 90%;
      max-width: 300px;
      height: 40px;
      font-size: 14px;
    }
  }

  button {
    width: 179px;
    height: 36px;
    border-radius: 20px;
    background-color: #303bff;
    border: none;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 90%;
      max-width: 300px;
      height: 40px;
      font-size: 14px;
    }
  }
`;
