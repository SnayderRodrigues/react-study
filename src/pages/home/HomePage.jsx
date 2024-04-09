import React from 'react'
import Hero from "./Hero";
import About from './About';
import Work from "./Work";
import Expertise from "./Expertise";
import Awards from "./Awards";
import Testemonials from './Testemonials';
import Cta from "../../components/Cta";

const HomePage = () => {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Work />
      <Expertise />
      <Awards />
      <Testemonials />
      <Cta />
    </main>
  );
}

export default HomePage