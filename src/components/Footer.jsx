import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaAsterisk } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

const Footer = () => {

  // const contactLink = (e) => e.target.textContent = "Let's create something extraordinary!";

  return (
    <footer id="footer" className="footer">
      <div className="wrapper contact__wrapper">
        <div className="contact__headline">
          <span>Abra portas para o seu futuro:</span>
          <Link to="contact" className="footer__contact-link">
            <span>
              <span className="link">
                Junte-se a nós hoje <IoMdArrowForward />
              </span>
              e comece sua jornada.
            </span>
          </Link>
        </div>
        <div className="contact__information">
          <div>
            <span>
              <FaAsterisk />
              Contato
            </span>
            <span>(00) 00000-0000</span>
            <span>contato@talkative.com</span>
          </div>
        </div>
      </div>
      <div className="wrapper footer__wrapper">
        <div className="footer__logo-wrapper">
          <a href="/" className="footer__logo">
            <span>Talkative</span>
          </a>
          <span>
            &copy; {new Date().getFullYear()} Talkative. Todos os direitos
            reservados.
          </span>
        </div>
        <div className="footer__socials-wrapper">
          <span>
            <FaAsterisk />
            Redes Sociais
          </span>
          <ul className="footer__socials-ul">
            <li>
              <a href="" className="link button">
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a href="" className="link button">
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a href="" className="link button">
                <FaLinkedinIn /> LinkedIn
              </a>
            </li>
            <li>
              <a href="" className="link button">
                <FaXTwitter /> X
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
