import React from "react";
import AboutPageHero from "./AboutPageHero";
import AboutPageTeam from "./AboutPageTeam";
import AboutPageContent from "./AboutPageContent";
import AboutPageTestemonials from "./AboutPageTestemonials";
import AboutPageExpertise from "./AboutPageExpertise";

const AboutPage = () => {
  return (
    <main id="aboutpage">
      <AboutPageHero />
      <AboutPageTeam />
      <AboutPageContent />
      <AboutPageExpertise />
      <AboutPageTestemonials />
    </main>
  );
};

export default AboutPage;
