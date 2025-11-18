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

const QueueForm = () => {
  const nav = useNavigate();
  // console.log(useLocation())
  const { search } = useLocation();
  // console.log(search?.split("&")[1].split("=")[1])
  const { queue, id } = useParams();

  const [FormLoadingState, SetFormLoadingState] = useState(false);

  const [ElederlyStatus, SetElderlyStatus] = useState(false);
  const [PregnantStaus, SetPregnantStatus] = useState(false);
  const [EmergencyStatus, SEtEmergencyStatus] = useState(false);

  const [PurposeOfVisit, SetPurposeOfVisit] = useState("");
  const [purpose, setPurpose] = useState(""); // stores camelCase keys like "loanCollection"

  const [inputValues, SetInputValues] = useState({
    fullName: "",
    phone: "",
    email: "",
    AdditionalInfo: "",
    serviceNeeded: "",
    priorityStatus: "",
  });

  const [ErrorMsg, SetErrorMsg] = useState({
    FirstNameError: "",
    serviceNeededError: "",
    elederlyStatusError: "",
    pregnantStatus: "",
    priorityStatus: "",
  });

  const [PriorityStatus, SetPriorityStatus] = useState("");

  const BaseURl = import.meta.env.VITE_API_BASE_URL;

  const [QueueNumber, SetQueueNumber] = useState();

  const Fetch_Total_Number_In_Queue = async () => {
    try {
      SetFormLoadingState(true);
      const res = await axios.get(`${BaseURl}/api/v1/total-queues/${id}`);
      console.log(res?.data);
      // toast.success(res?.data?.message);
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

  const [LoadingState, SetLoadingState] = useState(false);
  console.log(ORGid);
  console.log(Branchid);

  const [ShowModal, SetShowModal] = useState(false);
  const [apiData, SetapiData] = useState({});
  const JoinQueue = async () => {
    try {
      SetLoadingState(true);
      const res = await axios.post(
        // `

        // ${BaseURl}/api/v1/create-queue/${search.split("&")[1].split("=")[1]}

        // `,

        `
        ${BaseURl}/api/v1/create-queue/${id}
          
        `,
        {
          formDetails: {
            fullName: inputValues.fullName,
            email: inputValues.email,
            phone: inputValues.phone,
            serviceNeeded: inputValues.serviceNeeded,
            additionalInfo: inputValues.AdditionalInfo,
            priorityStatus: PriorityStatus,
          },
        }
        // {
        //   headers: {
        //     Authorization: `Bearer ${Formtoken}`,
        //   },
        // }
      );
      SetLoadingState(false);
      SetShowModal(true);
      // console.log(res?.data?.data);
      // SetInputValues({
      //   fullName: "",
      //   phone: "",
      //   email: "",
      //   AdditionalInfo: "",
      //   serviceNeeded: PurposeOfVisit,
      // });
      SetapiData(res?.data?.data);
    } catch (error) {
      SetLoadingState(false);
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  const handleSelectChange = (e) => {
    setPurpose(e.target.value);
    console.log("Selected value (camelCase):", e.target.value);
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
                    style={{ backgroundColor: "#f2f2f5" }}
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
                      style={{ backgroundColor: "#f2f2f5" }}
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
                      style={{ backgroundColor: "#f2f2f5" }}
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

                <select
                  className="form-input form-select"
                  value={purpose}
                  onChange={handleSelectChange}
                  style={{ backgroundColor: "#f2f2f5" }}
                >
                  <option value="">Select a service</option>
                  <option value={toCamelCase("Account Opening")}>
                    Account Opening
                  </option>
                  <option value={toCamelCase("Loan Collection")}>
                    cd Loan Collection
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

              {/* <div className="priority-options">
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
              </div> */}

              <textarea
                style={{
                  width: "100%",
                  height: "6rem",
                  backgroundColor: "#f2f2f5",
                  border: "none",
                  outline: "none",
                  padding: ".5rem",
                  borderRadius: ".5rem",
                  resize: "none",
                }}
                placeholder="Any specific details or requirements........"
                name=""
                id=""
              ></textarea>
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
                onClick={() => {
                  JoinQueue();
                  console.log(inputValues);
                  // console.log(PurposeOfVisit);
                }}
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

export default QueueForm;
