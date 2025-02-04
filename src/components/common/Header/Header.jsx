import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Logo from "/public/images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const [showNav, setShowNav] = useState(false);

  const handleButtonToggle = () => {
    setShowNav(!showNav);
  };

  const handleCloseNav = () => {
    setShowNav(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="website logo" />
      </div>
      <nav className={showNav ? "mobile-nav" : "web-nav"}>
        <NavLink to="/" onClick={handleCloseNav}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={handleCloseNav}>
          AboutUs
        </NavLink>
        <NavLink to="/contact" onClick={handleCloseNav}>
          ContactUs
        </NavLink>
        <NavLink to="/services" onClick={handleCloseNav}>
          Services
        </NavLink>
        <NavLink to="/more-information" onClick={handleCloseNav}>
          More-Information
        </NavLink>
      </nav>

      <div className="hamburger">
        <button onClick={handleButtonToggle}>
          <RxHamburgerMenu />
        </button>
      </div>
    </header>
  );
}

export default Header;
