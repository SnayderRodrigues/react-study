import { useLayoutEffect } from "react";
import { FaLongArrowAltRight, FaTree } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Expertise = () => {
  //   useLayoutEffect(() => {
  //     gsap.registerPlugin(ScrollTrigger);

  //     gsap.to(".expertise__cards-wrapper", {
  //       position: "fixed",
  //       scrollTrigger: {
  //         trigger: ".expertise__cards-wrapper",
  //         // markers: true,
  //         scrub: true,
  //         start: "0% 50%",
  //         end: "100% 50%",
  //       },
  //     });

  //     return () => {
  //       gsap.killTweensOf(".expertise__cards-wrapper");
  //     };
  //   }, []);

  return (
    <section id="expertise" className="expertise">
      <div className="wrapper expertise__wrapper">
        <h2>WHAT I DO</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          quia architecto atque sequi nemo sit commodi sapiente cum illum,
          necessitatibus molestiae nihil maxime debitis nisi nulla corporis
          delectus in? Accusamus.
        </p>
        <div className="expertise__cards-wrapper">
          <div className="expertise__card">
            <a href="" className="button link">
              <FaTree />
            </a>
            <h3>Category</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              explicabo minima corrupti quia, repudiandae officia quos ullam.
            </p>
          </div>
          <div className="expertise__card">
            <a href="" className="button link">
              <FaTree />
            </a>
            <h3>Category</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              explicabo minima corrupti quia, repudiandae officia quos ullam.
            </p>
          </div>
          <div className="expertise__card">
            <a href="" className="button link">
              <FaTree />
            </a>
            <h3>Category</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              explicabo minima corrupti quia, repudiandae officia quos ullam.
            </p>
          </div>
          <div className="expertise__card">
            <a href="" className="button link">
              <FaTree />
            </a>
            <h3>Category</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              explicabo minima corrupti quia, repudiandae officia quos ullam.
            </p>
          </div>
        </div>
        <a href="" className="button link">
          Learn more
          <FaLongArrowAltRight />
        </a>
      </div>
    </section>
  );
};

export default Expertise;
