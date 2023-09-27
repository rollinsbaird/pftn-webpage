// import React from "react";

function PGSection({ pg1, pg2 }) {
  return (
    <h3>
      This week, please pray for the <a href={pg1.link}>{pg1.name}</a> people
      and the <a href={pg2.link}>{pg2.name}</a>.
    </h3>
  );
}

export default PGSection;
