import { Link } from "react-router-dom";
// import Author from "../img/javier-amador-H4_100XlT9s-unsplash.jpg";
import PresentationVideo from "../../assets/presentation-video.mp4";
import AboutUsPhoto from "../../img/daniel-lee-S9Zo6zF9cWE-unsplash-_1_.webp";
import { IoMdArrowForward } from "react-icons/io";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="wrapper about__image-wrapper">
        {/* <img src={Author} alt="" className="about__image" /> */}
        <video
          src={PresentationVideo}
          preload="none"
          autoPlay
          loop
          disablePictureInPicture
        ></video>
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
                <span>230+</span>
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
