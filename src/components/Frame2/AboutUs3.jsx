import React from "react";
import "./AboutUs3.css";
import MissionVision from "../../Data/MissionVision";

function AboutUs3() {
  return (
    <div className="aboutUs3-main-div">
      <div className="mv-cards">
        {MissionVision.map((mv) => (
          <div key={mv.id} className="mv-card">
            <img src={mv.image} alt="Mission-Vision Logo" />
            <h2>{mv.tag}</h2>
            <h5>{mv.about}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs3;
