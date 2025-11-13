import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { IoClipboard } from "react-icons/io5";

export default function Dashboard({ qrCode }) {
  const [dateTime, setDateTime] = useState("");
  const [ractivities, setRactivities] = useState([]);

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

  const BranchID = localStorage.getItem("user_ID");

  const SingleToken =
    localStorage.getItem("singleToken") || localStorage.getItem("User");

  const Org_ID = sessionStorage.getItem("user-recog");

  const GetMetricsCardData = async () => {
    try {
      SetLoadingState(true);
      const res = await axios.get(`${BaseUrl}/api/v1/dashboard/${BranchID}`, {
        headers: {
          Authorization: `Bearer ${SingleToken}`,
        },
      });
      // console.log("come back ooo", res)
      SetCardData(res?.data?.data);
      SetLoadingState(false);
    } catch (error) {
      SetLoadingState(false);
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  // Get role

  const Role =
    localStorage.getItem("OrgRole") || localStorage.getItem("UserRole");

  const OrgID = localStorage.getItem("Org_ID");

  // const

  const [activeQuota, setActiveQuota] = useState(null);

  const [quotas, Setquotas] = useState([]);

  const QueuePoints = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/api/v1/queue-points/${Org_ID}`);
      console.log(`These are the ${res?.data}`);
      Setquotas(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetMetricsCardData();
    QueuePoints();
  }, []);

  // quotas

  // const quotas = [
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
  // ];

  // Activities

  const Activities = async () => {
    try {
      const res = await axios.get(
        `${BaseUrl}/api/v1/recent-activity/${Org_ID}`,
        {
          headers: {
            Authorization: `Bearer ${SingleToken}`,
          },
        }
      );
      setRactivities(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Activities();
  }, []);

  const activities = [
    // {
    //   id: 1,
    //   time: "T-24R",
    //   action: "ADD",
    //   label: "Started at Phase 1",
    //   icon: CheckCircle,
    //   color: "#10b981",
    // },
    // {
    //   id: 2,
    //   time: "T-24D",
    //   action: "Info",
    //   label: "Sent 4th request",
    //   icon: AlertCircle,
    //   color: "#3b82f6",
    // },
    // {
    //   id: 3,
    //   time: "T-24-2",
    //   action: "Waiting",
    //   label: "Waiting at Phase 2",
    //   icon: Clock,
    //   color: "#8b5cf6",
    // },
    // {
    //   id: 4,
    //   time: "T-24-8",
    //   action: "Other",
    //   label: "Other Some Phase 1 ago",
    //   icon: FileText,
    //   color: "#f59e0b",
    // },
  ];

  const metricsValue = Object.keys(CardData);

  const progressValue = 1;

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
              iconName={"LuUsersRound"}
              cardData={CardData?.activeInQueue}
              text={metricsValue[0]}
            />

            <QueueCard
              cardValue={"12 min"}
              cardColor={"purple"}
              cardBgColor={"#ece2fb"}
              iconName={"FaRegClock"}
              text={metricsValue[1]}
              cardData={CardData?.averageWaitTime}
            />
            <QueueCard
              cardValue={"247"}
              cardColor={"green"}
              cardBgColor={"#e2f8e9"}
              iconName={"AiOutlineCheckCircle"}
              cardData={CardData?.servedToday}
              text={metricsValue[2]}
            />
          </>
        )}
      </div>

      {/* <progress value={progressValue % 10}></progress> */}
      <div style={styles.contentGrid}>
        <div style={styles.section1}>
          <div style={styles.sectionHeader}>
            <h3 style={styles.sectionTitle}>Quota Points Status</h3>
            <span style={styles.viewLink}>View</span>
          </div>
          <div
            // style={quotas.length <= 0 ? styles.quotaList : styles.quotaList2}

<<<<<<< HEAD
            style={quotas?.length === 0 ? styles.quotaList : styles.quotaList2}
=======
            // safe, clear
            style={
              (quotas?.length === 0 ? styles.quotaList : styles.quotaList2,
              { height: "90%" })
            }
>>>>>>> 4c346e71df9a1ea1609871b570fd447e31f7bdcd
          >
            {quotas.length <= 0 ? (
              <div
                style={{
                  // border: "2px solid red",
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
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                {quotas.map((quota) => {
                  const progress_Value = quota.totalCustomers / 100;
                  console.log(quota);
                  return (
                    <div
                      style={{
                        // border: "2px solid green",
                        height: "30%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: "#f9fafb",
                        borderRadius: ".5rem",
                        color: "",
                        padding: ".5rem",
                      }}
                    >
                      <div
                        style={{
                          width: "50%",
                          // border: "2px solid blue",
                          height: "100%",
                          display: "flex",
                          justifyContent: "space-around",
                          flexDirection: "column",
                        }}
                      >
                        <div>
                          <h4>{quota.name}</h4>
                        </div>
                        <p>Serving</p>
                        <p>T-247</p>
                      </div>

                      {/* Progress */}

                      <div
                        style={{
                          // border: "2px solid red",
                          width: "50%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        <div style={{ textAlign: "center" }}>
                          {/* Number of people in queue */}
                          <p>{quota.totalCustomers}</p>
                          {/* Status */}
                          <p>Waiting</p>
                        </div>
                        <progress
                          value={progress_Value}
                          style={{ width: "40%" }}
                        ></progress>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <h3 style={styles.sectionTitle}>Recent Activity</h3>
          </div>
          <div style={styles.activityList}>
            {ractivities.length <= 0 ? (
              <div
                style={{
                  // border: "2px solid red",
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
              <>
                {ractivities.slice(0, 5)?.map((act) => (
                  <div key={act.id} style={styles.activityItem}>
                    <div
                      style={{
                        ...styles.activityIcon,
                        // backgroundColor: act.color,
                      }}
                    >
                      {/* <act.icon size={20} color="white" /> */}
                    </div>
                    <div>
                      <p style={styles.activityLabel}>{act?.queueNumber}</p>
                      <p style={styles.activityAction}>{act?.action}</p>
                      <p style={styles.activityTime}>{act?.timeAgo}</p>
                    </div>
                  </div>
                ))}
              </>
            )}
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

        <div
          style={{
            // border: "2px solid red",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={styles.actionButtons}>
            <button style={styles.actionBtn}>Pause Queue</button>
            <button style={styles.actionBtn} onClick={() => nav("/queue_form")}>
              Add Manual Entry
            </button>
          </div>

          <img style={styles.QrCode} src={qrCode} alt="Qr code" />
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
    "@media (max-width: 768px)": {
      padding: "1rem",
    },
    "@media (max-width: 480px)": {
      padding: "0.5rem",
    },
  },
  header: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "1rem",
      alignItems: "flex-start",
    },
  },
  title: {
    fontSize: "1.75rem",
    fontWeight: "600",
    marginBottom: "0.25rem",
    "@media (max-width: 768px)": {
      fontSize: "1.5rem",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.25rem",
    },
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
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "1rem",
      alignItems: "flex-start",
      padding: "1rem",
    },
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
    "@media (max-width: 768px)": {
      width: "100%",
      justifyContent: "center",
    },
    "@media (max-width: 480px)": {
      fontSize: "1rem",
      padding: "0.75rem 1rem",
    },
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    marginBottom: "2rem",
    // border: "12px solid blue",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "1rem",
    },
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
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "1fr",
      gap: "1.5rem",
    },
  },
  section1: {
    background: "white",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    // border: "2px solid red",
    width: "100%",
    height: "80vh",
    minHeight: "fit-content",
    "@media (max-width: 1024px)": {
      height: "auto",
      minHeight: "400px",
    },
    "@media (max-width: 768px)": {
      padding: "1rem",
      height: "auto",
      minHeight: "350px",
    },
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
    "@media (max-width: 768px)": {
      padding: "1rem",
    },
  },

  QrCode: {
    width: "20%",
    height: "50%",
    "@media (max-width: 1024px)": {
      width: "25%",
      height: "auto",
    },
    "@media (max-width: 768px)": {
      width: "30%",
    },
    "@media (max-width: 480px)": {
      width: "40%",
    },
  },

  section: {
    backgroundColor: "white",
    padding: "1rem",
    "@media (max-width: 768px)": {
      padding: "1rem",
    },
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
    // border: "2px solid red",
  },
  sectionTitle: {
    fontSize: "1.125rem",
    fontWeight: "600",
    "@media (max-width: 480px)": {
      fontSize: "1rem",
    },
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
    // border: "2px solid red",
    height: "100%",
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  quotaList2: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    // border: "2px solid red",
    height: "50vh",
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
    // border: "2px solid red",
    height: "90%",
    // display: "flex",
    justifyContent: "center",
    "@media (max-width: 1024px)": {
      height: "auto",
      minHeight: "300px",
    },
  },
  activityItem: {
    display: "flex",
    gap: "1rem",
    alignItems: "flex-start",
    "@media (max-width: 480px)": {
      gap: "0.75rem",
    },
  },
  activityIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    "@media (max-width: 480px)": {
      width: "35px",
      height: "35px",
    },
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
    "@media (max-width: 768px)": {
      flexDirection: "column",
      width: "100%",
    },
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
    "@media (max-width: 768px)": {
      minWidth: "auto",
      width: "100%",
    },
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
