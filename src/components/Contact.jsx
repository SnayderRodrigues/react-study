import { Link } from "react-router-dom";
// import { useLayoutEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLongArrowAltRight } from "react-icons/fa";

const Contact = () => {
  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.to(".contact__wrapper", {
  //     width: "1400px",
  //     scrollTrigger: {
  //       trigger: ".contact__wrapper",
  //       // markers: true,
  //       scrub: true,
  //       start: "0% 0%",
  //       end: "100% 500%",
  //     },
  //   });

  //   return () => {
  //     gsap.killTweensOf(".contact__wrapper");
  //   };
  // }, []);

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
