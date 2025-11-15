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
  width: 45%;
  height: 95%;
  background: #ffffff;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 30px;
  gap: 15px;

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
    /* width: 595px; */
    width: 45%;
    padding: 15px 35px;
    gap: 15px;
  }
`;

export const CloseBtn = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 24px;
  color: #222222;

  @media ${device.android} {
    width: 25px;
    height: 25px;
    top: 15px;
    right: 15px;
    font-size: 20px;
  }

  @media ${device.iphone} {
    width: 28px;
    height: 28px;
    top: 18px;
    right: 18px;
    font-size: 22px;
  }

  @media ${device.tablet} {
    width: 30px;
    height: 30px;
    top: 20px;
    right: 20px;
    font-size: 24px;
  }

  @media ${device.desktop} {
    width: 32px;
    height: 32px;
    top: 22px;
    right: 22px;
    font-size: 26px;
  }
`;

export const SuccessIconHolder = styled.div`
  width: 50px;
  height: 100px;
  border-radius: 50%;
  background: #10b981;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media ${device.android} {
    width: 70px;
    height: 70px;
  }

  @media ${device.iphone} {
    width: 75px;
    height: 75px;
  }

  @media ${device.tablet} {
    width: 85px;
    height: 85px;
  }

  @media ${device.desktop} {
    width: 50px;
    height: 100px;
  }

  .success_circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: #10b981;
    /* background: red; */

    @media ${device.android} {
      width: 38px;
      height: 38px;
      font-size: 24px;
    }

    @media ${device.iphone} {
      width: 42px;
      height: 42px;
      font-size: 26px;
    }

    @media ${device.tablet} {
      width: 48px;
      height: 48px;
      font-size: 30px;
    }

    @media ${device.desktop} {
      width: 40px;
      height: 40px;
      font-size: 32px;
    }
  }
`;

export const TitleSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  @media ${device.android} {
    gap: 8px;
  }

  @media ${device.iphone} {
    gap: 10px;
  }

  @media ${device.tablet} {
    gap: 12px;
  }

  @media ${device.desktop} {
    gap: 5px;
  }

  .title_text {
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 20px;
    /* line-height: 140%; */
    letter-spacing: 0%;
    text-align: center;
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
      font-size: 22px;
      /* line-height: 140%; */
    }
  }

  .subtitle_text {
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: center;
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
      font-size: 15px;
      line-height: 148%;
    }

    @media ${device.desktop} {
      font-size: 14px;
      /* line-height: 150%; */
    }
  }
`;

export const InfoCardHolder = styled.div`
  width: 100%;
  height: auto;
  background: #f0fdf4;
  border-radius: 15px;
  border: 1.5px solid #d1fae5;
  display: flex;
  flex-direction: column;
  padding: 25px 20px;
  gap: 20px;

  @media ${device.android} {
    padding: 18px 15px;
    gap: 15px;
    border-radius: 12px;
  }

  @media ${device.iphone} {
    padding: 20px 18px;
    gap: 17px;
    border-radius: 13px;
  }

  @media ${device.tablet} {
    padding: 23px 20px;
    gap: 19px;
    border-radius: 14px;
  }

  @media ${device.desktop} {
    padding: 25px 22px;
    gap: 20px;
    border-radius: 15px;
  }
`;

export const InfoItem = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  gap: 15px;

  @media ${device.android} {
    gap: 12px;
  }

  @media ${device.iphone} {
    gap: 13px;
  }

  @media ${device.tablet} {
    gap: 14px;
  }

  @media ${device.desktop} {
    gap: 15px;
  }

  .info_icon {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #5b21b6;
    flex-shrink: 0;

    @media ${device.android} {
      width: 32px;
      height: 32px;
      font-size: 20px;
    }

    @media ${device.iphone} {
      width: 35px;
      height: 35px;
      font-size: 22px;
    }

    @media ${device.tablet} {
      width: 38px;
      height: 38px;
      font-size: 23px;
    }

    @media ${device.desktop} {
      width: 40px;
      height: 40px;
      font-size: 24px;
    }
  }

  .info_content {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media ${device.android} {
      gap: 3px;
    }

    @media ${device.iphone} {
      gap: 4px;
    }

    @media ${device.tablet} {
      gap: 5px;
    }

    @media ${device.desktop} {
      gap: 6px;
    }

    .info_title {
      font-family: Inter;
      font-weight: 600;
      font-style: Semi Bold;
      font-size: 18px;
      line-height: 140%;
      letter-spacing: 0%;
      color: #222222;

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
      color: #6b6b6b;

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
  }
`;

export const ButtonsHolder = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${device.android} {
    gap: 10px;
  }

  @media ${device.iphone} {
    gap: 11px;
  }

  @media ${device.tablet} {
    gap: 12px;
  }

  @media ${device.desktop} {
    gap: 14px;
  }
`;

export const PrimaryBtn = styled.button`
  width: 100%;
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
  line-height: 140%;
  letter-spacing: 0%;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.android} {
    height: 48px;
    font-size: 15px;
    border-radius: 8px;
  }

  @media ${device.iphone} {
    height: 50px;
    font-size: 16px;
    border-radius: 9px;
  }

  @media ${device.tablet} {
    height: 54px;
    font-size: 17px;
    border-radius: 10px;
  }

  @media ${device.desktop} {
    height: 56px;
    font-size: 18px;
    border-radius: 10px;
  }

  &:hover {
    background: #2730d9;
  }
`;

export const SecondaryBtn = styled.button`
  width: 100%;
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
  line-height: 140%;
  letter-spacing: 0%;
  color: #222222;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.android} {
    height: 48px;
    font-size: 15px;
    border-radius: 8px;
  }

  @media ${device.iphone} {
    height: 50px;
    font-size: 16px;
    border-radius: 9px;
  }

  @media ${device.tablet} {
    height: 54px;
    font-size: 17px;
    border-radius: 10px;
  }

  @media ${device.desktop} {
    height: 56px;
    font-size: 18px;
    border-radius: 10px;
  }

  &:hover {
    background: #f9f9f9;
  }
`;
