import React, { useState } from "react";
import { ModalContainer } from "./SalesTeamModalStyle";
import { IoMdClose } from "react-icons/io";
import { IoSparkles } from "react-icons/io5";
import { MdArrowForward } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

const isEmailValid = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
};

const isPhoneValid = (phone) => {
  const phonePattern = /^\+?[0-9\s-]{10,}$/;
  return phonePattern.test(phone);
};

const SalesTeamModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    workEmail: "",
    phoneNumber: "",
    companySize: "",
    industry: "",
  });

  const [errors, setErrors] = useState({
    companyName: "",
    fullName: "",
    workEmail: "",
    phoneNumber: "",
    companySize: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    let message = "";

    if (!value.trim()) {
      message = "This field is required.";
    } else if (name === "workEmail" && !isEmailValid(value)) {
      message = "Invalid email format.";
    } else if (name === "phoneNumber" && !isPhoneValid(value)) {
      message = "Invalid phone number format.";
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleCompanySizeSelect = (size) => {
    setFormData((prev) => ({ ...prev, companySize: size }));
    setErrors((prev) => ({ ...prev, companySize: "" }));
  };

  const allValid =
    formData.companyName.trim() &&
    formData.fullName.trim() &&
    formData.workEmail.trim() &&
    formData.phoneNumber.trim() &&
    formData.companySize.trim() &&
    isEmailValid(formData.workEmail) &&
    isPhoneValid(formData.phoneNumber) &&
    !errors.companyName &&
    !errors.fullName &&
    !errors.workEmail &&
    !errors.phoneNumber &&
    !errors.companySize;

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!allValid) {
      toast.error("Please fill all required fields correctly.");
      return;
    }
    console.log("Form submitted:", formData);
    toast.success("Form submitted successfully!");
  };

  return (
    <ModalContainer>
      <div className="modal_overlay">
        <div className="modal_content">
          <button className="close_btn" onClick={handleCancel}>
            <IoMdClose />
          </button>

          <div className="modal_header">
            <div className="contact_badge">
              <IoSparkles className="sparkle_icon" />
              Contact Sales Team
            </div>
            <h1 className="modal_title">Let's Get Started</h1>
            <p className="modal_subtitle">
              Tell us about your company and we'll help you find the right solution
            </p>
          </div>

          <div className="modal_body">
            <div className="form_row">
              <div className="form_field">
                <label className="form_label">
                  Company Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Acme Corporation"
                  className="form_input"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  style={errors.companyName ? { border: "1px solid red" } : {}}
                />
                {errors.companyName && (
                  <p style={{ color: "red", fontSize: "14px" }}>{errors.companyName}</p>
                )}
              </div>

              <div className="form_field">
                <label className="form_label">
                  Your Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  className="form_input"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  style={errors.fullName ? { border: "1px solid red" } : {}}
                />
                {errors.fullName && (
                  <p style={{ color: "red", fontSize: "14px" }}>{errors.fullName}</p>
                )}
              </div>
            </div>

            <div className="form_row">
              <div className="form_field">
                <label className="form_label">
                  Work Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="workEmail"
                  placeholder="john@acme.com"
                  className="form_input"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  style={errors.workEmail ? { border: "1px solid red" } : {}}
                />
                {errors.workEmail && (
                  <p style={{ color: "red", fontSize: "14px" }}>{errors.workEmail}</p>
                )}
              </div>

              <div className="form_field">
                <label className="form_label">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="+234 800 000 0000"
                  className="form_input"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  style={errors.phoneNumber ? { border: "1px solid red" } : {}}
                />
                {errors.phoneNumber && (
                  <p style={{ color: "red", fontSize: "14px" }}>{errors.phoneNumber}</p>
                )}
              </div>
            </div>

            <div className="form_field_full">
              <label className="form_label">
                Company Size <span className="required">*</span>
              </label>
              <div className="company_size_options">
                {["1-10", "11-50", "51-200", "201-1000", "1000+"].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`size_option ${
                      formData.companySize === size ? "selected" : ""
                    }`}
                    onClick={() => handleCompanySizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {errors.companySize && (
                <p style={{ color: "red", fontSize: "14px" }}>{errors.companySize}</p>
              )}
            </div>

            <div className="form_field_full">
              <label className="form_label">Industry (Optional)</label>
              <input
                type="text"
                name="industry"
                placeholder="e.g., Banking, Healthcare, Retail"
                className="form_input"
                value={formData.industry}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="modal_footer">
            <button className="cancel_btn" onClick={handleCancel}>
              <IoMdClose className="cancel_icon" />
              Cancel
            </button>
            <button 
              className="continue_btn"
              onClick={handleSubmit}
              disabled={!allValid}
              style={!allValid ? { backgroundColor: "gray", cursor: "not-allowed" } : {}}
            >
              Continue
              <MdArrowForward className="continue_icon" />
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </ModalContainer>
  );
};

export default SalesTeamModal;