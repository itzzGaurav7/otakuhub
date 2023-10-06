import React from "react";
import Logo from "../Assets/logomain.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img className="pic" src={Logo} alt="" />
        </div>
        
      </div>
      <div className="footer-text-center">©2023 Made with ♡ Gaurav Upadhyay</div>

        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      
    </div>
  );
};

export default Footer;
