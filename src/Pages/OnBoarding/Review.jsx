import React, { useState, useEffect } from "react";
import {
  PreviewContainer,
  BoardingLogo,
  BoardingTop,
  TopText,
  FirstSection,
  SecondSection,
  NoticeSection,
  TextHolder,
  Bottomholder,
} from "./ReviewStyle";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  HiOutlineBuildingOffice,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";
import { GrNotes } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { TbSend } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Preview = () => {
  const nav = useNavigate();

  const branchData = JSON.parse(localStorage.getItem("onboard-details"));
  const [organizationData, setOrganizationData] = useState(null);

  const [LoadingState, SetLoadingState] = useState(false);
  const BaseURL = import.meta.env.VITE_API_BASE_URL;
  const token = localStorage.getItem("User");

  useEffect(() => {
    const storedOrgData = JSON.parse(localStorage.getItem("organization-data"));

    if (storedOrgData) {
      console.log("Using organization data from localStorage:", storedOrgData);
      setOrganizationData(storedOrgData);
    } else {
      const fetchOrganizationData = async () => {
        try {
          const ID = sessionStorage.getItem("user-recog");
          const response = await axios.get(
            `${BaseURL}/api/v1/organizations/${ID}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Using organization data from API:", response.data);
          setOrganizationData(response.data);
        } catch (error) {
          console.error("Error fetching organization data:", error);
        }
      };
      fetchOrganizationData();
    }
  }, [BaseURL, token]);

  console.log("Branch data:", branchData);
  console.log("Organization data:", organizationData);
  console.log(
    "LocalStorage org data:",
    JSON.parse(localStorage.getItem("organization-data"))
  );

  const CreateBranch = async () => {
    try {
      SetLoadingState(true);
      const res = await axios.post(
        `${BaseURL}/api/v1/create-branch`,
        branchData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res?.data?.message);
      SetLoadingState(false);
      setTimeout(() => {
        nav("/submitted");
      }, 2000);
    } catch (error) {
      SetLoadingState(false);
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <PreviewContainer>
      <ToastContainer />
      <BoardingLogo>
        <Link to="/branch_onboarding">
          <div className="back">
            <div className="circle" onClick={() => nav(-1)}>
              <IoIosArrowRoundBack />
            </div>
          </div>
        </Link>
        <div className="logo">
          <img
            src="https://i.postimg.cc/hvw7KVFS/35379ce965af990a259b5b98b745a14f6d61bddc-1.png"
            alt=""
          />
          <div>
            <p>Branch Onboarding</p>
          </div>
        </div>
      </BoardingLogo>

      <BoardingTop>
        <div className="Holder">
          <div
            className="circle"
            style={{ backgroundColor: "#303bff", color: "white" }}
          >
            <IoCheckmarkCircleOutline />
          </div>
          <p>Organization Details</p>
        </div>
        <hr style={{ borderColor: "#303bff" }} />

        <div className="Holder">
          <div
            className="circle"
            style={{ backgroundColor: "#303bff", color: "white" }}
          >
            <IoCheckmarkCircleOutline />
          </div>
          <p>Branch Information</p>
        </div>
        <hr style={{ borderColor: "#303bff" }} />

        <div className="Holder">
          <div className="circle">
            <GrNotes />
          </div>
          <p style={{ width: "150px" }}>Review & Confirm </p>
        </div>
      </BoardingTop>

      <TopText>
        <p>Review Your Information</p>
        <p>Please verify all details before submission</p>
      </TopText>

      <FirstSection>
        <div className="Org">
          <HiOutlineBuildingOffice2 style={{ color: "#747cff" }} />
          <h4>Organization Details</h4>
        </div>

        <TextHolder>
          <div className="lefttext">
            <div>
              <h4>Head Office Address</h4>
              <p>{organizationData?.headOfficeAddress || "Not provided"}</p>
            </div>
            <div>
              <h4>City</h4>
              <p>{organizationData?.city || "Not provided"}</p>
            </div>
            <div>
              <h4>State</h4>
              <p>{organizationData?.state || "Not provided"}</p>
            </div>
          </div>

          <div className="righttext">
            <div>
              <h4>Industry/Service Type</h4>
              <p>{organizationData?.industryServiceType || "Not provided"}</p>
            </div>

            <div>
              <h4>Contact Person</h4>
              <p>{organizationData?.fullName || "Not provided"}</p>
              <p>{organizationData?.email || "Not provided"}</p>
              <p>{organizationData?.phoneNumber || "Not provided"}</p>
            </div>
          </div>
        </TextHolder>
      </FirstSection>

      <SecondSection>
        <div className="Branch">
          <HiOutlineBuildingOffice style={{ color: "#747cff" }} />
          <h4>Branches (1)</h4>
        </div>
        <TextHolder>
          <div className="lefttext">
            <h4>
              1. {branchData?.branchName || "Branch Name"} (
              {branchData?.branchCode || "Branch Code"})
            </h4>

            <div>
              <p>Location</p>
              <p>
                {branchData?.address || "Not provided"},{" "}
                {branchData?.city || ""}, {branchData?.state || ""}
              </p>
            </div>
            <div>
              <h4>Branch Manager</h4>
              <p>{branchData?.managerName || "Not provided"}</p>
              <p>{branchData?.managerEmail || "Not provided"}</p>
              <p>{branchData?.managerPhone || "Not provided"}</p>
            </div>
          </div>

          <div className="service">
            <div>
              <h4>Service Type</h4>
              <p>{branchData?.serviceType || "Not provided"}</p>
            </div>
          </div>
        </TextHolder>
      </SecondSection>

      <NoticeSection>
        <h4 className="question-holder">
          <FiUsers />
          What happens next?
        </h4>
        <p>
          • Each branch manager will receive a personalized invitation email
        </p>
        <p>
          • Branch managers can set up their accounts and access the dashboard
        </p>
        <p>• You'll receive admin access to monitor all branches</p>
        <p>• Setup takes approximately 24-48 hours for review and activation</p>
      </NoticeSection>

      <Bottomholder>
        <button disabled={LoadingState} onClick={CreateBranch}>
          {LoadingState ? (
            "Creating...."
          ) : (
            <>
              Submit Onboarding <TbSend />
            </>
          )}
        </button>
      </Bottomholder>
    </PreviewContainer>
  );
};

export default Preview;
