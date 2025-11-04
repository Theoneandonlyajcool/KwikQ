import styled from "styled-components";

export const ApiOrgfromContainer = styled.form`
  width: 100%;
  height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
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
    width: 200px;
    height: 70px;
    display: flex;
    flex-direction: column;
    margin-left: -20px;
    border: 1.25px solid transparent;

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
      width: 160px;
      height: 35px;

      p {
        margin-left: 25px;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
`;

export const BoardingTop = styled.div`
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .Holder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
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

  @media (max-width: 768px) {
    height: 15vh;
    gap: 20px;

    .Holder {
      width: 90px;
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
  }
`;

export const OnboardingHolder = styled.div`
  width: 80%;
  min-height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const TextSection = styled.div`
  width: 100%;
  min-height: 550px;
  border-radius: 14px;
  border: 1.25px solid #e8e8eb;
  display: flex;
  gap: 10px;
  margin-top: 20px;
  padding: 20px;
  flex-direction: column;

  .Orgn {
    width: 100%;
    min-height: 60px;
    display: flex;
    flex-direction: column;

    h4 {
      font-size: 20px;
      line-height: 140%;
      font-weight: 600;
      color: #222222;
      display: flex;
      gap: 10px;
      align-items: center;
    }
    p {
      font-size: 16px;
      line-height: 150%;
      font-weight: 400;
    }
  }

  .InputHolder {
    width: 100%;
    min-height: 57.99px;
    display: flex;
    justify-content: space-between;

    p {
      line-height: 20px;
    }

    input {
      width: 500px;
      min-height: 36px;
      background-color: #e8e8eb;
      border-radius: 8px;
      padding: 10px;
      outline: none;
      border: none;
    }
  }
  input {
    width: 100%;
    min-height: 36px;
    background-color: #e8e8eb;
    border-radius: 8px;
    padding: 10px;
    outline: none;
    border: none;
  }

  .SecondInputHolder {
    width: 100%;
    min-height: 230px;
    border-top: 1.25px solid #adabab;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 5px;
    line-height: 200%;
    justify-content: center;

    .primary {
      width: 100%;
      min-height: 60px;
      display: flex;
      align-items: center;
    }

    .LastInputHolder {
      width: 100%;
      min-height: 57.99px;
      display: flex;
      justify-content: space-between;

      p {
        line-height: 20px;
      }

      .input_holder {
        width: 500px;
        height: 36px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 8px;
        background-color: #e8e8eb;
        padding: 0 10px;
        gap: 8px;

        input {
          width: 470px;
          min-height: 36px;
          background-color: #e8e8eb;
          border-radius: 8px;
          padding: 10px 0;
          outline: none;
          border: none;
        }
      }
    }
  }

  .input_holder {
    width: 500px;
    height: 36px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 8px;
    background-color: #e8e8eb;
    padding: 0 10px;
    gap: 8px;

    .Number {
      width: 470px;
    }
  }

  @media (max-width: 1024px) {
    min-height: 550px;
    padding: 18px;

    .InputHolder input {
      width: 450px;
    }

    .LastInputHolder .input_holder {
      width: 450px;

      input {
        width: 420px;
      }
    }

    .input_holder {
      width: 450px;

      .Number {
        width: 420px;
      }
    }
  }

  @media (max-width: 768px) {
    min-height: 500px;
    padding: 15px;
    margin-top: 15px;
    gap: 8px;

    .Orgn {
      min-height: 50px;

      h4 {
        font-size: 18px;
        gap: 8px;
      }

      p {
        font-size: 14px;
      }
    }

    .InputHolder {
      flex-direction: column;
      min-height: auto;
      gap: 12px;

      p {
        font-size: 14px;
      }

      input {
        width: 100%;
      }
    }

    .SecondInputHolder {
      margin-top: 20px;
      min-height: 200px;
      gap: 8px;

      .primary {
        min-height: 50px;
      }

      .LastInputHolder {
        flex-direction: column;
        min-height: auto;
        gap: 12px;

        p {
          font-size: 14px;
        }

        .input_holder {
          width: 100%;

          input {
            width: 100%;
          }
        }
      }
    }

    .input_holder {
      width: 100%;
      padding: 0 10px;
      gap: 8px;

      .Number {
        width: 100%;
      }

      input {
        padding: 10px 0;
      }
    }
  }
`;

export const Bottomholder = styled.div`
  width: 96%;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;

  button {
    width: 190px;
    height: 40px;
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

  @media (max-width: 768px) {
    width: 100%;
    min-height: 8vh;
    justify-content: center;

    button {
      width: 90%;
      max-width: 300px;
    }
  }
`;
