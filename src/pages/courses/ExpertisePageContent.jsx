import React from "react";
import { MdHideImage } from "react-icons/md";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

const ExpertisePageContent = () => {
  return (
    <section className="expertisePage-midpage">
      <div className="wrapper expertisePage-midpage__wrapper">
        <div className="expertisePage-midpage__image-wrapper">
          <img src={Cat} alt="" />
        </div>
        <div className="expertisePage-midpage__headline">
          <h2>TÍTULO</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
            mollitia dolores dolorum praesentium inventore ut quasi voluptatem
            ea quam nam.
          </p>
        </div>
        <div className="expertisePage-midpage__cards-wrapper">
          <div className="expertisePage-midpage__card">
            <span>
              <MdHideImage />
            </span>
            <h3>Aulas ao vivo 24h</h3>
            <p>
              Disponibilidade de aulas ao vivo em qualquer horário, permitindo
              flexibilidade para os alunos.
            </p>
          </div>
          <div className="expertisePage-midpage__card">
            <span>
              <MdHideImage />
            </span>
            <h3>Professores Nativos</h3>
            <p>
              Instrutores que são falantes nativos de inglês, garantindo uma
              experiência autêntica e imersiva.
            </p>
          </div>
          <div className="expertisePage-midpage__card">
            <span>
              <MdHideImage />
            </span>
            <h3>Conteúdo Inovador</h3>
            <p>
              Material didático atualizado e inovador que acompanha as
              tendências mais recentes de ensino.
            </p>
          </div>
          <div className="expertisePage-midpage__card">
            <span>
              <MdHideImage />
            </span>
            <h3>Metodologia Personalizada</h3>
            <p>
              Planos de estudo personalizados de acordo com as necessidades e
              objetivos de cada aluno.
            </p>
          </div>
          <div className="expertisePage-midpage__card">
            <span>
              <MdHideImage />
            </span>
            <h3>Acompanhamento Individualizado</h3>
            <p>
              Feedback constante e suporte individual para acompanhar o
              progresso dos alunos.
            </p>
          </div>
          <div className="expertisePage-midpage__card">
            <span>
              <MdHideImage />
            </span>
            <h3>Plataforma Interativa</h3>
            <p>
              Uso de uma plataforma online interativa que facilita o aprendizado
              e o engajamento dos alunos.
            </p>
          </div>
          <div className="expertisePage-midpage__card">
            <span>
              <MdHideImage />
            </span>
            <h3>Aulas de Conversação</h3>
            <p>
              Sessões focadas em melhorar a fluência e a confiança dos alunos ao
              falar inglês.
            </p>
          </div>
          <div className="expertisePage-midpage__card">
            <span>
              <MdHideImage />
            </span>
            <h3>Preparação para Exames</h3>
            <p>
              Cursos específicos para preparação de exames de proficiência, como
              TOEFL, IELTS, entre outros.
            </p>
          </div>
          <div className="expertisePage-midpage__card">
            <span>
              <MdHideImage />
            </span>
            <h3>Acompanhamento via WhatsApp</h3>
            <p>
              Suporte contínuo e direto pelo WhatsApp para esclarecer dúvidas e
              oferecer orientação.
            </p>
          </div>
          <div className="expertisePage-midpage__card">
            <span>
              <MdHideImage />
            </span>
            <h3>Teste de Nível</h3>
            <p>
              Avaliação precisa do nível de inglês dos alunos para direcionar o
              ensino de acordo com suas necessidades específicas.
            </p>
          </div>
          <div className="expertisePage-midpage__card">
            <span>
              <MdHideImage />
            </span>
            <h3>Inglês instrumental</h3>
            <p>
              Cursos focados em habilidades específicas, como leitura técnica ou
              redação acadêmica, para atender às necessidades dos alunos.
            </p>
          </div>
          <div className="expertisePage-midpage__card">
            <span>
              <MdHideImage />
            </span>
            <h3>Certificação Reconhecida</h3>
            <p>
              Certificados reconhecidos internacionalmente que comprovam o nível
              de proficiência alcançado pelos nossos alunos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertisePageContent;
