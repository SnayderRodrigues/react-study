import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Awards = () => {

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
              While our focus is on client success,
            </span>{" "}
          </h2>
          <h2 className="awards__title">
            <span>
              we’re proud to have our work
            </span>{" "}
          </h2>
          <h2 className="awards__title">
            <span>
              continually <span className="highlight">recognised</span> by the
              best of
            </span>{" "}
          </h2>
          <h2 className="awards__title">
            <span>the best.</span>
          </h2>
        </div>
        <div className="awards__content">
          <div className="awards__card">
            <h3>Award Name Example</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              amet earum dolor non, libero corrupti, quidem nulla excepturi est
              ratione nisi quibusdam dicta fuga, nostrum sapiente in harum sit
              fugiat!
            </p>
          </div>
          <div className="awards__card">
            <h3>Award Name Example</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              amet earum dolor non, libero corrupti, quidem nulla excepturi est
              ratione nisi quibusdam dicta fuga, nostrum sapiente in harum sit
              fugiat!
            </p>
          </div>
          <div className="awards__card">
            <h3>Award Name Example</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              amet earum dolor non, libero corrupti, quidem nulla excepturi est
              ratione nisi quibusdam dicta fuga, nostrum sapiente in harum sit
              fugiat!
            </p>
          </div>
          <div className="awards__card">
            <h3>Award Name Example</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              amet earum dolor non, libero corrupti, quidem nulla excepturi est
              ratione nisi quibusdam dicta fuga, nostrum sapiente in harum sit
              fugiat!
            </p>
          </div>
        </div>
        <Link to="about" className="button link">
          See all awards <FaLongArrowAltRight />
        </Link>
      </div>
    </section>
  );
};

export default Awards;
