import React from "react";
// import "./contactpage.scss";
import { FaAsterisk } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaUnsplash } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

const ContactPage = () => {
  return (
    <>
      <main>
        <section className="contactPage">
          <div className="wrapper contactPage__wrapper ">
            <div className="contactPage__form">
              <div className="contactPage__form-headline">
                <h1>Let's get started.</h1>
                <span>
                  Fill the form bellow or get in touch through our phone or
                  email:
                </span>
                <div>
                  <span>
                    <FaAsterisk />
                    9999 999 999
                  </span>
                  <span>
                    <FaAsterisk />
                    contact@arraystudio.com
                  </span>
                </div>
              </div>
              <div className="contactPage__form-half">
                <label>
                  What's your name?<span className="highlight">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name here"
                  aria-required="true"
                />
              </div>
              <div className="contactPage__form-half">
                <label>
                  Name of your company / brand?
                  <span className="highlight">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  aria-required="true"
                />
              </div>
              <div className="contactPage__form-half">
                <label>
                  What's your phone number?<span className="highlight">*</span>
                </label>
                <input
                  type="number"
                  placeholder="Your phone number"
                  aria-required="true"
                />
              </div>
              <div className="contactPage__form-half">
                <label>
                  What's your email address?<span className="highlight">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-required="true"
                />
              </div>
              <div className="contactPage__form-full">
                <label>Tell us about the project</label>
                <span>
                  Need stunning photos or videos for your brand? Let us know how
                  we can help.
                </span>
                <textarea name="message" id="" rows="6"></textarea>
              </div>

              <button className="button link">Submit</button>
            </div>
          </div>
        </section>
      </main>
      <footer id="contactPage-footer" className="contactPage-footer">
        <div className="wrapper contactPage-footer__wrapper">
          <div className="contactPage-footer__informations-wrapper">
            <div className="contactPage-footer__information">
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
              &copy; {new Date().getFullYear()} Array Studio. All rights
              reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactPage;
