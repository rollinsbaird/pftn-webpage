import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";

const PairOptions = [
  { value: 1, label: "Nesha & Maggie" },
  { value: 2, label: "Mimi & Anna" },
  { value: 3, label: "Nesha & Maggie" },
  { value: 4, label: "Thom & Brenner" },
  { value: 5, label: "Jo, Clay, & Blake Swafford" },
  { value: 6, label: "Rollins & Blake Kelly" },
];

const WeekOptions = [
  { value: 1, label: "25 September" },
  { value: 2, label: "2 October" },
  { value: 3, label: "9 October" },
  { value: 4, label: "16 October" },
  { value: 5, label: "23 October" },
  { value: 6, label: "30 October" },
  { value: 7, label: "6 November" },
  { value: 8, label: "13 November" },
  { value: 9, label: "20 November" },
  { value: 10, label: "27 November" },
];

const Countries = [
  [
    "North Korea",
    "https://www.opendoors.org/en-US/persecution/countries/north-korea/",
  ],
  ["Somalia", "https://www.opendoors.org/en-US/persecution/countries/somalia/"],
  ["Yemen", "https://www.opendoors.org/en-US/persecution/countries/yemen/"],
  ["Eritrea", "https://www.opendoors.org/en-US/persecution/countries/eritrea/"],
  ["Libya", "https://www.opendoors.org/en-US/persecution/countries/libya/"],
  ["Nigeria", "https://www.opendoors.org/en-US/persecution/countries/nigeria/"],
  [
    "Pakistan",
    "https://www.opendoors.org/en-US/persecution/countries/pakistan/",
  ],
  ["Iran", "https://www.opendoors.org/en-US/persecution/countries/iran/"],
  [
    "Afghanistan",
    "https://www.opendoors.org/en-US/persecution/countries/afghanistan/",
  ],
  ["Sudan", "https://www.opendoors.org/en-US/persecution/countries/sudan/"],
];

function App() {
  const [count, setCount] = useState(0);
  const [pair, setPair] = useState("Nesha & Maggie");
  const [week, setWeek] = useState(1);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <DropdownMenu
          selectedOption={pair}
          setSelectedOption={setPair}
          Options={PairOptions}
        />
        <DropdownMenu
          selectedOption={week}
          setSelectedOption={setWeek}
          Options={WeekOptions}
        />
      </div>
      <div>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
