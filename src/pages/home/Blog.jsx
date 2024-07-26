import { Link } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowForward } from "react-icons/io";

const Blog = () => {

  return (
    <section id="blog" className="blog">
      <div className="wrapper blog__wrapper">
        <h2>TALKATIVE BLOG</h2>
        <div className="blog__grid-wrapper">
          <img src={Cat} alt="" className="blog__image" />
          <img src={Cat} alt="" className="blog__image" />
          <img src={Cat} alt="" className="blog__image" />
          <img src={Cat} alt="" className="blog__image" />
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
