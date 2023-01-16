import React from "react";
import { useState } from "react";

import "./Navbar.css";
import Logo from "../../assets/Group 114.png";
import SearchIcon from "../Icon/SearchIcon";
import HamburgerIcon from "../Icon/HamburgerIcon";
// import Search from "../Search/Search";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navContainer">
      <div className="navLogo">
        <img src={Logo} />
      </div>

      <label className="toggle">
        <HamburgerIcon
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </label>

      <div className={toggle ? "mobileNavLinks" : "navLinks"}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </div>
      <div className={toggle ? "navButtonHide" : "navButton"}>
        <button>Start a Company</button>
      </div>

      <div className="SearchBox">
        <div className="Search">
          <button>
            <SearchIcon />
          </button>
          <input placeholder="Search a Term | Topic"></input>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
