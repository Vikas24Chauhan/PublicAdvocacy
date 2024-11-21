import React from "react";
import "./ServicesDetails.css";
import servicesData from "../../assets/Data/ServicesData";

function ServicesDetails() {
  return (
    <div className="servicesDetails-main-div">
      <h1>360° PR</h1>
      <h2>OUR 360° PR SOLUTIONS</h2>
      <div className="services-cards">
        {servicesData.map((service) => (
          <div key={service.id} className="services-card">
            {/* Conditional Rendering */}
            {service.id % 2 == 0 ? (
              <>
                <div className="services-even">
                  <div className="services-image">
                    <img src={service.image} alt="Image" />
                  </div>
                  <div className="about-services">
                    <h3>{service.name}</h3>
                    <p>{service.about}</p>
                    <img src={service.viewMore} alt="View-More Image" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="services-odd">
                  <div className="about-services">
                    <h3>{service.name}</h3>
                    <p>{service.about}</p>
                    <img src={service.viewMore} alt="View-More Image" />
                  </div>
                  <div className="services-image">
                    <img src={service.image} alt="Image" />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesDetails;
