import { Link } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

const BlogCard = ({ image, category, date, title, link }) => (
  <div className="blog__card">
    <img
      src={image}
      alt={`${title}`}
      className="blog__image"
    />
    <div>
      <span>{category}</span>
      <span>{date}</span>
    </div>
    <div className="blog__card-title">
      <Link to={link}>
        <span>{title}</span>
      </Link>
      <Link to={link} className="button">
        <MdArrowOutward />
      </Link>
    </div>
  </div>
);

const Blog = () => {
  const blogPosts = [
    {
      image: Cat,
      category: "Categoria",
      date: "01.01.2024",
      title: "5 Dicas Essenciais para Melhorar Sua Pronúncia em Inglês",
      link: "blog",
    },
    {
      image: Cat,
      category: "Categoria",
      date: "01.01.2024",
      title: "Por Que Aprender Inglês Desde a Infância Faz Toda a Diferença?",
      link: "blog",
    },
    {
      image: Cat,
      category: "Categoria",
      date: "01.01.2024",
      title:
        "Inglês para Adolescentes: Como Conectar o Ensino com o Mundo Digital",
      link: "blog",
    },
  ];

  return (
    <section id="blog" className="blog">
      <div className="wrapper blog__wrapper">
        <h2>Talkative Blog</h2>
        <div className="blog__cards-wrapper">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              category={post.category}
              date={post.date}
              title={post.title}
              link={post.link}
            />
          ))}
        </div>
        <Link to="blog" className="button link">
          Leia mais artigos
          <IoMdArrowForward />
        </Link>
      </div>
    </section>
  );
};

export default Blog;
