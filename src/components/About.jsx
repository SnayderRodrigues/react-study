import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Author from "../img/javier-amador-H4_100XlT9s-unsplash.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".about", {
      scrollTrigger: {
        trigger: ".about",
        // markers: true,
        scrub: true,
        start: "0% 70%",
        end: "100% 70%",
      },
    });

    gsap.to(".about__image-wrapper", {
      width: "100%",
      borderRadius: 0,
      scrollTrigger: {
        trigger: ".about__image-wrapper",
        // markers: true,
        scrub: true,
        start: "0% 70%",
        end: "100% 70%",
      },
    });

    return () => {
      gsap.killTweensOf(".about");
      gsap.killTweensOf(".about__image-wrapper");
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="wrapper about__image-wrapper">
        <img src={Author} alt="" className="about__image" />
      </div>
      <div className="wrapper about__wrapper">
        <div className="about__description">
          <h2>ABOUT US</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
            recusandae sapiente debitis placeat cumque necessitatibus? Quia ab
            assumenda deleniti velit eos, pariatur harum sunt ad, atque est
            optio incidunt ratione.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
            recusandae sapiente debitis placeat cumque necessitatibus? Quia ab
            assumenda deleniti velit eos, pariatur harum sunt ad, atque est
            optio incidunt ratione.
          </p>
          <a href="" className="button link">
            Read more about us
            <FaLongArrowAltRight />
          </a>
        </div>
        <div className="about__cards">
          <div className="about__card">
            <span className="about__card-number">11+</span>
            <span className="about__card-title">Years of experience</span>
          </div>
          <div className="about__card">
            <span className="about__card-number">250+</span>
            <span className="about__card-title">Projects completed</span>
          </div>
          <div className="about__card">
            <span className="about__card-number">230+</span>
            <span className="about__card-title">Happy customers</span>
          </div>
          <div className="about__card">
            <span className="about__card-number">14+</span>
            <span className="about__card-title">Countries vised for work</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
