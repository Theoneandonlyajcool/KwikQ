import styled from "styled-components";

export const PreviewContainer = styled.div`
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

export const BoardingLogo = styled.div`
  width: 100%;
  min-height: 15vh;
  background-color: #f5f9fe;
  border-bottom: 1.25px solid #f3f4f6;
  display: flex;
  align-items: center;

  .back {
    width: 126px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      width: 100px;
      height: 70px;
    }
  }

  .circle {
    width: 40px;
    min-height: 30px;
    border-radius: 20px;
    border: 1.25px solid #6a7282;
    justify-content: center;
    display: flex;
    font-size: 20px;
    align-items: center;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 35px;
      min-height: 25px;
      font-size: 18px;
    }
  }

  .logo {
    width: 180px;
    height: 40px;
    justify-content: center;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      width: 150px;
      height: 35px;
    }

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

      @media (max-width: 768px) {
        margin-left: 20px;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }

  @media (max-width: 1024px) {
    min-height: 12vh;
  }

  @media (max-width: 768px) {
    min-height: 10vh;
  }
`;

export const BoardingTop = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 15vh;
  }

  .Holder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px;
    gap: 8px;
    text-align: center;

    @media (max-width: 768px) {
      width: 100px;
      gap: 6px;
    }
  }

  .circle {
    width: 50px;
    height: 50px;
    border-radius: 30px;
    color: #747cff;
    border: 1.25px solid #747cff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      font-size: 18px;
    }
  }

  p {
    color: #222222;
    line-height: 150%;
    font-size: 16px;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  hr {
    width: 120px;
    color: #e5e7eb;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const TopText = styled.div`
  width: 74%;
  min-height: 55px;

  @media (max-width: 1024px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 90%;
    min-height: 45px;
  }

  p {
    font-size: 16px;
    color: #222222;
    line-height: 150%;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const FirstSection = styled.div`
  width: 74%;
  height: 260.35px;
  border-radius: 14px;
  border: 1.25px solid #e8e8eb;
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 85%;
    height: auto;
    min-height: 260px;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    min-height: 300px;
    padding: 15px;
    gap: 15px;
  }

  .Org {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const TextHolder = styled.div`
  display: flex;
  width: 100%;
  min-height: 30vh;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }

  .lefttext {
    display: flex;
    flex-direction: column;
    width: 510px;
    min-height: 100%;
    gap: 20px;

    @media (max-width: 1024px) {
      width: 48%;
    }

    @media (max-width: 768px) {
      width: 100%;
      gap: 15px;
    }
  }

  .righttext {
    width: 510px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1024px) {
      width: 48%;
    }

    @media (max-width: 768px) {
      width: 100%;
      gap: 15px;
    }
  }

  h4 {
    line-height: 150%;
    font-size: 16px;
    font-weight: 400;
    color: #8c8c8c;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  p {
    line-height: 150%;
    font-size: 16px;
    font-weight: 400;
    color: #222222;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const SecondSection = styled.div`
  width: 74%;
  height: 296px;
  border-radius: 14px;
  border: 1.25px solid #e8e8eb;
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 85%;
    height: auto;
    min-height: 296px;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    min-height: 350px;
    padding: 15px;
    gap: 15px;
  }

  .Branch {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .service {
    width: 510px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;

    @media (max-width: 1024px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      gap: 15px;
    }
  }
`;

export const NoticeSection = styled.div`
  width: 74%;
  height: 200px;
  background-color: #d4d4d4;
  border: 1.25px solid #96f7e4;
  border-radius: 14px;
  padding: 20px;
  padding-top: 25.23px;
  padding-right: 25.23px;
  padding-bottom: 1.25px;
  padding-left: 25.23px;
  gap: 10px;

  @media (max-width: 1024px) {
    width: 85%;
    height: auto;
    min-height: 180px;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    min-height: 200px;
    padding: 15px;
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
    color: #222ab5;
    line-height: 150%;
    font-size: 16px;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  p {
    color: #303bff;
    line-height: 150%;
    font-size: 16px;
    font-weight: 400;
    padding-left: 25.23px;

    @media (max-width: 768px) {
      font-size: 14px;
      padding-left: 20px;
    }
  }
`;

export const Bottomholder = styled.div`
  width: 74%;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 90%;
    min-height: 8vh;
    justify-content: center;
  }

  button {
    width: 190px;
    height: 36px;
    border-radius: 20px;
    background-color: #303bff;
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 90%;
      max-width: 300px;
    }
  }
`;
