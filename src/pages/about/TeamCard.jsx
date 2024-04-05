import React from 'react'
import PropTypes from 'prop-types';

const TeamCard = (props) => {
  return (
    <div className="aboutPageTeam__card">
      <div>
        <span>{props.name}</span>
        <span>{props.office}</span>
      </div>
    </div>
  );
}

TeamCard.propTypes = {
  name: PropTypes.string,
  office: PropTypes.string,
}

export default TeamCard