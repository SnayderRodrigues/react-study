import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="wrapper footer__wrapper">
        <Link to="contact" className="footer__headline">
          <span>
            <span className="link">
              Matricule-se hoje <IoMdArrowForward />
            </span>
            e comece sua jornada
          </span>
        </Link>
        <div className="footer__link-columns">
          <a href="/" className="footer__logo">
            Talkative
          </a>
          <div>
            <div className="footer__navigation-wrapper">
              <span>Talkative</span>
              <ul className="footer__navigation-ul">
                <li>
                  <Link to="/" className="link">
                    Início
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="link">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="link">
                    Cursos
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="link">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__socials-wrapper">
              <span>Sociais</span>
              <ul className="footer__socials-ul">
                <li>
                  <Link to="/" className="link">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    X
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__contact-wrapper">
              <span>Contato</span>
              <Link to="/">(00) 00000-0000</Link>
              <Link to="/">contato@talkative.com</Link>
            </div>
          </div>
        </div>
        <div className="footer__legal-wrapper">
          <span>© Talkative, 2024.</span>
          <Link to="/" className="link">
            Termos de uso <IoMdArrowForward />
          </Link>
          <Link to="/" className="link">
            Políticas de privacidade <IoMdArrowForward />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
