import React from "react";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowForward } from "react-icons/io";

const FeaturedPost = ({ image, category, date, title, link }) => (
  <div className="blogPage-featured__post">
    <img src={image} alt={`Imagem de ${title}`} />
    <div>
      <span>{category}</span>
      <span>{date}</span>
    </div>
    <span>{title}</span>
    <a href={link} className="button">
      Ler artigo <IoMdArrowForward />
    </a>
  </div>
);

const BlogPageFeatured = () => {
  const featuredPosts = [
    {
      image: Cat,
      category: "Categoria",
      date: "01/01/2024",
      title: "5 Dicas Essenciais para Melhorar Sua Pronúncia em Inglês",
      link: "#",
    },
    {
      image: Cat,
      category: "Categoria",
      date: "01/01/2024",
      title: "Por Que Aprender Inglês Desde a Infância Faz Toda a Diferença?",
      link: "#",
    },
    {
      image: Cat,
      category: "Categoria",
      date: "01/01/2024",
      title:
        "Inglês para Adolescentes: Como Conectar o Ensino com o Mundo Digital",
      link: "#",
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
              title={post.title}
              link={post.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPageFeatured;
