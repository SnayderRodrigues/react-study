import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

const Courses = () => {
  return (
    <section className="courses" id="courses">
      <div className="wrapper courses__wrapper">
        <h2>Cursos Ideais para Você</h2>
        <div className="courses__card">
          <img src={Cat} alt="" />
          <div>
            <h3>
              Talkative <span>Complete</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              veritatis. Omnis quibusdam iusto nemo fuga iure, velit quae
              assumenda quod incidunt rem similique pariatur dignissimos sint
              eligendi voluptate aut cum!
            </p>
            <Link to="courses" className="button courses__button">
              Conheça a Talkative Complete
              <IoMdArrowForward />
            </Link>
          </div>
        </div>
        <div className="courses__card">
          <img src={Cat} alt="" />
          <div>
            <h3>
              Talkative <span>Kids</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              veritatis. Omnis quibusdam iusto nemo fuga iure, velit quae
              assumenda quod incidunt rem similique pariatur dignissimos sint
              eligendi voluptate aut cum!
            </p>
            <Link to="courses" className="button courses__button">
              Conheça a Talkative Kids
              <IoMdArrowForward />
            </Link>
          </div>
        </div>
        <div className="courses__card">
          <img src={Cat} alt="" />
          <div>
            <h3>
              Talkative <span>Teens</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              veritatis. Omnis quibusdam iusto nemo fuga iure, velit quae
              assumenda quod incidunt rem similique pariatur dignissimos sint
              eligendi voluptate aut cum!
            </p>
            <Link to="courses" className="button courses__button">
              Conheça a Talkative Teens
              <IoMdArrowForward />
            </Link>
          </div>
        </div>
        <div className="courses__card">
          <img src={Cat} alt="" />
          <div>
            <h3>
              Talkative <span>Express</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              veritatis. Omnis quibusdam iusto nemo fuga iure, velit quae
              assumenda quod incidunt rem similique pariatur dignissimos sint
              eligendi voluptate aut cum!
            </p>
            <Link to="courses" className="button courses__button">
              Conheça a Talkative Express
              <IoMdArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
