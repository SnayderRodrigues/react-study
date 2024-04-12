import React from "react";
// import "./contactpage.scss";
import { FaAsterisk } from "react-icons/fa";
import ContactPageFooter from "./ContactPageFooter";

const ContactPage = () => {
  return (
    <>
      <main id="contactpage">
        <section className="contactPage">
          <div className="wrapper-contact contactPage__wrapper ">
            <div className="contactPage__headline">
              <h1>Get in touch with us</h1>
            </div>
            <div className="contactPage__contact">
              <div className="contactPage__contact-address">
                <span className="contactPage__contact-title">
                  <FaAsterisk />
                  Address
                </span>
                <span className="address-span">000 Example Avenue</span>
                <span className="address-span">London AAA 000</span>
                <span className="address-span"> United Kingdom</span>
              </div>
              <div className="contactPage__contact-links">
                <span className="contactPage__contact-title">
                  <FaAsterisk />
                  Contact
                </span>
                <span className="link-span">+1 000 000 000</span>
                <span className="link-span">contact@arraystudio.com</span>
              </div>
              <div className="contactPage__contact-socials">
                <span className="contactPage__contact-title">
                  <FaAsterisk />
                  Socials
                </span>
                <span>Instagram</span>
                <span>LinkedIn</span>
                <span>Unsplash</span>
                <span>X</span>
              </div>
            </div>
            <div className="contactPage__form">
              <div className="contactPage__form-headline">
                <h2>Send us a message</h2>
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
      <ContactPageFooter />
    </>
  );
};

export default ContactPage;
