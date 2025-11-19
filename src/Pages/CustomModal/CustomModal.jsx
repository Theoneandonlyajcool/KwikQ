import { useState } from "react";
import "./CustomModal.css";

const MultiStepModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    workEmail: "",
    phoneNumber: "",
    companySize: "",
    industry: "",
    interests: [],
    additionalInfo: "",
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCompanySizeSelect = (size) => {
    setFormData((prev) => ({ ...prev, companySize: size }));
  };

  const handleInterestToggle = (interest) => {
    setFormData((prev) => {
      const interests = prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests };
    });
  };

  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCancel = () => {
    setCurrentStep(1);
    setFormData({
      companyName: "",
      fullName: "",
      workEmail: "",
      phoneNumber: "",
      companySize: "",
      industry: "",
      interests: [],
      additionalInfo: "",
    });
    onClose();
  };

  const handleDone = () => {
    console.log("Form submitted:", formData);
    handleCancel();
  };

  const handleBackToHome = () => {
    handleCancel();
  };

  return (
    <div className="modal-overlay" onClick={handleCancel}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleCancel}>
          ×
        </button>

        {currentStep === 1 && (
          <div className="modal-content">
            <div className="modal-badge">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3L6 5L4 3L2 5V13L4 11L6 13L8 11L10 13L12 11L14 13V5L12 3L10 5L8 3Z"
                  fill="currentColor"
                />
              </svg>
              Contact Sales Team
            </div>

            <h2 className="modal-title">Let's Get Started</h2>
            <p className="modal-subtitle">
              Tell us about your company and we'll help you find the right
              solution
            </p>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="companyName">
                  Company Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Acme Corporation"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="fullName">
                  Your Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="workEmail">
                  Work Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  placeholder="john@acme.com"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="+234 800 000 0000"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>
                Company Size <span className="required">*</span>
              </label>
              <div className="size-options">
                {["1-10", "11-50", "51-200", "201-1000", "1000+"].map(
                  (size) => (
                    <button
                      key={size}
                      type="button"
                      className={`size-option ${
                        formData.companySize === size ? "active" : ""
                      }`}
                      onClick={() => handleCompanySizeSelect(size)}
                    >
                      {size}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="industry">Industry (Optional)</label>
              <input
                type="text"
                id="industry"
                name="industry"
                placeholder="e.g., Banking, Healthcare, Retail"
                value={formData.industry}
                onChange={handleInputChange}
              />
            </div>

            <div className="modal-actions">
              <button className="btn-secondary" onClick={handleCancel}>
                <span className="btn-icon">×</span>
                Cancel
              </button>
              <button className="btn-primary" onClick={handleContinue}>
                Continue
                <span className="btn-icon">→</span>
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="modal-content">
            <h2 className="modal-title">What Are You Interested In?</h2>
            <p className="modal-subtitle">
              Select the features and services you'd like to learn more about
            </p>

            <div className="interests-grid">
              <button
                type="button"
                className={`interest-card ${
                  formData.interests.includes("queue") ? "active" : ""
                }`}
                onClick={() => handleInterestToggle("queue")}
              >
                <div className="interest-checkbox">
                  {formData.interests.includes("queue") && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 4L6 11L3 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <div className="interest-text">
                  <div className="interest-title">Queue Management System</div>
                </div>
              </button>

              <button
                type="button"
                className={`interest-card ${
                  formData.interests.includes("analytics") ? "active" : ""
                }`}
                onClick={() => handleInterestToggle("analytics")}
              >
                <div className="interest-checkbox">
                  {formData.interests.includes("analytics") && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 4L6 11L3 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <div className="interest-text">
                  <div className="interest-title">
                    Advanced Analytics & Reporting
                  </div>
                </div>
              </button>

              <button
                type="button"
                className={`interest-card ${
                  formData.interests.includes("branch") ? "active" : ""
                }`}
                onClick={() => handleInterestToggle("branch")}
              >
                <div className="interest-checkbox">
                  {formData.interests.includes("branch") && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 4L6 11L3 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <div className="interest-text">
                  <div className="interest-title">Multi-Branch Management</div>
                </div>
              </button>
            </div>

            <div className="step-indicator">
              <div className="step-avatar">D</div>
            </div>

            <div className="form-group">
              <label htmlFor="additionalInfo">
                Additional Information (Optional)
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                placeholder="Tell us more about your needs, number of locations, expected usage, or any specific requirements..."
                rows="4"
                value={formData.additionalInfo}
                onChange={handleInputChange}
              />
            </div>

            <div className="modal-actions">
              <button className="btn-secondary" onClick={handleBack}>
                <span className="btn-icon">←</span>
                Back
              </button>
              <button className="btn-primary" onClick={handleContinue}>
                Continue
                <span className="btn-icon">→</span>
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="modal-content success-content">
            <div className="success-icons">
              <div className="success-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="#10B981" />
                  <path
                    d="M22 11L14 19L10 15"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="step-avatar">D</div>
            </div>

            <h2 className="modal-title">Thank You!</h2>
            <p className="modal-subtitle">
              We've received your request. Our sales team will contact you
              within 24 hours.
            </p>

            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3H17V14H3V3Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 6L10 11L17 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="info-text">
                  <div className="info-title">Check Your Email</div>
                  <div className="info-description">
                    We've sent a confirmation to{" "}
                    {formData.workEmail || "company56@gmail.com"}
                  </div>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3H11C12.1046 3 13 3.89543 13 5V17L10 15L7 17V5C7 3.89543 6.10457 3 5 3H3V3Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="10"
                      cy="10"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className="info-text">
                  <div className="info-title">Expect a Call</div>
                  <div className="info-description">
                    Our team will reach out to{" "}
                    {formData.phoneNumber || "09098826156"}
                  </div>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="14"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path d="M3 8H17" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M7 3V8" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M13 3V8" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="info-text">
                  <div className="info-title">What's Next?</div>
                  <div className="info-description">
                    Our sales specialist will prepare a custom demo based on
                    your requirements
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <button className="btn-primary full-width" onClick={handleDone}>
                Done
              </button>
              <button className="btn-text" onClick={handleBackToHome}>
                Back to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepModal;
