import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  History,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import DashBoard from "../Admin/Pages/Dashboard/DashBoard";
import QueueManagement from "../Admin/Pages/Queue/QueueManagement";
import AnalyticsDashboard from "../Admin/Pages/Analytics/Analytics";
import QueueHistory from "../Admin/Pages/History/History";
import NotificationsPage from "../Admin/Pages/Notifications/Notifications";

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("analytics");

  const OrgDetials = JSON.parse(localStorage.getItem("OrgInfo"));
  console.log(OrgDetials);

  // Hide scrollbar CSS
  React.useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .sidebar-nav::-webkit-scrollbar {
        display: none;
      }
      .main-content::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.append(style);
    return () => style.remove();
  }, []);

  const menuItems = [
    {
      key: "dashboard",
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
    },
    { key: "queue", icon: <Users size={20} />, label: "Queue Management" },
    { key: "analytics", icon: <BarChart3 size={20} />, label: "Analytics" },
    { key: "history", icon: <History size={20} />, label: "History" },
    { key: "notifications", icon: <Bell size={20} />, label: "Notifications" },
    { key: "settings", icon: <Settings size={20} />, label: "Settings" },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return <DashBoard />;
      case "queue":
        return <QueueManagement />;
      case "analytics":
        return <AnalyticsDashboard />;
      case "history":
        return <QueueHistory />;
      case "notifications":
        return <NotificationsPage />;
      case "settings":
        return <div>Seetings</div>;
      default:
        return (
          <div style={styles.contentSection}>
            <h1 style={styles.contentTitle}>Select a menu item</h1>
          </div>
        );
    }
  };

  return (
    <div style={styles.dashboard}>
      <aside style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <h2 style={styles.logo}>KwikQ</h2>
          <p style={styles.subtitle}>Admin Panel</p>
        </div>

        <nav style={styles.sidebarNav} className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.key}
              style={{
                ...styles.navItem,
                ...(activeMenu === item.key ? styles.navItemActive : {}),
              }}
              onClick={() => setActiveMenu(item.key)}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div style={styles.sidebarFooter}>
          <div style={styles.userProfile}>
            <div style={styles.userAvatar}>{OrgDetials.businessName[0]}</div>
            <div>
              <p style={styles.userName}>{OrgDetials.businessName}</p>
              <p style={styles.userEmail}>{OrgDetials.email}</p>
            </div>
          </div>
          <button style={styles.logoutBtn}>
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main style={styles.mainContent} className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

const styles = {
  dashboard: {
    display: "flex",
    height: "100vh",
    background: "#f5f7fa",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
  },
  sidebar: {
    width: "280px",
    background: "#1a1d2e",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    boxShadow: "2px 0 10px rgba(0, 0, 0, 0.1)",
  },
  sidebarHeader: {
    padding: "24px 20px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "2px",
    letterSpacing: "0.3px",
    margin: 0,
  },
  subtitle: {
    fontSize: "12px",
    color: "#64748b",
    fontWeight: "400",
    margin: "2px 0 0 0",
  },
  sidebarNav: {
    flex: 1,
    padding: "12px 0",
    overflowY: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  },
  navItem: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 20px",
    background: "none",
    border: "none",
    borderLeft: "3px solid transparent",
    color: "#94a3b8",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontSize: "14px",
    fontWeight: "500",
    textAlign: "left",
  },
  navItemActive: {
    background: "#3b4eed",
    color: "#fff",
    borderLeft: "3px solid #3b4eed",
  },
  sidebarFooter: {
    padding: "16px 20px",
    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
  },
  userProfile: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "12px",
  },
  userAvatar: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    background: "#3b4eed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    fontSize: "13px",
  },
  userName: {
    fontSize: "13px",
    fontWeight: "600",
    margin: "0 0 2px 0",
  },
  userEmail: {
    fontSize: "11px",
    color: "#64748b",
    margin: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  logoutBtn: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "10px 12px",
    background: "transparent",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "6px",
    color: "#94a3b8",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontSize: "13px",
    fontWeight: "500",
  },
  mainContent: {
    flex: 1,
    // padding: "40px",
    overflowY: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    backgroundColor: "#f5f7fa",
  },
  contentSection: {
    maxWidth: "1400px",
  },
  contentTitle: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#1a1f36",
    marginBottom: "30px",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    marginBottom: "40px",
  },
  statCard: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  statLabel: {
    fontSize: "14px",
    color: "#8a94a6",
    fontWeight: "600",
    marginBottom: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    margin: "0 0 12px 0",
  },
  statNumber: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#1a1f36",
    margin: "0 0 8px 0",
  },
  statChange: {
    fontSize: "13px",
    fontWeight: "500",
  },
  tableContainer: {
    background: "#fff",
    borderRadius: "12px",
    padding: "25px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeader: {
    textAlign: "left",
    padding: "15px",
    fontSize: "13px",
    fontWeight: "600",
    color: "#8a94a6",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    borderBottom: "2px solid #f5f7fa",
  },
  tableCell: {
    padding: "18px 15px",
    borderBottom: "1px solid #f5f7fa",
    color: "#1a1f36",
  },
  badgeActive: {
    display: "inline-block",
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
    background: "#d1fae5",
    color: "#10b981",
  },
  badgePaused: {
    display: "inline-block",
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
    background: "#fee2e2",
    color: "#ef4444",
  },
  actionBtn: {
    padding: "8px 16px",
    background: "#4263eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "13px",
    fontWeight: "500",
    cursor: "pointer",
  },
  analyticsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "25px",
  },
  chartPlaceholder: {
    background: "#fff",
    borderRadius: "12px",
    padding: "25px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  },
  chartTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1a1f36",
    margin: "0 0 20px 0",
  },
  chartBox: {
    height: "300px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    padding: "20px",
  },
  chartText: {
    fontSize: "16px",
    fontWeight: "500",
    margin: "0 0 10px 0",
  },
  chartDesc: {
    fontSize: "13px",
    opacity: 0.9,
    textAlign: "center",
    maxWidth: "80%",
    margin: 0,
  },
  historyList: {
    background: "#fff",
    borderRadius: "12px",
    padding: "25px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  },
  historyItem: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  historyIcon: {
    width: "48px",
    height: "48px",
    background: "#f5f7fa",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
  },
  historyTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#1a1f36",
    margin: "0 0 6px 0",
  },
  historyText: {
    fontSize: "14px",
    color: "#8a94a6",
    margin: "0 0 8px 0",
  },
  historyTime: {
    fontSize: "12px",
    color: "#b0b7c3",
  },
  notificationsContainer: {
    background: "#fff",
    borderRadius: "12px",
    padding: "25px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  },
  notificationItem: {
    display: "flex",
    gap: "15px",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "15px",
    borderLeft: "3px solid transparent",
  },
  notificationUnread: {
    display: "flex",
    gap: "15px",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "15px",
    background: "#eff6ff",
    borderLeft: "3px solid #4263eb",
  },
  notificationTitle: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#1a1f36",
    margin: "0 0 6px 0",
  },
  notificationText: {
    fontSize: "14px",
    color: "#8a94a6",
    margin: "0 0 8px 0",
  },
  notificationTime: {
    fontSize: "12px",
    color: "#b0b7c3",
  },
  settingsContainer: {
    background: "#fff",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    maxWidth: "700px",
  },
  settingsGroup: {
    marginBottom: "35px",
  },
  settingsGroupTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1a1f36",
    margin: "0 0 20px 0",
    paddingBottom: "12px",
    borderBottom: "2px solid #f5f7fa",
  },
  settingItem: {
    marginBottom: "20px",
  },
  settingLabel: {
    display: "block",
    fontSize: "14px",
    fontWeight: "600",
    color: "#1a1f36",
    marginBottom: "8px",
  },
  settingInput: {
    width: "100%",
    padding: "12px 15px",
    border: "1px solid #e1e8ed",
    borderRadius: "8px",
    fontSize: "14px",
  },
  checkbox: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
  },
  checkboxLabel: {
    fontSize: "14px",
    color: "#8a94a6",
  },
  saveBtn: {
    padding: "12px 30px",
    background: "#4263eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default AdminDashboard;
