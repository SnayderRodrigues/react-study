import React from "react";
import { useParams, Link } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

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

  if (!article) {
    return <div>Artigo não encontrado</div>;
  }

  return (
    <section className="blogArticlePage">
      <div className="wrapper blogArticlePage__wrapper">
        <Link to="/blog">Voltar</Link>
        <span>{article.category}</span>
        <h1>{article.title}</h1>
        <span>{article.author}</span>
        <span>{article.date}</span>
        <span>{article.readTime}</span>
        <img src={article.image} alt={article.title} />
        <p>{article.content}</p>
      </div>
    </section>
  );
};

export default BlogArticlePage;
