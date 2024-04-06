import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";

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
              <FaMountainSun />
            </span>
            <h3>Category</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              explicabo minima corrupti quia, repudiandae officia quos ullam.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <FaMountainSun />
            </span>
            <h3>Category</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              explicabo minima corrupti quia, repudiandae officia quos ullam.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <FaMountainSun />
            </span>
            <h3>Category</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              explicabo minima corrupti quia, repudiandae officia quos ullam.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <FaMountainSun />
            </span>
            <h3>Category</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              explicabo minima corrupti quia, repudiandae officia quos ullam.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <FaMountainSun />
            </span>
            <h3>Category</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              explicabo minima corrupti quia, repudiandae officia quos ullam.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <FaMountainSun />
            </span>
            <h3>Category</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              explicabo minima corrupti quia, repudiandae officia quos ullam.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <FaMountainSun />
            </span>
            <h3>Category</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              explicabo minima corrupti quia, repudiandae officia quos ullam.
            </p>
          </div>
          <div className="expertise__card">
            <span>
              <FaMountainSun />
            </span>
            <h3>Category</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              explicabo minima corrupti quia, repudiandae officia quos ullam.
            </p>
          </div>
        </div>
        <Link to="expertise" className="button link">
          Learn more
          <FaLongArrowAltRight />
        </Link>
      </div>
    </section>
  );
};

export default Expertise;
