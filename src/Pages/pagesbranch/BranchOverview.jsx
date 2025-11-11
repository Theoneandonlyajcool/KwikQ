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
import { MdAdd } from "react-icons/md";
import { MdWarning } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import CurrentDateTime from "./CurrentDateTime";

const BranchOverview = () => {
  
  const nav = useNavigate();
  const [allbranches_in_an_organization, setAllbranches_in_an_organization] = useState()
  const [organization_metrics, setOrganization_metrics] = useState()
  const [Organ_Name, setOrgan_Name] = useState()
  const ID = sessionStorage.getItem("user-recog");
  const token = localStorage.getItem("User");
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  // console.log("api",organization_metrics)
  // console.log("api", allbranches_in_an_organization)


  const allbranches_of_an_organization = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/api/v1/getallbranches`, {
        params:  { organizationId: ID },
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("data of all branches in an organization", res);
      setAllbranches_in_an_organization(res?.data?.branches); 
      // toast.success(res?.data?.message)
    } catch (error) {
      console.log("allbranches_in_an_organization", error)
      toast.error(error?.response?.data?.message)
    }
  }


  useEffect(()=> {
    allbranches_of_an_organization() 
  }, []);

  
  const getname = async () => {
      try {
        const res = await axios.get(`${BaseUrl}/api/v1/organization-details/${ID}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        // console.log("organization_Name", res);
        localStorage.setItem("Organ_Name", res?.data?.data?.businessName)
        setOrgan_Name(res?.data?.data); 
        // toast.success(res?.data?.message)
      } catch (error) {
        console.log("organization_Name", error)
        // toast.error(error?.response?.data?.message)
      }
    }
    
  useEffect(()=> { 
      getname() 
  }, []);

  // const allbranches_of_an_organization = async () => {
  //   try {
  //     const res = await axios.get(`${BaseUrl}/api/v1/organizations/${ID}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
  //     // console.log("data of all branches in an organization", res);
  //     setAllbranches_in_an_organization(res?.data?.oragnizationBranches); 
  //     toast.success(res?.data?.message)
  //   } catch (error) {
  //     console.log("allbranches_in_an_organization", error)
  //     toast.error(error?.response?.data?.message)
  //   }
  // }


  // useEffect(()=> {
  //   allbranches_of_an_organization() 
  // }, []);


  const organization_branches_metrics = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/api/v1/branch/management/${ID}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // console.log("organization_branches_metrics ", res);
      setOrganization_metrics(res.data); 
      toast.success(res?.data?.message)
    } catch (error) {
      console.log("organization_branches_metrics", error)
      toast.error(error?.response?.data?.message)
    }
  }


  useEffect(()=> {
    organization_branches_metrics() 
  }, []);

  return (
    <BranchOverviewContainer>
    <ToastContainer />
      <div className="branch_wrapper">
        <div className="header_section">
          <div className="header_text">
            <h1 className="main_title">Branch Overview</h1>
            <p className="sub_title"><CurrentDateTime /></p>
          </div>
        </div>

        <div className="stats_cards_wrapper">
          <div className="stat_card">
            <div className="icon_wrapper blue_bg">
              <MdStorefront className="card_icon blue_icon" />
            </div>
            <div className="card_content">
              <p className="card_label">Total Branches</p>
              <h2 className="card_value">{organization_metrics?.totalBranches}</h2>
              <p className="card_change blue_text">+0 this month</p>
            </div>
          </div>

          <div className="stat_card">
            <div className="icon_wrapper purple_bg">
              <HiUsers className="card_icon purple_icon" />
            </div>
            <div className="card_content">
              <p className="card_label">Total Active Queues</p>
              <h2 className="card_value">{organization_metrics?.totalActiveQueues}</h2>
              <p className="card_change purple_text">+00% from yesterday</p>
            </div>
          </div>

          <div className="stat_card">
            <div className="icon_wrapper yellow_bg">
              <IoTimeOutline className="card_icon yellow_icon" />
            </div>
            <div className="card_content">
              <p className="card_label">Avg. Wait Time (All)</p>
              <h2 className="card_value">{organization_metrics?.avgWaitTime}</h2>
              <p className="card_change blue_text">-0% improvement</p>
            </div>
          </div>

          <div className="stat_card">
            <div className="icon_wrapper green_bg">
              <IoCheckmarkCircle className="card_icon green_icon" />
            </div>
            <div className="card_content">
              <p className="card_label">Total Served Today</p>
              <h2 className="card_value">{organization_metrics?.totalServedToday}</h2>
              <p className="card_change purple_text">+0% from yesterday</p>
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
              <button className="add_branch_btn" onClick={()=> nav("/branch_onboarding")}>
              <MdAdd className="add_icon" />
              Add New Branch
            </button>

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
            {allbranches_in_an_organization?.map((branch) => (
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
                        <h3 className="branch_name">{branch.branchName}</h3>
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
                        <span className="meta_item">{branch.branchCode}</span>
                        <span className="meta_separator">•</span>
                        <span className="meta_item">
                          Manager: {branch.managerName}
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
                    onClick={() => {
                      sessionStorage.setItem("selectedBranchId", branch?._id);
                      window.location.href = "/#/dashboard/branch-management"
                    }}
                  >
                    View Details
                  </button>
                    <button className="action_btn secondary_btn"  onClick={() => {
                      window.location.href = "/#/dashboard/analytics"
                    }}>
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
