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
            <span className="highlight">Lorem ipsum</span> dolor sit amet
            consectetur adipisicing elit. Minima magnam deserunt optio molestiae
            possimus quam dolores dolor.
          </h2>
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
      <section className="aboutPageClients">
        <div className="wrapper aboutPageClients__wrapper">
          <h2 className="aboutPageClients__headline">
            <span className="highlight">Lorem ipsum</span> dolor sit amet
            consectetur adipisicing elit. Minima magnam deserunt optio molestiae
            possimus quam dolores dolor.
          </h2>
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
            <div className="aboutPageTeam__card">
              <div>
                <span>[Name Example]</span>
                <span>Office Example</span>
              </div>
            </div>
            <div className="aboutPageTeam__card">
              <div>
                <span>[Name Example]</span>
                <span>Office Example</span>
              </div>
            </div>
            <div className="aboutPageTeam__card">
              <div>
                <span>[Name Example]</span>
                <span>Office Example</span>
              </div>
            </div>
            <div className="aboutPageTeam__card">
              <div>
                <span>[Name Example]</span>
                <span>Office Example</span>
              </div>
            </div>
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
    </main>
  );
};

export default AboutPage;