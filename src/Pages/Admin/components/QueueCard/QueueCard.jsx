import React, { useState } from "react";
import { Clock, Phone, Timer, Bell, X, SkipForward } from "lucide-react";
import "./QueueCard.css";
import axios from "axios";
import { RemoveCustomer } from "../../../Services/APICalls";
import { toast } from "react-toastify";

const QueueCard = ({ data, refresh }) => {
  const [mappedCustomers, SetMappedCustomers] = useState([]);
  console.log(data);

  const Id = data.id;

  const [TimeJoined, SetTimeJoined] = useState("");

  const formattedTime = new Date(data.joinedAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const waitTime = data?.waitTime;
  const totalMinutes = parseInt(waitTime);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const formattedWaitTime = `${hours} hrs ${minutes} mins`;

  const [customerID, SetcustomerID] = useState("");

  const BranchID = localStorage.getItem("BranchID");
  const BaseURL = import.meta.env.VITE_API_BASE_URL;
  const token = localStorage.getItem("User");

  const BaseUrl = import.meta.env.VITE_API_BASE_URL;

  const skipCustomer = async (customerId) => {
    try {
      const res = await axios.post(`${BaseUrl}/api/v1/skip/${customerId}`);
      console.log("Customer Skipped:", res.data);
      toast.success("Customer skipped successfully");
      return res.data;
    } catch (error) {
      console.error("Error skipping customer:", error);
      toast.error(error?.response?.data?.message || "Error skipping customer");
    }
  };

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
          <span className="service-card__ticket">{data?.queueNumber}</span>
          <h3 className="service-card__name">{data?.fullName}</h3>
          <p className="service-card__service">{data?.service}</p>
        </div>

        <div className="service-card__meta">
          <div className="service-card__meta-item">
            <Clock className="service-card__meta-icon" />
            <span>Joined : {formattedTime}</span>
          </div>
          <div className="service-card__meta-item">
            <Timer className="service-card__meta-icon" />
            <span>Wait:{formattedWaitTime}</span>
          </div>
          <div className="service-card__meta-item">
            <Phone className="service-card__meta-icon" />
            <span>{data.phone}</span>
          </div>
        </div>
      </div>

      <div className="service-card__actions">
        <button
          style={{ backgroundColor: "#303bff", color: "white" }}
          className="service-card__button service-card__button--primary"
        >
          <Bell className="service-card__button-icon" />
          Alert
        </button>

        <div
          style={{ border: "2px solid rgb(202, 202, 202)" }}
          className="service-card__button service-card__button--primary"
          onClick={() => {
            skipCustomer(data.id);
            setTimeout(() => {
              refresh();
            }, 1000);
          }}
        >
          <SkipForward className="service-card__skip-icon" />
          Skip
        </div>

        <button
          style={{ color: "red", border: "2px solid red" }}
          onClick={() => {
            console.log(data.id);
          }}
          className="service-card__button service-card__button--destructive"
        >
          <X className="service-card__button-icon" />
          Remove
        </button>
      </div>
    </div>
  );
};

export default QueueCard;
