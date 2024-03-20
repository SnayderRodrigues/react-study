import React from "react";

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="wrapper">
        <nav className="header__navbar">
          <a href="#" className="header__logo"></a>
          <ul className="header__navbar-ul">
            <li className="header__navbar-li">
              <a href="">Home</a>
            </li>
            <li className="header__navbar-li">
              <a href="">About</a>
            </li>
            <li className="header__navbar-li">
              <a href="">Work</a>
            </li>
            <li className="header__navbar-li">
              <a href="">Collections</a>
            </li>
          </ul>
          <a href="" className="button">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
