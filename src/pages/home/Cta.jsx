import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";

const Cta = () => {
  return (
    <section className="cta" id="cta">
      <div className="wrapper cta__wrapper">
        <div className="cta__headline">
          <h2>Inglês Online para Todas as Idades e Necessidades</h2>
          <p>
            Nossos cursos são adaptados às suas necessidades, ajudando você a
            atingir seus objetivos pessoais e profissionais.
          </p>
          <Link to="contact" className="button cta__button link">
            Entre em contato
            <IoMdArrowForward />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
