import React from "react";
import "./Services.css";
import Logo from "/images/Janus_PR_Log 1.png";
import Phone from "/images/Phone.png";
import Whatsapp from "/images/Whatsapp.png";

function Services() {
  return (
    <div className="services-main-div">
      <img className="services-logo" src={Logo} alt="Project Logo" />
      <h2>Services</h2>
      <img className="services-phone" src={Phone} alt="Phone Logo" />
      <br />
      <img className="services-whatsapp" src={Whatsapp} alt="WhatsApp Logo" />
    </div>
  );
}

export default Services;
