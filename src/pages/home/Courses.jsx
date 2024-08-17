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
        "O curso ideal para quem deseja aprender inglês de forma completa, desde o básico até o avançado. Aborda todas as habilidades linguísticas – fala, escuta, leitura e escrita – com foco na comunicação eficaz e fluente.",
    },
    {
      title: "Talkative",
      subtitle: "Kids",
      link: "courses",
      description:
        "Um curso lúdico e interativo especialmente desenvolvido para crianças. Com atividades envolventes, as crianças aprendem inglês de maneira natural e divertida, despertando o interesse pelo idioma desde cedo.",
    },
    {
      title: "Talkative",
      subtitle: "Teens",
      link: "courses",
      description:
        "Voltado para adolescentes, este curso equilibra a necessidade de se comunicar em inglês com temas e conteúdos que refletem os interesses e desafios da adolescência. Ideal para quem quer se preparar para o futuro.",
    },
    {
      title: "Talkative",
      subtitle: "Express",
      link: "courses",
      description:
        "Um curso intensivo para quem precisa aprender inglês de forma rápida e eficiente. Focado em resultados a curto prazo, com aulas dinâmicas que priorizam a prática e a comunicação em situações reais.",
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
