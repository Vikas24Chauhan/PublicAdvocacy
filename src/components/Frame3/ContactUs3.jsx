import React from "react";
import "./ContactUs3.css";

function ContactUs3() {
  return (
    <div className="contact3-main-div">
      <h1>LOCATION</h1>
      <h2>LOCATION</h2>
      <div className="map-div">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12427.89396545547!2d77.21411306833816!3d28.624573771538717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd36ad3b13a3%3A0xd4f8e44e0852947c!2sJanus%20Koncepts!5e0!3m2!1sen!2sin!4v1725010108401!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs3;
