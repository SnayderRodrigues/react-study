import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

import { IoMdArrowBack } from "react-icons/io";

const CourseOne = () => (
  <div>
    <h2 className="coursesArticlePage__headline">Talkative Complete</h2>
    <img src={Cat} alt="" className="coursesArticlePage__image" />
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
      laudantium totam minus labore ut, magni vel rerum, ipsam facere vitae
      quidem quia qui illo commodi consequatur sapiente soluta. Rem, voluptatum!
    </p>
  </div>
);

const CourseTwo = () => (
  <div>
    <h2 className="coursesArticlePage__headline">Talkative Kids</h2>
    <img src={Cat} alt="" className="coursesArticlePage__image" />
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
      laudantium totam minus labore ut, magni vel rerum, ipsam facere vitae
      quidem quia qui illo commodi consequatur sapiente soluta. Rem, voluptatum!
    </p>
  </div>
);

const CourseThree = () => (
  <div>
    <h2 className="coursesArticlePage__headline">Talkative Teens</h2>
    <img src={Cat} alt="" className="coursesArticlePage__image" />
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
      laudantium totam minus labore ut, magni vel rerum, ipsam facere vitae
      quidem quia qui illo commodi consequatur sapiente soluta. Rem, voluptatum!
    </p>
  </div>
);

const CourseFour = () => (
  <div>
    <h2 className="coursesArticlePage__headline">Talkative Express</h2>
    <img src={Cat} alt="" className="coursesArticlePage__image" />
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
      laudantium totam minus labore ut, magni vel rerum, ipsam facere vitae
      quidem quia qui illo commodi consequatur sapiente soluta. Rem, voluptatum!
    </p>
  </div>
);

const courses = [
  {
    slug: "talkative-complete",
    title: "Talkative Complete",
    content: CourseOne,
  },
  {
    slug: "talkative-kids",
    title: "Talkative Kids",
    content: CourseTwo,
  },
  {
    slug: "talkative-teens",
    title: "Talkative Teens",
    content: CourseThree,
  },
  {
    slug: "talkative-express",
    title: "Talkative Express",
    content: CourseFour,
  },
];

const CoursesArticlePage = () => {
  const { slug } = useParams();
  const course = courses.find((course) => course.slug === slug);

  const CourseContent = course.content;

  return (
    <section className="coursesArticlePage">
      <div className="wrapper coursesArticlePage__wrapper">
        <div className="coursesArticlePage__breadcrumbs">
          <Link to="/" className="link">
            <IoMdArrowBack />
            Início
          </Link>
          <Link to="/courses" className="link">
            <IoMdArrowBack />
            Cursos
          </Link>
          <Link to={`/courses/${slug}`} className="link">
            <IoMdArrowBack />
            {course.title}
          </Link>
        </div>
        <CourseContent />
      </div>
    </section>
  );
};

export default CoursesArticlePage;
