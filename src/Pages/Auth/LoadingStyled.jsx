// LoadingStyled.js - Separate file for styled components
import styled, { keyframes } from "styled-components";

const device = {
  android: "(min-width: 360px)",
  iphone: "(min-width: 375px)",
  desktop: "(min-width: 1024px)",
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(3px);
`;

export const LoadingContent = styled.div`
  width: 30%;
  height: 40%;
  background: white;
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: red;
  font-size: 16px;
  gap: 15px;

  @media ${device.android} {
    width: 45%;
    height: 20%;
    font-size: 14px;
    gap: 10px;
    border-radius: 12px;
  }

  @media ${device.iphone} {
    width: 45%;
    height: 20%;
    font-size: 15px;
    gap: 12px;
    border-radius: 14px;
  }
  @media ${device.desktop} {
    width: 30%;
  }
`;

export const Spinner = styled.div`
  width: 20px;
  height: 60px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #1466FF;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  background: white;

  @media ${device.android} {
    width: 30px;
    height: 30px;
    border-width: 3px;
  }

  @media ${device.iphone} {
    width: 30px;
    height: 30px;
    border-width: 3px;
  }
`;