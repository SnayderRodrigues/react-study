import React, { useState } from "react";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import Hootsuite from "../../assets/svg/hootsuite.svg";
import Uber from "../../assets/svg/uber.svg";
import UniEssex from "../../assets/svg/university-of-essex.svg";
import Walkme from "../../assets/svg/walkme.svg";
// import "./aboutpage.scss";
import TeamCard from "../../components/TeamCard";
import { FaAsterisk } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

const AboutPage = () => {
  const sliderItems = [
    <div className="aboutPageTestemonials__slider slider-active">
      <h2 className="aboutPageTestemonials__headline">
        "Working with Array Studio was fantastic! They captured the essence of
        our brand perfectly in both photos and videos. The final product
        exceeded our expectations, and the post-production editing was
        flawless."
      </h2>
      <div className="aboutPageTestemonials__author">
        <div className="author-div">
          <span className="author-name">
            <FaAsterisk /> Sarah M.
          </span>
          <span>Bloom Cosmetics</span>
        </div>
      </div>
    </div>,
    <div className="aboutPageTestemonials__slider">
      <h2 className="aboutPageTestemonials__headline">
        "From the initial consultation to the final delivery, Array Studio
        provided exceptional service. Their creativity and attention to detail
        truly shined through. We'll definitely be returning for future
        projects."
      </h2>
      <div className="aboutPageTestemonials__author">
        <div className="author-div">
          <span className="author-name">
            <FaAsterisk /> David L.
          </span>
          <span>The Rustic Table</span>
        </div>
      </div>
    </div>,
    <div className="aboutPageTestemonials__slider">
      <h2 className="aboutPageTestemonials__headline">
        "I was nervous about my headshot photoshoot, but the team at Array
        Studio made me feel comfortable and confident. They helped me achieve a
        professional and polished look that I love."
      </h2>
      <div className="aboutPageTestemonials__author">
        <div className="author-div">
          <span className="author-name">
            <FaAsterisk /> Emily C.
          </span>
          <span>Freelance Writer</span>
        </div>
      </div>
    </div>,
    <div className="aboutPageTestemonials__slider">
      <h2 className="aboutPageTestemonials__headline">
        "Array Studio brought our vision for a product launch video to life.
        Their collaborative spirit and expertise in storytelling made the entire
        process seamless. We couldn't be happier with the final result."
      </h2>
      <div className="aboutPageTestemonials__author">
        <div className="author-div">
          <span className="author-name">
            <FaAsterisk /> John P.
          </span>
          <span>GreenTech Solutions</span>
        </div>
      </div>
    </div>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showItem = (index) => {
    setCurrentIndex(index);
  };

  const prevItem = () => {
    const newIndex =
      currentIndex === 0 ? sliderItems.length - 1 : currentIndex - 1;
    showItem(newIndex);
  };

  const nextItem = () => {
    const newIndex =
      currentIndex === sliderItems.length - 1 ? 0 : currentIndex + 1;
    showItem(newIndex);
  };

  return (
    <main id="aboutpage">
      <section className="aboutPageHero">
        <div className="wrapper aboutPageHero__wrapper">
          <h1 className="aboutPageHero__title">
            Our Story. <br />
            More Than Just a Studio.
          </h1>
        </div>
      </section>
      <section className="aboutPageMission">
        <div className="wrapper aboutPageMission__wrapper">
          <div className="aboutPageMission__image-wrapper">
            <img src={Cat} alt="" />
          </div>
          <h2 className="aboutPageMission__headline">
            We are a <span className="highlight">creative</span> photo and video
            studio passionate about bringing your vision to life. <br />
            Our story began with a love for{" "}
            <span className="highlight">capturing moments</span> and{" "}
            <span className="highlight">crafting stories</span>.
          </h2>
        </div>
      </section>
      <section className="aboutPageCarousel">
        <div className="aboutPageCarousel__wrapper-1">
          <img src={Cat} alt="" className="image-small" />
          <img src={Cat} alt="" className="image-medium" />
          <img src={Cat} alt="" className="image-small" />
          <img src={Cat} alt="" className="image-medium" />
        </div>
        <div className="aboutPageCarousel__wrapper-2">
          <img src={Cat} alt="" className="image-small" />
          <img src={Cat} alt="" className="image-medium" />
          <img src={Cat} alt="" className="image-small" />
          <img src={Cat} alt="" className="image-medium" />
        </div>
      </section>
      <section className="aboutPageClients">
        <div className="wrapper aboutPageClients__wrapper">
          <h2 className="aboutPageClients__headline">
            We collaborate with inspiring brands to bring their vision to life
            through <span className="highlight">powerful visuals</span>.
          </h2>
          <div className="aboutPageClients__cards-wrapper">
            <div className="aboutPageClients__card">
              <img src={Hootsuite} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Hootsuite} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Hootsuite} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Hootsuite} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Uber} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Uber} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Uber} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Uber} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={UniEssex} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={UniEssex} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={UniEssex} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={UniEssex} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Walkme} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Walkme} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Walkme} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Walkme} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="aboutPageTestemonials">
        <div className="wrapper-medium aboutPageTestemonials__wrapper">
          {sliderItems.map((item, index) =>
            React.cloneElement(item, {
              className:
                index === currentIndex
                  ? "aboutPageTestemonials__slider slider-active"
                  : "aboutPageTestemonials__slider",
              key: index,
            })
          )}
          <div className="navigation">
            <div className="navigation-div">
              <button
                onClick={prevItem}
                className="navigation-button-left"
                id="leftButton"
              >
                <IoMdArrowForward />
              </button>
              <button
                onClick={nextItem}
                className="navigation-button-right"
                id="rightButton"
              >
                <IoMdArrowForward />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutPageTeam">
        <div className="wrapper aboutPageTeam__wrapper">
          <h2 className="aboutPageTeam__headline">
            We see the world through a different lens, capturing moments with{" "}
            <span className="highlight">artistry</span> and{" "}
            <span className="highlight">expertise</span>. Our team is a
            powerhouse of <span className="highlight">experience</span> and{" "}
            <span className="highlight">creativity</span>, fueled by a shared
            love for storytelling.
          </h2>
          <div className="aboutPageTeam__cards-wrapper">
            <TeamCard name="Example Name" office="Office Example" />
            <TeamCard name="Example Name" office="Office Example" />
            <TeamCard name="Example Name" office="Office Example" />
            <TeamCard name="Example Name" office="Office Example" />
            <TeamCard name="Example Name" office="Office Example" />
            <TeamCard name="Example Name" office="Office Example" />
            <TeamCard name="Example Name" office="Office Example" />
            <TeamCard name="Example Name" office="Office Example" />
          </div>
        </div>
      </section>
      <section className="aboutPageEnding">
        <div className="wrapper aboutPageEnding__wrapper">
          <h2 className="aboutPageEnding__headline">
            We don't just capture moments, we{" "}
            <span className="highlight">ignite</span> them. Our team of
            passionate experts transforms ideas into{" "}
            <span className="highlight">stunning visuals</span> that leave a
            lasting impression.
          </h2>
          <div className="aboutPageEnding__lists-wrapper">
            <div className="aboutPageEnding__lists">
              <h3>Words that define our team:</h3>
              <div className="aboutPageEnding__lists-div">
                <ul className="aboutPageEnding__lists-ul">
                  <li>Passionate Storytellers</li>
                  <li>Visual Experts</li>
                  <li>Collaborative Spirit</li>
                  <li>Creative Powerhouse</li>
                </ul>
                <ul className="aboutPageEnding__lists-ul">
                  <li>Brand Elevators</li>
                  <li>Technically Savvy</li>
                  <li>Results-Oriented</li>
                  <li>Client-Focused</li>
                </ul>
              </div>
            </div>
            <div className="aboutPageEnding__lists">
              <h3>We definetly are not:</h3>
              <div className="aboutPageEnding__lists-div">
                <ul className="aboutPageEnding__lists-ul">
                  <li>Just Button Pushers</li>
                  <li>Stuck in the Past</li>
                  <li>Stressful Collaborators</li>
                  <li>Overpromising</li>
                </ul>
                <ul className="aboutPageEnding__lists-ul">
                  <li>Sacrifice quality for profit</li>
                  <li>Fearful of Deadlines</li>
                  <li>Lacking Enthusiasm</li>
                  <li>Invisible Partners</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
