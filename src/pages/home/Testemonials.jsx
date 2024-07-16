import React from "react";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

const Testemonials = () => {
  return (
    <section className="testemonials">
      <div className="wrapper testemonials__wrapper">
        <div className="testemonials__container">
          <h2>DEPOIMENTOS</h2>
          <div className="testemonials__card-wrapper">
            <div className="testemonials__card">
              <div className="testemonials__card-header">
                <span>A</span>
                <img src={Cat} alt="" />
              </div>
              <div className="testemonials__card-text">
                <span>Ana Paula</span>
                <p>
                  "A Talkative transformou minha experiência de aprendizado. As
                  aulas são dinâmicas e os professores são extremamente
                  dedicados. Hoje, me sinto muito mais confiante para conversar
                  em inglês!"
                </p>
              </div>
            </div>
            <div className="testemonials__card">
              <div className="testemonials__card-header">
                <span>L</span>
                <img src={Cat} alt="" />
              </div>
              <div className="testemonials__card-text">
                <span>Lucas</span>
                <p>
                  "A flexibilidade de horários e a qualidade dos professores da
                  Talkative são incríveis. Consigo estudar no meu próprio ritmo,
                  o que tem sido essencial para o meu desenvolvimento. Melhor
                  decisão que já tomei!"
                </p>
              </div>
            </div>
            <div className="testemonials__card">
              <div className="testemonials__card-header">
                <span>R</span>
                <img src={Cat} alt="" />
              </div>
              <div className="testemonials__card-text">
                <span>Ricardo</span>
                <p>
                  "A metodologia da Talkative é inovadora e envolvente. Sinto
                  que meu inglês evoluiu muito mais rápido do que em outros
                  cursos que já fiz. As aulas online são práticas e adaptadas às
                  minhas necessidades. Estou muito satisfeito com os
                  resultados!"
                </p>
              </div>
            </div>
            <div className="testemonials__card">
              <div className="testemonials__card-header">
                <span>M</span>
                <img src={Cat} alt="" />
              </div>
              <div className="testemonials__card-text">
                <span>Mariana</span>
                <p>
                  "Graças à Talkative, consegui uma promoção no trabalho que
                  exigia fluência em inglês. As aulas são práticas e focadas em
                  situações reais do dia a dia. Estou muito satisfeita com meu
                  progresso!"
                </p>
              </div>
            </div>
            <div className="testemonials__card">
              <div className="testemonials__card-header">
                <span>A</span>
                <img src={Cat} alt="" />
              </div>
              <div className="testemonials__card-text">
                <span>Alexandre</span>
                <p>
                  "Nunca pensei que aprender inglês poderia ser tão divertido e
                  eficiente. As aulas são personalizadas para o meu ritmo e
                  nível de conhecimento. Recomendo a Talkative para todos que
                  querem realmente aprender."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testemonials;
