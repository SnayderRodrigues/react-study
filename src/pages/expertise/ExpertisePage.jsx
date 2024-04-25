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

const ExpertisePage = () => {
  return (
    <main id="expertisepage">
      <section className="expertisePage-hero">
        <div className="wrapper expertisePage-hero__wrapper">
          <h1>
            Unique Approach. <br />
            Crafting Visual Excellence.
          </h1>
        </div>
      </section>
      <section className="expertisePage-midpage">
        <div className="wrapper expertisePage-midpage__wrapper">
          <div className="expertisePage-midpage__image-wrapper">
            <img src={Cat} alt="" />
          </div>
          <div className="expertisePage-midpage__headline">
            <h2>Expertise that empowers.</h2>
            <p>
              We pride ourselves on our extensive expertise in photography and
              videography, honed through years of dedication and a relentless
              pursuit of excellence.
            </p>
            <p>
              With a diverse team of professionals skilled in various techniques
              and styles, we offer a comprehensive range of services to meet the
              unique needs of each project.
            </p>
          </div>
          <div className="expertisePage-midpage__cards-wrapper">
            <div className="expertisePage-midpage__card">
              <span>
                <BiCameraMovie />
              </span>
              <h3>Videography</h3>
              <p>
                Ignite your visual storytelling with our excellent visual
                productions for commercials, music videos, products and many
                more.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
              <span>
                <MdOutlineCameraAlt />
              </span>
              <h3>Photography</h3>
              <p>
                From meticulously composed portraits to dynamic product shots,
                we tailor each session to your unique vision.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
              <span>
                <MdVideoCameraFront />
              </span>
              <h3>Content Creation</h3>
              <p>
                Transforming ideas into captivating visuals, we offer a
                comprehensive approach to bringing your vision to life.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
              <span>
                <MdVideoSettings />
              </span>
              <h3>Editing & Post-Production</h3>
              <p>
                With meticulous attention to detail, we work tirelessly to
                refine your content, ensuring every frame is optimized for
                maximum impact.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
              <span>
                <MdHomeWork />
              </span>
              <h3>Studio Rental</h3>
              <p>
                A flexible and professional environment, meticulously designed
                to accommodate a wide range of projects and productions.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
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
            <div className="expertisePage-midpage__card">
              <span>
                <Md6K />
              </span>
              <h3>Realistic Immersion</h3>
              <p>
                Production environment with equipment capable of craft visual
                narratives that blur the line between fantasy and reality.
              </p>
            </div>
            <div className="expertisePage-midpage__card">
              <span>
                <BsBadge3DFill />
              </span>
              <h3>3D Projects</h3>
              <p>
                Using the latest software and techniques, we transform ideas
                into immersive 3D environments.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="expertisePage-ending">
        <div className="wrapper-medium expertisePage-ending__wrapper">
          <div className="expertisePage-ending__content">
            <div className="expertisePage-ending__image-wrapper">
              <img src={Cat} alt="" />
            </div>
            <div className="expertisePage-ending__text-wrapper">
              <h3>Build your brand and increase engagement</h3>
              <p>
                We craft captivating visuals specifically designed to elevate
                your brand image and spark engagement with your audience. We
                ensure that we balance brand communications with tactical
                functionality at all stages of your audience's journey.
              </p>
            </div>
          </div>
          <div className="expertisePage-ending__content">
            <div className="expertisePage-ending__text-wrapper">
              <h3>Creative storytelling</h3>
              <p>
                Translate your brand's essence into compelling visual
                experiences and bring your narrative to life in a way that
                captivates and engages your audience. We ensure that each
                element is meticulously designed to resonate with your audience,
                crafting stories that evoke emotions and create lasting
                impressions to make your brand unforgettable.
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
              <h3>From startups to enterprise</h3>
              <p>
                Whether you're a burgeoning brand or a seasoned leader, we
                tailor our expertise to meet your needs. We understand the
                unique challenges faced at each stage, and our creative
                solutions empower you to stand out in a crowded marketplace.
              </p>
            </div>
          </div>
          <div className="expertisePage-ending__content">
            <div className="expertisePage-ending__text-wrapper">
              <h3>Crafted with your vision in mind</h3>
              <p>
                We believe every brand deserves a unique visual story. Our
                collaborative approach ensures your vision takes center stage,
                with every element meticulously crafted to bring your message to
                life in an authentic and impactful way.
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
              <h3>Build clarity, drive impact</h3>
              <p>
                We go beyond aesthetics to create visuals that connect with your
                audience on a deeper level. Our storytelling approach is
                intuitive, accessible, and aligned with your organisational
                objectives, helping you define your brand voice, build clarity
                around your message, and ultimately drive the impact you desire.
              </p>
            </div>
          </div>
          <div className="expertisePage-ending__content">
            <div className="expertisePage-ending__text-wrapper">
              <h3>Drive conversions through better digital</h3>
              <p>
                In today's digital landscape, captivating visuals are essential
                for driving conversions. We craft video and photo content
                specifically designed to engage your audience, generate leads,
                and propel your brand towards its full potential.
              </p>
            </div>
            <div className="expertisePage-ending__image-wrapper">
              <img src={Cat} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExpertisePage;
