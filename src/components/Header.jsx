import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const headerRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const isHomePage = () => {
    return location.pathname === "/";
  };
  const isAboutPage = () => {
    return location.pathname === "/about";
  };
  const isCoursesPage = () => {
    return location.pathname.startsWith("/courses");
  };
  const isBlogPage = () => {
    return location.pathname.startsWith("/blog");
  };
  const isContactPage = () => {
    return location.pathname === "/contact";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const header = headerRef.current;
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };


  return (
    <header ref={headerRef} id="header" className="header">
      <div className="wrapper header__wrapper">
        <nav className="header__navbar">
          <a href="/" className="header__logo" onClick={scrollToTop}>
            <span>Talkative</span>
          </a>
          <ul className={`header__navbar-ul ${openMenu ? "open" : ""}`}>
            <li className="header__navbar-li">
              <Link
                to="/"
                className={`${
                  isHomePage() ? "active-page" : ""
                } header__navbar-link`}
                onClick={scrollToTop}
              >
                Início
              </Link>
            </li>
            <li className="header__navbar-li">
              <Link
                to="/about"
                id="about-page"
                className={`${
                  isAboutPage() ? "active-page" : ""
                } header__navbar-link`}
                onClick={scrollToTop}
              >
                Sobre
              </Link>
            </li>
            <li className="header__navbar-li">
              <Link
                to="/courses"
                className={`${
                  isCoursesPage() ? "active-page" : ""
                } header__navbar-link`}
                onClick={scrollToTop}
              >
                Cursos
              </Link>
            </li>
            <li className="header__navbar-li">
              <Link
                to="/blog"
                className={`${
                  isBlogPage() ? "active-page" : ""
                } header__navbar-link`}
                onClick={scrollToTop}
              >
                Blog
              </Link>
            </li>
            <li className="header__navbar-li">
              <Link
                to="/contact"
                className={`${
                  isContactPage() ? "active-page" : ""
                } header__navbar-link`}
                onClick={scrollToTop}
              >
                Contato
              </Link>
            </li>
          </ul>
          <Link
            to="contact"
            className={`${
              isContactPage() ? "active-page" : ""
            } header__navbar-link button`}
            onClick={scrollToTop}
          >
            Contato
          </Link>
          <div
            className={`header__menu ${openMenu ? "open" : ""}`}
            onClick={handleOpenMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
