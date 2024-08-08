import React from "react";
import { Link } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowForward } from "react-icons/io";

const AboutPageInfo = () => {
  return (
    <section className="aboutPage-info">
      <div className="wrapper aboutPage-info__wrapper">
        <h2>Temos Orgulho do que Fazemos e dos Resultados que Entregamos</h2>
        <div className="aboutPage-info__info-wrapper">
          <div className="aboutPage-info__info">
            <span>15+</span>
            <span>Anos de experiência no mercado de ensino</span>
          </div>
          <div className="aboutPage-info__info">
            <span>100 mil+</span>
            <span>Alunos matriculados em nossos cursos</span>
          </div>
          <div className="aboutPage-info__info">
            <span>1000+</span>
            <span>Professores nativos e certificados</span>
          </div>
          <div className="aboutPage-info__info">
            <span>97%</span>
            <span>Dos alunos aprovam nossos cursos</span>
          </div>
        </div>
          <Link className="button">
            Veja mais estatísticas <IoMdArrowForward />
          </Link>
      </div>
    </section>
  );
};

export default AboutPageInfo;
