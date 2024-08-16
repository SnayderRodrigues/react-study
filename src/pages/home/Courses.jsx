import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

const CourseCard = ({ title, subtitle, description, link }) => (
  <div className="courses__card">
    <img src={Cat} alt={`${title} ${subtitle}`} />
    <div>
      <h3>
        {title} <span>{subtitle}</span>
      </h3>
      <p>{description}</p>
      <Link to={link} className="button courses__button">
        Conheça a {title} {subtitle}
        <IoMdArrowForward />
      </Link>
    </div>
  </div>
);

const Courses = () => {
  const coursesData = [
    {
      title: "Talkative",
      subtitle: "Complete",
      link: "courses",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, veritatis. Omnis quibusdam iusto nemo fuga iure, velit quae assumenda quod incidunt rem similique pariatur dignissimos sint eligendi voluptate aut cum!",
    },
    {
      title: "Talkative",
      subtitle: "Kids",
      link: "courses",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, veritatis. Omnis quibusdam iusto nemo fuga iure, velit quae assumenda quod incidunt rem similique pariatur dignissimos sint eligendi voluptate aut cum!",
    },
    {
      title: "Talkative",
      subtitle: "Teens",
      link: "courses",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, veritatis. Omnis quibusdam iusto nemo fuga iure, velit quae assumenda quod incidunt rem similique pariatur dignissimos sint eligendi voluptate aut cum!",
    },
    {
      title: "Talkative",
      subtitle: "Express",
      link: "courses",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, veritatis. Omnis quibusdam iusto nemo fuga iure, velit quae assumenda quod incidunt rem similique pariatur dignissimos sint eligendi voluptate aut cum!",
    },
  ];

  return (
    <section className="courses" id="courses">
      <div className="wrapper courses__wrapper">
        <h2>Cursos Ideais para Você</h2>
        <div className="courses__card-wrapper">
          {coursesData.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              subtitle={course.subtitle}
              description={course.description}
              link={course.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
