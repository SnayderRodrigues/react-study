import { Link } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowForward } from "react-icons/io";

const Work = () => {

  return (
    <section id="work" className="work">
      <div className="wrapper work__wrapper">
        <h2>FEATURED CREATIONS</h2>
        <div className="work__image-wrapper">
          <img src={Cat} alt="" className="work__image-1" />
        </div>
        <div className="work__grid-wrapper">
          <img src={Cat} alt="" className="work__image-2" />
          <img src={Cat} alt="" className="work__image-3" />
          <img src={Cat} alt="" className="work__image-4" />
          <img src={Cat} alt="" className="work__image-5" />
        </div>
        <Link to="work" className="button link">
          See full portfolio
          <IoMdArrowForward />
        </Link>
      </div>
    </section>
  );
};

export default Work;
