import React from "react";
import "./Solutions.css";
import Data from "../../Data/IconsDetails";

function Solutions() {
  return (
    <div className="solutions-main-div">
      <h1>360° PR</h1>
      <h2>OUR 360° PR SOLUTIONS</h2>
      <div className="solutions">
        {Data.map((boxes) => (
          <div key={boxes.id} className="card">
            <img src={boxes.image} alt="Icon" />
            <h4>{boxes.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solutions;
