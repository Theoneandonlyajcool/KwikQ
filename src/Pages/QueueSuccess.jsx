import React from "react";
import { FaTimes } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { ImNotification } from "react-icons/im";
import { LuClipboardList } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import "../Styles/QueueSuccess.css";

const QueueSuccess = () => {
  const queueData = {
    queue_number: 8,
    full_name: "Ossai Benita",
    phone_number: "07039925787",
    email: "ossaibenita@example.com",
    purpose_of_visit: "Consultation",
  };
  const ticketNumber = `T-${String(queueData.queue_number).padStart(3, "0")}`;

  return (
    <div className="success-page-container">
      <div className="success-card">
        <button className="close-button">
          <IoCloseOutline style={{ width: "18px", height: "18px" }} />
        </button>

        <div className="success-header">
          <div className="success-icon-wrapper">
            <LuCircleCheckBig className="success-icon" />
          </div>
          <h1 className="success-title">Successfully Added to Queue!</h1>
          <p className="success-description">
            You've been added to the queue. Please keep this ticket number for
            reference.
          </p>
        </div>
        <div className="v-line"></div>
        <div className="success-body">
          <div className="info-section">
            <div className="ticket-number-box">
              <div className="section-label">Your Queue Number</div>

              <div className="ticket-number">{ticketNumber}</div>
            </div>
          </div>

          <div className="info-section">
            <div className="position-box">
              <div className="position-box-wrapper">
                <div className="position-label">
                  <LuUsers className="position-icon" />
                  <span>Queue Position</span>
                </div>

                <div className="position-value">#{queueData.queue_number}</div>
              </div>
            </div>
          </div>

          <div className="info-section">
            <div className="info-list">
              <h3 className="info-list-title">Your Information</h3>
              <div className="info-item">
                <LuUser className="info-icon" />
                <span className="info-text">{queueData.full_name}</span>
              </div>
              <div className="info-item">
                <LuPhone className="info-icon" />
                <span className="info-text">{queueData.phone_number}</span>
              </div>
              <div className="info-item">
                <LuMail className="info-icon" />
                <span className="info-text">{queueData.email}</span>
              </div>
              <div className="info-item">
                <LuClipboardList className="info-icon" />
                <span className="info-text">{queueData.purpose_of_visit}</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <div className="notification-box">
              <ImNotification className="notification-icon" />
              <div>
                <h4 className="notification-title">Stay Notified</h4>
                <p className="notification-text">
                  We'll send you mail updates when your turn is approaching.
                  Please stay within the premises.
                </p>
              </div>
            </div>
          </div>

          <button className="done-button">Done</button>
        </div>
      </div>
    </div>
  );
};

export default QueueSuccess;
