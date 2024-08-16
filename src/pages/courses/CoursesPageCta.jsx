import { Link } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowForward } from "react-icons/io";

const CoursesPageCta = () => {
  return (
    <section className="coursesPage-cta">
      <div className="wrapper coursesPage-cta__wrapper">
        <div>
          <div>Blog</div>
          <h2>Visite nosso Blog</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            dolores aperiam assumenda dolorem reiciendis porro.
          </p>
          <Link to="/blog" className="button">
            Saiba mais <IoMdArrowForward />
          </Link>
        </div>
        <img src={Cat} alt="" />
      </div>
    </section>
  );
};

export default CoursesPageCta;
