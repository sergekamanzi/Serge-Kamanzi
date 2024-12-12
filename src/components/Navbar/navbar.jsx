import React, { useState } from "react";
import "./navbar.css";
import logo from "/logo1.png";
import { IoMdDownload } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="main-navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`nav-links ${isMobile ? "mobile" : ""}`}>
        <ul>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Skills & Education</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className="resume">
        <button>
          <IoMdDownload /> Resume
        </button>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
