import React from "react";
import {
  FaArrowLeft,
  FaBuilding,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaUser,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import "../../Styles/OnboardingBus.css";

const Onboarding = () => {
  return (
    <div className="onboarding-container">
      {/* <header className="onboarding-header">

        <div className="logo-section">
          <h1 className="logo">KwikQ</h1>
          <p className="subtitle">Branch Onboarding</p>
        </div>
      </header> */}
      <header className="onboarding-header">
        <div className="section">
          <div className="back-btn">
            <FaArrowLeft className="icon" />
          </div>
          <div className="logo-container">
            <div className="logo-section">
              <img
                src="https://res.cloudinary.com/dmqhseusw/image/upload/v1760739526/35379ce965af990a259b5b98b745a14f6d61bddc_edhy49.png"
                alt="company-logo"
                className="picture"
              />
              <p className="subtitle">Branch Onboarding</p>
            </div>
          </div>
        </div>
      </header>
      <div className="stepper">
        <div className="step active">
          <div className="icon-holder active">
            <FaBuilding className="step-icon" />
          </div>
          <span>Organization Details</span>
        </div>
        <div className="divider active"></div>
        <div className="step">
          <div className="icon-holder ">
            <FaMapMarkerAlt className="step-icon" />
          </div>
          <span>Branch Information</span>
        </div>
        <div className="divider"></div>
        <div className="step">
          <div className="icon-holder">
            <FaCheckCircle className="step-icon" />
          </div>
          <span>Review & Confirm</span>
        </div>
        S
      </div>

      <div className="form-card">
        <h2 className="form-title">Organization Details</h2>
        <p className="form-subtitle">Tell us about your organization</p>

        <div className="form-grid">
          <div>
            <label>
              Organization Name <span className="required">*</span>
            </label>
            <input type="text" placeholder="Enter your organisation name" />
          </div>
          <div>
            <label>
              Industry/Service Type <span className="required">*</span>
            </label>
            <input type="text" placeholder="Enter service" />
          </div>
        </div>

        <div>
          <label>
            Head Office Address <span className="required">*</span>
          </label>
          <input type="text" placeholder="123 Main Street" />
        </div>

        <div className="form-grid">
          <div>
            <label>
              City <span className="required">*</span>
            </label>
            <input type="text" placeholder="Enter your city" />
          </div>
          <div>
            <label>
              State <span className="required">*</span>
            </label>
            <input type="text" placeholder="Enter" />
          </div>
        </div>

        <h3 className="sub-heading">Primary Contact Person</h3>

        <div className="form-grid">
          <div className="input-with-icon">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Enter full name" />
          </div>
          <div className="input-with-icon">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Enter Email Address" />
          </div>
        </div>

        <div className="input-with-icon">
          <FaPhone className="input-icon" />
          <input type="tel" placeholder="Enter phone number" />
        </div>
      </div>
      <div className="button-wrapper">
        <button className="continue-btn">Continue to Branches →</button>
      </div>
    </div>
  );
};

export default Onboarding;
