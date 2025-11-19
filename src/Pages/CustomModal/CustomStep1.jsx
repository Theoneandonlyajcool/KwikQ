import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useFormContext } from "../contexts/FormContext";
// import { FormBadge } from "../components/FormBadge";
import "./CustomStep1.css";

const CustomStep1 = () => {
  const nav = useNavigate();
  const companySizes = ["1-10", "11-50", "51-200", "201-1000", "1000+"];
  const [activeSize, setActiveSize] = useState("");
  console.log(activeSize);

  return (
    <div className="contact-page">
      <div className="contact-card">
        <button className="close-button">×</button>

        {/* <FormBadge /> */}

        <h1 className="contact-title">Let's Get Started</h1>
        <p className="contact-subtitle">
          Tell us about your company and we'll help you find the right solution
        </p>

        <div className="form-section">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="companyName" className="form-label">
                Company Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="form-input"
                placeholder="Acme Corporation"
                // value={localData.companyName}
                // onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Your Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="form-input"
                placeholder="John Doe"
                // value={localData.fullName}
                // onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="workEmail" className="form-label">
                Work Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                className="form-input"
                placeholder="john@acme.com"
                // value={localData.workEmail}
                // onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="form-input"
                placeholder="+234 800 000 0000"
                // value={localData.phoneNumber}
                // onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              Company Size <span className="required">*</span>
            </label>
            <div className="size-options">
              {companySizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => {
                    setActiveSize(size);
                  }}
                  style={{
                    padding: "1rem 1rem",
                    border: "1px solid gray",
                    borderRadius: ".5rem",
                    cursor: "pointer",
                    backgroundColor: activeSize === size ? "blue" : "white",
                    color: activeSize === size ? "white" : "black",
                  }}
                  //   onClick={() => handleCompanySizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="industry" className="form-label">
              Industry (Optional)
            </label>
            <input
              type="text"
              id="industry"
              name="industry"
              className="form-input"
              placeholder="e.g., Banking, Healthcare, Retail"
              //   value={localData.industry}
              //   onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="button-group">
          <button className="btn-secondary" onClick={() => nav(-1)}>
            <span className="btn-icon">×</span>
            Cancel
          </button>
          <button className="btn-primary" onClick={() => nav("/Custom_step2")}>
            Continue
            <span className="btn-icon">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomStep1;
