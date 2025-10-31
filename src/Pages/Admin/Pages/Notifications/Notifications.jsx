import React, { useState } from "react";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "alert",
      title: "High Queue Volume Alert",
      description:
        "Victoria Island branch is experiencing high queue volume. Current wait time: 45 minutes. Consider redirecting customers to nearby branches.",
      priority: "High Priority",
      category: "Queue",
      time: "1h ago",
      read: false,
      starred: true,
    },
    {
      id: 2,
      type: "info",
      title: "New Customer Joined Queue",
      description:
        "Customer Adebayo Johnson has joined the queue for Account Opening service at Victoria Island branch.",
      priority: "Normal",
      category: "Queue",
      time: "2h ago",
      read: false,
      starred: true,
    },
    {
      id: 3,
      type: "warning",
      title: "Long Wait Time Detected",
      description:
        "Average wait time at Ikeja branch has exceeded 30 minutes. Current queue size: 23 customers.",
      priority: "Medium",
      category: "Performance",
      time: "3h ago",
      read: false,
      starred: true,
    },
  ]);

  const totalNotifications = notifications.length;
  const unreadCount = notifications.filter((n) => !n.read).length;
  const highPriorityCount = notifications.filter(
    (n) => n.priority === "High Priority"
  ).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          background-color: #f5f7fa;
        }

        .notifications-container {
        border:2px solid red;
        //   max-width: 800px;
          margin: 0 auto;
          padding: 24px;
          background-color: #f5f7fa;
          width:100%;
          
        }

        .header {
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 20px 24px;
          margin-bottom: 20px;
        }

        .header-title {
          font-size: 24px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 4px;
        }

        .header-date {
          font-size: 14px;
          color: #6b7280;
        }

        .stats-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 20px;
        }

        .stat-card {
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .stat-icon.bell {
          background-color: #dbeafe;
          color: #2563eb;
        }

        .stat-icon.mail {
          background-color: #fed7aa;
          color: #ea580c;
        }

        .stat-icon.alert {
          background-color: #fecaca;
          color: #dc2626;
        }

        .stat-info {
          flex: 1;
        }

        .stat-number {
          font-size: 28px;
          font-weight: 700;
          color: #111827;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 13px;
          color: #6b7280;
        }

        .filters-container {
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .filters-left {
          display: flex;
          gap: 12px;
        }

        .filter-button {
          padding: 8px 16px;
          background-color: #f3f4f6;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          font-size: 14px;
          color: #374151;
          cursor: pointer;
          transition: all 0.2s;
        }

        .filter-button:hover {
          background-color: #e5e7eb;
        }

        .mark-read-button {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          font-size: 14px;
          color: #374151;
          cursor: pointer;
          transition: all 0.2s;
        }

        .mark-read-button:hover {
          background-color: #f9fafb;
        }

        .notifications-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .notification-card {
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 20px;
          display: flex;
          gap: 16px;
          position: relative;
        }

        .notification-card.alert-type {
          border-left: 4px solid #dc2626;
        }

        .notification-card.info-type {
          border-left: 4px solid #2563eb;
        }

        .notification-card.warning-type {
          border-left: 4px solid #f59e0b;
        }

        .notification-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .notification-icon.alert {
          background-color: #fee2e2;
          color: #dc2626;
        }

        .notification-icon.info {
          background-color: #dbeafe;
          color: #2563eb;
        }

        .notification-icon.warning {
          background-color: #fef3c7;
          color: #f59e0b;
        }

        .notification-content {
          flex: 1;
        }

        .notification-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .notification-title {
          font-size: 16px;
          font-weight: 600;
          color: #111827;
        }

        .star-icon {
          color: #f59e0b;
          font-size: 14px;
        }

        .notification-description {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .notification-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .badge {
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
        }

        .badge.high-priority {
          background-color: #fee2e2;
          color: #991b1b;
        }

        .badge.normal {
          background-color: #dbeafe;
          color: #1e40af;
        }

        .badge.medium {
          background-color: #fef3c7;
          color: #92400e;
        }

        .badge.category {
          background-color: #f3f4f6;
          color: #374151;
        }

        .notification-time {
          font-size: 13px;
          color: #9ca3af;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .menu-button {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          cursor: pointer;
          color: #9ca3af;
          font-size: 20px;
          padding: 4px;
        }

        .menu-button:hover {
          color: #6b7280;
        }

        @media (max-width: 640px) {
          .stats-container {
            grid-template-columns: 1fr;
          }

          .filters-container {
            flex-direction: column;
            gap: 12px;
            align-items: stretch;
          }

          .filters-left {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="notifications-container">
        <div className="header">
          <h1 className="header-title">Notifications</h1>
          <p className="header-date">Tuesday, October 21, 2025</p>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon bell">🔔</div>
            <div className="stat-info">
              <div className="stat-number">{totalNotifications}</div>
              <div className="stat-label">Total Notifications</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon mail">📧</div>
            <div className="stat-info">
              <div className="stat-number">{unreadCount}</div>
              <div className="stat-label">Unread</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon alert">⚠️</div>
            <div className="stat-info">
              <div className="stat-number">{highPriorityCount}</div>
              <div className="stat-label">High Priority</div>
            </div>
          </div>
        </div>

        <div className="filters-container">
          <div className="filters-left">
            <button className="filter-button">All Categories</button>
            <button className="filter-button">All Priorities</button>
          </div>
          <button className="mark-read-button" onClick={markAllAsRead}>
            <span>✓</span> Mark All as Read
          </button>
        </div>

        <div className="notifications-list">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`notification-card ${notification.type}-type`}
            >
              <div className={`notification-icon ${notification.type}`}>
                {notification.type === "alert" && "⚠️"}
                {notification.type === "info" && "ℹ️"}
                {notification.type === "warning" && "⏰"}
              </div>

              <div className="notification-content">
                <div className="notification-header">
                  <h3 className="notification-title">{notification.title}</h3>
                  {notification.starred && <span className="star-icon">★</span>}
                </div>

                <p className="notification-description">
                  {notification.description}
                </p>

                <div className="notification-meta">
                  <span
                    className={`badge ${
                      notification.priority === "High Priority"
                        ? "high-priority"
                        : notification.priority === "Medium"
                        ? "medium"
                        : "normal"
                    }`}
                  >
                    {notification.priority}
                  </span>
                  <span className="badge category">
                    {notification.category}
                  </span>
                  <span className="notification-time">
                    <span>⏱</span> {notification.time}
                  </span>
                </div>
              </div>

              <button className="menu-button">⋮</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NotificationsPage;
