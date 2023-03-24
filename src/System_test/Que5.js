import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Que5() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [matchingChars, setMatchingChars] = useState([]);

  const handleText1Change = (event) => {
    setText1(event.target.value);
    findMatchingChars(event.target.value, text2);
  };

  const handleText2Change = (event) => {
    setText2(event.target.value);
    findMatchingChars(text1, event.target.value);
  };

  const findMatchingChars = (str1, str2) => {
    const set1 = new Set(str1);
    const set2 = new Set(str2);
    const intersection = [...set1].filter((char) => set2.has(char));
    const intersection1 = intersection;
    setMatchingChars(intersection1);
  };

  return (
    <div style={{textAlign:"center"}}>
      <h1>Que no: 5</h1>
      <h1>Find Matching Characters</h1>
      <input type="text" value={text1} onChange={handleText1Change} />
      <br />
      <br />
      <input type="text" value={text2} onChange={handleText2Change} />
      <br />
      <br />
      <h2 style={{ backgroundColor: "pink" }}>
        Matching Characters: {matchingChars.join(", ")}
      </h2>
<br />
      <br />
      <Link to="/Que6">Next Que ➡️ </Link>
      <br />
      <Link to="/">Home Page 🏠</Link>
    </div>
  );
}
