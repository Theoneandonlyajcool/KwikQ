import React from "react";
import {
  OrangizationContainer,
  BoardingLogo,
  BoardingTop,
  OnboardingHolder,
  TextSection,
  Bottomholder,
} from "./OrangizationStyle";
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
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Orangization = () => {
  const nav = useNavigate();

  const [formData, setFormData] = React.useState({
    address: "",
    industry: "",
    city: "",
    state: "",
    primaryContact: {
      fullName: "",
      email: "",
      phone: "",
    },
  });

  const [errors, setErrors] = React.useState({
    address: "",
    industry: "",
    city: "",
    state: "",
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    let message = "";

    if (!value.trim()) {
      message = "This field is required.";
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handlePrimaryContactChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      primaryContact: {
        ...prev.primaryContact,
        [name]: value,
      },
    }));

    let message = "";

    if (!value.trim()) {
      message = "This field is required.";
    } else if (name === "email") {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(value)) {
        message = "Invalid email format.";
      }
    } else if (name === "phone") {
      const phonePattern = /^(?:0)[7-9][0-1]\d{8}$/;
      if (!phonePattern.test(value)) {
        message = "Invalid Nigerian phone format. Use 080 xxxx xxxx";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const allValid =
    formData.address.trim() &&
    formData.industry.trim() &&
    formData.city.trim() &&
    formData.state.trim() &&
    formData.primaryContact.fullName.trim() &&
    formData.primaryContact.email.trim() &&
    formData.primaryContact.phone.trim() &&
    !errors.address &&
    !errors.industry &&
    !errors.city &&
    !errors.state &&
    !errors.fullName &&
    !errors.email &&
    !errors.phone;

  const BaseURl = import.meta.env.VITE_API_BASE_URL;
  const ID = sessionStorage.getItem("user-recog");
  const token = localStorage.getItem("User");

  const CreateBranch = async () => {
    try {
      const res = await axios.patch(
        `https://kwikq-1.onrender.com/api/v1/organizations/${ID}`,
        {
          industryServiceType: formData.industry,
          headOfficeAddress: formData.address,
          city: formData.city,
          state: formData.state,
          fullName: formData.primaryContact.fullName,
          phoneNumber: formData.primaryContact.phone,
          email: formData.primaryContact.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.setItem(
        "organization-data",
        JSON.stringify({
          industryServiceType: formData.industry,
          headOfficeAddress: formData.address,
          city: formData.city,
          state: formData.state,
          fullName: formData.primaryContact.fullName,
          email: formData.primaryContact.email,
          phoneNumber: formData.primaryContact.phone,
        })
      );

      toast.success(res?.data?.message);
      setTimeout(() => {
        nav("/branch_onboarding");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!allValid) {
      toast.error("Please fill all required fields correctly.");
      return;
    }

    await CreateBranch();
  };

  return (
    <OrangizationContainer>
      <ToastContainer />
      <BoardingLogo>
        <div className="back">
          <div className="circle" onClick={() => nav(-1)}>
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
          <p style={{ width: "150px" }}>Review & Confirm</p>
        </div>
      </BoardingTop>

      <OnboardingHolder onSubmit={handleFormSubmit}>
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
                name="address"
                value={formData.address}
                onChange={handleChange}
                style={errors.address ? { border: "1px solid red" } : {}}
              />
              {errors.address && (
                <p style={{ color: "red", fontSize: "14px" }}>
                  {errors.address}
                </p>
              )}
            </div>

            <div>
              <p>Industry/Service type *</p>
              <input
                type="text"
                placeholder="Enter service"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                style={errors.industry ? { border: "1px solid red" } : {}}
              />
              {errors.industry && (
                <p style={{ color: "red", fontSize: "14px" }}>
                  {errors.industry}
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
                    value={formData.primaryContact.fullName}
                    onChange={handlePrimaryContactChange}
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
                    name="email"
                    value={formData.primaryContact.email}
                    onChange={handlePrimaryContactChange}
                    style={errors.email ? { border: "1px solid red" } : {}}
                  />
                </div>
                {errors.email && (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {errors.email}
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
                  name="phone"
                  className="Number"
                  placeholder="080 xxxx xxxx"
                  value={formData.primaryContact.phone}
                  onChange={handlePrimaryContactChange}
                  style={errors.phone ? { border: "1px solid red" } : {}}
                />
              </div>
              {errors.phone && (
                <p style={{ color: "red", fontSize: "14px" }}>{errors.phone}</p>
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
    </OrangizationContainer>
  );
};

export default Orangization;
