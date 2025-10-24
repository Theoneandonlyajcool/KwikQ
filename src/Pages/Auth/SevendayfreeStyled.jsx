import styled from "styled-components";

export const SevendayfreeStyled = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background: #f8f9fa;
  padding: 20px;
  font-family: inter, sans-serif;

  /* MOBILE (Android + iPhone) */
  @media (max-width: 767px) {
    height: auto;
    padding: 15px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: #6b7280;
  font-size: 15px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #e5e7eb;
    color: #374151;
  }

  svg {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    font-size: 13px;
    padding: 6px 8px;
  }
`;

export const ContentWrapper = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 28px;

  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    gap: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 90%;
    gap: 20px;
  }
`;

export const LeftSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .titlehub {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: 767px) {
    width: 100%;
    align-items: center;
    text-align: center;

    .titlehub {
      align-items: center;
    }
  }
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(90deg, #303bff 0%, #96f7e4 100%);
  color: white;
  padding: 6px 14px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 500;
  width: fit-content;
  margin-top: 15px;

  svg,
  img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  @media (max-width: 767px) {
    font-size: 12px;
    padding: 5px 10px;
    gap: 5px;
    margin: 10px auto;

    svg,
    img {
      width: 14px;
      height: 14px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 13px;

    svg,
    img {
      width: 15px;
      height: 15px;
    }
  }
`;

export const Title = styled.p`
  font-size: 38px;
  font-weight: 600;
  font-family: inter;
  line-height: 100%;
  color: #111827;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 28px;
    line-height: 110%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 32px;
  }
`;

export const GradientText = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 100%;
  background: linear-gradient(90deg, #303bff 0%, #96f7e4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
  color: #666666;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 130%;
  }
`;

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;

  @media (max-width: 767px) {
    gap: 10px;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: #374151;

  .icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 13px;

    .icon {
      width: 20px;
      height: 20px;
      font-size: 12px;
    }
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 25px;

  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;

    button {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;

    /* button {
      width: 100%;
    } */
  }
`;

export const PrimaryButton = styled.button`
  width: 50%;
  height: 80%;
  display: flex;
  align-items: center;
  gap: 5px;
  background: #303bff;
  color: white;
  border: none;
  padding: 14px 14px;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);

  &:hover {
    background: #4338ca;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(79, 70, 229, 0.4);
  }

  @media (max-width: 767px) {
    width: 100%;
    font-size: 14px;
    padding: 12px;
    display: flex;
    justify-content: center;
  }
`;

export const SecondaryButton = styled.button`
  background: transparent;
  color: #5962ff;
  border: 1.25px solid #303bff;
  padding: 14px 14px;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 50%;
  height: 80%;

  &:hover {
    background: #f5f7ff;
  }

  @media (max-width: 767px) {
    width: 100%;
    font-size: 14px;
    padding: 12px;
  }
`;

export const RightSection = styled.div`
  width: 50%;
  height: 80%;
  margin-top: 70px;
  background: white;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background: black;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 767px) {
    height: 250px;
    border-radius: 12px;
  }
`;

export const ImageBadge = styled.div`
  position: absolute;
  background: white;
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  gap: 10px;

  &.trial-badge {
    top: 20px;
    right: 20px;
  }

  &.features-badge {
    bottom: 20px;
    left: 20px;
  }

  @media (max-width: 767px) {
    padding: 8px 12px;
    border-radius: 8px;

    &.trial-badge {
      top: 10px;
      right: 10px;
    }

    &.features-badge {
      bottom: 10px;
      left: 10px;
    }
  }
`;

export const BadgeIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 18px;

  &.success {
    background: #d1fae5;
    color: #059669;
  }

  &.feature {
    background: #dbeafe;
    color: #3b82f6;
  }

  @media (max-width: 767px) {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
`;

export const BadgeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  .badge-title {
    font-size: 12px;
    color: #6b7280;
    font-weight: 500;
  }

  .badge-text {
    font-size: 14px;
    color: #111827;
    font-weight: 600;
  }

  @media (max-width: 767px) {
    .badge-title {
      font-size: 11px;
    }

    .badge-text {
      font-size: 13px;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    height: auto;
    margin-top: 20px;
  }
`;

export const InfoBox = styled.div`
  background: #f0f4ff;
  border: 1.75px solid #5962ff33;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  gap: 16px;
  width: 80%;
  height: 48%;

  .info-icon {
    width: 24px;
    height: 24px;
    background: #dbeafe;
    color: #3b82f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin-top: 2px;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    padding: 15px;
    gap: 12px;

    .info-icon {
      width: 20px;
      height: 20px;
      font-size: 12px;
    }
  }
`;

export const InfoContent = styled.div`
  .info-title {
    font-size: 15px;
    font-weight: 600;
    color: #111827;
    margin: 0 0 6px 0;
  }

  .info-text {
    font-size: 14px;
    color: #6b7280;
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 767px) {
    .info-title {
      font-size: 14px;
    }

    .info-text {
      font-size: 13px;
    }
  }
`;
