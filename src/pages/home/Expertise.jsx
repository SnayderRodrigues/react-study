import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { MdHideImage } from "react-icons/md";

const Expertise = () => {
  return (
    <section id="expertise" className="expertise">
      <div className="wrapper expertise__wrapper">
        <h2>NOSSA EXPERTISE</h2>
        <p>
          Para oferecer o melhor aprendizado em inglês, destacamos algumas
          características que fazem da nossa escola a escolha ideal:
        </p>
        <div className="expertise__cards-wrapper">
          <div className="expertise__card">
            <MdHideImage />
            <span>Aulas ao vivo 24h</span>
            <p>
              Disponibilidade de aulas ao vivo em qualquer horário, permitindo
              flexibilidade para os alunos.
            </p>
          </div>
          <div className="expertise__card">
            <MdHideImage />
            <span>Professores Nativos</span>
            <p>
              Instrutores que são falantes nativos de inglês, garantindo uma
              experiência autêntica e imersiva.
            </p>
          </div>
          <div className="expertise__card">
            <MdHideImage />
            <span>Conteúdo Inovador</span>
            <p>
              Material didático atualizado e inovador que acompanha as
              tendências mais recentes de ensino.
            </p>
          </div>
          <div className="expertise__card">
            <MdHideImage />
            <span>Metodologia Personalizada</span>
            <p>
              Planos de estudo personalizados de acordo com as necessidades e
              objetivos de cada aluno.
            </p>
          </div>
          <div className="expertise__card">
            <MdHideImage />
            <span>Acompanhamento Individualizado</span>
            <p>
              Feedback constante e suporte individual para acompanhar o
              progresso dos alunos.
            </p>
          </div>
          <div className="expertise__card">
            <MdHideImage />
            <span>Plataforma Interativa</span>
            <p>
              Uso de uma plataforma online interativa que facilita o aprendizado
              e o engajamento dos alunos.
            </p>
          </div>
          <div className="expertise__card">
            <MdHideImage />
            <span>Aulas de Conversação</span>
            <p>
              Sessões focadas em melhorar a fluência e a confiança dos alunos ao
              falar inglês.
            </p>
          </div>
          <div className="expertise__card">
            <MdHideImage />
            <span>Preparação para Exames</span>
            <p>
              Cursos específicos para preparação de exames de proficiência, como
              TOEFL, IELTS, entre outros.
            </p>
          </div>
          <Link to="expertise" className="button link">
            Mais sobre os cursos
            <IoMdArrowForward />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
