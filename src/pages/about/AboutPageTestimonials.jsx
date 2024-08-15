import React, { useState } from "react";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowForward } from "react-icons/io";

const AboutPageTestimonials = () => {
  const testimonialsItems = [
    {
      number: "01.",
      testimonial:
        "A Talkative transformou minha experiência de aprendizado. As aulas são dinâmicas e os professores são extremamente dedicados. Hoje, me sinto muito mais confiante para conversar em inglês!",
      author: "Ana Paula",
      status: "Aluna, 07 meses",
    },
    {
      number: "02.",
      testimonial:
        "A flexibilidade de horários e a qualidade dos professores da Talkative são incríveis. Consigo estudar no meu próprio ritmo, o que tem sido essencial para o meu desenvolvimento. Melhor decisão que já tomei!",
      author: "Lucas",
      status: "Aluno, 06 meses",
    },
    {
      number: "03.",
      testimonial:
        "A metodologia da Talkative é inovadora e envolvente. Sinto que meu inglês evoluiu muito mais rápido do que em outros cursos que já fiz. As aulas online são práticas e adaptadas às minhas necessidades. Estou muito satisfeito com os resultados!",
      author: "Ricardo",
      status: "Aluno, formado",
    },
    {
      number: "04.",
      testimonial:
        "Graças à Talkative, consegui uma promoção no trabalho que exigia fluência em inglês. As aulas são práticas e focadas em situações reais do dia a dia. Estou muito satisfeita com meu progresso!",
      author: "Mariana",
      status: "Aluna, formada",
    },
    {
      number: "05.",
      testimonial:
        "Graças à Talkative, consegui uma promoção no trabalho que exigia fluência em inglês. As aulas são práticas e focadas em situações reais do dia a dia. Estou muito satisfeita com meu progresso!",
      author: "Mariana",
      status: "Aluna, formada",
    },
    {
      number: "06.",
      testimonial:
        "Graças à Talkative, consegui uma promoção no trabalho que exigia fluência em inglês. As aulas são práticas e focadas em situações reais do dia a dia. Estou muito satisfeita com meu progresso!",
      author: "Mariana",
      status: "Aluna, formada",
    },
    {
      number: "07.",
      testimonial:
        "Graças à Talkative, consegui uma promoção no trabalho que exigia fluência em inglês. As aulas são práticas e focadas em situações reais do dia a dia. Estou muito satisfeita com meu progresso!",
      author: "Mariana",
      status: "Aluna, formada",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showItem = (index) => {
    setCurrentIndex(index);
  };

  const prevItem = () => {
    const newIndex =
      currentIndex === 0 ? testimonialsItems.length - 1 : currentIndex - 1;
    showItem(newIndex);
  };

  const nextItem = () => {
    const newIndex =
      currentIndex === testimonialsItems.length - 1 ? 0 : currentIndex + 1;
    showItem(newIndex);
  };

  return (
    <section className="aboutPage-testimonials">
      <div className="wrapper aboutPage-testimonials__wrapper">
        <h2>Depoimentos de Nossos Alunos</h2>
        <div className="navigation">
          <div className="navigation-div">
            <button
              onClick={prevItem}
              className="navigation-button-left"
              id="leftButton"
            >
              <IoMdArrowForward />
            </button>
            <button
              onClick={nextItem}
              className="navigation-button-right"
              id="rightButton"
            >
              <IoMdArrowForward />
            </button>
          </div>
        </div>
        <div
          className="aboutPage-testimonials__card-wrapper"
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
          {testimonialsItems.map((item, index) => (
            <div
              className={
                index === currentIndex
                  ? "aboutPage-testimonials__card card-active"
                  : "aboutPage-testimonials__card"
              }
              key={index}
            >
              <div className="aboutPage-testimonials__card-header">
                <span>{item.number}</span>
                <img src={Cat} alt="" />
              </div>
              <span className="aboutPage-testimonials__card-author">
                {item.author}
              </span>
              <div className="aboutPage-testimonials__card-description">
                <div>
                  <span>{item.status}</span>
                  <p>"{item.testimonial}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPageTestimonials;
