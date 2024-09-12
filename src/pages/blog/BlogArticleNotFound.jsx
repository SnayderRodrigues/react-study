import React from "react";
import { Link } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowBack } from "react-icons/io";

const BlogArticleNotFound = () => {
  return (
    <section className="blogArticleNotFound">
      <div className="wrapper blogArticleNotFound__wrapper">
        <h2 className="blogArticleNotFound__headline">Ops! <br />Artigo não encontrado.</h2>
        <Link to="/blog" className="button blogArticleNotFound__button">
          <IoMdArrowBack />
          Retornar ao Blog
        </Link>
        <img src={Cat} alt="" className="blogArticleNotFound__image" />
      </div>
    </section>
  );
};

export default BlogArticleNotFound;
