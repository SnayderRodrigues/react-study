import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLongArrowAltRight } from "react-icons/fa";

const Awards = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".awards-line-hidden", {
      y: 0,
      stagger: 0.1,
      delay: 0,
      duration: 0.1,
      scrollTrigger: {
        trigger: ".awards-line-hidden",
        // markers: true,
        // scrub: true,
        start: "0% 90%",
        end: "100% 90%",
      },
    });

    return () => {
      gsap.killTweensOf(".awards-line-hidden");
    };
  }, []);

  return (
    <section id="awards" className="awards">
      <div className="awards__carousel-title">
        <span>AWARDS•</span>
        <span className="span-highlight">AWARDS•</span>
        <span>AWARDS•</span>
        <span className="span-highlight">AWARDS•</span>
        <span>AWARDS•</span>
      </div>
      <div className="wrapper awards__wrapper">
        <div className="awards__title-wrapper">
          <h2 className="awards__title">
            <span className="awards-line-hidden">
              While our focus is on client success,
            </span>{" "}
          </h2>
          <h2 className="awards__title">
            <span className="awards-line-hidden">
              we’re proud to have our work
            </span>{" "}
          </h2>
          <h2 className="awards__title">
            <span className="awards-line-hidden">
              continually recognised by the best of
            </span>{" "}
          </h2>
          <h2 className="awards__title">
            <span className="awards-line-hidden">the best.</span>
          </h2>
        </div>
        <div className="awards__content">
          <div className="awards__card">
            <h3>Award Name Example</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              amet earum dolor non, libero corrupti, quidem nulla excepturi est
              ratione nisi quibusdam dicta fuga, nostrum sapiente in harum sit
              fugiat!
            </p>
          </div>
          <div className="awards__card">
            <h3>Award Name Example</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              amet earum dolor non, libero corrupti, quidem nulla excepturi est
              ratione nisi quibusdam dicta fuga, nostrum sapiente in harum sit
              fugiat!
            </p>
          </div>
          <div className="awards__card">
            <h3>Award Name Example</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              amet earum dolor non, libero corrupti, quidem nulla excepturi est
              ratione nisi quibusdam dicta fuga, nostrum sapiente in harum sit
              fugiat!
            </p>
          </div>
          <div className="awards__card">
            <h3>Award Name Example</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              amet earum dolor non, libero corrupti, quidem nulla excepturi est
              ratione nisi quibusdam dicta fuga, nostrum sapiente in harum sit
              fugiat!
            </p>
          </div>
        </div>
        <Link to="about" className="button link">
          See all awards <FaLongArrowAltRight />
        </Link>
      </div>
    </section>
  );
};

export default Awards;
