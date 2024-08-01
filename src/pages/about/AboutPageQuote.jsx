import React from 'react'
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

const AboutPageQuote = () => {
  return (
    <section className="aboutPage-quote">
      <div className="wrapper aboutPage-quote__wrapper">
        <h2 className="aboutPage-quote__headline">
          "Lorem ipsum dolor sit amet, consectetur elit. Adipisci natus et atque
          saepe nisi libero sapiente, molestias."
        </h2>
        <div className="aboutPage-quote__author">
          <img src={Cat} alt="" />
          <span>Exemplo Nome</span>
          <span>CEO e Fundador da Talkative</span>
        </div>
      </div>
    </section>
  );
}

export default AboutPageQuote