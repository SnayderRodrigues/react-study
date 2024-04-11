import { Link } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import AboutUsPhoto from "../../img/daniel-lee-S9Zo6zF9cWE-unsplash-_1_.webp";
import { IoMdArrowForward } from "react-icons/io";
import Walkme from "../../assets/svg/walkme.svg"
import UniEssex from "../../assets/svg/university-of-essex.svg"
import Uber from "../../assets/svg/uber.svg"
import Hootsuite from "../../assets/svg/hootsuite.svg"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="wrapper about__image-wrapper">
        <img src={Cat} alt="" className="about__image" />
      </div>
      <div className="wrapper about__wrapper">
        <div className="about__headline">
          <h2>
            <span>We capture,</span> <span>craft,</span>{" "}
            <span>and deliver</span>
          </h2>
          <h2>
            <span className="highlight">world-class</span> visual content for
          </h2>
          <h2>
            <span>forward-thinking brands.</span>
          </h2>
        </div>

        <div className="about__cards-wrapper">
          <div className="about__card">
            <img src={Hootsuite} alt="" />
          </div>
          <div className="about__card">
            <img src={Uber} alt="" />
          </div>
          <div className="about__card">
            <img src={UniEssex} alt="" />
          </div>
          <div className="about__card">
            <img src={Walkme} alt="" />
          </div>
        </div>

        <h2>OUR PASSION IS IN EVERY FRAME</h2>
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
                <IoMdArrowForward />
              </Link>
            </div>
            <div className="about__content-text-2">
              <div>
                <span>11+</span>
                <span>Years of experience</span>
              </div>

              <div>
                <span>250+</span>
                <span>Projects completed</span>
              </div>

              <div>
                <span>200+</span>
                <span>Happy customers</span>
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
