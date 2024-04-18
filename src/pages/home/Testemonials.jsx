import React from "react";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

const Testemonials = () => {
  return (
    <section className="testemonials">
      <div className="wrapper testemonials__wrapper">
        <div className="testemonials__container">
          <h2>TESTEMONIALS</h2>
          <div className="testemonials__card-wrapper">
            <div className="testemonials__card">
              <p>
                "Working with Array Studio was fantastic! They captured the
                essence of our brand perfectly in both photos and videos. The
                final product exceeded our expectations, and the post-production
                editing was flawless."
              </p>
              <div className="testemonials__card-title">
                <img src={Cat} alt="" />
                <div>
                  <span>Sarah M.</span>
                  <span>Bloom Cosmetics</span>
                </div>
              </div>
            </div>
            <div className="testemonials__card">
              <p>
                "From the initial consultation to the final delivery, Array
                Studio provided exceptional service. Their creativity and
                attention to detail truly shined through. We'll definitely be
                returning for future projects."
              </p>
              <div className="testemonials__card-title">
                <img src={Cat} alt="" />
                <div>
                  <span>David L.</span>
                  <span>The Rustic Table</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testemonials__card-wrapper">
            <div className="testemonials__card">
              <p>
                "I was nervous about my headshot photoshoot, but the team at
                Array Studio made me feel comfortable and confident. They helped
                me achieve a professional and polished look that I love."
              </p>
              <div className="testemonials__card-title">
                <img src={Cat} alt="" />
                <div>
                  <span>Emily C.</span>
                  <span>Freelance Writer</span>
                </div>
              </div>
            </div>
            <div className="testemonials__card">
              <p>
                "Array Studio brought our vision for a product launch video to
                life. Their collaborative spirit and expertise in storytelling
                made the entire process seamless. We couldn't be happier with
                the final result."
              </p>
              <div className="testemonials__card-title">
                <img src={Cat} alt="" />
                <div>
                  <span>John P.</span>
                  <span>GreenTech Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testemonials;
