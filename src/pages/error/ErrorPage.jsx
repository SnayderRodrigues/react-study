import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowBack } from "react-icons/io";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <section className="errorPage">
        <div className="wrapper errorPage__wrapper">
          <h2 className="errorPage__headline">
            Ops! <br />
            Página não encontrada.
          </h2>
          <Link to="/" className="button errorPage__button">
            <IoMdArrowBack />
            Retornar à página inicial
          </Link>
          <img src={Cat} alt="" className="errorPage__image" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ErrorPage;
