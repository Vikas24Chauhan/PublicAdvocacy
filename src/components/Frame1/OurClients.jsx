import React from "react";
import "./OurClients.css";
import CompanyLogos from "../../assets/Data/CompanyLogo";

function OurClients() {
  return (
    <div className="client-main-div">
      <h1>CLIENT</h1>
      <h2>OUR CLIENTS</h2>
      <div className="companies-logo">
        {CompanyLogos.map((logos) => (
          <div key={logos.id} className="logos">
            <img src={logos.image} alt="Logo Image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurClients;
