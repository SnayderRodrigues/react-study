import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const Faq = () => {
  return (
    <section className="faq">
      <div className="wrapper faq__wrapper">
        <h2>FAQ</h2>
        <div className="faq__text-wrapper">
          <h3>Confira as perguntas mais frequentes</h3>
          <p>
            Encontre respostas para perguntas comuns sobre nossos cursos e
            plataforma.
          </p>
          <Link to="contact" className="button link">
            Entre em contato
            <IoMdArrowForward />
          </Link>
        </div>
        <div className="faq__dropdown-wrapper">
          <div className="faq__dropdown">
            <div className="faq__dropdown-item">
              <div className="faq__dropdown-header">
                <span>Título da Pergunta</span>
                <MdKeyboardArrowDown />
              </div>
              <div class="faq__dropdown-content">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus cupiditate odit reiciendis maiores suscipit vel
                    quasi, id architecto dolore doloribus molestiae consectetur
                    repellendus impedit aliquid eius nulla sint ducimus vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className="faq__dropdown-item">
              <div className="faq__dropdown-header">
                <span>Título da Pergunta</span>
                <MdKeyboardArrowDown />
              </div>
              <div class="faq__dropdown-content">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus cupiditate odit reiciendis maiores suscipit vel
                    quasi, id architecto dolore doloribus molestiae consectetur
                    repellendus impedit aliquid eius nulla sint ducimus vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className="faq__dropdown-item">
              <div className="faq__dropdown-header">
                <span>Título da Pergunta</span>
                <MdKeyboardArrowDown />
              </div>
              <div class="faq__dropdown-content">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus cupiditate odit reiciendis maiores suscipit vel
                    quasi, id architecto dolore doloribus molestiae consectetur
                    repellendus impedit aliquid eius nulla sint ducimus vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className="faq__dropdown-item">
              <div className="faq__dropdown-header">
                <span>Título da Pergunta</span>
                <MdKeyboardArrowDown />
              </div>
              <div class="faq__dropdown-content">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus cupiditate odit reiciendis maiores suscipit vel
                    quasi, id architecto dolore doloribus molestiae consectetur
                    repellendus impedit aliquid eius nulla sint ducimus vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className="faq__dropdown-item">
              <div className="faq__dropdown-header">
                <span>Título da Pergunta</span>
                <MdKeyboardArrowDown />
              </div>
              <div class="faq__dropdown-content">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus cupiditate odit reiciendis maiores suscipit vel
                    quasi, id architecto dolore doloribus molestiae consectetur
                    repellendus impedit aliquid eius nulla sint ducimus vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className="faq__dropdown-item">
              <div className="faq__dropdown-header">
                <span>Título da Pergunta</span>
                <MdKeyboardArrowDown />
              </div>
              <div class="faq__dropdown-content">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus cupiditate odit reiciendis maiores suscipit vel
                    quasi, id architecto dolore doloribus molestiae consectetur
                    repellendus impedit aliquid eius nulla sint ducimus vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className="faq__dropdown-item">
              <div className="faq__dropdown-header">
                <span>Título da Pergunta</span>
                <MdKeyboardArrowDown />
              </div>
              <div class="faq__dropdown-content">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus cupiditate odit reiciendis maiores suscipit vel
                    quasi, id architecto dolore doloribus molestiae consectetur
                    repellendus impedit aliquid eius nulla sint ducimus vitae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
