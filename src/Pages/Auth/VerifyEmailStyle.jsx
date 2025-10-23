import styled from "styled-components";

export const VerifyEmailContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 360px) {
    height: auto;
    padding: 20px;
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    height: auto;
    padding: 30px;
  }
`;

export const VerifyEmailHolder = styled.div`
  width: 90%;
  height: 90vh;
  background-color: white;
  display: flex;

  @media screen and (max-width: 360px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    padding: 20px 0;
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    padding: 25px 0;
  }
`;

export const LogoHolder = styled.div`
  width: 19.5%;
  height: 20vh;

  img {
    width: 100%;
    height: 30vh;
    margin-left: 45px;
  }

  @media screen and (max-width: 360px) {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;

    img {
      width: 120px;
      height: auto;
      margin: 0;
    }
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    width: 50%;
    height: auto;
    display: flex;
    justify-content: center;

    img {
      width: 160px;
      height: auto;
      margin: 0;
    }
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
      text-align: center;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      text-align: center;
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
      text-align: center;
    }

    span {
      font-size: 16px;
      color: #5962ff;
      font-weight: 400;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 360px) {
    width: 100%;
    padding: 10px;
    gap: 1.5rem;

    .InputHolder {
      width: 80%;
      height: auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        margin: 0;
        text-align: left;
        width: 100%;
      }

      input {
        width: 55px;
        height: 65px;
        margin: 4px;
      }
    }

    .button-holder button {
      width: 100%;
      height: 55px;
      font-size: 18px;
    }
  }

  @media screen and (min-width: 361px) and (max-width: 768px) {
    width: 90%;
    gap: 2rem;
    padding: 15px;

    .InputHolder {
      width: 100%;
      flex-direction: column;
      align-items: center;

      p {
        margin: 0;
        text-align: left;
        width: 100%;
      }

      input {
        width: 70px;
        height: 85px;
        margin: 5px;
      }
    }

    .button-holder button {
      width: 80%;
      height: 58px;
      font-size: 19px;
    }
  }
`;
