import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaUnsplash } from "react-icons/fa";
import { FaAsterisk } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

const Footer = () => {

  // const contactLink = (e) => e.target.textContent = "Let's create something extraordinary!";

  return (
    <footer id="footer" className="footer">
      <div className="wrapper contact__wrapper">
        <div className="contact__headline">
          <span>Your Story, Our Lens:</span>
          <Link to="contact">
            Let's create <IoMdArrowForward />
            something extraordinary
          </Link>
          {/* <Link to="contact" onClick={(e) => contactLink(e)}>
            Let's create <IoMdArrowForward />
            something extraordinary
          </Link> */}
        </div>
        <div className="contact__information">
          <div>
            <span>
              <FaAsterisk />
              Reach Us
            </span>
            <span>9999 999 999</span>
            <span>contact@arraystudio.com</span>
          </div>
          <div>
            <span>
              <FaAsterisk />
              Address
            </span>
            <span>999 Example Avenue,</span>
            <span>London AAA 000, UK</span>
          </div>
        </div>
      </div>
      <div className="wrapper footer__wrapper">
        <div className="footer__logo-wrapper">
          <a href="/" className="footer__logo">
            <span>
              [<span className="highlight">Array</span>] Studio
            </span>
          </a>
          <span>
            &copy; {new Date().getFullYear()} Array Studio. All rights reserved.
          </span>
        </div>
        <div className="footer__socials">
          <span>
            <FaAsterisk />
            Our Socials
          </span>
          <ul className="footer__socials-ul">
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
                <FaUnsplash /> Unsplash
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
