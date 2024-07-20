import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { FaAsterisk } from "react-icons/fa";

const AboutPageTestemonials = () => {
  const sliderItems = [
    <div className="aboutPageTestemonials__slider slider-active">
      <h2 className="aboutPageTestemonials__headline">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vel quae
        dicta eaque nostrum consequuntur quas officia perspiciatis? Voluptate
        ipsum deserunt vero voluptatem blanditiis, delectus necessitatibus
        perferendis. Suscipit, expedita corrupti?
      </h2>
      <div className="aboutPageTestemonials__author">
        <div className="author-div">
          <span className="author-name">
            <FaAsterisk /> Nome
          </span>
        </div>
      </div>
    </div>,
    <div className="aboutPageTestemonials__slider">
      <h2 className="aboutPageTestemonials__headline">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        aperiam corrupti vel eum inventore officiis, facere praesentium quia
        voluptatum dolores voluptates deserunt expedita maxime delectus
        repellendus optio dolor cumque veniam?
      </h2>
      <div className="aboutPageTestemonials__author">
        <div className="author-div">
          <span className="author-name">
            <FaAsterisk /> Nome
          </span>
        </div>
      </div>
    </div>,
    <div className="aboutPageTestemonials__slider">
      <h2 className="aboutPageTestemonials__headline">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum
        nam aperiam minus impedit itaque voluptatibus? Magni modi blanditiis
        possimus laborum praesentium recusandae. Nostrum facilis obcaecati
        impedit, minima tempora natus!
      </h2>
      <div className="aboutPageTestemonials__author">
        <div className="author-div">
          <span className="author-name">
            <FaAsterisk /> Nome
          </span>
        </div>
      </div>
    </div>,
    <div className="aboutPageTestemonials__slider">
      <h2 className="aboutPageTestemonials__headline">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio officia
        eos odio voluptas, blanditiis expedita, delectus a dolorum placeat
        voluptates vitae. Quasi est unde ut, dolore nihil quis reiciendis
        molestias.
      </h2>
      <div className="aboutPageTestemonials__author">
        <div className="author-div">
          <span className="author-name">
            <FaAsterisk /> Nome
          </span>
        </div>
      </div>
    </div>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showItem = (index) => {
    setCurrentIndex(index);
  };

  const prevItem = () => {
    const newIndex =
      currentIndex === 0 ? sliderItems.length - 1 : currentIndex - 1;
    showItem(newIndex);
  };

  const nextItem = () => {
    const newIndex =
      currentIndex === sliderItems.length - 1 ? 0 : currentIndex + 1;
    showItem(newIndex);
  };

  return (
    <section className="aboutPageTestemonials">
      <div className="wrapper-medium aboutPageTestemonials__wrapper">
        {sliderItems.map((item, index) =>
          React.cloneElement(item, {
            className:
              index === currentIndex
                ? "aboutPageTestemonials__slider slider-active"
                : "aboutPageTestemonials__slider",
            key: index,
          })
        )}
        <div className="navigation">
          <div className="navigation-div">
            <button
              onClick={prevItem}
              className="navigation-button-left"
              id="leftButton"
            >
              <IoMdArrowForward />
            </button>
            <button
              onClick={nextItem}
              className="navigation-button-right"
              id="rightButton"
            >
              <IoMdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageTestemonials;
