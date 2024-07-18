import React from "react";
import ContactPageFooter from "./ContactPageFooter";
import ContactPageForm from "./ContactPageForm";

const ContactPage = () => {
  return (
    <>
      <main id="contactpage">
        <ContactPageForm />
      </main>
      <ContactPageFooter />
    </>
  );
};

export default ContactPage;
