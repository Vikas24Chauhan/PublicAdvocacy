import React from "react";
import "./AboutUs4.css";
import teamData from "../../assets/Data/Team";
// import Previous from "/images/previous.png";
// import Next from "/images/next.png";

function AboutUs4() {
  return (
    <div className="aboutUs4-main-div">
      <h1>TEAM</h1>
      <h2>OUR TEAM</h2>
      <div className="team-cards">
        {teamData.map((data) => (
          <div key={data.id} className="team-card">
            {/* <img className="pre-btn" src={Previous} alt="Previous Button Image" /> */}
            <img src={data.image} alt="Profile Photo" />
            <h3>{data.name}</h3>
            <h5>{data.role}</h5>
            {/* <img className="next-btn" src={Next} alt="Next Button Image" /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs4;
