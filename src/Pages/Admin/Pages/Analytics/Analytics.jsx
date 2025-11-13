import axios from "axios";
import { useState, useEffect, useMemo } from "react";
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

const NoDataPlaceholder = ({ message }) => (
  <div className="no-data-placeholder">
    <IoClipboard style={{ fontSize: "4rem", color: "gray" }} />
    <p style={{ fontSize: ".8rem", marginTop: ".8rem" }}>No Data Found</p>
    <p style={{ fontSize: "1.1rem" }}>{message}</p>
  </div>
);

const AnalyticsDashboard = () => {
  const [dateTime, setDateTime] = useState("");
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("User");
      const branchID =
        localStorage.getItem("BranchID") || "671f72d8c9b9d32f0a1a4e5b";

      if (!token) {
        setError("Authentication token not found. Please log in again.");
        toast.error("Please log in first");
        setLoading(false);
        return;
      }

      const apiUrl = `https://kwikq-1.onrender.com/api/v1/analytics/${branchID}?startDate=2025-10-01&endDate=2025-10-11`;

      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("[Analytics] API Response:", response.data);
      if (response.data.data) {
        setAnalyticsData(response.data.data);
        toast.success("Analytics loaded successfully");
      }

      setLoading(false);
    } catch (err) {
      console.error("[Analytics] Error fetching data:", err.message);
      setError(
        err.response?.data?.message ||
          err.message ||
          "Failed to fetch analytics"
      );
      toast.error(err.response?.data?.message || "Error loading analytics");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const steadyCustomerData = useMemo(
    () => analyticsData?.weeklyCustomerVolume || [],
    [analyticsData]
  );
  const peakHoursData = useMemo(
    () =>
      analyticsData?.peakHours?.map((peak) => ({
        hour: `${peak.hour}:00`,
        customers: peak.count,
      })) || [],
    [analyticsData]
  );

  const serviceTypeData = useMemo(() => {
    const colors = ["#22D3EE", "#3B82F6", "#06B6D4", "#A3E635", "#F97316"];
    return (
      analyticsData?.serviceTypesDistribution?.map((service, index) => ({
        name: `${service.serviceType} ${service.count}`,
        value: service.count,
        color: colors[index % colors.length],
      })) || []
    );
  }, [analyticsData]);

  const waitTimeTrendData = useMemo(
    () => [
      { time: "9:00", wait: 5 },
      { time: "10:00", wait: 7 },
      { time: "11:00", wait: 12 },
      { time: "12:00", wait: 15 },
      { time: "1:00", wait: 10 },
      { time: "2:00", wait: 8 },
      { time: "3:00", wait: 6 },
      { time: "4:00", wait: 4 },
    ],
    []
  );

  return (
    <div className="dashboard-container">
      <ToastContainer />

      {error && (
        <div className="error-container">
          <span>Error: {error}</span>
          <button onClick={fetchAnalytics} className="retry-button">
            Retry
          </button>
        </div>
      )}

      {loading ? (
        <div className="loading-container">
          <div className="spinner" />
          <p style={{ marginTop: "1rem", color: "#666" }}>
            Loading analytics...
          </p>
        </div>
      ) : (
        <>
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
              {peakHoursData.length === 0 ? (
                <NoDataPlaceholder message="Peak hours analysis will be displayed here" />
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
                <NoDataPlaceholder message="Average Wait time will be displayed here" />
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
              {steadyCustomerData.length === 0 ? (
                <NoDataPlaceholder message="Weekly customer volume will be displayed here" />
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
                <NoDataPlaceholder message="Service type distribution will be displayed here" />
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
  );
};

export default AnalyticsDashboard;
