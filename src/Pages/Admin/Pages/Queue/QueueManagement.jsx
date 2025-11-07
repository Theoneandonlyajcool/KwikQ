import React, { useEffect, useState } from "react";
import QueueCard from "./QueueCard";
import "./QueueManagement.css";
import { TbLayersSubtract } from "react-icons/tb";
import { MdLayers } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const QueueManagement = () => {
  const nav = useNavigate();

  // const ActiveQueues =async()=>{
  //   const res =
  // }

  // const [queues, setQueues] = useState([
  //   {
  //     id: 1,
  //     name: "T-001",
  //     customer: "P. Johnson, 24/7/2025",
  //     service: "Service: Account Opening",
  //     added: "10:30 AM",
  //     wait: "12 mins",
  //     phone: "+234 802 243 7878",
  //     active: true,
  //   },
  //   {
  //     id: 2,
  //     name: "T-002",
  //     customer: "M. Lee",
  //     service: "Service: Account Opening",
  //     added: "10:45 AM",
  //     wait: "1 hr",
  //     phone: "+234 456 421 8841",
  //     active: false,
  //   },
  //   {
  //     id: 3,
  //     name: "T-003",
  //     customer: "S. Chen Reeves",
  //     service: "Service: Account Opening",
  //     added: "11:04 AM",
  //     wait: "1 min",
  //     phone: "+234 456 421 8841",
  //     active: false,
  //   },
  // ]);

  // const handleServe = (id) => {
  //   setQueues(
  //     queues.map((q) =>
  //       q.id === id ? { ...q, active: true } : { ...q, active: false }
  //     )
  //   );
  // };

  const [queues, setQueues] = useState([]);

  // const handleRemove = (id) => {
  //   setQueues(queues.filter((q) => q.id !== id));
  // };

  const BranchID = localStorage.getItem("BranchID");
  const BaseURL = import.meta.env.VITE_API_BASE_URL;
  const [LoadingState, SetLoadingState] = useState(false);

  const GetAllQueues = async () => {
    try {
      SetLoadingState(true);
      const res = await axios.get(`${BaseURL}/api/v1/queues/${BranchID}`);
      console.log(res?.data);
      toast.success(res?.data?.message);
      setQueues(res?.data?.data);
      SetLoadingState(false);
    } catch (error) {
      SetLoadingState(false);
      console.log(error);
    }
  };

  // const GetAllQueues = async () => {
  //   try {
  //     const res = await axios.get(`${BaseURL}/api/v1/get-all-customers`);
  //     console.log(res?.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    GetAllQueues();
  }, []);

  return (
    <>
      {/* <style>{styles}</style> */}
      <div className="queue-container">
        <ToastContainer />
        <div className="header">
          <div className="header-left">
            <h1>Queue Management</h1>
            <p className="date">Monday, October 26, 2025</p>
          </div>
          {/* <div className="header-right">
            <button className="btn-faq">FAQ</button>
          </div> */}
        </div>
        <div className="queue-info-section">
          <div className="queue-info-header">
            <h2>Queue Management</h2>
            <div>
              <button
                style={{
                  backgroundColor: "#5f8aea",
                  color: "white",
                  fontSize: "1rem",
                }}
                className="btn-customize"
              >
                Alert next
              </button>
              <button
                style={{
                  border: "1px solid black",
                  color: "black",
                  fontSize: "1rem",
                  marginLeft: ".5rem",
                }}
                className="btn-customize"
                onClick={() => nav("/queue_form")}
              >
                Add customer
              </button>
            </div>
          </div>
          <p className="queue-subtitle">
            Manage and monitor customer queue in real-time
          </p>
        </div>
        <div className="filter-section">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by name, Queue ID, or service"
            />
          </div>
          <div className="filter-right">
            <span className="queue-count">All Queues</span>
            <span className="dropdown-icon">▼</span>
          </div>
        </div>
        {/* <div className="service-point-header">
          <div className="service-point-left">
            <div className="icon-circle blue">
              <span className="icon-text">Q</span>
            </div>
            <span className="service-title">Queue Service Point</span>
          </div>
          <div className="active-indicator">
            <span className="active-dot"></span>
            <span className="active-text">Active</span>
            <span className="active-count">{queues.length}</span>
          </div>
        </div> */}

        {LoadingState ? (
          <div style={{ width: "100%", height: "100vh" }}>
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
          <>
            {queues.length <= 0 ? (
              <div className="empty_data">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MdLayers style={{ fontSize: "6rem", color: "#6a7282" }} />
                  <p style={{ color: "gray" }}>No data found</p>
                </div>
                <p
                  style={{
                    fontSize: "1.5rem",
                    color: "#6a7282",
                    marginTop: ".5rem",
                  }}
                >
                  Queue management will be displayed here
                </p>
              </div>
            ) : (
              <div>
                {queues.map((ele, idx) => {
                  return (
                    <div>
                      <QueueCard data={ele} key={idx} />;
                      <div className="quick-actions">
                        <h3>Quick Actions</h3>
                        <div className="actions-content">
                          <div className="action-buttons">
                            <button className="btn-action">Pause Queue</button>
                            <button className="btn-action">
                              Add Manual Entry
                            </button>
                          </div>
                          <div className="qr-section">
                            <div className="qr-code">
                              <div className="qr-pattern"></div>
                            </div>
                            <p className="qr-label">Scan Our QR</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

        {/* <div className="quick-actions">
          <h3>Quick Actions</h3>
          <div className="actions-content">
            <div className="action-buttons">
              <button className="btn-action">Pause Queue</button>
              <button className="btn-action">Add Manual Entry</button>
            </div>
            <div className="qr-section">
              <div className="qr-code">
                <div className="qr-pattern"></div>
              </div>
              <p className="qr-label">Scan Our QR</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default QueueManagement;
