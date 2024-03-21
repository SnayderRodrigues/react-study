import React from "react";
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Collections from "./Collections";
import Awards from "./Awards";
import Contact from "./Contact";

const MainContent = () => {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Work />
      <Collections />
      <Awards />
      <Contact />
    </main>
  );
};

export default MainContent;
