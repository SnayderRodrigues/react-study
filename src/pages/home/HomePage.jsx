import React from 'react'
import Hero from "../../components/Hero";
import About from "../../components/About";
import Work from "../../components/Work";
import Expertise from "../../components/Expertise";
import Awards from "../../components/Awards";
import Contact from "../../components/Contact";

const HomePage = () => {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Work />
      <Expertise />
      <Awards />
      <Contact />
    </main>
  );
}

export default HomePage