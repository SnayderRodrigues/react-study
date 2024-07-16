import React from 'react'
import Hero from "./Hero";
import About from './About';
import Blog from "./Blog";
import Expertise from "./Expertise";
import Testemonials from './Testemonials';

const HomePage = () => {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Expertise />
      <Testemonials />
      <Blog />
    </main>
  );
}

export default HomePage