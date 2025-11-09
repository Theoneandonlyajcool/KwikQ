import React from "react";
import styled from "styled-components";
import { GrStatusGood } from "react-icons/gr";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Submitted = () => {
  const nav = useNavigate();
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
            {/* <h4 className="question-holder">
              <GrStatusGood style={{ color: "#747cff" }} />
              Onboarding reference
            </h4>
            <p>
              Reference ID: <span>ONB-49235686</span>
            </p> */}
          </div>
        </ContentWrapper>
        <Bottomholder>
          <button className="Btn" onClick={() => nav("/dashboard/*")}>
            DashBoard
          </button>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 1440px) {
    height: 110vh;
    gap: 25px;
  }

  @media (min-width: 1920px) {
    height: 120vh;
    gap: 30px;
  }

  @media (max-width: 1024px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    gap: 10px;
    padding: 20px 0;
  }
`;

const BoardingLogo = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #f5f9fe;
  border-bottom: 1.25px solid #f3f4f6;
  display: flex;
  align-items: center;

  @media (min-width: 1440px) {
    height: 22vh;
  }

  @media (min-width: 1920px) {
    height: 25vh;
  }

  @media (max-width: 1024px) {
    height: 15vh;
  }

  @media (max-width: 768px) {
    height: 12vh;
    min-height: 80px;
  }

  .empty {
    width: 126px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1440px) {
      width: 140px;
      height: 90px;
    }

    @media (min-width: 1920px) {
      width: 160px;
      height: 100px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .logo {
    width: 180px;
    height: 40px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-left: 0px;
    border: transparent;

    @media (min-width: 1440px) {
      width: 200px;
      height: 45px;
    }

    @media (min-width: 1920px) {
      width: 220px;
      height: 50px;
    }

    @media (max-width: 768px) {
      width: 150px;
      height: 35px;
      margin-left: 20px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    p {
      margin-left: 34px;
      color: #6a7282;
      font-variant: 16px;
      font-weight: 400;
      line-height: 24px;

      @media (min-width: 1440px) {
        font-size: 17px;
        margin-left: 38px;
      }

      @media (min-width: 1920px) {
        font-size: 18px;
        margin-left: 42px;
      }

      @media (max-width: 768px) {
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

  @media (min-width: 1440px) {
    width: 75%;
    height: 90px;
  }

  @media (min-width: 1920px) {
    width: 80%;
    height: 100px;
  }

  @media (max-width: 1024px) {
    width: 65%;
    height: 70px;
  }

  @media (max-width: 768px) {
    width: 50%;
    height: 60px;
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

    @media (min-width: 1440px) {
      width: 100px;
      min-height: 40px;
      font-size: 15px;
    }

    @media (min-width: 1920px) {
      width: 110px;
      min-height: 44px;
      font-size: 16px;
    }

    @media (max-width: 1024px) {
      width: 85px;
      min-height: 34px;
      font-size: 13px;
    }

    @media (max-width: 768px) {
      width: 80px;
      min-height: 32px;
      font-size: 12px;
      gap: 8px;
      margin-right: 20px;
    }
  }
`;

const SubmittedHolder = styled.div`
  width: 645px;
  height: 80vh;

  @media (min-width: 1440px) {
    width: 700px;
    height: 85vh;
  }

  @media (min-width: 1920px) {
    width: 750px;
    height: 90vh;
  }

  @media (max-width: 1024px) {
    width: 85%;
    max-width: 600px;
    height: 75vh;
  }

  @media (max-width: 768px) {
    width: 90%;
    min-height: 500px;
    height: auto;
    padding: 0 10px;
  }
`;

const IconHolder = styled.div`
  width: 100%;
  min-height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1440px) {
    min-height: 18vh;
  }

  @media (min-width: 1920px) {
    min-height: 20vh;
  }

  @media (max-width: 768px) {
    min-height: 12vh;
    margin-top: 10px;
  }

  .Icon {
    width: 86px;
    min-height: 86px;
    border-radius: 50px;
    background: linear-gradient(90deg, #303bff, #96f7e4);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: white;

    @media (min-width: 1440px) {
      width: 95px;
      min-height: 95px;
      font-size: 45px;
    }

    @media (min-width: 1920px) {
      width: 105px;
      min-height: 105px;
      font-size: 50px;
    }

    @media (max-width: 768px) {
      width: 70px;
      min-height: 70px;
      font-size: 30px;
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

  @media (min-width: 1440px) {
    min-height: 90px;
  }

  @media (min-width: 1920px) {
    min-height: 100px;
  }

  @media (max-width: 768px) {
    min-height: 70px;
    text-align: center;
    padding: 0 10px;
    margin-top: 10px;
  }

  h4 {
    font-size: 20px;
    line-height: 140%;
    font-weight: 600;

    @media (min-width: 1440px) {
      font-size: 22px;
    }

    @media (min-width: 1920px) {
      font-size: 24px;
    }

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #222222;

    @media (min-width: 1440px) {
      font-size: 17px;
    }

    @media (min-width: 1920px) {
      font-size: 18px;
    }

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 0 10px;
    }
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 200px;
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

  @media (min-width: 1440px) {
    padding: 25px;
    min-height: 220px;
    gap: 15px;
  }

  @media (min-width: 1920px) {
    padding: 30px;
    min-height: 240px;
    gap: 20px;
  }

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

    @media (min-width: 1440px) {
      gap: 12px;
    }

    @media (min-width: 1920px) {
      gap: 15px;
    }

    @media (max-width: 768px) {
      gap: 8px;
    }
  }

  h4 {
    line-height: 150%;
    font-size: 16px;
    font-weight: 400;

    @media (min-width: 1440px) {
      font-size: 17px;
    }

    @media (min-width: 1920px) {
      font-size: 18px;
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  p {
    line-height: 150%;
    font-size: 16px;
    font-weight: 400;
    padding-left: 25.23px;

    @media (min-width: 1440px) {
      font-size: 17px;
      padding-left: 28px;
    }

    @media (min-width: 1920px) {
      font-size: 18px;
      padding-left: 32px;
    }

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

  @media (min-width: 1440px) {
    min-height: 18vh;
    gap: 25px;
  }

  @media (min-width: 1920px) {
    min-height: 20vh;
    gap: 30px;
  }

  @media (max-width: 1024px) {
    min-height: 12vh;
    gap: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    min-height: 12vh;
    margin-top: 20px;
    padding: 0 10px;
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

    @media (min-width: 1440px) {
      width: 170px;
      height: 40px;
      font-size: 17px;
    }

    @media (min-width: 1920px) {
      width: 180px;
      height: 44px;
      font-size: 18px;
    }

    @media (max-width: 1024px) {
      width: 140px;
      height: 34px;
      font-size: 15px;
    }

    @media (max-width: 768px) {
      width: 100%;
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

    @media (min-width: 1440px) {
      width: 190px;
      height: 40px;
      font-size: 15px;
    }

    @media (min-width: 1920px) {
      width: 200px;
      height: 44px;
      font-size: 16px;
    }

    @media (max-width: 1024px) {
      width: 160px;
      height: 34px;
      font-size: 13px;
    }

    @media (max-width: 768px) {
      width: 100%;
      max-width: 300px;
      height: 40px;
      font-size: 14px;
    }
  }
`;
