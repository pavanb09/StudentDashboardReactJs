import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container">

        {/* TOP SECTION */}
        <div className="footer-top row align-items-start">

          {/* BRAND & DESCRIPTION */}
          <div className="col-md-6 mb-4">
            <h3 className="footer-logo">Student<span>Dashboard</span></h3>
            <p className="footer-text">
              A clean, modern platform built for learning and practicing real-world React development: 
              routing, context API, reducers, forms, and API integration—all in one powerful dashboard.
            </p>

            {/* SOCIAL ICONS */}
            <div className="footer-social">
              <a href="https://www.facebook.com/" target="_blank"><FaFacebookF /></a>
              <a href="https://x.com/" target="_blank"><FaTwitter /></a>
              <a href="https://www.linkedin.com/in/pavankumar2001/" target="_blank"><FaLinkedinIn /></a>
              <a href="https://github.com/pavanb09" target="_blank"><FaGithub /></a>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="col-md-6 mb-4">
            <h5 className="footer-heading">Contact Us</h5>

            <ul className="footer-contact">
              <li>
                <FaEnvelope className="contact-icon" />
                support@studentdashboard.com
              </li>

              <li>
                <FaPhoneAlt className="contact-icon" />
                +91 9876543210
              </li>

              <li>
                <FaMapMarkerAlt className="contact-icon" />
                10k Coder Avenue ,Beside React colony, JavaScript City, WebLand, India!
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} StudentDashboard. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}








