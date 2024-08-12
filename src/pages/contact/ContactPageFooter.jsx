import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";

const ContactPageFooter = () => {
  return (
    <footer id="contactPage-footer" className="contactPage-footer">
      <div className="wrapper contactPage-footer__wrapper">
        <div className="contactPage-footer__link-columns">
          <a href="/" className="contactPage-footer__logo">
            Talkative
          </a>
          <div>
            <div className="contactPage-footer__navigation-wrapper">
              <span>Talkative</span>
              <ul className="contactPage-footer__navigation-ul">
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
                  <Link to="/blog" className="link">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="link">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div className="contactPage-footer__socials-wrapper">
              <span>Sociais</span>
              <ul className="contactPage-footer__socials-ul">
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
            <div className="contactPage-footer__contact-wrapper">
              <span>Contato</span>
              <Link to="/">(00) 00000-0000</Link>
              <Link to="/">contato@talkative.com</Link>
            </div>
          </div>
        </div>
        <div className="contactPage-footer__legal-wrapper">
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

export default ContactPageFooter;
