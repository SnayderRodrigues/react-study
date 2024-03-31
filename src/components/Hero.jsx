import React from "react";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  useLayoutEffect(() => {
    gsap.to(".hero-word-hidden", {
      x: 0,
      stagger: 0.05,
      delay: 0.3,
      duration: 0.1,
    });

    gsap.to(".hero-span-hidden", {
      opacity: 1,
      stagger: 0.05,
      delay: 0.3,
      duration: 0.1,
    });

    return () => {
      gsap.killTweensOf(".hero-word-hidden");
    };
  }, []);

  return (
    <section className="hero">
      <div className="wrapper hero__wrapper">
        <div className="hero__headline">
          <h1>
            <span className="hero-span-opaque">[</span>
            <span className="hero-word-hidden">
              <span className="highlight hero-span-hidden">Array</span>] Studio
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
