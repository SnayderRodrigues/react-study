import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";

import { BiCameraMovie } from "react-icons/bi";
import { MdOutlineCameraAlt } from "react-icons/md";
import { MdVideoCameraFront } from "react-icons/md";
import { MdVideoSettings } from "react-icons/md";

import { MdHomeWork } from "react-icons/md";
import { TbArrowGuide } from "react-icons/tb";
import { Md6K } from "react-icons/md";
import { BsBadge3DFill } from "react-icons/bs";

const Expertise = () => {
  return (
    <section id="expertise" className="expertise">
      <div className="wrapper expertise__wrapper">
        <h2>OUR EXPERTISE</h2>
        <p>
          We pride ourselves on our extensive expertise in photography and
          videography, honed through years of dedication and a relentless
          pursuit of excellence.
        </p>
        <div className="expertise__cards-wrapper">
          <div className="expertise__card">
            <span>
              <BiCameraMovie />
            </span>
            <h3>Videography</h3>
            <p>
              Ignite your visual storytelling with our excellent visual
              productions for commercials, music videos, products and many more.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <MdOutlineCameraAlt />
            </span>
            <h3>Photography</h3>
            <p>
              From meticulously composed portraits to dynamic product shots, we
              tailor each session to your unique vision.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <MdVideoCameraFront />
            </span>
            <h3>Content Creation</h3>
            <p>
              Transforming ideas into captivating visuals, we offer a
              comprehensive approach to bringing your vision to life.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <MdVideoSettings />
            </span>
            <h3>Editing & Post-Production</h3>
            <p>
              With meticulous attention to detail, we work tirelessly to refine
              your content, ensuring every frame is optimized for maximum
              impact.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <MdHomeWork />
            </span>
            <h3>Studio Rental</h3>
            <p>
              A flexible and professional environment, meticulously designed to
              accommodate a wide range of projects and productions.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <TbArrowGuide />
            </span>
            <h3>Creative Direction</h3>
            <p>
              Our team of experts is dedicated to understanding your goals,
              refining your ideas, and guiding you through every step of the
              creative process.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <Md6K />
            </span>
            <h3>Realistic Immersion</h3>
            <p>
              Production environment with equipment capable of craft visual
              narratives that blur the line between fantasy and reality.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <BsBadge3DFill />
            </span>
            <h3>3D Projects</h3>
            <p>
              Using the latest software and techniques, we transform ideas into
              immersive 3D environments.
            </p>
          </div>
        </div>
        <Link to="expertise" className="button link">
          Learn more
          <IoMdArrowForward />
        </Link>
      </div>
    </section>
  );
};

export default Expertise;
