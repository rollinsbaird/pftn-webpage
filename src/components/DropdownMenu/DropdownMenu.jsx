// import { Select } from "@material-ui/core";
import Select from "react-select";
import React from "react";

// const options = [
//   { value: "apple", label: "Apple" },
//   { value: "orange", label: "Orange" },
//   { value: "grape", label: "Grape" },
// ];

// const Options = [
//   { value: 1, label: "Nesha & Maggie" },
//   { value: 2, label: "Mimi & Anna" },
//   { value: 3, label: "Nesha & Maggie" },
//   { value: 4, label: "Thom & Brenner" },
//   { value: 5, label: "Jo, Clay, & Blake Swafford" },
//   { value: 6, label: "Rollins & Blake Kelly" },
// ];

function DropdownMenu({Options, selectedOption, setSelectedOption}) {
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

      <p>
        Selected value:
        <br />
        {selectedOption}
      </p>
    </form>
  );
}

export default DropdownMenu;
