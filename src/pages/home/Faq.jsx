import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const Faq = () => {
  const location = useLocation();

  const isAboutPage = location.pathname === "/about";

  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "1. Quais são os níveis oferecidos nos cursos?",
      answer:
        "Oferecemos cursos desde o nível iniciante até o avançado. Todos os nossos cursos, como o Talkative Complete, são estruturados para que os alunos progridam de acordo com seu ritmo e objetivos.",
    },
    {
      question:
        "2. O que diferencia os cursos Talkative Kids e Talkative Teens?",
      answer:
        "O Talkative Kids é voltado para crianças, com foco em aprendizado lúdico e interativo, enquanto o Talkative Teens é direcionado para adolescentes, abordando temas relevantes para essa faixa etária e preparando-os para desafios futuros.",
    },
    {
      question: "3. Como funciona o Talkative Express?",
      answer:
        "O Talkative Express é um curso intensivo ideal para quem precisa aprender inglês rapidamente. Ele é focado em resultados rápidos, com ênfase na prática constante e na comunicação em situações do dia a dia.",
    },
    {
      question: "4. As aulas são presenciais ou online?",
      answer:
        "Oferecemos ambas as opções. Você pode escolher entre aulas presenciais na nossa escola ou participar de aulas online ao vivo, que proporcionam flexibilidade e comodidade.",
    },
    {
      question: "5. Quais são os horários das aulas?",
      answer:
        "Nossos cursos têm horários flexíveis para se adaptar à sua rotina. Oferecemos turmas pela manhã, tarde e noite.",
    },
    {
      question: "6. Há algum teste de nivelamento?",
      answer:
        "Sim, antes de iniciar qualquer curso, todos os alunos passam por um teste de nivelamento gratuito. Isso nos permite determinar o melhor nível para cada aluno, garantindo que eles estejam em uma turma adequada ao seu conhecimento atual.",
    },
  ];

  return (
    <section className={`faq ${isAboutPage ? "about-page" : ""}`} id="faq">
      <div className="wrapper faq__wrapper">
        <h2>FAQ</h2>
        <div className="faq__content">
          <div className="faq__text-wrapper">
            <h3>Confira as perguntas mais frequentes</h3>
            <p>
              Encontre respostas para perguntas comuns sobre nossos cursos e
              plataforma.
            </p>
            <Link to="/contact" className="button link">
              Entre em contato
              <IoMdArrowForward />
            </Link>
          </div>
          <div className="faq__dropdown-wrapper">
            <div className="faq__dropdown">
              {faqItems.map((item, index) => (
                <div key={index} className="faq__dropdown-item">
                  <div
                    className={`faq__dropdown-header ${
                      openIndex === index ? "open" : ""
                    }`}
                    onClick={() => handleClick(index)}
                  >
                    <span>{item.question}</span>
                    <MdKeyboardArrowDown />
                  </div>
                  <div className="faq__dropdown-content">
                    <div>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
