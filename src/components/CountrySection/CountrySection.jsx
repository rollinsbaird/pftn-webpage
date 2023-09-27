// import React from 'react';

function CountrySection({ Name, Link }) {
  return (
    <h3>
      Please pray for <a href={Link}>{Name}</a> this week.
    </h3>
  );
}

export default CountrySection;
