import React from "react";
import "./ContactUs1.css";
import Logo from "/images/Janus_PR_Log 1.png";
import Phone from "/images/Phone.png";
import Whatsapp from "/images/Whatsapp.png";

function ContactUs1() {
  return (
    <div className="contact1-main-div">
      <img className="contact1-logo" src={Logo} alt="Project Logo" />
      <h2>Contact Us</h2>
      <img className="contact1-phone" src={Phone} alt="Phone Logo" />
      <br />
      <img className="contact1-whatsapp" src={Whatsapp} alt="WhatsApp Logo" />
    </div>
  );
}

export default ContactUs1;
