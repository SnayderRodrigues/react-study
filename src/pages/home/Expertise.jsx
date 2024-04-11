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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          quia architecto atque sequi nemo sit commodi sapiente cum illum,
          necessitatibus molestiae nihil maxime debitis nisi nulla corporis
          delectus in? Accusamus.
        </p>
        <div className="expertise__cards-wrapper">
          <div className="expertise__card">
            <span>
              <BiCameraMovie />
            </span>
            <h3>Videography</h3>
            <p>
              Excellent visual productions for commercials, music videos,
              product demonstrations and many more.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <MdOutlineCameraAlt />
            </span>
            <h3>Photography</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              explicabo minima corrupti quia, repudiandae officia quos ullam.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <MdVideoCameraFront />
            </span>
            <h3>Content Creation</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              explicabo minima corrupti quia, repudiandae officia quos ullam.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <MdVideoSettings />
            </span>
            <h3>Editing and Post-Production</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              explicabo minima corrupti quia, repudiandae officia quos ullam.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <MdHomeWork />
            </span>
            <h3>Studio Rental</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              explicabo minima corrupti quia, repudiandae officia quos ullam.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <TbArrowGuide />
            </span>
            <h3>Consultation and Creative Direction</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              explicabo minima corrupti quia, repudiandae officia quos ullam.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <Md6K />
            </span>
            <h3>Realistic Immersion</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              explicabo minima corrupti quia, repudiandae officia quos ullam.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <BsBadge3DFill />
            </span>
            <h3>3D Projects</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              explicabo minima corrupti quia, repudiandae officia quos ullam.
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
