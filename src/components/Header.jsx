import React from "react";

const Header = () => {
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
      header.classList.add("header-scroll");
    } else {
      header.classList.remove("header-scroll");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  return (
    <header id="header" className="header">
      <div className="wrapper">
        <nav className="header__navbar">
          <a href="#" className="header__logo">
            [Name] Studio
          </a>
          <ul className="header__navbar-ul">
            <li className="header__navbar-li">
              <a href="" className="header__navbar-link active-page">
                Home
              </a>
            </li>
            <li className="header__navbar-li">
              <a href="" className="header__navbar-link">
                About
              </a>
            </li>
            <li className="header__navbar-li">
              <a href="" className="header__navbar-link">
                Work
              </a>
            </li>
            <li className="header__navbar-li">
              <a href="" className="header__navbar-link">
                Expertise
              </a>
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
