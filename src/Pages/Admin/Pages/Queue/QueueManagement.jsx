import React, { useState } from "react";
import { Clock, User, Phone, Trash2, AlertCircle } from "lucide-react";

const styles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #e8edf2;
}

.queue-container {
  min-height: 100vh;
  background-color: #e8edf2;
  padding: 0;
}

.header {
  background: white;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom:1rem;
  }

.header-left {
  display: flex;
  flex-direction: column;
}

.header-title {
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
}

.header-date {
  font-size: 13px;
  color: #666;
}

.back-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
}

.main-content {
  padding: 20px 24px;
  width:screen;
  border:2px solid red
}

.top-section {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.section-title-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.section-title h2 {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 4px;
}

.section-subtitle {
  font-size: 13px;
  color: #666;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.btn-agent {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}

.btn-add {
  background: white;
  color: #333;
  border: 1px solid #d0d0d0;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}

.search-row {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #d0d0d0;
  border-radius: 6px;
  font-size: 13px;
  background: white;
}

.search-input::placeholder {
  color: #999;
}

.status-filter {
  padding: 10px 16px;
  border: 1px solid #d0d0d0;
  border-radius: 6px;
  background: white;
  font-size: 13px;
  cursor: pointer;
  color: #333;
  min-width: 120px;
}

.queue-box {
  background: #f8f9fb;
  border: 2px solid red;
  border-radius: 8px;
  width:100%;
  overflow: hidden;
}

.queue-header {
  background: #f0f2f5;
  padding: 14px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
}

.queue-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.grid-icon {
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
  border-radius: 6px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 3px;
  padding: 6px;
}

.grid-dot {
  background: white;
  border-radius: 1px;
}

.queue-title span {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
}

.queue-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.active-text {
  font-size: 13px;
  color: #666;
}

.toggle-switch {
  position: relative;
  width: 40px;
  height: 22px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #4f46e5;
  transition: 0.3s;
  border-radius: 22px;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.3s;
  border-radius: 50%;
}

input:checked + .toggle-slider:before {
  transform: translateX(18px);
}

.trash-icon {
  color: #ef4444;
  cursor: pointer;
}

.customer-list {
  background: white;
}

.customer-item {
  padding: 18px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.customer-item:last-child {
  border-bottom: none;
}

.customer-left {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.customer-avatar {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 13px;
  flex-shrink: 0;
}

.customer-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.customer-id {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
}

.customer-name-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #333;
}

.customer-name-row svg {
  color: #666;
}

.customer-service {
  font-size: 12px;
  color: #666;
}

.customer-meta {
  display: flex;
  gap: 14px;
  font-size: 12px;
  color: #666;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.meta-item svg {
  color: #999;
}

.customer-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.btn-alert {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 7px 14px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
}

.btn-skip {
  background: white;
  color: #333;
  border: 1px solid #d0d0d0;
  padding: 7px 14px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
}

.btn-status {
  display: flex;
  align-items: center;
  gap: 5px;
  background: white;
  color: #dc2626;
  border: 1px solid #fecaca;
  padding: 7px 14px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
}

.btn-status svg {
  width: 14px;
  height: 14px;
}

.sidebar {
  position: fixed;
  right: 24px;
  top: 140px;
  width: 280px;
  background: white;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #e0e0e0;
}

.sidebar h3 {
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 16px;
}

.sidebar-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
}

.sidebar-btn {
  background: white;
  color: #333;
  border: 1px solid #d0d0d0;
  padding: 11px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
}

.qr-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
}

.qr-code {
  width: 180px;
  height: 180px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.qr-pattern {
  width: 100%;
  height: 100%;
  background-image: 
    repeating-linear-gradient(0deg, #000 0px, #000 8px, transparent 8px, transparent 16px),
    repeating-linear-gradient(90deg, #000 0px, #000 8px, transparent 8px, transparent 16px);
  opacity: 0.9;
  position: relative;
}

.qr-corner {
  position: absolute;
  width: 35px;
  height: 35px;
  border: 4px solid #000;
}

.qr-corner.tl {
  top: 12px;
  left: 12px;
}

.qr-corner.tr {
  top: 12px;
  right: 12px;
}

.qr-corner.bl {
  bottom: 12px;
  left: 12px;
}

.qr-inner {
  position: absolute;
  width: 12px;
  height: 12px;
  background: #000;
}

.qr-inner.tl {
  top: 22px;
  left: 22px;
}

.qr-inner.tr {
  top: 22px;
  right: 22px;
}

.qr-inner.bl {
  bottom: 22px;
  left: 22px;
}

.qr-label {
  font-size: 13px;
  color: #666;
  font-weight: 500;
}

@media (max-width: 1200px) {
  .sidebar {
    position: static;
    width: 100%;
    margin-top: 20px;
  }
}
`;

const QueueManagement = () => {
  React.useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  const [activeToggle, setActiveToggle] = useState(true);

  return (
    <div className="queue-container">
      <div className="header">
        <div className="header-left">
          <h1 className="header-title">Queue Management</h1>
          <p className="header-date">Monday, October 20, 2025</p>
        </div>
        <button className="back-btn">← Back</button>
      </div>

      <div className="main-content">
        <div style={{ marginRight: "320px" }}>
          <div className="top-section">
            <div className="section-title-row">
              <div className="section-title">
                <h2>Queue Management</h2>
                <p className="section-subtitle">
                  Manage and monitor customer queues in real-time
                </p>
              </div>
              <div className="action-buttons">
                <button className="btn-agent">Agent Filled</button>
                <button className="btn-add">Add Customer</button>
              </div>
            </div>

            <div className="search-row">
              <input
                type="text"
                className="search-input"
                placeholder="Search by name, Queue ID, or queue number..."
              />
              <select className="status-filter">
                <option>All Status</option>
              </select>
            </div>

            <div className="queue-box">
              <div className="queue-header">
                <div className="queue-title">
                  <div className="grid-icon">
                    <div className="grid-dot"></div>
                    <div className="grid-dot"></div>
                    <div className="grid-dot"></div>
                    <div className="grid-dot"></div>
                  </div>
                  <span>Queue Service Point</span>
                </div>
                <div className="queue-controls">
                  <span className="active-text">Active</span>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={activeToggle}
                      onChange={() => setActiveToggle(!activeToggle)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                  <Trash2 size={18} className="trash-icon" />
                </div>
              </div>

              <div className="customer-list">
                <div className="customer-item">
                  <div className="customer-left">
                    <div className="customer-avatar">001</div>
                    <div className="customer-info">
                      <div className="customer-id">T-001</div>
                      <div className="customer-name-row">
                        <User size={13} />
                        Adewale Johnson
                      </div>
                      <div className="customer-service">
                        Service: Account Opening
                      </div>
                      <div className="customer-meta">
                        <div className="meta-item">
                          <Clock size={12} />
                          Joined: 10:30 AM
                        </div>
                        <div className="meta-item">
                          <Clock size={12} />
                          Wait: 12 min
                        </div>
                        <div className="meta-item">
                          <Phone size={12} />
                          +234 801 234 5678
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="customer-actions">
                    <button className="btn-alert">Alert</button>
                    <button className="btn-skip">Skip</button>
                    <button className="btn-status">
                      <AlertCircle size={14} />
                      Reissue
                    </button>
                  </div>
                </div>

                <div className="customer-item">
                  <div className="customer-left">
                    <div className="customer-avatar">002</div>
                    <div className="customer-info">
                      <div className="customer-id">T-002</div>
                      <div className="customer-name-row">
                        <User size={13} />
                        Ngozi Eze
                      </div>
                      <div className="customer-service">
                        Service: Account Opening
                      </div>
                      <div className="customer-meta">
                        <div className="meta-item">
                          <Clock size={12} />
                          Joined: 10:42 AM
                        </div>
                        <div className="meta-item">
                          <Clock size={12} />
                          Wait: 1 min
                        </div>
                        <div className="meta-item">
                          <Phone size={12} />
                          +234 804 567 8901
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="customer-actions">
                    <button className="btn-alert">Alert</button>
                    <button className="btn-skip">Skip</button>
                    <button className="btn-status">
                      <AlertCircle size={14} />
                      Remove
                    </button>
                  </div>
                </div>

                <div className="customer-item">
                  <div className="customer-left">
                    <div className="customer-avatar">003</div>
                    <div className="customer-info">
                      <div className="customer-id">T-003</div>
                      <div className="customer-name-row">
                        <User size={13} />
                        Dare Emma
                      </div>
                      <div className="customer-service">
                        Service: Account Opening
                      </div>
                      <div className="customer-meta">
                        <div className="meta-item">
                          <Clock size={12} />
                          Joined: 10:42 AM
                        </div>
                        <div className="meta-item">
                          <Clock size={12} />
                          Wait: 1 min
                        </div>
                        <div className="meta-item">
                          <Phone size={12} />
                          +234 806 507 8601
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="customer-actions">
                    <button className="btn-alert">Alert</button>
                    <button className="btn-skip">Skip</button>
                    <button className="btn-status">
                      <AlertCircle size={14} />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar">
          <h3>Quick Actions</h3>
          <div className="sidebar-actions">
            <button className="sidebar-btn">Pause Queue</button>
            <button className="sidebar-btn">Add Manual Entry</button>
          </div>
          <div className="qr-section">
            <div className="qr-code">
              <div className="qr-pattern">
                <div className="qr-corner tl"></div>
                <div className="qr-corner tr"></div>
                <div className="qr-corner bl"></div>
                <div className="qr-inner tl"></div>
                <div className="qr-inner tr"></div>
                <div className="qr-inner bl"></div>
              </div>
            </div>
            <p className="qr-label">Scan For Manual Entry</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueManagement;
