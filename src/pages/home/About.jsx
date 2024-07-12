import { Link } from "react-router-dom";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import AboutUsPhoto from "../../img/daniel-lee-S9Zo6zF9cWE-unsplash-_1_.webp";
import { IoMdArrowForward } from "react-icons/io";
import Walkme from "../../assets/svg/walkme.svg"
import UniEssex from "../../assets/svg/university-of-essex.svg"
import Uber from "../../assets/svg/uber.svg"
import Hootsuite from "../../assets/svg/hootsuite.svg"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="wrapper about__image-wrapper">
        <img src={Cat} alt="" className="about__image" />
      </div>
      <div className="wrapper about__wrapper">
        <div className="about__headline">
          <h2>
            Não se trata apenas de aprender inglês. É sobre pessoas e como a
            linguagem transforma suas vidas.
          </h2>
        </div>

        {/* <div className="about__cards-carousel">
          <div className="about__cards-wrapper">
            <div className="about__card">
              <img src={Hootsuite} alt="" />
            </div>
            <div className="about__card">
              <img src={Uber} alt="" />
            </div>
            <div className="about__card">
              <img src={UniEssex} alt="" />
            </div>
            <div className="about__card">
              <img src={Walkme} alt="" />
            </div>
          </div>
          <div className="about__cards-wrapper">
            <div className="about__card">
              <img src={Hootsuite} alt="" />
            </div>
            <div className="about__card">
              <img src={Uber} alt="" />
            </div>
            <div className="about__card">
              <img src={UniEssex} alt="" />
            </div>
            <div className="about__card">
              <img src={Walkme} alt="" />
            </div>
          </div>
        </div> */}

        <h2>NOSSA ESCOLA</h2>
        <div className="about__content-wrapper">
          <div className="about__content-description">
            <div className="about__content-text-1">
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
            <div className="about__content-text-2">
              <div>
                <span>12+</span>
                <span>Anos de Experiência no Mercado de Ensino</span>
              </div>

              <div>
                <span>5000+</span>
                <span>Alunos Formados com Sucesso</span>
              </div>

              <div>
                <span>80+</span>
                <span>Professores Nativos e Certificados</span>
              </div>
            </div>
          </div>
          <div className="about__content-image">
            <img src={Cat} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
