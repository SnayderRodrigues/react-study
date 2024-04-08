import React from "react";
import { Link } from "react-router-dom";
// import "./expertisepage.scss";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { IoMdArrowForward } from "react-icons/io";
import { FaMountainSun } from "react-icons/fa6";

const ExpertisePage = () => {
  return (
    <main>
      <section className="expertisePage-hero">
        <div className="wrapper expertisePage__wrapper">
          <h1>
            Expertise Page <br /> Example Text
          </h1>
        </div>
      </section>
      <section className="expertisePage-midpage">
        <div className="wrapper expertisePage-midpage__wrapper">
          <div className="expertisePage-midpage__image-wrapper">
            <img src={Cat} alt="" />
          </div>
          <div className="expertisePage-midpage__headline">
            <h2>Example text</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              perferendis ex quaerat mollitia iusto, nesciunt ratione quos
              quibusdam distinctio dolores dignissimos nobis.
            </p>
          </div>
          <div className="expertisePage-midpage__cards-wrapper">
            <div className="expertisePage-midpage__card">
              <span>
                <FaMountainSun />
              </span>
              <h3>Category</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                explicabo minima corrupti quia, repudiandae officia quos ullam.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
              <span>
                <FaMountainSun />
              </span>
              <h3>Category</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                explicabo minima corrupti quia, repudiandae officia quos ullam.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
              <span>
                <FaMountainSun />
              </span>
              <h3>Category</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                explicabo minima corrupti quia, repudiandae officia quos ullam.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
              <span>
                <FaMountainSun />
              </span>
              <h3>Category</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                explicabo minima corrupti quia, repudiandae officia quos ullam.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
              <span>
                <FaMountainSun />
              </span>
              <h3>Category</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                explicabo minima corrupti quia, repudiandae officia quos ullam.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
              <span>
                <FaMountainSun />
              </span>
              <h3>Category</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                explicabo minima corrupti quia, repudiandae officia quos ullam.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
              <span>
                <FaMountainSun />
              </span>
              <h3>Category</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                explicabo minima corrupti quia, repudiandae officia quos ullam.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
              <span>
                <FaMountainSun />
              </span>
              <h3>Category</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                explicabo minima corrupti quia, repudiandae officia quos ullam.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="expertisePage-ending">
        <div className="wrapper expertisePage-ending__wrapper">
          <div className="expertisePage-ending__content">
            <div className="expertisePage-ending__image-wrapper">
              <img src={Cat} alt="" />
            </div>
            <div className="expertisePage-ending__text-wrapper">
              <h3>Example expertise text</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat consequatur, temporibus omnis itaque, sed quis
                consequuntur sequi maxime incidunt modi enim quae. Praesentium
                dolorum ducimus quae doloremque possimus, esse earum.
              </p>
            </div>
          </div>
          <div className="expertisePage-ending__content">
            <div className="expertisePage-ending__text-wrapper">
              <h3>Example expertise text</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat consequatur, temporibus omnis itaque, sed quis
                consequuntur sequi maxime incidunt modi enim quae. Praesentium
                dolorum ducimus quae doloremque possimus, esse earum.
              </p>
            </div>
            <div className="expertisePage-ending__image-wrapper">
              <img src={Cat} alt="" />
            </div>
          </div>
          <div className="expertisePage-ending__content">
            <div className="expertisePage-ending__image-wrapper">
              <img src={Cat} alt="" />
            </div>
            <div className="expertisePage-ending__text-wrapper">
              <h3>Example expertise text</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat consequatur, temporibus omnis itaque, sed quis
                consequuntur sequi maxime incidunt modi enim quae. Praesentium
                dolorum ducimus quae doloremque possimus, esse earum.
              </p>
            </div>
          </div>
          <div className="expertisePage-ending__content">
            <div className="expertisePage-ending__text-wrapper">
              <h3>Example expertise text</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat consequatur, temporibus omnis itaque, sed quis
                consequuntur sequi maxime incidunt modi enim quae. Praesentium
                dolorum ducimus quae doloremque possimus, esse earum.
              </p>
            </div>
            <div className="expertisePage-ending__image-wrapper">
              <img src={Cat} alt="" />
            </div>
          </div>
          <div className="expertisePage-ending__cta">
            <span>
              Need a <span className="highlight">expert team</span> <br /> on
              your next project? <br /> Let's talk.
            </span>
            <Link
              to="/contact"
              className="button link expertisePage-ending__button"
            >
              Get in touch
              <IoMdArrowForward />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExpertisePage;
