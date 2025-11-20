import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useFormContext } from "../contexts/FormContext";
// import { FormBadge } from "../components/FormBadge";
import "./CustomStep1.css";

const CustomStep1 = () => {
  const nav = useNavigate();
  const companySizes = ["1-10", "11-50", "51-200", "201-1000", "1000+"];
  const [activeSize, setActiveSize] = useState("");
  console.log(activeSize);

  const [inputValues, SetInputValues] = useState({
    CompanyName: "",
    FullName: "",
    WorkEmail: "",
    PhoneNumber: "",
    CompanySizes: "",
    industry: "",
  });

  const SaveValues = () => {
    // console.log(inputValues);
    localStorage.setItem("CustomPricingDetails", JSON.stringify(inputValues));
    // nav("");
    nav("/Custom_step2");
  };

  const [inputValuesErrors, SetInputValuesErrors] = useState({
    CompanyNameError: "",
    FullNameError: "",
    WorkEmailError: "",
    PhoneNumberError: "",
    CompanySizesError: "",
    industryError: "",
  });

  const Validation = () => {
    let newErrors = {};
    if (inputValues.CompanyName == "") {
      newErrors.CompanyNameError = "Company name is required";
    }

    if (inputValues.FullName == "") {
      newErrors.FullNameError = "Full name is required";
    }

    if (inputValues.WorkEmail == "") {
      newErrors.WorkEmailError = "Email is required ";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValues.WorkEmail)) {
      newErrors.WorkEmailError = "Invalid Email Format";
    }

    if (inputValues.PhoneNumber == "") {
      newErrors.PhoneNumberError = "Phone number is required";
    } else if (inputValues.PhoneNumber.length !== 11) {
      newErrors.PhoneNumberError = "Phone number must be 11 digits";
    }

    // else if (inputValues.PhoneNumber.length <= 3) {
    //       newErrors.PhoneNumberError = "Must be 11 digits";
    //     } else if (inputValues.PhoneNumber.length > 11) {
    //       newErrors.PhoneNumberError = "Phone number must be 11 digits";
    //     }

    if (inputValues.CompanySizes == "") {
      newErrors.CompanySizesError = "Company size is required";
    }

    SetInputValuesErrors(newErrors);
    setTimeout(() => {
      SetInputValuesErrors({
        CompanyNameError: "",
        FullNameError: "",
        WorkEmailError: "",
        PhoneNumberError: "",
        CompanySizesError: "",
        industryError: "",
      });
    }, 2000);
    return Object.keys(newErrors).length === 0;
  };

  const SubmitFormDetails = () => {
    if (Validation()) {
      console.log("No errs");
      SaveValues();
    } else {
      console.log("Errors");
    }
  };

  useEffect(() => {
    SetInputValues({
      ...inputValues,
      CompanySizes: activeSize,
    });
  }, [activeSize]);

  return (
    <div className="contact-page">
      <div className="contact-card">
        <button className="close-button">×</button>

        {/* <FormBadge /> */}

        <h1 className="contact-title">Let's Get Started</h1>
        <p className="contact-subtitle">
          Tell us about your company and we'll help you find the right solution
        </p>

        <div className="form-section">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="companyName" className="form-label">
                Company Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="form-input"
                placeholder="Acme Corporation"
                value={inputValues.CompanyName}
                onChange={(e) =>
                  SetInputValues({
                    ...inputValues,
                    CompanyName: e.target.value,
                  })
                }
                // value={localData.companyName}
                // onChange={handleInputChange}
              />
              <p style={{ color: "red", height: ".2rem", fontSize: ".8rem" }}>
                {inputValuesErrors.CompanyNameError}
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Your Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="form-input"
                placeholder="John Doe"
                value={inputValues.FullName}
                onChange={(e) =>
                  SetInputValues({
                    ...inputValues,
                    FullName: e.target.value,
                  })
                }
                // value={localData.fullName}
                // onChange={handleInputChange}
              />
              <p style={{ color: "red", height: ".2rem", fontSize: ".8rem" }}>
                {inputValuesErrors.FullNameError}
              </p>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="workEmail" className="form-label">
                Work Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                className="form-input"
                placeholder="john@acme.com"
                value={inputValues.WorkEmail}
                onChange={(e) =>
                  SetInputValues({
                    ...inputValues,
                    WorkEmail: e.target.value,
                  })
                }
                // value={localData.workEmail}
                // onChange={handleInputChange}
              />
              <p style={{ color: "red", height: ".2rem", fontSize: ".8rem" }}>
                {inputValuesErrors.WorkEmailError}
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="form-input"
                placeholder="+234 800 000 0000"
                value={inputValues.PhoneNumber}
                onChange={(e) =>
                  SetInputValues({
                    ...inputValues,
                    PhoneNumber: e.target.value,
                  })
                }
                // value={localData.phoneNumber}
                // onChange={handleInputChange}
              />

              <p style={{ color: "red", height: ".2rem", fontSize: ".8rem" }}>
                {inputValuesErrors.PhoneNumberError}
              </p>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              Company Size <span className="required">*</span>
            </label>
            <div className="size-options">
              {companySizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => {
                    setActiveSize(size);
                    // SetInputValues({
                    //   ...inputValues,
                    //   CompanySizes: e.target.value,
                    // });
                  }}
                  style={{
                    padding: "1rem 1rem",
                    border: "1px solid gray",
                    borderRadius: ".5rem",
                    cursor: "pointer",
                    backgroundColor: activeSize === size ? "blue" : "white",
                    color: activeSize === size ? "white" : "black",
                  }}
                  //   onClick={() => handleCompanySizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <p style={{ color: "red", height: ".2rem", fontSize: ".8rem" }}>
              {inputValuesErrors.CompanySizesError}
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="industry" className="form-label">
              Industry (Optional)
            </label>
            <input
              type="text"
              id="industry"
              name="industry"
              className="form-input"
              placeholder="e.g., Banking, Healthcare, Retail"
              value={inputValues.industry}
              onChange={(e) =>
                SetInputValues({
                  ...inputValues,
                  industry: e.target.value,
                })
              }
              //   value={localData.industry}
              //   onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="button-group">
          <button className="btn-secondary" onClick={() => nav(-1)}>
            <span className="btn-icon">×</span>
            Cancel
          </button>
          <button
            className="btn-primary"
            onClick={() => {
              // SaveValues();
              SubmitFormDetails();
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

export default CustomStep1;
