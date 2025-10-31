import styled from "styled-components";

export const BranchContainer = styled.div`
  width: 100%;
  height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 480px) {
    height: auto;
    min-height: 100vh;
    gap: 15px;
    padding: 10px 0;
  }

  @media (max-width: 768px) and (min-width: 481px) {
    height: auto;
    min-height: 100vh;
    gap: 18px;
    padding: 15px 0;
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

    .back {
      width: 100px;
      height: 70px;
    }

    .circle {
      width: 35px;
      min-height: 25px;
      font-size: 18px;
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

export const BoardingTop = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .Holder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px;
    gap: 8px;
    text-align: center;
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
  }
  p {
    color: #222222;
    line-height: 150%;
    font-size: 16px;
    font-weight: 400;
  }
  hr {
    width: 120px;
    color: #e5e7eb;
  }

  @media (max-width: 480px) {
    height: 15vh;
    gap: 10px;

    .Holder {
      width: 100px;
      gap: 6px;
    }

    .circle {
      width: 30px;
      height: 30px;
      font-size: 15px;
    }

    p {
      font-size: 14px;
    }

    hr {
      display: none;
    }
  }

  @media (max-width: 768px) and (min-width: 481px) {
    height: 18vh;
    gap: 15px;

    .Holder {
      width: 110px;
    }

    .circle {
      width: 30px;
      height: 30px;
      font-size: 15px;
    }

    p {
      font-size: 15px;
    }

    hr {
      display: none;
    }
  }
`;

export const TopText = styled.div`
  width: 74%;
  min-height: 55px;
  display: flex;

  p {
    font-size: 16px;
    color: #222222;
    line-height: 150%;
    font-weight: 400;
    width: 200%;
  }

  .Branch {
    width: 50%;
    min-height: 55px;
  }

  .Add {
    width: 50%;
    min-height: 55px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
      width: 132px;
      height: 36px;
      border-radius: 20px;
      background-color: #ffffff;
      border: 1.25px solid #747cff;
      justify-content: center;
      align-items: center;
      display: flex;
      gap: 10px;
      cursor: pointer;
    }
  }

  @media (max-width: 480px) {
    width: 90%;
    flex-direction: column;
    min-height: auto;
    gap: 15px;

    .Branch {
      width: 100%;
      min-height: auto;
    }

    .Add {
      width: 100%;
      min-height: auto;
      justify-content: flex-start;
    }

    p {
      width: 100%;
      font-size: 14px;
    }

    button {
      width: 120px;
      height: 32px;
      font-size: 14px;
    }
  }

  @media (max-width: 768px) and (min-width: 481px) {
    width: 85%;

    p {
      font-size: 15px;
    }

    button {
      width: 125px;
      height: 34px;
    }
  }
`;

export const FirstSection = styled.div`
  width: 74%;
  height: 467px;
  border-radius: 14px;
  border: 1.25px solid #e8e8eb;
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-direction: column;

  .Org {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 480px) {
    width: 90%;
    height: auto;
    padding: 15px;
    gap: 15px;
  }

  @media (max-width: 768px) and (min-width: 481px) {
    width: 85%;
    height: auto;
    padding: 18px;
  }
`;

export const InputHolder = styled.div`
  display: flex;
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;

  h4 {
    line-height: 150%;
    font-size: 16px;
    font-weight: 400;
    color: #222222;
  }

  input {
    width: 470px;
    min-height: 36px;
    background-color: #e8e8eb;
    border-radius: 8px;
    padding: 10px;
    outline: none;
    border: none;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
    min-height: auto;

    h4 {
      font-size: 14px;
    }

    input {
      width: 100%;
      min-height: 32px;
    }
  }

  @media (max-width: 768px) and (min-width: 481px) {
    input {
      width: 350px;
    }
  }
`;

export const AddressHolder = styled.div`
  display: flex;
  width: 100%;
  min-height: 10vh;
  display: flex;

  h4 {
    line-height: 150%;
    font-size: 16px;
    font-weight: 400;
    color: #222222;
  }
  div {
    width: 100%;
  }

  .input-holder {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 8px;
    background-color: #e8e8eb;
    padding: 0 10px;
    gap: 8px;

    input {
      width: 97%;
      min-height: 36px;
      background-color: #e8e8eb;
      border-radius: 8px;
      padding: 10px 0;
      outline: none;
      border: none;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
    min-height: auto;

    h4 {
      font-size: 14px;
    }

    .input-holder {
      width: 100%;
      padding: 0 10px;
      gap: 8px;

      input {
        min-height: 32px;
        padding: 10px 0;
      }
    }
  }

  @media (max-width: 768px) and (min-width: 481px) {
    .input-holder {
      padding: 0 10px;
      gap: 8px;

      input {
        padding: 10px 0;
      }
    }
  }
`;

export const Sections = styled.div`
  display: flex;
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;

  h4 {
    line-height: 150%;
    font-size: 16px;
    font-weight: 400;
    color: #222222;
  }

  input {
    width: 310px;
    min-height: 36px;
    background-color: #e8e8eb;
    border-radius: 8px;
    padding: 10px;
    outline: none;
    border: none;
    padding-top: 4px;
    padding-left: 12px;
    padding-bottom: 4px;
    padding-right: 12px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
    min-height: auto;

    h4 {
      font-size: 14px;
    }

    input {
      width: 100%;
      min-height: 32px;
    }
  }

  @media (max-width: 768px) and (min-width: 481px) {
    input {
      width: 250px;
    }
  }
`;

export const LastSection = styled.div`
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;

  h4 {
    line-height: 150%;
    font-size: 16px;
    font-weight: 400;
    color: #222222;
  }

  .input-holder {
    width: 310px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 8px;
    background-color: #e8e8eb;
    padding: 0 10px;
    gap: 8px;

    input {
      width: 270px;
      min-height: 36px;
      background-color: #e8e8eb;
      border-radius: 8px;
      padding: 10px 0;
      outline: none;
      border: none;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
    min-height: auto;

    h4 {
      font-size: 14px;
    }

    .input-holder {
      width: 100%;
      padding: 0 10px;
      gap: 8px;

      input {
        width: 95%;
        min-height: 32px;
        padding: 10px 0;
      }
    }
  }

  @media (max-width: 768px) and (min-width: 481px) {
    .input-holder {
      width: 250px;
      padding: 0 10px;
      gap: 8px;

      input {
        width: 220px;
        padding: 10px 0;
      }
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
  }

  @media (max-width: 480px) {
    width: 100%;
    min-height: 8vh;
    justify-content: center;

    button {
      width: 90%;
      max-width: 300px;
      font-size: 16px;
    }
  }

  @media (max-width: 768px) and (min-width: 481px) {
    width: 85%;

    button {
      width: 90%;
      max-width: 300px;
    }
  }
`;
