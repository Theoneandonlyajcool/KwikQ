import React, { useEffect, useState } from "react";
import QueueCard from "../../components/QueueCard/QueueCard";
import "./QueueManagement.css";
import { TbLayersSubtract } from "react-icons/tb";
import { MdLayers } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const QueueManagement = ({ qrCode }) => {
  const nav = useNavigate();
  console.log(qrCode);
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

  const [queues, setQueues] = useState([]);

  const BranchID = localStorage.getItem("BranchID");
  const BaseURL = import.meta.env.VITE_API_BASE_URL;
  const [LoadingState, SetLoadingState] = useState(false);
  // console.log(BranchID);
  // console.log(BranchID);

  const GetAllQueues = async () => {
    try {
      SetLoadingState(true);
      const res = await axios.get(`${BaseURL}/api/v1/queues/${BranchID}`);
      toast.success(res?.data?.message);
      setQueues(res?.data?.data);
      // console.log(res?.data.data);
      SetLoadingState(false);
    } catch (error) {
      SetLoadingState(false);
      console.log(error);
    }
  };

  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(now);
      setDateTime(formattedDate);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);

    GetAllQueues();
    return () => clearInterval(interval);
  }, []);

  // const BaseUrl = import.meta.env.VITE_API_BASE_URL;

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

  return (
    <>
      {/* <style>{styles}</style> */}
      <div className="queue-container">
        <ToastContainer />
        <div className="header">
          <div className="header-left">
            <h1>Queue Management</h1>
            <p className="date">{dateTime}</p>
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
                    <div

                    // style={{ border: "2px solid red", margin: ".5rem" }}
                    >
                      <QueueCard
                        refresh={GetAllQueues}
                        data={ele}
                        key={ele.id}
                      />
                      ;
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

        <div style={styles.QrSection}>
          <h3>Quick Actions</h3>

          {/* Qr code and button */}
          <div
            style={{
              // border: "2px solid red",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Buttons */}
            <div style={styles.actionButtons}>
              <button style={styles.actionBtn}>Pause Queue</button>
              <button
                style={styles.actionBtn}
                onClick={() => nav("/queue_form")}
              >
                Add Manual Entry
              </button>
            </div>

            <img style={styles.QrCode} src={qrCode} alt="" />
          </div>
        </div>

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

const styles = {
  dashboard: {
    width: "100%",
    margin: "0 auto",
    padding: "2rem",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
  },
  header: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "1.75rem",
    fontWeight: "600",
    marginBottom: "0.25rem",
  },
  date: {
    color: "#6b7280",
    fontSize: "0.875rem",
  },
  trialBanner: {
    // background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    // color: "white",
    padding: "1rem 0rem",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    gap: "30px",
  },
  upgradeBtn: {
    background: "#303bff",
    color: "white",
    border: "none",
    padding: "0.5rem 1.5rem",
    borderRadius: "8px",
    fontWeight: "600",
    display: "flex",
    gap: "10px",
    justifyContent: "space-between",
    cursor: "pointer",
    fontSize: "1.2rem",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    marginBottom: "2rem",
    // border: "12px solid blue",
  },
  statCard: {
    background: "white",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    position: "relative",
  },
  statCardPurple: {
    borderTop: "4px solid #8b5cf6",
  },
  statCardBlue: {
    borderTop: "4px solid #3b82f6",
  },
  statCardGreen: {
    borderTop: "4px solid #10b981",
  },
  statIcon: {
    display: "inline-flex",
    padding: "0.75rem",
    borderRadius: "10px",
    marginBottom: "1rem",
  },
  statIconPurple: {
    background: "#ede9fe",
    color: "#8b5cf6",
  },
  statIconBlue: {
    background: "#dbeafe",
    color: "#3b82f6",
  },
  statIconGreen: {
    background: "#d1fae5",
    color: "#10b981",
  },
  statLabel: {
    fontSize: "0.875rem",
    color: "#6b7280",
    marginBottom: "0.5rem",
  },
  statValue: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "0.25rem",
  },
  statChange: {
    fontSize: "0.875rem",
    fontWeight: "600",
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
    marginBottom: "2rem",
  },
  section1: {
    background: "white",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    // border: "2px solid red",
    width: "100%",
  },

  QrSection: {
    background: "white",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    // border: "2px solid blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  QrCode: {
    width: "20%",
    height: "50%",
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
  },
  sectionTitle: {
    fontSize: "1.125rem",
    fontWeight: "600",
  },
  viewLink: {
    color: "#ef4444",
    fontSize: "0.875rem",
    cursor: "pointer",
  },
  quotaList: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  quotaItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    border: "2px solid",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  quotaName: {
    fontSize: "1rem",
    fontWeight: "600",
    marginBottom: "0.25rem",
  },
  quotaStatus: {
    fontSize: "0.875rem",
    color: "#6b7280",
    marginBottom: "0.25rem",
  },
  quotaTime: {
    fontSize: "0.75rem",
    color: "#9ca3af",
  },
  quotaProgress: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
  },
  progressCircle: {
    position: "relative",
  },
  progressLabel: {
    fontSize: "0.75rem",
    color: "#6b7280",
  },
  activityList: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  activityItem: {
    display: "flex",
    gap: "1rem",
    alignItems: "flex-start",
  },
  activityIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  activityTime: {
    fontSize: "0.75rem",
    color: "#9ca3af",
    marginBottom: "0.25rem",
  },
  activityAction: {
    fontSize: "0.875rem",
    fontWeight: "600",
    marginBottom: "0.25rem",
  },
  activityLabel: {
    fontSize: "0.875rem",
    color: "#6b7280",
  },
  actionButtons: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1.5rem",
    marginTop: "1rem",
  },
  actionBtn: {
    flex: 1,
    padding: "0.75rem",
    border: "2px solid #e5e7eb",
    background: "white",
    borderRadius: "10px",
    fontWeight: "500",
    cursor: "pointer",
    minWidth: "10rem",
  },
  qrSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
  qrCode: {
    width: "150px",
    height: "150px",
    background: "white",
    border: "2px solid #e5e7eb",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  qrPlaceholder: {
    width: "120px",
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  qrGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridTemplateRows: "repeat(8, 1fr)",
    gap: "2px",
    width: "100%",
    height: "100%",
  },
  qrSquare: {
    width: "100%",
    height: "100%",
  },
  qrLabel: {
    fontSize: "0.875rem",
    color: "#6b7280",
  },
};
