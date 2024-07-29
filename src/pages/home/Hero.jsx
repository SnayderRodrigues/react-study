import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="wrapper hero__wrapper">
        <div className="hero__headline">
          <h1>
            A Escola de Inglês que Você <br />{" "}
            <span className="highlight hero-span-hidden">Merece</span>.
          </h1>
          <p>
            Imagine ter a confiança para se comunicar em qualquer situação,
            conquistar seus sonhos profissionais e explorar o mundo.
          </p>
        </div>
        <div className="hero__button-wrapper">
          <Link to="contact" className="button hero__button link">
            Entre em contato
            <IoMdArrowForward />
          </Link>
          <Link to="about" className="button hero__button link">
            Sobre nós
            <IoMdArrowForward />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
