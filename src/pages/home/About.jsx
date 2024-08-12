import { Link } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowForward } from "react-icons/io";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="wrapper about__wrapper">
        <div className="about__headline-wrapper">
          <img src={Cat} alt="" />
          <div>
            <h2>
              "Não se trata apenas de aprender inglês. É sobre pessoas e como a
              linguagem transforma suas vidas."
            </h2>
            <span>Exemplo Nome</span>
            <span>CEO e Fundador da Talkative</span>
          </div>
        </div>
        <h2>Nossa Escola</h2>
        <div className="about__content-wrapper">
          <img src={Cat} alt="" className="about__content-image" />
          <div className="about__content-description">
            <div className="about__content-text">
              <h3>Sobre Nós</h3>
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
        <div className="about__mission-wrapper">
          <div>
            <h3>Nossa Missão</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              quaerat nobis dolores quia, fugiat perspiciatis harum assumenda
              temporibus consequuntur, deserunt iure enim, reiciendis a. Ut
              numquam corrupti odit rem id!
            </p>
          </div>
          <img src={Cat} alt="" className="about__mission-image" />
        </div>
        <h3 className="about__info-headline">
          Lorem ipsum, dolor sit amet consectetur
        </h3>
        <div className="about__info-wrapper">
          <div className="about__info">
            <span>15+</span>
            <span>Anos de experiência no mercado de ensino</span>
          </div>
          <div className="about__info">
            <span>100 mil+</span>
            <span>Alunos matriculados em nossos cursos</span>
          </div>
          <div className="about__info">
            <span>1000+</span>
            <span>Professores nativos e certificados</span>
          </div>
          <div className="about__info">
            <span>97%</span>
            <span>Dos alunos aprovam nossos cursos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
