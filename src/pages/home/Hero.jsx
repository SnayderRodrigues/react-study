import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="wrapper hero__wrapper">
        <div className="hero__headline">
          <h1>
            Producing <br />{" "}
            <span className="highlight hero-span-hidden">Extraordinary</span>{" "}
            Visuals
          </h1>
          <p>Award-winning visual studio based in UK.</p>
        </div>
        <div className="hero__button-wrapper">
          <Link to="contact" className="button hero__button link">
            Contact us
            <IoMdArrowForward />
          </Link>
          <Link to="work" className="button hero__button link">
            See our work
            <IoMdArrowForward />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
