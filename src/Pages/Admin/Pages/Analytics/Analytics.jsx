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
  Legend,
} from "recharts";
import "./Analytics.css";
import axios from "axios";
import { IoClipboard } from "react-icons/io5";
import { useEffect, useState } from "react";

const AnalyticsDashboard = () => {
  // Sample data for Total Customer Income chart
  // const WeeklyCustomerVolume = [
  // { name: "Jan", value: 45 },
  // { name: "Feb", value: 52 },
  // { name: "Mar", value: 68 },
  // { name: "Apr", value: 85 },
  // { name: "May", value: 75 },
  // { name: "Jun", value: 62 },
  // { name: "Jul", value: 78 },
  // ];

  const [WeeklyCustomerVolume, SeWeeklyCustomerVolume] = useState([]);

  // Sample data for Average Wait Time chart
  // const AverageWaitTimeTrend = [
  // { name: "Jan", value: 12.5 },
  // { name: "Feb", value: 11.8 },
  // { name: "Mar", value: 11.2 },
  // { name: "Apr", value: 10.8 },
  // { name: "May", value: 11.5 },
  // { name: "Jun", value: 10.2 },
  // { name: "Jul", value: 9.5 },
  // ];

  const [AverageWaitTimeTrend, SetAverageWaitTimeTrend] = useState([]);

  // Sample data for Total Seat in Waitlist chart
  // const PeakHourAnalysis = [
  // { name: "Mon", value: 65 },
  // { name: "Tue", value: 72 },
  // { name: "Wed", value: 85 },
  // { name: "Thu", value: 78 },
  // { name: "Fri", value: 92 },
  // { name: "Sat", value: 68 },
  // { name: "Sun", value: 55 },
  // ];

  const [PeakHourAnalysis, SetPeakHourAnalysis] = useState([]);

  // Sample data for Service Type Distribution (Pie Chart)
  // const ServiceTypeDistibution = [
  // { name: "Category A", value: 33, color: "#1E90FF" },
  // { name: "Category B", value: 17, color: "#FF7F50" },
  // { name: "Category C", value: 25, color: "#FFD700" },
  // { name: "Category D", value: 25, color: "#20C997" },
  // ];

  const [ServiceTypeDistibution, SetServiceTypeDistibution] = useState([]);

  const Org_ID = sessionStorage.getItem("user-recog");
  const token = localStorage.getItem("User");
  const BaseUrl = import.meta.env.VITE_API_BASE_URL;
  const ID = localStorage.getItem("user_ID");

  // console.log(Org_ID, token, "Analytics");
  const [TotalCustomers, SetTotalCustomers] = useState("");
  const [AvgWaitTime, SetAvgWaitTime] = useState("");

  const FetchAnalytics = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/api/v1/analytics/${ID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res?.data);
      SetTotalCustomers(res?.data?.data?.totalCustomers);
      SetAvgWaitTime(res?.data?.data?.avgWaitTime);
      SeWeeklyCustomerVolume(res?.data?.data?.weeklyCustomerVolume);
      SetPeakHourAnalysis(res?.data?.data?.peakHours);
      SetAverageWaitTimeTrend(res?.data?.data?.averageWaitTimeTrend);
      SetServiceTypeDistibution(res?.data?.data?.serviceTypeDistribution);
    } catch (error) {
      console("error");
    }
  };

  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    FetchAnalytics();
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
  }, []);

  return (
    <div className="analytics-container">
      {/* Header */}
      <div className="analytics-header">
        <h1>Analytics</h1>
        {/* <div className="date-filter">
          <button className="filter-btn">
            <span className="calendar-icon">📅</span> Last 7 Days
          </button>
          <button className="pdf-btn">
            <span className="pdf-icon">📄</span> PDF
          </button>
        </div> */}
      </div>

      {/* Analytics Insights */}
      <div className="insights-section">
        <h2>Analytics & Insights</h2>
        <div className="date-range">{dateTime}</div>
      </div>

      {/* Metrics Cards */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-label">Total Customers</div>
          <div className="metric-value">{TotalCustomers}</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Avg. Wait Time</div>
          <div className="metric-value">{AvgWaitTime} min</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="charts-grid">
        {/* Total Customer Income Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Weekly Customer Volume</h3>
            {/* <span className="view-details">View Details</span> */}
          </div>

          {WeeklyCustomerVolume?.length <= 0 ? (
            <div
              style={{
                // border: "2px solid red",
                height: "90%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <IoClipboard style={{ fontSize: "4rem", color: "gray" }} />
                <p style={{ marginTop: "1rem" }}>No Data Found</p>
              </div>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={WeeklyCustomerVolume}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip />
                <Bar dataKey="count" fill="#2563EB" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Average Wait Time Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Average Wait Time Trend</h3>
            {/* <span className="view-details">View Details</span> */}
          </div>

          {AverageWaitTimeTrend?.length <= 0 ? (
            <div
              style={{
                // border: "2px solid red",
                height: "90%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <IoClipboard style={{ fontSize: "4rem", color: "gray" }} />
                <p style={{ marginTop: "1rem" }}>No Data Found</p>
              </div>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={AverageWaitTimeTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#00BCD4"
                  strokeWidth={3}
                  dot={{ fill: "#00BCD4", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Total Seat in Waitlist Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Peak Hours Analysis</h3>
            {/* <span className="view-details">View Details</span> */}
          </div>

          {PeakHourAnalysis?.length <= 0 ? (
            <div
              style={{
                // border: "2px solid red",
                height: "90%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <IoClipboard style={{ fontSize: "4rem", color: "gray" }} />
                <p style={{ marginTop: "1rem" }}>No Data Found</p>
              </div>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={PeakHourAnalysis}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="hour" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip />
                <Bar dataKey="count" fill="#2563EB" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Service Type Distribution Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Service Type Distribution</h3>
            {/* <span className="view-details">View Details</span> */}
          </div>

          {ServiceTypeDistibution?.length <= 0 ? (
            <div
              style={{
                // border: "2px solid red",
                height: "90%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <IoClipboard style={{ fontSize: "4rem", color: "gray" }} />
                <p style={{ marginTop: "1rem" }}>No Data Found</p>
              </div>
            </div>
          ) : (
            <div className="pie-chart-container">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={ServiceTypeDistibution}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    paddingAngle={0}
                    dataKey="value"
                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {ServiceTypeDistibution.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke="#ffffff"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="pie-legend">
                {ServiceTypeDistibution.map((entry, index) => (
                  <div key={index} className="legend-item">
                    <span
                      className="legend-color"
                      style={{ backgroundColor: entry.color }}
                    ></span>
                    <span className="legend-label">{entry.name}</span>
                    <span className="legend-value">{entry.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
