import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useFormCont/ext } from "../contexts/FormContext";
import "./CustomStep2.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Compass } from "lucide-react";

const CustomStep2 = () => {
  const nav = useNavigate();
  //   const { formData, updateFormData } = useFormContext();

  //   const [localData, setLocalData] = useState({
  //     interests: formData.interests,
  //     additionalInfo: formData.additionalInfo,
  //   });

  //   const handleInterestToggle = (interest) => {
  //     setLocalData((prev) => {
  //       const interests = prev.interests.includes(interest)
  //         ? prev.interests.filter((i) => i !== interest)
  //         : [...prev.interests, interest];
  //       return { ...prev, interests };
  //     });
  //   };

  //   const handleContinue = () => {
  //     updateFormData(localData);
  //     navigate("/contact/step3");
  //   };

  //   const handleBack = () => {
  //     updateFormData(localData);
  //     navigate("/contact/step1");
  //   };

  const interestOptions = [
    {
      id: "queue",
      title: "Queue Management System",
      Value: "queue-management-system",
    },
    {
      id: "analytics",
      title: "Advanced Analytics & Reporting",
      Value: "advanced-analytics-reporting",
    },
    {
      id: "branch",
      title: "Multi-Branch Management",
      Value: "multi-branch-management",
    },
  ];

  const CompanyDetails = JSON.parse(
    localStorage.getItem("CustomPricingDetails")
  );

  const BaseUrl = import.meta.env.VITE_API_BASE_URL;
  const ID = sessionStorage.getItem("user-recog");
  const Token = localStorage.getItem("user_token");

  const [selectedId, setSelectedId] = useState("queue");

  const [FutherInfo, SetFurtherInfo] = useState({
    Instrest: "",
    AdditionInfo: "",
  });

  const SendInfo = async () => {
    try {
      const res = await axios.post(
        `${BaseUrl}/api/v1/custom-pricing/${ID}`,
        {
          companyName: CompanyDetails.CompanyName,
          fullName: CompanyDetails.FullName,
          workEmail: CompanyDetails.WorkEmail,
          phoneNumber: CompanyDetails.PhoneNumber,
          companySize: CompanyDetails.CompanySizes,
          industry: CompanyDetails.industry,
          features: FutherInfo.Instrest,
          additionalInformation: FutherInfo.AdditionInfo,
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );

      toast.success(res?.data?.message);
      setTimeout(() => {
        nav("/Final_step");
      }, 2000);
    } catch (error) {
      // console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  console.log(CompanyDetails);

  return (
    <div className="contact-page">
      <ToastContainer />
      <div className="contact-card">
        <h1 className="contact-title">What Are You Interested In?</h1>
        <p className="contact-subtitle">
          Select the features and services you'd like to learn more about
        </p>

        <div className="cards-row">
          {interestOptions.map((opt) => {
            const isSelected = opt.id === selectedId;
            return (
              <button
                key={opt.id}
                type="button"
                className={`card ${isSelected ? "card--selected" : ""}`}
                onClick={() => {
                  setSelectedId(opt.id);
                  SetFurtherInfo((prev) => ({
                    ...prev,
                    Instrest: opt.Value, // save value here
                  }));
                  // console.log(opt.Value);
                }}
                aria-pressed={isSelected}
              >
                <span
                  className={`checkbox ${
                    isSelected ? "checkbox--checked" : ""
                  }`}
                  aria-hidden
                >
                  {/* {isSelected && (
                    <svg viewBox="0 0 24 24" className="checkmark" aria-hidden>
                      <polyline
                        points="20 6 9 17 4 12"
                        fill="none"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>        
                  )} */}
                </span>

                <div className="card__text">
                  <div className="card__title">{opt.title}</div>
                  <div className="card__subtitle">{opt.subtitle}</div>
                </div>

                {isSelected && <div className="card__badge">D</div>}
              </button>
            );
          })}

          {/* reference image for visual comparison; file you uploaded is used here */}
          {/* <div className="reference">
            <img
              src="/mnt/data/6b61065d-d509-4731-b2f9-212bc4097fbc.png"
              alt="reference"
            />
          </div> */}
        </div>

        {/*  */}

        <div className="form-group">
          <label htmlFor="additionalInfo" className="form-label">
            Additional Information (Optional)
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            className="form-textarea"
            placeholder="Tell us more about your needs, number of locations, expected usage, or any specific requirements..."
            rows="4"
            value={FutherInfo.AdditionInfo}
            onChange={(e) =>
              SetFurtherInfo({ ...FutherInfo, AdditionInfo: e.target.value })
            }
            // value={localData.additionalInfo}
            // onChange={(e) =>
            //   setLocalData((prev) => ({
            //     ...prev,
            //     additionalInfo: e.target.value,
            //   }))
            // }
          />
        </div>

        <div className="button-group">
          <button className="btn-secondary" onClick={() => nav(-1)}>
            <span className="btn-icon">←</span>
            Back
          </button>
          <button
            className="btn-primary"
            onClick={() => {
              SendInfo();
              // nav("/Final_step");
              console.log(FutherInfo);
            }}
          >
            Continue
            <span className="btn-icon">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomStep2;
