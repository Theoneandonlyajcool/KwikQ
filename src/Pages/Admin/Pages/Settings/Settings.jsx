import React, { useState } from "react";
import {
  FaBuilding,
  FaClock,
  FaCog,
  FaExclamationTriangle,
  FaSave,
} from "react-icons/fa";
import { FaUsers, FaShieldAlt, FaPlus, FaTrash } from "react-icons/fa";
// import "../../../../Styles/AdminSettings.css";

import "./Settings.css";
import {
  FaBell,
  FaEnvelope,
  FaExclamationTriangle as FaAlert,
  FaCommentDots,
} from "react-icons/fa";

const SettingsTab = ({ label, active, onClick }) => {
  return (
    <div className={`tab ${active ? "active" : ""}`} onClick={onClick}>
      {label}
    </div>
  );
};

const GeneralTab = () => {
  return (
    <>
      <div className="section">
        <div className="section-header">
          <FaBuilding size={24} color="#10b981" className="section-icon" />
          <div>
            <h3 className="section-title">Business Information</h3>
            <p className="section-desc">
              Basic details about your organization
            </p>
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label className="label">Business Name</label>
            <input
              type="text"
              className="input"
              placeholder="First Bank Nigeria - Lagos Branch"
            />
          </div>
          <div className="form-group">
            <label className="label">Email Address</label>
            <input
              type="email"
              className="input"
              placeholder="lagos@firstbank.ng"
            />
          </div>
          <div className="form-group">
            <label className="label">Phone Number</label>
            <input type="tel" className="input" placeholder="+234 1 234 5678" />
          </div>
          <div className="form-group">
            <label className="label">Timezone</label>
            <input
              type="text"
              className="input"
              placeholder="West Africa Time (WAT)"
            />
          </div>
        </div>

        <div className="form-group-full">
          <label className="label">Business Address</label>
          <input
            type="text"
            className="input"
            placeholder="Enter your business address"
          />
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <FaClock size={24} color="#10b981" className="section-icon" />
          <div>
            <h3 className="section-title">Operating Hours</h3>
            <p className="section-desc">Set your business hours</p>
          </div>
        </div>

        <div className="time-grid">
          <div className="form-group">
            <label className="label">Opening Time</label>
            <input type="text" className="input" />
          </div>
          <div className="form-group">
            <label className="label">Closing Time</label>
            <input type="text" className="input" />
          </div>
        </div>

        <div className="days-section">
          <label className="label">Working Days</label>
          <div className="days-grid">
            <button className="day-btn active">Mon</button>
            <button className="day-btn active">Tue</button>
            <button className="day-btn active">Wed</button>
            <button className="day-btn active">Thu</button>
            <button className="day-btn active">Fri</button>
            <button className="day-btn active">Sat</button>
            <button className="day-btn">Sun</button>
          </div>
          <p className="days-hint">Click to toggle days</p>
        </div>
      </div>
    </>
  );
};

const QueueConfigTab = () => {
  return (
    <>
      <div className="section">
        <div className="section-header">
          <div className="icon-wrapper">
            <FaCog size={20} color="#3b82f6" />
          </div>
          <div className="section-content">
            <h3 className="section-title">Queue Settings</h3>
            <p className="section-desc">Configure queue behavior and limits</p>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="label">Maximum Queue Size</label>
            <input type="text" className="input" placeholder="100" />
            <p className="helper-text">Maximum number of customers in queue</p>
          </div>

          <div className="form-group">
            <label className="label">Avg. Service Time (minutes)</label>
            <input type="text" className="input" placeholder="15" />
            <p className="helper-text">Estimated time per customer</p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="icon-wrapper warning">
            <FaExclamationTriangle size={20} color="#f59e0b" />
          </div>
          <div className="section-content">
            <h3 className="section-title">Priority Settings</h3>
            <p className="section-desc">Configure priority queue rules</p>
          </div>
        </div>

        <div className="form-group" style={{ marginBottom: "24px" }}>
          <label className="label">Priority Categories</label>
          <select className="select">
            <option>Elderly & Disabled</option>
            <option>VIP Customers</option>
            <option>Appointment Holders</option>
            <option>Regular Customers</option>
          </select>
        </div>

        <div className="toggle-row">
          <div className="toggle-info">
            <h4 className="toggle-title">Enable Priority Queue</h4>
            <p className="toggle-desc">
              Allow priority customers to skip ahead in line
            </p>
          </div>
          <div className="toggle-switch">
            <div className="toggle-slider"></div>
          </div>
        </div>
      </div>
    </>
  );
};

const NotificationsTab = () => {
  return (
    <div className="notifications-tab">
      <div className="section">
        <div className="section-header">
          <div className="icon-wrapper green">
            <FaBell size={20} color="#10b981" />
          </div>
          <div className="section-content">
            <h3 className="section-title">Notification Preferences</h3>
            <p className="section-desc">Manage how customers are notified</p>
          </div>
        </div>

        <div className="notification-item">
          <div className="notification-info">
            <div className="notification-icon-small green">
              <FaEnvelope size={18} color="#10b981" />
            </div>
            <div className="notification-text">
              <h4 className="notification-title">Email Notifications</h4>
              <p className="notification-subtitle">
                Send email updates to customers
              </p>
            </div>
          </div>
          <div className="toggle-switch">
            <div className="toggle-slider"></div>
          </div>
        </div>

        <div className="notification-item">
          <div className="notification-info">
            <div className="notification-icon-small warning">
              <FaAlert size={18} color="#f59e0b" />
            </div>
            <div className="notification-text">
              <h4 className="notification-title">Long Wait Alerts</h4>
              <p className="notification-subtitle">
                Alert customers about extended wait times
              </p>
            </div>
          </div>
          <div className="toggle-switch">
            <div className="toggle-slider"></div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="icon-wrapper warning">
            <FaAlert size={20} color="#f59e0b" />
          </div>
          <div className="section-content">
            <h3 className="section-title">Alert Thresholds</h3>
            <p className="section-desc">Set limits for automated alerts</p>
          </div>
        </div>

        <div className="form-group">
          <label className="label">Wait Time Alert (minutes)</label>
          <input type="number" className="input" placeholder="20" />
          <p className="helper-text">
            Send alert when wait time exceeds this duration
          </p>
        </div>

        <div className="form-group">
          <label className="label">Reminder Time (minutes before turn)</label>
          <input type="number" className="input" placeholder="5" />
          <p className="helper-text">
            How early to remind customers before their turn
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="icon-wrapper purple">
            <FaCommentDots size={20} color="#8b5cf6" />
          </div>
          <div className="section-content">
            <h3 className="section-title">Message Templates</h3>
            <p className="section-desc">Customize notification messages</p>
          </div>
        </div>

        <div className="form-group">
          <label className="label">Welcome Message</label>
          <textarea
            className="textarea"
            placeholder="Enter your welcome message..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

const ServicePointTab = () => {
  return (
    <div className="service-points-tab">
      <div className="section">
        <div className="section-header">
          <div className="header-left">
            <div className="icon-wrapper blue">
              <FaUsers size={20} />
            </div>
            <div className="section-content">
              <h3 className="section-title">Service Points Management</h3>
              <p className="section-desc">Add and configure service points</p>
            </div>
          </div>

          <button className="service-add-btn">
            <FaPlus size={14} />
            Add Service Point
          </button>
        </div>

        <div className="service-point-item">
          <div className="service-point-left">
            <div className="service-point-number">1</div>
            <span className="service-point-name">Service Point 1</span>
          </div>
          <div className="service-point-right">
            <span className="status-label">Active</span>
            <div className="toggle-switch">
              <div className="toggle-slider"></div>
            </div>
            <button className="delete-btn">
              <FaTrash size={16} />
            </button>
          </div>
        </div>

        <div className="service-point-item">
          <div className="service-point-left">
            <div className="service-point-number">2</div>
            <span className="service-point-name">Service Point 2</span>
          </div>
          <div className="service-point-right">
            <span className="status-label ">Active</span>
            <div className="toggle-switch">
              <div className="toggle-slider"></div>
            </div>
            <button className="delete-btn">
              <FaTrash size={16} />
            </button>
          </div>
        </div>

        <div className="service-point-item">
          <div className="service-point-left">
            <div className="service-point-number">3</div>
            <span className="service-point-name">Service Point 3</span>
          </div>
          <div className="service-point-right">
            <span className="status-label">Inactive</span>
            <div className="toggle-switch inactive">
              <div className="toggle-slider"></div>
            </div>
            <button className="delete-btn">
              <FaTrash size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="header-left">
            <div className="icon-wrapper blue">
              <FaShieldAlt size={20} />
            </div>
            <div className="section-content">
              <h3 className="section-title">Service Point Permissions</h3>
              <p className="section-desc">
                Configure what each service point can handle
              </p>
            </div>
          </div>
        </div>

        <h4 className="permissions-label">Service Types</h4>
        <div className="service-types-grid">
          <div className="service-type-item">Account Opening</div>
          <div className="service-type-item">Loan Inquiry</div>
          <div className="service-type-item">Card Collection</div>
          <div className="service-type-item">Transfers</div>
          <div className="service-type-item">Deposits</div>
          <div className="service-type-item">Withdrawals</div>
        </div>
      </div>
    </div>
  );
};

const QueueSettings = () => {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div className="container settings-container">
      <div className="header">
        <div>
          <h1 className="title">Settings</h1>
          <p className="date">Tuesday, October 21, 2025</p>
        </div>

        <button className="save-btn-header">
          <FaSave size={16} />
          Save All Changes
        </button>
      </div>

      <div className="subtitle-section">
        <h2 className="subtitle">System Settings</h2>
        <p className="description">Configure your queue management system</p>
      </div>

      <div className="tabs">
        <SettingsTab
          label="General"
          active={activeTab === "General"}
          onClick={() => setActiveTab("General")}
        />

        <SettingsTab
          label="Queue Config"
          active={activeTab === "Queue Config"}
          onClick={() => setActiveTab("Queue Config")}
        />
        <SettingsTab
          label="Notifications"
          active={activeTab === "Notifications"}
          onClick={() => setActiveTab("Notifications")}
        />
        <SettingsTab
          label="Service Point"
          active={activeTab === "Service Point"}
          onClick={() => setActiveTab("Service Point")}
        />
      </div>

      <div className="tab-content">
        {activeTab === "General" && <GeneralTab />}
        {activeTab === "Queue Config" && <QueueConfigTab />}
        {activeTab === "Notifications" && <NotificationsTab />}
        {activeTab === "Service Point" && <ServicePointTab />}
      </div>

      <div className="footer">
        <p className="footer-text">
          Remember to save your changes before leaving this page
        </p>
        <div className="footer-actions">
          <button className="reset-btn">Reset to Default</button>
          <button className="save-btn">
            <FaSave size={16} />
            Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default QueueSettings;
