import React from "react";
// import "./contactpage.scss";
import { FaAsterisk } from "react-icons/fa";
import ContactPageFooter from "./ContactPageFooter";

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
                    +1 000 000 000
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
      <ContactPageFooter />
    </>
  );
};

export default ContactPage;
