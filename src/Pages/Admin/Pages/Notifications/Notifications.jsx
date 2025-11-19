import React, { useEffect, useState } from "react";
import "./Notifications.css";
import axios from "axios";
import { IoMdStar } from "react-icons/io";
import CurrentDateTime from "../../../pagesbranch/CurrentDateTime";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa6";
import { CgDanger } from "react-icons/cg";

const NotificationsPage = () => {
  const [notdata, setNotdata] = useState([]);
  const [matrice, setMatrice] = useState();
  const [notifications, setNotifications] = useState([
    // {
    //   id: 1,
    //   type: "alert",
    //   title: "High Queue Volume Alert",
    //   description:
    //     "Victoria Island branch is experiencing high queue volume. Current wait time: 45 minutes. Consider redirecting customers to nearby branches.",
    //   priority: "High Priority",
    //   category: "Queue",
    //   time: "1h ago",
    //   read: false,
    //   starred: true,
    // },
    // {
    //   id: 2,
    //   type: "info",
    //   title: "New Customer Joined Queue",
    //   description:
    //     "Customer Adebayo Johnson has joined the queue for Account Opening service at Victoria Island branch.",
    //   priority: "Normal",
    //   category: "Queue",
    //   time: "2h ago",
    //   read: false,
    //   starred: true,
    // },
    // {
    //   id: 3,
    //   type: "warning",
    //   title: "Long Wait Time Detected",
    //   description:
    //     "Average wait time at Ikeja branch has exceeded 30 minutes. Current queue size: 23 customers.",
    //   priority: "Medium",
    //   category: "Performance",
    //   time: "3h ago",
    //   read: false,
    //   starred: true,
    // },
  ]);

  const totalNotifications = notifications.length;
  const unreadCount = notifications.filter((n) => !n.read).length;
  const highPriorityCount = notifications.filter(
    (n) => n.priority === "High Priority"
  ).length;

  // const markAllAsRead = () => {
  //   setNotifications(notifications.map((n) => ({ ...n, read: true })));
  // };

  const BaseURL = import.meta.env.VITE_API_BASE_URL;
  const Branchss = sessionStorage.getItem("user-recog");
  // console.log("dhcbgdfb dfsbbsdf", Branchss);
  const Role =
    localStorage.getItem("UserRole") || localStorage.getItem("OrgRole");

  console.log("wewewe", Role);

  // const thisRole = Role == "single" ? "br"

  const FetchNotifications = async () => {
    try {
      const res = await axios.get(
        `${BaseURL}/api/v1/notifications/${Branchss}?role=${Role}`
      );
      console.log(res?.data);
      setNotdata(res?.data?.data);
      setMatrice(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchNotifications();
  }, []);

  return (
    <>
      {/* <style>{`
        
      `}</style> */}

      <div className="notifications-container">
        <div className="header">
          <h1 className="header-title">Notifications</h1>
          <p className="header-date">
            <CurrentDateTime />
          </p>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon bell">
              <IoMdNotificationsOutline />
            </div>
            <div className="stat-info">
              <div className="stat-number">{matrice?.totalNotifications}</div>
              <div className="stat-label">Total Notifications</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon mail">
              <FaRegEnvelope />
            </div>
            <div className="stat-info">
              <div className="stat-number">{matrice?.data?.isRead}</div>
              <div className="stat-label">Unread</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon alert">
              <CgDanger />
            </div>
            <div className="stat-info">
              <div className="stat-number">{matrice?.highPriorityCount}</div>
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
          {notdata?.map((notification) => (
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
                  <h3 className="notification-title">{notification.message}</h3>
                  {notification.isRead && (
                    <span className="star-icon" style={{ background: "red" }}>
                      <IoMdStar />
                    </span>
                  )}
                </div>

                <p className="notification-description">
                  {notification.queueNumber}
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
                    <span>⏱</span> {notification.createdAt}
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
