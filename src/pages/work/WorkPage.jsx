import React from "react";
import "./workpage.scss";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

const WorkPage = () => {
  return (
    <main>
      <section className="workPage-hero">
        <div className="wrapper workPage__wrapper">
          <h1>
            Work Page <br /> Example Text
          </h1>
        </div>
      </section>
      <section className="workPage-works">
        <div className="wrapper workPage-works__wrapper">
          <div className="workPage-works__grid-wrapper">
            <div className="workPage-works__grid-full">
              <img src={Cat} alt="" />
              <span className="workPage-works__button">Example Name</span>
            </div>
            <div className="workPage-works__grid-half">
              <div className="workPage-works__grid-half-1">
                <img src={Cat} alt="" />
                <span className="workPage-works__button">Example Name</span>
              </div>
              <div className="workPage-works__grid-half-1">
                <img src={Cat} alt="" />
                <span className="workPage-works__button">Example Name</span>
              </div>
            </div>
          </div>
          <div className="workPage-works__grid-wrapper">
            <div className="workPage-works__grid-full">
              <img src={Cat} alt="" />
              <span className="workPage-works__button">Example Name</span>
            </div>
            <div className="workPage-works__grid-half">
              <div className="workPage-works__grid-half-1">
                <img src={Cat} alt="" />
                <span className="workPage-works__button">Example Name</span>
              </div>
              <div className="workPage-works__grid-half-1">
                <img src={Cat} alt="" />
                <span className="workPage-works__button">Example Name</span>
              </div>
            </div>
          </div>
          <div className="workPage-works__grid-wrapper">
            <div className="workPage-works__grid-full">
              <img src={Cat} alt="" />
              <span className="workPage-works__button">Example Name</span>
            </div>
            <div className="workPage-works__grid-half">
              <div className="workPage-works__grid-half-1">
                <img src={Cat} alt="" />
                <span className="workPage-works__button">Example Name</span>
              </div>
              <div className="workPage-works__grid-half-1">
                <img src={Cat} alt="" />
                <span className="workPage-works__button">Example Name</span>
              </div>
            </div>
          </div>
          <div className="workPage-works__grid-wrapper">
            <div className="workPage-works__grid-full">
              <img src={Cat} alt="" />
              <span className="workPage-works__button">Example Name</span>
            </div>
            <div className="workPage-works__grid-half">
              <div className="workPage-works__grid-half-1">
                <img src={Cat} alt="" />
                <span className="workPage-works__button">Example Name</span>
              </div>
              <div className="workPage-works__grid-half-1">
                <img src={Cat} alt="" />
                <span className="workPage-works__button">Example Name</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
};

export default WorkPage;
