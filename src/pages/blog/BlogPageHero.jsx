import React from "react";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowForward } from "react-icons/io";

const BlogPageHero = () => {
  return (
    <section className="blogPage-hero">
      <div className="wrapper blogPage-hero__wrapper">
        <div className="blogPage-hero__wrapper">
          <img src={Cat} alt="" className="blogPage-hero__image" />
          <div className="blogPage-hero__headline">
            <span>Talkative Blog</span>
            <h1>
              Descubra dicas, estratégias e inspirações para dominar o inglês
            </h1>
            <p>
              No blog da Talkative, exploramos tudo sobre o aprendizado de
              inglês, desde técnicas eficazes de estudo até histórias de sucesso
              que vão te motivar a atingir a fluência.
            </p>
            <a href="#blogPageFeatured" className="button">
              Navegar pelos artigos <IoMdArrowForward />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPageHero;
