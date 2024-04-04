import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="wrapper hero__wrapper">
        <div className="hero__headline">
          <h1>
            <span>
              [<span className="highlight hero-span-hidden">Array</span>] Studio
            </span>
            <br />
            Photo & Videography
          </h1>
          <p>
            Award-winning travel and landscape photo & videography studio based
            in UK. 📍
          </p>
        </div>
        <div className="hero__button-wrapper">
          <Link to="contact" className="button hero__button">
            Contact Us
          </Link>
          <Link to="work" className="button hero__button">
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
