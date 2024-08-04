import React from "react";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowForward } from "react-icons/io";

const BlogPageHero = () => {
  return (
    <section className="blogPage-hero">
      <div className="wrapper blogPage-hero__wrapper">
        <h1>Talkative Blog</h1>
        <div className="blogPage-hero__posts-wrapper">
          <div className="blogPage-hero__post">
            <img src={Cat} alt="" />
            <span>Categoria</span>
            <span>Lorem ipsum dolor sit amet</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum voluptates.
            </p>
            <a href="" className="button">
              Ler artigo <IoMdArrowForward />
            </a>
          </div>
          <div className="blogPage-hero__post">
            <img src={Cat} alt="" />
            <span>Categoria</span>
            <span>Lorem ipsum dolor sit amet consectetur</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum voluptates.
            </p>
            <a href="" className="button">
              Ler artigo <IoMdArrowForward />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPageHero;
