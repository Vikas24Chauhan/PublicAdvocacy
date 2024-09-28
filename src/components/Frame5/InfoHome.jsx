import React from "react";
import "./InfoHome.css";
import Logo from "/images/Janus_PR_Log 1.png";

function InfoHome() {
  return (
    <div className="infoHome-main-div">
      <img className="infoHome-logo" src={Logo} alt="Project Logo" />
      <h2>Corporate Communication</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore m
      </p>
    </div>
  );
}

export default InfoHome;
