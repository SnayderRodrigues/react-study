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
      question: "Título da Pergunta 1",
      answer:
        "Resposta para a Pergunta 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate odit reiciendis maiores suscipit vel quasi, id architecto dolore doloribus molestiae consectetur repellendus impedit aliquid eius nulla sint ducimus vitae.",
    },
    {
      question: "Título da Pergunta 2",
      answer:
        "Resposta para a Pergunta 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate odit reiciendis maiores suscipit vel quasi, id architecto dolore doloribus molestiae consectetur repellendus impedit aliquid eius nulla sint ducimus vitae.",
    },
    {
      question: "Título da Pergunta 3",
      answer:
        "Resposta para a Pergunta 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate odit reiciendis maiores suscipit vel quasi, id architecto dolore doloribus molestiae consectetur repellendus impedit aliquid eius nulla sint ducimus vitae.",
    },
    {
      question: "Título da Pergunta 4",
      answer:
        "Resposta para a Pergunta 4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate odit reiciendis maiores suscipit vel quasi, id architecto dolore doloribus molestiae consectetur repellendus impedit aliquid eius nulla sint ducimus vitae.",
    },
    {
      question: "Título da Pergunta 5",
      answer:
        "Resposta para a Pergunta 5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate odit reiciendis maiores suscipit vel quasi, id architecto dolore doloribus molestiae consectetur repellendus impedit aliquid eius nulla sint ducimus vitae.",
    },
    {
      question: "Título da Pergunta 6",
      answer:
        "Resposta para a Pergunta 6. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate odit reiciendis maiores suscipit vel quasi, id architecto dolore doloribus molestiae consectetur repellendus impedit aliquid eius nulla sint ducimus vitae.",
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
