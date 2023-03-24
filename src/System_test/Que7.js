import { useState } from "react";
import { Link } from "react-router-dom";

export default function Task7() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [num, setNum] = useState([]);
  const [chars, setChars] = useState([]);

  const inputHandler1 = (e) => {
    setInput1(e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""));
  };

  const inputHandler2 = (e) => {
    setInput2(e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""));
  };

  const handleSubmit = () => {
    let input11 = input1.split("");
    let input22 = input2.split("");
    let alphabetes = "abcdefghijklmnopqrstuvwxyz";
    let alphabetes1 = alphabetes.split("");

    let numbers1 = [];
    let alpha1 = [];

    for (let i = 0; i < input11.length; i++) {
      if (isNaN(input11[i])) {
        alpha1.push(input11[i]);
      } else {
        numbers1.push(input11[i]);
      }
    }
    console.log(numbers1);
    console.log(alpha1);

    let numbers2 = [];
    let alpha2 = [];

    for (let i = 0; i < input22.length; i++) {
      if (isNaN(input22[i])) {
        alpha2.push(input22[i]);
      } else {
        numbers2.push(input22[i]);
      }
    }

    let output1 = [];
    for (let i = 0; i < numbers1.length; i++) {
      for (let j = 0; j < numbers2.length; j++) {
        let min = Math.min(numbers1[i], numbers2[j]);
        let max = Math.max(numbers1[i], numbers2[j]);
        let myNum = "";
        for (let k = min + 1; k < max; k++) {
          myNum += k;
        }
        output1.push(min + myNum + max);
      }
    }
    setNum(output1);

    //Chars------------

    console.log(alpha1);
    console.log(alpha2);
    let output3 = [];
    for (let i = 0; i < alpha1.length; i++) {
      for (let j = 0; j < alpha2.length; j++) {
        let myAlpha = "";
        let start = alpha1[i].charCodeAt(0);
        let end = alpha2[j].charCodeAt(0);
        for (let m = start; m <= end; m++) {
          myAlpha += String.fromCharCode(m);
        }
        output3.push(myAlpha);
      }
    }
    setChars(output3);
  };

  return (
    <div style={{textAlign:"center"}}>
      <h1>Que No. 7</h1>
      <h2>Campare inputs each others & print all num & char in between</h2>
      <form onBlur={handleSubmit}>
        <input
          type="text"
          value={input1}
          maxLength="5"
          onChange={inputHandler1}
        />
        <br />
        <br />
        <input
          type="text"
          value={input2}
          maxLength="5"
          onChange={inputHandler2}
        />
      </form>
      <br />
      <br />
      <h2 style={{ backgroundColor: "pink" }}>Numbers</h2>
      {num.map((item, index) => (
        <li key={index}>{item}</li>
      ))}

      <h2 style={{ backgroundColor: "pink" }}>Characters</h2>
      {chars.map((item, index) => (
        <li key={index}>{item}</li>
      ))}

      <br />
      <br />
      <Link to="/Que8">Next Que ➡️ </Link>
      <br />
      <Link to="/">Home Page 🏠</Link>
    </div>
  );
}
