import React from "react";
import "./ExportQrcode.css";
import { IoMdCloseCircle } from "react-icons/io";

const ExportQrcode = ({ close, PropsQrCode }) => {
  // Temporary hardcoded base64 (later you will replace with props.qrCode)
  const qrCode = PropsQrCode;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrCode; // later use props.qrCode
    link.download = "qrcode.png"; // filename
    link.click();
  };

  return (
    <div className="Qr-overlay">
      <div className="Qr-box">
        <IoMdCloseCircle className="close-btn" onClick={() => close(false)} />

        <img src={qrCode} alt="QR Code" />

        <button className="export-btn" onClick={handleDownload}>
          Export as image
        </button>
      </div>
    </div>
  );
};

export default ExportQrcode;
