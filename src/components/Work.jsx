import { useLayoutEffect } from "react";
import Photo1 from "../img/jakob-owens-vQJkhe0EAIg-unsplash.webp";
import Photo2 from "../img/jenn-wood-MdQlczZR9sU-unsplash_1.webp";
import Photo3 from "../img/clint-mckoy-PVlSUz_g31c-unsplash_1.webp";
import Photo4 from "../img/eric-welch-XucH5JNRFig-unsplash_1.webp";
import Photo5 from "../img/mehdi-messrro-yef79KkAguA-unsplash_1.webp";
import { FaLongArrowAltRight } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Work = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // gsap.to(".work__image-1", {
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: ".work__image-1",
    //     // markers: true,
    //     // scrub: true,
    //   },
    // });

    // gsap.to(".work__image-2", {
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: ".work__image-2",
    //     // markers: true,
    //     // scrub: true,
    //   },
    // });
    // gsap.to(".work__image-3", {
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: ".work__image-3",
    //     // markers: true,
    //     // scrub: true,
    //   },
    // });
    // gsap.to(".work__image-4", {
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: ".work__image-4",
    //     // markers: true,
    //     // scrub: true,
    //   },
    // });
    // gsap.to(".work__image-5", {
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: ".work__image-5",
    //     // markers: true,
    //     // scrub: true,
    //   },
    // });

    // return () => {
    //   gsap.killTweensOf(".work__image-1");
    //   gsap.killTweensOf(".work__image-2");
    //   gsap.killTweensOf(".work__image-3");
    //   gsap.killTweensOf(".work__image-4");
    //   gsap.killTweensOf(".work__image-5");
    // gsap.killTweensOf(".work");
    // };
  }, []);

  return (
    <section id="work" className="work">
      <div className="wrapper work__wrapper">
        <h2>SELECTED WORK</h2>
        <div className="work__image-wrapper">
          <img src={Photo1} alt="" className="work__image-1" />
        </div>
        <div className="work__grid-wrapper">
          <img src={Photo2} alt="" className="work__image-2" />
          <img src={Photo3} alt="" className="work__image-3" />
          <img src={Photo4} alt="" className="work__image-4" />
          <img src={Photo5} alt="" className="work__image-5" />
        </div>
        <a href="" className="button link">
          See full portfolio
          <FaLongArrowAltRight />
        </a>
      </div>
    </section>
  );
};

export default Work;
