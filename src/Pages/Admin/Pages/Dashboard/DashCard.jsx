import React from "react";
import { Users } from "lucide-react";
import { LuUsersRound } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { AiOutlineCheckCircle } from "react-icons/ai";

const QueueCard = (props) => {
  const {
    cardValue,
    cardColor,
    cardBgColor,
    iconName: Icon,
    cardData,
    text,
  } = props;

  console.log(`This is the data ${text}`);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <style>{`
        .queue-card {
          // background: linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%);
          border-radius: 24px;
          border: 2px solid #5c6bc0;
          padding: 32px 24px;
          width: 100%;
          max-width: 280px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
          border:"2px solid red";
        }


        .icon-container {
          background: white;
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .percentage-badge {
          color: #00bfa5;
          font-size: 16px;
          font-weight: 600;
          position: absolute;
          top: 32px;
          right: 24px;
        }

        .card-label {
          color: #5f6368;
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 16px;
          letter-spacing: 0.2px;
        }

        .card-value {
          color: #3f51b5;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1;
          margin: 0;
        }

        @media (max-width: 640px) {
          .queue-card {
            max-width: 100%;
            padding: 28px 20px;
          }

          .card-value {
            font-size: 48px;
          }

          .percentage-badge {
            font-size: 14px;
            top: 28px;
            right: 20px;
          }
        }

        @media (max-width: 380px) {
          .queue-card {
            padding: 24px 16px;
          }

          .icon-container {
            width: 48px;
            height: 48px;
            margin-bottom: 20px;
          }

          .card-value {
            font-size: 42px;
          }

          .card-label {
            font-size: 14px;
          }
        }
      `}</style>

      <div
        style={{
          border: `2px solid ${cardColor}`,
          backgroundColor: `${cardBgColor}`,
          // color: `${cardColor}`,
        }}
        className="queue-card"
      >
        <div style={{ position: "relative" }}>
          <div className="icon-container">
            <Users size={28} color="#3f51b5" strokeWidth={2.5} />
          </div>
          <span className="percentage-badge">{cardData}</span>
        </div>

        <div className="card-label">{text}</div>
        <div className="card-value">{cardData}</div>
      </div>
    </div>
  );
};

export default QueueCard;
