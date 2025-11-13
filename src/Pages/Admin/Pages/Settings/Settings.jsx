import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaBuilding,
  FaClock,
  FaCog,
  FaExclamationTriangle,
  FaSave,
} from "react-icons/fa";
import { FaUsers, FaShieldAlt, FaPlus, FaTrash } from "react-icons/fa";
import {
  FaBell,
  FaEnvelope,
  FaExclamationTriangle as FaAlert,
  FaCommentDots,
} from "react-icons/fa";
import "./Settings.css";

const SettingsTab = ({ label, active, onClick }) => {
  return (
    <div className={`tab ${active ? "active" : ""}`} onClick={onClick}>
      {label}
    </div>
  );
};

const GeneralTab = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    address: "",
  });

  const [operatingHours, setOperatingHours] = useState({
    openingTime: "",
    closingTime: "",
    workingDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  });

  const token =
    localStorage.getItem("User") ||
    localStorage.getItem(import.meta.env.VITE_USERTOKEN);
  const userId =
    localStorage.getItem(import.meta.env.VITE_USERID) ||
    localStorage.getItem("user-recog");
  const BranchID = localStorage.getItem("BranchID");

  const getBranchId = () => {
    let notificationId = userId;
    if (notificationId) {
      try {
        notificationId = JSON.parse(notificationId);
      } catch {
        // If parsing fails, use as is
      }
    }
    notificationId = String(notificationId)
      .trim()
      .replace(/^["'`]+|["'`]+$/g, "")
      .trim();

    if (
      !notificationId ||
      notificationId === "null" ||
      notificationId === "undefined"
    ) {
      notificationId = BranchID;
    }
    return notificationId;
  };

  const fetchBusinessDetails = async () => {
    try {
      setLoading(true);
      setError(null);

      const branchId = getBranchId();

      if (!branchId) {
        setError("Branch ID not found. Please log in again.");
        setLoading(false);
        return;
      }

      if (!token) {
        setError("Authentication token not found. Please log in again.");
        setLoading(false);
        return;
      }

      const apiUrl = `https://kwikq-1.onrender.com/api/v1/business-details/${branchId}`;
      console.log("[v0] Fetching business details from:", apiUrl);

      const { data } = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("[v0] Business details response:", data);

      if (data.data) {
        const businessData = data.data;
        setFormData({
          name: businessData.name || "",
          email: businessData.email || "",
          phone: businessData.phone || "",
          time: businessData.time || "",
          address: businessData.address || "",
        });
      }
    } catch (err) {
      console.error("[v0] Error fetching business details:", err);
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to fetch business details"
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchOperatingHours = async () => {
    try {
      if (!token) {
        console.error("[v0] No token available for operating hours");
        return;
      }

      const apiUrl = `https://kwikq-1.onrender.com/api/v1/operating-hours`;
      console.log("[v0] Fetching operating hours from:", apiUrl);

      const { data } = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("[v0] Operating hours response:", data);

      if (data.data) {
        const hoursData = data.data;
        setOperatingHours({
          openingTime: hoursData.openingTime || "",
          closingTime: hoursData.closingTime || "",
          workingDays: hoursData.workingDays || [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
          ],
        });
      }
    } catch (err) {
      console.error("[v0] Error fetching operating hours:", err);
    }
  };

  useEffect(() => {
    fetchBusinessDetails();
    fetchOperatingHours();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setOperatingHours((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDayToggle = (day) => {
    setOperatingHours((prev) => ({
      ...prev,
      workingDays: prev.workingDays.includes(day)
        ? prev.workingDays.filter((d) => d !== day)
        : [...prev.workingDays, day],
    }));
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setError(null);
      setSuccess(null);

      const branchId = getBranchId();

      if (!branchId) {
        setError("Branch ID not found. Please log in again.");
        setSaving(false);
        return;
      }

      if (!token) {
        setError("Authentication token not found. Please log in again.");
        setSaving(false);
        return;
      }

      // Save business details
      const businessApiUrl = `https://kwikq-1.onrender.com/api/v1/business/${branchId}`;
      console.log("[v0] Updating business details to:", businessApiUrl);

      const businessPayload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        time: formData.time,
        address: formData.address,
      };

      console.log("[v0] Sending business payload:", businessPayload);

      const businessResponse = await axios.patch(
        businessApiUrl,
        businessPayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("[v0] Business update response:", businessResponse.data);

      const operatingHoursApiUrl = `https://kwikq-1.onrender.com/api/v1/operating-hours`;
      console.log("[v0] Updating operating hours to:", operatingHoursApiUrl);

      const operatingHoursPayload = {
        openingTime: operatingHours.openingTime,
        closingTime: operatingHours.closingTime,
        workingDays: operatingHours.workingDays,
      };

      console.log(
        "[v0] Sending operating hours payload:",
        operatingHoursPayload
      );

      const hoursResponse = await axios.patch(
        operatingHoursApiUrl,
        operatingHoursPayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("[v0] Operating hours update response:", hoursResponse.data);
      setSuccess("Business details and operating hours updated successfully!");

      setTimeout(() => {
        setSuccess(null);
        fetchBusinessDetails();
        fetchOperatingHours();
      }, 1500);
    } catch (err) {
      console.error("[v0] Error updating settings:", err);
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to update settings"
      );
    } finally {
      setSaving(false);
    }
  };

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <>
      {error && (
        <div
          className="error-message"
          style={{ color: "#ef4444", marginBottom: "16px" }}
        >
          {error}
        </div>
      )}
      {success && (
        <div
          className="success-message"
          style={{ color: "#10b981", marginBottom: "16px" }}
        >
          {success}
        </div>
      )}

      {loading ? (
        <div style={{ textAlign: "center", padding: "40px", color: "#666" }}>
          Loading business details...
        </div>
      ) : (
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
                  placeholder="Enter your business name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="label">Email Address</label>
                <input
                  type="email"
                  className="input"
                  placeholder="your-email@business.com"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="label">Phone Number</label>
                <input
                  type="tel"
                  className="input"
                  placeholder="+234 1 234 5678"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="label">Timezone</label>
                <input
                  type="text"
                  className="input"
                  placeholder="West Africa Time (WAT)"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group-full">
              <label className="label">Business Address</label>
              <input
                type="text"
                className="input"
                placeholder="Enter your business address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
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
                <input
                  type="time"
                  className="input"
                  name="openingTime"
                  value={operatingHours.openingTime}
                  onChange={handleTimeChange}
                />
              </div>
              <div className="form-group">
                <label className="label">Closing Time</label>
                <input
                  type="time"
                  className="input"
                  name="closingTime"
                  value={operatingHours.closingTime}
                  onChange={handleTimeChange}
                />
              </div>
            </div>

            <div className="days-section">
              <label className="label">Working Days</label>
              <div className="days-grid">
                {days.map((day) => (
                  <button
                    key={day}
                    className={`day-btn ${
                      operatingHours.workingDays.includes(day) ? "active" : ""
                    }`}
                    onClick={() => handleDayToggle(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
              <p className="days-hint">Click to toggle days</p>
            </div>
          </div>

          <div
            className="section"
            style={{
              marginTop: "24px",
              padding: "24px",
              backgroundColor: "#f9fafb",
              borderRadius: "8px",
            }}
          >
            <button
              className="save-btn"
              onClick={handleSave}
              disabled={saving}
              style={{ opacity: saving ? 0.6 : 1 }}
            >
              <FaSave size={16} />
              {saving ? "Saving..." : "Save Business Details"}
            </button>
          </div>
        </>
      )}
    </>
  );
};

const QueueConfigTab = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [maxQueueSize, setMaxQueueSize] = useState("");
  const [avgServiceTime, setAvgServiceTime] = useState("");

  const token =
    localStorage.getItem("User") ||
    localStorage.getItem(import.meta.env.VITE_USERTOKEN);
  const userId =
    localStorage.getItem(import.meta.env.VITE_USERID) ||
    localStorage.getItem("user-recog");
  const BranchID = localStorage.getItem("BranchID");

  const getBranchId = () => {
    let notificationId = userId;
    if (notificationId) {
      try {
        notificationId = JSON.parse(notificationId);
      } catch {
        // If parsing fails, use as is
      }
    }
    notificationId = String(notificationId)
      .trim()
      .replace(/^["'`]+|["'`]+$/g, "")
      .trim();

    if (
      !notificationId ||
      notificationId === "null" ||
      notificationId === "undefined"
    ) {
      notificationId = BranchID;
    }
    return notificationId;
  };

  const fetchQueueConfig = async () => {
    try {
      setLoading(true);
      setError(null);

      const branchId = getBranchId();

      if (!branchId) {
        setError("Branch ID not found. Please log in again.");
        setLoading(false);
        return;
      }

      if (!token) {
        setError("Authentication token not found. Please log in again.");
        setLoading(false);
        return;
      }

      const apiUrl = `https://kwikq-1.onrender.com/api/v1/queue-config/${branchId}`;
      console.log("[v0] Fetching queue config from:", apiUrl);

      const { data } = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("[v0] Queue config response:", data);

      if (data.data) {
        setMaxQueueSize(data.data.maxQueueSize);
        setAvgServiceTime(data.data.avgServiceTime);
      }
    } catch (err) {
      console.error("[v0] Error fetching queue config:", err);
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to fetch queue configuration"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateQueueConfig = async () => {
    try {
      setSaving(true);
      setError(null);
      setSuccess(null);

      const branchId = getBranchId();

      if (!branchId) {
        setError("Branch ID not found. Please log in again.");
        setSaving(false);
        return;
      }

      if (!token) {
        setError("Authentication token not found. Please log in again.");
        setSaving(false);
        return;
      }

      if (!maxQueueSize || !avgServiceTime) {
        setError("Please fill in all required fields");
        setSaving(false);
        return;
      }

      const apiUrl = `https://kwikq-1.onrender.com/api/v1/queue-config/${branchId}`;
      console.log("[v0] Updating queue config to:", apiUrl);

      const payload = {
        maxQueueSize: Number.parseInt(maxQueueSize),
        avgServiceTime: Number.parseInt(avgServiceTime),
      };

      console.log("[v0] Sending queue config payload:", payload);

      const { data } = await axios.patch(apiUrl, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("[v0] Queue config update response:", data);
      setSuccess("Queue configuration updated successfully!");

      setTimeout(() => {
        setSuccess(null);
        fetchQueueConfig();
      }, 1500);
    } catch (err) {
      console.error("[v0] Error updating queue config:", err);
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to update queue configuration"
      );
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    fetchQueueConfig();
  }, []);

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

        {error && (
          <div
            className="error-message"
            style={{ color: "#ef4444", marginBottom: "16px" }}
          >
            {error}
          </div>
        )}

        {success && (
          <div
            className="success-message"
            style={{ color: "#10b981", marginBottom: "16px" }}
          >
            {success}
          </div>
        )}

        {loading ? (
          <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
            Loading queue configuration...
          </div>
        ) : (
          <>
            <div className="form-row">
              <div className="form-group">
                <label className="label">Maximum Queue Size</label>
                <input
                  type="number"
                  className="input"
                  value={maxQueueSize}
                  onChange={(e) => setMaxQueueSize(e.target.value)}
                  placeholder="Enter max queue size"
                />
                <p className="helper-text">
                  Maximum number of customers in queue
                </p>
              </div>

              <div className="form-group">
                <label className="label">Avg. Service Time (minutes)</label>
                <input
                  type="number"
                  className="input"
                  value={avgServiceTime}
                  onChange={(e) => setAvgServiceTime(e.target.value)}
                  placeholder="Enter average service time"
                />
                <p className="helper-text">Estimated time per customer</p>
              </div>
            </div>

            <div
              style={{
                marginTop: "24px",
                paddingTop: "24px",
                borderTop: "1px solid #e5e7eb",
              }}
            >
              <button
                className="save-btn"
                onClick={handleUpdateQueueConfig}
                disabled={saving}
                style={{ opacity: saving ? 0.6 : 1 }}
              >
                <FaSave size={16} />
                {saving ? "Saving..." : "Save Queue Configuration"}
              </button>
            </div>
          </>
        )}
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
      </div>

      <div className="tab-content">
        {activeTab === "General" && <GeneralTab />}
        {activeTab === "Queue Config" && <QueueConfigTab />}
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
