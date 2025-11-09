import React, { useState } from "react";
import { Clock, Phone, Timer, Bell, X, SkipForward } from "lucide-react";
import "./QueueCard.css";

const QueueCard = ({ data }) => {
  const [mappedCustomers, SetMappedCustomers] = useState([]);
  // SetMappedCustomers(data?.customers);

  return (
    <div className="service-card">
      <div
        className="service-card__avatar"
        style={{ backgroundColor: "#303bff" }}
      >
        001
      </div>

      <div className="service-card__content">
        <div className="service-card__header">
          <span className="service-card__ticket">ticketNumber</span>
          <h3 className="service-card__name">name</h3>
          <p className="service-card__service">servic</p>
        </div>

        <div className="service-card__meta">
          <div className="service-card__meta-item">
            <Clock className="service-card__meta-icon" />
            <span>Joined : joinedTime</span>
          </div>
          <div className="service-card__meta-item">
            <Timer className="service-card__meta-icon" />
            <span>Wait: waitTime</span>
          </div>
          <div className="service-card__meta-item">
            <Phone className="service-card__meta-icon" />
            <span>phoneNumber</span>
          </div>
        </div>
      </div>

      <div className="service-card__actions">
        <button
          style={{ backgroundColor: "#303bff", color: "white" }}
          className="service-card__button service-card__button--primary "
          //   onClick={onAlert}
        >
          <Bell className="service-card__button-icon" />
          Alert
        </button>

        <div
          style={{ border: "2px solid rgb(202, 202, 202)" }}
          className="service-card__button service-card__button--primary"
        >
          <SkipForward className="service-card__skip-icon" />
          Skip
        </div>

        <button
          style={{ color: "red", border: "2px solid red" }}
          className="service-card__button service-card__button--destructive"
          // onClick={onRemove}
        >
          <X className="service-card__button-icon" />
          Remove
        </button>
      </div>
    </div>
  );
};

export default QueueCard;
