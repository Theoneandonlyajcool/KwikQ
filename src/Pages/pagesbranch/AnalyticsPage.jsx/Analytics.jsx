import React, { useEffect, useState } from "react";
import { BranchAnalyticsContainer } from "./AnalyticsStyle";
import { InactiveAnalyticsContainer } from "./InactiveAnalyticsStyle";
import { TrendsContainer } from "./TrendsStyle";
import { DistributionContainer } from "./DistributionStyle";
import { BranchComparisonContainer } from "./BranchComparisonStyle";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { IoCalendarOutline } from "react-icons/io5";
import { MdStorefront } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { MdLayers } from "react-icons/md";
import { MdError } from "react-icons/md";
import { TbTrendingUp } from "react-icons/tb";
import { TbTrendingDown } from "react-icons/tb";
import CurrentDateTime from "../CurrentDateTime";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const BranchAnalytics = () => {
  const [activeTab, setActiveTab] = useState("Trends");
  // const [timeRange, setTimeRange] = useState("Last 7 Days");
  const [analyticsData, setAnalyticsData] = useState();
  const [status, setStatus] = useState("inactive");
  const [errors, setErrors] = useState(null);
  const token = localStorage.getItem("User");
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const [customersdata, setCustomersdata] = useState([]);
  const [trendsData, setTrendsData] = useState([]);
  // console.log("fuck up", customersdata)


  // const hasData = analyticsData && analyticsData.stats;
  // const hasTrendData = analyticsData?.trendData?.length > 0;
  // const hasHourlyData = analyticsData?.hourlyData?.length > 0;
  // const hasServiceData = analyticsData?.serviceData?.length > 0;
  // const hasBranchData = analyticsData?.branchData?.length > 0;

  // const PIE_COLORS = ['#1e3a8a', '#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe'];

  const organAnalytics = async () => {
    setStatus("loading");
    setErrors(null);
    try {
      const res = await axios.get(`${BaseUrl}/api/v1/getanalytics`, {
        headers: {Authorization: `Bearer ${token}`}
      })
      // console.log("analy work", res)
      setAnalyticsData(res?.data);
      setCustomersdata(res?.data?.totalCustomers);
      setTrendsData(res?.data?.trends);
      setStatus("success")
      // toast.success(res?.data?.message);
    } catch (error) {
      console.log(error);
      setErrors(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
      setStatus("error");
    }
  };

  useEffect(() => {
    organAnalytics();
  }, []);

  if (status === "inactive") {
    return (
      <InactiveAnalyticsContainer>
        <ToastContainer />
        <div className="analytics_wrapper">
          <div className="header_section">
            <h1 className="main_title">Analytics</h1>
            <p className="sub_title">
              <CurrentDateTime />
            </p>
          </div>

          <div className="charts_grid">
            <div className="chart_box">
              <h3 className="chart_box_title">Weekly Customer Volume</h3>
              <div className="empty_chart">
                <MdLayers className="empty_icon" />
                <p className="empty_title">No Data Found</p>
                <p className="empty_text">
                  Weekly customer volume will be displayed here
                </p>
              </div>
            </div>
          </div>
        </div>
      </InactiveAnalyticsContainer>
    );
  }

  if (status === "loading") {
    return (
      <InactiveAnalyticsContainer>
        <ToastContainer />
        <div className="analytics_wrapper">
          <div className="header_section">
            <h1 className="main_title">Analytics</h1>
            <p className="sub_title">
              <CurrentDateTime />
            </p>
          </div>

          <div className="charts_grid">
            <div className="chart_box">
              <h3 className="chart_box_title">Weekly Customer Volume</h3>
              <div className="empty_chart">
                <MdLayers className="empty_icon" />
                <p className="empty_title">Loading...</p>
                <p className="empty_text">
                  Fetching branch details, please wait
                </p>
              </div>
            </div>
          </div>
        </div>
      </InactiveAnalyticsContainer>
    );
  }

  if (status === "error") {
    return (
      <InactiveAnalyticsContainer>
        <ToastContainer />
        <div className="analytics_wrapper">
          <div className="header_section">
            <h1 className="main_title">Analytics</h1>
            <p className="sub_title">
              <CurrentDateTime />
            </p>
          </div>

          <div className="header_section">
            <h1 className="main_title" style="background: red">
              Analytics
            </h1>
            <p className="sub_title">
              <CurrentDateTime />
            </p>
          </div>

          <div className="charts_grid">
            <div className="chart_box">
              <h3 className="chart_box_title">Weekly Customer Volume</h3>
              <div className="empty_chart">
                <MdError className="empty_icon" style={{ color: "red" }} />
                <p className="empty_title">Error Loading Branch</p>
                <p className="empty_text">{errors}</p>
                <button
                  onClick={() => organAnalytics()}
                  style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    background: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </InactiveAnalyticsContainer>
    );
  }

  if(status === "success" && trendsData){
  return (
    <BranchAnalyticsContainer>
    <ToastContainer />
      <div className="analytics_wrapper">
        <div className="header_section">
          <h1 className="main_title">Branch Analytics</h1>
          <p className="sub_title"><CurrentDateTime /></p>
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
              <h2 className="stat_value">{analyticsData?.customerChangePercent}</h2>
              <p className="stat_change positive">↑ {}% vs last week</p>
            </div>
          </div>

          <div className="stat_card">
            <div className="stat_icon wait">
              <MdAccessTime />
            </div>
            <div className="stat_content">
              <p className="stat_label">Avg. Wait Time</p>
              <h2 className="stat_value">{analyticsData?.avgWaitTime} min</h2>
              <p className="stat_change negative">↓ {}% improvement</p>
            </div>
          </div>
        </div>

          <div className="tabs_section">
            <div className="tabs_wrapper">
              {["Trends", "Distribution", "Branch Comparison"].map((tab) => (
                <div
                  key={tab}
                  className={`tab_item ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
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
            {trendsData ? (
              <div className="chart_container">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trendsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="day" stroke="#6b7280" />
                    <YAxis yAxisId="left" stroke="#3b82f6" />
                    <YAxis yAxisId="right" orientation="right" stroke="#ef4444" />
                    <Tooltip />
                    <Line 
                      yAxisId="left" 
                      type="monotone" 
                      dataKey="totalCustomers" 
                      stroke="#3b82f6" 
                      strokeWidth={2} 
                      dot={{ fill: '#3b82f6', r: 4 }} 
                    />
                    <Line 
                      yAxisId="right" 
                      type="monotone" 
                      dataKey="avgWait" 
                      stroke="#ef4444" 
                      strokeWidth={2} 
                      dot={{ fill: '#ef4444', r: 4 }} 
                    />
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
            {customersdata ? (
              <div className="chart_container">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={customersdata}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="serviceTime" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Bar dataKey="serialNumber" fill="#5b5fef" radius={[8, 8, 0, 0]} />
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

          {/* <DistributionContainer className={activeTab === "Distribution" ? "active" : ""}>
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
        </DistributionContainer> */}

          {/* <BranchComparisonContainer className={activeTab === "Branch Comparison" ? "active" : ""}>
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
        </BranchComparisonContainer> */}
        </div>
      </BranchAnalyticsContainer>
    );
  }
};

export default BranchAnalytics;
