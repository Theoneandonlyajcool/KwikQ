import React from "react";

const MonthlyPricingCard = () => {
  const styles = `
    * {
      box-sizing: border-box;
    }

    .pricing-container {
      display: flex;
      gap: 20px;
      padding: 40px 20px;
      background: #f5f7fa;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
    }

    .pricing-card {
      background: white;
      border-radius: 16px;
      padding: 28px 24px;
      width: 280px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
      position: relative;
      display: flex;
      flex-direction: column;
    }

    .pricing-card.featured {
      border: 2px solid #4F46E5;
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.15);
    }

    .badge {
      position: absolute;
      top: 20px;
      right: 20px;
      background: #4F46E5;
      color: white;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .card-icon {
      width: 40px;
      height: 40px;
      background: #4F46E5;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;
    }

    .card-icon svg {
      width: 20px;
      height: 20px;
    }

    .plan-title {
      font-size: 22px;
      font-weight: 600;
      color: #000;
      margin: 0 0 8px 0;
    }

    .plan-subtitle {
      font-size: 13px;
      color: #6b7280;
      margin: 0 0 24px 0;
      line-height: 1.5;
    }

    .pricing-info {
      margin-bottom: 20px;
    }

    .price {
      font-size: 28px;
      font-weight: 700;
      color: #000;
    }

    .period {
      font-size: 14px;
      color: #6b7280;
      font-weight: 400;
    }

    .cta-button {
      width: 100%;
      padding: 12px 24px;
      border: 1.5px solid #e5e7eb;
      background: white;
      color: #374151;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      margin-bottom: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .cta-button:hover {
      background: #f9fafb;
      border-color: #d1d5db;
    }

    .cta-button.featured-button {
      background: #4F46E5;
      color: white;
      border-color: #4F46E5;
    }

    .cta-button.featured-button:hover {
      background: #4338ca;
      border-color: #4338ca;
    }

    .features-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .features-list li {
      display: flex;
      align-items: flex-start;
      margin-bottom: 14px;
      font-size: 13px;
      color: #374151;
      line-height: 1.4;
    }

    .check-icon {
      width: 18px;
      height: 18px;
      min-width: 18px;
      background: #E0E7FF;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      margin-top: 1px;
    }

    .check-icon svg {
      width: 10px;
      height: 10px;
    }

    @media (max-width: 968px) {
      .pricing-container {
        flex-direction: column;
        align-items: center;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      {/*  */}
      <div
        key={plan.id}
        className="featured"

        // {`pricing-card ${plan.featured ? "featured" : ""}`}
      >
        {/* {plan.badge && <div className="badge">{plan.badge}</div>} */}

        <div className="card-icon">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M9 12l2 2 4-4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3 className="plan-title">
          {/* {plan.title} */}
          TITLE
        </h3>
        <p className="plan-subtitle">
          {/* {plan.subtitle} */}
          Subtitle
        </p>

        <div className="pricing-info">
          <span className="price">
            {/* {plan.price} */}
            Price
          </span>
          {/* {plan.period && <span className="period">{plan.period}</span>} */}
        </div>

        <button
          className="featured-button"

          //   {`cta-button ${plan.featured ? "featured-button" : ""}`}
        >
          <span>
            {/* {plan.buttonText} */}
            button text
          </span>
          <span>→</span>
        </button>

        <ul className="features-list">
          {/* {plan.features.map((feature, index) => (
            <li key={index}>
              <div className="check-icon">
                <svg viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 6l2 2 5-5"
                    stroke="#4F46E5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span>{feature}</span>
            </li>
          ))} */}
        </ul>
      </div>
      {/*  */}
    </>
  );
};

export default MonthlyPricingCard;
