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

  const [queues, setQueues] = useState([]);
  const BranchID = localStorage.getItem("BranchID");
  const BaseURL = import.meta.env.VITE_API_BASE_URL;
  const [LoadingState, SetLoadingState] = useState(false);
  const ID = localStorage.getItem("user_ID");

  const GetAllQueues = async () => {
    try {
      SetLoadingState(true);
      const res = await axios.get(`${BaseURL}/api/v1/queues/${ID}`);
      toast.success(res?.data?.message);
      setQueues(res?.data?.data);
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

  return (
    <>
      <div className="queue-container">
        <ToastContainer />
        <div className="header">
          <div className="header-left">
            <h1>Queue Management</h1>
            <p className="date">{dateTime}</p>
          </div>
        </div>

        <div className="queue-info-section">
          <div className="queue-info-header">
            <h2>Queue Management</h2>
            <div className="button-group">
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
                onClick={() => nav(`/queue_form`)}
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

        {LoadingState ? (
          <div className="skeleton-container">
            <Skeleton
              style={{
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
                <div className="empty-state">
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
              <div className="queues-list">
                {queues.map((ele, idx) => {
                  return (
                    <div key={ele.id} className="queue-item">
                      <QueueCard
                        refresh={GetAllQueues}
                        data={ele}
                        key={ele.id}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

        <div className="quick-actions-responsive">
          <h3>Quick Actions</h3>
          <div className="actions-content-responsive">
            <div className="action-buttons-responsive">
              <button className="btn-action-responsive">Pause Queue</button>
              <button
                className="btn-action-responsive"
                onClick={() => nav(`/queue_form`)}
              >
                Add Manual Entry
              </button>
            </div>
            <div className="qr-section-responsive">
              <img className="qr-code-responsive" src={qrCode} alt="QR Code" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .queue-container {
          width: 100%;
          margin: 0 auto;
          padding: 2rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", sans-serif;
        }

        .header {
          margin-bottom: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .header-left h1 {
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .date {
          color: #6b7280;
          fontsize: 0.875rem;
        }

        .queue-info-section {
          margin-bottom: 2rem;
        }

        .queue-info-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .queue-info-header h2 {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .button-group {
          display: flex;
          gap: 0.5rem;
        }

        .btn-customize {
          padding: 0.5rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.3s ease;
        }

        .queue-subtitle {
          color: #6b7280;
          font-size: 1rem;
        }

        .filter-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          gap: 1rem;
        }

        .search-box {
          position: relative;
          flex: 1;
          max-width: 400px;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
        }

        .search-box input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.5rem;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
        }

        .filter-right {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .queue-count {
          font-weight: 500;
        }

        .dropdown-icon {
          font-size: 0.75rem;
        }

        .skeleton-container {
          width: 100%;
          min-height: 400px;
        }

        .empty_data {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          text-align: center;
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .queues-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .queue-item {
          margin: 0.5rem 0;
        }

        .quick-actions-responsive {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .quick-actions-responsive h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .actions-content-responsive {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .action-buttons-responsive {
          display: flex;
          gap: 1rem;
        }

        .btn-action-responsive {
          flex: 1;
          padding: 0.75rem;
          border: 2px solid #e5e7eb;
          background: white;
          border-radius: 10px;
          font-weight: 500;
          cursor: pointer;
          min-width: 10rem;
          transition: all 0.3s ease;
        }

        .btn-action-responsive:hover {
          background: #f9fafb;
        }

        .qr-section-responsive {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .qr-code-responsive {
          width: 120px;
          height: 120px;
          border-radius: 8px;
        }

        @media (max-width: 768px) {
          .queue-container {
            padding: 1rem;
          }

          .header {
            flex-direction: column;
            gap: 1rem;
          }

          .header-left h1 {
            font-size: 1.5rem;
          }

          .queue-info-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .queue-info-header h2 {
            font-size: 1.25rem;
          }

          .button-group {
            width: 100%;
            justify-content: space-between;
          }

          .btn-customize {
            flex: 1;
            font-size: 0.9rem;
            padding: 0.75rem 1rem;
          }

          .filter-section {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }

          .search-box {
            max-width: 100%;
          }

          .filter-right {
            align-self: flex-start;
          }

          .empty_data {
            padding: 2rem 1rem;
          }

          .empty_data p {
            font-size: 1.1rem;
          }

          .actions-content-responsive {
            flex-direction: column;
            gap: 1.5rem;
          }

          .action-buttons-responsive {
            flex-direction: column;
            width: 100%;
          }

          .btn-action-responsive {
            min-width: auto;
            width: 100%;
          }

          .qr-code-responsive {
            width: 100px;
            height: 100px;
          }
        }

        @media (max-width: 480px) {
          .queue-container {
            padding: 0.5rem;
          }

          .header-left h1 {
            font-size: 1.25rem;
          }

          .queue-info-header h2 {
            font-size: 1.1rem;
          }

          .queue-subtitle {
            font-size: 0.9rem;
          }

          .btn-customize {
            font-size: 0.8rem;
            padding: 0.6rem 0.8rem;
          }

          .empty_data {
            padding: 1.5rem 0.5rem;
          }

          .empty_data p {
            font-size: 1rem;
          }

          .quick-actions-responsive {
            padding: 1rem;
          }

          .qr-code-responsive {
            width: 80px;
            height: 80px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .queue-container {
            padding: 1.5rem;
          }

          .queue-info-header {
            gap: 2rem;
          }

          .qr-code-responsive {
            width: 100px;
            height: 100px;
          }
        }

        @media (min-width: 1200px) {
          .queue-container {
            max-width: 1400px;
          }
        }
      `}</style>
    </>
  );
};

export default QueueManagement;
