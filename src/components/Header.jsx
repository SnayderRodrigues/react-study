import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Função para verificar se o usuário está na rota "/about"
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
            [<span className="highlight">Array</span>] Studio
          </a>
          <ul className="header__navbar-ul">
            <li className="header__navbar-li">
              <Link
                to="/"
                className={`${
                  isHomePage() ? "active-page" : ""
                } header__navbar-link`}
              >
                Home
              </Link>
            </li>
            <li className="header__navbar-li">
              <Link
                to="/about"
                id="about-page"
                // className={isAboutPage() ? "active-page" : ""}
                className={`${
                  isAboutPage() ? "active-page" : ""
                } header__navbar-link`}
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
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
