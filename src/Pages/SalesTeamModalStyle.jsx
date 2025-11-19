import styled from "styled-components";

const device = {
  android: "(min-width: 360px)",
  iphone: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
};

export const ModalContainer = styled.div`
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
    width: 50%;
    height: 98%;
    background: #ffffff;
    /* background: red; */
    border-radius: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;

    @media ${device.android} {
      width: 98%;
      height: 98%;
      padding: 10px;
      border-radius: 15px;
    }

    @media ${device.iphone} {
      width: 95%;
      height: 98%;
      padding: 10px;
      border-radius: 15px;
    }

    @media ${device.tablet} {
      width: 70%;
      height: 85%;
      padding: 30px;
      border-radius: 18px;
    }

    @media ${device.desktop} {
      width: 50%;
      height: 98%;
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 25px;
      padding-top: 25px;
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
    height: 20%;
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
      gap: 5px;
      height: 20%;
    }
  }

  .contact_badge {
    width: fit-content;
    padding: 12px 24px;
    background: #bfc2ff;
    color: #5962ff;
    border-radius: 30px;
    font-family: Inter;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    

    @media ${device.android} {
      padding: 6px 10px;
      font-size: 12px;
    }

    @media ${device.iphone} {
      padding: 6px 10px;
      font-size: 12px;
    }

    @media ${device.tablet} {
      padding: 11px 22px;
      font-size: 15px;
    }

    .sparkle_icon {
      font-size: 18px;

      @media ${device.android} {
        font-size: 13px;
      }

      @media ${device.iphone} {
        font-size: 12px;
      }
    }
  }

  .modal_title {
    font-family: Inter;
    font-weight: 700;
    font-size: 30px;
    color: #000000;
    margin: 0;
    /* line-height: 120%; */

    @media ${device.android} {
      font-size: 18px;
    }

    @media ${device.iphone} {
      font-size: 18px;
    }

    @media ${device.tablet} {
      font-size: 30px;
    }
  }

  .modal_subtitle {
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    color: #666666;
    margin: 0;
    /* line-height: 150%; */

    @media ${device.android} {
      font-size: 12px;
    }

    @media ${device.iphone} {
      font-size: 12px;
    }

    @media ${device.tablet} {
      font-size: 15px;
    }
  }


  .modal_body {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
    padding-right: 10px;

    @media ${device.android} {
      gap: 8px;
    }

    @media ${device.iphone} {
      gap: 8px;
    }
    @media ${device.desktop} {
      gap: 20px;
    }
  }

  .form_row {
    width: 100%;
    display: flex;
    gap: 20px;

    @media ${device.android} {
      flex-direction: column;
      gap: 8px;
    }

    @media ${device.iphone} {
      flex-direction: column;
      gap: 8px;
    }

    @media ${device.tablet} {
      flex-direction: row;
      gap: 20px;
    }
  }

  .form_field {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media ${device.android} {
      gap: 5px;
    }

    @media ${device.iphone} {
      gap: 5px;
    }
  }

  .form_field_full {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media ${device.android} {
      gap: 8px;
    }

    @media ${device.iphone} {
      gap: 8px;
    }
  }

  .form_label {
    font-family: Inter;
    font-weight: 500;
    font-size: 16px;
    color: #000000;

    @media ${device.android} {
      font-size: 12px;
    }

    @media ${device.iphone} {
      font-size: 10px;
    }
    @media ${device.desktop} {
      font-size: 16px;
    }

    .required {
      color: #ef4444;
    }
  }

  .error_text {
    font-family: Inter;
    font-weight: 400;
    font-size: 13px;
    color: #ef4444;
    margin: 0;
    margin-top: -4px;

    @media ${device.android} {
      font-size: 11px;
    }

    @media ${device.iphone} {
      font-size: 11px;
    }
  }

  .form_input {
    width: 100%;
    height: 50px;
    padding: 12px 16px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    font-family: Inter;
    font-weight: 400;
    font-size: 15px;
    color: #000000;
    background: #f9fafb;
    outline: none;
    transition: all 0.3s ease;

    &::placeholder {
      color: #9ca3af;
    }

    &:focus {
      border-color: #6366f1;
      background: #ffffff;
    }

    @media ${device.android} {
      height: 38px;
      padding: 8px 12px;
      font-size: 13px;
    }

    @media ${device.iphone} {
      height: 38px;
      padding: 8px 12px;
      font-size: 13px;
    }
  }

  .company_size_options {
    width: 100%;
    display: flex;
    gap: 10px;

    @media ${device.android} {
      flex-wrap: wrap;
      gap: 6px;
    }

    @media ${device.iphone} {
      flex-wrap: wrap;
      gap: 6px;
    }

    @media ${device.tablet} {
      flex-wrap: nowrap;
      gap: 12px;
    }
  }

  .size_option {
    flex: 1;
    height: 35px;
    border: 1.5px solid #e0e0e0;
    border-radius: 12px;
    background: #ffffff;
    /* background: red; */
    font-family: Inter;
    font-weight: 500;
    font-size: 15px;
    color: #000000;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      border-color: #6366f1;
      background: #f5f7ff;
    }

    &.selected {
      border-color: #6366f1;
      background: #6366f1;
      color: #ffffff;
    }

    @media ${device.android} {
      flex: 0 0 calc(50% - 3px);
      height: 35px;
      font-size: 12px;
    }

    @media ${device.iphone} {
      flex: 0 0 calc(50% - 3px);
      height: 35px;
      font-size: 12px;
    }

    @media ${device.tablet} {
      flex: 1;
      height: 50px;
      font-size: 15px;
    }

    @media ${device.desktop} {
      height: 35px;
    }
  }

  .modal_footer {
    width: 100%;
   
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 10px; */
    /* margin-top: 0px; */
    /* padding-top: 5px; */
    /* background: red; */
    /* border-top: 1px solid #e0e0e0; */

    @media ${device.android} {
      flex-direction: column;
      height: 10%;
      gap: 5px;
      /* margin-top: 12px; */
      /* padding-top: 8px; */
      /* background: red;  */
    }

    @media ${device.iphone} {
      flex-direction: column;
      gap: 5px;
      min-height: 10%;
      /* margin-top: 15px; */
      /* padding-top: 10px; */
    }

    @media ${device.tablet} {
      flex-direction: row;
      gap: 10px;
      /* margin-top: 0px; */
    }
    @media ${device.desktop} {
      flex-direction: row;
      /* background: blue; */
       /* height: 10%; */
      /* gap: 10px; */
      margin-top: 0px;
    }
  }

  .cancel_btn {
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
      background: #487fde;
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

    .cancel_icon {
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
      font-size: 12px;
    }

    @media ${device.iphone} {
      width: 100%;
      min-height: 40%;
      font-size: 12px;
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