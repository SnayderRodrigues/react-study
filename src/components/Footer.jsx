import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaUnsplash } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="wrapper footer__wrapper">
        <div className="footer__logo-wrapper">
          <a href="" className="footer__logo">
            <h2>
              [Name] <br />
              Studio
            </h2>
            <h3>Photo & Videography</h3>
          </a>
        </div>
        <div className="footer__navigation">
          <ul className="footer__navigation-ul">
            <li>
              <a href="" className="link button">
                Home
              </a>
            </li>
            <li>
              <a href="" className="link button">
                About
              </a>
            </li>
            <li>
              <a href="" className="link button">
                Work
              </a>
            </li>
            <li>
              <a href="" className="link button">
                Expertise
              </a>
            </li>
            <li>
              <a href="" className="link button">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__socials">
          <span>Our Socials</span>
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
      <div className="wrapper footer__copyright">
        <span>© 2024 [Name] Studio. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
