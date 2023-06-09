import { useState } from "react";
import { Link } from "react-router-dom";
export default function Que6() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [uniqueAlphabets, setUniqueAlphabets] = useState([]);
  const [uniqueNumbers, setUniqueNumbers] = useState([]);
  const [uniqueSpecialChars, setUniqueSpecialChars] = useState([]);

  const inputChange1 = (e) => {
    setInput1(e.target.value);
  };

  const inputChange2 = (e) => {
    setInput2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let arr = [];
    for (let i = 0; i < input1.length; i++) {
      for (let j = 0; j < input2.length; j++) {
        if (input1[i] === input2[j]) {
          arr.push(input1[i]);
        }
      }
    }
    console.log(arr);
    const allCharacters = input1 + input2;
    const alphabets = [];
    const numbers = [];
    const specialChars = [];

    for (let i = 0; i < arr.length; i++) {
      const char = arr[i];
      if (/[a-zA-Z]/.test(char)) {
        if (!alphabets.includes(char.toLowerCase())) {
          alphabets.push(char);
        }
      } else if (/[0-9]/.test(char)) {
        if (!numbers.includes(char)) {
          numbers.push(char);
        }
      } else {
        if (!specialChars.includes(char)) {
          specialChars.push(char);
        }
      }
    }
    let myUnique = alphabets.map((item) => item.toLowerCase()).sort();
    let myUnique1 = [...new Set(myUnique)];
    setUniqueAlphabets(myUnique1);
    setUniqueNumbers(
      numbers.sort((a, b) => {
        return a - b;
      })
    );
    setUniqueSpecialChars(specialChars);
  };

  return (
    <div style={{textAlign:"center"}}>
      <h1>Que No. 6</h1>
      <h1>Find Duplicated value with ascending order</h1>
      <form onBlur={handleSubmit}>
        <input type="text" value={input1} onChange={inputChange1} />
        <br />
        <br />
        <input type="text" value={input2} onChange={inputChange2} />
      </form>
      <br />
      <br />
      <h3 style={{ backgroundColor: "pink" }}>
        Duplicated alphabets: {uniqueAlphabets.join(", ")}
      </h3>
      <h3 style={{ backgroundColor: "pink" }}>
        Duplicated numbers: {uniqueNumbers.join(", ")}
      </h3>
      <h3 style={{ backgroundColor: "pink" }}>
        Duplicated special characters: {uniqueSpecialChars.join(", ")}
      </h3>
      <br />
      <br />
      <Link to="/Que7">Next Que ➡️ </Link>
      <br />
      <Link to="/">Home Page 🏠</Link>
    </div>
  );
}
