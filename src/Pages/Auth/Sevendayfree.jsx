import React from "react";
import {
  SevendayfreeStyled,
  Header,
  BackButton,
  ContentWrapper,
  LeftSection,
  Badge,
  Title,
  GradientText,
  Subtitle,
  FeatureList,
  FeatureItem,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  RightSection,
  ImageContainer,
  ImageBadge,
  BadgeIcon,
  BadgeContent,
  Footer,
  InfoBox,
  InfoContent,
} from "./SevendayfreeStyled";
import {
  IoChevronBack,
  IoCheckmarkCircle,
  IoFlash,
  IoShieldCheckmark,
  IoTrendingUp,
  IoArrowForward,
  IoSparkles,
  IoInformationCircle,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const FreeTrialPage = () => {
  const nav = useNavigate();
  const handleContinueTrial = () => {
    console.log("Starting free trial...");
    nav("/admin_dashboard");
    // Add your trial start logic here
  };

  const handleViewPlans = () => {
    console.log("Viewing upgrade plans...");
    // Add your navigation logic here
  };

  const handleBack = () => {
    nav("/businessCategory");
  };

  return (
    <SevendayfreeStyled>
      <Header>
        <BackButton onClick={handleBack}>
          <IoChevronBack />
          Back
        </BackButton>
      </Header>

      <ContentWrapper>
        <LeftSection>
          <div className="titlehub">
            <Badge>
              <IoSparkles />
              Limited Time Offer
            </Badge>

            <div>
              <Title>Start Your 7-Day</Title>
              <GradientText>Free Trial</GradientText>
            </div>

            <Subtitle>
              Experience the full power of our platform. No credit card <br />{" "}
              required.
            </Subtitle>
          </div>

          <FeatureList>
            <FeatureItem>
              <div className="icon check-icon">
                <IoCheckmarkCircle />
              </div>
              Full access to all premium features
            </FeatureItem>

            <FeatureItem>
              <div className="icon lightning-icon">
                <IoFlash />
              </div>
              Unlimited service queue points
            </FeatureItem>

            <FeatureItem>
              <div className="icon shield-icon">
                <IoShieldCheckmark />
              </div>
              QR code access
            </FeatureItem>

            <FeatureItem>
              <div className="icon chart-icon">
                <IoTrendingUp />
              </div>
              Real-time analytics and insights
            </FeatureItem>
          </FeatureList>

          <ButtonGroup>
            <PrimaryButton onClick={handleContinueTrial}>
              Continue with Free Trial
              <IoArrowForward />
            </PrimaryButton>
            <SecondaryButton onClick={handleViewPlans}>
              View Upgrade Plans
            </SecondaryButton>
          </ButtonGroup>
        </LeftSection>

        <RightSection>
          <ImageContainer>
            <img
              src="https://res.cloudinary.com/dmqhseusw/image/upload/v1761298468/5f34390d6ecd86500874c429422e00503f19392d_kvsbjk.jpg"
              alt="Team collaboration"
            />
            <ImageBadge className="trial-badge">
              <BadgeIcon className="success">
                <IoCheckmarkCircle />
              </BadgeIcon>
              <BadgeContent>
                <div className="badge-title">Trial Started</div>
                <div className="badge-text">7 Days Free</div>
              </BadgeContent>
            </ImageBadge>

            <ImageBadge className="features-badge">
              <BadgeIcon className="feature">
                <IoSparkles />
              </BadgeIcon>
              <BadgeContent>
                <div className="badge-title">All Features</div>
                <div className="badge-text">Unlocked</div>
              </BadgeContent>
            </ImageBadge>
          </ImageContainer>
        </RightSection>
      </ContentWrapper>

      <Footer>
        <InfoBox>
          <div className="info-icon">
            <IoInformationCircle />
          </div>
          <InfoContent>
            <h3 className="info-title">What happens after the trial?</h3>
            <p className="info-text">
              Your 7-day free trial gives you partial access to all features.
              After the trial ends, you can choose a plan that best fits your
              needs.
            </p>
          </InfoContent>
        </InfoBox>
      </Footer>
    </SevendayfreeStyled>
  );
};

export default FreeTrialPage;
