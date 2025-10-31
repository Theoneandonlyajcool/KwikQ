import React, { useState, useEffect } from "react";

const QueueHistory = () => {
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedBranch, setSelectedBranch] = useState("All Branches");

  useEffect(() => {
    // Inject CSS styles
    const style = document.createElement("style");
    style.id = "queue-history-styles";
    style.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .queue-history-container {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        padding: 30px;
        background-color: #f8f9fa;
        min-height: 100vh;
      }

      .header {
        margin-bottom: 30px;
      }

      .header h1 {
        font-size: 28px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 5px;
      }

      .date {
        color: #7f8c8d;
        font-size: 14px;
      }

      .stats-container {
        display: flex;
        gap: 20px;
        margin-bottom: 30px;
      }

      .stat-card {
        background: white;
        border-radius: 8px;
        padding: 25px;
        flex: 1;
        box-shadow: 0 2px 4px rgba(0,0,0,0.08);
        text-align: center;
      }

      .stat-icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 0 auto 15px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .stat-icon.blue {
        background-color: #e3f2fd;
        color: #2196f3;
      }

      .stat-icon.orange {
        background-color: #fff3e0;
        color: #ff9800;
      }

      .stat-icon.red {
        background-color: #ffebee;
        color: #f44336;
      }

      .stat-value {
        font-size: 32px;
        font-weight: 700;
        color: #2c3e50;
        margin-bottom: 5px;
      }

      .stat-label {
        font-size: 14px;
        color: #7f8c8d;
      }

      .filters {
        display: flex;
        gap: 15px;
        margin-bottom: 20px;
      }

      .filter-select {
        padding: 10px 15px;
        border: 1px solid #ddd;
        border-radius: 6px;
        background: white;
        font-size: 14px;
        cursor: pointer;
        outline: none;
        transition: border-color 0.2s;
      }

      .filter-select:hover {
        border-color: #2196f3;
      }

      .table-container {
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.08);
        overflow: hidden;
      }

      .queue-table {
        width: 100%;
        border-collapse: collapse;
      }

      .queue-table thead {
        background-color: #f8f9fa;
      }

      .queue-table th {
        padding: 15px;
        text-align: left;
        font-weight: 600;
        font-size: 13px;
        color: #5a6c7d;
        text-transform: uppercase;
        border-bottom: 2px solid #e9ecef;
      }

      .queue-table td {
        padding: 15px;
        border-bottom: 1px solid #e9ecef;
        font-size: 14px;
        color: #2c3e50;
      }

      .queue-table tbody tr:hover {
        background-color: #f8f9fa;
      }

      .queue-id {
        font-weight: 600;
        color: #2196f3;
      }

      .customer-info {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }

      .customer-name {
        font-weight: 500;
      }

      .customer-phone {
        font-size: 12px;
        color: #7f8c8d;
      }

      .datetime-info {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }

      .date-created {
        font-weight: 500;
      }

      .time-arrival {
        font-size: 12px;
        color: #7f8c8d;
      }

      .status-badge {
        display: inline-block;
        padding: 5px 12px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 600;
      }

      .status-completed {
        background-color: #d4edda;
        color: #155724;
      }

      .status-cancelled {
        background-color: #f8d7da;
        color: #721c24;
      }

      .status-noshow {
        background-color: #e2e3e5;
        color: #383d41;
      }

      @media (max-width: 768px) {
        .stats-container {
          flex-direction: column;
        }
        
        .table-container {
          overflow-x: auto;
        }
      }
    `;

    if (!document.getElementById("queue-history-styles")) {
      document.head.appendChild(style);
    }

    return () => {
      const existingStyle = document.getElementById("queue-history-styles");
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  const queueData = [
    {
      id: "Q-0001",
      customer: { name: "Jonathan Smith", phone: "O-2000-123-456" },
      service: "Premium Saving",
      branch: "Hudson Point",
      dateTime: { created: "02/12/19", arrival: "01:31 AM" },
      waitTime: "8 min",
      serviceTime: "7 min",
      status: "Completed",
      rating: "---",
    },
    {
      id: "Q-0002",
      customer: { name: "Tessa Benson", phone: "O-2000-123-456" },
      service: "Loan Application Inquiry",
      branch: "Lincoln Plaza II",
      dateTime: { created: "02/12/19", arrival: "01:29 PM" },
      waitTime: "10 min",
      serviceTime: "---",
      status: "Cancelled",
      rating: "---",
    },
    {
      id: "Q-0003",
      customer: { name: "Elbert Hawkins", phone: "O-2000-123-456" },
      service: "Fund Transfer",
      branch: "Hudson Point",
      dateTime: { created: "02/12/19", arrival: "01:26 PM" },
      waitTime: "12 min",
      serviceTime: "10 min",
      status: "Completed",
      rating: "---",
    },
    {
      id: "Q-0004",
      customer: { name: "Nigel Cox", phone: "O-2000-123-456" },
      service: "Account Statement Inquiry",
      branch: "Sunbow",
      dateTime: { created: "02/12/19", arrival: "01:23 PM" },
      waitTime: "30 min",
      serviceTime: "10 min",
      status: "Completed",
      rating: "---",
    },
    {
      id: "Q-0005",
      customer: { name: "Kristopher Holley", phone: "O-2000-123-456" },
      service: "Account Inquiry",
      branch: "Lincoln Plaza II",
      dateTime: { created: "02/12/19", arrival: "01:17 PM" },
      waitTime: "8 min",
      serviceTime: "10 min",
      status: "Completed",
      rating: "---",
    },
    {
      id: "Q-0006",
      customer: { name: "Claire Obedoza", phone: "O-2000-123-456" },
      service: "Complaint Resolution Inquiry",
      branch: "High",
      dateTime: { created: "02/12/19", arrival: "01:17 PM" },
      waitTime: "45 min",
      serviceTime: "---",
      status: "No Show",
      rating: "---",
    },
    {
      id: "Q-0007",
      customer: { name: "Lyla Flores", phone: "O-2000-123-456" },
      service: "Account Opening Inquiry",
      branch: "Sunbow",
      dateTime: { created: "02/12/19", arrival: "01:14 PM" },
      waitTime: "8 min",
      serviceTime: "10 min",
      status: "Completed",
      rating: "---",
    },
    {
      id: "Q-0008",
      customer: { name: "Ferris Evans", phone: "O-2000-123-456" },
      service: "Account Opening",
      branch: "Lincoln Plaza II",
      dateTime: { created: "02/12/19", arrival: "01:14 PM" },
      waitTime: "35 min",
      serviceTime: "10 min",
      status: "Completed",
      rating: "---",
    },
    {
      id: "Q-0009",
      customer: { name: "Kent Adeyemi", phone: "O-2000-123-456" },
      service: "Withdrawal Transfer",
      branch: "Hudson Point",
      dateTime: { created: "02/12/19", arrival: "01:13 PM" },
      waitTime: "5 min",
      serviceTime: "7 min",
      status: "Completed",
      rating: "---",
    },
  ];

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "status-completed";
      case "cancelled":
        return "status-cancelled";
      case "no show":
        return "status-noshow";
      default:
        return "";
    }
  };

  return (
    <div className="queue-history-container">
      <div className="header">
        <h1>Queue History</h1>
        <p className="date">Tuesday, Oct 06th, 11, 2019</p>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="stat-value">150</div>
          <div className="stat-label">Completed Tickets</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 6v6l4 2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="stat-value">12 min</div>
          <div className="stat-label">Avg Wait Time</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon red">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M15 9l-6 6M9 9l6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="stat-value">5</div>
          <div className="stat-label">Cancelled/No Show</div>
        </div>
      </div>

      <div className="filters">
        <select
          className="filter-select"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option>All Status</option>
          <option>Completed</option>
          <option>Cancelled</option>
          <option>No Show</option>
        </select>

        <select
          className="filter-select"
          value={selectedBranch}
          onChange={(e) => setSelectedBranch(e.target.value)}
        >
          <option>All Branches</option>
          <option>Hudson Point</option>
          <option>Lincoln Plaza II</option>
          <option>Sunbow</option>
        </select>
      </div>

      <div className="table-container">
        <table className="queue-table">
          <thead>
            <tr>
              <th>Queue ID</th>
              <th>Customer</th>
              <th>Service</th>
              <th>Branch</th>
              <th>Date & Time</th>
              <th>Wait Time</th>
              <th>Service Time</th>
              <th>Status</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {queueData.map((item) => (
              <tr key={item.id}>
                <td className="queue-id">{item.id}</td>
                <td>
                  <div className="customer-info">
                    <div className="customer-name">{item.customer.name}</div>
                    <div className="customer-phone">{item.customer.phone}</div>
                  </div>
                </td>
                <td>{item.service}</td>
                <td>{item.branch}</td>
                <td>
                  <div className="datetime-info">
                    <div className="date-created">{item.dateTime.created}</div>
                    <div className="time-arrival">{item.dateTime.arrival}</div>
                  </div>
                </td>
                <td>{item.waitTime}</td>
                <td>{item.serviceTime}</td>
                <td>
                  <span
                    className={`status-badge ${getStatusClass(item.status)}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>{item.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QueueHistory;
