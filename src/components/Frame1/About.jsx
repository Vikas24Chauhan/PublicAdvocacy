import React from "react";
import "./About.css";
import YearLogo from "/images/20years_image.png";

function About() {
  return (
    <div className="about-main-div">
      <h1>PR ADVERTISING</h1>
      <h2>WE BUILD POWERFUL CONNECTIONS</h2>
      <h4>Expertly Managing Your Reputation In The Digital Age</h4>
      <p className="para">
        With over 20 years of experience, JANUS PR has been a trusted partner in
        elevating brands and amplifying their stories. Our seasoned team excels
        in crafting compelling narratives and strategic communication plans that
        resonate with audiences and drive engagement. We specialize in building
        and maintaining positive public images, ensuring your message is always
        in the spotlight.
      </p>
      <button className="about-btn">READ MORE</button>
      <img className="year-logo" src={YearLogo} alt="20 Years Logo" />
    </div>
  );
}

export default About;
