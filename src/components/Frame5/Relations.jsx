import React from "react";
import "./Relations.css";
import relationsData from "../../assets/Data/RelationsData";

function Relations() {
  return (
    <div className="relations-main-div">
      <h1>Public Relations</h1>
      <h2>Why Janus PR For Public Relations ?</h2>
      <div className="relations-cards">
        {relationsData.map((data) => (
          <div key={data.id} className="relations-card">
            <img src={data.image} alt="Images" />
            <h3>{data.name}</h3>
          </div>
        ))}
      </div>
      <h4>
        The best campaigns birth from a big vision built on a simple idea.
      </h4>
      <h5>Let us build one for you</h5>
      <button className="relations-btn">CONTACT US</button>
    </div>
  );
}

export default Relations;
