import { useLayoutEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="wrapper contact__wrapper">
        <div className="contact__headline">
          <h2>HAVE A PROJECT IN MIND?</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            ipsam cupiditate adipisci molestiae dolores libero at ad incidunt
            vitae quos praesentium distinctio ratione, facilis atque tempora ex
            obcaecati est? Dolore?
          </p>
          <a href="" className="button link">
            Get in touch
            <FaLongArrowAltRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
