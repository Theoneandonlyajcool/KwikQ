import React from "react";
import {
  BoardingContainer,
  BoardingLogo,
  BoardingTop,
  OnboardingHolder,
  TextSection,
  Bottomholder,
} from "./OnboardingStyle";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  HiOutlineBuildingOffice,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";
import { GrNotes } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { MdLocalPhone } from "react-icons/md";

const Onboarding = () => {
  return (
    <BoardingContainer>
      <BoardingLogo>
        <div className="back">
          <div className="circle">
            <IoIosArrowRoundBack />
          </div>
        </div>
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
            <HiOutlineBuildingOffice2 />
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
      <OnboardingHolder>
        <TextSection>
          <div className="Orgn">
            <h4>
              <HiOutlineBuildingOffice2 style={{ color: "#747cff" }} />
              Organization Details
            </h4>
            <p>Tell us about your organization</p>
          </div>

          <div>
            <div className="InputHolder">
              <div>
                <p>Organization Name</p>
                <input type="text" placeholder="Enter your organization name" />
              </div>

              <div>
                <p>Industry/Service type *</p>
                <input type="text" placeholder="Enter service" />
              </div>
            </div>
          </div>

          <div>
            <p>Head Office Address *</p>
            <input type="text" placeholder="123 Main Street" />
          </div>

          <div className="InputHolder">
            <div>
              <p>City *</p>
              <input type="text" placeholder="Enter your city" />
            </div>

            <div>
              <p>State *</p>
              <input type="text" placeholder="Enter" />
            </div>
          </div>

          <div className="SecondInputHolder">
            <div className="primary">
              <p>Primary Contact Person</p>
            </div>

            <div className="LastInputHolder">
              <di>
                <p>Full Name *</p>
                <div className="input_holder">
                  <GoPerson />
                  <input type="text" placeholder="Enter your name" />
                </div>
              </di>

              <div>
                <p>Email Address *</p>
                <div className="input_holder">
                  <MdOutlineMail />
                  <input type="email" placeholder="Enter Email Address" />
                </div>
              </div>
            </div>

            <div>
              <p>Phone Number *</p>
              <div className="input_holder">
                <MdLocalPhone />
                <input
                  type="tel"
                  className="Number"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
          </div>
        </TextSection>
        <Bottomholder>
          <button type="submit">
            Preview and confirm <FaArrowRightLong />{" "}
          </button>
        </Bottomholder>
      </OnboardingHolder>
    </BoardingContainer>
  );
};

export default Onboarding;
