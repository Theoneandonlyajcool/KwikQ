import React from "react";
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

const AnalyticsDashboard = () => {
  // Dummy data for charts
  const steadyCustomerData = [
    { month: "Jan", value: 45 },
    { month: "Feb", value: 62 },
    { month: "Mar", value: 78 },
    { month: "Apr", value: 95 },
    { month: "May", value: 1100 },
    { month: "Jun", value: 88 },
    { month: "Jul", value: 102 },
    { month: "Aug", value: 95 },
    { month: "Sep", value: 25 },
    { month: "Oct", value: 88 },
  ];

  const waitTimeTrendData = [
    { time: "9:00", wait: 15 },
    { time: "10:00", wait: 18 },
    { time: "11:00", wait: 14 },
    { time: "12:00", wait: 16 },
    { time: "1:00", wait: 12 },
    { time: "2:00", wait: 15 },
    { time: "3:00", wait: 11 },
    { time: "4:00", wait: 9 },
  ];

  const peakHoursData = [
    { hour: "9AM", customers: 35 },
    { hour: "10AM", customers: 58 },
    { hour: "11AM", customers: 75 },
    { hour: "12PM", customers: 92 },
    { hour: "1PM", customers: 88 },
    { hour: "2PM", customers: 95 },
    { hour: "3PM", customers: 78 },
    { hour: "4PM", customers: 65 },
    { hour: "5PM", customers: 48 },
  ];

  const serviceTypeData = [
    { name: "Consultation 35%", value: 35, color: "#22D3EE" },
    { name: "Treatment 28%", value: 28, color: "#3B82F6" },
    { name: "Follow-up 22%", value: 22, color: "#06B6D4" },
    { name: "Emergency 15%", value: 15, color: "#A3E635" },
  ];

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          background-color: #F9FAFB;
        }

        .dashboard-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 24px;
          background-color: #F9FAFB;
        }

        .header {
          margin-bottom: 32px;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .header-title {
          font-size: 32px;
          font-weight: 600;
          color: #111827;
        }

        .header-date {
          font-size: 14px;
          color: #6B7280;
        }

        .header-subtitle {
          font-size: 20px;
          font-weight: 500;
          color: #111827;
          margin-bottom: 4px;
        }

        .header-description {
          font-size: 14px;
          color: #6B7280;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 20px;
        }

        .stat-card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .stat-label {
          font-size: 14px;
          color: #6B7280;
          margin-bottom: 8px;
        }

        .stat-value {
          font-size: 36px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 8px;
        }

        .stat-change {
          font-size: 12px;
          color: #6B7280;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .stat-change.positive {
          color: #10B981;
        }

        .stat-change.negative {
          color: #EF4444;
        }

        .charts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .chart-card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .chart-title {
          font-size: 16px;
          font-weight: 500;
          color: #111827;
          margin-bottom: 20px;
        }

        .chart-container {
          width: 100%;
          height: 280px;
        }

        .legend-container {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 16px;
          justify-content: center;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #6B7280;
        }

        .legend-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        @media (max-width: 768px) {
          .stats-row,
          .charts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="dashboard-container">
        <div className="header">
          <div className="header-top">
            <h1 className="header-title">Analytics</h1>
            <span className="header-date">Jan 04, 2025</span>
          </div>
          <h2 className="header-subtitle">Analytics & Insights</h2>
          <p className="header-description">
            Monitor performance and identify trends
          </p>
        </div>

        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-label">Total Customers</div>
            <div className="stat-value">1,144</div>
            <div className="stat-change positive">
              <span>▲ +5% this week</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Avg. Wait Time</div>
            <div className="stat-value">11.9 min</div>
            <div className="stat-change negative">
              <span>▼ +2 last week</span>
            </div>
          </div>
        </div>

        <div className="charts-grid">
          <div className="chart-card">
            <div className="chart-title">Steady Customer Income</div>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={steadyCustomerData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                  <XAxis
                    dataKey="month"
                    stroke="#9CA3AF"
                    style={{ fontSize: "12px" }}
                  />
                  <YAxis stroke="#9CA3AF" style={{ fontSize: "12px" }} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="chart-card">
            <div className="chart-title">Average Wait Time Trend</div>
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
          </div>

          <div className="chart-card">
            <div className="chart-title">Peak Hours Analysis</div>
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
          </div>

          <div className="chart-card">
            <div className="chart-title">Service Type Distribution</div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsDashboard;
