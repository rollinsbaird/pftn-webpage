// import React from "react";
import PropTypes from 'prop-types';


function PGSection({ pg1, pg2 }) {
  return (
    <h3>
      This week, please pray for the <a href={pg1.link} target="_blank" rel="noopener noreferrer">{pg1.name}</a> people
      and the <a href={pg2.link} target="_blank" rel="noopener noreferrer">{pg2.name}</a>.
    </h3>
  );
}

PGSection.propTypes = {
  pg1: PropTypes.string,
  pg2: PropTypes.string
};

export default PGSection;
