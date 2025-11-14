import styled from "styled-components";

const device = {
  android: "(min-width: 360px)",
  iphone: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
};

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  width: 40%;
  height: 90%;
  /* max-width: 750px; */
  background: #ffffff;
  /* background: red; */

  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 15px;
  gap: 5px;

  @media ${device.android} {
    width: 90%;
    padding: 30px 20px;
    gap: 20px;
  }

  @media ${device.iphone} {
    width: 90%;
    padding: 35px 25px;
    gap: 22px;
  }

  @media ${device.tablet} {
    width: 85%;
    padding: 40px 30px;
    gap: 25px;
  }

  @media ${device.desktop} {
    width: 40%;
    height: 90%;
    padding: 15px 15px;
    gap: 5px;
  }
`;

export const CloseBtn = styled.div`
  width: 32px;
  height: 32px;
  /* background: red; */
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 26px;
  color: #222222;

  @media ${device.android} {
    width: 26px;
    height: 26px;
    top: 15px;
    right: 15px;
    font-size: 22px;
  }

  @media ${device.iphone} {
    width: 28px;
    height: 28px;
    top: 18px;
    right: 18px;
    font-size: 24px;
  }

  @media ${device.tablet} {
    width: 30px;
    height: 30px;
    top: 20px;
    right: 20px;
    font-size: 26px;
  }

  @media ${device.desktop} {
    width: 32px;
    height: 32px;
    top: 22px;
    right: 22px;
    font-size: 28px;
  }
`;

export const TopBadge = styled.div`
  width: 40%;
  height: 10%;
  background: #f0f0ff;
  /* background: black; */
  border: 1.5px solid #5962ff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;

  @media ${device.android} {
    padding: 10px 18px;
    gap: 8px;
  }

  @media ${device.iphone} {
    padding: 11px 20px;
    gap: 9px;
  }

  @media ${device.tablet} {
    padding: 12px 22px;
    gap: 10px;
  }

  @media ${device.desktop} {
    padding: 12px 24px;
    gap: 5px;
  }

  .badge_icon {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #5962ff;

    @media ${device.android} {
      width: 16px;
      height: 16px;
      font-size: 16px;
    }

    @media ${device.iphone} {
      width: 18px;
      height: 18px;
      font-size: 18px;
    }

    @media ${device.tablet} {
      width: 20px;
      height: 20px;
      font-size: 20px;
    }
  }

  .badge_text {
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0%;
    color: #5962ff;

    @media ${device.android} {
      font-size: 13px;
    }

    @media ${device.iphone} {
      font-size: 14px;
    }

    @media ${device.tablet} {
      font-size: 15px;
    }

    @media ${device.desktop} {
      font-size: 14px;
    }
  }
`;

export const TitleSection = styled.div`
  width: 100%;
  height: 20%;
  /* display: flex; */
  flex-direction: column;
  /* align-items: center; */
  gap: 12px;
  /* background: black; */

  @media ${device.android} {
    gap: 8px;
  }

  @media ${device.iphone} {
    gap: 10px;
  }

  @media ${device.tablet} {
    gap: 12px;
  }

  /* @media ${device.desktop} {
    gap: 14px;
  } */

  .title_text {
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 22px;
    /* line-height: 140%; */
    letter-spacing: 0%;
    /* text-align: center; */
    color: #222222;

    @media ${device.android} {
      font-size: 26px;
      line-height: 130%;
    }

    @media ${device.iphone} {
      font-size: 28px;
      line-height: 130%;
    }

    @media ${device.tablet} {
      font-size: 32px;
      line-height: 135%;
    }

    @media ${device.desktop} {
      font-size: 22px;
      line-height: 140%;
    }
  }

  .subtitle_text {
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 17px;
    line-height: 150%;
    letter-spacing: 0%;
    /* text-align: center; */
    color: #6b6b6b;

    @media ${device.android} {
      font-size: 13px;
      line-height: 140%;
      padding: 0 5px;
    }

    @media ${device.iphone} {
      font-size: 14px;
      line-height: 145%;
      padding: 0 5px;
    }

    @media ${device.tablet} {
      font-size: 16px;
      line-height: 148%;
    }

    @media ${device.desktop} {
      font-size: 17px;
      line-height: 150%;
    }
  }
`;

export const PlanCard = styled.div`
  width: 100%;
  height: 50%;
  background: #f0fdf4;
  border: 2px solid #5962ff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;

  @media ${device.android} {
    border-radius: 12px;
  }

  @media ${device.iphone} {
    border-radius: 13px;
  }

  @media ${device.tablet} {
    border-radius: 14px;
  }

  @media ${device.desktop} {
    border-radius: 15px;
  }
`;

export const PlanHeader = styled.div`
  width: 100%;
  height: 50%;
  background: #f0fdf4;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  /* align-items: center; */
  padding: 12px 15px;
  border-bottom: 1.5px solid #d1fae5;

  @media ${device.android} {
    padding: 18px 18px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  @media ${device.iphone} {
    padding: 20px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  @media ${device.tablet} {
    padding: 22px 23px;
  }

  @media ${device.desktop} {
    padding: 12px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .plan_name {
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 16px;
    /* line-height: 140%; */
    letter-spacing: 0%;
    color: #222222;

    @media ${device.android} {
      font-size: 18px;
      line-height: 130%;
    }

    @media ${device.iphone} {
      font-size: 20px;
      line-height: 130%;
    }

    @media ${device.tablet} {
      font-size: 22px;
      line-height: 135%;
    }

    @media ${device.desktop} {
      font-size: 16px;
      /* line-height: 140%; */
    }
  }
`;

export const TrialBadge = styled.div`
  width: 30%;
  height: 40%;
  background: #303bff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 14px;
  /* line-height: 140%; */
  letter-spacing: 0%;
  color: #ffffff;

  @media ${device.android} {
    padding: 6px 16px;
    font-size: 12px;
  }

  @media ${device.iphone} {
    padding: 7px 18px;
    font-size: 13px;
  }

  @media ${device.tablet} {
    padding: 8px 19px;
    font-size: 14px;
  }

  @media ${device.desktop} {
    padding: 8px 10px;
    font-size: 14px;
  }
`;

export const PlanBody = styled.div`
  width: 100%;
  height: 40%;
  background: #f0fdf4;
  display: flex;
  flex-direction: column;
  padding: 12px 15px;
  gap: 10px;

  @media ${device.android} {
    padding: 18px 18px;
    gap: 12px;
  }

  @media ${device.iphone} {
    padding: 20px 20px;
    gap: 13px;
  }

  @media ${device.tablet} {
    padding: 22px 23px;
    gap: 14px;
  }

  @media ${device.desktop} {
    padding: 12px 15px;
    height: 40%;
    gap: 10px;
  }

  .billing_cycle {
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 18px;
    /* line-height: 150%; */
    letter-spacing: 0%;
    color: #6b6b6b;

    @media ${device.android} {
      font-size: 13px;
      line-height: 140%;
    }

    @media ${device.iphone} {
      font-size: 14px;
      line-height: 145%;
    }

    @media ${device.tablet} {
      font-size: 15px;
      line-height: 148%;
    }

    @media ${device.desktop} {
      font-size: 14px;
      /* line-height: 150%; */
    }
  }

  .price_holder {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: baseline;
    gap: 5px;

    .price {
      font-family: Inter;
      font-weight: 600;
      font-style: Semi Bold;
      font-size: 16px;
      /* line-height: 140%; */
      letter-spacing: 0%;
      color: #222222;

      @media ${device.android} {
        font-size: 24px;
        line-height: 130%;
      }

      @media ${device.iphone} {
        font-size: 26px;
        line-height: 130%;
      }

      @media ${device.tablet} {
        font-size: 30px;
        line-height: 135%;
      }

      @media ${device.desktop} {
        font-size: 16px;
        /* line-height: 140%; */
      }
    }

    .period {
      font-family: Inter;
      font-weight: 400;
      font-style: Regular;
      font-size: 14px;
      /* line-height: 150%; */
      letter-spacing: 0%;
      color: #6b6b6b;

      @media ${device.android} {
        font-size: 14px;
        line-height: 140%;
      }

      @media ${device.iphone} {
        font-size: 15px;
        line-height: 145%;
      }

      @media ${device.tablet} {
        font-size: 17px;
        line-height: 148%;
      }

      @media ${device.desktop} {
        font-size: 14px;
        /* line-height: 150%; */
      }
    }
  }
`;

export const InfoBox = styled.div`
  width: 100%;
  height: auto;
  background: #f0f0ff;
  border: 1.5px solid #d0d0ff;
  border-radius: 15px;
  display: flex;
  align-items: flex-start;
  padding: 20px 22px;
  gap: 15px;

  @media ${device.android} {
    padding: 16px 16px;
    gap: 12px;
    border-radius: 12px;
  }

  @media ${device.iphone} {
    padding: 18px 18px;
    gap: 13px;
    border-radius: 13px;
  }

  @media ${device.tablet} {
    padding: 20px 20px;
    gap: 14px;
    border-radius: 14px;
  }

  @media ${device.desktop} {
    padding: 20px 22px;
    gap: 15px;
    border-radius: 15px;
  }
`;

export const InfoIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: #5962ff;
  flex-shrink: 0;

  @media ${device.android} {
    width: 24px;
    height: 24px;
    font-size: 22px;
  }

  @media ${device.iphone} {
    width: 26px;
    height: 26px;
    font-size: 24px;
  }

  @media ${device.tablet} {
    width: 28px;
    height: 28px;
    font-size: 26px;
  }

  @media ${device.desktop} {
    width: 30px;
    height: 30px;
    font-size: 28px;
  }
`;

export const InfoText = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${device.android} {
    gap: 5px;
  }

  @media ${device.iphone} {
    gap: 6px;
  }

  @media ${device.tablet} {
    gap: 7px;
  }

  @media ${device.desktop} {
    gap: 8px;
  }

  .info_title {
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0%;
    color: #5962ff;

    @media ${device.android} {
      font-size: 14px;
      line-height: 130%;
    }

    @media ${device.iphone} {
      font-size: 15px;
      line-height: 135%;
    }

    @media ${device.tablet} {
      font-size: 17px;
      line-height: 138%;
    }

    @media ${device.desktop} {
      font-size: 18px;
      line-height: 140%;
    }
  }

  .info_description {
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 15px;
    line-height: 150%;
    letter-spacing: 0%;
    color: #5962ff;

    @media ${device.android} {
      font-size: 12px;
      line-height: 140%;
    }

    @media ${device.iphone} {
      font-size: 13px;
      line-height: 145%;
    }

    @media ${device.tablet} {
      font-size: 14px;
      line-height: 148%;
    }

    @media ${device.desktop} {
      font-size: 15px;
      line-height: 150%;
    }
  }
`;

export const ButtonsHolder = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;

  gap: 15px;
  /* background: red; */

  @media ${device.android} {
    flex-direction: column;
    gap: 12px;
  }

  @media ${device.iphone} {
    flex-direction: column;
    gap: 13px;
  }

  @media ${device.tablet} {
    gap: 14px;
  }

  @media ${device.desktop} {
    /* gap: 15px; */
    flex-direction: row;
  }
`;

export const CancelBtn = styled.button`
  width: 45%;
  height: 56px;
  background: #ffffff;
  border-radius: 10px;
  border: 1.5px solid #e5e5e5;
  outline: none;
  cursor: pointer;
  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 18px;
  /* line-height: 140%; */
  letter-spacing: 0%;
  color: #222222;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media ${device.android} {
    width: 100%;
    height: 50px;
    font-size: 15px;
    border-radius: 8px;
    gap: 6px;
  }

  @media ${device.iphone} {
    width: 100%;
    height: 52px;
    font-size: 16px;
    border-radius: 9px;
    gap: 7px;
  }

  @media ${device.tablet} {
    width: 48%;
    height: 54px;
    font-size: 17px;
    border-radius: 10px;
    gap: 8px;
  }

  /* @media ${device.desktop} {
    width: 45%;
    height: 56px;
    font-size: 18px;
    border-radius: 10px;
    gap: 8px;
  } */

  &:hover {
    background: #f9f9f9;
  }
`;

export const ContinueBtn = styled.button`
  width: 45%;
  height: 56px;
  background: #303bff;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 18px;
  /* line-height: 140%; */
  letter-spacing: 0%;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media ${device.android} {
    width: 100%;
    height: 50px;
    font-size: 15px;
    border-radius: 8px;
    gap: 8px;
  }

  @media ${device.iphone} {
    width: 100%;
    height: 52px;
    font-size: 16px;
    border-radius: 9px;
    gap: 9px;
  }

  @media ${device.tablet} {
    width: 52%;
    height: 54px;
    font-size: 17px;
    border-radius: 10px;
    gap: 10px;
  }

  /* @media ${device.desktop} {
    width: 45%;
    height: 56px;
    font-size: 18px;
    border-radius: 10px;
    gap: 10px;
  } */

  &:hover {
    background: #2730d9;
  }
`;
