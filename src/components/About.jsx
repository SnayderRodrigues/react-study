import React from "react";
import Cats from "../img/IMG_20200407_163224926_HDR-01.jpeg";
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="wrapper about__wrapper">
        <div className="about__image-wrapper">
          <img src={Cats} alt="" className="about__image" />
        </div>
        <div className="about__description">
          <h2>ABOUT ME</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
            recusandae sapiente debitis placeat cumque necessitatibus? Quia ab
            assumenda deleniti velit eos, pariatur harum sunt ad, atque est
            optio incidunt ratione.
          </p>
          <a href="" className="button link">
            Read more about me
            <FaLongArrowAltRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
