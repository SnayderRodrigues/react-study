import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  const [activePage, setActivePage] = useState("home");

  const handleSetActivePage = (page) => {
    setActivePage(page);
  };

  return (
    <header id="header" className="header">
      <div className="wrapper">
        <nav className="header__navbar">
          <a href="/" className="header__logo">
            [<span>Array</span>] Studio
          </a>
          <ul className="header__navbar-ul">
            <li
              className={`header__navbar-li ${
                activePage === "home" ? "active-page" : ""
              }`}
            >
              <Link
                to="/"
                className="header__navbar-link"
                onClick={() => handleSetActivePage("home")}
              >
                Home
              </Link>
            </li>
            <li
              className={`header__navbar-li ${
                activePage === "about" ? "active-page" : ""
              }`}
            >
              <Link
                to="/about"
                className="header__navbar-link"
                onClick={() => handleSetActivePage("about")}
              >
                About
              </Link>
            </li>
            <li
              className={`header__navbar-li ${
                activePage === "work" ? "active-page" : ""
              }`}
            >
              <Link
                to="/work"
                className="header__navbar-link"
                onClick={() => handleSetActivePage("work")}
              >
                Work
              </Link>
            </li>
            <li
              className={`header__navbar-li ${
                activePage === "expertise" ? "active-page" : ""
              }`}
            >
              <Link
                to="/expertise"
                className="header__navbar-link"
                onClick={() => handleSetActivePage("expertise")}
              >
                Expertise
              </Link>
            </li>
          </ul>
          <Link
            to="contact"
            className={`button ${
              activePage === "contact" ? "active-page" : ""
            }`}
            onClick={() => handleSetActivePage("contact")}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
