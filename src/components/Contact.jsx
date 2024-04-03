import { Link } from "react-router-dom";
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
          <Link to="contact" className="button link">
            Get in touch
            <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
