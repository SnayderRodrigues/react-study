import React from "react";
import AboutPageHero from "./AboutPageHero";
import AboutPageTeam from "./AboutPageTeam";
import AboutPageQuote from "./AboutPageQuote";
import AboutPageInfo from "./AboutPageInfo";
import AboutPageTestemonials from "./AboutPageTestemonials";
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
      <AboutPageTestemonials />
      <Faq />
    </main>
  );
};

export default AboutPage;
