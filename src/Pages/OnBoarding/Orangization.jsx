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

const Orangization = () => {
  const nav = useNavigate();

  const [formData, setFormData] = React.useState({
    industry: "",
    address: "",
    city: "",
    state: "",

    primaryContact: {
      fullName: "",
      email: "",
      phone: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePrimaryContactChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,

      primaryContact: {
        ...prevData.primaryContact,
        [name]: value,
      },
    }));
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.industry.trim()) {
      return toast.error("Please enter your industry.");
    }
    if (!formData.address.trim()) {
      return toast.error("Please enter your address.");
    }
    if (!formData.city.trim()) {
      return toast.error("Please enter your city.");
    }
    if (!formData.state.trim()) {
      return toast.error("Please enter your state.");
    }
    if (!formData.primaryContact.fullName.trim()) {
      return toast.error("Please enter your full name.");
    }
    if (!validateEmail(formData.primaryContact.email.trim())) {
      return toast.error("Please enter a valid email address.");
    }
    if (
      !/^(?:\+?[0-9]{1,3})?[0]?[1-9][0-9]{6,9}$/.test(
        formData.primaryContact.phone
      )
    ) {
      return toast.error("Phone number must be between 7 to 15 digits.");
    } else {
      toast.success("Form submitted successfully!");
      nav("/branch_onboarding");
    }
  };

  return (
    <OrangizationContainer>
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
      <OnboardingHolder onSubmit={handleSubmit}>
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
                <p>Head Office Address *</p>
                <input
                  type="text"
                  placeholder="123 Main Street"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div>
                <p>Industry/Service type *</p>
                <input
                  type="text"
                  placeholder="Enter service"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                />
              </div>
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
              />
            </div>

            <div>
              <p>State *</p>
              <input
                type="text"
                placeholder="Enter your state"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
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
                  />
                </div>
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
                  />
                </div>
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
                  placeholder="Enter phone number"
                  value={formData.primaryContact.phone}
                  onChange={handlePrimaryContactChange}
                />
              </div>
            </div>
          </div>
        </TextSection>
        <Bottomholder>
          <button type="submit">
            Preview and confirm <FaArrowRightLong />
          </button>
        </Bottomholder>
      </OnboardingHolder>
      <ToastContainer />
    </OrangizationContainer>
  );
};

export default Orangization;
