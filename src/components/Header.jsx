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

  return (
    <header id="header" className="header">
      <div className="wrapper">
        <nav className="header__navbar">
          <a href="/" className="header__logo">
            [<span>Array</span>] Studio
          </a>
          <ul className="header__navbar-ul">
            <li className="header__navbar-li">
              <Link to="/" className="header__navbar-link active-page">
                Home
              </Link>
            </li>
            <li className="header__navbar-li">
              <Link to="about" className="header__navbar-link">
                About
              </Link>
            </li>
            <li className="header__navbar-li">
              <Link to="work" className="header__navbar-link">
                Work
              </Link>
            </li>
            <li className="header__navbar-li">
              <Link to="expertise" className="header__navbar-link">
                Expertise
              </Link>
            </li>
          </ul>
          <Link to="contact" className="button">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
