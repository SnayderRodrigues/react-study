import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Author from "../img/javier-amador-H4_100XlT9s-unsplash.jpg";
import AboutUsPhoto from "../img/daniel-lee-S9Zo6zF9cWE-unsplash-_1_.webp";
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

    gsap.to(".line-hidden", {
      y: 0,
      stagger: 0.1,
      delay: 0,
      duration: 0.1,
      scrollTrigger: {
        trigger: ".line-hidden",
        // markers: true,
        // scrub: true,
        start: "0% 90%",
        end: "100% 90%",
      },
    });

    gsap.to(".card-hidden", {
      y: 0,
      stagger: 0.1,
      delay: 0,
      duration: 0.1,
      scrollTrigger: {
        trigger: ".card-hidden",
        // markers: true,
        // scrub: true,
        start: "0% 90%",
        end: "100% 90%",
      },
    });

    return () => {
      gsap.killTweensOf(".line-hidden");
      gsap.killTweensOf(".card-hidden");
      gsap.killTweensOf(".about__image-wrapper");
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="wrapper about__image-wrapper">
        <img src={Author} alt="" className="about__image" />
      </div>
      <div className="wrapper about__wrapper">
        
          <div className="about__headline">
            <h2>
              <span className="line-hidden">
                <span className="word-hidden">We capture,</span>{" "}
                <span className="word-hidden">craft,</span>{" "}
                <span className="word-hidden">and deliver</span>
              </span>{" "}
            </h2>
            <h2>
              <div className="line-hidden">
                <span className="highlight">world-class</span> visual content
                for
              </div>
            </h2>
            <h2>
              <span className="line-hidden">forward-thinking brands.</span>
            </h2>
          </div>

          <div className="about__cards-wrapper">
            <div className="about__card card-hidden">
              <span className="about__card-number">11+</span>
              <span className="about__card-title">Years of experience</span>
            </div>
            <div className="about__card card-hidden">
              <span className="about__card-number">250+</span>
              <span className="about__card-title">Projects completed</span>
            </div>
            <div className="about__card card-hidden">
              <span className="about__card-number">230+</span>
              <span className="about__card-title">Happy customers</span>
            </div>
            <div className="about__card card-hidden">
              <span className="about__card-number">14+</span>
              <span className="about__card-title">
                Countries vised for work
              </span>
            </div>
          </div>

          <h2>WE LOVE WHAT WE DO</h2>
          <div className="about__content-wrapper">
            <div className="about__content-description">
              <div className="about__content-text-1">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                  recusandae sapiente debitis placeat cumque necessitatibus? Quia
                  ab assumenda deleniti velit.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                  recusandae sapiente debitis placeat cumque necessitatibus?
                </p>
                <Link to="about" className="button link">
                  Read more about us
                  <FaLongArrowAltRight />
                </Link>
              </div>
              <div className="about__content-text-2">
                <div>
                  <span>100%</span>
                  <h3>Example text</h3>
                </div>
                <div>
                  <span>100%</span>
                  <h3>Example text</h3>
                </div>
                <div>
                  <span>100%</span>
                  <h3>Example text</h3>
                </div>
              </div>
            </div>
            <div className="about__content-image">
              <img src={AboutUsPhoto} alt="" />
            </div>
          </div>
        
      </div>
    </section>
  );
};

export default About;
