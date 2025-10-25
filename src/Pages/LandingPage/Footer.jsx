import React from "react";
import styled from "styled-components";
import { IoLogoFacebook } from "react-icons/io5";
import { TfiTwitter } from "react-icons/tfi";
import { LuInstagram } from "react-icons/lu";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <FooterBody>
      <FooterWrapper>
        <div className="LogoHolder">
          <div className="Logo">
            <img
              src="https://res.cloudinary.com/dp75oveuw/image/upload/v1760854502/Mask_group_wsdoqc.png"
              alt=""
            />
          </div>
          <p>Making queue management simple and efficient for all Nigerians.</p>
          <div className="icons">
            <IoLogoFacebook />
            <TfiTwitter />
            <LuInstagram />
            <BsLinkedin />
          </div>
        </div>
        <div className="footer_product">
          <h3>Product</h3>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>API</li>
            <li>Integration</li>
          </ul>
        </div>

        <div className="footer_company">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer_support">
          <h3>Support</h3>
          <ul>
            <li>Help center</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Status</li>
          </ul>
        </div>
      </FooterWrapper>
      <FooterRight>
        <p>© 2025 KwikQ. All rights reserved.</p>
      </FooterRight>
    </FooterBody>
  );
};

export default Footer;

const FooterBody = styled.div`
  width: 100%;
  min-height: 393px;
  height: auto;
  background-color: #1b1c1c;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const FooterWrapper = styled.div`
  width: 91.1%;
  height: 160px;
  color: #e5e7eb;
  display: flex;

  .LogoHolder {
    width: 27%;
    min-height: 160px;
    display: flex;
    gap: 20px;
    flex-direction: column;

    .Logo {
      width: 94px;
      height: 50px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    p {
      width: 70%;
      font-weight: 400;
      font-size: 16px;
    }
    .icons {
      display: flex;
      gap: 10px;
      color: #e5e7eb;
      font-size: 25px;
    }
  }

  .footer_product {
    display: flex;
    width: 300px;
    flex-direction: column;
    gap: 15px;

    h1 {
      color: #ffffff;
      font-weight: 600;
    }
    ul {
      list-style: none;
    }
    li {
      line-height: 30px;
      color: #9ca3af;
      cursor: pointer;
    }
  }

  .footer_company {
    display: flex;
    width: 320px;
    flex-direction: column;
    gap: 15px;

    h1 {
      color: #ffffff;
      font-weight: 600;
    }
    ul {
      list-style: none;
    }
    li {
      line-height: 30px;
      color: #9ca3af;
      cursor: pointer;
    }
  }

  .footer_support {
    display: flex;
    width: 274px;
    flex-direction: column;
    gap: 15px;

    h1 {
      color: #ffffff;
      font-weight: 600;
    }
    ul {
      list-style: none;
    }
    li {
      line-height: 30px;
      color: #9ca3af;
      cursor: pointer;
    }
  }

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 30px;

    .LogoHolder {
      width: 45%;
      p {
        width: 90%;
      }
    }

    .footer_product,
    .footer_company,
    .footer_support {
      width: 45%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 30px;

    .LogoHolder {
      width: 100%;
      align-items: flex-start;

      p {
        width: 100%;
        font-size: 14px;
      }

      .icons {
        font-size: 22px;
      }
    }

    .footer_product,
    .footer_company,
    .footer_support {
      width: 100%;
      align-items: flex-start;

      h1 {
        font-size: 16px;
      }

      li {
        font-size: 14px;
      }
    }
  }
`;

const FooterRight = styled.div`
  width: 91.2%;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 0.1px solid #374151;

  p {
    margin-top: 2.5rem;
    font-weight: 400;
    font-size: 16px;
    line-height: 24%;
    color: #9ca3af;
  }

  @media (max-width: 1024px) {
    p {
      font-size: 15px;
      margin-top: 2rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    p {
      font-size: 14px;
      margin-top: 1.5rem;
      text-align: center;
    }
  }
`;
