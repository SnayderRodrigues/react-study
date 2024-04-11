import React from "react";
// import "./expertisepage.scss";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";
import { BiCameraMovie } from "react-icons/bi";
import { MdOutlineCameraAlt } from "react-icons/md";
import { MdVideoCameraFront } from "react-icons/md";
import { MdVideoSettings } from "react-icons/md";

import { MdHomeWork } from "react-icons/md";
import { TbArrowGuide } from "react-icons/tb";
import { Md6K } from "react-icons/md";
import { BsBadge3DFill } from "react-icons/bs";
import Cta from "../../components/Cta";

const ExpertisePage = () => {
  return (
    <main>
      <section className="expertisePage-hero">
        <div className="wrapper expertisePage__wrapper">
          <h1>
            Expertise Page <br /> Example Text
          </h1>
        </div>
      </section>
      <section className="expertisePage-midpage">
        <div className="wrapper expertisePage-midpage__wrapper">
          <div className="expertisePage-midpage__image-wrapper">
            <img src={Cat} alt="" />
          </div>
          <div className="expertisePage-midpage__headline">
            <h2>Example text</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              perferendis ex quaerat mollitia iusto, nesciunt ratione quos
              quibusdam distinctio dolores dignissimos nobis.
            </p>
          </div>
          <div className="expertisePage-midpage__cards-wrapper">
            <div className="expertisePage-midpage__card">
              <span>
                <BiCameraMovie />
              </span>
              <h3>Videography</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                explicabo minima corrupti quia, repudiandae officia quos ullam.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
              <span>
                <MdOutlineCameraAlt />
              </span>
              <h3>Photography</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                explicabo minima corrupti quia, repudiandae officia quos ullam.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
              <span>
                <MdVideoCameraFront />
              </span>
              <h3>Content Creation</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                explicabo minima corrupti quia, repudiandae officia quos ullam.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
              <span>
                <MdVideoSettings />
              </span>
              <h3>Editing and Post-Production</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                explicabo minima corrupti quia, repudiandae officia quos ullam.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
              <span>
                <MdHomeWork />
              </span>
              <h3>Studio Rental</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                explicabo minima corrupti quia, repudiandae officia quos ullam.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
              <span>
                <TbArrowGuide />
              </span>
              <h3>Consultation and Creative Direction</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                explicabo minima corrupti quia, repudiandae officia quos ullam.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
              <span>
                <Md6K />
              </span>
              <h3>Realistic Immersion</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                explicabo minima corrupti quia, repudiandae officia quos ullam.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
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
        </div>
      </section>
      <section className="expertisePage-ending">
        <div className="wrapper expertisePage-ending__wrapper">
          <div className="expertisePage-ending__content">
            <div className="expertisePage-ending__image-wrapper">
              <img src={Cat} alt="" />
            </div>
            <div className="expertisePage-ending__text-wrapper">
              <h3>Example expertise text</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat consequatur, temporibus omnis itaque, sed quis
                consequuntur sequi maxime incidunt modi enim quae. Praesentium
                dolorum ducimus quae doloremque possimus, esse earum.
              </p>
            </div>
          </div>
          <div className="expertisePage-ending__content">
            <div className="expertisePage-ending__text-wrapper">
              <h3>Example expertise text</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat consequatur, temporibus omnis itaque, sed quis
                consequuntur sequi maxime incidunt modi enim quae. Praesentium
                dolorum ducimus quae doloremque possimus, esse earum.
              </p>
            </div>
            <div className="expertisePage-ending__image-wrapper">
              <img src={Cat} alt="" />
            </div>
          </div>
          <div className="expertisePage-ending__content">
            <div className="expertisePage-ending__image-wrapper">
              <img src={Cat} alt="" />
            </div>
            <div className="expertisePage-ending__text-wrapper">
              <h3>Example expertise text</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat consequatur, temporibus omnis itaque, sed quis
                consequuntur sequi maxime incidunt modi enim quae. Praesentium
                dolorum ducimus quae doloremque possimus, esse earum.
              </p>
            </div>
          </div>
          <div className="expertisePage-ending__content">
            <div className="expertisePage-ending__text-wrapper">
              <h3>Example expertise text</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat consequatur, temporibus omnis itaque, sed quis
                consequuntur sequi maxime incidunt modi enim quae. Praesentium
                dolorum ducimus quae doloremque possimus, esse earum.
              </p>
            </div>
            <div className="expertisePage-ending__image-wrapper">
              <img src={Cat} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </main>
  );
};

export default ExpertisePage;
