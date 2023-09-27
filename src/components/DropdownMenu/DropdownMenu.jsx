function DropdownMenu({ Options, selectedOption, setSelectedOption }) {
  return (
    <form>
      <fieldset>
        <legend>Who are you?</legend>
        <select
          value={selectedOption}
          onChange={(event) => {
            setSelectedOption(event.target.value);
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

export default DropdownMenu;
