import PropTypes from 'prop-types';

function ShowWeek({week, weekOptions}) {
  return <p style={{ fontSize: 12, color: "gray" }}>
    Week of {weekOptions[week].label}
  </p>;
}

ShowWeek.propTypes = {
  week: PropTypes.number,
  weekOptions: PropTypes.any,
};

export default ShowWeek;
