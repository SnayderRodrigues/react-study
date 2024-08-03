import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="wrapper hero__wrapper">
        <div className="hero__headline-wrapper">
          <h1>
            A Escola de Inglês que {" "}
            <span className="highlight hero-span-hidden">Você Merece</span>.
          </h1>
          <p>
            Imagine ter a confiança para se comunicar em qualquer situação,
            conquistar seus sonhos profissionais e explorar o mundo.
          </p>
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
        <div className="hero__image-wrapper">
          <img src={Cat} alt="" className="hero__image" />
          <img src={Cat} alt="" className="hero__image" />
          <img src={Cat} alt="" className="hero__image" />
          <img src={Cat} alt="" className="hero__image" />
          <img src={Cat} alt="" className="hero__image" />
          <img src={Cat} alt="" className="hero__image" />
          <img src={Cat} alt="" className="hero__image" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
