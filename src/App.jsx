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

// const PGNames = [
//   [
//     "Adi Dravida",
//     "Arab, Moroccan",
//     "Arab, Sudanese",
//     "Azerbaijani, Azeri Turk",
//     "Bengali Muslim Shaikh",
//     "Dhobi (Hindu traditions)",
//     "Han Chinese, Xiang",
//     "Japanese",
//     "Java Mancanegari",
//     "Kashmiri (Muslim traditions)",
//     "Koli of Gujarat",
//     "Kurmi (Hindu traditions)",
//     "Mahishya",
//     "Mali (Hindu traditions)",
//     "Oromo, Hararghe",
//     "Rajput (Hindu traditions)",
//     "Shaikh Siddiqi",
//     "Sunda",
//     "Thai, Isan",
//     "Uzbek, Northern",
//   ],
//   [
//     "Afghan, Tajik",
//     "Arab, North Iraqi",
//     "Arab, Tunisian",
//     "Badhai (Hindu traditions)",
//     "Bhil unspecified",
//     "Dusadh (Hindu traditions)",
//     "Hausa",
//     "Jat (Hindu traditions)",
//     "Java Pesisir Lor",
//     "Kayastha (Hindu traditions)",
//     "Korean",
//     "Lohar (Hindu traditions)",
//     "Mahratta Kunbi",
//     "Mappila",
//     "Pashtun",
//     "Sayyid",
//     "Shaikh unspecified",
//     "Sylhet (Muslim traditions)",
//     "Thai, Northern",
//     "Vakkaliga unspecified",
//   ],
//   [
//     "Algerian, Arabic-speaking",
//     "Arab, Northern Yemeni",
//     "Arab, Yemeni",
//     "Bambara",
//     "Brahmin unspecified",
//     "Fulani, Nigerian",
//     "Hausa",
//     "Jat (Muslim traditions)",
//     "Kahar (Hindu traditions)",
//     "Kazakh",
//     "Kumhar (Hindu traditions)",
//     "Madiga (Hindu traditions)",
//     "Mahratta unspecified",
//     "Minangkabau",
//     "Pashtun, Pathan",
//     "Sayyid",
//     "Somali",
//     "Tajik",
//     "Tujia",
//     "Vanniyan",
//   ],
//   [
//     "Ansari",
//     "Arab, Saudi - Hijazi",
//     "Arain (Muslim traditions)",
//     "Bania unspecified",
//     "Burmese",
//     "Gond unspecified",
//     "Hui",
//     "Jat (Sikh traditions)",
//     "Kanuri, Yerwa",
//     "Khmer",
//     "Kunbi (Hindu traditions)",
//     "Madura",
//     "Mala (Hindu traditions)",
//     "Nai (Hindu traditions)",
//     "Pashtun, Southern",
//     "Shaikh",
//     "Somali",
//     "Teli (Hindu traditions)",
//     "Turk",
//     "Viswakarma unspecified",
//   ],
//   [
//     "Arab, Iraqi",
//     "Arab, Saudi - Najdi",
//     "Azerbaijani",
//     "Banjara (Hindu traditions)",
//     "Chamar (Hindu traditions)",
//     "Gujar (Hindu traditions)",
//     "Ilavan",
//     "Java Banyumasan",
//     "Kapu unspecified",
//     "Koiri (Hindu traditions)",
//     "Kurd, Kurmanji",
//     "Mahar (Buddhist traditions)",
//     "Malay",
//     "Nair",
//     "Persian",
//     "Shaikh Qureshi",
//     "Sonar (Hindu traditions)",
//     "Thai",
//     "Uyghur",
//     "Yadav (Hindu traditions)",
//   ],
//   [
//     "Afghan, Tajik",
//     "Arab, North Iraqi",
//     "Arab, Tunisian",
//     "Badhai (Hindu traditions)",
//     "Bhil unspecified",
//     "Dusadh (Hindu traditions)",
//     "Hausa",
//     "Jat (Hindu traditions)",
//     "Java Pesisir Lor",
//     "Kayastha (Hindu traditions)",
//     "Korean",
//     "Lohar (Hindu traditions)",
//     "Mahratta Kunbi",
//     "Mappila",
//     "Pashtun",
//     "Sayyid",
//     "Shaikh unspecified",
//     "Sylhet (Muslim traditions)",
//     "Thai, Northern",
//     "Vakkaliga unspecified",
//   ],
// ];

const PeopNameInCountry = [
  "Adi Dravida",
  "Afghan, Tajik",
  "Ahar",
  "Aimaq",
  "Alawite",
  "Algerian, Arabic-speaking",
  "Algerian, Arabic-speaking",
  "Ansari",
  "Ansari",
  "Arab, Bedouin",
  "Arab, Bedouin",
  "Arab, Cyrenaican",
  "Arab, Hadrami",
  "Arab, Libyan",
  "Arab, Moroccan",
  "Arab, Moroccan",
  "Arab, Northern Yemeni",
  "Arab, Omani",
  "Arab, Saudi - Hijazi",
  "Arab, Saudi - Najdi",
  "Arab, Saudi - Najdi",
  "Arab, Saudi - Najdi",
  "Arab, Tihami",
  "Arab, Yemeni",
  "Arain (Muslim traditions)",
  "Arora (Hindu traditions)",
  "Arunthathiyar",
  "Assamese (Muslim traditions)",
  "Avar, Dagestani",
  "Awan",
  "Badhai (Hindu traditions)",
  "Bagdi (Hindu traditions)",
  "Bairagi (Hindu traditions)",
  "Bairwa",
  "Balija (Hindu traditions)",
  "Baloch Rind",
  "Baloch unspecified",
  "Bangali Muslim Moghal",
  "Bangali Muslim Moghal",
  "Bania Agarwal",
  "Bania Komti",
  "Bania Mahur",
  "Bania unspecified",
  "Banjar",
  "Basor",
  "Bedar (Hindu traditions)",
  "Bedouin, Eastern Bedawi",
  "Beldar (Hindu traditions)",
  "Bengali Muslim Sayyid",
  "Bengali Muslim Shaikh",
  "Berber, Imazighen",
  "Berber, Imazighen",
  "Berber, Rif",
  "Berber, Shawiya",
  "Bhar",
  "Bharbhunja (Hindu traditions)",
  "Bhat (Hindu traditions)",
  "Bhoi (Hindu traditions)",
  "Bhuinhar",
  "Bind",
  "Bohra",
  "Bosniak",
  "Boya",
  "Brahmin Bhumihar",
  "Brahmin Gaur",
  "Brahmin Hill",
  "Brahmin Kanaujia",
  "Brahmin Radhi",
  "Brahmin Sanadhya",
  "Brahmin Sawaria",
  "Brahmin Telugu",
  "Brahmin unspecified",
  "Brahui Jhalawan",
  "Chakkiliyan (Hindu traditions)",
  "Chechen, Nohchi",
  "Daroga (Hindu traditions)",
  "Darzi (Hindu traditions)",
  "Darzi (Muslim traditions)",
  "Dewar",
  "Dhangar Bharwad",
  "Dhanuk",
  "Dhimar",
  "Dhobi (Hindu traditions)",
  "Dhobi (Muslim traditions)",
  "Dhobi (Muslim traditions)",
  "Dusadh (Hindu traditions)",
  "Fulani, Adamawa",
  "Fulani, Adamawa",
  "Fulani, Maasina",
  "Fulani, Pulaar",
  "Fulbe",
  "Gadaria (Hindu traditions)",
  "Gadaria Dhingar",
  "Gadaria Nikhad",
  "Gangakula",
  "Gauda",
  "Gosain unspecified",
  "Gujar (Hindu traditions)",
  "Gujar (Muslim traditions)",
  "Gujjar (Muslim traditions)",
  "Gujjar (Muslim traditions)",
  "Hajam",
  "Hajam",
  "Halwai (Hindu traditions)",
  "Hausa",
  "Hazara",
  "Hui",
  "Ilavan",
  "Jambi",
  "Jat (Hindu traditions)",
  "Jat (Muslim traditions)",
  "Jat (Sikh traditions)",
  "Jat Gahlot (Muslim traditions)",
  "Jat Kharral (Muslim traditions)",
  "Jat Varaich (Muslim traditions)",
  "Jebala",
  "Jogi (Hindu traditions)",
  "Jola",
  "Kabardian",
  "Kachhi (Hindu traditions)",
  "Kachhi Kachhwaha",
  "Kahar (Hindu traditions)",
  "Kaibartta unspecified",
  "Kalal (Hindu traditions)",
  "Kalal Idiga",
  "Kalwar (Hindu traditions)",
  "Kalwar Jaiswal",
  "Kandu",
  "Kapu Reddi",
  "Kapu unspecified",
  "Kashmiri (Muslim traditions)",
  "Kashmiri (Muslim traditions)",
  "Kayastha (Hindu traditions)",
  "Kayastha (Hindu traditions)",
  "Kayastha Sribastab",
  "Kazakh",
  "Khampa Eastern",
  "Khandait",
  "Khati (Hindu traditions)",
  "Khatik (Hindu traditions)",
  "Khatri (Hindu traditions)",
  "Khatri (Muslim traditions)",
  "Khorasani Turk",
  "Kirar",
  "Koiri (Hindu traditions)",
  "Kol",
  "Koli (Hindu traditions)",
  "Koli Mahadev",
  "Koshti",
  "Kumhar (Kusavar) (Hindu traditions)",
  "Kumhar (Muslim traditions)",
  "Kunbi (Hindu traditions)",
  "Kunbi Kadwa",
  "Kunbi Lewa",
  "Kurd, Central",
  "Kurd, Kurmanji",
  "Kurd, Turkish-speaking",
  "Kurmi (Hindu traditions)",
  "Kyrgyz",
  "Laki",
  "Lingayat",
  "Lodha (Hindu traditions)",
  "Lodha Jariya",
  "Lohar (Hindu traditions)",
  "Lohar (Muslim traditions)",
  "Lunia (Hindu traditions)",
  "Luri, Northern",
  "Luri, Southern",
  "Machhi (Muslim traditions)",
  "Maguindanao",
  "Mahratta Jadhav",
  "Mahratta Kunbi",
  "Mahratta unspecified",
  "Mal (Hindu traditions)",
  "Malay",
  "Malay",
  "Malay, Pattani",
  "Malay, Riau",
  "Malay, Sumatera North",
  "Mali (Hindu traditions)",
  "Mallah (Hindu traditions)",
  "Mandailing",
  "Mangala",
  "Maninka, Eastern",
  "Mappila",
  "Maranao, Lanao",
  "Megh (Hindu traditions)",
  "Minangkabau, Orang Negeri",
  "Mirasi (Muslim traditions)",
  "Mochi (Muslim traditions)",
  "Mongolian, Peripheral",
  "Moor",
  "Muhamasheen, Akhdam",
  "Munnur",
  "Murao (Hindu traditions)",
  "Mussali",
  "Mutrasi",
  "Nadar (Hindu traditions)",
  "Nai (Hindu traditions)",
  "Naikda",
  "Palembang",
  "Panika",
  "Pashtun",
  "Pashtun Kakar",
  "Pashtun Khattak",
  "Pashtun Mandanri (Manezai)",
  "Pashtun Mohmand",
  "Pashtun Yusafzai",
  "Pashtun Yusafzai",
  "Pashtun, Northern",
  "Pashtun, Pathan",
  "Pashtun, Southeast",
  "Pashtun, Southern",
  "Pasi (Hindu traditions)",
  "Pasi Kaithwan",
  "Pingdi",
  "Pinjara",
  "Pulayan unspecified",
  "Qashqai, Kashkai",
  "Qassab",
  "Qassab",
  "Rabari (Hindu traditions)",
  "Raigar",
  "Rajput (Hindu traditions)",
  "Rajput (Muslim traditions)",
  "Rajput (Muslim traditions)",
  "Rajput (Sikh traditions)",
  "Rajput Bais (Hindu traditions)",
  "Rajput Bhatti (Hindu traditions)",
  "Rajput Bhatti (Muslim traditions)",
  "Rajput Chauhan (Hindu traditions)",
  "Rajput Chauhan (Muslim traditions)",
  "Rajput Ponwar (Hindu traditions)",
  "Rajput Rathor (Hindu traditions)",
  "Rakhine",
  "Rayeen (Muslim traditions)",
  "Romani, Halebi",
  "Romani, Iranian",
  "Sahariya",
  "Sali",
  "Sasak",
  "Sayyid",
  "Sayyid",
  "Shaikh",
  "Shaikh Qureshi",
  "Shaikh Qureshi",
  "Shaikh Siddiqi",
  "Shaikh unspecified",
  "Sindhi Sama",
  "Sonar (Hindu traditions)",
  "Soninke",
  "Sylhet (Muslim traditions)",
  "Tajik",
  "Tajik",
  "Tamboli (Hindu traditions)",
  "Tamil (Muslim traditions)",
  "Tamil (Muslim traditions)",
  "Tanti (Hindu traditions)",
  "Tarkhan (Hindu traditions)",
  "Tarkhan (Muslim traditions)",
  "Tarkhan (Sikh traditions)",
  "Tausug, Moro Joloano",
  "Teli (Hindu traditions)",
  "Teli (Muslim traditions)",
  "Teli (Muslim traditions)",
  "Thai Islam",
  "Thori (Hindu traditions)",
  "Tili",
  "Tuareg, Tamajaq",
  "Turk",
  "Turk",
  "Turkmen",
  "Turkmen",
  "Turkmen, Middle-Eastern",
  "Turkmen, Middle-Eastern",
  "Uyghur",
  "Uzbek, Northern",
  "Uzbek, Southern",
  "Vaddar (Hindu traditions)",
  "Valmiki (Hindu traditions)",
  "Vanjara",
  "Wolof",
  "Yadav (Hindu traditions)",
  "Yadav (Hindu traditions)",
  "Yadav Dhindhor",
  "Yadav Gaoli",
  "Yadav Ghosi",
  "Yadav Gola",
  "Yadav Gualbans (Hindu traditions)",
  "Yadav Rawat",
  "Yadav Sadgope",
  "Zaza-Dimli",
];

const PeopleID3 = [
  "16164",
  "14372",
  "16184",
  "21454",
  "18805",
  "10379",
  "10379",
  "16221",
  "16221",
  "10758",
  "10758",
  "11454",
  "12029",
  "13169",
  "13819",
  "13819",
  "14715",
  "10378",
  "14784",
  "10759",
  "10759",
  "10759",
  "15484",
  "15198",
  "16228",
  "16239",
  "16242",
  "10461",
  "10495",
  "16264",
  "16332",
  "16281",
  "16297",
  "16298",
  "16312",
  "20260",
  "11684",
  "13761",
  "13761",
  "19688",
  "19707",
  "19713",
  "16318",
  "10658",
  "16340",
  "16365",
  "13046",
  "16375",
  "18045",
  "18084",
  "12217",
  "12217",
  "10803",
  "14899",
  "16405",
  "16412",
  "16406",
  "16429",
  "16424",
  "16457",
  "16494",
  "10953",
  "16518",
  "19924",
  "19943",
  "20056",
  "19951",
  "19972",
  "19975",
  "19978",
  "19983",
  "16521",
  "20026",
  "16600",
  "11317",
  "16676",
  "16673",
  "17513",
  "16695",
  "16700",
  "16696",
  "16705",
  "16709",
  "17519",
  "17519",
  "16742",
  "11774",
  "11774",
  "11773",
  "15622",
  "11769",
  "16768",
  "21718",
  "21719",
  "16785",
  "16800",
  "16862",
  "16878",
  "17549",
  "16879",
  "16879",
  "19655",
  "19655",
  "16905",
  "12070",
  "12076",
  "12140",
  "16965",
  "12318",
  "12329",
  "17571",
  "18777",
  "19840",
  "19881",
  "19911",
  "12336",
  "17019",
  "22099",
  "11675",
  "17035",
  "21763",
  "17044",
  "17016",
  "17204",
  "21147",
  "17061",
  "21150",
  "17080",
  "21151",
  "19597",
  "12558",
  "12558",
  "17124",
  "17124",
  "21327",
  "12599",
  "18522",
  "17150",
  "17162",
  "17301",
  "17161",
  "17586",
  "12667",
  "17194",
  "17236",
  "17239",
  "17247",
  "17210",
  "17275",
  "17316",
  "17597",
  "17325",
  "21181",
  "21182",
  "11126",
  "12877",
  "18756",
  "17334",
  "12933",
  "19313",
  "17372",
  "17378",
  "21768",
  "17379",
  "17609",
  "17391",
  "13158",
  "19312",
  "17618",
  "13209",
  "21188",
  "17599",
  "17554",
  "17424",
  "13437",
  "13437",
  "14343",
  "14556",
  "20292",
  "18786",
  "17432",
  "10721",
  "19068",
  "13511",
  "17452",
  "13531",
  "17527",
  "14208",
  "17622",
  "17625",
  "18603",
  "13592",
  "10380",
  "19281",
  "17708",
  "17714",
  "19316",
  "17735",
  "17745",
  "17786",
  "14274",
  "17824",
  "14256",
  "22188",
  "22197",
  "22223",
  "22234",
  "22294",
  "22294",
  "14256",
  "21537",
  "22356",
  "14327",
  "17852",
  "21772",
  "18653",
  "17877",
  "17911",
  "14497",
  "17919",
  "17919",
  "17921",
  "17926",
  "17928",
  "17667",
  "17667",
  "18159",
  "20374",
  "20381",
  "20234",
  "20386",
  "20235",
  "20421",
  "20427",
  "13207",
  "17328",
  "12040",
  "11597",
  "17997",
  "18002",
  "14776",
  "18045",
  "18045",
  "18084",
  "21236",
  "21236",
  "21815",
  "18084",
  "18164",
  "18150",
  "14996",
  "22311",
  "15201",
  "15201",
  "18210",
  "15234",
  "15234",
  "18217",
  "18259",
  "17695",
  "18177",
  "15295",
  "18229",
  "17692",
  "17692",
  "19767",
  "18247",
  "18254",
  "15223",
  "18274",
  "18274",
  "15654",
  "15654",
  "21538",
  "21538",
  "15755",
  "14039",
  "15756",
  "18288",
  "22348",
  "18329",
  "15414",
  "16187",
  "16187",
  "21294",
  "21295",
  "21822",
  "21296",
  "21299",
  "21300",
  "21301",
  "11560",
];

const ROG3 = [
  "IN",
  "AF",
  "IN",
  "AF",
  "SY",
  "AG",
  "EG",
  "IN",
  "PK",
  "JO",
  "SA",
  "LY",
  "YM",
  "LY",
  "EG",
  "MO",
  "YM",
  "MU",
  "SA",
  "IZ",
  "SA",
  "SY",
  "YM",
  "YM",
  "PK",
  "IN",
  "IN",
  "IN",
  "RS",
  "PK",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "PK",
  "PK",
  "IN",
  "PK",
  "IN",
  "IN",
  "IN",
  "IN",
  "ID",
  "IN",
  "IN",
  "EG",
  "IN",
  "BG",
  "BG",
  "AG",
  "MO",
  "MO",
  "AG",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "BK",
  "IN",
  "IN",
  "IN",
  "NP",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "PK",
  "IN",
  "RS",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "PK",
  "IN",
  "CM",
  "NI",
  "ML",
  "SG",
  "GV",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "PK",
  "IN",
  "PK",
  "IN",
  "PK",
  "IN",
  "IV",
  "AF",
  "CH",
  "IN",
  "ID",
  "IN",
  "PK",
  "IN",
  "PK",
  "PK",
  "PK",
  "MO",
  "IN",
  "BG",
  "TU",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "PK",
  "BG",
  "IN",
  "IN",
  "CH",
  "CH",
  "IN",
  "IN",
  "IN",
  "IN",
  "PK",
  "IR",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "PK",
  "IN",
  "IN",
  "IN",
  "IZ",
  "TU",
  "TU",
  "IN",
  "KG",
  "IR",
  "IN",
  "IN",
  "IN",
  "IN",
  "PK",
  "IN",
  "IR",
  "IR",
  "PK",
  "RP",
  "IN",
  "IN",
  "IN",
  "IN",
  "ID",
  "MY",
  "TH",
  "ID",
  "ID",
  "IN",
  "IN",
  "ID",
  "IN",
  "GV",
  "IN",
  "RP",
  "IN",
  "MY",
  "PK",
  "PK",
  "CH",
  "MR",
  "YM",
  "IN",
  "IN",
  "PK",
  "IN",
  "IN",
  "IN",
  "IN",
  "ID",
  "IN",
  "PK",
  "PK",
  "PK",
  "PK",
  "PK",
  "IN",
  "PK",
  "AF",
  "IN",
  "AF",
  "AF",
  "IN",
  "IN",
  "CH",
  "IN",
  "IN",
  "IR",
  "IN",
  "PK",
  "IN",
  "IN",
  "IN",
  "IN",
  "PK",
  "IN",
  "IN",
  "IN",
  "PK",
  "IN",
  "PK",
  "IN",
  "IN",
  "BM",
  "IN",
  "EG",
  "IR",
  "IN",
  "IN",
  "ID",
  "IN",
  "PK",
  "PK",
  "IN",
  "PK",
  "IN",
  "IN",
  "PK",
  "IN",
  "ML",
  "BG",
  "TI",
  "UZ",
  "IN",
  "IN",
  "CE",
  "IN",
  "IN",
  "PK",
  "IN",
  "RP",
  "IN",
  "IN",
  "PK",
  "TH",
  "IN",
  "IN",
  "NG",
  "GM",
  "TU",
  "AF",
  "TX",
  "IZ",
  "SY",
  "CH",
  "UZ",
  "AF",
  "IN",
  "IN",
  "IN",
  "SG",
  "IN",
  "NP",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "IN",
  "TU",
];

const PGLinkBase = "https://joshuaproject.net/people_groups/";

// const PGLinks = [
//   [
//     "https://joshuaproject.net/people_groups/16164/IN",
//     "https://joshuaproject.net/people_groups/13819/MO",
//     "https://joshuaproject.net/people_groups/15104/SU",
//     "https://joshuaproject.net/people_groups/18859/IR",
//     "https://joshuaproject.net/people_groups/18084/BG",
//     "https://joshuaproject.net/people_groups/16709/IN",
//     "https://joshuaproject.net/people_groups/18484/CH",
//     "https://joshuaproject.net/people_groups/12322/JA",
//     "https://joshuaproject.net/people_groups/19029/ID",
//     "https://joshuaproject.net/people_groups/12558/IN",
//     "https://joshuaproject.net/people_groups/21555/IN",
//     "https://joshuaproject.net/people_groups/17334/IN",
//     "https://joshuaproject.net/people_groups/17411/IN",
//     "https://joshuaproject.net/people_groups/18786/IN",
//     "https://joshuaproject.net/people_groups/12286/ET",
//     "https://joshuaproject.net/people_groups/17928/IN",
//     "https://joshuaproject.net/people_groups/21815/IN",
//     "https://joshuaproject.net/people_groups/15121/ID",
//     "https://joshuaproject.net/people_groups/15460/TH",
//     "https://joshuaproject.net/people_groups/14039/UZ",
//   ],
//   [
//     "https://joshuaproject.net/people_groups/14372/AF",
//     "https://joshuaproject.net/people_groups/20327/IZ",
//     "https://joshuaproject.net/people_groups/15641/TS",
//     "https://joshuaproject.net/people_groups/16332/IN",
//     "https://joshuaproject.net/people_groups/16414/IN",
//     "https://joshuaproject.net/people_groups/16742/IN",
//     "https://joshuaproject.net/people_groups/12070/NI",
//     "https://joshuaproject.net/people_groups/12329/IN",
//     "https://joshuaproject.net/people_groups/12334/ID",
//     "https://joshuaproject.net/people_groups/17124/IN",
//     "https://joshuaproject.net/people_groups/12795/KN",
//     "https://joshuaproject.net/people_groups/17379/IN",
//     "https://joshuaproject.net/people_groups/17599/IN",
//     "https://joshuaproject.net/people_groups/17452/IN",
//     "https://joshuaproject.net/people_groups/14256/PK",
//     "https://joshuaproject.net/people_groups/18045/IN",
//     "https://joshuaproject.net/people_groups/18084/IN",
//     "https://joshuaproject.net/people_groups/22311/BG",
//     "https://joshuaproject.net/people_groups/12666/TH",
//     "https://joshuaproject.net/people_groups/18293/IN",
//   ],
//   [
//     "https://joshuaproject.net/people_groups/10379/AG",
//     "https://joshuaproject.net/people_groups/14715/YM",
//     "https://joshuaproject.net/people_groups/15198/YM",
//     "https://joshuaproject.net/people_groups/10617/ML",
//     "https://joshuaproject.net/people_groups/16521/IN",
//     "https://joshuaproject.net/people_groups/10949/NI",
//     "https://joshuaproject.net/people_groups/12070/NG",
//     "https://joshuaproject.net/people_groups/17571/PK",
//     "https://joshuaproject.net/people_groups/17044/IN",
//     "https://joshuaproject.net/people_groups/12599/KZ",
//     "https://joshuaproject.net/people_groups/17316/IN",
//     "https://joshuaproject.net/people_groups/17397/IN",
//     "https://joshuaproject.net/people_groups/17554/IN",
//     "https://joshuaproject.net/people_groups/13724/ID",
//     "https://joshuaproject.net/people_groups/21537/IN",
//     "https://joshuaproject.net/people_groups/18045/PK",
//     "https://joshuaproject.net/people_groups/14983/SO",
//     "https://joshuaproject.net/people_groups/15201/TI",
//     "https://joshuaproject.net/people_groups/18702/CH",
//     "https://joshuaproject.net/people_groups/18323/IN",
//   ],
//   [
//     "https://joshuaproject.net/people_groups/16221/IN",
//     "https://joshuaproject.net/people_groups/14784/SA",
//     "https://joshuaproject.net/people_groups/16228/PK",
//     "https://joshuaproject.net/people_groups/16318/IN",
//     "https://joshuaproject.net/people_groups/11029/BM",
//     "https://joshuaproject.net/people_groups/16855/IN",
//     "https://joshuaproject.net/people_groups/12140/CH",
//     "https://joshuaproject.net/people_groups/18777/IN",
//     "https://joshuaproject.net/people_groups/12509/NI",
//     "https://joshuaproject.net/people_groups/12662/CB",
//     "https://joshuaproject.net/people_groups/17325/IN",
//     "https://joshuaproject.net/people_groups/13199/ID",
//     "https://joshuaproject.net/people_groups/17425/IN",
//     "https://joshuaproject.net/people_groups/17745/IN",
//     "https://joshuaproject.net/people_groups/14327/AF",
//     "https://joshuaproject.net/people_groups/18084/PK",
//     "https://joshuaproject.net/people_groups/14983/ET",
//     "https://joshuaproject.net/people_groups/18229/IN",
//     "https://joshuaproject.net/people_groups/18274/TU",
//     "https://joshuaproject.net/people_groups/18314/IN",
//   ],
//   [
//     "https://joshuaproject.net/people_groups/12247/IZ",
//     "https://joshuaproject.net/people_groups/10759/SA",
//     "https://joshuaproject.net/people_groups/10528/AJ",
//     "https://joshuaproject.net/people_groups/16315/IN",
//     "https://joshuaproject.net/people_groups/16561/IN",
//     "https://joshuaproject.net/people_groups/16878/IN",
//     "https://joshuaproject.net/people_groups/16965/IN",
//     "https://joshuaproject.net/people_groups/12331/ID",
//     "https://joshuaproject.net/people_groups/19597/IN",
//     "https://joshuaproject.net/people_groups/17236/IN",
//     "https://joshuaproject.net/people_groups/12877/TU",
//     "https://joshuaproject.net/people_groups/17405/IN",
//     "https://joshuaproject.net/people_groups/13437/MY",
//     "https://joshuaproject.net/people_groups/17747/IN",
//     "https://joshuaproject.net/people_groups/14371/IR",
//     "https://joshuaproject.net/people_groups/21236/IN",
//     "https://joshuaproject.net/people_groups/18150/IN",
//     "https://joshuaproject.net/people_groups/11277/TH",
//     "https://joshuaproject.net/people_groups/15755/CH",
//     "https://joshuaproject.net/people_groups/16187/IN",
//   ],
//   [
//     "https://joshuaproject.net/people_groups/14372/AF",
//     "https://joshuaproject.net/people_groups/20327/IZ",
//     "https://joshuaproject.net/people_groups/15641/TS",
//     "https://joshuaproject.net/people_groups/16332/IN",
//     "https://joshuaproject.net/people_groups/16414/IN",
//     "https://joshuaproject.net/people_groups/16742/IN",
//     "https://joshuaproject.net/people_groups/12070/NI",
//     "https://joshuaproject.net/people_groups/12329/IN",
//     "https://joshuaproject.net/people_groups/12334/ID",
//     "https://joshuaproject.net/people_groups/17124/IN",
//     "https://joshuaproject.net/people_groups/12795/KN",
//     "https://joshuaproject.net/people_groups/17379/IN",
//     "https://joshuaproject.net/people_groups/17599/IN",
//     "https://joshuaproject.net/people_groups/17452/IN",
//     "https://joshuaproject.net/people_groups/14256/PK",
//     "https://joshuaproject.net/people_groups/18045/IN",
//     "https://joshuaproject.net/people_groups/18084/IN",
//     "https://joshuaproject.net/people_groups/22311/BG",
//     "https://joshuaproject.net/people_groups/12666/TH",
//     "https://joshuaproject.net/people_groups/18293/IN",
//   ],
// ];

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
        {typeof pair === "undefined" ? (
          <>
            <PGSection
              pg1={
                new PG(
                  PeopNameInCountry[week - 1],
                  PGLinkBase + PeopleID3[week * 2] + "/" + ROG3[pair * week * 2]
                )
              }
              pg2={
                new PG(
                  PeopNameInCountry[pair * week * 2 + 1],
                  PGLinkBase + PeopleID3[pair * week * 2 + 1] + "/" + ROG3[pair * week * 2 + 1]
                )
              }
            />
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
            <FriendsMenu
              friend1={Friends[1 - 1][0]}
              friend2={Friends[1 - 1][1]}
            />
          </>
        ) : (
          <>
            <PGSection
              pg1={
                new PG(
                  PeopNameInCountry[pair * week - 1],
                  PGLinkBase + PeopleID3[pair * week - 1] + "/" + ROG3[pair * week - 1]
                )
              }
              pg2={
                new PG(
                  PeopNameInCountry[pair * week * 2],
                  PGLinkBase + PeopleID3[pair * week * 2] + "/" + ROG3[pair * week * 2]
                )
              }
            />
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
            {/* <FriendsMenu
              friend1={Friends[pair - 1][0]}
              friend2={Friends[pair - 1][1]}
            /> */}
          </>
        )}
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
