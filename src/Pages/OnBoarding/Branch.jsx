import React from "react";
import {
  BranchContainer,
  BoardingLogo,
  BoardingTop,
  TopText,
  FirstSection,
  InputHolder,
  AddressHolder,
  Sections,
  LastSection,
  Bottomholder,
} from "./BranchStyle";
import { IoIosArrowRoundBack, IoMdAdd } from "react-icons/io";
import {
  HiOutlineBuildingOffice,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";
import { GrNotes } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { TbSend } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const Branch = () => {
  return (
    <BranchContainer>
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
        <div className="Branch">
          <p>Branch Information</p>
          <p>Add details for each branch location</p>
        </div>
        <div className="Add">
          <button>
            <IoMdAdd />
            Add Branch
          </button>
        </div>
      </TopText>

      <FirstSection>
        <div className="Org">
          <HiOutlineBuildingOffice2 style={{ color: "#747cff" }} />
          <h4>Branch (1)</h4>
        </div>
        <InputHolder>
          <div>
            <h4>Branch Name *</h4>
            <input type="text" placeholder="Input Branch" />
          </div>
          <div>
            <h4>Branch Code *</h4>
            <input type="text" placeholder="Input code" />
          </div>
        </InputHolder>
        <AddressHolder>
          <div>
            <h4>Add Address *</h4>
            <div className="input-holder">
              <CiLocationOn /> <input type="text" placeholder="Add Address" />
            </div>
          </div>
        </AddressHolder>
        <Sections>
          <div>
            <h4>City *</h4>
            <input type="text" placeholder="Enter your city" />
          </div>
          <div>
            <h4>State*</h4>
            <input type="text" placeholder="State" />
          </div>

          <div>
            <h4>Service Type *</h4>
            <input type="text" placeholder="type" />
          </div>
        </Sections>
        <hr
          style={{
            border: "1.25px solid #e8e8eb",
          }}
        />
        <h4>Branch Manager</h4>
        <LastSection>
          <div>
            <h4>Manager Name *</h4>
            <div className="input-holder">
              <FiUsers /> <input type="text" placeholder="Enter full name" />
            </div>
          </div>

          <div>
            <h4>Manager Email*</h4>
            <div className="input-holder">
              <MdOutlineEmail /> <input type="text" placeholder="Enter Email" />
            </div>
          </div>

          <div>
            <h4>Manager Phone*</h4>
            <div className="input-holder">
              <MdLocalPhone />
              <input type="text" placeholder="Enter Number" />
            </div>
          </div>
        </LastSection>
      </FirstSection>

      <Bottomholder>
        <button>
          Submit Onboarding <TbSend />
        </button>
      </Bottomholder>
    </BranchContainer>
  );
};

export default Branch;
