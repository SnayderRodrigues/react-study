import React from "react";
import "./workpage.scss";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

const WorkPage = () => {
  return (
    <main>
      <section className="workPage__hero">
        <div className="wrapper workPage__wrapper">
          <h1>
            Work Page <br /> Example Text
          </h1>
        </div>
      </section>
      <section className="workPage__works">
        <div className="wrapper workPage__work-wrapper">
          <div className="workPage__works__works-wrapper">
            <div className="workPage__works__works-full">
              <img src={Cat} alt="" />
              <span className="workPage__works__button button">
                Example Name
              </span>
            </div>
            <div className="workPage__works__works-half">
              <div className="workPage__works__works-half-1">
                <img src={Cat} alt="" />
                <span className="workPage__works__button button">
                  Example Name
                </span>
              </div>
              <div className="workPage__works__works-half-2">
                <img src={Cat} alt="" />
                <span className="workPage__works__button button">
                  Example Name
                </span>
              </div>
            </div>
          </div>
          <div className="workPage__works__works-wrapper">
            <div className="workPage__works__works-full">
              <img src={Cat} alt="" />
              <span className="workPage__works__button button">
                Example Name
              </span>
            </div>
            <div className="workPage__works__works-half">
              <div className="workPage__works__works-half-1">
                <img src={Cat} alt="" />
                <span className="workPage__works__button button">
                  Example Name
                </span>
              </div>
              <div className="workPage__works__works-half-2">
                <img src={Cat} alt="" />
                <span className="workPage__works__button button">
                  Example Name
                </span>
              </div>
            </div>
          </div>
          <div className="workPage__works__works-wrapper">
            <div className="workPage__works__works-full">
              <img src={Cat} alt="" />
              <span className="workPage__works__button button">
                Example Name
              </span>
            </div>
            <div className="workPage__works__works-half">
              <div className="workPage__works__works-half-1">
                <img src={Cat} alt="" />
                <span className="workPage__works__button button">
                  Example Name
                </span>
              </div>
              <div className="workPage__works__works-half-2">
                <img src={Cat} alt="" />
                <span className="workPage__works__button button">
                  Example Name
                </span>
              </div>
            </div>
          </div>
          <div className="workPage__works__works-wrapper">
            <div className="workPage__works__works-full">
              <img src={Cat} alt="" />
              <span className="workPage__works__button button">
                Example Name
              </span>
            </div>
            <div className="workPage__works__works-half">
              <div className="workPage__works__works-half-1">
                <img src={Cat} alt="" />
                <span className="workPage__works__button button">
                  Example Name
                </span>
              </div>
              <div className="workPage__works__works-half-2">
                <img src={Cat} alt="" />
                <span className="workPage__works__button button">
                  Example Name
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkPage;
