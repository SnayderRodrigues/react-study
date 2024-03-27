import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="wrapper hero__wrapper">
        <div className="hero__headline">
          <h1>
            <span>Photographer</span> <br />
            Henry Anderson.
          </h1>
          <p>Award-winning travel and landscape photographer based in UK 📍</p>
        </div>
        <div className="hero__button-wrapper">
          <a href="" className="button hero__button">
            Contact me
          </a>
          <a href="" className="button hero__button">
            See my work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
