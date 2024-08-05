import { useForm } from "react-hook-form";
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
            <div className="contactPage-form__form-half">
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
            <div className="contactPage-form__form-half">
              <label>Sobrenome</label>
              <input
                type="text"
                placeholder="Seu sobrenome"
                {...register("surname")}
              />
            </div>
            <div className="contactPage-form__form-half">
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
            <div className="contactPage-form__form-half">
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
            <button
              onClick={() => handleSubmit(onSubmit)()}
              className="button link"
            >
              Comece sua jornada
            </button>
          </div>
          <div className="contactPage-form__contact">
            <div>
              <span>Fale Conosco</span>
              <span>Lorem ipsum dolor sit amet consectetur.</span>
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
              <span>Lorem ipsum dolor sit amet consectetur.</span>
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
