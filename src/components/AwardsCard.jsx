import React from "react";
import PropTypes from "prop-types";

const AwardsCard = (props) => {
  return (
    <div className="awardsModal__card">
      <span className="awardsModal__card-year">{props.year}</span>
      <span className="awardsModal__card-title">{props.title}</span>
      <span className="awardsModal__card-name">{props.name}</span>
      <span className="awardsModal__card-association">{props.association}</span>
    </div>
  );
};

AwardsCard.propTypes = {
  year: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  association: PropTypes.string,
};

export default AwardsCard;
