import { Link } from "react-router-dom";
import Photo1 from "../../img/jakob-owens-vQJkhe0EAIg-unsplash.webp";
import Photo2 from "../../img/jenn-wood-MdQlczZR9sU-unsplash_1.webp";
import Photo3 from "../../img/clint-mckoy-PVlSUz_g31c-unsplash_1.webp";
import Photo4 from "../../img/eric-welch-XucH5JNRFig-unsplash_1.webp";
import Photo5 from "../../img/mehdi-messrro-yef79KkAguA-unsplash_1.webp";
import { FaLongArrowAltRight } from "react-icons/fa";

const Work = () => {

  return (
    <section id="work" className="work">
      <div className="wrapper work__wrapper">
        <h2>SELECTED WORK</h2>
        <div className="work__image-wrapper">
          <img
            src={Photo1}
            alt=""
            className="work__image-1"
          />
        </div>
        <div className="work__grid-wrapper">
          <img
            src={Photo2}
            alt=""
            className="work__image-2"
          />
          <img
            src={Photo3}
            alt=""
            className="work__image-3"
          />
          <img
            src={Photo4}
            alt=""
            className="work__image-4"
          />
          <img
            src={Photo5}
            alt=""
            className="work__image-5"
          />
        </div>
        <Link to="work" className="button link">
          See full portfolio
          <FaLongArrowAltRight />
        </Link>
      </div>
    </section>
  );
};

export default Work;
