import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Que3() {
  const [inputString1, setInputString1] = useState("");
  const [inputString2, setInputString2] = useState("");
  const [uniqueChars, setUniqueChars] = useState([]);
  const [uniqueNumbers, setUniqueNumbers] = useState([]);
  const [uniqueSpecialChars, setUniqueSpecialChars] = useState([]);
  //const [charCount, setCharCount] = useState(0);
  //const [numCount, setNumCount] = useState(0);
  //const [specialCharCount, setSpecialCharCount] = useState(0);

  const handleChange1 = (event) => {
    setInputString1(event.target.value);
  };

  const handleChange2 = (event) => {
    setInputString2(event.target.value);
  };

  const handleAdd = () => {
    const combinedString = inputString1 + inputString2;

    const uniqueCharsSet = new Set(combinedString.match(/[a-zA-Z]/g));
    const uniqueCharsArray = [...uniqueCharsSet].sort();

    const uniqueNumbersSet = new Set(combinedString.match(/[0-9]/g));
    const uniqueNumbersArray = [...uniqueNumbersSet].sort((a, b) => a - b);

    const uniqueSpecialCharsSet = new Set(combinedString.match(/[!/@/#/$]/g));
    const uniqueSpecialCharsArray = [...uniqueSpecialCharsSet];

    setUniqueChars(uniqueCharsArray);
    setUniqueNumbers(uniqueNumbersArray);
    setUniqueSpecialChars(uniqueSpecialCharsArray);
    //setCharCount(uniqueCharsArray.length);
    //setNumCount(uniqueNumbersArray.length);
    //setSpecialCharCount(uniqueSpecialCharsArray.length);
  };

  return (
      <div style={{textAlign:"center"}}>
        <h1>Que No. 3</h1>
        <h2>Find Unique Num, Char & special Char</h2>
        <input type="text" value={inputString1} onChange={handleChange1} />
        <br />
        <br />
        <input
          type="text"
          value={inputString2}
          onChange={handleChange2}
          onBlur={handleAdd}
        />
        <br />
        <br />
      <div style={{ backgroundColor: "pink" }}>
        <h2>Unique characters: {uniqueChars.join(", ")}</h2>
        {/* <h2>Number of unique characters: {charCount}</h2>{" "} */}
      </div>
      <div style={{ backgroundColor: "pink" }}>
        <h2>Unique numbers: {uniqueNumbers.join(", ")}</h2>
        {/* <h2>Number of unique numbers: {numCount}</h2> */}
      </div>
      <div style={{ backgroundColor: "pink" }}>
        <h2>Unique special characters: {uniqueSpecialChars.join(", ")}</h2>
        {/* <h2>Number of unique special characters: {specialCharCount}</h2> */}
      </div>
      <br />
      <Link to="/Que4">Next Que ➡️ </Link>
      <br />
      <Link to="/">Home Page 🏠</Link>
    </div>
  );
}
