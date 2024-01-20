// import React from 'react';
import PropTypes from 'prop-types';


function CountrySection({ Name, Link }) {
  return (
    <h3>
      Please pray for <a href={Link} target="_blank" rel="noopener noreferrer">{Name}</a> this week.
    </h3>
  );
}

CountrySection.propTypes = {
  Name: PropTypes.string,
  Link: PropTypes.string
};

export default CountrySection;
