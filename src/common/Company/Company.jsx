import React from "react";
import "./Company.css";
import achievements from "../../Data/Achievements.jsx";

function Company() {
  return (
    <div className="company-div">
      <h1>ACHIEVEMENTS</h1>
      <h2>OUR ACHIEVEMENTS</h2>
      <div className="company-cards">
        {achievements.map((data) => (
          <div key={data.id} className="company-card">
            <div className="ellipse-div">
              <img src={data.image} alt="Vector Images" />
            </div>
            <h4>{data.tag}</h4>
            <h2>{data.number}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Company;
