import React from "react";
import "./Footer.css";
import Facebook from "/images/Facebook.png";
import Instagram from "/images/Instagram.png";
import X from "/images/X.png";
import Youtube from "/images/Youtube.png";

function Footer() {
  return (
    <div className="footer-main-div">
      <div className="upper-div">
        <h1>CONNECT</h1>
        <h2>GET IN TOUCH</h2>
        <hr />
      </div>
      <div className="lower-div">
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Testimonial</li>
            <li>PR Solution</li>
            <li>Agency</li>
          </ul>
        </div>
        <div className="head-office">
          <h4>Head Office</h4>
          <h5>
            66, Second Floor, Atul Grove Road, Janpath, Connaught Place, New
            Delhi, Delhi 110001
          </h5>
        </div>
        <div className="contact-info">
          <h2>Call Us</h2>
          <h5>+91 9876543210</h5>
          <h2>Mail Us</h2>
          <h5>abc123@gmail.com</h5>
        </div>
        <div className="follow-us">
          <h4>Follow Us</h4>
          <div className="social-info-div">
            <div className="logo-div">
              <img src={Facebook} alt="Facebook Logo" />
              <br />
              <img src={Instagram} alt="Instagram Logo" />
              <br />
              <img src={X} alt="X Logo" />
              <br />
              <img src={Youtube} alt="Youtube Logo" />
            </div>
            <div className="text-div">
              <h5>Facebook</h5>
              <h5>Instagram</h5>
              <h5>Twitter</h5>
              <h5>Youtube</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="last-div">
        <hr />
        <h6>Copyright Janus PR India 2024 All Right Reserved</h6>
      </div>
    </div>
  );
}

export default Footer;
