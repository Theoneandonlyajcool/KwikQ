import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useFormCont/ext } from "../contexts/FormContext";
import "./CustomStep2.css";

const CustomStep2 = () => {
  const nav = useNavigate();
  //   const { formData, updateFormData } = useFormContext();

  //   const [localData, setLocalData] = useState({
  //     interests: formData.interests,
  //     additionalInfo: formData.additionalInfo,
  //   });

  //   const handleInterestToggle = (interest) => {
  //     setLocalData((prev) => {
  //       const interests = prev.interests.includes(interest)
  //         ? prev.interests.filter((i) => i !== interest)
  //         : [...prev.interests, interest];
  //       return { ...prev, interests };
  //     });
  //   };

  //   const handleContinue = () => {
  //     updateFormData(localData);
  //     navigate("/contact/step3");
  //   };

  //   const handleBack = () => {
  //     updateFormData(localData);
  //     navigate("/contact/step1");
  //   };

  const interestOptions = [
    { id: "queue", title: "Queue Management System" },
    { id: "analytics", title: "Advanced Analytics & Reporting" },
    { id: "branch", title: "Multi-Branch Management" },
  ];

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1 className="contact-title">What Are You Interested In?</h1>
        <p className="contact-subtitle">
          Select the features and services you'd like to learn more about
        </p>

        <div className="interests-section">
          {interestOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              //   className={`interest-card ${
              //     localData.interests.includes(option.id) ? "active" : ""
              //   }`}
              //   onClick={() => handleInterestToggle(option.id)}
            >
              <div className="interest-checkbox">
                {/* {localData.interests.includes(option.id) && (
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
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )} */}
              </div>
              <span className="interest-title">
                {/* {option.title} */}
                title
              </span>
            </button>
          ))}
        </div>

        {/*  */}

        <div className="form-group">
          <label htmlFor="additionalInfo" className="form-label">
            Additional Information (Optional)
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            className="form-textarea"
            placeholder="Tell us more about your needs, number of locations, expected usage, or any specific requirements..."
            rows="4"
            // value={localData.additionalInfo}
            // onChange={(e) =>
            //   setLocalData((prev) => ({
            //     ...prev,
            //     additionalInfo: e.target.value,
            //   }))
            // }
          />
        </div>

        <div className="button-group">
          <button className="btn-secondary" onClick={() => nav(-1)}>
            <span className="btn-icon">←</span>
            Back
          </button>
          <button className="btn-primary" onClick={() => nav("/Final_step")}>
            Continue
            <span className="btn-icon">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomStep2;
