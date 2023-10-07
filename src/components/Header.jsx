import React from "react";
import menuIcon from "../icons/Menu Icon.svg";
import logo from "../icons/Logo.svg";
import searchButton from "../icons/Search.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo}></img>
      <img className="header__search" src={searchButton}></img>
      <a className="header__menu">
        <img src={menuIcon}></img>
      </a>
    </div>
  );
};

export default Header;
