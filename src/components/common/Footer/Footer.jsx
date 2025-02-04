import React from "react";
import "./Footer.css";
import LinkedIn from "/public/images/linkedin.png";
import Mail from "/public/images/mail.webp";

function Footer() {
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/", "_blank");
  };

  const handleMail = () => {
    const recipient = "info@entrepreneurshipnetwork.net";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <div className="footer">
      <hr />
      <div className="footer-div">
        <div className="footer-social">
          <img onClick={handleLinkedIn} src={LinkedIn} alt="LinkedIn logo" />
          <img
            style={{ marginLeft: "1rem" }}
            onClick={handleMail}
            src={Mail}
            alt="mail logo"
          />
        </div>
        <div className="footer-contant">
          <h6>© 2024 All Right Reserved</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
