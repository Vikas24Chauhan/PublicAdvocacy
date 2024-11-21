import React from "react";
import "./Testimonial.css";
import Person1 from "/images/person1.png";
import Person2 from "/images/person2.png";
import Play from "/images/play.png";

function Testimonial() {
  return (
    <div className="testimonial-main-div">
      <h1>TESTIMONIAL</h1>
      <h2>CLIENT TESTIMONIAL</h2>
      <div className="testimonial-div">
        <div className="test-div1">
          <img src={Person1} alt="Nidhi Chhavi Profile Photo" />
          <h3>Nidhi Chhavi</h3>
          <h5>Digital Marketing Head, Maharaja Whiteline</h5>
          <p>
            Working with JANUS PR has been a game-changer for our business.
            Their expertise and creativity in crafting our PR strategy have led
            to remarkable media coverage and enhanced our brand image.
          </p>
        </div>
        <div className="test-div2">
          <img src={Person2} alt="Amit Bhagchandka Profile Photo" />
          <h3>Amit Bhagchandka</h3>
          <h5>CEO, Rk Global</h5>
          <p>
            Janus PR has exceeded our expectations in every way. We've seen
            incredible results in both media visibility and public perception.
            Their dedication and passion make them stand out!
          </p>
        </div>
        <div className="test-div3">
          <div className="test-div3-text">
            <h3>Renuka Dudeja</h3>
            <h5>Marketing Head, Clove Dental</h5>
          </div>
          <div className="test-div3-img">
            <img src={Play} alt="Play Button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
