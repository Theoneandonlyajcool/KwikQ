import React from "react";
import "../Styles/LoginModal.css";
import { RiLogoutCircleRLine } from "react-icons/ri";

const LogoutModal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <RiLogoutCircleRLine />
        </div>

        <h2 className="modal-title">Leaving Already?</h2>

        <p className="modal-message">
          Are you sure you want to log out? You will need to log in again to
          continue
        </p>

        <div className="modal-actions">
          <button className="btn-cancel">Cancel</button>
          <button className="btn-logout">Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
