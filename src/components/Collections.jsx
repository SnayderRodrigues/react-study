import React from "react";
import Cats from "../img/IMG_20200407_163224926_HDR-01.jpeg";

const Collections = () => {
  return (
    <section id="collections" className="collections">
      <div className="wrapper collections-wrapper">
        <h2 className="collections__title">COLLECTIONS</h2>
      </div>
      <div className="collections__image-wrapper-1">
        <img src={Cats} alt="" className="collections__image" />
        <img src={Cats} alt="" className="collections__image" />
        <img src={Cats} alt="" className="collections__image" />
        <img src={Cats} alt="" className="collections__image" />
      </div>
      <div className="collections__image-wrapper-2">
        <img src={Cats} alt="" className="collections__image" />
        <img src={Cats} alt="" className="collections__image" />
        <img src={Cats} alt="" className="collections__image" />
        <img src={Cats} alt="" className="collections__image" />
      </div>
    </section>
  );
};

export default Collections;
