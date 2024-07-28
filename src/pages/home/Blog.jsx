import { Link } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="wrapper blog__wrapper">
        <h2>TALKATIVE BLOG</h2>
        <div className="blog__cards-wrapper">
          <div className="blog__card">
            <img src={Cat} alt="" className="blog__image" />
            <span>01.01.2024</span>
            <div className="blog__card-title">
              <Link to="blog">
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </Link>
              <Link to="blog" className="button">
                <MdArrowOutward />
              </Link>
            </div>
          </div>
          <div className="blog__card">
            <img src={Cat} alt="" className="blog__image" />
            <span>01.01.2024</span>
            <div className="blog__card-title">
              <Link to="blog">
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </Link>
              <Link to="blog" className="button">
                <MdArrowOutward />
              </Link>
            </div>
          </div>
          <div className="blog__card">
            <img src={Cat} alt="" className="blog__image" />
            <span>01.01.2024</span>
            <div className="blog__card-title">
              <Link to="blog">
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </Link>
              <Link to="blog" className="button">
                <MdArrowOutward />
              </Link>
            </div>
          </div>
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
