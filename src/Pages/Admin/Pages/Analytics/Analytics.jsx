import axios from "axios";
import React, { useState } from "react";
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

import "./Analytics.css";

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

  const BranchID = localStorage.getItem("BranchID");
  const BaseURL = import.meta.env.VITE_API_BASE_URL;

  const FetchAnalytics = async () => {
    try {
      const res = await axios.get(`${BaseURL}`);
    } catch (error) {}
  };

  return (
    <>
      <div className="dashboard-container">
        <ToastContainer />
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
