import { useState } from "react";
import Spreadsheet from "react-spreadsheet";

const Edit = () => {
  const columnLabels = ["Number", "Names"];

  const [data, setData] = useState([
    [{ value: 1 }, { value: "Nesha & Maggie" }],
    [{ value: 2 }, { value: "Riley & Anna" }],
    [{ value: 3 }, { value: "Mimi & McKenzie" }],
    [{ value: 4 }, { value: "Thom & Brenner" }],
    [{ value: 5 }, { value: "Jo, Clay, & Blake Swafford" }],
    [{ value: 6 }, { value: "Rollins & Blake Kelly" }],
  ]);

  return (
    <Spreadsheet data={data} onChange={setData} columnLabels={columnLabels} />
  );
};

export default Edit;
