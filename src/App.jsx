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
  { value: 2, label: "Riley & Anna" },
  { value: 3, label: "Mimi & McKenzie" },
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

const PGNames = [
  [
    "Adi Dravida",
    "Arab, Moroccan",
    "Arab, Sudanese",
    "Azerbaijani, Azeri Turk",
    "Bengali Muslim Shaikh",
    "Dhobi (Hindu traditions)",
    "Han Chinese, Xiang",
    "Japanese",
    "Java Mancanegari",
    "Kashmiri (Muslim traditions)",
    "Koli of Gujarat",
    "Kurmi (Hindu traditions)",
    "Mahishya",
    "Mali (Hindu traditions)",
    "Oromo, Hararghe",
    "Rajput (Hindu traditions)",
    "Shaikh Siddiqi",
    "Sunda",
    "Thai, Isan",
    "Uzbek, Northern",
  ],
  [
    "Afghan, Tajik",
    "Arab, North Iraqi",
    "Arab, Tunisian",
    "Badhai (Hindu traditions)",
    "Bhil unspecified",
    "Dusadh (Hindu traditions)",
    "Hausa",
    "Jat (Hindu traditions)",
    "Java Pesisir Lor",
    "Kayastha (Hindu traditions)",
    "Korean",
    "Lohar (Hindu traditions)",
    "Mahratta Kunbi",
    "Mappila",
    "Pashtun",
    "Sayyid",
    "Shaikh unspecified",
    "Sylhet (Muslim traditions)",
    "Thai, Northern",
    "Vakkaliga unspecified",
  ],
  [
    "Algerian, Arabic-speaking",
    "Arab, Northern Yemeni",
    "Arab, Yemeni",
    "Bambara",
    "Brahmin unspecified",
    "Fulani, Nigerian",
    "Hausa",
    "Jat (Muslim traditions)",
    "Kahar (Hindu traditions)",
    "Kazakh",
    "Kumhar (Hindu traditions)",
    "Madiga (Hindu traditions)",
    "Mahratta unspecified",
    "Minangkabau",
    "Pashtun, Pathan",
    "Sayyid",
    "Somali",
    "Tajik",
    "Tujia",
    "Vanniyan",
  ],
  [
    "Ansari",
    "Arab, Saudi - Hijazi",
    "Arain (Muslim traditions)",
    "Bania unspecified",
    "Burmese",
    "Gond unspecified",
    "Hui",
    "Jat (Sikh traditions)",
    "Kanuri, Yerwa",
    "Khmer",
    "Kunbi (Hindu traditions)",
    "Madura",
    "Mala (Hindu traditions)",
    "Nai (Hindu traditions)",
    "Pashtun, Southern",
    "Shaikh",
    "Somali",
    "Teli (Hindu traditions)",
    "Turk",
    "Viswakarma unspecified",
  ],
  [
    "Arab, Iraqi",
    "Arab, Saudi - Najdi",
    "Azerbaijani",
    "Banjara (Hindu traditions)",
    "Chamar (Hindu traditions)",
    "Gujar (Hindu traditions)",
    "Ilavan",
    "Java Banyumasan",
    "Kapu unspecified",
    "Koiri (Hindu traditions)",
    "Kurd, Kurmanji",
    "Mahar (Buddhist traditions)",
    "Malay",
    "Nair",
    "Persian",
    "Shaikh Qureshi",
    "Sonar (Hindu traditions)",
    "Thai",
    "Uyghur",
    "Yadav (Hindu traditions)",
  ],
  [
    "Afghan, Tajik",
    "Arab, North Iraqi",
    "Arab, Tunisian",
    "Badhai (Hindu traditions)",
    "Bhil unspecified",
    "Dusadh (Hindu traditions)",
    "Hausa",
    "Jat (Hindu traditions)",
    "Java Pesisir Lor",
    "Kayastha (Hindu traditions)",
    "Korean",
    "Lohar (Hindu traditions)",
    "Mahratta Kunbi",
    "Mappila",
    "Pashtun",
    "Sayyid",
    "Shaikh unspecified",
    "Sylhet (Muslim traditions)",
    "Thai, Northern",
    "Vakkaliga unspecified",
  ],
];

const PGLinks = [
  [
    "https://joshuaproject.net/people_groups/16164/IN",
    "https://joshuaproject.net/people_groups/13819/MO",
    "https://joshuaproject.net/people_groups/15104/SU",
    "https://joshuaproject.net/people_groups/18859/IR",
    "https://joshuaproject.net/people_groups/18084/BG",
    "https://joshuaproject.net/people_groups/16709/IN",
    "https://joshuaproject.net/people_groups/18484/CH",
    "https://joshuaproject.net/people_groups/12322/JA",
    "https://joshuaproject.net/people_groups/19029/ID",
    "https://joshuaproject.net/people_groups/12558/IN",
    "https://joshuaproject.net/people_groups/21555/IN",
    "https://joshuaproject.net/people_groups/17334/IN",
    "https://joshuaproject.net/people_groups/17411/IN",
    "https://joshuaproject.net/people_groups/18786/IN",
    "https://joshuaproject.net/people_groups/12286/ET",
    "https://joshuaproject.net/people_groups/17928/IN",
    "https://joshuaproject.net/people_groups/21815/IN",
    "https://joshuaproject.net/people_groups/15121/ID",
    "https://joshuaproject.net/people_groups/15460/TH",
    "https://joshuaproject.net/people_groups/14039/UZ",
  ],
  [
    "https://joshuaproject.net/people_groups/14372/AF",
    "https://joshuaproject.net/people_groups/20327/IZ",
    "https://joshuaproject.net/people_groups/15641/TS",
    "https://joshuaproject.net/people_groups/16332/IN",
    "https://joshuaproject.net/people_groups/16414/IN",
    "https://joshuaproject.net/people_groups/16742/IN",
    "https://joshuaproject.net/people_groups/12070/NI",
    "https://joshuaproject.net/people_groups/12329/IN",
    "https://joshuaproject.net/people_groups/12334/ID",
    "https://joshuaproject.net/people_groups/17124/IN",
    "https://joshuaproject.net/people_groups/12795/KN",
    "https://joshuaproject.net/people_groups/17379/IN",
    "https://joshuaproject.net/people_groups/17599/IN",
    "https://joshuaproject.net/people_groups/17452/IN",
    "https://joshuaproject.net/people_groups/14256/PK",
    "https://joshuaproject.net/people_groups/18045/IN",
    "https://joshuaproject.net/people_groups/18084/IN",
    "https://joshuaproject.net/people_groups/22311/BG",
    "https://joshuaproject.net/people_groups/12666/TH",
    "https://joshuaproject.net/people_groups/18293/IN",
  ],
  [
    "https://joshuaproject.net/people_groups/10379/AG",
    "https://joshuaproject.net/people_groups/14715/YM",
    "https://joshuaproject.net/people_groups/15198/YM",
    "https://joshuaproject.net/people_groups/10617/ML",
    "https://joshuaproject.net/people_groups/16521/IN",
    "https://joshuaproject.net/people_groups/10949/NI",
    "https://joshuaproject.net/people_groups/12070/NG",
    "https://joshuaproject.net/people_groups/17571/PK",
    "https://joshuaproject.net/people_groups/17044/IN",
    "https://joshuaproject.net/people_groups/12599/KZ",
    "https://joshuaproject.net/people_groups/17316/IN",
    "https://joshuaproject.net/people_groups/17397/IN",
    "https://joshuaproject.net/people_groups/17554/IN",
    "https://joshuaproject.net/people_groups/13724/ID",
    "https://joshuaproject.net/people_groups/21537/IN",
    "https://joshuaproject.net/people_groups/18045/PK",
    "https://joshuaproject.net/people_groups/14983/SO",
    "https://joshuaproject.net/people_groups/15201/TI",
    "https://joshuaproject.net/people_groups/18702/CH",
    "https://joshuaproject.net/people_groups/18323/IN",
  ],
  [
    "https://joshuaproject.net/people_groups/16221/IN",
    "https://joshuaproject.net/people_groups/14784/SA",
    "https://joshuaproject.net/people_groups/16228/PK",
    "https://joshuaproject.net/people_groups/16318/IN",
    "https://joshuaproject.net/people_groups/11029/BM",
    "https://joshuaproject.net/people_groups/16855/IN",
    "https://joshuaproject.net/people_groups/12140/CH",
    "https://joshuaproject.net/people_groups/18777/IN",
    "https://joshuaproject.net/people_groups/12509/NI",
    "https://joshuaproject.net/people_groups/12662/CB",
    "https://joshuaproject.net/people_groups/17325/IN",
    "https://joshuaproject.net/people_groups/13199/ID",
    "https://joshuaproject.net/people_groups/17425/IN",
    "https://joshuaproject.net/people_groups/17745/IN",
    "https://joshuaproject.net/people_groups/14327/AF",
    "https://joshuaproject.net/people_groups/18084/PK",
    "https://joshuaproject.net/people_groups/14983/ET",
    "https://joshuaproject.net/people_groups/18229/IN",
    "https://joshuaproject.net/people_groups/18274/TU",
    "https://joshuaproject.net/people_groups/18314/IN",
  ],
  [
    "https://joshuaproject.net/people_groups/12247/IZ",
    "https://joshuaproject.net/people_groups/10759/SA",
    "https://joshuaproject.net/people_groups/10528/AJ",
    "https://joshuaproject.net/people_groups/16315/IN",
    "https://joshuaproject.net/people_groups/16561/IN",
    "https://joshuaproject.net/people_groups/16878/IN",
    "https://joshuaproject.net/people_groups/16965/IN",
    "https://joshuaproject.net/people_groups/12331/ID",
    "https://joshuaproject.net/people_groups/19597/IN",
    "https://joshuaproject.net/people_groups/17236/IN",
    "https://joshuaproject.net/people_groups/12877/TU",
    "https://joshuaproject.net/people_groups/17405/IN",
    "https://joshuaproject.net/people_groups/13437/MY",
    "https://joshuaproject.net/people_groups/17747/IN",
    "https://joshuaproject.net/people_groups/14371/IR",
    "https://joshuaproject.net/people_groups/21236/IN",
    "https://joshuaproject.net/people_groups/18150/IN",
    "https://joshuaproject.net/people_groups/11277/TH",
    "https://joshuaproject.net/people_groups/15755/CH",
    "https://joshuaproject.net/people_groups/16187/IN",
  ],
  [
    "https://joshuaproject.net/people_groups/14372/AF",
    "https://joshuaproject.net/people_groups/20327/IZ",
    "https://joshuaproject.net/people_groups/15641/TS",
    "https://joshuaproject.net/people_groups/16332/IN",
    "https://joshuaproject.net/people_groups/16414/IN",
    "https://joshuaproject.net/people_groups/16742/IN",
    "https://joshuaproject.net/people_groups/12070/NI",
    "https://joshuaproject.net/people_groups/12329/IN",
    "https://joshuaproject.net/people_groups/12334/ID",
    "https://joshuaproject.net/people_groups/17124/IN",
    "https://joshuaproject.net/people_groups/12795/KN",
    "https://joshuaproject.net/people_groups/17379/IN",
    "https://joshuaproject.net/people_groups/17599/IN",
    "https://joshuaproject.net/people_groups/17452/IN",
    "https://joshuaproject.net/people_groups/14256/PK",
    "https://joshuaproject.net/people_groups/18045/IN",
    "https://joshuaproject.net/people_groups/18084/IN",
    "https://joshuaproject.net/people_groups/22311/BG",
    "https://joshuaproject.net/people_groups/12666/TH",
    "https://joshuaproject.net/people_groups/18293/IN",
  ],
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

const Friends = [
  ["Will & Lilly", "Beth & Jason"],
  ["Rod & Tori", "Chris & Monica"],
  ["Erica Patrick", "Robby & Chrissy"],
  ["McKayla", "Dave & Rose"],
  ["Sarah & Javier", "Katie"],
  ["Brooke & Aaron", "Scott Belmore"],
];

export class PG {
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }
}

function App() {
  const [cookies, setCookie] = useCookies(["pair"]);
  const [pair, setPair] = useState(cookies.pair);
  const [week, setWeek] = useState(calcWeek());

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
        <ShowWeek week={week} weekOptions={WeekOptions} />
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
          "The Lord has done great things for them."
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
        {(typeof pair === "undefined") ?
        
          <>
            <PGSection
              pg1={
                new PG(
                  PGNames[1 - 1][(week - 1) * 2],
                  PGLinks[1 - 1][(week - 1) * 2]
                )
              }
              pg2={
                new PG(
                  PGNames[1 - 1][(week - 1) * 2 + 1],
                  PGLinks[1 - 1][(week - 1) * 2 + 1]
                )
              }
            />
            <CountrySection
              Name={Countries[week - 1][0]}
              Link={Countries[week - 1][1]}
            />
            <h3>Adittional Resources</h3>
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
            <FriendsMenu
              friend1={Friends[1 - 1][0]}
              friend2={Friends[1 - 1][1]}
            />
          </>
        
        :
        
          <>
            <PGSection
              pg1={
                new PG(
                  PGNames[pair - 1][(week - 1) * 2],
                  PGLinks[pair - 1][(week - 1) * 2]
                )
              }
              pg2={
                new PG(
                  PGNames[pair - 1][(week - 1) * 2 + 1],
                  PGLinks[pair - 1][(week - 1) * 2 + 1]
                )
              }
            />
            <CountrySection
              Name={Countries[week - 1][0]}
              Link={Countries[week - 1][1]}
            />
            <h3>Adittional Resources</h3>
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
            <FriendsMenu
              friend1={Friends[pair - 1][0]}
              friend2={Friends[pair - 1][1]}
            />
          </>
        }
        <h2>Witness</h2>
        <h3>Lift up those who don't yet know Jesus.</h3>
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
