import React from "react";
import "./AboutUs1.css";
import Logo from "/images/Janus_PR_Log 1.png";
import Phone from "/images/Phone.png";
import Whatsapp from "/images/Whatsapp.png";

function AboutUs1() {
  return (
    <div className="aboutUs1-main-div">
      <img className="aboutUs1-logo-img" src={Logo} alt="Main Logo" />
      <h2>About Us</h2>
      <img className="aboutUs1-phone-img" src={Phone} alt="Phone Logo" />
      <br />
      <img
        className="aboutUs1-whatsapp-img"
        src={Whatsapp}
        alt="WhatsApp Logo"
      />
    </div>
  );
}

export default AboutUs1;
