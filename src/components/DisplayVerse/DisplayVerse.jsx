import PropTypes from "prop-types";
import openings from "./openingSentences.json";
import closings from "./closingSentences.json";

function DisplayVerse({ isOpening }) {
  const rand = Math.floor(Math.random() * 9)
  return isOpening ? (
    <div>
      <p>{openings.sentences[rand].verse}</p>
      <p>{openings.sentences[rand].ref}</p>
    </div>
  ) : (
    <div>
      <p>{closings.sentences[rand % 3].verse}</p>
      <p>{closings.sentences[rand % 3].ref}</p>
    </div>
  );
}

DisplayVerse.propTypes = {
  isOpening: PropTypes.bool,
};

export default DisplayVerse;
