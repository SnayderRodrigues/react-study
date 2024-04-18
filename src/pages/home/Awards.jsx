import { useState } from "react";
// import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import AwardsModal from "../../components/AwardsModal";

const Awards = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
    document.body.classList.add("scroll-lock");
  };

  return (
    <section id="awards" className="awards">
      <div className="awards__carousel-container">
        <div className="awards__span-container-1">
          <span>•AWARDS•</span>
          <span className="highlight">•AWARDS•</span>
          <span>•AWARDS•</span>
          <span className="highlight">•AWARDS•</span>
        </div>
        <div className="awards__span-container-2">
          <span>•AWARDS•</span>
          <span className="highlight">•AWARDS•</span>
          <span>•AWARDS•</span>
          <span className="highlight">•AWARDS•</span>
        </div>
      </div>
      <div className="wrapper awards__wrapper">
        <div className="awards__title-wrapper">
          <h2 className="awards__title">
            <span>
              While our focus is on client success, we’re proud to have our work
              continually <span className="highlight">recognised</span> with the
              best awards in the category.
            </span>
          </h2>
        </div>
        <div className="awards__content">
          <div className="awards__card">
            <h3>The Luminescence Award (2023)</h3>
            <p>
              Awarded by the International Visual Arts Awards (IVAA),
              recognizing our studio's "exceptional use of light and shadow to
              evoke emotion and tell a story" for a videography project made for
              Uber&copy;.
            </p>
          </div>
          <div className="awards__card">
            <h3>Videography Of The Year (2023)</h3>
            <p>
              Presented by the National Association of Content Creators (NACC)
              for our "ability to capture the viewer's attention and create a
              lasting impact" with our visual production storytelling.
            </p>
          </div>
          <div className="awards__card">
            <h3>Visual Content Creation Of The Year (2022)</h3>
            <p>
              Awarded by the International Visual Arts Awards (IVAA) in
              recognition of our "excellence in visual content production,
              transforming visual footage into captivating narratives."
            </p>
          </div>
          <div className="awards__card">
            <h3>The Muse Award (2021)</h3>
            <p>
              Bestowed by the Society of Photographic Artists (SPA) for our
              studio's "unique artistic vision and creative approach" in
              crafting visually stunning and thought-provoking content.
            </p>
          </div>
        </div>
        <button className="button link" onClick={handleClick}>
          See all awards <AiOutlinePlus />
        </button>
        {openModal && <AwardsModal closeModal={setOpenModal} />}
      </div>
    </section>
  );
};

export default Awards;
