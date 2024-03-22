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
              HENRY <br />
              ANDERSON
            </h2>
            <h3>PRO PHOTOGRAPHER</h3>
          </a>
        </div>
        <div className="footer__navigation">
          <ul className="footer__navigation-ul">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Work</a>
            </li>
            <li>
              <a href="">Awards</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer__socials">
          <span>My Socials</span>
          <ul className="footer__socials-ul">
            <li>
              <a href="" className="link">
                <FaLinkedinIn /> LinkedIn
              </a>
            </li>
            <li>
              <a href="" className="link">
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a href="" className="link">
                <FaUnsplash /> Unsplash
              </a>
            </li>
            <li>
              <a href="" className="link">
                <FaXTwitter /> X
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrapper footer__copyright">
        <span>© 2024 Henry Anderson. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
