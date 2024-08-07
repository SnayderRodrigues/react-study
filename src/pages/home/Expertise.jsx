import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { MdHideImage } from "react-icons/md";

const expertises = [
  {
    icon: <MdHideImage />,
    title: "Aulas ao vivo 24h",
    description:
      "Disponibilidade de aulas ao vivo em qualquer horário, permitindo flexibilidade para os alunos.",
  },
  {
    icon: <MdHideImage />,
    title: "Professores Nativos",
    description:
      "Instrutores que são falantes nativos de inglês, garantindo uma experiência autêntica e imersiva.",
  },
  {
    icon: <MdHideImage />,
    title: "Conteúdo Inovador",
    description:
      "Material didático atualizado e inovador que acompanha as tendências mais recentes de ensino.",
  },
  {
    icon: <MdHideImage />,
    title: "Metodologia Personalizada",
    description:
      "Planos de estudo personalizados de acordo com as necessidades e objetivos de cada aluno.",
  },
  {
    icon: <MdHideImage />,
    title: "Acompanhamento Individualizado",
    description:
      "Feedback constante e suporte individual para acompanhar o progresso dos alunos.",
  },
  {
    icon: <MdHideImage />,
    title: "Plataforma Interativa",
    description:
      "Uso de uma plataforma online interativa que facilita o aprendizado e o engajamento dos alunos.",
  },
  {
    icon: <MdHideImage />,
    title: "Aulas de Conversação",
    description:
      "Sessões focadas em melhorar a fluência e a confiança dos alunos ao falar inglês.",
  },
  {
    icon: <MdHideImage />,
    title: "Preparação para Exames",
    description:
      "Cursos específicos para preparação de exames de proficiência, como TOEFL, IELTS, entre outros.",
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="expertise">
      <div className="wrapper expertise__wrapper">
        <h2>Nossa Expertise</h2>
        <p>
          Para oferecer o melhor aprendizado em inglês, destacamos algumas
          características que fazem da nossa escola a escolha ideal:
        </p>
        <div className="expertise__cards-wrapper">
          {expertises.map((expertise, index) => (
            <div key={index} className="expertise__card">
              {expertise.icon}
              <span>{expertise.title}</span>
              <p>{expertise.description}</p>
            </div>
          ))}
        </div>
        <Link to="about" className="button link">
          Mais informações
          <IoMdArrowForward />
        </Link>
      </div>
    </section>
  );
};

export default Expertise;
