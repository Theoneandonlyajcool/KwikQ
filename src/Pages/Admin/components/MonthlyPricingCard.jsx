import { X, ArrowRight, Info } from "lucide-react";

export default function FreeTrialModal({ data, close, proceed }) {
  return (
    <div className="overlay">
      <div className="modal">
        {/* Close Modal */}
        <button className="close-button" onClick={close}>
          <X size={20} />
        </button>

        <div className="header">
          <button className="start-trial-button">
            <span className="star-icon">✨</span>
            Start Your Free Trial
          </button>

          <h2 className="title">Confirm Your Plan</h2>
          <p className="subtitle">
            Review your selection and start your 14-day free trial
          </p>
        </div>

        <div className="plan-card">
          <div className="plan-header">
            <h3 className="plan-title">{data.planType} Plan</h3>
            <span className="free-badge">14-Day Free Trial</span>
          </div>

          <p className="billing-text">Billed {data.billingCycle}</p>

          <div className="price">
            ₦{data.amount}
            <span className="price-unit">
              /{data.billingCycle === "Monthly" ? "month" : "year"}
            </span>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icon">
            <Info size={20} />
          </div>
          <p className="info-text">
            <strong>No charge today</strong>
            <br />
            Your free trial starts now. You'll only be charged after 14 days,
            and you can cancel anytime before then.
          </p>
        </div>

        <div className="actions">
          <button className="cancel-button" onClick={close}>
            <X size={16} />
            Cancel
          </button>

          {/* 🔥 Trigger Payment */}
          <button
            className="continue-button"
            onClick={() => {
              proceed(data); // call payment
              close(); // close modal
            }}
          >
            Continue
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* CSS below */}
      <style>{`
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.718);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 1200;
        }

        .modal {
          background: white;
          border-radius: 16px;
          width: 100%;
          max-width: 40%;
          padding: 24px;
          position: relative;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          display:flex;
          flex-direction:column;
          gap: 20px;
        }

        .close-button {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          cursor: pointer;
          color: #666;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-button:hover {
          color: #333;
        }

        .start-trial-button {
          background: white;
          border: 2px solid #6366f1;
          border-radius: 24px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          color: #6366f1;
          font-size: 14px;
          margin-bottom: 16px;
        }

        .start-trial-button:hover {
          background: #f8f9ff;
        }

        .title {
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 8px 0;
        }

        .subtitle {
          font-size: 14px;
          color: #666;
          margin: 0;
        }

        .plan-card {
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px;
          background: #fafafa;
        }

        .plan-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .plan-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }

        .free-badge {
          background: #4f46e5;
          color: white;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 12px;
          font-weight: 500;
        }

        .billing-text {
          font-size: 13px;
          color: #666;
          margin: 0 0 12px 0;
        }

        .price {
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .price-unit {
          font-size: 14px;
          color: #666;
          font-weight: 400;
        }

        .info-card {
          background: #eff6ff;
          border: 1px solid #dbeafe;
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 10px;
          display: flex;
          gap: 12px;
        }

        .info-text {
          font-size: 13px;
          color: #1e40af;
          margin: 0;
          line-height: 1.5;
        }

        .actions {
          display: flex;
          gap: 12px;
        }

        .cancel-button {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 12px 20px;
          cursor: pointer;
          color: #666;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .continue-button {
          background: #4f46e5;
          border: none;
          border-radius: 8px;
          padding: 12px 24px;
          cursor: pointer;
          color: white;
          font-size: 14px;
          font-weight: 500;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
      `}</style>
    </div>
  );
}
