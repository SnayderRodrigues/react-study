import React from "react";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

const AboutPageContent = () => {
  return (
    <section className="aboutPage-content">
      <div className="wrapper aboutPage-content__wrapper">
        <div className="aboutPage-content__image-wrapper">
          <img src={Cat} alt="" />
        </div>
        <h2 className="aboutPage-content__headline">
          "Lorem ipsum dolor sit amet, consectetur  elit. Adipisci
          natus et atque saepe nisi libero sapiente, molestias."
        </h2>
        <div className="aboutPage-content__author">
          <img src={Cat} alt="" />
          <span>Exemplo Nome</span>
          <span>CEO e Fundador da Talkative</span>
        </div>
      </div>
    </section>
  );
};

export default AboutPageContent;
