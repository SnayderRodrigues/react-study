import React from "react";
import "./expertisepage.scss";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
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
      <section className="expertisePage-ending"></section>
    </main>
  );
};

export default ExpertisePage;
