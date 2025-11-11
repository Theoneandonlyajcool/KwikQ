import React, { useEffect, useState } from "react";
import { BranchManagementContainer } from "./BranchManagementstyled";
import { BranchDetailsContainer } from "./BranchDetailsStyle";
import { OperationsContainer } from "./OperationsStyle";
import { NotificationsContainer } from "./NotificationsStyle";
import { PermissionsContainer } from "./PermissionsStyle";
import { MdStorefront } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdNotifications } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import CurrentDateTime from "./CurrentDateTime";
import { InactiveAnalyticsContainer } from "../pagesbranch/AnalyticsPage.jsx/InactiveAnalyticsStyle";
import { MdLayers } from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";


const BranchManagement = () => {
  const nav = useNavigate();
  const [status, setStatus] = useState("inactive");
  const [oneBranchData, setOneBranchData] = useState(null);
  const [error, setError] = useState(null);
  
  const ID = sessionStorage.getItem("user-recog");
  const branchID = sessionStorage.getItem("selectedBranchId");
  const token = localStorage.getItem("User");
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  
  console.log("the data", oneBranchData);
  console.log(branchID);

  const [selectedBranch, setSelectedBranch] = useState("Victoria Island Branch");
  const [activeTab, setActiveTab] = useState("Branch Details");

  const tabs = ["Branch Details", "Operations", "Permissions", "Notifications"];

  const branchInfo = {
    branchName: oneBranchData?.branchName,
    branchCode: oneBranchData?.branchCode,
    address: oneBranchData?.address,
    city: oneBranchData?.city,
    serviceType: oneBranchData?.serviceType,
  };

  const managerInfo = {
    name: oneBranchData?.managerName,
    email: oneBranchData?.managerEmail,
    phone: oneBranchData?.managerPhone,
    lastLogin: oneBranchData?.lastUpdated ,
  };

  const operatingHours = [
    { day: "Monday", enabled: true, start: "", end: "" },
    { day: "Tuesday", enabled: true, start: "", end: "" },
    { day: "Wednesday", enabled: true, start: "", end: "" },
    { day: "Thursday", enabled: true, start: "", end: "" },
    { day: "Friday", enabled: true, start: "", end: "" },
    { day: "Saturday", enabled: true, start: "", end: "" },
    { day: "Sunday", enabled: false, start: "", end: "" },
  ];

  const queueSettings = {
    servicePoints: "4",
    maxCapacity: "100",
  };

  const notifications = [
    {
      title: "Queue Alerts",
      description: "Notify when queue exceeds threshold",
      enabled: true,
    },
    {
      title: "Performance Reports",
      description: "Daily performance summary emails",
      enabled: true,
    },
    {
      title: "System Alerts",
      description: "Critical system notifications",
      enabled: true,
    },
    {
      title: "Customer Feedback",
      description: "Notify on low satisfaction scores",
      enabled: true,
    },
  ];

  const alertThresholds = {
    queueSize: "50",
    waitTime: "20",
  };

  const permissions = [
    {
      title: "Queue Management",
      description: "View and manage customer queues",
      status: "Granted",
    },
    {
      title: "Branch Analytics",
      description: "Access branch performance data",
      status: "Granted",
    },
    {
      title: "Organization Settings",
      description: "Modify organization-wide settings",
      status: "Denied",
    },
    {
      title: "Branch Deletion",
      description: "Delete or deactivate branch",
      status: "Denied",
    },
    {
      title: "Customer Communications",
      description: "Send notifications and announcements",
      status: "Granted",
    },
  ];

  const onebranches = async () => {
    setStatus("loading");
    setError(null);
    
    try {
      const res = await axios.get(`${BaseUrl}/api/v1/branch/${branchID}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      // console.log("onebranches", res);
      setOneBranchData(res?.data?.data);
      setStatus("success");
      // toast.success(res?.data?.message);
      
    } catch (error) {
      console.log("onebranches error", error);
      setError(error?.response?.data?.message || "Failed to fetch branch data");
      // toast.error(error?.response?.data?.message || "Failed to fetch branch data");
      setStatus("error");
    }
  };

  useEffect(() => {
    onebranches();
  }, []);

  if (status === "inactive") {
    return (
      <InactiveAnalyticsContainer>
        <div className="analytics_wrapper">
          <div className="header_section">
            <h1 className="main_title">Branch Management</h1>
            <p className="sub_title"><CurrentDateTime /></p>
          </div>
          <div className="charts_grid">
            <div className="chart_box">
              <h3 className="chart_box_title">Branch Information</h3>
              <div className="empty_chart">
                <MdLayers className="empty_icon" />
                <p className="empty_title">Initializing...</p>
                <p className="empty_text">Preparing to load branch information</p>
              </div>
            </div>
          </div>
        </div>
      </InactiveAnalyticsContainer>
    );
  }

  if (status === "loading") {
    return (
      <InactiveAnalyticsContainer>
        <div className="analytics_wrapper">
          <div className="header_section">
            <h1 className="main_title">Branch Management</h1>
            <p className="sub_title"><CurrentDateTime /></p>
          </div>
          <div className="charts_grid">
            <div className="chart_box">
              <h3 className="chart_box_title">Branch Information</h3>
              <div className="empty_chart">
                <MdLayers className="empty_icon" />
                <p className="empty_title">Loading...</p>
                <p className="empty_text">Fetching branch details, please wait</p>
              </div>
            </div>
          </div>
        </div>
      </InactiveAnalyticsContainer>
    );
  }

  if (status === "error") {
    return (
      <InactiveAnalyticsContainer>
        <div className="analytics_wrapper">
          <div className="header_section">
            <h1 className="main_title">Branch Management</h1>
            <p className="sub_title"><CurrentDateTime /></p>
          </div>
          <div className="charts_grid">
            <div className="chart_box">
              <h3 className="chart_box_title">Branch Information</h3>
              <div className="empty_chart">
                <MdError className="empty_icon" style={{color: 'red'}} />
                <p className="empty_title">Error Loading Branch</p>
                <p className="empty_text">{error}</p>
                <button 
                  onClick={() => onebranches()} 
                  style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    background: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </InactiveAnalyticsContainer>
    );
  }

  if (status === "success" && oneBranchData) {
    return (
      <BranchManagementContainer>
        <div className="branch_management_wrapper">
          <div className="header_section">
            <div className="header_text">
              <h1 className="main_title">Branch Management</h1>
              <p className="sub_title"><CurrentDateTime /></p>
            </div>
          </div>

          <div className="branch_selector_section">
            <div className="selector_content">
              <div className="selector_left">
                <MdStorefront className="store_icon" />
                <span className="selector_label">Select Branch:</span>
                <div className="branch_dropdown">
                  <span className="branch_name">{oneBranchData?.branchName || selectedBranch}</span>
                  <span className="active_badge">active</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </div>
              </div>
              <button className="add_branch_btn" onClick={() => nav("/dashboard/overview")}>
                <IoChevronBack className="add_icon" />
                Back
              </button>
            </div>
          </div>

          <div className="tabs_section">
            <div className="tabs_wrapper">
              {tabs.map((tab) => (
                <div
                  key={tab}
                  className={`tab_item ${activeTab === tab ? "active_tab" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>

          {/* Branch details */}
          <BranchDetailsContainer className={activeTab === "Branch Details" ? "active" : ""}>
            <div className="branch_info_section">
              <div className="section_header">
                <h2 className="section_title">Branch Information</h2>
                <button className="edit_btn">
                  <MdEdit className="edit_icon" />
                  Edit Details
                </button>
              </div>

              <div className="info_grid">
                <div className="info_row">
                  <div className="info_field">
                    <label className="field_label">Branch Name</label>
                    <div className="field_value">{branchInfo.branchName}</div>
                  </div>
                  <div className="info_field">
                    <label className="field_label">Branch Code</label>
                    <div className="field_value">{branchInfo.branchCode}</div>
                  </div>
                </div>

                <div className="info_row full_width">
                  <div className="info_field">
                    <label className="field_label">Address</label>
                    <div className="field_value address_value">
                      <MdLocationOn className="field_icon" />
                      {branchInfo.address}
                    </div>
                  </div>
                </div>

                <div className="info_row">
                  <div className="info_field">
                    <label className="field_label">City/Location</label>
                    <div className="field_value">{branchInfo.city}</div>
                  </div>
                  <div className="info_field">
                    <label className="field_label">Service Type</label>
                    <div className="field_value">{branchInfo.serviceType}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="branch_manager_section">
              <div className="section_header">
                <h2 className="section_title">Branch Manager</h2>
              </div>

              <div className="info_grid">
                <div className="info_row">
                  <div className="info_field">
                    <label className="field_label">Manager Name</label>
                    <div className="field_value manager_value">
                      <FaUser className="field_icon" />
                      {managerInfo.name}
                    </div>
                  </div>
                  <div className="info_field">
                    <label className="field_label">Email</label>
                    <div className="field_value email_value">
                      <MdEmail className="field_icon" />
                      {managerInfo.email}
                    </div>
                  </div>
                </div>

                <div className="info_row">
                  <div className="info_field">
                    <label className="field_label">Phone Number</label>
                    <div className="field_value phone_value">
                      <FaPhone className="field_icon" />
                      {managerInfo.phone}
                    </div>
                  </div>
                  <div className="info_field">
                    <label className="field_label">Last Login</label>
                    <div className="field_value">{managerInfo.lastLogin || "N/A"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="danger_zone_section">
              <div className="danger_header">
                <MdError className="danger_icon" />
                <span className="danger_title">Danger Zone</span>
              </div>
              <p className="danger_text">
                Deactivating this branch will stop all queue operations and prevent
                customer access.
              </p>
              <button className="deactivate_btn">
                <MdDelete className="delete_icon" />
                Deactivate Branch
              </button>
            </div>
          </BranchDetailsContainer>

          {/* Operations Tab */}
          <OperationsContainer className={activeTab === "Operations" ? "active" : ""}>
             <div className="operating_hours_section">
            <div className="section_header">
              <h2 className="section_title">Operating Hours</h2>
            </div>

            <div className="hours_list">
              {operatingHours.map((hour, index) => (
                <div key={index} className="hour_row">
                  <div className="day_toggle">
                    <span className="day_name">{hour.day}</span>
                    <label className="toggle_switch">
                      <input type="checkbox" checked={hour.enabled} readOnly />
                      <span className="toggle_slider"></span>
                    </label>
                  </div>
                  <div className="time_inputs">
                    <input
                      type="text"
                      className="time_input"
                      placeholder=""
                      disabled={!hour.enabled}
                    />
                    <span className="time_separator">to</span>
                    <input
                      type="text"
                      className="time_input"
                      placeholder=""
                      disabled={!hour.enabled}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="queue_settings_section">
            <div className="section_header">
              <h2 className="section_title">Queue Settings</h2>
            </div>

            <div className="settings_grid">
              <div className="setting_field">
                <label className="setting_label">Number of Service Points</label>
                <div className="setting_value">{queueSettings.servicePoints}</div>
              </div>
              <div className="setting_field">
                <label className="setting_label">Maximum Queue Capacity</label>
                <div className="setting_value">{queueSettings.maxCapacity}</div>
              </div>
            </div>
          </div>
          </OperationsContainer>

          {/* Notifications Tab */}
          <NotificationsContainer className={activeTab === "Notifications" ? "active" : ""}>
             <div className="notifications_section">
            <div className="section_header">
              <MdNotifications className="section_icon" />
              <h2 className="section_title">Branch Notifications</h2>
            </div>

            <div className="notifications_list">
              {notifications.map((notif, index) => (
                <div key={index} className="notification_item">
                  <div className="notif_info">
                    <h3 className="notif_title">{notif.title}</h3>
                    <p className="notif_description">{notif.description}</p>
                  </div>
                  <label className="toggle_switch">
                    <input type="checkbox" checked={notif.enabled} readOnly />
                    <span className="toggle_slider"></span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="alert_thresholds_section">
            <div className="section_header">
              <h2 className="section_title">Alert Thresholds</h2>
            </div>

            <div className="thresholds_grid">
              <div className="threshold_field">
                <label className="threshold_label">Queue Size Alert</label>
                <div className="threshold_input_wrapper">
                  <input
                    type="text"
                    className="threshold_input"
                    value={alertThresholds.queueSize}
                    readOnly
                  />
                  <span className="threshold_unit">customers</span>
                </div>
              </div>
              <div className="threshold_field">
                <label className="threshold_label">Wait Time Alert</label>
                <div className="threshold_input_wrapper">
                  <input
                    type="text"
                    className="threshold_input"
                    value={alertThresholds.waitTime}
                    readOnly
                  />
                  <span className="threshold_unit">minutes</span>
                </div>
              </div>
            </div>
          </div>
          </NotificationsContainer>

          {/* Permissions Tab */}
          <PermissionsContainer className={activeTab === "Permissions" ? "active" : ""}>
             <div className="permissions_section">
            <div className="section_header">
              <IoShieldCheckmark className="section_icon" />
              <h2 className="section_title">Branch Manager Permissions</h2>
            </div>

            <div className="permissions_list">
              {permissions.map((perm, index) => (
                <div key={index} className="permission_item">
                  <div className="perm_icon">
                    {perm.status === "Granted" ? (
                      <IoMdCheckmarkCircle className="granted_icon" />
                    ) : (
                      <IoMdCloseCircle className="denied_icon" />
                    )}
                  </div>
                  <div className="perm_info">
                    <h3 className="perm_title">{perm.title}</h3>
                    <p className="perm_description">{perm.description}</p>
                  </div>
                  <span
                    className={`perm_status ${
                      perm.status === "Granted" ? "granted" : "denied"
                    }`}
                  >
                    {perm.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="access_control_section">
            <div className="section_header">
              <h2 className="section_title">Access Control</h2>
            </div>

            <div className="access_list">
              {accessControl.map((access, index) => (
                <div key={index} className="access_item">
                  <div className="access_info">
                    <h3 className="access_title">{access.title}</h3>
                    <p className="access_description">{access.description}</p>
                  </div>
                  <label className="toggle_switch">
                    <input type="checkbox" checked={access.enabled} readOnly />
                    <span className="toggle_slider"></span>
                  </label>
                </div>
              ))}
            </div>
          </div> */}
          </PermissionsContainer>
        </div>
        <ToastContainer />
      </BranchManagementContainer>
    );
  }

  // Fallback (should never reach here)
  return <div>Loading...</div>;
};

export default BranchManagement;