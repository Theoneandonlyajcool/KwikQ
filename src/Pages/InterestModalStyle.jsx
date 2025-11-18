import styled from "styled-components";

const device = {
  android: "(min-width: 360px)",
  iphone: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
};

export const InterestModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .modal_overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    @media ${device.android} {
      padding: 10px;
    }

    @media ${device.iphone} {
      padding: 10px;
    }

    @media ${device.tablet} {
      padding: 20px;
    }
  }

  .modal_content {
    width: 45%;
    height: 98%;
    background: #ffffff;
    /* background: red; */
    border-radius: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 25px;

    @media ${device.android} {
      width: 98%;
      height: 98%;
      padding: 10px;
      border-radius: 15px;
    }

    @media ${device.iphone} {
      width: 95%;
      height: 98%;
      padding-top: 20px;
      padding-bottom: 20px;
      border-radius: 15px;
    }

    @media ${device.tablet} {
      width: 70%;
      height: 85%;
      padding: 30px;
      border-radius: 18px;
    }

    @media ${device.desktop} {
      width: 45%;
      height: 98%;
      padding: 25px;
    }
  }

  .close_btn {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 35px;
    border: none;
    background: transparent;
    font-size: 24px;
    color: #666666;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
      background: #f5f5f5;
      color: #333333;
    }

    @media ${device.android} {
      top: 12px;
      right: 12px;
      width: 30px;
      height: 30px;
      font-size: 20px;
    }

    @media ${device.iphone} {
      top: 12px;
      right: 12px;
      width: 30px;
      height: 30px;
      font-size: 20px;
    }

    @media ${device.desktop} {
      height: 35px;
    }
  }

  .modal_header {
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* background: blue; */

    @media ${device.android} {
      height: auto;
      gap: 5px;
      margin-bottom: 10px;
    }

    @media ${device.iphone} {
      height: auto;
      gap: 5px;
      margin-bottom: 10px;
    }

    @media ${device.desktop} {
      gap: 10px;
      height: 10%;
    }
  }

  .modal_title {
    font-family: Inter;
    font-weight: 600;
    font-size: 20px;
    color: #0A0A0A;
    margin: 0;

    @media ${device.android} {
      font-size: 18px;
    }

    @media ${device.iphone} {
      font-size: 18px;
    }

    @media ${device.tablet} {
      font-size: 30px;
    }
    @media ${device.desktop} {
      font-size: 20px;
    }
  }

  .modal_subtitle {
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    color: #666666;
    margin: 0;

    @media ${device.android} {
      font-size: 12px;
    }

    @media ${device.iphone} {
      font-size: 12px;
    }

    @media ${device.tablet} {
      font-size: 14px;
    }
  }

  .modal_body {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
    /* background: red; */

    @media ${device.android} {
      gap: 10px;
    }

    @media ${device.iphone} {
      gap: 10px;
    }

    @media ${device.desktop} {
      gap: 20px;
    }
  }

  .interests_grid {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    /* background: blue; */

    @media ${device.android} {
      gap: 20px;
    }

    @media ${device.iphone} {
      gap: 20px;
    }

    @media ${device.desktop} {
      gap: 15px;
    }
  }

  .interest_card {
    width: 48%;
    min-height: 60px;
    padding: 20px;
    border: 2px solid #e0e0e0;
    border-radius: 15px;
    background: #ffffff;
    display: flex;
    gap: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
    /* background: pink; */

    &:hover {
      border-color: #8b5cf6;
      background: #f5f3ff;
    }

    &.selected {
      border-color: #464feb;
      background: #Bfc2ff;
    }

    @media ${device.android} {
      width: 100%;
      min-height: 60px;
      padding: 12px;
      gap: 10px;
      border-radius: 10px;
    }

    @media ${device.iphone} {
      width: 100%;
      min-height: 60px;
      padding: 12px;
      gap: 10px;
      border-radius: 10px;
    }

    @media ${device.desktop} {
      min-height: 60px;
      width: 48%;
      padding: 20px;
    }
  }

  .checkbox_wrapper {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    @media ${device.android} {
      width: 20px;
      height: 20px;
    }

    @media ${device.iphone} {
      width: 20px;
      height: 20px;
    }
  }

  .check_icon {
    width: 24px;
    height: 24px;
    color: #ffffff;
    background: #0a0a0a;
    border-radius: 4px;
    padding: 2px;

    @media ${device.android} {
      width: 20px;
      height: 20px;
    }

    @media ${device.iphone} {
      width: 20px;
      height: 20px;
    }
  }

  .empty_checkbox {
    width: 24px;
    height: 24px;
    border: 2px solid #9ca3af;
    border-radius: 4px;
    background: #ffffff;

    @media ${device.android} {
      width: 20px;
      height: 20px;
    }

    @media ${device.iphone} {
      width: 20px;
      height: 20px;
    }
  }

  .interest_label {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    color: #222222;
    line-height: 1.4;

    @media ${device.android} {
      font-size: 14px;
    }

    @media ${device.iphone} {
      font-size: 14px;
    }

    @media ${device.desktop} {
      font-size: 16px;
    }
  }

  .additional_info_section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media ${device.android} {
      gap: 6px;
    }

    @media ${device.iphone} {
      gap: 6px;
    }
  }

  .info_label {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    color: #0A0A0A;

    @media ${device.android} {
      font-size: 13px;
    }

    @media ${device.iphone} {
      font-size: 13px;
    }

    @media ${device.desktop} {
      font-size: 16px;
    }
  }

  .info_textarea {
    width: 100%;
    min-height: 120px;
    padding: 15px;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    color: #0A0A0A;
    background: #f3f3f5;
    outline: none;
    resize: vertical;
    transition: all 0.3s ease;

    &::placeholder {
      color: #9ca3af;
    }

    &:focus {
      border-color: #8b5cf6;
      background: #ffffff;
    }

    @media ${device.android} {
      min-height: 80px;
      padding: 10px;
      font-size: 12px;
      border-radius: 10px;
    }

    @media ${device.iphone} {
      min-height: 80px;
      padding: 10px;
      font-size: 12px;
      border-radius: 10px;
    }

    @media ${device.desktop} {
      min-height: 120px;
      padding: 15px;
    }
  }

  .modal_footer {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${device.android} {
      flex-direction: column;
      min-height: 15%;
      gap: 5px;
    }

    @media ${device.iphone} {
      flex-direction: column;
      min-height: 15%;
      gap: 5px;
    }

    @media ${device.tablet} {
      flex-direction: row;
      gap: 10px;
    }

    @media ${device.desktop} {
      flex-direction: row;
      margin-top: 0px;
    }
  }

  .back_btn {
    flex: 1;
    height: 45px;
    border: 1.5px solid #e0e0e0;
    border-radius: 12px;
    background: #ffffff;
    font-family: Inter;
    font-weight: 500;
    font-size: 16px;
    color: #000000;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    &:hover {
      background: #1d4fd8b2;
      border-color: #d0d0d0;
    }

    @media ${device.android} {
      width: 100%;
      min-height: 45%;
      font-size: 14px;
    }

    @media ${device.iphone} {
      width: 100%;
      min-height: 45%;
      font-size: 14px;
    }

    @media ${device.tablet} {
      flex: 1;
      height: 52px;
    }

    @media ${device.desktop} {
      height: 45px;
      padding: 0px;
    }

    .back_icon {
      font-size: 20px;

      @media ${device.android} {
        font-size: 16px;
      }

      @media ${device.iphone} {
        font-size: 16px;
      }
    }
  }

  .continue_btn {
    flex: 2;
    height: 45px;
    border: none;
    border-radius: 12px;
    background: #2563eb;
    font-family: Inter;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &:hover {
      background: #1d4ed8;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    }

    @media ${device.android} {
      width: 100%;
      min-height: 40%;
      font-size: 14px;
    }

    @media ${device.iphone} {
      width: 100%;
      min-height: 40%;
      font-size: 14px;
    }

    @media ${device.tablet} {
      flex: 2;
      height: 52px;
    }

    @media ${device.desktop} {
      height: 45px;
      padding: 0px;
    }

    .continue_icon {
      font-size: 18px;

      @media ${device.android} {
        font-size: 16px;
      }

      @media ${device.iphone} {
        font-size: 16px;
      }
    }
  }
`;