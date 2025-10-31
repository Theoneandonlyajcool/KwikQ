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

import "../../Styles/BranchInfo.css";

const BranchInfo = () => {
  return (
    <div className="branchinfo-container">
      <header className="branchinfo-header">
        <div className="branchinfo-header-section">
          <div className="branchinfo-back-btn">
            <FaArrowLeft className="branchinfo-icon" />
          </div>
          <div className="branchinfo-logo-container">
            <div className="branchinfo-logo-section">
              <img
                src="https://res.cloudinary.com/dmqhseusw/image/upload/v1760739526/35379ce965af990a259b5b98b745a14f6d61bddc_edhy49.png"
                alt="company-logo"
                className="branchinfo-logo"
              />
              <p className="branchinfo-logo-text">Branch Onboarding</p>
            </div>
          </div>
        </div>
      </header>

      <div className="branchinfo-stepper">
        <div className="branchinfo-step active">
          <div className="branchinfo-icon-holder active">
            <FaBuilding className="branchinfo-step-icon" />
          </div>
          <span>Organization Details</span>
        </div>
        <div className="branchinfo-divider active"></div>
        <div className="branchinfo-step">
          <div className="branchinfo-icon-holder">
            <FaMapMarkerAlt className="branchinfo-step-icon" />
          </div>
          <span>Branch Information</span>
        </div>
        <div className="branchinfo-divider"></div>
        <div className="branchinfo-step">
          <div className="branchinfo-icon-holder">
            <FaCheckCircle className="branchinfo-step-icon" />
          </div>
          <span>Review & Confirm</span>
        </div>
      </div>

      <div className="branchinfo-form-card">
        <h2 className="branchinfo-form-title">Branch Information</h2>
        <p className="branchinfo-form-subtitle">
          Add Details for each branch location
        </p>

        <div className="branchinfo-form-grid">
          <div>
            <label>
              Organization Name <span className="branchinfo-required">*</span>
            </label>
            <input type="text" placeholder="Enter your organisation name" />
          </div>
          <div>
            <label>
              Industry/Service Type{" "}
              <span className="branchinfo-required">*</span>
            </label>
            <input type="text" placeholder="Enter service" />
          </div>
        </div>

        <div>
          <label>
            Head Office Address <span className="branchinfo-required">*</span>
          </label>
          <input type="text" placeholder="123 Main Street" />
        </div>

        <div className="branchinfo-form-grid">
          <div>
            <label>
              City <span className="branchinfo-required">*</span>
            </label>
            <input type="text" placeholder="Enter your city" />
          </div>
          <div>
            <label>
              State <span className="branchinfo-required">*</span>
            </label>
            <input type="text" placeholder="Enter" />
          </div>
        </div>

        <h3 className="branchinfo-subheading">Primary Contact Person</h3>

        <div className="branchinfo-form-grid">
          <div className="branchinfo-input-with-icon">
            <FaUser className="branchinfo-input-icon" />
            <input type="text" placeholder="Enter full name" />
          </div>
          <div className="branchinfo-input-with-icon">
            <FaEnvelope className="branchinfo-input-icon" />
            <input type="email" placeholder="Enter Email Address" />
          </div>
        </div>

        <div className="branchinfo-input-with-icon">
          <FaPhone className="branchinfo-input-icon" />
          <input type="tel" placeholder="Enter phone number" />
        </div>
      </div>

      <div className="branchinfo-button-wrapper">
        <button className="branchinfo-continue-btn">
          Continue to Branches →
        </button>
      </div>
    </div>
  );
};

export default BranchInfo;
