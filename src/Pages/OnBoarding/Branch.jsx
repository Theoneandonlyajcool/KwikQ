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
import { IoIosArrowRoundBack } from "react-icons/io";
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
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const isEmailValid = (email) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
const isPhoneValid = (phone) => /^\+234\s?\d{2}\s?\d{4}\s?\d{4}$/.test(phone);

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

  const [errors, setErrors] = useState({
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
    setbranchformData((prev) => ({ ...prev, [name]: value }));

    let message = "";
    if (!value.trim()) {
      message = "This field is required.";
    } else if (name === "managerEmail" && !isEmailValid(value)) {
      message = "Invalid email format.";
    } else if (name === "managerPhone" && !isPhoneValid(value)) {
      message = "Invalid Nigerian phone format. Use +234 xx xxxx xxxx";
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const allValid =
    branchformData.branchName.trim() &&
    branchformData.branchCode.trim() &&
    branchformData.address.trim() &&
    branchformData.city.trim() &&
    branchformData.state.trim() &&
    branchformData.serviceType.trim() &&
    branchformData.managerName.trim() &&
    branchformData.managerEmail.trim() &&
    branchformData.managerPhone.trim() &&
    isEmailValid(branchformData.managerEmail) &&
    isPhoneValid(branchformData.managerPhone) &&
    !errors.branchName &&
    !errors.branchCode &&
    !errors.address &&
    !errors.city &&
    !errors.state &&
    !errors.serviceType &&
    !errors.managerName &&
    !errors.managerEmail &&
    !errors.managerPhone;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!allValid) {
      toast.error("Please fill all required fields correctly.");
      return;
    }
    toast.success("Form submitted successfully!");
    localStorage.setItem("onboard-details", JSON.stringify(branchformData));
    setTimeout(() => nav("/review"), 2000);
  };

  return (
    <BranchContainer onSubmit={handleSubmit}>
      <BoardingLogo>
        <ToastContainer />
        <div className="back">
          <Link to="/organization_onboarding">
            <div
              className="circle"
              onClick={() => nav("/organization_onboarding")}
            >
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
              style={errors.branchName ? { border: "1px solid red" } : {}}
            />
            {errors.branchName && (
              <p style={{ color: "red", fontSize: "14px" }}>
                {errors.branchName}
              </p>
            )}
          </div>
          <div>
            <h4>Branch Code *</h4>
            <input
              type="text"
              name="branchCode"
              placeholder="Input code"
              value={branchformData.branchCode}
              onChange={handleChange}
              style={errors.branchCode ? { border: "1px solid red" } : {}}
            />
            {errors.branchCode && (
              <p style={{ color: "red", fontSize: "14px" }}>
                {errors.branchCode}
              </p>
            )}
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
                style={errors.address ? { border: "1px solid red" } : {}}
              />
            </div>
            {errors.address && (
              <p style={{ color: "red", fontSize: "14px" }}>{errors.address}</p>
            )}
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
              style={errors.city ? { border: "1px solid red" } : {}}
            />
            {errors.city && (
              <p style={{ color: "red", fontSize: "14px" }}>{errors.city}</p>
            )}
          </div>

          <div>
            <h4>State *</h4>
            <input
              type="text"
              name="state"
              placeholder="State"
              value={branchformData.state}
              onChange={handleChange}
              style={errors.state ? { border: "1px solid red" } : {}}
            />
            {errors.state && (
              <p style={{ color: "red", fontSize: "14px" }}>{errors.state}</p>
            )}
          </div>

          <div>
            <h4>Service Type *</h4>
            <input
              type="text"
              name="serviceType"
              placeholder="type"
              value={branchformData.serviceType}
              onChange={handleChange}
              style={errors.serviceType ? { border: "1px solid red" } : {}}
            />
            {errors.serviceType && (
              <p style={{ color: "red", fontSize: "14px" }}>
                {errors.serviceType}
              </p>
            )}
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
                style={errors.managerName ? { border: "1px solid red" } : {}}
              />
            </div>
            {errors.managerName && (
              <p style={{ color: "red", fontSize: "14px" }}>
                {errors.managerName}
              </p>
            )}
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
                style={errors.managerEmail ? { border: "1px solid red" } : {}}
              />
            </div>
            {errors.managerEmail && (
              <p style={{ color: "red", fontSize: "14px" }}>
                {errors.managerEmail}
              </p>
            )}
          </div>

          <div>
            <h4>Manager Phone *</h4>
            <div className="input-holder">
              <MdLocalPhone />
              <input
                type="tel"
                name="managerPhone"
                placeholder="+234 xx xxxx xxxx"
                value={branchformData.managerPhone}
                onChange={handleChange}
                style={errors.managerPhone ? { border: "1px solid red" } : {}}
              />
            </div>
            {errors.managerPhone && (
              <p style={{ color: "red", fontSize: "14px" }}>
                {errors.managerPhone}
              </p>
            )}
          </div>
        </LastSection>
      </FirstSection>

      <Bottomholder>
        <button
          type="submit"
          disabled={!allValid}
          style={
            !allValid ? { backgroundColor: "gray", cursor: "not-allowed" } : {}
          }
        >
          <TbSend /> Submit Onboarding
        </button>
      </Bottomholder>
    </BranchContainer>
  );
};

export default Branch;
