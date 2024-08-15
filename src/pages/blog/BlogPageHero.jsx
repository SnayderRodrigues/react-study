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
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
              impedit amet culpa odio illum. Reiciendis nisi porro atque aliquam
              adipisci deserunt.
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
