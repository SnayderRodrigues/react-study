import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="wrapper hero__wrapper">
        <div className="hero__headline">
          <h1>
            [Name] Studio
            <br />
            <span>Photo & Videography</span>
          </h1>
          <p>
            Award-winning travel and landscape photo & videography studio based
            in UK. 📍
          </p>
        </div>
        <div className="hero__button-wrapper">
          <a href="" className="button hero__button">
            Contact Us
          </a>
          <a href="" className="button hero__button">
            See our work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
