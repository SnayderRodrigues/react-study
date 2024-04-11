import React from 'react'
import { FaAsterisk } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaUnsplash } from "react-icons/fa";

const ContactPageFooter = () => {
  return (
    <footer id="contactPage-footer" className="contactPage-footer">
      <div className="wrapper contactPage-footer__wrapper">
        <div className="contactPage-footer__informations-wrapper">
          <div className="contactPage-footer__information">
            <div>
              <span>
                <FaAsterisk />
                Reach Us
              </span>
              <span>+1 000 000 000</span>
              <span>contact@arraystudio.com</span>
            </div>
            <div>
              <span>
                <FaAsterisk />
                Address
              </span>
              <span>000 Example Avenue,</span>
              <span>London AAA 000, UK</span>
            </div>
          </div>
          <div className="contactPage-footer__socials">
            <span>
              <FaAsterisk />
              Our Socials
            </span>
            <ul className="contactPage-footer__socials-ul">
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
        <div className="contactPage-footer__logo">
          <a href="/">
            <span>
              [<span className="highlight">Array</span>] Studio
            </span>
          </a>
          <span>
            &copy; {new Date().getFullYear()} Array Studio. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default ContactPageFooter