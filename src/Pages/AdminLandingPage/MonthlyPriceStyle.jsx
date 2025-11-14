import styled from "styled-components";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";

export const CheckIcon = styled(IoIosCheckmarkCircle)`
  color: #303fbe;
`;
export const CancelIcon = styled(MdCancel)`
  color: #303fbe;
`;

export const ListItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  color: ${({ available }) => (available ? "#222222" : "#eaebff")};
  display: flex;
  align-items: center;
  gap: 10px;
  line-height: 24px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    gap: 8px;
  }
`;

export const ToggleButton = styled.button`
  flex: 1;
  height: 53px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.3s ease;
  color: ${({ active }) => (active ? "#303bff" : "#ffffff")};
  background-color: ${({ active }) => (active ? "#ffffff" : "transparent")};

  @media (max-width: 768px) {
    height: 45px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    height: 40px;
    font-size: 14px;
  }
`;

export const BtnHolder = styled.div`
  width: 339px;
  height: 58px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  gap: 0;

  @media (max-width: 768px) {
    width: 300px;
    height: 50px;
  }

  @media (max-width: 480px) {
    width: 280px;
    height: 45px;
  }
`;

export const PlanButton = styled.button`
  width: 333px;
  height: 50.37px;
  border-radius: 14px;
  border: ${({ popular }) => (popular ? "none" : "1.25px solid #d0d0d0")};
  background-color: ${({ popular }) => (popular ? "#303bff" : "#ffffff")};
  color: ${({ popular }) => (popular ? "#ffffff" : "#222222")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 768px) {
    width: 280px;
    height: 45px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 40px;
    font-size: 13px;
  }
`;

export const PriceText = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: #101828;
  line-height: 140%;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const MonthlyPriceContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f7ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const MonthlyWrapper = styled.div`
  width: 99%;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  .Btn_holder {
    background-color: #303bff;
    width: 339px;
    height: 58px;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
    display: flex;

    @media (max-width: 768px) {
      width: 300px;
      height: 50px;
    }

    @media (max-width: 480px) {
      width: 280px;
      height: 45px;
    }
  }

  small {
    font-size: 12px;
    font-weight: 400;
    color: #303bff;
    line-height: 16px;
    background-color: #eaebff;
    border-radius: 8px;
    padding: 2px 8px;

    @media (max-width: 480px) {
      font-size: 11px;
    }
  }
`;

export const MonthlyCardsHolder = styled.div`
  width: 99%;
  height: 1103px;
  display: flex;
  margin-top: 80px;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1024px) {
    height: auto;
    flex-wrap: wrap;
    margin-top: 40px;
    gap: 15px;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    gap: 10px;
    flex-direction: column;
    align-items: center;
  }
`;

export const Cards = styled.div`
  width: 30%;
  min-height: 865px;
  height: 70vh;
  border-radius: 24px;
  border: 1.25px solid #d0d0d0;
  display: flex;
  gap: 50px;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;

  @media (max-width: 1024px) {
    width: 45%;
    min-height: 800px;
    height: auto;
    gap: 30px;
    padding: 20px 0;
  }

  @media (max-width: 768px) {
    width: 90%;
    min-height: auto;
    height: auto;
    gap: 25px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: 95%;
    gap: 20px;
    padding: 15px 0;
  }

  .Top {
    width: 333px;
    height: 125.94px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      width: 280px;
      height: auto;
    }

    @media (max-width: 480px) {
      width: 250px;
    }

    .Icons_holder {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;

      @media (max-width: 480px) {
        height: 45px;
      }

      .Icons {
        width: 50px;
        height: 50px;
        background-color: #303bff;
        border-radius: 14px;
        margin-left: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        color: #ffffff;

        @media (max-width: 768px) {
          width: 45px;
          height: 45px;
          font-size: 20px;
        }

        @media (max-width: 480px) {
          width: 40px;
          height: 40px;
          font-size: 18px;
          margin-left: 15px;
        }
      }

      small {
        font-size: 13px;
        font-weight: 600;
        color: #ffffff;
        background-color: #303bff;
        border-radius: 8px;
        height: 26px;
        line-height: 180%;
        padding: 2px 8px;
        text-align: center;

        @media (max-width: 480px) {
          font-size: 12px;
          height: 24px;
        }
      }
    }

    h2 {
      font-size: 31px;
      font-weight: 600;
      color: #222222;

      @media (max-width: 768px) {
        font-size: 26px;
      }

      @media (max-width: 480px) {
        font-size: 22px;
      }
    }

    p {
      font-size: 16px;
      font-weight: 400;
      color: #222222;
      line-height: 20px;

      @media (max-width: 480px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }

  .price {
    display: flex;
    align-items: center;
    width: 333px;

    @media (max-width: 768px) {
      width: 280px;
    }

    @media (max-width: 480px) {
      width: 250px;
    }
  }

  button {
    width: 333px;
    height: 50.37px;
    background-color: #ffffff;
    border-radius: 14px;
    border: 1.25px solid #d0d0d0;
    cursor: pointer;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    color: #222222;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media (max-width: 768px) {
      width: 280px;
      height: 45px;
      font-size: 14px;
    }

    @media (max-width: 480px) {
      width: 250px;
      height: 40px;
      font-size: 13px;
    }
  }

  .ListHolder {
    width: 333px;
    height: 447px;
    display: flex;
    flex-direction: column;
    gap: 17px;

    @media (max-width: 768px) {
      width: 280px;
      height: auto;
      gap: 15px;
    }

    @media (max-width: 480px) {
      width: 250px;
      gap: 12px;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 17px;

      @media (max-width: 480px) {
        gap: 12px;
      }
    }
  }
`;

export const MiddleCard = styled(Cards)`
  width: 30%;
  min-height: 900px;
  border: 1.25px solid #303bff;
  border-top: 4px solid #303bff;
  margin-top: -35px;

  @media (max-width: 1024px) {
    width: 45%;
    min-height: 830px;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    width: 90%;
    min-height: auto;
    margin-top: 0;
  }

  @media (max-width: 480px) {
    width: 95%;
  }

  button {
    background-color: #303bff;
    color: #ffffff;
    border: none;
  }
`;
