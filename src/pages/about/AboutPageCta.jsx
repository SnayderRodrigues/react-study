import { Link } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowForward } from "react-icons/io";

const AboutPageCta = () => {
  return (
    <section className="aboutPage-cta">
      <div className="wrapper aboutPage-cta__wrapper">
        <div>
          <div>Cursos</div>
          <h2>Veja nossos cursos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            dolores aperiam assumenda dolorem reiciendis porro.
          </p>
          <Link to="/courses" className="button">
            Saiba mais <IoMdArrowForward />
          </Link>
        </div>
        <img src={Cat} alt="" />
      </div>
    </section>
  );
};

export default AboutPageCta;
