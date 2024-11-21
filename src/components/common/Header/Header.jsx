import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import menuIcon from "/images/menu-icon.png";

function Header() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
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
      <img
        src={menuIcon}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
}

export default Header;
