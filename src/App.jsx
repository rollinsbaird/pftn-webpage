import { useEffect, useState } from "react";
import "./App.css";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import CountrySection from "./components/CountrySection/CountrySection";
import calcWeek from "./assets/calcWeek";
import PGSection from "./components/PGSection/PGSection";
import DisplayVerse from "./components/DisplayVerse/DisplayVerse";
import FriendsMenu from "./components/FriendsMenu/FriendsMenu";
import { useCookies } from "react-cookie";
import ShowWeek from "./components/ShowWeek/ShowWeek";

const PairOptions = [
  { value: 1, label: "Nesha & Maggie" },
  { value: 2, label: "Riley Howerzyl & Madison" },
  { value: 3, label: "Riley Busch & Mimi" },
  { value: 4, label: "Courtney & McKenzie" },
  { value: 5, label: "Thom & Carly" },
  { value: 6, label: "Brenner & Silas" },
  { value: 7, label: "Blake & Geoff" },
  { value: 8, label: "Rollins & Jo" },
];

const WeekOptions = [
  { value: 1, label: "17 January" },
  { value: 2, label: "24 January" },
  { value: 3, label: "31 January" },
  { value: 4, label: "7 Febuary" },
  { value: 5, label: "14 Febuary" },
  { value: 6, label: "21 Febuary" },
  { value: 7, label: "28 Febuary" },
  { value: 8, label: "6 March" },
  { value: 9, label: "13 March" },
  { value: 10, label: "20 March" },
  { value: 11, label: "27 March" },
  { value: 12, label: "3 April" },
  { value: 13, label: "10 April" },
  { value: 14, label: "17 April" },
];

const Countries = [
  [
    "North Korea",
    "https://www.opendoors.org/en-US/persecution/countries/north-korea/",
  ],
  ["Somalia", "https://www.opendoors.org/en-US/persecution/countries/somalia/"],
  ["Libya", "https://www.opendoors.org/en-US/persecution/countries/libya/"],
  ["Eritrea", "https://www.opendoors.org/en-US/persecution/countries/eritrea/"],
  ["Yemen", "https://www.opendoors.org/en-US/persecution/countries/yemen/"],
  ["Nigeria", "https://www.opendoors.org/en-US/persecution/countries/nigeria/"],
  [
    "Pakistan",
    "https://www.opendoors.org/en-US/persecution/countries/pakistan/",
  ],
  ["Sudan", "https://www.opendoors.org/en-US/persecution/countries/sudan/"],
  ["Iran", "https://www.opendoors.org/en-US/persecution/countries/iran/"],
  [
    "Afghanistan",
    "https://www.opendoors.org/en-US/persecution/countries/afghanistan/",
  ],
  ["India", "https://www.opendoors.org/en-US/persecution/countries/india/"],
  ["Syria", "https://www.opendoors.org/en-US/persecution/countries/syria/"],
  [
    "Saudi Arabia",
    "https://www.opendoors.org/en-US/persecution/countries/saudi-arabia/",
  ],
  ["Mali", "https://www.opendoors.org/en-US/persecution/countries/mali/"],
];

function App() {
  const [cookies, setCookie] = useCookies(["pair"]);
  const [pair, setPair] = useState(cookies.pair);
  const [week, setWeek] = useState(4);

  useEffect(() => {
    setCookie("pair", pair);
  }, [pair, setCookie]);

  return (
    <div className="content-wrapper">
      <h1>Multiply PFTN 🕊️</h1>
      <div>
        <DropdownMenu
          selectedOption={pair}
          setSelectedOption={setPair}
          Options={PairOptions}
        />
        <ShowWeek week={week - 1} weekOptions={WeekOptions} />
      </div>
      <div>
        <h2>Worship</h2>
        <DisplayVerse isOpening={true} />
        <h3>PSALM 126</h3>
        <p style={{ textAlign: "left" }}>
          When the Lord overturned the captivity of Zion,
          <br />
          then were we like those who dream.
          <br />
          Then was our mouth filled with laughter
          <br />
          and our tongue with shouts of joy. Then they said among the nations,
          <br />
          &quot;The Lord has done great things for them.&quot;
          <br />
          Indeed, the Lord has done great things for us already,
          <br />
          whereof we rejoice.
          <br />
          Overturn our captivity, O Lord,
          <br />
          as when streams refresh the deserts of the south.
          <br />
          Those who sow in tears
          <br />
          shall reap with songs of joy.
          <br />
          He who goes on his way weeping and bears good seed
          <br />
          shall doubtless come again with joy, and bring his sheaves with him.
        </p>
      </div>
      <div>
        <h2>World</h2>
        <PGSection pair={Number(pair)} week={week} />
        <CountrySection
          Name={Countries[week - 1][0]}
          Link={Countries[week - 1][1]}
        />
        <details>
          <summary>Adittional Prayer Resources</summary>
          <>
            <a href="https://globe.stratus.earth/globe-explorer/">
              Stratus Index
            </a>
            <br />
            <a href="https://operationworld.org/">Operation World Prayer</a>
            <br />
            <a href="https://prayercast.com/">Prayercast</a>
            <br />
            <a href="https://radical.net/podcasts/pray-the-word/">
              Pray The Word Podcasts Archive - Radical
            </a>
          </>
        </details>
        <FriendsMenu pair={Number(pair)} />
        <h2>Witness</h2>
        <h3>Lift up those who don&apos;t yet know Jesus.</h3>
        <p>
          Father, we ask that you would fill us with hospitality and love.
          Please give us genuine friendships with international students and
          help us to welcome them well. Would you give us opportunities to
          proclaim the good news about Jesus to international students and give
          those students faith to trust you. Help us to inconvenience ourselves
          to display your love to international students just as your Son gave
          up everything to serve us. <strong>Amen.</strong>
        </p>
        <DisplayVerse isOpening={false} />
      </div>
      <p className="read-the-docs">Made by Rollins with 💙</p>
    </div>
  );
}

export default App;
