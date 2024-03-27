import { useLayoutEffect } from "react";
import Cats from "../img/IMG_20200407_163224926_HDR-01.jpeg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Work = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // gsap.to(".work", {
    //   scale: 1,
    //   borderRadius: "1.125rem",
    //   scrollTrigger: {
    //     trigger: ".work",
    //     // markers: true,
    //     scrub: true,
    //     start: "0% 70%",
    //     end: "30% 70%",
    //   },
    // });

    gsap.to(".work__image-1", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".work__image-1",
        // markers: true,
        // scrub: true,
      },
    });

    gsap.to(".work__image-2", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".work__image-2",
        // markers: true,
        // scrub: true,
      },
    });
    gsap.to(".work__image-3", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".work__image-3",
        // markers: true,
        // scrub: true,
      },
    });
    gsap.to(".work__image-4", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".work__image-4",
        // markers: true,
        // scrub: true,
      },
    });
    gsap.to(".work__image-5", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".work__image-5",
        // markers: true,
        // scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf(".work__image-1");
      gsap.killTweensOf(".work__image-2");
      gsap.killTweensOf(".work__image-3");
      gsap.killTweensOf(".work__image-4");
      gsap.killTweensOf(".work__image-5");
      // gsap.killTweensOf(".work");
    };
  }, []);

  return (
    <section id="work" className="work">
      <div className="wrapper work__wrapper">
        <h2>SELECTED WORK</h2>
        <div className="work__image-wrapper">
          <img src={Cats} alt="" className="work__image-1" />
        </div>
        <div className="work__grid-wrapper">
          <img src={Cats} alt="" className="work__image-2" />
          <img src={Cats} alt="" className="work__image-3" />
          <img src={Cats} alt="" className="work__image-4" />
          <img src={Cats} alt="" className="work__image-5" />
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
