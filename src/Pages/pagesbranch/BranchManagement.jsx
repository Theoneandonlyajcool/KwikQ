import React, { useState } from "react";
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

const BranchManagement = () => {
  const [selectedBranch, setSelectedBranch] = useState("Victoria Island Branch");
  const [activeTab, setActiveTab] = useState("Branch Details");

  const tabs = ["Branch Details", "Operations", "Permissions", "Notifications"];

  const branchInfo = {
    branchName: "Victoria Island Branch",
    branchCode: "BR001",
    address: "123 Ahmadu Bello Way, Victoria Island, Lagos",
    city: "Lagos",
    status: "Active",
  };

  const managerInfo = {
    name: "Jane Okafor",
    email: "jane.okafor@kwikq.ng",
    phone: "+234 800 123 4567",
    lastLogin: "2 hours ago",
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

  const accessControl = [
    {
      title: "Two-Factor Authentication",
      description: "Require 2FA for branch manager login",
      enabled: true,
    },
    {
      title: "IP Restrictions",
      description: "Limit access to specific IP addresses",
      enabled: false,
    },
  ];

  return (
    <BranchManagementContainer>
      <div className="branch_management_wrapper">
        <div className="header_section">
          <div className="header_text">
            <h1 className="main_title">Branch Management</h1>
            <p className="sub_title">Thursday, October 23, 2025</p>
          </div>
        </div>

        <div className="branch_selector_section">
          <div className="selector_content">
            <div className="selector_left">
              <MdStorefront className="store_icon" />
              <span className="selector_label">Select Branch:</span>
              <div className="branch_dropdown">
                <span className="branch_name">{selectedBranch}</span>
                <span className="active_badge">active</span>
                <IoIosArrowDown className="dropdown_icon" />
              </div>
            </div>
            <button className="add_branch_btn">
              <MdAdd className="add_icon" />
              Add New Branch
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

        {/* Branch Details Tab */}
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
                  <label className="field_label">Status</label>
                  <div className="field_value">{branchInfo.status}</div>
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
                  <div className="field_value">{managerInfo.lastLogin}</div>
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

          <div className="access_control_section">
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
          </div>
        </PermissionsContainer>
      </div>
    </BranchManagementContainer>
  );
};

export default BranchManagement;