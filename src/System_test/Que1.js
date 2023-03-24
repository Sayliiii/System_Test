import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Que1() {
  const [input, setInput] = useState("");
  const [letter, setLetter] = useState(0);
  const [digit, setDigit] = useState(0);
  const [special, setSpecial] = useState(0);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);

    let letterCount = 0;
    let digitCount = 0;
    let specialCount = 0;

    for (let i = 0; i < value.length; i++) {
      const char = value[i];
      if (char.match(/[0-9]/)) {
        digitCount++;
      } else if (char.match(/[a-z]/)) {
        letterCount++;
      } else if (char.match(/[A-Z]/)) {
        letterCount++;
      } else if (char.match(/[@/!/#/$]/)) {
        specialCount++;
      }
    }

    setLetter(letterCount);
    setDigit(digitCount);
    setSpecial(specialCount);
  };

  return (
    <div style={{textAlign:"center"}}>
      <h1>Que no: 1</h1>
      <h2>Find the Count of Numbers, Characters & Special char</h2>
      <input type="text" value={input} onChange={handleInputChange} />
        <br />
        <br />
      <div style={{ backgroundColor: "pink" }}>
        <h3>Letter count is : {letter}</h3>
        <h3>Number count is : {digit}</h3>
        <h3>Special char count is : {special}</h3>
      </div>
      <br />
      <Link to="/Que2">Next Que ➡️ </Link>
      <br />
      <Link to="/">Home Page 🏠</Link>
    </div>
  );
}
