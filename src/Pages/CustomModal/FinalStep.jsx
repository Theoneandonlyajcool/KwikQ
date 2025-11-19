// import { useNavigate } from "react-router-dom";
// import { useFormContext } from "../contexts/FormContext";
import "./FinalStep.css";

const FinalStep = () => {
  //   const navigate = useNavigate();
  //   const { formData, resetFormData } = useFormContext();

  //   const handleDone = () => {
  //     console.log("Form submitted:", formData);
  //     resetFormData();
  //     navigate("/");
  //   };

  //   const handleBackToHome = () => {
  //     resetFormData();
  //     navigate("/");
  //   };

  const infoCards = [
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3H17V14H3V3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 6L10 11L17 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Check Your Email",
      //   description: `We've sent a confirmation to ${
      //     formData.workEmail || "your email"
      //   }`,
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3H11C12.1046 3 13 3.89543 13 5V17L10 15L7 17V5C7 3.89543 6.10457 3 5 3H3V3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="10"
            cy="10"
            r="7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Expect a Call",
      //   description: `Our team will reach out to ${
      //     formData.phoneNumber || "your number"
      //   }`,
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="3"
            width="14"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M3 8H17" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 3V8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M13 3V8" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      title: "What's Next?",
      description:
        "Our sales specialist will prepare a custom demo based on your requirements",
    },
  ];

  return (
    <div className="contact-page">
      <div className="contact-card success-card">
        <div className="success-icons">
          <div className="success-check">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#10B981" />
              <path
                d="M22 11L14 19L10 15"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <h1 className="contact-title">Thank You!</h1>
        <p className="contact-subtitle">
          We've received your request. Our sales team will contact you within 24
          hours.
        </p>

        <div className="info-cards">
          {infoCards.map((card, index) => (
            <div key={index} className="info-card">
              <div className="info-icon">{card.icon}</div>
              <div className="info-text">
                <h3 className="info-title">{card.title}</h3>
                <p className="info-description">
                  {/* {card.description} */}
                  decription
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="success-buttons">
          <button className="btn-primary full-width">Done</button>
          <button className="btn-text">Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default FinalStep;
