import React from "react";
import AboutPageHero from "./AboutPageHero";
import AboutPageTeam from "./AboutPageTeam";
import AboutPageQuote from "./AboutPageQuote";
import AboutPageInfo from "./AboutPageInfo";
import AboutPageTestimonials from "./AboutPageTestimonials";
import AboutPageExpertise from "./AboutPageExpertise";
import Faq from "../home/Faq"

const AboutPage = () => {
  return (
    <main id="aboutpage">
      <AboutPageHero />
      <AboutPageTeam />
      <AboutPageQuote />
      <AboutPageInfo />
      <AboutPageExpertise />
      <AboutPageTestimonials />
      <Faq />
    </main>
  );
};

export default AboutPage;
