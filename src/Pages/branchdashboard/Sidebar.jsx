import React, { useEffect } from "react";
import {
  SidebarContainer,
  Footer,
  MenuItem,
  Menu,
  Logo,
  MenuItem2,
} from "./Sidebarstyled";
import { useNavigate } from "react-router-dom";
import {
  FiBarChart2,
  FiSettings,
  FiGrid,
  FiLogOut,
  FiServer,
} from "react-icons/fi";
import { LuShield } from "react-icons/lu";

const Sidebar = ({ collapsed }) => {
  const nav = useNavigate();
  const setName = localStorage.getItem("Organ_Name");

  return (
    <SidebarContainer collapsed={collapsed}>
      <Logo>
        <div className="logoContainer">
          <div className="logoholder">
            <img
              src="https://res.cloudinary.com/dmqhseusw/image/upload/v1761358599/kwikq_text_only_ykdorm.png"
              className="imagelogo"
              alt="logo"
            />
          </div>

          <p>Super Admin Panel</p>
        </div>
      </Logo>
      <Menu>
        <MenuItem to="/dashboard/overview" end>
          <FiGrid /> Branch Overview
        </MenuItem>
        <MenuItem to="/dashboard/analytics">
          <FiBarChart2 /> Analytics
        </MenuItem>
        {/* <MenuItem to="/dashboard/allbranchview">
          <FiServer /> Branch Details
        </MenuItem> */}
        {/* <MenuItem to="/dashboard/branch-management">
          <FiServer /> Branch Management
        </MenuItem> */}
        <MenuItem to="/dashboard/settings">
          <FiSettings /> Organization Settings
        </MenuItem>
      </Menu>
      <Footer>
        <div className="orgholder">
          <div className="avater">
            {/* {setName.toUpperCase().slice(0, 2)} */}
            au
          </div>
          <div className="textorg">
            <p className="admintext">
              {/* {setName.toUpperCase()} */}
              Name
            </p>
            <span className="supertext">
              {" "}
              <LuShield className="shield" /> Super Admin
            </span>
          </div>
        </div>
        <MenuItem2 to="/">
          <FiLogOut /> Logout
        </MenuItem2>
      </Footer>
    </SidebarContainer>
  );
};
export default Sidebar;
