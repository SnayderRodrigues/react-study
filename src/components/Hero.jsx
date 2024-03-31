import React from "react";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  useLayoutEffect(() => {
    gsap.to(".word-hidden", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });

    return () => {
      gsap.killTweensOf(".word-hidden");
    };
  }, []);

  return (
    <section className="hero">
      <div className="wrapper hero__wrapper">
        <div className="hero__headline">
          <h1>
            <div className="word-hidden">
              [<span>Array</span>] Studio
              <br />
              Photo & Videography
            </div>
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
