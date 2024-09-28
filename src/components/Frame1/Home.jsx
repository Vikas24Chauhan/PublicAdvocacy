import React from "react";
import "./Home.css";
import Logo from "/images/Janus_PR_Log 1.png";
import Phone from "/images/Phone.png";
import Whatsapp from "/images/Whatsapp.png";

function Home() {
  return (
    <>
      <div className="main-div">
        <img className="logo-img" src={Logo} alt="Main Logo" />
        <img className="phone-img" src={Phone} alt="Phone Logo" />
        <img className="whatsapp-img" src={Whatsapp} alt="WhatsApp Logo" />
      </div>
    </>
  );
}

export default Home;
