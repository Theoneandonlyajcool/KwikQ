import React from "react";

const QueueCard = () => {
  return (
    <>
      <style>{`
        .queue-card {
          background: white;
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .queue-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .queue-title-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .queue-title {
          font-size: 20px;
          font-weight: 500;
          color: #333;
          margin: 0;
        }

        .status-indicator {
          width: 10px;
          height: 10px;
          background-color: #4ade80;
          border-radius: 50%;
        }

        .queue-stats {
          text-align: right;
        }

        .queue-number {
          font-size: 24px;
          font-weight: 600;
          color: #333;
          margin: 0;
        }

        .queue-label {
          font-size: 14px;
          color: #666;
          margin: 0;
        }

        .serving-section {
          margin-bottom: 16px;
        }

        .serving-label {
          font-size: 14px;
          color: #666;
          margin: 0 0 4px 0;
        }

        .serving-number {
          font-size: 18px;
          font-weight: 500;
          color: #333;
          margin: 0;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background-color: #e5e7eb;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background-color: #333;
          width: 33%;
          border-radius: 4px;
        }
      `}</style>

      <div className="queue-card">
        <div className="queue-header">
          <div className="queue-title-wrapper">
            <h2 className="queue-title">Queue Point 1</h2>
            <span className="status-indicator"></span>
          </div>
          <div className="queue-stats">
            <p className="queue-number">3</p>
            <p className="queue-label">waiting</p>
          </div>
        </div>

        <div className="serving-section">
          <p className="serving-label">Serving:</p>
          <p className="serving-number">T-247</p>
        </div>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </>
  );
};

export default QueueCard;
