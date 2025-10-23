// import { MdDescription } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { BsQrCodeScan } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuChartColumnIncreasing } from "react-icons/lu";
import { TbBackground } from "react-icons/tb";

export const CardsDisplay = [
  {
    id: 1,
    icons: <IoTimeOutline />,
    Title: "Real-time Queue Monitoring ",
    Description:
      "Track queue status, wait times, and customer flow instantly with real-time data, helping businesses improve efficiency and reduce service delays.",
    backgroundcolor: "#009689",
  },

  {
    id: 2,
    icons: <BsQrCodeScan />,
    Title: "Check-In with QR Code",
    Description:
      "Easily add customers to the queue by scanning a unique QR code. This eliminates manual entry, speeds up the check-in process, and ensures accuracy for both staff and customers.",
    backgroundcolor: "#5EA500",
  },

  {
    id: 3,
    icons: <IoMdNotificationsOutline />,
    Title: "Notification Alerts (via mail)",
    Description:
      "Easily add customers to the queue by scanning a unique QR code. This eliminates manual entry, speeds up the check-in process, and ensures accuracy for both staff and customers.",
    backgroundcolor: "#0092BB",
  },

  {
    id: 4,
    icons: <LuChartColumnIncreasing />,
    Title: " Analytics & Data Insights",
    Description:
      "Gain valuable insights with real-time analytics on customer flow, wait times, and service performance. Track trends, identify bottlenecks, and make data-driven decisions to improve operational efficiency.",
    backgroundcolor: "#009966",
  },
];
