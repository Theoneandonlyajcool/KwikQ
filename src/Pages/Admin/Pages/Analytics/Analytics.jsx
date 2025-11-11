import axios from "axios";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { IoClipboard } from "react-icons/io5";

import "./Analytics.css";

const AnalyticsDashboard = () => {
  const [dateTime, setDateTime] = useState("");
  const [apiParams, setApiParams] = useState({
    branchId: "",
    startDate: "2025-10-01",
    endDate: "2025-10-11",
  });
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Try sessionStorage first (plain string)
      let branchId = sessionStorage.getItem("user-recog");

      // If not in sessionStorage, try localStorage with env variable (JSON string)
      if (!branchId && import.meta.env.VITE_USERID) {
        try {
          const stored = localStorage.getItem(import.meta.env.VITE_USERID);
          if (stored) {
            branchId = JSON.parse(stored);
          }
        } catch (e) {
          console.error("[v0] Error parsing branchId from localStorage:", e);
        }
      }

      if (branchId) {
        setApiParams((prev) => ({
          ...prev,
          branchId: branchId,
        }));
        console.log("[v0] Branch ID loaded:", branchId);
      } else {
        console.warn(
          "[v0] No branchId found in sessionStorage or localStorage"
        );
      }
    }
  }, []);

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

  const FetchAnalytics = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("User");

      if (!token) {
        setError("Authentication token not found. Please log in again.");
        toast.error("Please log in first");
        setLoading(false);
        return;
      }

      const { branchId, startDate, endDate } = apiParams;

      if (!branchId) {
        setError("Branch ID not found. Please log in again.");
        toast.error("Branch ID is missing");
        setLoading(false);
        return;
      }

      // ✅ FIXED: Added backticks for template literal
      const apiUrl = `https://kwikq-1.onrender.com/api/v1/analytics/${branchId}?startDate=${startDate}&endDate=${endDate}`;

      console.log("[v0] Calling API with URL:", apiUrl);
      console.log("[v0] Token:", token);
      console.log("[v0] Branch ID:", branchId);

      const response = await axios.get(apiUrl, {
        headers: {
          // ✅ FIXED: Added backticks for template literal
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("[v0] Analytics API Response:", response.data);

      if (response.data.data) {
        setAnalyticsData(response.data.data);
        toast.success("Analytics loaded successfully");
      }

      setLoading(false);
    } catch (error) {
      console.error("[v0] Error fetching analytics:", error.message);
      console.error("[v0] Error details:", error.response?.data);
      setError(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch analytics"
      );
      toast.error(error.response?.data?.message || "Error loading analytics");
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchAnalytics();
  }, [apiParams]);

  const handleParamChange = (e) => {
    const { name, value } = e.target;
    setApiParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const steadyCustomerData = analyticsData?.weeklyCustomerVolume || [];

  const peakHoursData =
    analyticsData?.peakHours?.map((peak) => ({
      hour: `${peak.hour}:00`,
      customers: peak.count,
    })) || [];

  const serviceTypeData =
    analyticsData?.serviceTypesDistribution?.map((service, index) => {
      const colors = ["#22D3EE", "#3B82F6", "#06B6D4", "#A3E635", "#F97316"];
      return {
        name: `${service.serviceType} ${service.count}`,
        value: service.count,
        color: colors[index % colors.length],
      };
    }) || [];

  // TODO: Replace with actual wait time data from analyticsData
  const waitTimeTrendData = analyticsData?.waitTimeTrend || [
    { time: "9:00", wait: 5 },
    { time: "10:00", wait: 7 },
    { time: "11:00", wait: 12 },
    { time: "12:00", wait: 15 },
    { time: "1:00", wait: 10 },
    { time: "2:00", wait: 8 },
    { time: "3:00", wait: 6 },
    { time: "4:00", wait: 4 },
  ];

  return (
    <>
      <div className="dashboard-container">
        <ToastContainer />

        {error && (
          <div
            style={{
              padding: "1rem",
              margin: "1rem",
              backgroundColor: "#fee2e2",
              border: "1px solid #fca5a5",
              borderRadius: "0.5rem",
              color: "#991b1b",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Error: {error}</span>
            <button
              onClick={FetchAnalytics}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#dc2626",
                color: "white",
                border: "none",
                borderRadius: "0.375rem",
                cursor: "pointer",
              }}
            >
              Retry
            </button>
          </div>
        )}

        {loading ? (
          <div
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                border: "4px solid #f3f3f3",
                borderTop: "4px solid #1466FF",
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
              }}
            />
            <p style={{ marginTop: "1rem", color: "#666" }}>
              Loading analytics...
            </p>
            <style>
              {`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}
            </style>
          </div>
        ) : (
          <>
            <div
              style={{
                padding: "1rem",
                backgroundColor: "#f9fafb",
                borderBottom: "1px solid #e5e7eb",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  flexWrap: "wrap",
                  alignItems: "flex-end",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <label
                    htmlFor="branchId"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#5a6c7d",
                    }}
                  >
                    Branch ID
                  </label>
                  <input
                    type="text"
                    id="branchId"
                    name="branchId"
                    value={apiParams.branchId}
                    onChange={handleParamChange}
                    style={{
                      width: "200px",
                      padding: "0.5rem",
                      border: "1px solid #d1d5db",
                      borderRadius: "0.375rem",
                      fontSize: "14px",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <label
                    htmlFor="startDate"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#5a6c7d",
                    }}
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={apiParams.startDate}
                    onChange={handleParamChange}
                    style={{
                      width: "150px",
                      padding: "0.5rem",
                      border: "1px solid #d1d5db",
                      borderRadius: "0.375rem",
                      fontSize: "14px",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <label
                    htmlFor="endDate"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#5a6c7d",
                    }}
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={apiParams.endDate}
                    onChange={handleParamChange}
                    style={{
                      width: "150px",
                      padding: "0.5rem",
                      border: "1px solid #d1d5db",
                      borderRadius: "0.375rem",
                      fontSize: "14px",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="header">
              <div className="header-top">
                <h1 className="header-title">Analytics</h1>
                <span className="header-date">{dateTime}</span>
              </div>
              <h2 className="header-subtitle">Analytics & Insights</h2>
              <p className="header-description">
                Monitor performance and identify trends
              </p>
            </div>

            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-label">Total Customers</div>
                <div className="stat-value">
                  {analyticsData?.totalCustomers || 0}
                </div>
                <div className="stat-change positive">
                  <span>▲ +5% this week</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-label">Avg. Wait Time</div>
                <div className="stat-value">
                  {analyticsData?.avgWaitTime?.toFixed(1) || 0} min
                </div>
                <div className="stat-change negative">
                  <span>▼ +2 last week</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-label">Satisfaction Rate</div>
                <div className="stat-value">
                  {analyticsData?.satisfactionRate?.toFixed(1) || 0}%
                </div>
                <div className="stat-change positive">
                  <span>▲ +2% from last month</span>
                </div>
              </div>
            </div>

            <div className="charts-grid">
              <div className="chart-card">
                <div className="chart-title">Peak Hours Analysis</div>

                {peakHoursData.length <= 0 ? (
                  <div
                    style={{
                      height: "90%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <IoClipboard
                        style={{ fontSize: "4rem", color: "gray" }}
                      />
                      <p style={{ fontSize: ".8rem", marginTop: ".8rem" }}>
                        No Data Found
                      </p>
                      <p style={{ fontSize: "1.1rem" }}>
                        Peak hours analysis will be displayed here
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="chart-container">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={peakHoursData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                        <XAxis
                          dataKey="hour"
                          stroke="#9CA3AF"
                          style={{ fontSize: "12px" }}
                        />
                        <YAxis stroke="#9CA3AF" style={{ fontSize: "12px" }} />
                        <Tooltip />
                        <Bar
                          dataKey="customers"
                          fill="#3B82F6"
                          radius={[8, 8, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>

              <div className="chart-card">
                <div className="chart-title">Average Wait Time Trend</div>

                {waitTimeTrendData.length === 0 ? (
                  <div
                    style={{
                      height: "90%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <IoClipboard
                        style={{ fontSize: "4rem", color: "gray" }}
                      />
                      <p style={{ fontSize: ".8rem", marginTop: ".8rem" }}>
                        No Data Found
                      </p>
                      <p style={{ fontSize: "1.1rem" }}>
                        Average Wait time will be displayed here
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="chart-container">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={waitTimeTrendData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                        <XAxis
                          dataKey="time"
                          stroke="#9CA3AF"
                          style={{ fontSize: "12px" }}
                        />
                        <YAxis stroke="#9CA3AF" style={{ fontSize: "12px" }} />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="wait"
                          stroke="#06B6D4"
                          strokeWidth={3}
                          dot={{ fill: "#06B6D4", r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>

              <div className="chart-card">
                <div className="chart-title">Weekly Customer Volume</div>

                {steadyCustomerData.length <= 0 ? (
                  <div
                    style={{
                      height: "90%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <IoClipboard
                        style={{ fontSize: "4rem", color: "gray" }}
                      />
                      <p style={{ fontSize: ".8rem", marginTop: ".8rem" }}>
                        No Data Found
                      </p>
                      <p style={{ fontSize: "1.1rem" }}>
                        Weekly customer volume will be displayed here
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="chart-container">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={steadyCustomerData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                        <XAxis
                          dataKey="day"
                          stroke="#9CA3AF"
                          style={{ fontSize: "12px" }}
                        />
                        <YAxis stroke="#9CA3AF" style={{ fontSize: "12px" }} />
                        <Tooltip />
                        <Bar
                          dataKey="count"
                          fill="#3B82F6"
                          radius={[8, 8, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>

              <div className="chart-card">
                <div className="chart-title">Service Type Distribution</div>

                {serviceTypeData.length === 0 ? (
                  <div
                    style={{
                      height: "90%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <IoClipboard
                        style={{ fontSize: "4rem", color: "gray" }}
                      />
                      <p style={{ fontSize: ".8rem", marginTop: ".8rem" }}>
                        No Data Found
                      </p>
                      <p style={{ fontSize: "1.1rem" }}>
                        Service type distribution will be displayed here
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="chart-container">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={serviceTypeData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            {serviceTypeData.map((entry, index) => (
                              // ✅ FIXED: Added backticks for template literal
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="legend-container">
                      {serviceTypeData.map((item, index) => (
                        <div key={index} className="legend-item">
                          <div
                            className="legend-dot"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AnalyticsDashboard;
