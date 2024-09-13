import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import BlogArticleNotFound from "./BlogArticleNotFound";

const courses = [
  {
    slug: "curso-1",
    title: "Curso 1",
  },
  {
    slug: "curso-2",
    title: "Curso 2",
  },
  {
    slug: "curso-3",
    title: "Curso 3",
  },
  {
    slug: "curso-4",
    title: "Curso 4",
  },
];

const CoursesArticlePage = () => {
  const { slug } = useParams();
  const course = courses.find((course) => course.slug === slug);

  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    if (location.state && location.state.from === "/") {
      navigate("/");
    } else {
      navigate("/courses");
    }
  };

  if (!course) {
    return <BlogArticleNotFound />;
  }

  return (
    <section className="blogArticlePage">
      <div className="wrapper blogArticlePage__wrapper">
        <button
          onClick={handleGoBack}
          className="button blogArticlePage__button"
        >
          <IoMdArrowBack />
          Voltar
        </button>
        <h1 className="blogArticlePage__title">{course.title}</h1>
      </div>
    </section>
  );
};

export default CoursesArticlePage;
