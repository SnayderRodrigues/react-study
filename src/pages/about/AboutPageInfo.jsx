import React from "react";
import { Link } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowForward } from "react-icons/io";

const AboutPageInfo = () => {
  return (
    <section className="aboutPage-info">
      <div className="wrapper aboutPage-info__wrapper">
        <h2>Título de Exemplo</h2>
        <div className="aboutPage-info__info-wrapper">
          <img src={Cat} alt="" />
          <div className="aboutPage-info__info">
            <div>
              <span>15+</span>
              <span>Anos de experiência no mercado de ensino</span>
            </div>
            <div>
              <span>100000+</span>
              <span>Alunos matriculados em nossos cursos</span>
            </div>
            <div>
              <span>1000+</span>
              <span>Professores nativos e certificados</span>
            </div>
            <div>
              <span>97%</span>
              <span>Alunos que acreditam que os cursos são eficientes</span>
            </div>
            <Link className="button">
              Veja mais estatísticas <IoMdArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageInfo;
