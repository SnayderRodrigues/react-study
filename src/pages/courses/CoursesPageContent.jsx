import React from "react";
import PropTypes from "prop-types";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";

const Course = ({ title, text, imageFirst }) => (
  <div className="coursesPage-content__content">
    {imageFirst ? (
      <>
        <div className="coursesPage-content__image-wrapper">
          <img src={Cat} alt={title} />
        </div>
        <div className="coursesPage-content__text-wrapper">
          <h3>{title}</h3>
          <p>{text}</p>
          <Link to="" className="button link">
            Saiba mais
            <IoMdArrowForward />
          </Link>
        </div>
      </>
    ) : (
      <>
        <div className="coursesPage-content__text-wrapper">
          <h3>{title}</h3>
          <p>{text}</p>
          <Link to="" className="button link">
            Saiba mais
            <IoMdArrowForward />
          </Link>
        </div>
        <div className="coursesPage-content__image-wrapper">
          <img src={Cat} alt={title} />
        </div>
      </>
    )}
  </div>
);

Course.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageFirst: PropTypes.bool,
};

Course.defaultProps = {
  imageFirst: true,
};

const CoursesPageContent = () => {
  const courses = [
    {
      title: "Título do Curso 1",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, velit delectus! Dolorem esse aut pariatur debitis distinctio, ipsam quidem in et est repudiandae, animi culpa deleniti itaque provident perspiciatis perferendis.",
      imageFirst: true,
    },
    {
      title: "Título do Curso 2",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, nam sunt consequuntur exercitationem quos consectetur! Debitis voluptate architecto unde culpa sequi odit doloremque ipsam velit incidunt earum fuga, dignissimos assumenda!",
      imageFirst: false,
    },
    {
      title: "Título do Curso 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim, debitis iure dignissimos expedita obcaecati iusto quidem soluta? Dicta nam nisi ea nobis natus expedita consequuntur quas dolor assumenda saepe.",
      imageFirst: true,
    },
    {
      title: "Título do Curso 4",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quaerat quis officiis ipsam necessitatibus. Vitae porro quibusdam cupiditate voluptatem asperiores saepe quae accusantium maiores, delectus accusamus nisi corporis ullam molestias.",
      imageFirst: false,
    },
  ];

  return (
    <section className="coursesPage-content" id="coursesPageContent">
      <div className="wrapper coursesPage-content__wrapper">
        <h2>Nossos Cursos</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          laborum perspiciatis magnam.
        </p>
        <div className="coursesPage-content__description">
          <div>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              maxime optio laudantium cum illum expedita rerum laborum. Fuga
              tempore similique.
            </p>
          </div>
          <div>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              maxime optio laudantium cum illum expedita rerum laborum. Fuga
              tempore similique.
            </p>
          </div>
          <div>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              maxime optio laudantium cum illum expedita rerum laborum. Fuga
              tempore similique.
            </p>
          </div>
          <div>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              maxime optio laudantium cum illum expedita rerum laborum. Fuga
              tempore similique.
            </p>
          </div>
        </div>
        {courses.map((course, index) => (
          <Course
            key={index}
            title={course.title}
            text={course.text}
            imageFirst={course.imageFirst}
          />
        ))}
      </div>
    </section>
  );
};

export default CoursesPageContent;
