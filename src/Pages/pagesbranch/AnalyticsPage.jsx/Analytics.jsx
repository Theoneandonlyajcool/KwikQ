import React, { useState } from "react";
import { BranchAnalyticsContainer } from "./AnalyticsStyle";
import { InactiveAnalyticsContainer } from "./InactiveAnalyticsStyle";
import { TrendsContainer } from "./TrendsStyle";
import { DistributionContainer } from "./DistributionStyle";
import { BranchComparisonContainer } from "./BranchComparisonStyle";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { IoCalendarOutline } from "react-icons/io5";
import { MdStorefront } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { MdLayers } from "react-icons/md";
import { TbTrendingUp } from "react-icons/tb";
import { TbTrendingDown } from "react-icons/tb";




const BranchAnalytics = ({ analyticsData }) => {
  const [activeTab, setActiveTab] = useState("Trends");
  const [timeRange, setTimeRange] = useState("Last 7 Days");

  const hasData = analyticsData && analyticsData.stats;
  const hasTrendData = analyticsData?.trendData?.length > 0;
  const hasHourlyData = analyticsData?.hourlyData?.length > 0;
  const hasServiceData = analyticsData?.serviceData?.length > 0;
  const hasBranchData = analyticsData?.branchData?.length > 0;

  const PIE_COLORS = ['#1e3a8a', '#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe'];

  

  // INACTIVE PAGE - When NO data
  if (!hasData) {
    return (
      <InactiveAnalyticsContainer>
        <div className="analytics_wrapper">
          <div className="header_section">
            <h1 className="main_title">Analytics</h1>
            <p className="sub_title">Monday, October 20, 2025</p>
          </div>

          <div className="insights_section">
            <div className="insights_header">
              <div className="insights_left">
                <h2 className="insights_title">Analytics & Insights</h2>
                <p className="insights_subtitle">Monitor performance and identify trends</p>
              </div>
              <div className="time_range_filter">
                <IoCalendarOutline className="calendar_icon" />
                <select className="time_select" value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                </select>
              </div>
            </div>
          </div>

          <div className="stats_cards">
            <div className="stat_card">
              <div className="stat_header">
                <div className="trend_icon up">
                  <TbTrendingUp />
                </div>
                <span className="trend_percent positive">+0%</span>
              </div>
              <p className="stat_label">Total Customers</p>
              <h2 className="stat_value">---</h2>
              <p className="stat_comparison">vs last week</p>
            </div>

            <div className="stat_card">
              <div className="stat_header">
                <div className="trend_icon down">
                  <TbTrendingDown />
                </div>
                <span className="trend_percent negative">-0%</span>
              </div>
              <p className="stat_label">Avg. Wait Time</p>
              <h2 className="stat_value">---</h2>
              <p className="stat_comparison">vs last week</p>
            </div>
          </div>

          <div className="charts_grid">
            <div className="chart_box">
              <h3 className="chart_box_title">Weekly Customer Volume</h3>
              <div className="empty_chart">
                <MdLayers className="empty_icon" />
                <p className="empty_title">No Data Found</p>
                <p className="empty_text">Weekly customer volume will be displayed here</p>
              </div>
            </div>

            {/* <div className="chart_box">
              <h3 className="chart_box_title">Average Wait Time Trend</h3>
              <div className="empty_chart">
                <MdLayers className="empty_icon" />
                <p className="empty_title">No Data Found</p>
                <p className="empty_text">Average wait time will be displayed here</p>
              </div>
            </div> */}

            {/* <div className="chart_box">
              <h3 className="chart_box_title">Peak Hours Analysis</h3>
              <div className="empty_chart">
                <MdLayers className="empty_icon" />
                <p className="empty_title">No Data Found</p>
                <p className="empty_text">Peak hours analysis will be displayed here</p>
              </div>
            </div> */}

            <div className="chart_box">
              <h3 className="chart_box_title">Service Type Distribution</h3>
              <div className="empty_chart">
                <MdLayers className="empty_icon" />
                <p className="empty_title">No Data Found</p>
                <p className="empty_text">Service type distribution will be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </InactiveAnalyticsContainer>
    );
  }

  // ACTIVE PAGE - When data EXISTS
  return (
    <BranchAnalyticsContainer>
      <div className="analytics_wrapper">
        <div className="header_section">
          <h1 className="main_title">Branch Analytics</h1>
          <p className="sub_title">Thursday, October 23, 2025</p>
        </div>

        <div className="filters_section">
          <div className="filter_item">
            <MdStorefront className="filter_icon" />
            <span className="filter_label">Branch:</span>
            <select className="filter_select">
              <option>All Branches</option>
            </select>
          </div>
          <div className="filter_item">
            <IoCalendarOutline className="filter_icon" />
            <span className="filter_label">Time Range:</span>
            <select className="filter_select">
              <option>Today</option>
            </select>
          </div>
        </div>

        <div className="stats_cards">
          <div className="stat_card">
            <div className="stat_icon customers">
              <IoMdPeople />
            </div>
            <div className="stat_content">
              <p className="stat_label">Total Customers</p>
              <h2 className="stat_value">{analyticsData.stats.totalCustomers}</h2>
              <p className="stat_change positive">↑ {analyticsData.stats.customerChange}% vs last week</p>
            </div>
          </div>

          <div className="stat_card">
            <div className="stat_icon wait">
              <MdAccessTime />
            </div>
            <div className="stat_content">
              <p className="stat_label">Avg. Wait Time</p>
              <h2 className="stat_value">{analyticsData.stats.avgWaitTime} min</h2>
              <p className="stat_change negative">↓ {analyticsData.stats.waitTimeChange}% improvement</p>
            </div>
          </div>
        </div>

        <div className="tabs_section">
          <div className="tabs_wrapper">
            {["Trends", "Distribution", "Branch Comparison"].map((tab) => (
              <div key={tab} className={`tab_item ${activeTab === tab ? "active" : ""}`} onClick={() => setActiveTab(tab)}>
                {tab}
              </div>
            ))}
          </div>
        </div>

        <TrendsContainer className={activeTab === "Trends" ? "active" : ""}>
          <div className="chart_section">
            <div className="chart_header">
              <h3 className="chart_title">Customer Flow Trends</h3>
              <p className="chart_subtitle">Weekly customer volume and wait times</p>
            </div>
            {hasTrendData ? (
              <div className="chart_container">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={analyticsData.trendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="day" stroke="#6b7280" />
                    <YAxis yAxisId="left" stroke="#3b82f6" />
                    <YAxis yAxisId="right" orientation="right" stroke="#ef4444" />
                    <Tooltip />
                    <Line yAxisId="left" type="monotone" dataKey="customers" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6', r: 4 }} />
                    <Line yAxisId="right" type="monotone" dataKey="waitTime" stroke="#ef4444" strokeWidth={2} dot={{ fill: '#ef4444', r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="empty_chart">
                <MdLayers className="empty_icon" />
                <p className="empty_title">No Data Found</p>
                <p className="empty_text">Weekly customer volume will be displayed here</p>
              </div>
            )}
          </div>

          <div className="chart_section">
            <div className="chart_header">
              <h3 className="chart_title">Hourly Distribution</h3>
              <p className="chart_subtitle">Peak hours and customer flow patterns</p>
            </div>
            {hasHourlyData ? (
              <div className="chart_container">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={analyticsData.hourlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="hour" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Bar dataKey="customers" fill="#5b5fef" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="empty_chart">
                <MdLayers className="empty_icon" />
                <p className="empty_title">No Data Found</p>
                <p className="empty_text">Peak hours analysis will be displayed here</p>
              </div>
            )}
          </div>
        </TrendsContainer>

        <DistributionContainer className={activeTab === "Distribution" ? "active" : ""}>
          <div className="chart_section">
            <div className="chart_header">
              <h3 className="chart_title">Service Distribution</h3>
              <p className="chart_subtitle">Breakdown by service type</p>
            </div>
            {hasServiceData ? (
              <div className="chart_container pie">
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie data={analyticsData.serviceData} cx="50%" cy="50%" labelLine={true} label={(entry) => `${entry.name} ${entry.value}%`} outerRadius={120} fill="#8884d8" dataKey="value">
                      {analyticsData.serviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="empty_chart">
                <MdLayers className="empty_icon" />
                <p className="empty_title">No Data Found</p>
                <p className="empty_text">Service type distribution will be displayed here</p>
              </div>
            )}
          </div>
        </DistributionContainer>

        <BranchComparisonContainer className={activeTab === "Branch Comparison" ? "active" : ""}>
          <div className="chart_section">
            <div className="chart_header">
              <h3 className="chart_title">Branch Performance Comparison</h3>
              <p className="chart_subtitle">Compare customer volume across all branches</p>
            </div>
            {hasBranchData ? (
              <div className="chart_container">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={analyticsData.branchData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="branch" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Bar dataKey="customers" fill="#5b5fef" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="empty_chart">
                <MdLayers className="empty_icon" />
                <p className="empty_title">No Data Found</p>
                <p className="empty_text">Branch comparison will be displayed here</p>
              </div>
            )}
          </div>

          <div className="rankings_section">
            <h3 className="rankings_title">Branch Rankings</h3>
            {hasBranchData ? (
              <div className="rankings_list">
                {analyticsData.branchData.map((branch, index) => (
                  <div key={index} className="ranking_item">
                    <div className="ranking_left">
                      <div className={`ranking_number rank_${index + 1}`}>{index + 1}</div>
                      <div className="ranking_info">
                        <p className="ranking_name">{branch.branch}</p>
                        <p className="ranking_customers">{branch.customers} customers</p>
                      </div>
                    </div>
                    <div className="ranking_badge">{branch.performance}%</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty_chart">
                <MdLayers className="empty_icon" />
                <p className="empty_title">No Data Found</p>
                <p className="empty_text">Branch rankings will be displayed here</p>
              </div>
            )}
          </div>
        </BranchComparisonContainer>
      </div>
    </BranchAnalyticsContainer>
  );
};

export default BranchAnalytics;
