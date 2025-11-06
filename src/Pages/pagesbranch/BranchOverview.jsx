import React, { useEffect, useState } from "react";
import { BranchOverviewContainer } from "./BranchOverviewstyled";
import { MdStorefront } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { IoTimeOutline } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { MdWarning } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const BranchOverview = () => {
  const nav = useNavigate();
  const [allbranches_in_an_organization, setAllbranches_in_an_organization] = useState()
  // const orgId = localStorage.getItem("user_ID");
  // const token = localStorage.getItem("user_token");
  const orgId = "690b0e31fb10a455e31d1dc5"
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MGIwZTMxZmIxMGE0NTVlMzFkMWRjNSIsImVtYWlsIjoiaG92ZXJleHNAZ21haWwuY29tIiwicm9sZSI6Im11bHRpIiwiaWF0IjoxNzYyMzgyOTQwLCJleHAiOjE3NjI2NDIxNDB9.LB_b9bFMiH-awfFQAOBoXOM2cIpDnbv8G2L8A0CwDJQ"
  const BaseUrl = import.meta.env.VITE_BaseUrl;


  const allbranches_of_an_organization = async (status) => {
    try {
      //params hold values id and status
      const params = {};
      if (orgId) params.organizationId = orgId;
      if (status) params.status = status;

      const res = await axios.get(`${BaseUrl}/api/v1/management`, {
        params,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("data of all branches in an organization", res);
      setAllbranches_in_an_organization(res); 
      toast.success(res?.data?.message)
    } catch (error) {
      console.log("allbranches_in_an_organization", error)
      toast.error(error?.response?.data?.message)
    }
  }


  useEffect(()=> {
    allbranches_of_an_organization() 
  }, []);

  const [branches] = useState([
    {
      id: 1,
      name: "Victoria Island Branch",
      status: "Active",
      location: "Lagos",
      code: "BR001",
      manager: "Jane Okafor",
      lastUpdated: "2 min ago",
      activeQueue: 28,
      avgWait: "10 min",
      servedToday: 156,
      statusColor: "#000000",
      bgColor: "#ffffff",
    },
    {
      id: 2,
      name: "Ikeja Branch",
      status: "Active",
      location: "Lagos",
      code: "BR002",
      manager: "Chidi Eze",
      lastUpdated: "1 min ago",
      activeQueue: 42,
      avgWait: "15 min",
      servedToday: 203,
      statusColor: "#000000",
      bgColor: "#ffffff",
    },
    {
      id: 3,
      name: "Port Harcourt Branch",
      status: "Warning",
      location: "Rivers",
      code: "BR004",
      manager: "Emmanuel Nwankwo",
      lastUpdated: "5 min ago",
      activeQueue: 67,
      avgWait: "22 min",
      servedToday: 189,
      statusColor: "#dc2626",
      bgColor: "#fff7ed",
      border: "1.25px solid #FFD6A7",
      warning: "High",
    },
  ]);

  return (
    <BranchOverviewContainer>
      <div className="branch_wrapper">
        <div className="header_section">
          <div className="header_text">
            <h1 className="main_title">Branch Overview</h1>
            <p className="sub_title">Thursday, October 23, 2025</p>
          </div>
        </div>

        <div className="stats_cards_wrapper">
          <div className="stat_card">
            <div className="icon_wrapper blue_bg">
              <MdStorefront className="card_icon blue_icon" />
            </div>
            <div className="card_content">
              <p className="card_label">Total Branches</p>
              <h2 className="card_value">5</h2>
              <p className="card_change blue_text">+1 this month</p>
            </div>
          </div>

          <div className="stat_card">
            <div className="icon_wrapper purple_bg">
              <HiUsers className="card_icon purple_icon" />
            </div>
            <div className="card_content">
              <p className="card_label">Total Active Queues</p>
              <h2 className="card_value">152</h2>
              <p className="card_change purple_text">+18% from yesterday</p>
            </div>
          </div>

          <div className="stat_card">
            <div className="icon_wrapper yellow_bg">
              <IoTimeOutline className="card_icon yellow_icon" />
            </div>
            <div className="card_content">
              <p className="card_label">Avg. Wait Time (All)</p>
              <h2 className="card_value">13 min</h2>
              <p className="card_change blue_text">-5% improvement</p>
            </div>
          </div>

          <div className="stat_card">
            <div className="icon_wrapper green_bg">
              <IoCheckmarkCircle className="card_icon green_icon" />
            </div>
            <div className="card_content">
              <p className="card_label">Total Served Today</p>
              <h2 className="card_value">646</h2>
              <p className="card_change purple_text">+25% from yesterday</p>
            </div>
          </div>
        </div>

        <div className="branches_section">
          <div className="branches_header">
            <div className="branches_title_wrapper">
              <h2 className="branches_title">All Branches</h2>
              <p className="branches_subtitle">
                Monitor and manage all branch locations
              </p>
            </div>
            <div className="status_badges">
              {/* PRESERVED: added onClick to call backend with status */}
              <span
                className="status_badge active_badge"
                onClick={() => allbranches_of_an_organization("active")}
                style={{ cursor: "pointer" }}
              >
                4 Active
              </span>

              <span
                className="status_badge offline_badge"
                onClick={() => allbranches_of_an_organization("inactive")}
                style={{ cursor: "pointer" }}
              >
                1 Offline
              </span>
            </div>
          </div>

          <div className="branches_list">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="branch_card"
                style={{ background: branch.bgColor, border: branch.border }}
              >
                <div className="branch_header">
                  <div className="branch_info">
                    <div
                      className="branch_icon_wrapper"
                      style={{
                        background:
                          branch.status === "Warning"
                            ? "#dc2626"
                            : "linear-gradient(90deg, #303BFF 0%, #96F7E4 100%)",
                      }}
                    >
                      <MdStorefront className="branch_icon" />
                    </div>
                    <div className="branch_details">
                      <div className="branch_name_row">
                        <h3 className="branch_name">{branch.name}</h3>
                        <span
                          className="status_label"
                          style={{
                            background:
                              branch.status === "Warning"
                                ? "#dc2626"
                                : "#000000",
                          }}
                        >
                          {branch.status}
                        </span>
                      </div>
                      <div className="branch_meta">
                        <span className="meta_item">
                          <MdLocationOn className="meta_icon" />
                          {branch.location}
                        </span>
                        <span className="meta_separator">•</span>
                        <span className="meta_item">{branch.code}</span>
                        <span className="meta_separator">•</span>
                        <span className="meta_item">
                          Manager: {branch.manager}
                        </span>
                      </div>
                      <div className="last_updated">
                        <IoMdArrowDropdown className="arrow_icon" />
                        Last updated {branch.lastUpdated}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="branch_stats">
                  <div className="stat_item">
                    <div className="stat_icon_value">
                      <FaUsers
                        className="stat_icon"
                        style={{
                          color:
                            branch.status === "Warning" ? "#dc2626" : "#5b5fef",
                        }}
                      />
                      <span className="stat_number">{branch.activeQueue}</span>
                    </div>
                    <p className="stat_label">Active Queue</p>
                    {branch.warning && (
                      <div className="warning_badge">
                        <MdWarning className="warning_icon" />
                        {branch.warning}
                      </div>
                    )}
                  </div>

                  <div className="stat_item">
                    <div className="stat_icon_value">
                      <IoTime
                        className="stat_icon"
                        style={{
                          color:
                            branch.status === "Warning" ? "#dc2626" : "#f59e0b",
                        }}
                      />
                      <span className="stat_number">{branch.avgWait}</span>
                    </div>
                    <p className="stat_label">Avg. Wait</p>
                  </div>

                  <div className="stat_item">
                    <div className="stat_icon_value">
                      <IoCheckmarkCircleSharp
                        className="stat_icon"
                        style={{
                          color:
                            branch.status === "Warning" ? "#dc2626" : "#10b981",
                        }}
                      />
                      <span className="stat_number">{branch.servedToday}</span>
                    </div>
                    <p className="stat_label">Served Today</p>
                  </div>
                </div>

                <div className="branch_actions">
                  <button
                    className="action_btn view_details_btn"
                    onClick={() =>
                      (window.location.href = "/#/dashboard/branch-management")
                    }
                  >
                    View Details
                  </button>
                    <button className="action_btn secondary_btn"  onClick={() =>
                      (window.location.href = "/#/dashboard/analytics")
                    }>
                      Analytics
                    </button>
                    <button className="action_btn secondary_btn"  onClick={() =>
                      (window.location.href = "/#/dashboard/settings")
                    }>
                      Settings
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BranchOverviewContainer>
  );
};

export default BranchOverview;
