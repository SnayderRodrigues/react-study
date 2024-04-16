import { MdClose } from "react-icons/md";

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
          <div className="awardsModal__card">
            <span className="awardsModal__card-year">2023</span>
            <span className="awardsModal__card-title">Featured Work</span>
            <span className="awardsModal__card-name">Award Name</span>
            <span className="awardsModal__card-association">Award Association</span>
          </div>
          <div className="awardsModal__card">
            <span className="awardsModal__card-year"></span>
            <span className="awardsModal__card-title">Featured Work</span>
            <span className="awardsModal__card-name">Award Name</span>
            <span className="awardsModal__card-association">Award Association</span>
          </div>
          <div className="awardsModal__card">
            <span className="awardsModal__card-year"></span>
            <span className="awardsModal__card-title">Featured Work</span>
            <span className="awardsModal__card-name">Award Name</span>
            <span className="awardsModal__card-association">Award Association</span>
          </div>
          <div className="awardsModal__card">
            <span className="awardsModal__card-year"></span>
            <span className="awardsModal__card-title">Featured Work</span>
            <span className="awardsModal__card-name">Award Name</span>
            <span className="awardsModal__card-association">Award Association</span>
          </div>
          <div className="awardsModal__card">
            <span className="awardsModal__card-year">2022</span>
            <span className="awardsModal__card-title">Featured Work</span>
            <span className="awardsModal__card-name">Award Name</span>
            <span className="awardsModal__card-association">Award Association</span>
          </div>
          <div className="awardsModal__card">
            <span className="awardsModal__card-year"></span>
            <span className="awardsModal__card-title">Featured Work</span>
            <span className="awardsModal__card-name">Award Name</span>
            <span className="awardsModal__card-association">Award Association</span>
          </div>
          <div className="awardsModal__card">
            <span className="awardsModal__card-year"></span>
            <span className="awardsModal__card-title">Featured Work</span>
            <span className="awardsModal__card-name">Award Name</span>
            <span className="awardsModal__card-association">Award Association</span>
          </div>
          <div className="awardsModal__card">
            <span className="awardsModal__card-year"></span>
            <span className="awardsModal__card-title">Featured Work</span>
            <span className="awardsModal__card-name">Award Name</span>
            <span className="awardsModal__card-association">Award Association</span>
          </div>
          <div className="awardsModal__card">
            <span className="awardsModal__card-year">2021</span>
            <span className="awardsModal__card-title">Featured Work</span>
            <span className="awardsModal__card-name">Award Name</span>
            <span className="awardsModal__card-association">Award Association</span>
          </div>
          <div className="awardsModal__card">
            <span className="awardsModal__card-year"></span>
            <span className="awardsModal__card-title">Featured Work</span>
            <span className="awardsModal__card-name">Award Name</span>
            <span className="awardsModal__card-association">Award Association</span>
          </div>
          <div className="awardsModal__card">
            <span className="awardsModal__card-year"></span>
            <span className="awardsModal__card-title">Featured Work</span>
            <span className="awardsModal__card-name">Award Name</span>
            <span className="awardsModal__card-association">Award Association</span>
          </div>
          <div className="awardsModal__card">
            <span className="awardsModal__card-year"></span>
            <span className="awardsModal__card-title">Featured Work</span>
            <span className="awardsModal__card-name">Award Name</span>
            <span className="awardsModal__card-association">Award Association</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsModal;
