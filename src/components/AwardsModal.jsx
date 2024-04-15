import { MdClose } from "react-icons/md";

const AwardsModal = ({closeModal}) => {

    

    return (
    <div className="awardsModal">
      <div className="awardsModal__backdrop"></div>
      <div className="wrapper awardsModal__wrapper">
        <div className="wrapper awardsModal__body">
          <button className="awardsModal__closeButton button" onClick={() => closeModal(false)}>
            <MdClose />
          </button>
          <div className="awardsModal__title">
            <span>Recognition</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae
            delectus fuga! Officia enim veritatis autem odio voluptatem
            obcaecati accusamus suscipit recusandae, totam excepturi quaerat
            libero natus maiores perferendis? Ipsam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae
            delectus fuga! Officia enim veritatis autem odio voluptatem
            obcaecati accusamus suscipit recusandae, totam excepturi quaerat
            libero natus maiores perferendis? Ipsam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae
            delectus fuga! Officia enim veritatis autem odio voluptatem
            obcaecati accusamus suscipit recusandae, totam excepturi quaerat
            libero natus maiores perferendis? Ipsam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae
            delectus fuga! Officia enim veritatis autem odio voluptatem
            obcaecati accusamus suscipit recusandae, totam excepturi quaerat
            libero natus maiores perferendis? Ipsam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae
            delectus fuga! Officia enim veritatis autem odio voluptatem
            obcaecati accusamus suscipit recusandae, totam excepturi quaerat
            libero natus maiores perferendis? Ipsam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae
            delectus fuga! Officia enim veritatis autem odio voluptatem
            obcaecati accusamus suscipit recusandae, totam excepturi quaerat
            libero natus maiores perferendis? Ipsam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AwardsModal;
