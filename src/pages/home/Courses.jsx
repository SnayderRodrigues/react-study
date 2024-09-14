import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

const CourseCard = ({ title, subtitle, description, slug }) => (
  <div className="courses__card">
    <img src={Cat} alt={`${title} ${subtitle}`} />
    <div>
      <h3>
        {title} <span>{subtitle}</span>
      </h3>
      <p>{description}</p>
      <Link to={`/courses/${slug}`} className="button courses__button">
        Saiba mais
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
      description:
        "O curso ideal para quem deseja aprender inglês de forma completa, desde o básico até o avançado. Aborda todas as habilidades linguísticas – fala, escuta, leitura e escrita – com foco na comunicação eficaz e fluente.",
      slug: "talkative-complete",
    },
    {
      title: "Talkative",
      subtitle: "Kids",
      description:
        "Um curso lúdico e interativo especialmente desenvolvido para crianças. Com atividades envolventes, as crianças aprendem inglês de maneira natural e divertida, despertando o interesse pelo idioma desde cedo.",
      slug: "talkative-kids",
    },
    {
      title: "Talkative",
      subtitle: "Teens",
      description:
        "Voltado para adolescentes, este curso equilibra a necessidade de se comunicar em inglês com temas e conteúdos que refletem os interesses e desafios da adolescência. Ideal para quem quer se preparar para o futuro.",
      slug: "talkative-teens",
    },
    {
      title: "Talkative",
      subtitle: "Express",
      description:
        "Um curso intensivo para quem precisa aprender inglês de forma rápida e eficiente. Focado em resultados a curto prazo, com aulas dinâmicas que priorizam a prática e a comunicação em situações reais.",
      slug: "talkative-express",
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
              slug={course.slug}
            />
          ))}
          <div className="courses__card">
            <h3>Conheça todos os cursos.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              deleniti molestiae distinctio delectus fuga, beatae sit rerum
              quisquam doloribus.
            </p>
            <Link to="/courses" className="button courses__button">
              Saiba mais
              <IoMdArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
