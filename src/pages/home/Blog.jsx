import { Link } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

const BlogPost = ({ image, category, readTime, date, title, slug }) => (
  <div className="blog__post">
    <img
      src={image}
      alt={`Imagem de ${title}`}
      className="blog__post-image"
    />
    <div className="blog__post-text">
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

const Blog = () => {
  const blogPosts = [
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
    <section id="blog" className="blog">
      <div className="wrapper blog__wrapper">
        <div className="blog__headline-wrapper">
          <h2>Talkative Blog</h2>
          <Link to="blog" className="button link">
            Ver tudo
            <IoMdArrowForward />
          </Link>
        </div>
        <div className="blog__posts-wrapper">
          {blogPosts.map((post, index) => (
            <BlogPost
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

export default Blog;
