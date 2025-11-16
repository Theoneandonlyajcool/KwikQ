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

        /* Media Queries for Responsive Design */
        @media (max-width: 768px) {
          .queue-card {
            max-width: 100%;
            padding: 24px 20px;
            border-radius: 20px;
          }
          
          .card-value {
            font-size: 2.5rem;
          }
          
          .card-label {
            font-size: 15px;
            margin-bottom: 12px;
          }
          
          .icon-container {
            width: 52px;
            height: 52px;
            margin-bottom: 20px;
          }
          
          .percentage-badge {
            font-size: 14px;
            top: 24px;
            right: 20px;
          }
        }

        @media (max-width: 480px) {
          .queue-card {
            padding: 20px 16px;
            border-radius: 18px;
          }
          
          .card-value {
            font-size: 2rem;
          }
          
          .card-label {
            font-size: 14px;
            margin-bottom: 10px;
          }
          
          .icon-container {
            width: 48px;
            height: 48px;
            margin-bottom: 16px;
          }
          
          .percentage-badge {
            font-size: 13px;
            top: 20px;
            right: 16px;
          }
        }

        @media (min-width: 1024px) {
          .queue-card {
            max-width: 300px;
            padding: 36px 28px;
          }
          
          .card-value {
            font-size: 3rem;
          }
          
          .card-label {
            font-size: 17px;
          }
          
          .icon-container {
            width: 60px;
            height: 60px;
            margin-bottom: 28px;
          }
        }

        @media (min-width: 1440px) {
          .queue-card {
            max-width: 320px;
            padding: 40px 32px;
          }
          
          .card-value {
            font-size: 3.5rem;
          }
        }

        /* Tablet specific adjustments */
        @media (min-width: 769px) and (max-width: 1023px) {
          .queue-card {
            max-width: 260px;
            padding: 28px 22px;
          }
          
          .card-value {
            font-size: 2.75rem;
          }
        }

        /* Landscape mobile optimization */
        @media (max-height: 500px) and (orientation: landscape) {
          .queue-card {
            padding: 20px 16px;
          }
          
          .icon-container {
            width: 44px;
            height: 44px;
            margin-bottom: 16px;
          }
          
          .card-value {
            font-size: 2rem;
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
