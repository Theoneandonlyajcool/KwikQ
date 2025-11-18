/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { SlWallet } from "react-icons/sl";
import QueueCard from "./DashCard";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { IoClipboard } from "react-icons/io5";
import { User } from "lucide-react";
import ExportQrcode from "../../components/QrCode/ExportQrcode";

export default function Dashboard({ qrCode }) {
  // Get time

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

    return () => clearInterval(interval);
  }, []);

  const nav = useNavigate();

  const BaseUrl = import.meta.env.VITE_API_BASE_URL;

  const [CardData, SetCardData] = useState({});
  const [LoadingState, SetLoadingState] = useState(false);
  const [recentActivities, setRecentActivities] = useState([]);
  const [activitiesLoading, setActivitiesLoading] = useState(false);
  const [qrImageUrl, setQrImageUrl] = useState(null);
  const [qrLoading, setQrLoading] = useState(false);
  const [queuePoints, setQueuePoints] = useState([]);
  const [queuePointsLoading, setQueuePointsLoading] = useState(false);
  const [totalWaiting, setTotalWaiting] = useState(0);

  console.log("Me i Look", CardData);

  const BranchID = localStorage.getItem("BranchID");

  const SingleToken =
    localStorage.getItem("singleToken") || localStorage.getItem("User");

  const token = localStorage.getItem("User");

  console.log(BranchID);

  const Org_ID = sessionStorage.getItem("user-recog");
  console.log(Org_ID);
  console.log(token);

  const GetMetricsCardData = async () => {
    try {
      SetLoadingState(true);
      const res = await axios.get(`${BaseUrl}/api/v1/dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log("the data of ....", res);
      SetCardData(res?.data?.data);
      SetLoadingState(false);
    } catch (error) {
      SetLoadingState(false);
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  const GetRecentActivity = async () => {
    try {
      setActivitiesLoading(true);
      const userId = localStorage.getItem("user_ID");
      const res = await axios.get(`${BaseUrl}/api/v1/recent-activity`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRecentActivities(res?.data?.data || []);
      setActivitiesLoading(false);
    } catch (error) {
      setActivitiesLoading(false);
      console.log("Error fetching recent activity:", error);
      toast.error("Failed to fetch recent activity");
    }
  };

  const GetQueuePoints = async () => {
    try {
      setQueuePointsLoading(true);
      const userId = Org_ID || "691247bc234b01d1bcf698e9";
      const res = await axios.get(`${BaseUrl}/api/v1/queue-points/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setQueuePoints(res?.data?.data || []);
      setTotalWaiting(res?.data?.totalWaiting || 0);
      setQueuePointsLoading(false);
    } catch (error) {
      setQueuePointsLoading(false);
      console.log("Error fetching queue points:", error);
      toast.error("Failed to fetch queue points");
    }
  };

  // Get role

  const Role =
    localStorage.getItem("OrgRole") || localStorage.getItem("UserRole");

  const OrgID = localStorage.getItem("Org_ID");
  console.log(OrgID);

  useEffect(() => {
    GetMetricsCardData();
    GetRecentActivity();
    GenerateQrCode();
    GetQueuePoints();
  }, []);

  // const [activeQuota, setActiveQuota] = useState(null)

  const quotas = [
    // {
    //   id: 1,
    //   name: "Quota Part-1",
    //   status: "Earning",
    //   time: "T-24R",
    //   progress: 65,
    // },
    // {
    //   id: 2,
    //   name: "Quota Part-2",
    //   status: "Earning",
    //   time: "T-24R",
    //   progress: 45,
    // },
    // {
    //   id: 3,
    //   name: "Quota Part-3",
    //   status: "Earning",
    //   time: "T-24R",
    //   progress: 80,
    // },
  ];

  const metricsValue = Object.keys(CardData);

  const getActivityIcon = (action) => {
    const actionLower = action.toLowerCase();

    if (actionLower.includes("served")) {
      return { icon: CheckCircle, color: "#10b981", bgColor: "#d1fae5" };
    } else if (actionLower.includes("joined")) {
      return { icon: "users", color: "#3b82f6", bgColor: "#dbeafe" };
    } else if (actionLower.includes("alert")) {
      return { icon: "alert", color: "#f59e0b", bgColor: "#fef3c7" };
    } else {
      return { icon: Clock, color: "#6b7280", bgColor: "#f3f4f6" };
    }
  };

  const formatTimeAgo = (timeAgo) => {
    if (!timeAgo) return "just now";

    // If timeAgo is already formatted string, return it
    if (typeof timeAgo === "string") {
      return timeAgo;
    }

    // If it's a timestamp, calculate time ago
    if (typeof timeAgo === "number") {
      const now = new Date();
      const activityTime = new Date(timeAgo);
      const diffMs = now - activityTime;
      const diffSecs = Math.floor(diffMs / 1000);
      const diffMins = Math.floor(diffSecs / 60);
      const diffHours = Math.floor(diffMins / 60);
      const diffDays = Math.floor(diffHours / 24);

      if (diffSecs < 60) return "just now";
      if (diffMins < 60) return `${diffMins} min ago`;
      if (diffHours < 24)
        return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
      return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    }

    return "just now";
  };

  const GenerateQrCode = async () => {
    try {
      setQrLoading(true);
      const userId = Org_ID || "691247bc234b01d1bcf698e9";
      const res = await axios.post(
        `https://kwikq-1.onrender.com/api/v1/qrcode/generate`,
        {
          individualId: userId,
          branchId: BranchID || userId,
        },
        {
          headers: {
            Authorization: `Bearer ${SingleToken}`,
          },
        }
      );
      setQrImageUrl(res?.data?.qrImageUrl);
      setQrLoading(false);
    } catch (error) {
      setQrLoading(false);
      console.log("Error fetching QR code:", error);
      toast.error("Failed to fetch QR code");
    }
  };

  const [ExportQrModal, SetExportQrModal] = useState(false);

  const The_QrCode = qrLoading
    ? undefined
    : qrImageUrl ||
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
        Org_ID || "https://kwikq-1.onrender.com"
      )}`;

  return (
    <div style={styles.dashboard}>
      <ToastContainer />
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

        /* Enhanced Media Queries for React Inline Styles */
        
        /* Mobile Devices (max-width: 768px) */
        @media (max-width: 768px) {
          [style*="padding: 2rem"] {
            padding: 1rem !important;
          }
          
          [style*="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))"] {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          /* This is the key change - stack content grid as single column */
          [style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          [style*="justify-content: space-between"][style*="margin-bottom: 1rem"] {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1rem !important;
          }
          
          [style*="padding: 1rem 0rem"][style*="align-items: center"] {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1rem !important;
            padding: 1rem !important;
          }
          
          [style*="display: flex"][style*="gap: 1rem"][style*="margin-bottom: 1.5rem"] {
            flex-direction: column !important;
            width: 100% !important;
          }
          
          [style*="width: 100%"][style*="display: flex"][style*="justify-content: space-between"] {
            flex-direction: column-reverse !important;
            gap: 1.5rem !important;
            align-items: center !important;
          }
          
          [style*="height: 80vh"] {
            height: auto !important;
            min-height: 400px !important;
          }
          
          [style*="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))"] {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          /* Font size adjustments for mobile */
          [style*="font-size: 1.75rem"] {
            font-size: 1.5rem !important;
          }
          
          [style*="font-size: 1.125rem"] {
            font-size: 1rem !important;
          }
          
          [style*="min-width: 10rem"] {
            min-width: 100% !important;
          }
        }

        /* Tablet Devices (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          [style*="padding: 2rem"] {
            padding: 1.5rem !important;
          }
          
          [style*="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
          
          /* Stack as single column on tablet as well */
          [style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          [style*="height: 80vh"] {
            height: auto !important;
            min-height: 500px !important;
          }
          
          [style*="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* Desktop Devices (min-width: 1025px) */
        @media (min-width: 1025px) {
          [style*="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))"] {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.5rem !important;
          }
          
          /* Only show as two columns on desktop */
          [style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
          
          [style*="height: 80vh"] {
            height: 80vh !important;
            min-height: fit-content !important;
          }
        }

        /* Small Mobile Devices (max-width: 480px) */
        @media (max-width: 480px) {
          [style*="padding: 2rem"] {
            padding: 0.75rem !important;
          }
          
          [style*="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))"] {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
          
          [style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          [style*="height: 80vh"] {
            height: auto !important;
            min-height: 350px !important;
            padding: 1rem !important;
          }
          
          [style*="padding: 1.5rem"][style*="border-radius: 12px"]:last-child {
            padding: 1rem !important;
          }
          
          [style*="font-size: 1.75rem"] {
            font-size: 1.25rem !important;
          }
          
          [style*="padding: 0.5rem 1.5rem"] {
            padding: 0.5rem 1rem !important;
            font-size: 1rem !important;
          }
          
          /* QR Code sizing for mobile */
          img[alt="QR Code"] {
            width: 120px !important;
            height: 120px !important;
          }
        }

        /* Medium Mobile Devices (481px - 768px) */
        @media (min-width: 481px) and (max-width: 768px) {
          [style*="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* Additional responsive adjustments for better mobile experience */
        @media (max-width: 768px) {
          /* Skeleton loader adjustments */
          .MuiSkeleton-root {
            width: 100% !important;
          }
          
          /* Stack spacing adjustments */
          .MuiStack-root {
            width: 100% !important;
          }
          
          /* Image sizing in header */
          [style*="justify-content: space-between"] img {
            width: 80px !important;
            height: auto !important;
          }
        }

        @media (max-width: 480px) {
          /* Further mobile optimizations */
          [style*="gap: 30px"] {
            gap: 1rem !important;
          }
          
          [style*="font-size: 1.2rem"] {
            font-size: 1rem !important;
          }
          
          [style*="padding: 0.75rem"] {
            padding: 0.5rem !important;
          }
          
          img[alt="QR Code"] {
            width: 100px !important;
            height: 100px !important;
            border: 5px solid white !important;
          }
        }
      `}</style>

      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>Dashboard Overview</h1>
          <p style={styles.date}>{dateTime}</p>
        </div>

        <img
          src="https://res.cloudinary.com/dp75oveuw/image/upload/v1761574433/139ffef3dc9912946e8efef958b713973a806975_ry5bwk.png"
          alt=""
        />
      </header>

      {localStorage.getItem("UserRole") == "individual" && (
        <div style={styles.trialBanner}>
          <h2>You're on a 7-Days Free Trial !</h2>

          <button
            style={styles.upgradeBtn}
            onClick={() => nav("/admin_landingpage")}
          >
            Subscribe now <SlWallet />
          </button>
        </div>
      )}

      <div style={styles.statsGrid}>
        {LoadingState ? (
          // Loading State of the cards
          <>
            <Stack spacing={1}>
              {/* For variant="text", adjust the height via font-size */}
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              {/* For other variants, adjust the size with `width` and `height` */}
              {/* <Skeleton variant="circular" width={40} height={40} /> */}
              <Skeleton variant="rectangular" width={310} height={60} />
              <Skeleton variant="rounded" width={310} height={60} />
            </Stack>

            <Stack spacing={1}>
              {/* For variant="text", adjust the height via font-size */}
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              {/* For other variants, adjust the size with `width` and `height` */}
              {/* <Skeleton variant="circular" width={40} height={40} /> */}
              <Skeleton variant="rectangular" width={310} height={60} />
              <Skeleton variant="rounded" width={310} height={60} />
            </Stack>

            <Stack spacing={1}>
              {/* For variant="text", adjust the height via font-size */}
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              {/* For other variants, adjust the size with `width` and `height` */}
              {/* <Skeleton variant="circular" width={40} height={40} /> */}
              <Skeleton variant="rectangular" width={310} height={60} />
              <Skeleton variant="rounded" width={310} height={60} />
            </Stack>
          </>
        ) : (
          <>
            <QueueCard
              cardValue={"32"}
              Data={""}
              cardColor={"blue"}
              cardBgColor={"#e5e7fb"}
              iconName={User}
              cardData={CardData.activeInQueue}
              text={metricsValue[0]}
            />

            <QueueCard
              cardValue={"12 min"}
              cardColor={"purple"}
              cardBgColor={"#ece2fb"}
              iconName={Clock}
              text={metricsValue[1]}
              cardData={CardData.servedToday}
            />
            <QueueCard
              cardValue={"247"}
              cardColor={"green"}
              cardBgColor={"#e2f8e9"}
              iconName={CheckCircle}
              text={metricsValue[2]}
              cardData={CardData.avgWaitTime}
            />

            {/* {CardData} */}
          </>
        )}
      </div>

      <div style={styles.contentGrid}>
        <div style={styles.section1}>
          <div style={styles.sectionHeader}>
            <h3 style={styles.sectionTitle}>Queue Points Status</h3>
            <span style={styles.liveIndicator}>Live</span>
          </div>
          <div
            style={
              queuePoints.length === 0 ? styles.quotaList : styles.quotaList2
            }
          >
            {queuePointsLoading ? (
              <Stack spacing={1} style={{ width: "100%" }}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="rounded" width="100%" height={80} />
                <Skeleton variant="rounded" width="100%" height={80} />
              </Stack>
            ) : queuePoints.length <= 0 ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <IoClipboard style={{ fontSize: "4rem" }} />
                <p style={{ marginTop: "1rem" }}>No data found</p>

                <p style={{ fontSize: "1.1rem" }}>
                  Queue points status records will be displayed here
                </p>
              </div>
            ) : (
              <div style={styles.queueGrid}>
                {queuePoints.map((queue) => (
                  <div key={queue._id} style={styles.queueCard}>
                    <div style={styles.queueHeader}>
                      <div style={styles.queueTitleContainer}>
                        <h4 style={styles.queueTitle}>{queue.name}</h4>
                        <div style={styles.statusIndicator}></div>
                      </div>
                      <p style={styles.servingLabel}>
                        Serving: T-{Math.floor(Math.random() * 1000)}
                      </p>
                    </div>

                    <div style={styles.queueFooter}>
                      <div style={styles.waitingInfo}>
                        <span style={styles.waitingCount}>
                          {queue.waitingCount}
                        </span>
                        <span style={styles.waitingLabel}>waiting</span>
                      </div>

                      <div style={styles.progressBarContainer}>
                        <div style={styles.progressBar}>
                          <div
                            style={{
                              ...styles.progressFill,
                              width: `${
                                (queue.waitingCount / queue.totalCustomers) *
                                100
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Recent Activity */}

        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h3 style={styles.sectionTitle}>Recent Activity</h3>
          </div>
          <div style={styles.activityListContainer}>
            {activitiesLoading ? (
              <Stack spacing={1} style={{ width: "100%" }}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="rounded" width="100%" height={60} />
                <Skeleton variant="rounded" width="100%" height={60} />
              </Stack>
            ) : recentActivities.length <= 0 ? (
              <div style={styles.emptyState}>
                <IoClipboard style={{ fontSize: "4rem" }} />
                <p style={{ marginTop: "1rem" }}>No data found</p>
                <p style={{ fontSize: "1.1rem" }}>
                  Recent activity records will be displayed here
                </p>
              </div>
            ) : (
              <div style={styles.activityItemsList}>
                {recentActivities.map((activity, index) => {
                  const activityInfo = getActivityIcon(activity.action);

                  return (
                    <div key={index} style={styles.activityItemNew}>
                      <div
                        style={{
                          ...styles.activityIconCircle,
                          backgroundColor: activityInfo.bgColor,
                        }}
                      >
                        {activityInfo.icon === CheckCircle ? (
                          <CheckCircle size={24} color={activityInfo.color} />
                        ) : activityInfo.icon === "users" ? (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={activityInfo.color}
                            strokeWidth="2"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        ) : activityInfo.icon === "alert" ? (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={activityInfo.color}
                            strokeWidth="2"
                          >
                            <circle cx="12" cy="13" r="1"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
                          </svg>
                        ) : (
                          <Clock size={24} color={activityInfo.color} />
                        )}
                      </div>

                      <div style={styles.activityContent}>
                        <div style={styles.activityTicket}>
                          {/* {activity.ticketNumber || activity.queueNumber} */}
                          {activity?.fullName}
                        </div>
                        <div style={styles.activityDescription}>
                          {activity.action}
                        </div>
                        <div style={styles.activityTimeAgo}>
                          {formatTimeAgo(activity.timeAgo)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={styles.QrSection}>
        <h3>Quick Actions</h3>

        {/* Qr code and button */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Buttons */}
          <div style={styles.actionButtons}>
            {/* <button style={styles.actionBtn}>Pause Queue</button> */}
            <button style={styles.actionBtn} onClick={() => nav("/queue_form")}>
              Add Manual Entry
            </button>
          </div>

          <img
            src={The_QrCode}
            alt="QR Code"
            onClick={() => SetExportQrModal(true)}
            style={{
              border: "10px solid white",
              borderRadius: "8px",
              padding: "5px",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          />
        </div>
      </div>

      {ExportQrModal && (
        <ExportQrcode close={SetExportQrModal} PropsQrCode={The_QrCode} />
      )}
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
    width: "100%",
    height: "80vh",
    minHeight: "fit-content",
  },

  QrSection: {
    background: "white",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  QrCode: {
    width: "20%",
    height: "50%",
  },

  section: {
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
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
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  quotaList2: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    // border: "2px solid red",
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
  activityListContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxHeight: "100%",
    overflowY: "auto",
  },

  emptyState: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "300px",
  },

  activityItemsList: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },

  activityItemNew: {
    display: "flex",
    gap: "1rem",
    alignItems: "flex-start",
    padding: "0.5rem 0",
  },

  activityIconCircle: {
    width: "48px",
    height: "48px",
    minWidth: "48px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  activityContent: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
    flex: 1,
  },

  activityTicket: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#1f2937",
  },

  activityDescription: {
    fontSize: "0.875rem",
    color: "#6b7280",
  },

  activityTimeAgo: {
    fontSize: "0.75rem",
    color: "#9ca3af",
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
  queueGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
    width: "100%",
  },

  queueCard: {
    display: "flex",
    flexDirection: "column",
    padding: "1.5rem",
    backgroundColor: "#f9fafb",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
  },

  queueHeader: {
    marginBottom: "1.5rem",
  },

  queueTitleContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "0.5rem",
  },

  queueTitle: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#1f2937",
    margin: 0,
  },

  statusIndicator: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "#10b981",
  },

  servingLabel: {
    fontSize: "0.875rem",
    color: "#6b7280",
    margin: "0.5rem 0 0 0",
  },

  queueFooter: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "1rem",
  },

  waitingInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.25rem",
    minWidth: "60px",
  },

  waitingCount: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#1f2937",
  },

  waitingLabel: {
    fontSize: "0.75rem",
    color: "#9ca3af",
  },

  progressBarContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },

  progressBar: {
    width: "100%",
    height: "8px",
    backgroundColor: "#d1d5db",
    borderRadius: "4px",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#1f2937",
    borderRadius: "4px",
    transition: "width 0.3s ease",
  },

  liveIndicator: {
    color: "#ef4444",
    fontSize: "0.875rem",
    fontWeight: "600",
  },
};
