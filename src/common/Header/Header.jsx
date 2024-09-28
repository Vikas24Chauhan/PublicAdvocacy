import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">AboutUs</NavLink>
        </li>
        <li>
          <NavLink to="/contact">ContactUs</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/more-information">More-Information</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
