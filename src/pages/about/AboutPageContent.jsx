import React from 'react'
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

const AboutPageContent = () => {
  return (
    <section className="aboutPage-content">
      <div className="wrapper aboutPage-content__wrapper">
        <div className="aboutPage-content__image-wrapper">
          <img src={Cat} alt="" />
        </div>
        <h2 className="aboutPage-content__headline">
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nemo
          eum accusamus! Inventore fuga maxime atque id est, repudiandae ipsam
          omnis nemo dolore quod voluptatibus natus provident! Nostrum, illum
          fugit!"
        </h2>
      </div>
    </section>
  );
}

export default AboutPageContent