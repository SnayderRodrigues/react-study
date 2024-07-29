import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

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
        <div className="cta__card-wrapper">
          <div className="cta__card">
            <img src={Cat} alt="" />
            <div>
              <h3>
                Talkative <span>Kids</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                veritatis. Omnis quibusdam iusto nemo fuga iure, velit quae
                assumenda quod incidunt rem similique pariatur dignissimos sint
                eligendi voluptate aut cum!
              </p>
              <Link to="expertise" className="button cta__button link">
                Conheça a Talkative Kids
                <IoMdArrowForward />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
