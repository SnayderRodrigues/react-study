import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { MdHideImage } from "react-icons/md";

const Cta = () => {
  return (
    <section className="cta" id="cta">
      <div className="wrapper cta__wrapper">
        <div className="cta__headline">
          <h2>INGLÊS ONLINE PARA TODAS AS IDADES E NECESSIDADES</h2>
          <p>
            Nossos cursos são adaptados às suas necessidades, ajudando você a
            atingir seus objetivos pessoais e profissionais.
          </p>
        </div>
        <div className="cta__card-wrapper">
          <div className="cta__card">
            <MdHideImage />
            <span>Título</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum
              eveniet voluptatibus.
            </span>
            <Link to="contact" className="button cta__button link">
              Entre em contato
              <IoMdArrowForward />
            </Link>
          </div>
          <div className="cta__card">
            <MdHideImage />
            <span>Título</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum
              eveniet voluptatibus.
            </span>
            <Link to="contact" className="button cta__button link">
              Saiba mais sobre nós
              <IoMdArrowForward />
            </Link>
          </div>
          <div className="cta__card">
            <MdHideImage />
            <span>Título</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum
              eveniet voluptatibus.
            </span>
            <Link to="contact" className="button cta__button link">
              Mais informações sobre os cursos
              <IoMdArrowForward />
            </Link>
          </div>
          <div className="cta__card">
            <MdHideImage />
            <span>Título</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum
              eveniet voluptatibus.
            </span>
            <Link to="contact" className="button cta__button link">
              Leia nossas FAQs
              <IoMdArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
