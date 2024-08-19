import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

const ContactPageForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="contactPage-form">
      <div className="wrapper contactPage-form__wrapper ">
        <div className="contactPage-form__headline">
          <h1>Não hesite em entrar em contato!</h1>
          <p>
            Preencha o formulário e entraremos em contato com você o mais rápido
            possível para dar procedimento à sua matrícula.
          </p>
        </div>
        <div className="contactPage-form__contact-wrapper">
          <div className="contactPage-form__form">
            <h2 className="contactPage-form__form-headline">
              Formulário de Contato
            </h2>
            <div className="contactPage-form__input-section">
              <label>
                Nome<span className="highlight">*</span>
              </label>
              <input
                className={errors?.name && "input-error"}
                type="text"
                placeholder="Seu nome"
                {...register("name", { required: true })}
              />
              {errors?.name?.type == "required" && (
                <span>Este campo é obrigatório.</span>
              )}
            </div>
            <div className="contactPage-form__input-section">
              <label>
                Sobrenome <span className="lowlight">(opcional)</span>
              </label>
              <input
                type="text"
                placeholder="Seu sobrenome"
                {...register("surname")}
              />
            </div>
            <div className="contactPage-form__input-section">
              <label>
                Endereço de e-mail<span className="highlight">*</span>
              </label>
              <input
                className={errors?.email && "input-error"}
                type="email"
                placeholder="Seu endereço de e-mail"
                {...register("email", { required: true })}
              />
              {errors?.email?.type == "required" && (
                <span>Este campo é obrigatório.</span>
              )}
            </div>
            <div className="contactPage-form__input-section">
              <label>
                Número de telefone<span className="highlight">*</span>
              </label>
              <input
                className={errors?.phone && "input-error"}
                type="number"
                placeholder="Seu número de telefone"
                {...register("phone", { required: true, minLength: 11 })}
              />
              {errors?.phone?.type == "minLength" && (
                <span>Número incompleto.</span>
              )}
              {errors?.phone?.type == "required" && (
                <span>Este campo é obrigatório.</span>
              )}
            </div>
            <div className="contactPage-form__textarea-section">
              <label>
                Possui alguma dúvida ou mensagem adicional?{" "}
                <span className="lowlight">(opcional)</span>
              </label>
              <textarea placeholder="Seu mensagem" {...register("message")} />
            </div>
            <div className="contactPage-form__form-section">
              <label>
                Selecione os cursos de interesse:{" "}
                <span className="lowlight">(opcional)</span>
              </label>
              <div>
                <input
                  id="course1"
                  type="checkbox"
                  value="Talkative Complete"
                  {...register("courses")}
                />
                <label htmlFor="course1">
                  Talkative Complete: English Mastery
                </label>
              </div>
              <div>
                <input
                  id="course2"
                  type="checkbox"
                  value="Talkative Kids"
                  {...register("courses")}
                />
                <label htmlFor="course2">
                  Talkative Kids: English Adventures
                </label>
              </div>
              <div>
                <input
                  id="course3"
                  type="checkbox"
                  value="Talkative Teens"
                  {...register("courses")}
                />
                <label htmlFor="course3">Talkative Teens: Global Connect</label>
              </div>
              <div>
                <input
                  id="course4"
                  type="checkbox"
                  value="Talkative Express"
                  {...register("courses")}
                />
                <label htmlFor="course4">
                  Talkative Express: English in a Flash
                </label>
              </div>
            </div>
            <div className="contactPage-form__form-section">
              <span>Ainda não sabe qual curso escolher?</span>
              <span>
                Saiba mais sobre nossos cursos <Link to="/courses">aqui</Link>.
              </span>
            </div>
            <button onClick={() => handleSubmit(onSubmit)()} className="button">
              Comece sua jornada
            </button>
          </div>
          <div className="contactPage-form__contact">
            <div>
              <span>Fale Conosco</span>
              <span>Entre em contato através dos links abaixo.</span>
              <div>
                <FaWhatsapp />
                <span>Converse no WhatsApp</span>
              </div>
              <div>
                <MdOutlineAlternateEmail />
                <span>Nos escreva um e-mail</span>
              </div>
              <div>
                <FaInstagram />
                <span>Entre em contato pelo Instagram</span>
              </div>
            </div>
            <div>
              <span>Ligue</span>
              <span>Horário de atendimendo 08h00 às 17h00 (Seg-Sex).</span>
              <div>
                <FiPhoneCall />
                <span>(00) 00000-0000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageForm;
