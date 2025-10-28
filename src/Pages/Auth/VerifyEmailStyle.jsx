import styled from "styled-components";

export const VerifyEmailContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    padding: 20px 0;
  }

  @media (max-width: 480px) {
    height: auto;
    min-height: 100vh;
    padding: 15px 0;
  }
`;

export const LogoHolder = styled.div`
  width: 100%;
  min-height: 15vh;
  display: flex;

  .Logo {
    width: 25%;
    height: 15vh;
    display: flex;
    align-content: center;
    justify-content: flex-end;

    img {
      width: 80%;
      height: 100%;
      object-fit: cover;
      padding-top: 40px;
    }
  }

  @media (max-width: 768px) {
    .Logo {
      width: 30%;
      height: 12vh;

      img {
        padding-top: 30px;
      }
    }
  }

  @media (max-width: 480px) {
    justify-content: center;

    .Logo {
      width: 40%;
      height: 10vh;
      justify-content: center;

      img {
        padding-top: 20px;
        width: 90%;
      }
    }
  }
`;

export const VerifyEmailHolder = styled.div`
  width: 55%;
  height: 85vh;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;

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

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    gap: 2rem;

    .InputHolder {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;

      p {
        margin-right: 0;
        text-align: center;
        width: 100%;
        margin-bottom: 15px;
      }

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: nowrap;
        gap: 8px;
      }

      input {
        width: 60px;
        height: 70px;
        margin: 0;
        font-size: 1.2rem;
        flex-shrink: 0;
      }
    }

    .button-holder {
      button {
        width: 350px;
        height: 56px;
        font-size: 18px;
      }
    }
  }

  @media (max-width: 480px) {
    width: 95%;
    height: auto;
    gap: 1.5rem;

    .top_holder {
      h1 {
        font-size: 24px;
      }

      p {
        font-size: 14px;
      }
    }

    .Icons {
      width: 50px;
      height: 45px;
      font-size: 24px;
    }

    .InputHolder {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      p {
        margin-right: 0;
        text-align: left;
        width: 100%;
        margin-bottom: 12px;
        font-size: 14px;
        padding-left: 10px;
      }

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: nowrap;
        gap: 5px;
        width: 100%;
      }

      input {
        width: 45px;
        height: 55px;
        margin: 0;
        font-size: 1rem;
        border-radius: 12px;
        flex-shrink: 0;
      }
    }

    .button-holder {
      button {
        width: 280px;
        height: 50px;
        font-size: 16px;
      }

      p,
      span {
        font-size: 14px;
      }
    }
  }
`;
