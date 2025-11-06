import React from "react";
import "../Styles/PaymentMethod.css";
import { FiCreditCard, FiRepeat, FiHome, FiLock } from "react-icons/fi";

const PaymentMethod = () => {
  const paymentOptions = [
    {
      name: "Debit Card",
      icon: FiCreditCard,
      description: "Pay with Debit Card",
    },
    {
      name: "Bank Transfer",
      icon: FiRepeat,
      description: "Pay with Bank Transfer",
    },
    { name: "Bank", icon: FiHome, description: "Pay with Bank" },
  ];

  return (
    <div className="payment-page-container">
      <div className="secured-by-kora">
        <FiLock size={12} color="#4CAF50" />
        <span>Secured by Kora</span>
      </div>

      <div className="payment-widget">
        <div className="test-mode-header">TEST MODE</div>

        <div className="widget-content">
          <h2 className="payment-question">How would you like to pay?</h2>

          <div className="payment-options-list">
            {paymentOptions.map((option, index) => (
              <div key={index} className="payment-option">
                <div className="option-details">
                  <option.icon size={20} className="option-icon" />
                  <span className="option-text">{option.description}</span>
                </div>
                <div className="info-icon-container">
                  <FiHome size={16} className="info-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
