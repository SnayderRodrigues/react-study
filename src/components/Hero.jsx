import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="wrapper hero__wrapper">
        <div className="hero__headline">
          <span>Pro Photographer</span>
          <h1>Henry Anderson.</h1>
          <p>Award-winning travel and landscape photographer based in UK.</p>
        </div>
        <div className="hero__button-wrapper">
          <a href="" className="button hero__button">
            Hire me
          </a>
          <a href="" className="button hero__button">
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
