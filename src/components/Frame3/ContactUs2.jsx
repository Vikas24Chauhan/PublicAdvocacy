import React from "react";
import "./ContactUs2.css";
import Data from "../../assets/Data/ConnectData";

function ContactUs2() {
  return (
    <div className="contact2-main-div">
      <h1>CONNECT</h1>
      <h2>LET'S CONNECT</h2>
      <div className="contact2-cards">
        {Data.map((d) => (
          <div key={d.id} className="contact2-card">
            <h3>{d.city}</h3>
            <p>{d.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactUs2;
