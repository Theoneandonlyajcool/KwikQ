import React from "react";
import { IoMdLogOut } from "react-icons/io";
import "./LogoutModal.css";
import { useNavigate } from "react-router-dom";

const LogoutModal = ({ closing }) => {
  const nav = useNavigate();
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-icon">
          <IoMdLogOut size={40} />
        </div>

        <h2 className="modal-title">Leaving Already?</h2>
        <p className="modal-text">
          Are you sure you want to log out? You will need to log in again to
          continue
        </p>

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={() => closing(false)}>
            Cancel
          </button>
          <button className="logout-btn" onClick={() => nav("/")}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
