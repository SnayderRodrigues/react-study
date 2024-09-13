import React from "react";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg"

const CoursesPageHero = () => {
  return (
    <section className="coursesPage-hero">
      <div className="wrapper coursesPage-hero__wrapper">
        <div className="coursesPage-hero__headline">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas
            obcaecati ipsam deserunt.
          </p>
        </div>
        <img src={Cat} alt="" className="coursesPage-hero__image" />
      </div>
    </section>
  );
};

export default CoursesPageHero;
