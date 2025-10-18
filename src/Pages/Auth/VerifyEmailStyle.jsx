import styled from "styled-components";

export const VerifyEmailContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const VerifyEmailHolder = styled.div`
  width: 90%;
  height: 90vh;
  background-color: white;
  display: flex;
`;

export const LogoHolder = styled.div`
  width: 19.5%;
  height: 20vh;

  img {
    width: 80%;
    height: 30vh;
    margin-left: 50px;
  }
`;

export const VerifyEmailHolderRight = styled.div`
  width: 62%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;

  .top_holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    h1 {
      font-weight: 600;
      font-size: 31px;
      color: #222222;
    }
    p {
      font-weight: 400;
      font-size: 16px;
    }
  }

  .Icons {
    width: 58px;
    height: 52px;
    border-radius: 10px;
    border: 2px solid #6b6b6b;
    display: flex;
    align-items: center;
    font-size: 30px;
    justify-content: center;
  }

  .InputHolder {
    width: 690px;
    height: 152.16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      color: #222222;
      margin-right: 35.5rem;
      line-height: 40px;
    }

    input {
      width: 89.82px;
      height: 104.16px;
      outline: none;
      border: 0.75px solid #222222;
      align-items: center;
      justify-content: center;
      background-color: #f2f2f2;
      margin: 0 10px;
      color: black;
      font-size: 1.5rem;
      text-align: center;
      border-radius: 15.1px;
    }
  }

  .button-holder {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    button {
      width: 432px;
      height: 62px;
      font-size: 20px;
      font-weight: 500;
      padding: 10px;
      background-color: #303bff;
      color: white;
      border-radius: 10px;
      border: none;
      cursor: pointer;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      color: #222222;
    }

    span {
      font-size: 16px;
      color: #5962ff;
      font-weight: 400;
    }
  }
`;
