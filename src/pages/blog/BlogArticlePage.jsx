import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import BlogArticleNotFound from "./BlogArticleNotFound";

const FirstArticle = () => (
  <div>
    <h3>Título 01</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
      laudantium totam minus labore ut, magni vel rerum, ipsam facere vitae
      quidem quia qui illo commodi consequatur sapiente soluta. Rem, voluptatum!
    </p>
  </div>
);

const SecondArticle = () => (
  <div>
    <h3>Título 01</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
      laudantium totam minus labore ut, magni vel rerum, ipsam facere vitae
      quidem quia qui illo commodi consequatur sapiente soluta. Rem, voluptatum!
    </p>
    <h3>Título 02</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
      laudantium totam minus labore ut, magni vel rerum, ipsam facere vitae
      quidem quia qui illo commodi consequatur sapiente soluta. Rem, voluptatum!
    </p>
  </div>
);

const ThirdArticle = () => (
  <div>
    <h3>Título 01</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
      laudantium totam minus labore ut, magni vel rerum, ipsam facere vitae
      quidem quia qui illo commodi consequatur sapiente soluta. Rem, voluptatum!
    </p>
    <h3>Título 02</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
      laudantium totam minus labore ut, magni vel rerum, ipsam facere vitae
      quidem quia qui illo commodi consequatur sapiente soluta. Rem, voluptatum!
    </p>
    <h3>Título 03</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
      laudantium totam minus labore ut, magni vel rerum, ipsam facere vitae
      quidem quia qui illo commodi consequatur sapiente soluta. Rem, voluptatum!
    </p>
  </div>
);

const articles = [
  {
    slug: "5-dicas-para-melhorar-pronuncia",
    title: "5 Dicas Essenciais para Melhorar Sua Pronúncia em Inglês",
    content: FirstArticle,
    image: Cat,
    author: "Nome do Autor",
    date: "01/01/2024",
    readTime: "05 min de leitura",
    category: "Categoria",
  },
  {
    slug: "aprender-ingles-desde-infancia",
    title: "Por Que Aprender Inglês Desde a Infância Faz Toda a Diferença?",
    content: SecondArticle,
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
    content: ThirdArticle,
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
    return <BlogArticleNotFound />;
  }

  const ArticleContent = article.content;

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
        <ArticleContent />
      </div>
    </section>
  );
};

export default BlogArticlePage;
