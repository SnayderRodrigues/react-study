import { Link } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowForward } from "react-icons/io";

const CtaToAboutPage = () => {
  return (
    <section className="ctaToAboutPage">
      <div className="wrapper ctaToAboutPage__wrapper">
        <div>
          <div>Sobre</div>
          <h2>Saiba mais sobre nós</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            dolores aperiam assumenda dolorem reiciendis porro.
          </p>
          <Link to="/about" className="button">
            Saiba mais <IoMdArrowForward />
          </Link>
        </div>
        <img src={Cat} alt="" />
      </div>
    </section>
  );
};

export default CtaToAboutPage;
