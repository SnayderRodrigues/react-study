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
            title="Featured Work"
            name="Award Name"
            association="Award Association"
          />
          <AwardsCard
            year=""
            title="Featured Work"
            name="Award Name"
            association="Award Association"
          />
          <AwardsCard
            year=""
            title="Featured Work"
            name="Award Name"
            association="Award Association"
          />
          <AwardsCard
            year=""
            title="Featured Work"
            name="Award Name"
            association="Award Association"
          />
          <AwardsCard
            year="2022"
            title="Featured Work"
            name="Award Name"
            association="Award Association"
          />
          <AwardsCard
            year=""
            title="Featured Work"
            name="Award Name"
            association="Award Association"
          />
          <AwardsCard
            year=""
            title="Featured Work"
            name="Award Name"
            association="Award Association"
          />
          <AwardsCard
            year="2021"
            title="Featured Work"
            name="Award Name"
            association="Award Association"
          />
          <AwardsCard
            year=""
            title="Featured Work"
            name="Award Name"
            association="Award Association"
          />
          <AwardsCard
            year="2020"
            title="Featured Work"
            name="Award Name"
            association="Award Association"
          />
          <AwardsCard
            year=""
            title="Featured Work"
            name="Award Name"
            association="Award Association"
          />
          <AwardsCard
            year="2019"
            title="Featured Work"
            name="Award Name"
            association="Award Association"
          />
        </div>
      </div>
    </div>
  );
};

export default AwardsModal;
