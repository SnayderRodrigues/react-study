import React from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";

const articles = [
  {
    slug: "5-dicas-para-melhorar-pronuncia",
    title: "5 Dicas Essenciais para Melhorar Sua Pronúncia em Inglês",
    content: "Conteúdo do artigo sobre pronúncia.",
    image: Cat,
    author: "Nome do Autor",
    date: "01/01/2024",
    readTime: "05 min de leitura",
    category: "Categoria",
  },
  {
    slug: "aprender-ingles-desde-infancia",
    title: "Por Que Aprender Inglês Desde a Infância Faz Toda a Diferença?",
    content: "Conteúdo do artigo sobre aprender inglês na infância.",
    image: Cat,
    author: "Nome do Autor",
    date: "01/01/2024",
    readTime: "05 min de leitura",
    category: "Categoria",
  },
  {
    slug: "ingles-para-adolescentes",
    title:
      "Inglês para Adolescentes: Como Conectar o Ensino com o Mundo Digital",
    content: "Conteúdo do artigo sobre adolescentes e o ensino digital.",
    image: Cat,
    author: "Nome do Autor",
    date: "01/01/2024",
    readTime: "05 min de leitura",
    category: "Categoria",
  },
];

const BlogArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find((article) => article.slug === slug);

  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    if (location.state && location.state.from === "/") {
      navigate("/");
    } else {
      navigate("/blog");
    }
  };

  if (!article) {
    return (
      <section>
        <div className="wrapper">
          <Link to="/blog" className="button">
            <IoMdArrowBack />
            Retornar ao Blog
          </Link>
          <h2>Artigo não encontrado</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="blogArticlePage">
      <div className="wrapper blogArticlePage__wrapper">
        <button
          onClick={handleGoBack}
          className="button blogArticlePage__button"
        >
          <IoMdArrowBack />
          Voltar
        </button>
        <span className="blogArticlePage__category">{article.category}</span>
        <h1 className="blogArticlePage__title">{article.title}</h1>
        <div className="blogArticlePage__details">
          <span className="link blogArticlePage__author">
            <IoMdPerson />
            {article.author}
          </span>
          <span className="link blogArticlePage__date">
            <MdDateRange />
            {article.date}
          </span>
          <span className="link blogArticlePage__read-time">
            <MdAccessTime />
            {article.readTime}
          </span>
        </div>
        <img
          src={article.image}
          alt={article.title}
          className="blogArticlePage__image"
        />
        <p>{article.content}</p>
      </div>
    </section>
  );
};

export default BlogArticlePage;
