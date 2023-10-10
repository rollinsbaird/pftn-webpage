import PropTypes from 'prop-types';

function DropdownMenu({ Options, selectedOption, setSelectedOption }) {
  return (
    <form>
      <fieldset>
        <legend>Who are you?</legend>
        <select
          value={selectedOption}
          onChange={(event) => {
            setSelectedOption(event.target.value);
            // handleCookie();
          }}>
          {Options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </fieldset>
    </form>
  );
}

DropdownMenu.propTypes = {
  Options: PropTypes.array,
  selectedOption: PropTypes.any,
  setSelectedOption: PropTypes.func
};

export default DropdownMenu;
