import React from 'react'
import Hero from "./Hero";
import About from './About';
import Blog from "./Blog";
import Expertise from "./Expertise";
import Awards from "./Awards";
import Testemonials from './Testemonials';

const HomePage = () => {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Expertise />
      <Awards />
      <Testemonials />
      <Blog />
    </main>
  );
}

export default HomePage