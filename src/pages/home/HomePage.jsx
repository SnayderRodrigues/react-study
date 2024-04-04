import React from 'react'
import Hero from "./Hero";
import About from './About';
import Work from "./Work";
import Expertise from "./Expertise";
import Awards from "./Awards";

const HomePage = () => {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Work />
      <Expertise />
      <Awards />
    </main>
  );
}

export default HomePage