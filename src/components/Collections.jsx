import { useLayoutEffect } from "react";
import Cats from "../img/IMG_20200407_163224926_HDR-01.jpeg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Collections = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".collections", {
      scale: 0.8,
      scrollTrigger: {
        trigger: ".collections",
        // markers: true,
        scrub: true,
        start: "100% 40%",
        end: "150% 70%",
      },
    });

    gsap.to(".collections__image-wrapper-1", {
      x: 0,
      scrollTrigger: {
        trigger: ".collections__image-wrapper-1",
        // markers: true,
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf(".collections");
      gsap.killTweensOf(".collections__image-wrapper-1");
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".collections__image-wrapper-2", {
      x: 0,
      scrollTrigger: {
        trigger: ".collections__image-wrapper-2",
        // markers: true,
        scrub: true,
      },
    });

    return () => {
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
