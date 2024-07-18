import React from "react";
import { FaAsterisk } from "react-icons/fa";

const ContactPageForm = () => {
  return (
    <section className="contactPage-form">
      <div className="wrapper contactPage-form__wrapper ">
        <div className="contactPage-form__headline">
          <h1>Não hesite em entrar em contato!</h1>
        </div>
        <div className="contactPage-form__contact">
          <div className="contactPage-form__contact-links">
            <span className="contactPage-form__contact-title">
              <FaAsterisk />
              Contato
            </span>
            <span className="link-span">(00) 00000-0000</span>
            <span className="link-span">contato@talkative.com</span>
          </div>
        </div>
        <div className="contactPage-form__form">
          <div className="contactPage-form__form-headline">
            <h2>
              Preencha o formulário e entraremos em contato com você o mais
              rápido possível.
            </h2>
          </div>
          <div className="contactPage-form__form-half">
            <label>
              Nome<span className="highlight">*</span>
            </label>
            <input type="text" placeholder="Seu nome" aria-required="true" />
          </div>
          <div className="contactPage-form__form-half">
            <label>
              Sobrenome
              <span className="highlight">*</span>
            </label>
            <input
              type="text"
              placeholder="Seu sobrenome"
              aria-required="true"
            />
          </div>
          <div className="contactPage-form__form-half">
            <label>
              Número de telefone<span className="highlight">*</span>
            </label>
            <input
              type="number"
              placeholder="Seu número de telefone"
              aria-required="true"
            />
          </div>
          <div className="contactPage-form__form-half">
            <label>
              Endereço de e-mail<span className="highlight">*</span>
            </label>
            <input
              type="email"
              placeholder="Seu endereço de e-mail"
              aria-required="true"
            />
          </div>
          <button className="button link">Comece sua jornada</button>
        </div>
      </div>
    </section>
  );
};

export default ContactPageForm;
