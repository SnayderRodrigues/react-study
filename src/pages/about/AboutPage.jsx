import React from "react";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
// import "./aboutpage.scss";
import TeamCard from "../../components/TeamCard";
import Cta from "../../components/Cta";

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
          <div className="aboutPageMission__image-wrapper">
            <img src={Cat} alt="" />
          </div>
          <h2 className="aboutPageMission__headline">
            <span className="highlight">Lorem ipsum</span> dolor sit amet
            consectetur adipisicing elit. Minima magnam deserunt optio molestiae
            possimus quam dolores dolor.
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
            <span className="highlight">Lorem ipsum</span> dolor sit amet
            consectetur adipisicing elit. Minima magnam deserunt optio molestiae
            possimus quam dolores dolor.
          </h2>
          <div className="aboutPageClients__cards-wrapper">
            <div className="aboutPageClients__card">
              <img src={Cat} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Cat} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Cat} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Cat} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Cat} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Cat} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Cat} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Cat} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Cat} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Cat} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Cat} alt="" />
            </div>
            <div className="aboutPageClients__card">
              <img src={Cat} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="aboutPageHistory">
        <div className="wrapper aboutPageHistory__wrapper">
          <h2 className="aboutPageHistory__headline">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            maxime asperiores velit tempora hic quisquam corporis soluta
            sapiente qui blanditiis adipisci impedit accusamus molestiae quas
            cum id ipsa tenetur cumque."
          </h2>
        </div>
      </section>
      <section className="aboutPageTeam">
        <div className="wrapper aboutPageTeam__wrapper">
          <h2 className="aboutPageTeam__headline">
            <span className="highlight">Lorem ipsum</span> dolor sit amet
            consectetur adipisicing elit. Minima magnam deserunt optio molestiae
            possimus quam dolores dolor.
          </h2>
          <div className="aboutPageTeam__cards-wrapper">
            <TeamCard name="Example Name" office="Office Example"/>
            <TeamCard name="Example Name" office="Office Example"/>
            <TeamCard name="Example Name" office="Office Example"/>
            <TeamCard name="Example Name" office="Office Example"/>
            <TeamCard name="Example Name" office="Office Example"/>
            <TeamCard name="Example Name" office="Office Example"/>
            <TeamCard name="Example Name" office="Office Example"/>
            <TeamCard name="Example Name" office="Office Example"/>
          </div>
        </div>
      </section>
      <section className="aboutPageEnding">
        <div className="wrapper aboutPageEnding__wrapper">
          <h2 className="aboutPageEnding__headline">
            <span className="highlight">Lorem ipsum</span> dolor sit amet
            consectetur adipisicing elit. Minima magnam deserunt optio molestiae
            possimus quam dolores dolor.
          </h2>
          <div className="aboutPageEnding__lists-wrapper">
            <div className="aboutPageEnding__lists">
              <h3>Example Headline</h3>
              <div className="aboutPageEnding__lists-div">
                <ul className="aboutPageEnding__lists-ul">
                  <li>Example text</li>
                  <li>Example text</li>
                  <li>Example text</li>
                  <li>Example text</li>
                </ul>
                <ul className="aboutPageEnding__lists-ul">
                  <li>Example text</li>
                  <li>Example text</li>
                  <li>Example text</li>
                  <li>Example text</li>
                </ul>
              </div>
            </div>
            <div className="aboutPageEnding__lists">
              <h3>Example Headline</h3>
              <div className="aboutPageEnding__lists-div">
                <ul className="aboutPageEnding__lists-ul">
                  <li>Example text</li>
                  <li>Example text</li>
                  <li>Example text</li>
                  <li>Example text</li>
                </ul>
                <ul className="aboutPageEnding__lists-ul">
                  <li>Example text</li>
                  <li>Example text</li>
                  <li>Example text</li>
                  <li>Example text</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </main>
  );
};

export default AboutPage;
