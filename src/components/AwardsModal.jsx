import { MdClose } from "react-icons/md";
import AwardsCard from "./AwardsCard";

const AwardsModal = ({ closeModal }) => {
  return (
    <div className="awardsModal" data-lenis-prevent>
      <div
        className="awardsModal__backdrop"
        onClick={() => {
          closeModal(false);
          document.body.classList.remove("scroll-lock");
        }}
      ></div>
      <div className="wrapper awardsModal__wrapper">
        <div className="wrapper awardsModal__body">
          <button
            className="awardsModal__closeButton button"
            onClick={() => {
              closeModal(false);
              document.body.classList.remove("scroll-lock");
            }}
          >
            <MdClose />
          </button>
          <div className="awardsModal__title">
            <span>Recognition</span>
          </div>
          <AwardsCard
            year="2023"
            title="Videography for Uber&copy;"
            name="The Luminescence Award"
            association="International Visual Arts Awards"
          />
          <AwardsCard
            class="opacity-0"
            year="2023"
            title="Videography for Uber&copy;"
            name="Videography Of The Year"
            association="National Association of Content Creators (NACC)"
          />
          <AwardsCard
            class="opacity-0"
            year="2023"
            title="Videography for Hootsuite&copy;"
            name="The Echo Award"
            association="International Content Marketing Association"
          />
          <AwardsCard
            class="opacity-0"
            year="2023"
            title="Videography for WalkMe&copy;"
            name="Visual Content Creation Of The Month"
            association="International Visual Arts Awards"
          />
          <AwardsCard
            year="2022"
            title="Videography for Hootsuite&copy;"
            name="Visual Content Creation Of The Year"
            association="International Visual Arts Awards"
          />
          <AwardsCard
            class="opacity-0"
            year="2022"
            title="Photography for University of Essex"
            name="The Iris Award"
            association="Society of Photographic Artists (SPA)"
          />
          <AwardsCard
            class="opacity-0"
            year="2022"
            title="Videography for WalkMe&copy;"
            name="The Phoenix Award"
            association="Association of Post-Production Professionals"
          />
          <AwardsCard
            year="2021"
            title="Photography for University of Essex"
            name="The Muse Award"
            association="Society of Photographic Artists (SPA)"
          />
          <AwardsCard
            year="2021"
            class="opacity-0"
            title="Videography for Paypal&copy;"
            name="Visual Content Creation Of The Month"
            association="International Visual Arts Awards"
          />
          <AwardsCard
            year="2020"
            title="Videography for Coursera&copy;"
            name="The Phoenix Award"
            association="Association of Post-Production Professionals"
          />
          <AwardsCard
            year="2020"
            class="opacity-0"
            title="Videography for Elo&copy;"
            name="Visual Content Creation Of The Month"
            association="International Visual Arts Awards"
          />
          <AwardsCard
            year="2019"
            title="Videography for Hootsuite&copy;"
            name="Best New Visual Production Award"
            association="Association of Audiovisual Creators"
          />
        </div>
      </div>
    </div>
  );
};

export default AwardsModal;
