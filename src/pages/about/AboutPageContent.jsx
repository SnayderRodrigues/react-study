import React from 'react'
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

const AboutPageContent = () => {
  return (
    <section className="aboutPageMission">
      <div className="wrapper aboutPageMission__wrapper">
        <div className="aboutPageMission__image-wrapper">
          <img src={Cat} alt="" />
        </div>
        <h2 className="aboutPageMission__headline">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nemo
          eum accusamus! Inventore fuga maxime atque id est, repudiandae ipsam
          omnis nemo dolore quod voluptatibus natus provident! Nostrum, illum
          fugit!
        </h2>
      </div>
      <div className="aboutPageCarousel">
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
      </div>
    </section>
  );
}

export default AboutPageContent