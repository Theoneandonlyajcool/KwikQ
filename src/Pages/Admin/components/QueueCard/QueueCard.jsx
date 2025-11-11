import React, { useState } from "react";
import { Clock, Phone, Timer, Bell, X, SkipForward } from "lucide-react";
import "./QueueCard.css";
import axios from "axios";
import { RemoveCustomer } from "../../../Services/APICalls";
// import { toast } from "react-toastify";
import { Await } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const QueueCard = ({ data, refresh }) => {
  const [mappedCustomers, SetMappedCustomers] = useState([]);
  // SetMappedCustomers(data?.customers);
  console.log(data);

  const Id = data.id;

  const [TimeJoined, SetTimeJoined] = useState("");

  const formattedTime = new Date(data.joinedAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  //Formatted wait time

  const waitTime = data?.waitTime;
  // remove the "min" and convert to a number
  const totalMinutes = parseInt(waitTime);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const formattedWaitTime = `${hours} hrs ${minutes} mins`;
  // console.log(formattedWaitTime);

  // Remove customer

  const [customerID, SetcustomerID] = useState("");

  const BranchID = localStorage.getItem("BranchID");
  const BaseURL = import.meta.env.VITE_API_BASE_URL;
  const token = localStorage.getItem("User");

  const [RemoveLoadingState, SetRemoveLoadingState] = useState(false);

  const removeCustomer = async () => {
    try {
      SetRemoveLoadingState(true);
      const res = await axios.delete(
        `${BaseURL}/api/v1/delete-customer/${data.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res?.data?.message);
      SetRemoveLoadingState(false);
      setTimeout(() => {
        refresh();
      }, 1000);
      // console.log(res?.data);
    } catch (error) {
      SetRemoveLoadingState(false);
      console.log(error);
    }
  };

  const [Delete, SetDelete] = useState(false);
  const DeleteCustomer = async () => {
    try {
      SetDelete(true);
      const res = await axios.delete(
        `${BaseURL}/api/v1/delete-customer/${data.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res?.data?.message);
      SetDelete(true);
      // console.log(res?.data);
      setTimeout(() => {
        refresh();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  // const onAlert = async () => {
  //   try {
  //     const response = await axios.post(
  //       `${BaseURL}/api/v1/alert/${data.id}`,
  //       {},
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     );
  //     alert(
  //       `${response.data.message} to ${response.data.data.name} (${response.data.data.email})`
  //     );
  //     refresh();
  //   } catch (error) {
  //     console.error("Error sending alert:", error);
  //     if (error.response?.status === 404) {
  //       alert("Customer not found in queue");
  //     } else {
  //       alert("Failed to send alert. Try again.");
  //     }
  //   }
  // };

  const [AlertLoadingState, SetAlertLoadingState] = useState(false);

  const AlertCustomer = async () => {
    try {
      SetAlertLoadingState(true);
      const res = await axios.post(
        `${BaseURL}/api/v1/alert/${data.id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success(res?.data?.message);
      SetAlertLoadingState(false);
    } catch (error) {
      SetAlertLoadingState(false);
      console.log(error);
    }
  };

  // const skipCustomer = async () => {
  //   try {
  //     SetSkipState(true);
  //     const res = await axios.post(`${BaseURL}/api/v1/skip/${data.id}`);
  //     console.log(res?.data);
  //     toast.success(res?.data?.message);
  //     SetSkipState(false);
  //   } catch (error) {
  //     SetSkipState(false);
  //     console.log(error);
  //   }
  // };

  // const skipCustomer = async (customerId) => {
  //   try {
  //     const res = await axios.post(`${BaseUrl}/api/v1/skip/${customerId}`);
  //     console.log("Customer Skipped:", res.data);
  //     toast.success("Customer skipped successfully");
  //     return res.data;
  //   } catch (error) {
  //     console.error("Error skipping customer:", error);
  //     toast.error(error?.response?.data?.message || "Error skipping customer");
  //   }
  // };

  // const RemoveCustomer = async () => {
  //   try {
  //     const res = await axios.delete(`${BaseURL}/api/v1/remove/${customerID}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="service-card">
      <ToastContainer />
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
          disabled={AlertLoadingState}
          onClick={() => AlertCustomer()}
          style={{
            backgroundColor: `${AlertLoadingState ? "#0915fc" : "#303bff"}`,
            color: "white",
            cursor: `${AlertLoadingState ? "not-allowed" : "pointer"}`,
          }}
          // style={{ backgroundColor: "#303bff", color: "white" }}
          className="service-card__button service-card__button--primary "
          // onClick={AlertUser}
        >
          <Bell className="service-card__button-icon" />
          {AlertLoadingState ? "Alerting.." : "Alert"}
        </button>

        <button
          disabled={Delete}
          onClick={() => DeleteCustomer()}
          style={{ backgroundColor: "red", color: "white" }}
          className="service-card__button service-card__button--primary"
        >
          {/* <SkipForward className="service-card__skip-icon" /> */}
          {Delete ? "Deleteing" : "Delete"}
        </button>

        <button
          style={{ color: "green", border: "2px solid green" }}
          onClick={() => {
            removeCustomer();
          }}
          // onClick={async () => {
          //   // optionally confirm
          //   if (!confirm("Remove this customer?")) return;
          //   const result = await RemoveCustomer(data.id);
          //   if (result.ok) {
          //     refresh(); // call parent refresh or update UI
          //   } else {
          //     alert("Delete failed");
          //   }
          // }}
          className="service-card__button service-card__button--destructive"
          // onClick={onRemove}
        >
          {/* <X className="service-card__button-icon" /> */}

          {RemoveLoadingState ? "Serving..." : "Served"}
        </button>
      </div>
    </div>
  );
};

export default QueueCard;
