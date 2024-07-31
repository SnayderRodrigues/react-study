import React, { useState } from "react";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowForward } from "react-icons/io";
import { FaAsterisk } from "react-icons/fa";

const AboutPageTestemonials = () => {
  const testemonialsItems = [
    {
      number: "01.",
      testemonial:
        "A Talkative transformou minha experiência de aprendizado. As aulas são dinâmicas e os professores são extremamente dedicados. Hoje, me sinto muito mais confiante para conversar em inglês!",
      author: "Ana Paula",
    },
    {
      number: "02.",
      testemonial:
        "A flexibilidade de horários e a qualidade dos professores da Talkative são incríveis. Consigo estudar no meu próprio ritmo, o que tem sido essencial para o meu desenvolvimento. Melhor decisão que já tomei!",
      author: "Lucas",
    },
    {
      number: "03.",
      testemonial:
        "A metodologia da Talkative é inovadora e envolvente. Sinto que meu inglês evoluiu muito mais rápido do que em outros cursos que já fiz. As aulas online são práticas e adaptadas às minhas necessidades. Estou muito satisfeito com os resultados!",
      author: "Ricardo",
    },
    {
      number: "04.",
      testemonial:
        "Graças à Talkative, consegui uma promoção no trabalho que exigia fluência em inglês. As aulas são práticas e focadas em situações reais do dia a dia. Estou muito satisfeita com meu progresso!",
      author: "Mariana",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showItem = (index) => {
    setCurrentIndex(index);
  };

  const prevItem = () => {
    const newIndex =
      currentIndex === 0 ? testemonialsItems.length - 1 : currentIndex - 1;
    showItem(newIndex);
  };

  const nextItem = () => {
    const newIndex =
      currentIndex === testemonialsItems.length - 1 ? 0 : currentIndex + 1;
    showItem(newIndex);
  };

  return (
    <section className="aboutPage-testemonials">
      <div className="wrapper aboutPage-testemonials__wrapper">
        {testemonialsItems.map((item, index) => (
          <div
            className={
              index === currentIndex
                ? "aboutPage-testemonials__card card-active"
                : "aboutPage-testemonials__card"
            }
            key={index}
          >
            <div className="aboutPage-testemonials__card-content">
              <span>{item.number}</span>
              <div>
                <div className="aboutPage-testemonials__headline">
                  <span className="aboutPage-testemonials__author">
                    <FaAsterisk /> {item.author}
                  </span>
                  <p>"{item.testemonial}"</p>
                </div>
                <img src={Cat} alt="" />
              </div>
            </div>
          </div>
        ))}
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
      </div>
    </section>
  );
};

export default AboutPageTestemonials;
