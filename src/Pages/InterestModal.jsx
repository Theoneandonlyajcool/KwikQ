import React, { useState } from "react";
import { InterestModalContainer } from "./InterestModalStyle";
import { IoMdClose } from "react-icons/io";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";

const InterestModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [errors, setErrors] = useState({
    selectedInterests: "",
  });

  const interests = [
    { id: "queue", label: "Queue Management System" },
    { id: "analytics", label: "Advanced Analytics & Reporting" },
    { id: "branch", label: "Multi-Branch Management" },
  ];

  const handleInterestToggle = (id) => {
    setSelectedInterests((prev) => {
      const newSelection = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      
      // Clear error when user selects at least one interest
      if (newSelection.length > 0) {
        setErrors((prevErrors) => ({ ...prevErrors, selectedInterests: "" }));
      }
      
      return newSelection;
    });
  };

  const handleAdditionalInfoChange = (e) => {
    setAdditionalInfo(e.target.value);
  };

  // Check if form is valid
  const allValid = selectedInterests.length > 0;

  const handleBack = () => {
    setShowModal(false);
  };

  const handleContinue = () => {
    if (selectedInterests.length === 0) {
      setErrors({ selectedInterests: "Please select at least one interest" });
      toast.error("Please select at least one interest");
      return;
    }
    
    console.log("Final Data:", {
      interests: selectedInterests,
      additionalInfo: additionalInfo,
    });
    toast.success("Interests submitted successfully!");
  };

  if (!showModal) return null;

  return (
    <InterestModalContainer>
      <ToastContainer />
      <div className="modal_overlay">
        <div className="modal_content">
          <button className="close_btn" onClick={handleBack}>
            <IoMdClose />
          </button>

          <div className="modal_header">
            <h1 className="modal_title">What Are You Interested In?</h1>
            <p className="modal_subtitle">
              Select the features and services you'd like to learn more about
            </p>
          </div>

          <div className="modal_body">
            <div className="interests_grid">
              {interests.map((interest) => (
                <button
                  key={interest.id}
                  type="button"
                  className={`interest_card ${
                    selectedInterests.includes(interest.id) ? "selected" : ""
                  }`}
                  onClick={() => handleInterestToggle(interest.id)}
                >
                  <div className="checkbox_wrapper">
                    {selectedInterests.includes(interest.id) ? (
                      <IoCheckmark className="check_icon" />
                    ) : (
                      <div className="empty_checkbox"></div>
                    )}
                  </div>
                  <span className="interest_label">{interest.label}</span>
                </button>
              ))}
            </div>
            {errors.selectedInterests && (
              <p style={{ color: "red", fontSize: "14px", marginTop: "8px" }}>
                {errors.selectedInterests}
              </p>
            )}

            <div className="additional_info_section">
              <label className="info_label">Additional Information (Optional)</label>
              <textarea
                className="info_textarea"
                placeholder="Tell us more about your needs, number of locations, expected usage, or any specific requirements..."
                value={additionalInfo}
                onChange={handleAdditionalInfoChange}
                rows={5}
              />
            </div>
          </div>

          <div className="modal_footer">
            <button className="back_btn" onClick={handleBack}>
              <MdArrowBack className="back_icon" />
              Back
            </button>
            <button 
              className="continue_btn" 
              onClick={handleContinue}
              disabled={!allValid}
              style={!allValid ? { backgroundColor: "gray", cursor: "not-allowed" } : {}}
            >
              Continue
              <MdArrowForward className="continue_icon" />
            </button>
          </div>
        </div>
      </div>
    </InterestModalContainer>
  );
};

export default InterestModal;