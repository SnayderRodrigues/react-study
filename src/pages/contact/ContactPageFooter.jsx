import React from 'react'
import { FaAsterisk } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const ContactPageFooter = () => {
  return (
    <footer id="contactPage-footer" className="contactPage-footer">
      <div className="wrapper contactPage-footer__wrapper">
        <div className="contactPage-footer__informations-wrapper">
          <div className="contactPage-footer__information">
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
        <div className="contactPage-footer__logo-wrapper">
          <div className="contactPage-footer__logo">
            <a href="/">
              <span>Talkative</span>
            </a>
            <span>
              &copy; {new Date().getFullYear()} Talkative. Todos os
              direitos reservados.
            </span>
          </div>
          <div className="contactPage-footer__socials">
            <span>
              <FaAsterisk />
              Redes Sociais
            </span>
            <ul className="contactPage-footer__socials-ul">
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
      </div>
    </footer>
  );
}

export default ContactPageFooter