import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  let lastScrollTop = 0;
  const location = useLocation();

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

  const isHomePage = () => {
    return location.pathname === "/";
  };
  const isAboutPage = () => {
    return location.pathname === "/about";
  };
  const isWorkPage = () => {
    return location.pathname === "/work";
  };
  const isExpertisePage = () => {
    return location.pathname === "/expertise";
  };
  const isContactPage = () => {
    return location.pathname === "/contact";
  };

  return (
    <header id="header" className="header">
      <div className="wrapper">
        <nav className="header__navbar">
          <a href="/" className="header__logo">
            {/* <img src={Logo} alt="" className="header__logo-icon"/> */}
            <span>
              [<span className="highlight">Array</span>] Studio
            </span>
          </a>
          <ul className="header__navbar-ul">
            <li className="header__navbar-li">
              <Link
                to="/"
                className={`${
                  isHomePage() ? "active-page" : ""
                } header__navbar-link`}
                onClick={(e) => {
                  window.scrollTo(0, 0);
                }}
              >
                Home
              </Link>
            </li>
            <li className="header__navbar-li">
              <Link
                to="/about"
                id="about-page"
                className={`${
                  isAboutPage() ? "active-page" : ""
                } header__navbar-link`}
                onClick={(e) => {
                  window.scrollTo(0, 0);
                }}
              >
                About
              </Link>
            </li>
            <li className="header__navbar-li">
              <Link
                to="/work"
                className={`${
                  isWorkPage() ? "active-page" : ""
                } header__navbar-link`}
                onClick={(e) => {
                  window.scrollTo(0, 0);
                }}
              >
                Work
              </Link>
            </li>
            <li className="header__navbar-li">
              <Link
                to="/expertise"
                className={`${
                  isExpertisePage() ? "active-page" : ""
                } header__navbar-link`}
                onClick={(e) => {
                  window.scrollTo(0, 0);
                }}
              >
                Expertise
              </Link>
            </li>
          </ul>
          <Link
            to="contact"
            className={`${
              isContactPage() ? "active-page" : ""
            } header__navbar-link button`}
            onClick={(e) => {
              window.scrollTo(0, 0);
            }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
