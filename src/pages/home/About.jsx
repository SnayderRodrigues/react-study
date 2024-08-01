import { Link } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowForward } from "react-icons/io";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="wrapper about__image-wrapper">
        <img src={Cat} alt="" className="about__image" />
      </div>
      <div className="wrapper about__wrapper">
        <div className="about__headline-wrapper">
          <div>
            <h2>
              "Não se trata apenas de aprender inglês. É sobre pessoas e como a
              linguagem transforma suas vidas."
            </h2>
            <p>Exemplo Nome</p>
            <p>CEO da Talkative</p>
          </div>
          <div>
            <img src={Cat} alt="" />
          </div>
        </div>
        <h2>Nossa Escola</h2>
        <div className="about__content-wrapper">
          <div className="about__content-image">
            <img src={Cat} alt="" />
          </div>
          <div className="about__content-description">
            <div className="about__content-text">
              <p>
                Acreditamos que o inglês é a chave para o sucesso individual e
                profissional. É a ponte que te conecta com novas culturas,
                amplia seus horizontes e te impulsiona na conquista dos seus
                sonhos.
              </p>
              <p>
                Com uma metodologia inovadora e personalizada, aulas online ao
                vivo e professores experientes, te guiamos em uma jornada de
                aprendizado eficiente e divertida.
              </p>
              <Link to="about" className="button link">
                Saiba mais sobre nós
                <IoMdArrowForward />
              </Link>
            </div>
          </div>
        </div>
        <div className="about__info-wrapper">
            <div>
              <span>15+</span>
              <span>Anos de experiência no mercado de ensino</span>
            </div>
            <div>
              <span>100000+</span>
              <span>Alunos matriculados em nossos cursos</span>
            </div>
            <div>
              <span>1000+</span>
              <span>Professores nativos e certificados</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
