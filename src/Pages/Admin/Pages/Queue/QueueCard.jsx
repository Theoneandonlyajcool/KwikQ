import React from "react";

const QueueCard = ({ data }) => {
  return (
    <div className="queue-list">
      <div className="queue-item">
        <div className="queue-item-header">
          <div className="queue-left">
            <div className="icon-circle blue">
              <span className="icon-text">Q</span>
            </div>
            <div className="queue-details">
              <h3 className="queue-name">name</h3>
              <p className="customer-name">customer</p>
              <p className="service-type">Service</p>
            </div>
          </div>
          <div className="queue-right">
            <button
              className={`btn-serve ${data.active ? "active" : ""}`}
              // onClick={() => handleServe(queue.id)}
            >
              {data.active ? "Serving" : "Serve"}
              {/* serving */}
            </button>
          </div>
        </div>
        <div className="queue-item-footer">
          <div className="queue-meta">
            <span className="meta-item">
              <span className="meta-icon">🕒</span>
              {/* Added: {queue.added} */}
              10:30am
            </span>
            <span className="meta-item">
              <span className="meta-icon">⏱️</span> '{/* Wait: {queue.wait} */}
              wait 12mins
            </span>
            <span className="meta-item">
              <span className="meta-icon">📞</span>
              {/* {queue.phone} */}
              09136890215
            </span>
          </div>
          <button
            className="btn-remove"
            //   onClick={() => handleRemove(queue.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default QueueCard;
