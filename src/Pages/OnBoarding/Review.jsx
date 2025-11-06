import React from "react";
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

const Preview = () => {
  const navigate = useNavigate();
  return (
    <PreviewContainer>
      <BoardingLogo>
        <Link to="/branch_onboarding">
          <div className="back">
            <div className="circle">
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
          <div className="circle">
            <HiOutlineBuildingOffice />
          </div>
          <p>Organization Details</p>
        </div>
        <hr />

        <div className="Holder">
          <div className="circle">
            <HiOutlineBuildingOffice />
          </div>
          <p>Branch Information</p>
        </div>
        <hr />

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
              <h4>Organization Name</h4>
              <p>First Bank</p>
            </div>
            <div>
              <h4>Head Office</h4>
              <p>124 mainland estate, lagos, Lagos</p>
            </div>
          </div>

          <div className="righttext">
            <div>
              <h4>Industry</h4>
              <p>Bank/Financial Services</p>
            </div>

            <div>
              <h4>Contact Person</h4>
              <p>Jeremiah Odinaka</p>
              <p>JerryOdi571@gmail.com</p>
              <p>09096828167</p>
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
            <h4>1. mainland (BR78)</h4>

            <div>
              <p>Location</p>
              <p>141 VI Lagos, Lagos, Lagos</p>
            </div>
            <div>
              <h4>Branch Manager</h4>
              <p>Samuel Victor</p>
              <p>Samvic@gmail.com</p>
              <p>09034874783</p>
            </div>
          </div>

          <div className="service">
            <div>
              <h4>Service Type</h4>
              <p>Bank/Financial Services</p>
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
        <button onClick={() => navigate("/submitted")}>
          Submit Onboarding <TbSend />
        </button>
      </Bottomholder>
    </PreviewContainer>
  );
};

export default Preview;
