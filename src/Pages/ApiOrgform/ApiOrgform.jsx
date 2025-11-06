import React, { useState } from "react";
import {
  ApiOrgfromContainer,
  BoardingLogo,
  BoardingTop,
  OnboardingHolder,
  TextSection,
  Bottomholder,
} from "./ApiOrgformStyle.jsx";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  HiOutlineBuildingOffice,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { MdLocalPhone } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import "react-toastify/dist/ReactToastify.css";

const isEmailValid = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
};

const isPhoneValid = (phone) => {
  const phonePattern = /^(?:0)[7-9][0-1]\d{8}$/;
  return phonePattern.test(phone);
};

const ApiOrgform = () => {
  const nav = useNavigate();
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const orgId = localStorage.getItem("user_ID");
  const token = localStorage.getItem("user_token");

  const [formData, setFormData] = useState({
    industryServiceType: "",
    headOfficeAddress: "",
    city: "",
    state: "",
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    industryServiceType: "",
    headOfficeAddress: "",
    city: "",
    state: "",
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    let message = "";

    if (!value.trim()) {
      message = "This field is required.";
    } else if (name === "emailAddress" && !isEmailValid(value)) {
      message = "Invalid email format.";
    } else if (name === "phoneNumber" && !isPhoneValid(value)) {
      message = "Invalid Nigerian phone format. Use 080 xxxx xxxx";
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const allValid =
    formData.industryServiceType.trim() &&
    formData.headOfficeAddress.trim() &&
    formData.city.trim() &&
    formData.state.trim() &&
    formData.fullName.trim() &&
    formData.emailAddress.trim() &&
    formData.phoneNumber.trim() &&
    isEmailValid(formData.emailAddress) &&
    isPhoneValid(formData.phoneNumber) &&
    !errors.industryServiceType &&
    !errors.headOfficeAddress &&
    !errors.city &&
    !errors.state &&
    !errors.fullName &&
    !errors.emailAddress &&
    !errors.phoneNumber;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!allValid) {
      toast.error("Please fill all required fields correctly.");
      return;
    }

    console.log("Submitting:", formData);

    try {
      const res = await axios.patch(
        `${BaseUrl}/api/v1/organizations/${orgId}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response:", res.data);
      toast.success(res?.data?.message || "Organization updated successfully!");

      setTimeout(() => {
        nav("/admin_dashboard");
      }, 3000);
    } catch (err) {
      console.log("Error:", err);
      toast.error(err?.response?.data?.message || "Submission failed!");
    } finally {
      setFormData({
        industryServiceType: "",
        headOfficeAddress: "",
        city: "",
        state: "",
        fullName: "",
        emailAddress: "",
        phoneNumber: "",
      });
    }
  };

  return (
    <ApiOrgfromContainer onSubmit={handleSubmit}>
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

          <div className="InputHolder">
            <div>
              <p>Head Office Address *</p>
              <input
                type="text"
                placeholder="123 Main Street"
                name="headOfficeAddress"
                value={formData.headOfficeAddress}
                onChange={handleChange}
                style={
                  errors.headOfficeAddress ? { border: "1px solid red" } : {}
                }
              />
              {errors.headOfficeAddress && (
                <p style={{ color: "red", fontSize: "14px" }}>
                  {errors.headOfficeAddress}
                </p>
              )}
            </div>
            <div>
              <p>Industry/Service type *</p>
              <input
                type="text"
                placeholder="Enter service"
                name="industryServiceType"
                value={formData.industryServiceType}
                onChange={handleChange}
                style={
                  errors.industryServiceType ? { border: "1px solid red" } : {}
                }
              />
              {errors.industryServiceType && (
                <p style={{ color: "red", fontSize: "14px" }}>
                  {errors.industryServiceType}
                </p>
              )}
            </div>
          </div>

          <div className="InputHolder">
            <div>
              <p>City *</p>
              <input
                type="text"
                placeholder="Enter your city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                style={errors.city ? { border: "1px solid red" } : {}}
              />
              {errors.city && (
                <p style={{ color: "red", fontSize: "14px" }}>{errors.city}</p>
              )}
            </div>
            <div>
              <p>State *</p>
              <input
                type="text"
                placeholder="Enter your state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                style={errors.state ? { border: "1px solid red" } : {}}
              />
              {errors.state && (
                <p style={{ color: "red", fontSize: "14px" }}>{errors.state}</p>
              )}
            </div>
          </div>

          <div className="SecondInputHolder">
            <div className="primary">
              <p>Primary Contact Person</p>
            </div>

            <div className="LastInputHolder">
              <div>
                <p>Full Name *</p>
                <div className="input_holder">
                  <GoPerson />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    style={errors.fullName ? { border: "1px solid red" } : {}}
                  />
                </div>
                {errors.fullName && (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <p>Email Address *</p>
                <div className="input_holder">
                  <MdOutlineMail />
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    style={
                      errors.emailAddress ? { border: "1px solid red" } : {}
                    }
                  />
                </div>
                {errors.emailAddress && (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {errors.emailAddress}
                  </p>
                )}
              </div>
            </div>

            <div>
              <p>Phone Number *</p>
              <div className="input_holder">
                <MdLocalPhone />
                <input
                  type="tel"
                  name="phoneNumber"
                  className="Number"
                  placeholder="080 xxxx xxxx"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  style={errors.phoneNumber ? { border: "1px solid red" } : {}}
                />
              </div>
              {errors.phoneNumber && (
                <p style={{ color: "red", fontSize: "14px" }}>
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>
        </TextSection>

        <Bottomholder>
          <button
            type="submit"
            disabled={!allValid}
            style={
              !allValid
                ? { backgroundColor: "gray", cursor: "not-allowed" }
                : {}
            }
          >
            Preview and confirm <FaArrowRightLong />
          </button>
        </Bottomholder>
      </OnboardingHolder>
      <ToastContainer />
    </ApiOrgfromContainer>
  );
};

export default ApiOrgform;
