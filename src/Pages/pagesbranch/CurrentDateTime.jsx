import React, { useState, useEffect } from "react";

const CurrentDateTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(now);
      setDateTime(formattedDate);
    };

    updateDateTime(); 
    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span style={{ fontSize: "14px", color: "#333" }}>
      {dateTime || "Loading..."}
    </span>
  );
};

export default CurrentDateTime;