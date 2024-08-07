import React from 'react'
import Hero from "./Hero";
import About from './About';
import Expertise from "./Expertise";
import Testimonials from './Testimonials';
import Cta from './Cta';
import Faq from './Faq';
import Blog from "./Blog";

const HomePage = () => {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Expertise />
      <Testimonials />
      <Cta />
      <Faq />
      <Blog />
    </main>
  );
}

export default HomePage