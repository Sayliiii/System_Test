import React, { useState } from "react";
import { Link } from "react-router-dom";

function Que8() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [oddNumbers, setOddNumbers] = useState([]);
  const [evenNumbers, setEvenNumbers] = useState([]);

  const handleFirstNumberChange = (event) => {
    setFirstNumber(event.target.value);
  };

  const handleSecondNumberChange = (event) => {
    setSecondNumber(event.target.value);
  };

  const compareNumbers = () => {
    const firstNumberArray = firstNumber.split("").map(Number);
    const secondNumberArray = secondNumber.split("").map(Number);
    const oddNumbersArray = [];
    const evenNumbersArray = [];

    for (let i = 0; i < firstNumberArray.length; i++) {
      const currentFirstNumber = firstNumberArray[i];
      const currentSecondNumber = secondNumberArray[i];

      if (currentFirstNumber > currentSecondNumber) {
        for (let j = currentSecondNumber + 1; j < currentFirstNumber; j++) {
          if (j % 2 !== 0) {
            oddNumbersArray.push(j);
          } else if (j % 2 === 0) {
            evenNumbersArray.push(j);
          }
        }
      }
    }

    setOddNumbers(oddNumbersArray);
    setEvenNumbers(evenNumbersArray);
  };

  return (
    <div style={{textAlign:"center"}}>
      <h1>Que No. 8</h1>
      <h2>Compare Both Inputs and find Odd Even</h2>
      <input
        type="number"
        value={firstNumber}
        onChange={handleFirstNumberChange}
        onBlur={compareNumbers}
      />
      <br />
      <br />

      <input
        type="number"
        value={secondNumber}
        onChange={handleSecondNumberChange}
        onBlur={compareNumbers}
      />
      <br />
      <br />
      <h2 style={{ backgroundColor: "pink" }}>
        Odd numbers in between: {oddNumbers.join(", ")}
      </h2>
      <h2 style={{ backgroundColor: "pink" }}>
        Even numbers in between: {evenNumbers.join(", ")}
      </h2>
      <br />
      <br />
      <Link to="/Que9">Next Que ➡️ </Link>
      <br />
      <Link to="/">Home Page 🏠</Link>
    </div>
  );
}

export default Que8;
