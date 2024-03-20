import React from "react";
import Cats from "../img/IMG_20200407_163224926_HDR-01.jpeg";

const Work = () => {
  return (
    <section id="work" className="work">
      <div className="wrapper">
          <div className="work__image-wrapper">
            <img src={Cats} alt="" className="work__image-1" />
          </div>
      </div>
    </section>
  );
};

export default Work;
