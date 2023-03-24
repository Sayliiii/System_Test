import React, { useState } from "react";
import { Link } from "react-router-dom";

function formatNumbers(numbers) {
  let output = "";

  for (let i = 0; i < numbers.length; i++) {
    output += numbers[i] + "=";

    for (let j = numbers[i]; j >= numbers[i] - 8 && j >= 0; j -= 2) {
      output += j + ",";
    }

    output = output.slice(0, -1);
    output += " ; \n";
  }

  return output;
}

export default function Que10() {
  const [output, setOutput] = useState("");

  const handleInputBlur = (event) => {
    const input = event.target.value.trim();
    const inputValues = input.split(",");
    if (inputValues.length !== 5) {
      alert("Please enter exactly 5 comma-separated numbers.");
      return;
    }
    const numbers = inputValues.map((value) => Number(value.trim()));
    const invalidNumbers = numbers.filter(
      (number) => !/^([1-9][1-9])$/.test(number)
    );
    if (invalidNumbers.length > 0) {
      alert("Please enter only two-digit numbers.");
    }
    setOutput(formatNumbers(numbers));
  };

  return (
    <div style={{textAlign:"center"}}>
      <h1>Que No. 10</h1>
      <h2>Separate 2 digit number with (,) and find odd & even </h2>
      <input onBlur={handleInputBlur} maxLength={14} />
      <br />
      <br />
      <h2 style={{ backgroundColor: "pink" }}>
        Odd & Even for above num : {output}
      </h2>
      <br />
      <br />
      <Link to="/">Home Page 🏠</Link>
    </div>
  );
}
