import React from "react";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import "./aboutpage.scss";

const AboutPage = () => {
  return (
    <main>
      <section className="aboutPageHero">
        <div className="wrapper aboutPageHero__wrapper">
          <h1 className="aboutPageHero__title">About Us Example Text</h1>
        </div>
      </section>
      <section className="aboutPageMission">
        <div className="wrapper aboutPageMission__wrapper">
          <h2 className="aboutPageMission__headline">
            <span className="highlight">Human experiences</span> are the
            foundation of everything we do – client relationships, team
            collaboration and an unwavering focus on the end user. This
            philosophy is in our name, our core values and underpins our
            approach to every engagement.
          </h2>
        </div>
      </section>
      <section className="aboutPageHistory">
        <div className="wrapper aboutPageHistory__wrapper">
          <h2 className="aboutPageHistory__title">Section Title</h2>
        </div>
      </section>
      <section className="aboutPageCarousel">
        <div className="aboutPageCarousel__wrapper">
          <img src={Cat} alt="" className="image-small" />
          <img src={Cat} alt="" className="image-medium" />
          <img src={Cat} alt="" className="image-small" />
          <img src={Cat} alt="" className="image-medium" />
          <img src={Cat} alt="" className="image-small" />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
