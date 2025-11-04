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

const QueueForm = () => {
  const [FormLoadingState, SetFormLoadingState] = useState(false);

  const [ElederlyStatus, SetElderlyStatus] = useState(false);
  const [PregnantStaus, SetPregnantStatus] = useState(false);
  const [EmergencyStatus, SEtEmergencyStatus] = useState(false);

  const [PurposeOfVisit, SetPurposeOfVisit] = useState("");
  const [inputValues, SetInputValues] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceNeeded: PurposeOfVisit,
    elederlyStatus: ElederlyStatus,
    pregnantStatus: PregnantStaus,
    emergencyLevel: EmergencyStatus,
  });

  const [ErrorMsg, SetErrorMsg] = useState({
    FirstNameError: "",
    serviceNeededError: "",
    elederlyStatusError: "",
    pregnantStatus: "",
  });

  const BaseURl = import.meta.env.VITE_API_BASE_URL;

  const [QueueNumber, SetQueueNumber] = useState();

  const Fetch_Total_Number_In_Queue = async () => {
    try {
      SetFormLoadingState(true);
      const res = await axios.get(`${BaseURl}/api/v1/total-queues`);
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

  const JoinQueue = async () => {
    try {
      const res = await axios.post(`${BaseURl}/api/v1/customer`, inputValues);
      console.log(res?.data);
    } catch (error) {
      console.log(error);
    }
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

          <div className="header-right">
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
                // border: "2px solid indigo",
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
                    className="form-input"
                    value={inputValues.fullName}
                    onChange={(e) =>
                      SetInputValues({
                        ...inputValues,
                        fullName: e.target.value,
                      })
                    }
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="optional-form">
                  <div className="form-group-opt">
                    <label className="form-label-opt">
                      Phone Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-input"
                      value={inputValues.phone}
                      onChange={(e) =>
                        SetInputValues({
                          ...inputValues,
                          phone: e.target.value,
                        })
                      }
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>

                  <div className="form-group-opt">
                    <label className="form-label-opt">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-input"
                      value={inputValues.email}
                      onChange={(e) =>
                        SetInputValues({
                          ...inputValues,
                          email: e.target.value,
                        })
                      }
                      placeholder="your-email@example.com"
                    />
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
                <select className="form-input form-select">
                  <option value="">Select a service</option>
                  <option value="consultation">General Consultation</option>
                  <option value="prescription_refill">
                    Prescription Refill
                  </option>
                  <option value="lab_test">Laboratory Test</option>
                  <option value="vaccination">Vaccination</option>
                  <option value="follow_up">Follow-up Visit</option>
                  <option value="emergency">Emergency</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Additional Notes (Optional)
                </label>
                <textarea
                  className="form-input form-textarea"
                  placeholder="Any specific details or requirements..."
                  rows="4"
                />
              </div>
            </section>

            <section className="form-section">
              <div className="section-header">
                <FaExclamationCircle className="section-icon" />
                <div>
                  <h2 className="section-title">Priority Status</h2>
                  <p className="section-subtitle">Select if applicable</p>
                </div>
              </div>

              <div className="priority-options">
                <label className="priority-option">
                  <input
                    type="radio"
                    name="priority"
                    value="regular"
                    defaultChecked
                  />
                  <div className="priority-content">
                    <span className="priority-label">Regular</span>
                    <span className="priority-description">
                      Standard queue priority
                    </span>
                  </div>
                </label>

                <label className="priority-option">
                  <input
                    type="radio"
                    name="priority"
                    value="elderly_disabled"
                  />
                  <div className="priority-content">
                    <span className="priority-label">Elderly or Disabled</span>
                    <span className="priority-description">
                      Priority service for special needs
                    </span>
                  </div>
                </label>

                <label className="priority-option">
                  <input type="radio" name="priority" value="pregnant_woman" />
                  <div className="priority-content">
                    <span className="priority-label">Pregnant Woman</span>
                    <span className="priority-description">
                      Priority service for expectant mothers
                    </span>
                  </div>
                </label>

                <label className="priority-option">
                  <input type="radio" name="priority" value="emergency" />
                  <div className="priority-content">
                    <span className="priority-label">Emergency</span>
                    <span className="priority-description">
                      Urgent assistance required
                    </span>
                  </div>
                </label>
              </div>
            </section>

            <div className="terms-section">
              <label className="terms-checkbox">
                <input type="checkbox" />
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
              <button type="button" className="btn btn-secondary">
                Clear Form
              </button>
              <button
                onClick={JoinQueue}
                type="submit"
                className="btn btn-primary"
              >
                Join Queue
              </button>
            </div>
          </form>
        )}

        <div className="queue-stats">
          <div className="stat-card">
            {FormLoadingState ? (
              <Stack spacing={1}>
                {/* For variant="text", adjust the height via font-size */}
                <MuiSkeleton variant="text" sx={{ fontSize: "1rem" }} />
                {/* For other variants, adjust the size with `width` and `height` */}
                <MuiSkeleton variant="rectangular" width={210} height={60} />
                <MuiSkeleton
                  style={{ width: "100%" }}
                  variant="rounded"
                  // width={210}
                  // height={60}
                />
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
                  {/* For variant="text", adjust the height via font-size */}
                  <MuiSkeleton variant="text" sx={{ fontSize: "1rem" }} />
                  {/* For other variants, adjust the size with `width` and `height` */}
                  <MuiSkeleton variant="rectangular" width={210} height={60} />
                  <MuiSkeleton
                    style={{ width: "100%" }}
                    variant="rounded"
                    // width={210}
                    // height={60}
                  />
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
    </div>
  );
};

export default QueueForm;
