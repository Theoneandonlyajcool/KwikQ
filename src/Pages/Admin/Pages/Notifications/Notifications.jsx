import React, { useState } from "react";
import "./Notifications.css";
import axios from "axios";

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

  const FetchNotifications = async () => {
    try {
      const res = await axios.get();
    } catch (error) {}
  };

  return (
    <>
      {/* <style>{`
        
      `}</style> */}

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
          <button className="mark-read-button">
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
