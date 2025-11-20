import React, { useState } from "react";
import {
  SidebarContainer,
  Footer,
  MenuItem,
  Menu,
  Logo,
  MenuItem2,
  ToggleButton,
  Overlay,
} from "./Sidebarstyled";
import { useNavigate } from "react-router-dom";
import {
  FiBarChart2,
  FiSettings,
  FiGrid,
  FiLogOut,
  FiServer,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";
import { LuShield } from "react-icons/lu";
import LogoutModal from "../Admin/components/LogoutModal";

const Sidebar = ({ collapsed }) => {
  const nav = useNavigate();
  const setName = localStorage.getItem("Organ_Name");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoutmodal, setLogoutmodal] = useState(false)

  const handleToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOverlayClick = () => {
    setMobileOpen(false);
  };

  const handleMenuItemClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <ToggleButton onClick={handleToggle} mobileOpen={mobileOpen}>
        {mobileOpen ? (
          <FiChevronLeft size={20} />
        ) : (
          <FiChevronRight size={20} />
        )}
      </ToggleButton>
      <Overlay show={mobileOpen} onClick={handleOverlayClick} />
      <SidebarContainer collapsed={collapsed} mobileOpen={mobileOpen}>
        <Logo>
          <div className="logoContainer">
            <div className="logoholder">
              <img
                src="https://res.cloudinary.com/dmqhseusw/image/upload/v1761358599/kwikq_text_only_ykdorm.png"
                className="imagelogo"
                alt="logo"
              />
            </div>
            <p>Admin Panel</p>
          </div>
        </Logo>
        <Menu>
          <MenuItem to="/dashboard/overview" end onClick={handleMenuItemClick}>
            <FiGrid /> Branch Overview
          </MenuItem>
          <MenuItem to="/dashboard/analytics" onClick={handleMenuItemClick}>
            <FiBarChart2 /> Analytics
          </MenuItem>
          {/* <MenuItem to="/dashboard/branch-management" onClick={handleMenuItemClick}>
            <FiServer /> Branch Management
          </MenuItem> */}
          <MenuItem to="/dashboard/settings" onClick={handleMenuItemClick}>
            <FiSettings /> Organization Settings
          </MenuItem>
        </Menu>
        <Footer>
          <div className="orgholder">
            <div className="avater">
              {setName?.toUpperCase().slice(0, 2) || "AU"}
            </div>
            <div className="textorg">
              <p className="admintext">{setName}</p>
              <span className="supertext">
                {" "}
                <LuShield className="shield" /> Admin
              </span>
            </div>
          </div>
          <MenuItem2 onClick={()=> setLogoutmodal(true)}>
            <FiLogOut /> Logout
          </MenuItem2>
        </Footer>
        {logoutmodal && <LogoutModal closing={setLogoutmodal} />}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
