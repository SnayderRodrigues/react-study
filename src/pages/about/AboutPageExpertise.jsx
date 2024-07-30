import React from "react";
import { MdHideImage } from "react-icons/md";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

const AboutPageExpertise = () => {
  return (
    <section className="aboutPage-expertise">
      <div className="wrapper aboutPage-expertise__wrapper">
        <div className="aboutPage-expertise__image-wrapper">
          <img src={Cat} alt="" />
        </div>
        <div className="aboutPage-expertise__headline">
          <h2>TÍTULO</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
            mollitia dolores dolorum praesentium inventore ut quasi voluptatem
            ea quam nam.
          </p>
        </div>
        <div className="aboutPage-expertise__cards-wrapper">
          <div className="aboutPage-expertise__card">
            <MdHideImage />
            <span>Aulas ao vivo 24h</span>
            <p>
              Disponibilidade de aulas ao vivo em qualquer horário, permitindo
              flexibilidade para os alunos.
            </p>
          </div>
          <div className="aboutPage-expertise__card">
            <MdHideImage />
            <span>Professores Nativos</span>
            <p>
              Instrutores que são falantes nativos de inglês, garantindo uma
              experiência autêntica e imersiva.
            </p>
          </div>
          <div className="aboutPage-expertise__card">
            <MdHideImage />
            <span>Conteúdo Inovador</span>
            <p>
              Material didático atualizado e inovador que acompanha as
              tendências mais recentes de ensino.
            </p>
          </div>
          <div className="aboutPage-expertise__card">
            <MdHideImage />
            <span>Metodologia Personalizada</span>
            <p>
              Planos de estudo personalizados de acordo com as necessidades e
              objetivos de cada aluno.
            </p>
          </div>
          <div className="aboutPage-expertise__card">
            <MdHideImage />
            <span>Acompanhamento Individualizado</span>
            <p>
              Feedback constante e suporte individual para acompanhar o
              progresso dos alunos.
            </p>
          </div>
          <div className="aboutPage-expertise__card">
            <MdHideImage />
            <span>Plataforma Interativa</span>
            <p>
              Uso de uma plataforma online interativa que facilita o aprendizado
              e o engajamento dos alunos.
            </p>
          </div>
          <div className="aboutPage-expertise__card">
            <MdHideImage />
            <span>Aulas de Conversação</span>
            <p>
              Sessões focadas em melhorar a fluência e a confiança dos alunos ao
              falar inglês.
            </p>
          </div>
          <div className="aboutPage-expertise__card">
            <MdHideImage />
            <span>Preparação para Exames</span>
            <p>
              Cursos específicos para preparação de exames de proficiência, como
              TOEFL, IELTS, entre outros.
            </p>
          </div>
          <div className="aboutPage-expertise__card">
            <MdHideImage />
            <span>Acompanhamento via WhatsApp</span>
            <p>
              Suporte contínuo e direto pelo WhatsApp para esclarecer dúvidas e
              oferecer orientação.
            </p>
          </div>
          <div className="aboutPage-expertise__card">
            <MdHideImage />
            <span>Teste de Nível</span>
            <p>
              Avaliação precisa do nível de inglês dos alunos para direcionar o
              ensino de acordo com suas necessidades específicas.
            </p>
          </div>
          <div className="aboutPage-expertise__card">
            <MdHideImage />
            <span>Inglês instrumental</span>
            <p>
              Cursos focados em habilidades específicas, como leitura técnica ou
              redação acadêmica, para atender às necessidades dos alunos.
            </p>
          </div>
          <div className="aboutPage-expertise__card">
            <MdHideImage />
            <span>Certificação Reconhecida</span>
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

export default AboutPageExpertise;
