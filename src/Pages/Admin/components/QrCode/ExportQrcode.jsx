import React from "react";
import "./ExportQrcode.css";
import { IoMdCloseCircle } from "react-icons/io";

const ExportQrcode = ({ close, PropsQrCode }) => {
  // keep using the same prop name you passed from the parent
  const qrCode = PropsQrCode;

  // helper to trigger a download from a blob
  const downloadBlob = (blob, filename = "qrcode.png") => {
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a); // firefox needs it in DOM
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(blobUrl), 1500);
  };

  // single handleDownload function (no nested duplicates)
  const handleDownload = async () => {
    try {
      const src = qrCode;
      if (!src) return alert("No QR source available.");

      // 1) If data URL (base64)
      if (/^data:/i.test(src)) {
        const res = await fetch(src); // fetch data: to get a Response we can .blob()
        const blob = await res.blob();
        downloadBlob(blob, "qrcode.png");
        return;
      }

      // 2) If http/https URL (Cloudinary or other)
      if (/^https?:\/\//i.test(src)) {
        // If Cloudinary is public this should work. If protected, you might need credentials.
        const res = await fetch(src, {
          mode: "cors" /*, credentials: "include" */,
        });
        if (!res.ok) throw new Error(`Image fetch failed: ${res.status}`);
        const blob = await res.blob();
        const filename = src.split("/").pop().split("?")[0] || "qrcode.png";
        downloadBlob(blob, filename);
        return;
      }

      // 3) Fallback: open in new tab
      const a = document.createElement("a");
      a.href = src;
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      console.error("Download failed:", err);
      alert(
        "Download failed — check console. Common causes: CORS or auth required for the image."
      );
    }
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
