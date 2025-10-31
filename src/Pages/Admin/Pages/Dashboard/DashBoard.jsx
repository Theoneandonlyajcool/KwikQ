import React, { useState } from "react";
import {
  Clock,
  CheckCircle,
  Calendar,
  Users,
  FileText,
  AlertCircle,
} from "lucide-react";

import { SlWallet } from "react-icons/sl";
import QueueCard from "./DashCard";

export default function Dashboard() {
  const [activeQuota, setActiveQuota] = useState(null);

  const quotas = [
    {
      id: 1,
      name: "Quota Part-1",
      status: "Earning",
      time: "T-24R",
      progress: 65,
    },
    {
      id: 2,
      name: "Quota Part-2",
      status: "Earning",
      time: "T-24R",
      progress: 45,
    },
    {
      id: 3,
      name: "Quota Part-3",
      status: "Earning",
      time: "T-24R",
      progress: 80,
    },
  ];

  const activities = [
    {
      id: 1,
      time: "T-24R",
      action: "ADD",
      label: "Started at Phase 1",
      icon: CheckCircle,
      color: "#10b981",
    },
    {
      id: 2,
      time: "T-24D",
      action: "Info",
      label: "Sent 4th request",
      icon: AlertCircle,
      color: "#3b82f6",
    },
    {
      id: 3,
      time: "T-24-2",
      action: "Waiting",
      label: "Waiting at Phase 2",
      icon: Clock,
      color: "#8b5cf6",
    },
    {
      id: 4,
      time: "T-24-8",
      action: "Other",
      label: "Other Some Phase 1 ago",
      icon: FileText,
      color: "#f59e0b",
    },
  ];

  return (
    <div style={styles.dashboard}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          background: #f8f9fa;
          color: #333;
        }
      `}</style>

      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>Dashboard Overview</h1>
          <p style={styles.date}>Fri 01 day, October 22, 2025</p>
        </div>

        <img
          src="https://res.cloudinary.com/dp75oveuw/image/upload/v1761574433/139ffef3dc9912946e8efef958b713973a806975_ry5bwk.png"
          alt=""
        />
      </header>

      <div style={styles.trialBanner}>
        <h2>You're on a 7-Days Free Trial !</h2>

        <button style={styles.upgradeBtn}>
          Subscribe now <SlWallet />
        </button>
      </div>

      <div style={styles.statsGrid}>
        {/* <div style={{ ...styles.statCard, ...styles.statCardPurple }}>
          <div style={{ ...styles.statIcon, ...styles.statIconPurple }}>
            <Users size={24} />
          </div>
          <p style={styles.statLabel}>Active in Queue</p>
          <h2 style={styles.statValue}>32</h2>
          <span style={{ ...styles.statChange, color: "#8b5cf6" }}>+6%</span>
        </div>

        <div style={{ ...styles.statCard, ...styles.statCardBlue }}>
          <div style={{ ...styles.statIcon, ...styles.statIconBlue }}>
            <Clock size={24} />
          </div>
          <p style={styles.statLabel}>Avg. Wait Time</p>
          <h2 style={styles.statValue}>12 min</h2>
          <span style={{ ...styles.statChange, color: "#ef4444" }}>-3%</span>
        </div>

        <div style={{ ...styles.statCard, ...styles.statCardGreen }}>
          <div style={{ ...styles.statIcon, ...styles.statIconGreen }}>
            <CheckCircle size={24} />
          </div>
          <p style={styles.statLabel}>Served Today</p>
          <h2 style={styles.statValue}>247</h2>
          <span style={{ ...styles.statChange, color: "#10b981" }}>+24%</span>
        </div> */}
        <QueueCard
          cardValue={"32"}
          cardColor={"blue"}
          cardBgColor={"aqua"}
          iconName={"LuUsersRound"}
        />
        <QueueCard
          cardValue={"12 min"}
          cardColor={"purple"}
          cardBgColor={"purple"}
          iconName={"FaRegClock"}
        />
        <QueueCard
          cardValue={"247"}
          cardColor={"green"}
          cardBgColor={"green"}
          iconName={"AiOutlineCheckCircle"}
        />
      </div>

      <div style={styles.contentGrid}>
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h3 style={styles.sectionTitle}>Quota Points Status</h3>
            <span style={styles.viewLink}>View</span>
          </div>
          <div style={styles.quotaList}>
            {quotas.map((quota) => (
              <div
                key={quota.id}
                style={{
                  ...styles.quotaItem,
                  borderColor: activeQuota === quota.id ? "#000" : "#f3f4f6",
                  background: activeQuota === quota.id ? "#fafafa" : "white",
                }}
                onClick={() => setActiveQuota(quota.id)}
              >
                <div>
                  <h4 style={styles.quotaName}>{quota.name}</h4>
                  <p style={styles.quotaStatus}>{quota.status}</p>
                  <p style={styles.quotaTime}>{quota.time}</p>
                </div>
                <div style={styles.quotaProgress}>
                  <div style={styles.progressCircle}>
                    <svg width="60" height="60" viewBox="0 0 60 60">
                      <circle
                        cx="30"
                        cy="30"
                        r="25"
                        fill="none"
                        stroke="#f0f0f0"
                        strokeWidth="6"
                      />
                      <circle
                        cx="30"
                        cy="30"
                        r="25"
                        fill="none"
                        stroke="#000"
                        strokeWidth="6"
                        strokeDasharray={`${quota.progress * 1.57} 157`}
                        strokeLinecap="round"
                        transform="rotate(-90 30 30)"
                      />
                    </svg>
                  </div>
                  <span style={styles.progressLabel}>Working</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h3 style={styles.sectionTitle}>Recent Activity</h3>
          </div>
          <div style={styles.activityList}>
            {activities.map((activity) => (
              <div key={activity.id} style={styles.activityItem}>
                <div
                  style={{
                    ...styles.activityIcon,
                    backgroundColor: activity.color,
                  }}
                >
                  <activity.icon size={20} color="white" />
                </div>
                <div>
                  <p style={styles.activityTime}>{activity.time}</p>
                  <p style={styles.activityAction}>{activity.action}</p>
                  <p style={styles.activityLabel}>{activity.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div style={styles.QrSection}>
        <h3 style={styles.sectionTitle}>Quick Actions</h3>
        <div style={styles.actionButtons}>
          <button style={styles.actionBtn}>Pause Queue</button>
          <button style={styles.actionBtn}>Add Manual Entry</button>
        </div>
        <div style={styles.qrSection}>
          <div style={styles.qrCode}>
            <div style={styles.qrPlaceholder}>
              <div style={styles.qrGrid}>
                {[...Array(64)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      ...styles.qrSquare,
                      background: i % 3 === 0 ? "transparent" : "#000",
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <p style={styles.qrLabel}>Scan QR Manual Entry</p>
        </div>
      </div> */}

      <div style={styles.QrSection}>
        <h3>Quick Actions</h3>

        {/* Qr code and button */}
        <div
          style={{
            border: "2px solid red",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Buttons */}
          <div style={styles.actionButtons}>
            <button style={styles.actionBtn}>Pause Queue</button>
            <button style={styles.actionBtn}>Add Manual Entry</button>
          </div>

          <img
            style={styles.QrCode}
            src="https://res.cloudinary.com/dp75oveuw/image/upload/v1761625620/etgKsr_axex0h.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  dashboard: {
    width: "100%",
    margin: "0 auto",
    padding: "2rem",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
    border: "2px solid red",
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
  section: {
    background: "white",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  },

  QrSection: {
    background: "white",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    border: "2px solid blue",
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
