import React from "react";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

const Testemonials = () => {
  return (
    <section className="testemonials">
      <div className="wrapper testemonials__wrapper">
        <h2>TESTEMONIALS</h2>
        <div className="testemonials__card-wrapper">
          <div className="testemonials__card">
            <p>
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ab
              sunt assumenda dignissimos dolorum dolore, laboriosam, nisi beatae
              ut, modi nihil recusandae magni numquam? Optio ullam sunt rerum
              alias? Odit."
            </p>
            <div className="testemonials__card-title">
              <img src={Cat} alt="" />
              <div>
                <span>Author Name</span>
                <span>Brand Example</span>
              </div>
            </div>
          </div>
          <div className="testemonials__card">
            <p>
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ab
              sunt assumenda dignissimos dolorum dolore, laboriosam, nisi beatae
              ut, modi nihil recusandae magni numquam? Optio ullam sunt rerum
              alias? Odit."
            </p>
            <div className="testemonials__card-title">
              <img src={Cat} alt="" />
              <div>
                <span>Author Name</span>
                <span>Brand Example</span>
              </div>
            </div>
          </div>
        </div>
        <div className="testemonials__card-wrapper">
          <div className="testemonials__card">
            <p>
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ab
              sunt assumenda dignissimos dolorum dolore, laboriosam, nisi beatae
              ut, modi nihil recusandae magni numquam? Optio ullam sunt rerum
              alias? Odit."
            </p>
            <div className="testemonials__card-title">
              <img src={Cat} alt="" />
              <div>
                <span>Author Name</span>
                <span>Brand Example</span>
              </div>
            </div>
          </div>
          <div className="testemonials__card">
            <p>
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ab
              sunt assumenda dignissimos dolorum dolore, laboriosam, nisi beatae
              ut, modi nihil recusandae magni numquam? Optio ullam sunt rerum
              alias? Odit."
            </p>
            <div className="testemonials__card-title">
              <img src={Cat} alt="" />
              <div>
                <span>Author Name</span>
                <span>Brand Example</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testemonials;
