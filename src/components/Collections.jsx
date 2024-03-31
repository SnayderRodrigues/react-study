import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cats from "../img/IMG_20200407_163224926_HDR-01.jpeg";

const Collections = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".collections__image-wrapper-1", {
      x: "-200px",
      scrollTrigger: {
        trigger: ".collections__image-wrapper-1",
        // markers: true,
        scrub: true,
      },
    });

    gsap.to(".collections__image-wrapper-2", {
      x: "-100px",
      scrollTrigger: {
        trigger: ".collections__image-wrapper-2",
        // markers: true,
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf(".collections__image-wrapper-1");
      gsap.killTweensOf(".collections__image-wrapper-2");
    };
  }, []);

  return (
    <section id="collections" className="collections">
      <div className="wrapper collections-wrapper">
        <h2 className="collections__title">COLLECTIONS</h2>
      </div>
      <div className="collections__image-wrapper-1">
        <img src={Cats} alt="" className="collections__image" />
        <img src={Cats} alt="" className="collections__image" />
        <img src={Cats} alt="" className="collections__image" />
        <img src={Cats} alt="" className="collections__image" />
      </div>
      <div className="collections__image-wrapper-2">
        <img src={Cats} alt="" className="collections__image" />
        <img src={Cats} alt="" className="collections__image" />
        <img src={Cats} alt="" className="collections__image" />
        <img src={Cats} alt="" className="collections__image" />
      </div>
    </section>
  );
};

export default Collections;
