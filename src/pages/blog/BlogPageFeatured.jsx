import React from "react";
import { Link } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowForward } from "react-icons/io";

const FeaturedPost = ({ image, category, readTime, date, title, slug }) => (
  <div className="blogPage-featured__post">
    <img
      src={image}
      alt={`Imagem de ${title}`}
      className="blogPage-featured__post-image"
    />
    <div className="blogPage-featured__post-text">
      <span>{category}</span>
      <span>{title}</span>
      <div>
        <span>{date}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>
      <Link to={`/blog/${slug}`} className="button">
        Ler artigo <IoMdArrowForward />
      </Link>
    </div>
  </div>
);

const BlogPageFeatured = () => {
  const featuredPosts = [
    {
      image: Cat,
      category: "Categoria",
      date: "01 Jan.2024",
      readTime: "05 min de leitura",
      title: "5 Dicas Essenciais para Melhorar Sua Pronúncia em Inglês",
      slug: "5-dicas-para-melhorar-pronuncia",
    },
    {
      image: Cat,
      category: "Categoria",
      date: "01 Jan.2024",
      readTime: "05 min de leitura",
      title: "Por Que Aprender Inglês Desde a Infância Faz Toda a Diferença?",
      slug: "aprender-ingles-desde-infancia",
    },
    {
      image: Cat,
      category: "Categoria",
      date: "01 Jan.2024",
      readTime: "05 min de leitura",
      title:
        "Inglês para Adolescentes: Como Conectar o Ensino com o Mundo Digital",
      slug: "ingles-para-adolescentes",
    },
  ];

  return (
    <section className="blogPage-featured" id="blogPageFeatured">
      <div className="wrapper blogPage-featured__wrapper">
        <h2>Artigos em Destaque</h2>
        <div className="blogPage-featured__posts-wrapper">
          {featuredPosts.map((post, index) => (
            <FeaturedPost
              key={index}
              image={post.image}
              category={post.category}
              date={post.date}
              readTime={post.readTime}
              title={post.title}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPageFeatured;
