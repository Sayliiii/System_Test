import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Que2() {
  const [input, setInput] = useState("");
  const [letter, setLetter] = useState(0);
  const [letterdisplay, setLetterdisplay] = useState("");
  const [digit, setDigit] = useState(0);
  const [digitdisplay, setDigitdisplay] = useState("");
  const [special, setSpecial] = useState(0);
  const [specialdisplay, setSpecialdisplay] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);

    let letterCount = 0;
    let digitCount = 0;
    let specialCount = 0;
    let lettervalue = "";
    let digitvalue = "";
    let specialvalue = "";

    for (let i = 0; i < value.length; i++) {
      const char = value[i];
      if (char.match(/[0-9]/)) {
        digitCount++;
        digitvalue += value[i];
      } else if (char.match(/[a-z]/)) {
        letterCount++;
        lettervalue += value[i];
      } else if (char.match(/[A-Z]/)) {
        letterCount++;
        lettervalue += value[i];
      } else if (char.match(/[@/!/#/$]/)) {
        specialCount++;
        specialvalue += value[i];
      }
    }

    setDigit(digitCount);
    setDigitdisplay(digitvalue);
    setLetter(letterCount);
    setLetterdisplay(lettervalue);
    setSpecial(specialCount);
    setSpecialdisplay(specialvalue);
  };

  return (
    <div style={{textAlign:"center"}}>
      <h1>Que no: 2</h1>
      <h2>Find the Numbers, Characters & Special char and their count</h2>
      <input type="text" value={input} onChange={handleInputChange} />
      <br />
      <br />
      <br />
      <div style={{ border: "2px black solid", backgroundColor: "pink" }}>
        <h3>Letter count is : {letter}</h3>
        <h3>Letter's are : {letterdisplay}</h3>
      </div>
      <div style={{ border: "2px black solid", backgroundColor: "pink" }}>
        <h3>Number count is : {digit}</h3>
        <h3>Number's are : {digitdisplay}</h3>
      </div>
      <div style={{ border: "2px black solid", backgroundColor: "pink" }}>
        <h3>Special char count is : {special}</h3>
        <h3>Special char's are : {specialdisplay}</h3>
      </div>
      <br />
      <Link to="/Que3">Next Que ➡️ </Link>
      <br />
      <Link to="/">Home Page 🏠</Link>
    </div>
  );
}
