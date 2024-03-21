import React from "react";
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Collections from "./Collections";
import Awards from "./Awards";
import Testemonials from "./Testemonials";
import Contact from "./Contact";

const MainContent = () => {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Work />
      <Collections />
      <Awards />
      <Testemonials />
      <Contact />
    </main>
  );
};

export default MainContent;
