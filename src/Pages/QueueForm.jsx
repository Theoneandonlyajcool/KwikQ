import React, { useEffect, useState } from "react";
import {
  FaFileAlt,
  FaExclamationCircle,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import { IoArrowBackOutline } from "react-icons/io5";
import "../Styles/QueueForm.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import MuiSkeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import QueueSuccess from "./QueueSuccess";
import { useParams, useLocation } from "react-router-dom";

const toCamelCase = (str) =>
  str.toLowerCase().replace(/\s+(\w)/g, (_, c) => c.toUpperCase());

const QueueFormNorm = () => {
  const nav = useNavigate();

  const [FormLoadingState, SetFormLoadingState] = useState(false);
  const [ElederlyStatus, SetElderlyStatus] = useState(false);
  const [PregnantStaus, SetPregnantStatus] = useState(false);
  const [EmergencyStatus, SEtEmergencyStatus] = useState(false);
  const [PurposeOfVisit, SetPurposeOfVisit] = useState("");

  const [inputValues, SetInputValues] = useState({
    fullName: "",
    phone: "",
    email: "",
    AdditionalInfo: "",
    serviceNeeded: PurposeOfVisit,
  });

  const [ErrorMsg, SetErrorMsg] = useState({
    fullNameError: "",
    phoneError: "",
    emailError: "",
    serviceNeededError: "",
    priorityStatusError: "",
  });

  const [PriorityStatus, SetPriorityStatus] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const BaseURl = import.meta.env.VITE_API_BASE_URL;
  const [QueueNumber, SetQueueNumber] = useState();
  const id = sessionStorage.getItem("user-recog");

  // Validation functions
  const validateFullName = (name) => {
    if (!name.trim()) {
      return "Full name is required";
    }
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters long";
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return "Name should only contain letters and spaces";
    }
    return "";
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) {
      return "Phone number is required";
    }
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
    if (!/^(\+234|0)[0-9]{10}$/.test(cleanPhone)) {
      return "Please enter a valid Nigerian phone number";
    }
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validateServiceNeeded = (service) => {
    if (!service || service === "") {
      return "Please select a service";
    }
    return "";
  };

  const validatePriorityStatus = (status) => {
    if (!status.trim()) {
      return "Priority status details are required";
    }
    if (status.trim().length < 5) {
      return "Please provide more details (at least 5 characters)";
    }
    return "";
  };

  // Real-time validation on blur
  const handleBlur = (field, value) => {
    let error = "";
    switch (field) {
      case "fullName":
        error = validateFullName(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "serviceNeeded":
        error = validateServiceNeeded(value);
        break;
      case "priorityStatus":
        error = validatePriorityStatus(value);
        break;
      default:
        break;
    }
    SetErrorMsg((prev) => ({ ...prev, [`${field}Error`]: error }));
  };

  // Clear error on focus
  const handleFocus = (field) => {
    SetErrorMsg((prev) => ({ ...prev, [`${field}Error`]: "" }));
  };

  // Validate entire form
  const validateForm = () => {
    const errors = {
      fullNameError: validateFullName(inputValues.fullName),
      phoneError: validatePhone(inputValues.phone),
      emailError: validateEmail(inputValues.email),
      serviceNeededError: validateServiceNeeded(purpose),
      priorityStatusError: validatePriorityStatus(PriorityStatus),
    };

    SetErrorMsg(errors);

    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (!termsAccepted) {
      toast.error("Please accept the terms and conditions");
      return false;
    }

    if (hasErrors) {
      toast.error("Please fix all form errors before submitting");
      return false;
    }

    return true;
  };

  const Fetch_Total_Number_In_Queue = async () => {
    try {
      SetFormLoadingState(true);
      const res = await axios.get(`${BaseURl}/api/v1/total-queues/${id}`);
      console.log(res?.data);
      toast.success(res?.data?.message);
      SetQueueNumber(res?.data?.data);
      SetFormLoadingState(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Fetch_Total_Number_In_Queue();
  }, []);

  const QueueValidation = () => {};

  const Formtoken = localStorage.getItem("User");
  const Branchid = localStorage.getItem("BranchID");
  const ORGid = localStorage.getItem("Org_ID");
  const UserID = localStorage.getItem("user_ID");

  const [LoadingState, SetLoadingState] = useState(false);
  const [ShowModal, SetShowModal] = useState(false);
  const [apiData, SetapiData] = useState({});

  const JoinQueue = async () => {
    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    try {
      SetLoadingState(true);
      const res = await axios.post(`${BaseURl}/api/v1/create-queue/${UserID}`, {
        formDetails: {
          fullName: inputValues.fullName,
          email: inputValues.email,
          phone: inputValues.phone,
          serviceNeeded: purpose,
          additionalInfo: inputValues.AdditionalInfo,
          priorityStatus: "elderlyOrDisabled",
        },
      });
      SetLoadingState(false);
      SetShowModal(true);
      SetapiData(res?.data?.data);

      // Reset form after successful submission
      SetInputValues({
        fullName: "",
        phone: "",
        email: "",
        AdditionalInfo: "",
        serviceNeeded: PurposeOfVisit,
      });
      setPurpose("");
      SetPriorityStatus("");
      setTermsAccepted(false);
      SetErrorMsg({
        fullNameError: "",
        phoneError: "",
        emailError: "",
        serviceNeededError: "",
        priorityStatusError: "",
      });
    } catch (error) {
      SetLoadingState(false);
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  const [purpose, setPurpose] = useState("");

  const handleSelectChange = (e) => {
    setPurpose(e.target.value);
    console.log("Selected value (camelCase):", e.target.value);
  };

  const handleClearForm = () => {
    SetInputValues({
      fullName: "",
      phone: "",
      email: "",
      AdditionalInfo: "",
      serviceNeeded: PurposeOfVisit,
    });
    setPurpose("");
    SetPriorityStatus("");
    setTermsAccepted(false);
    SetErrorMsg({
      fullNameError: "",
      phoneError: "",
      emailError: "",
      serviceNeededError: "",
      priorityStatusError: "",
    });
  };

  return (
    <div className="queue-form-container">
      <ToastContainer />
      <header className="form-header">
        <div className="form-wrapper">
          <div className="logo-text">
            <img
              src="https://res.cloudinary.com/dmqhseusw/image/upload/v1760739526/35379ce965af990a259b5b98b745a14f6d61bddc_edhy49.png"
              alt="kwikQlogo"
            />
            <div className="header-content">
              <h1 className="form-title">Add user manually</h1>
              <p className="form-subtitle">
                Fill in your details to get in line
              </p>
            </div>
          </div>

          <div
            className="header-right"
            onClick={() => nav(-1)}
            style={{ cursor: "pointer" }}
          >
            <IoArrowBackOutline />
            Back
          </div>
        </div>
      </header>

      {/* Form */}

      <div className="queue-form-wrapper">
        {FormLoadingState ? (
          <div style={{ width: "100%", height: "100vh" }}>
            <Skeleton />
            <Skeleton
              style={{
                width: "100%",
                height: "15%",
              }}
              count={6}
            />
          </div>
        ) : (
          <form onSubmit={(e) => e.preventDefault()} className="queue-form">
            <section className="form-section">
              <div className="section-header">
                <LuUser className="section-icon" />
                <div>
                  <h2 className="section-title">Personal Information</h2>
                  <p className="section-subtitle">
                    Please provide your contact details
                  </p>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group full-width">
                  <label className="form-label">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-input ${
                      ErrorMsg.fullNameError ? "input-error" : ""
                    }`}
                    value={inputValues.fullName}
                    onChange={(e) =>
                      SetInputValues({
                        ...inputValues,
                        fullName: e.target.value,
                      })
                    }
                    onBlur={(e) => handleBlur("fullName", e.target.value)}
                    onFocus={() => handleFocus("fullName")}
                    placeholder="Enter your full name"
                    style={{ backgroundColor: "#f2f2f5" }}
                  />
                  {ErrorMsg.fullNameError && (
                    <span className="error-message">
                      {ErrorMsg.fullNameError}
                    </span>
                  )}
                </div>
                <div className="optional-form">
                  <div className="form-group-opt">
                    <label className="form-label-opt">
                      Phone Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      className={`form-input ${
                        ErrorMsg.phoneError ? "input-error" : ""
                      }`}
                      value={inputValues.phone}
                      onChange={(e) =>
                        SetInputValues({
                          ...inputValues,
                          phone: e.target.value,
                        })
                      }
                      onBlur={(e) => handleBlur("phone", e.target.value)}
                      onFocus={() => handleFocus("phone")}
                      placeholder="+234 XXX XXX XXXX"
                      style={{ backgroundColor: "#f2f2f5" }}
                    />
                    {ErrorMsg.phoneError && (
                      <span className="error-message">
                        {ErrorMsg.phoneError}
                      </span>
                    )}
                  </div>

                  <div className="form-group-opt">
                    <label className="form-label-opt">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      className={`form-input ${
                        ErrorMsg.emailError ? "input-error" : ""
                      }`}
                      value={inputValues.email}
                      onChange={(e) =>
                        SetInputValues({
                          ...inputValues,
                          email: e.target.value,
                        })
                      }
                      onBlur={(e) => handleBlur("email", e.target.value)}
                      onFocus={() => handleFocus("email")}
                      style={{ backgroundColor: "#f2f2f5" }}
                      placeholder="your-email@example.com"
                    />
                    {ErrorMsg.emailError && (
                      <span className="error-message">
                        {ErrorMsg.emailError}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </section>

            <section className="form-section">
              <div className="section-header">
                <LuClipboardList className="section-icon-service" />
                <div>
                  <h2 className="section-title">Service Details</h2>
                  <p className="section-subtitle">
                    What brings you here today?
                  </p>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Purpose of Visit <span className="required">*</span>
                </label>
                <select
                  className={`form-input form-select ${
                    ErrorMsg.serviceNeededError ? "input-error" : ""
                  }`}
                  value={purpose}
                  onChange={handleSelectChange}
                  onBlur={(e) => handleBlur("serviceNeeded", e.target.value)}
                  onFocus={() => handleFocus("serviceNeeded")}
                  style={{ backgroundColor: "#f2f2f5" }}
                >
                  <option value="">Select a service</option>
                  <option value={toCamelCase("Account Opening")}>
                    Account Opening
                  </option>
                  <option value={toCamelCase("Loan Collection")}>
                    Loan Collection
                  </option>
                  <option value={toCamelCase("Card Collection")}>
                    Card Collection
                  </option>
                  <option value={toCamelCase("Fund Transfer")}>
                    Fund Transfer
                  </option>
                  <option value={toCamelCase("Account Update")}>
                    Account Update
                  </option>
                  <option value={toCamelCase("General Inquiry")}>
                    General Inquiry
                  </option>
                  <option value={toCamelCase("Other")}>Other</option>
                </select>
                {ErrorMsg.serviceNeededError && (
                  <span className="error-message">
                    {ErrorMsg.serviceNeededError}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">
                  Additional Notes (Optional)
                </label>
                <textarea
                  value={inputValues.AdditionalInfo}
                  onChange={(e) =>
                    SetInputValues({
                      ...inputValues,
                      AdditionalInfo: e.target.value,
                    })
                  }
                  className="form-input form-textarea"
                  placeholder="Any specific details or requirements..."
                  rows="4"
                  style={{ backgroundColor: "#f2f2f5" }}
                />
              </div>
            </section>

            <section className="form-section">
              <div className="section-header">
                <FaExclamationCircle className="section-icon" />
                <div>
                  <h2 className="section-title">Priority Status</h2>
                  <p className="section-subtitle">Input details if available</p>
                </div>
              </div>

              <textarea
                value={PriorityStatus}
                onChange={(e) => SetPriorityStatus(e.target.value)}
                onBlur={(e) => handleBlur("priorityStatus", e.target.value)}
                onFocus={() => handleFocus("priorityStatus")}
                className={ErrorMsg.priorityStatusError ? "input-error" : ""}
                style={{
                  width: "100%",
                  height: "6rem",
                  backgroundColor: "#f2f2f5",
                  border: ErrorMsg.priorityStatusError
                    ? "1px solid red"
                    : "none",
                  outline: "none",
                  padding: ".5rem",
                  borderRadius: ".5rem",
                  resize: "none",
                }}
                placeholder="Any specific details or requirements........"
              />
              {ErrorMsg.priorityStatusError && (
                <span className="error-message">
                  {ErrorMsg.priorityStatusError}
                </span>
              )}
            </section>

            <div className="terms-section">
              <label className="terms-checkbox">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <span className="terms-text">
                  I agree to the{" "}
                  <a href="#" className="terms-link">
                    terms and conditions
                  </a>
                </span>
              </label>
              <p className="terms-notice">
                By joining the queue, you agree to receive notifications via SMS
                and email. You understand that estimated wait times are
                approximate and may vary.
              </p>
            </div>

            <div className="form-actions">
              <button
                onClick={() => JoinQueue()}
                disabled={LoadingState}
                style={{
                  cursor: `${LoadingState ? "not-allowed" : "pointer"}`,
                  backgroundColor: `${LoadingState ? "gray" : ""}`,
                }}
                type="submit"
                className="btn btn-primary"
              >
                {LoadingState ? "Joining....." : " Join Queue"}
              </button>
              <button
                type="button"
                onClick={handleClearForm}
                className="btn btn-secondary"
              >
                Clear Form
              </button>
            </div>
          </form>
        )}

        <div className="queue-stats">
          <div className="stat-card">
            {FormLoadingState ? (
              <Stack spacing={1}>
                <MuiSkeleton variant="text" sx={{ fontSize: "1rem" }} />
                <MuiSkeleton variant="rectangular" width={210} height={60} />
                <MuiSkeleton style={{ width: "100%" }} variant="rounded" />
              </Stack>
            ) : (
              <>
                <FaClock className="stat-icon" />
                <div className="stat-content">
                  <h3 className="stat-title">Current Wait Time</h3>
                  <p className="stat-description">
                    Average wait time is currently 15 minutes. We'll notify you
                    when your turn approaches.
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="stat-card">
            {FormLoadingState ? (
              <>
                <Stack spacing={1}>
                  <MuiSkeleton variant="text" sx={{ fontSize: "1rem" }} />
                  <MuiSkeleton variant="rectangular" width={210} height={60} />
                  <MuiSkeleton style={{ width: "100%" }} variant="rounded" />
                </Stack>
              </>
            ) : (
              <>
                <FaUsers className="stat-icon" />
                <div className="stat-content">
                  <h3 className="stat-title">Queue Status</h3>
                  <p className="stat-description">
                    Currently {QueueNumber} people in queue. All 4 service
                    points are active and serving customers.{" "}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {ShowModal && (
        <QueueSuccess
          closeModal={SetShowModal}
          details={inputValues}
          queueInfo={apiData}
        />
      )}
    </div>
  );
};

export default QueueFormNorm;
