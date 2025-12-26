import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./NotFound.css";
const PageNotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="not-found-container">
      {/* Background decorative elements */}
      <div className="background-shapes">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      {/* Main content */}
      <div className="content-wrapper">
        {/* 404 Number */}
        <div className="error-code-wrapper">
          <h1 className="error-code">404</h1>
          <div className="glow-effect">
            <div className="glow-circle"></div>
          </div>
        </div>

        {/* Text content */}
        <div className="text-content">
          <h2 className="title">Oops! Page not found</h2>
          <p className="description">
            The page you're looking for seems to have wandered off into the
            digital void.
          </p>
        </div>

        {/* Action buttons */}
        <div className="button-group">
          <Link to="/" className="btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Back to Home
          </Link>

          <Link to="/" className="btn btn-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Go Back
          </Link>
        </div>

        {/* Decorative search icon */}

        {/* Bottom hint */}
        <p className="hint-text">Lost? Try starting fresh from the homepage.</p>
      </div>
    </div>
  );
};

export default PageNotFound;
