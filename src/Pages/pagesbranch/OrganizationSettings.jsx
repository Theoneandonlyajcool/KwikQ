import React, { useState } from "react";
import { OrganizationSettingsContainer } from "./OrganizationSettingsstyled";
import { ProfileContainer } from "./ProfileStyle";
import { BillingContainer } from "./BillingStyle";
import { SecurityContainer } from "./SecurityStyle";
import { UsersRolesContainer } from "./UsersRolesStyle";
import { MdBusiness } from "react-icons/md";
import { MdSave } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdCreditCard } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdShield } from "react-icons/md";
import { MdError } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { MdPersonAdd } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import "../../Styles/cardModal.css";
import axios from "axios";
import CurrentDateTime from "./CurrentDateTime";

const OrganizationSettings = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [model, setModel] = useState(false)
  const nav = useNavigate();
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const token = localStorage.getItem("user_token");
  const orgId = localStorage.getItem("user_ID");


  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolder: "",
    cardType: "",
    expires: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({
    cardNumber: "",
    cardHolder: "",
    cardType: "",
    expires: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "cardNumber" || name === "cvv") {
      if (!/^\d*$/.test(value)) return; 
    }
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const allFilled = 
  cardDetails.cardNumber.trim() &&
  cardDetails.cardHolder.trim() &&
  cardDetails.cardType &&
  cardDetails.expires &&
  cardDetails.cvv.trim();


  const handleSubmit = () => {
    let newErrors = {};
    if (!cardDetails.cardNumber.trim() || cardDetails.cardNumber.length !== 16) {
      newErrors.cardNumber = "Valid 16-digit card number is required";
    }
    if (!cardDetails.cardHolder.trim()) {
      newErrors.cardHolder = "Card holder name is required";
    }
    if (!cardDetails.cardType) {
      newErrors.cardType = "Card type is required";
    }
    if (!cardDetails.expires) {
      newErrors.expires = "Expiration date is required";
    }
    if (!cardDetails.cvv.trim() || cardDetails.cvv.length !== 3) {
      newErrors.cvv = "Valid 3-digit CVV is required";
    }

    setErrors(newErrors);

    // if (Object.keys(newErrors).length > 0) {
    //   console.log("Validation errors:", newErrors);
    //   return;
    // }

    console.log("Card details:", cardDetails);
  };

  const addCard = async ()=>{
    handleSubmit()
    try {
      const res = await axios.post(`${BaseUrl}/api/v1/billing/${orgId}/cards`, cardDetails, {headers: 
        {"Content-Type": "application/json", Authorization: Bearer `${token}`}
      })
      console.log(res)
      toast.success(res?.data?.message)
        setTimeout(() => {
          // nav("/dashboard");
        }, 3000);
    } catch (error) {
      console.log("add card error", error);
      toast.error(err?.response?.data?.message);
    }
  }


   const deleteOrganization = async () => {
    try {
      const res = await axios.delete(`${BaseUrl}/api/v1/deleteorganization/${orgId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("DeleteOrganization", res);
      setOneBranchData(res?.data?.data); 
      toast.success(res?.data?.message)
    } catch (error) {
      console.log("DeleteOrganization", error)
      toast.error(error?.response?.data?.message)
    }
  }

  const tabs = ["Profile", "Users & Roles", "Security", "Billing"];

  const organizationInfo = {
    name: "ABC Financial Services",
    industryType: "Bank/Financial Services",
    contactEmail: "contact@abcfinancial.ng",
    contactPhone: "+234 800 123 4567",
    website: "www.abcfinancial.ng",
    taxId: "RC123456",
    address: "123 Herbert Macaulay Way, Central Business District, Abuja, FCT",
    description: "ABC Financial Services is a leading provider of banking and financial solutions across Nigeria.",
  };

  const subscriptionPlan = {
    name: "Enterprise Plan",
    status: "Active",
    features: "Unlimited branches • Advanced analytics • Priority support",
    price: "₦150,000/month",
  };

  const paymentMethod = {
    type: "Visa",
    cardNumber: "•••• •••• •••• 4242",
    cardHolder: "ABC Financial Services",
    expires: "12/25",
  };

  const billingHistory = [
    { date: "Oct 1, 2024", invoice: "Invoice #INV-001", amount: "₦150,000", status: "Paid" },
    { date: "Sep 1, 2024", invoice: "Invoice #INV-002", amount: "₦150,000", status: "Paid" },
    { date: "Aug 1, 2024", invoice: "Invoice #INV-003", amount: "₦150,000", status: "Paid" },
  ];

  const securitySettings = [
    // {
    //   title: "Two-Factor Authentication (2FA)",
    //   description: "Require 2FA for all admin and manager accounts",
    //   enabled: true,
    // },
    // {
    //   title: "IP Whitelisting",
    //   description: "Restrict admin access to specific IP addresses",
    //   enabled: false,
    // },
    {
      title: "Login Notifications",
      description: "Email alerts for new login attempts",
      enabled: true,
    },
    {
      title: "Audit Logging",
      description: "Track all administrative actions",
      enabled: true,
    },
  ];

  const users = [
    { name: "Jane Okafor", email: "jane.okafor@kwikq.ng", role: "Branch Manager", location: "Victoria Island", status: "active", initials: "JO" },
    { name: "Chidi Eze", email: "chidi.eze@kwikq.ng", role: "Branch Manager", location: "Ikeja", status: "active", initials: "CE" },
    { name: "Amina Bello", email: "amina.bello@kwikq.ng", role: "Branch Manager", location: "Abuja Central", status: "active", initials: "AB" },
    { name: "Emmanuel Nwankwo", email: "emmanuel.n@kwikq.ng", role: "Branch Manager", location: "Port Harcourt", status: "active", initials: "EN" },
    { name: "Fatima Yusuf", email: "fatima.y@kwikq.ng", role: "Branch Manager", location: "Kano", status: "inactive", initials: "FY" },
  ];

  const rolePermissions = [
    {
      role: "Super Admin",
      description: "Complete access to all features including organization settings, billing, and all branches",
      access: "Full Access",
    },
    {
      role: "Branch Manager",
      description: "Access to assigned branch only. Can manage queues, view analytics, and configure branch settings",
      access: "Limited Access",
    },
    {
      role: "Staff Member",
      description: "Can serve customers and view queue status. No access to settings or analytics",
      access: "View Only",
    },
  ];

  return (
    <OrganizationSettingsContainer>
      <div className="organization_settings_wrapper">
        <div className="header_section">
          <div className="header_text">
            <h1 className="main_title">Organization Settings</h1>
            <p className="sub_title"><CurrentDateTime /></p>
          </div>
        </div>

        <div className="settings_header_section">
          <div className="settings_header_content">
            <div className="settings_header_left">
              <h2 className="settings_title">Organization Settings</h2>
              <p className="settings_subtitle">Manage your organization configuration and preferences</p>
            </div>
            <button className="save_changes_btn">
              <MdSave className="save_icon" />
              Save Changes
            </button>
          </div>
        </div>

        <div className="tabs_section">
          <div className="tabs_wrapper">
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`tab_item ${activeTab === tab ? "active_tab" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        {/* Profile Tab */}
        <ProfileContainer className={activeTab === "Profile" ? "active" : ""}>
          <div className="organization_info_section">
            <div className="section_header">
              <div className="section_icon_wrapper">
                <MdBusiness className="section_icon" />
              </div>
              <div className="section_header_text">
                <h2 className="section_title">Organization Information</h2>
                <p className="section_subtitle">Basic details about your organization</p>
              </div>
            </div>

            <div className="info_grid">
              <div className="info_row">
                <div className="info_field">
                  <label className="field_label">Organization Name</label>
                  <div className="field_value_input">
                    <input
                      type="text"
                      className="field_input"
                      value={organizationInfo.name}
                      readOnly
                    />
                  </div>
                </div>
                <div className="info_field">
                  <label className="field_label">Industry Type</label>
                  <div className="field_value_dropdown">
                    <input
                      type="text"
                      className="field_input"
                      value={organizationInfo.industryType}
                      readOnly
                    />
                    <IoIosArrowDown className="dropdown_icon" />
                  </div>
                </div>
              </div>

              <div className="info_row">
                <div className="info_field">
                  <label className="field_label">Contact Email</label>
                  <div className="field_value_input">
                    <MdEmail className="field_icon" />
                    <input
                      type="email"
                      className="field_input with_icon"
                      value={organizationInfo.contactEmail}
                      readOnly
                    />
                  </div>
                </div>
                <div className="info_field">
                  <label className="field_label">Contact Phone</label>
                  <div className="field_value_input">
                    <MdPhone className="field_icon" />
                    <input
                      type="text"
                      className="field_input with_icon"
                      value={organizationInfo.contactPhone}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="info_row">
                <div className="info_field">
                  <label className="field_label">Website</label>
                  <div className="field_value_input">
                    <MdLanguage className="field_icon" />
                    <input
                      type="text"
                      className="field_input with_icon"
                      value={organizationInfo.website}
                      readOnly
                    />
                  </div>
                </div>
                <div className="info_field">
                  <label className="field_label">Tax ID / Registration Number</label>
                  <div className="field_value_input">
                    <input
                      type="text"
                      className="field_input"
                      value={organizationInfo.taxId}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="info_row full_width">
                <div className="info_field">
                  <label className="field_label">Head Office Address</label>
                  <div className="field_value_input">
                    <MdLocationOn className="field_icon" />
                    <input
                      type="text"
                      className="field_input with_icon"
                      value={organizationInfo.address}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="info_row full_width">
                <div className="info_field">
                  <label className="field_label">Organization Description</label>
                  <div className="field_value_textarea">
                    <textarea
                      className="field_textarea"
                      value={organizationInfo.description}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="subscription_plan_section">
            <div className="section_header_simple">
              <h2 className="section_title">Subscription Plan</h2>
            </div>

            <div className="subscription_card">
              <div className="subscription_card_content">
                <div className="subscription_info">
                  <div className="subscription_name_badge">
                    <span className="subscription_name">{subscriptionPlan.name}</span>
                    <span className="subscription_status">{subscriptionPlan.status}</span>
                  </div>
                  <p className="subscription_features">{subscriptionPlan.features}</p>
                  <p className="subscription_price">{subscriptionPlan.price}</p>
                </div>
                <button className="change_plan_btn"  onClick={()=> nav("/admin_landingpage")}>Change Plan</button>
              </div>
            </div>
          </div>
        </ProfileContainer>

        {/* Billing Tab */}
        <BillingContainer className={activeTab === "Billing" ? "active" : ""}>
               
          <div className="billing_info_section">
            <div className="section_header">
              <div className="section_icon_wrapper">
                <MdCreditCard className="section_icon" />
              </div>
              <div className="section_header_text">
                <h2 className="section_title">Billing Information</h2>
                <p className="section_subtitle">Manage payment methods and invoices</p>
              </div>
            </div>

             {model ? (
                <div
                style={{
                  backgroundColor: "#ffffff",
                  height: "60vh",
                  width: "100%",
                  // position: "fixed",
                  top: "0",
                  bottom: "0",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <div style={{width: "90%", height: "100%", backgroundColor: "#19223058", borderRadius: "5px", padding: "10px" }}>
                  <div className="addcardtext">
                    <h3>Add Card Details</h3>
                    <span onClick={() => setModel(false)}><IoMdClose  style={{ color: "red", border: "none"}}/></span>
                  </div>
                  <div className="allinputcard">
                    <div className="twoinput">
                      <label htmlFor="cardNumber">Card Number</label>
                      <input
                        type="text" 
                        name="cardNumber"
                        placeholder="•••• •••• •••• 4242"
                        className="figuerandname"
                        value={cardDetails.cardNumber}
                        onChange={handleChange}
                        maxLength={16}
                        style={errors.cardNumber ? { border: "1px solid red" } : {}}
                      />
                      {errors.cardNumber && <p style={{ color: "red", fontSize: "14px" }}>{errors.cardNumber}</p>}

                      <label htmlFor="cardHolder">Card Holder</label>
                      <input
                        type="text"
                        name="cardHolder"
                        placeholder="ABC Financial Services"
                        className="figuerandname"
                        value={cardDetails.cardHolder}
                        onChange={handleChange}
                        style={errors.cardHolder ? { border: "1px solid red" } : {}}
                      />
                      {errors.cardHolder && <p style={{ color: "red", fontSize: "14px" }}>{errors.cardHolder}</p>}
                    </div>

                    <div className="threeinput">
                      <div className="selectdiv">
                        <label htmlFor="cardType">Card Type</label>
                        <select
                          name="cardType"
                          className="seleteandrest1"
                          value={cardDetails.cardType}
                          onChange={handleChange}
                          style={errors.cardType ? { border: "1px solid red" } : {}}
                        >
                          <option value="">Card Type</option>
                          <option value="visa">Visa</option>
                          <option value="Master-Card">Master-Card</option>
                          <option value="kora">Kora</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.cardType && <p style={{ color: "red", fontSize: "14px" }}>{errors.cardType}</p>}
                      </div>

                      <p><label htmlFor="expires">Expires</label></p>
                      <input
                        type="date"
                        name="expires"
                        // placeholder="12/25"
                        className="seleteandrest"
                        value={cardDetails.expires}
                        onChange={handleChange}
                        style={errors.expires ? { border: "1px solid red" } : {}}
                      />
                      {errors.expires && <p style={{ color: "red", fontSize: "14px" }}>{errors.expires}</p>}

                      <p><label htmlFor="cvv">CVV</label></p>
                      <input
                        type="text" 
                        name="cvv"
                        placeholder="123"
                        className="seleteandrest"
                        value={cardDetails.cvv}
                        onChange={handleChange}
                        maxLength={3}
                        style={errors.cvv ? { border: "1px solid red" } : {}}
                      />
                      {errors.cvv && <p style={{ color: "red", fontSize: "14px" }}>{errors.cvv}</p>}
                    </div>
                  </div>
                  <div className="savechangesmodel">
                    <button type="button" disabled={!allFilled} style={
                        !allFilled
                        ? { backgroundColor: "gray", cursor: "not-allowed" }
                        : {}
                    } onClick={()=> addCard()}>
                      Add Card
                    </button>
                  </div>
                </div>
              </div>
              ) :   <div className="payment_card">
              <div className="payment_card_header">
                <span className="payment_method_label">Payment Method</span>
                <span className="payment_type">{paymentMethod.type}</span>
              </div>
              <div className="payment_card_number">{paymentMethod.cardNumber}</div>
              <div className="payment_card_footer">
                <div className="card_holder_section">
                  <span className="card_holder_label">Card Holder</span>
                  <span className="card_holder_name">{paymentMethod.cardHolder}</span>
                </div>
                <div className="card_expires_section">
                  <span className="card_expires_label">Expires</span>
                  <span className="card_expires_date">{paymentMethod.expires}</span>
                </div>
              </div>
            </div>}

            <div className="payment_actions">
              <button className="update_card_btn">
                <MdEdit className="btn_icon" />
                Update Card
              </button>

             
              



              <button className="add_card_btn" onClick={()=> setModel(true)}>
                <MdAdd className="btn_icon" />
                Add Card
              </button>
            </div>
          </div>

          <div className="billing_history_section">
            <div className="section_header_simple">
              <h2 className="section_title">Billing History</h2>
            </div>

            <div className="billing_history_list">
              {billingHistory.map((bill, index) => (
                <div key={index} className="billing_history_item">
                  <div className="billing_item_left">
                    <IoCheckmarkCircle className="billing_check_icon" />
                    <div className="billing_item_info">
                      <p className="billing_date">{bill.date}</p>
                      <p className="billing_invoice">{bill.invoice}</p>
                    </div>
                  </div>
                  <div className="billing_item_right">
                    <span className="billing_amount">{bill.amount}</span>
                    <span className="billing_status">{bill.status}</span>
                    <button className="download_btn">Download</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </BillingContainer>

        {/* Security Tab */}
        <SecurityContainer className={activeTab === "Security" ? "active" : ""}>
          <div className="security_settings_section">
            <div className="section_header">
              <div className="section_icon_wrapper">
                <MdShield className="section_icon" />
              </div>
              <div className="section_header_text">
                <h2 className="section_title">Security Settings</h2>
                <p className="section_subtitle">Protect your organization and data</p>
              </div>
            </div>

            <div className="security_list">
              {securitySettings.map((setting, index) => (
                <div key={index} className="security_item">
                  <div className="security_item_info">
                    <h3 className="security_title">{setting.title}</h3>
                    <p className="security_description">{setting.description}</p>
                  </div>
                  {setting.title === "Session Timeout" ? (
                    <div className="session_timeout_dropdown">
                      <span className="timeout_value">30 minutes</span>
                      <IoIosArrowDown className="dropdown_icon" />
                    </div>
                  ) : (
                    <label className="toggle_switch">
                      <input type="checkbox" checked={setting.enabled} readOnly />
                      <span className="toggle_slider"></span>
                    </label>
                  )}
                </div>
              ))}
              <div className="security_item">
                <div className="security_item_info">
                  <h3 className="security_title">Session Timeout</h3>
                  <p className="security_description">Automatically log out inactive users</p>
                </div>
                <div className="session_timeout_dropdown">
                  <span className="timeout_value">30 minutes</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="danger_zone_section">
            <div className="danger_header">
              <MdError className="danger_icon" />
              <span className="danger_title">Delete Organization</span>
            </div>
            <p className="danger_text">
              Permanently delete your organization and all associated data. This action cannot be undone.
            </p>
            <button className="delete_organization_btn" onClick={()=> deleteOrganization()}>
              <MdDelete className="delete_icon" />
              Delete Organization
            </button>
          </div>
        </SecurityContainer>

        {/* Users & Roles Tab */}
        <UsersRolesContainer className={activeTab === "Users & Roles" ? "active" : ""}>
          <div className="organization_users_section">
            <div className="section_header">
              <div className="section_icon_wrapper">
                <IoMdPeople className="section_icon" />
              </div>
              <div className="section_header_text">
                <h2 className="section_title">Organization Users</h2>
                <p className="section_subtitle">Manage users and their permissions</p>
              </div>
              <button className="invite_user_btn">
                <MdPersonAdd className="btn_icon" />
                Invite User
              </button>
            </div>

            <div className="users_list">
              {users.map((user, index) => (
                <div key={index} className="user_item">
                  <div className="user_item_left">
                    <div className="user_avatar">{user.initials}</div>
                    <div className="user_info">
                      <h3 className="user_name">{user.name}</h3>
                      <p className="user_email">{user.email}</p>
                    </div>
                  </div>
                  <div className="user_item_right">
                    <div className="user_role_location">
                      <span className="user_role">{user.role}</span>
                      <span className="user_location">{user.location}</span>
                    </div>
                    <span className={`user_status ${user.status}`}>{user.status}</span>
                    <button className="edit_user_btn">
                      <MdModeEdit className="edit_icon" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="role_permissions_section">
            <div className="section_header_simple">
              <h2 className="section_title">Role Permissions</h2>
            </div>

            <div className="permissions_list">
              {rolePermissions.map((permission, index) => (
                <div key={index} className="permission_item">
                  <div className="permission_info">
                    <h3 className="permission_role">{permission.role}</h3>
                    <p className="permission_description">{permission.description}</p>
                  </div>
                  <span className={`permission_access ${permission.access.toLowerCase().replace(" ", "_")}`}>
                    {permission.access}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </UsersRolesContainer>
      </div>
    </OrganizationSettingsContainer>
  );
};

export default OrganizationSettings;