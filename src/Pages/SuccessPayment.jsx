import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SuccessPayment.css";
import { FaCheck } from "react-icons/fa";

const ThankYouModal = () => {
  const nav = useNavigate();
  // const [isOpen, setIsOpen] = useState(true);
  // const [userEmail] = useState("Jacobhenry56@gmail.com");
  // const [userPhone] = useState("09096828156");

  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  // const handleDone = () => {
  //   console.log("Done clicked");
  //   setIsOpen(false);
  // };

  // const handleBackToHome = () => {
  //   console.log("Back to Home clicked");
  //   setIsOpen(false);
  // };

  // if (!isOpen) {
  //   return null;
  // }

  const Info = JSON.parse(localStorage.getItem("adminInfo"));
  const UserRole = localStorage.getItem("UserRole");

  return (
    <div className="subscription-success-container">
      <div className="subscription-success-card">
        <div className="success-icon-wrapper">
          <div className="success-icon">
            {/* <Check className="check-icon" /> */}
            <FaCheck style={{ fontSize: "2rem" }} />
          </div>
        </div>

        <h1 className="success-title">Thank you for Subscribing!</h1>
        <p className="success-description">
          Your free trial has started successfully. We've sent a confirmation
          email to <span className="email-text">{Info?.email}</span>
        </p>

        <div className="whats-next-section">
          <div className="whats-next-header">
            {/* <Sparkles className="sparkles-icon" /> */}
            <h2 className="whats-next-title">What's Next?</h2>
          </div>
          <p className="whats-next-description">
            Get started with these steps:
          </p>

          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <p className="step-text">Complete your organization profile</p>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <p className="step-text">
                Add your first branch and service points
              </p>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <p className="step-text">
                Start managing queues and delighting customers!
              </p>
            </div>
          </div>
        </div>

        <div className="button-group">
          <button
            className="dashboard-button"
            onClick={() => {
              if (UserRole == "multi") {
                nav("/dashboard");
              } else {
                nav("/admin_dashboard");
              }
            }}
          >
            Go to Dashboard
            {/* <ArrowRight className="arrow-icon" /> */}
          </button>
          {/* <button className="close-button">Close</button> */}
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
