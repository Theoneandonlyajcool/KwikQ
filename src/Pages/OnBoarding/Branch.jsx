import React, { useState } from "react";
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
import { MdLocalPhone, MdOutlineEmail } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Branch = () => {
  const nav = useNavigate();

  const [branchformData, setbranchformData] = useState({
    branchName: "",
    branchCode: "",
    address: "",
    city: "",
    state: "",
    serviceType: "",
    managerName: "",
    managerEmail: "",
    managerPhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setbranchformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!branchformData.branchName.trim()) {
      toast.error("Please enter branch name.");
      return;
    }

    if (!branchformData.branchCode.trim()) {
      toast.error("Please enter branch code.");
      return;
    }

    if (!branchformData.address.trim()) {
      toast.error("Please enter branch address.");
      return;
    }

    if (!branchformData.city.trim()) {
      toast.error("Please enter city.");
      return;
    }

    if (!branchformData.state.trim()) {
      toast.error("Please enter state.");
      return;
    }

    if (!branchformData.serviceType.trim()) {
      toast.error("Please enter service type.");
      return;
    }

    if (!branchformData.managerName.trim()) {
      toast.error("Please enter manager name.");
      return;
    }

    if (!validateEmail(branchformData.managerEmail.trim())) {
      toast.error("Please enter a valid manager email.");
      return;
    }

    if (!branchformData.managerPhone.trim()) {
      toast.error("Please enter manager phone number.");
      return;
    }

    if (
      !/^(?:\+?[0-9]{1,3})?[0]?[1-9][0-9]{6,9}$/.test(
        branchformData.managerPhone
      )
    ) {
      return toast.error("Phone number must be between 7 to 15 digits.");
    }

    toast.success("Form submitted successfully!");
    // nav("/review")/;
  };

  const BaseURL = import.meta.env.VITE_API_BASE_URL;
  const token = localStorage.getItem("User");
  const CreateBranch = async () => {
    try {
      const res = await axios.post(
        `${BaseURL}/api/v1/create-branch`,
        {
          branchName: "NewBranch",
          address: "12 Admiralty Way",
          city: "Lagos",
          state: "Lagos State",
          serviceType: "Savings",
          managerName: "John Doe",
          managerEmail: "OTP@gmail.com",
          managerPhone: "2348012345678",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <BranchContainer
      onSubmit={(e) => {
        e.preventDefault();
        CreateBranch();
      }}
    >
      <BoardingLogo>
        <ToastContainer />
        <div className="back">
          <Link to="/organization_onboarding">
            <div className="circle">
              <IoIosArrowRoundBack />
            </div>
          </Link>
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
          <div className="circle active">
            <HiOutlineBuildingOffice />
          </div>
          <p>Branch Information</p>
        </div>
        <hr />

        <div className="Holder">
          <div className="circle">
            <GrNotes />
          </div>
          <p style={{ width: "150px" }}>Review & Confirm</p>
        </div>
      </BoardingTop>

      <TopText>
        <div className="Branch">
          <p>Branch Information</p>
          <p>Add details for each branch location</p>
        </div>
        <div className="Add">
          <button type="button">
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
            <input
              type="text"
              name="branchName"
              placeholder="Input Branch"
              value={branchformData.branchName}
              onChange={handleChange}
            />
          </div>
          <div>
            <h4>Branch Code *</h4>
            <input
              type="text"
              name="branchCode"
              placeholder="Input code"
              value={branchformData.branchCode}
              onChange={handleChange}
            />
          </div>
        </InputHolder>

        <AddressHolder>
          <div>
            <h4>Add Address *</h4>
            <div className="input-holder">
              <CiLocationOn />
              <input
                type="text"
                name="address"
                placeholder="Add Address"
                value={branchformData.address}
                onChange={handleChange}
              />
            </div>
          </div>
        </AddressHolder>

        <Sections>
          <div>
            <h4>City *</h4>
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              value={branchformData.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <h4>State *</h4>
            <input
              type="text"
              name="state"
              placeholder="State"
              value={branchformData.state}
              onChange={handleChange}
            />
          </div>

          <div>
            <h4>Service Type *</h4>
            <input
              type="text"
              name="serviceType"
              placeholder="type"
              value={branchformData.serviceType}
              onChange={handleChange}
            />
          </div>
        </Sections>

        <hr style={{ border: "1.25px solid #e8e8eb" }} />

        <h4>Branch Manager</h4>
        <LastSection>
          <div>
            <h4>Manager Name *</h4>
            <div className="input-holder">
              <FiUsers />
              <input
                type="text"
                name="managerName"
                placeholder="Enter full name"
                value={branchformData.managerName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <h4>Manager Email *</h4>
            <div className="input-holder">
              <MdOutlineEmail />
              <input
                type="email"
                name="managerEmail"
                placeholder="Enter Email"
                value={branchformData.managerEmail}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <h4>Manager Phone *</h4>
            <div className="input-holder">
              <MdLocalPhone />
              <input
                type="tel"
                name="managerPhone"
                placeholder="Enter Number"
                value={branchformData.managerPhone}
                onChange={handleChange}
              />
            </div>
          </div>
        </LastSection>
      </FirstSection>

      <Bottomholder>
        <button type="submit">
          <TbSend />
          Submit Onboarding
        </button>
      </Bottomholder>

      <ToastContainer />
    </BranchContainer>
  );
};

export default Branch;
