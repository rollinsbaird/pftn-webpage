// import React from "react";
import PropTypes from "prop-types";

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

export class PG {
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }
}

function PGSection({ pair = 0, week }) {
  const calcPg = pair + 16 * (week - 1) - 1;

  var pg1 = new PG(
    PeopNameInCountry[calcPg],
    PGLinkBase + PeopleID3[calcPg] + "/" + ROG3[calcPg]
  );

  var pg2 = new PG(
    PeopNameInCountry[calcPg + 8],
    PGLinkBase + PeopleID3[calcPg + 8] + "/" + ROG3[calcPg + 8]
  );

  return (
    <h3>
      This week, please pray for the{" "}
      <a href={pg1.link} target="_blank" rel="noopener noreferrer">
        {pg1.name}
      </a>{" "}
      people and the{" "}
      <a href={pg2.link} target="_blank" rel="noopener noreferrer">
        {pg2.name}
      </a>
      .
    </h3>
  );
}

PGSection.propTypes = {
  pair: PropTypes.number,
  week: PropTypes.number,
};

export default PGSection;
