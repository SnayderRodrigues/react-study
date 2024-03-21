import React from "react";
import Cats from "../img/IMG_20200407_163224926_HDR-01.jpeg";
import { FaLongArrowAltRight } from "react-icons/fa";

const Work = () => {
  return (
    <section id="work" className="work">
      <div className="wrapper work__wrapper">
        <h2>SELECTED WORK</h2>
        <div className="work__image-wrapper">
          <img src={Cats} alt="" className="work__image-1" />
        </div>
        <div className="work__grid-wrapper">
          <img src={Cats} alt="" className="work__image-2" />
          <img src={Cats} alt="" className="work__image-3" />
          <img src={Cats} alt="" className="work__image-4" />
          <img src={Cats} alt="" className="work__image-5" />
        </div>
        <a href="">
          <h3 className="link">
            SEE MORE PROJECTS
            <FaLongArrowAltRight />
          </h3>
        </a>
      </div>
    </section>
  );
};

export default Work;
