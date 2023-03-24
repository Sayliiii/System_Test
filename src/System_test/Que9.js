import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Que9() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (/^([1-9]{0,2},){0,4}[1-9]{0,2}$/.test(inputValue)) {
      setValue(inputValue);
      console.log(inputValue);
    }
  };

  // const handleBlur = () => {
  //   if (/^([1-9]{2},){4}[1-9]{2}$/.test(value)) {
  //     console.log("Valid input:", value);
  //   } else {
  //     console.log("Invalid input:", value);
  //   }
  // };

  return (
    <div style={{textAlign:"center"}}>
      <h1>Que No. 9</h1>
      <h2>Separate 2 digit number with (,) upto 5 </h2>
      <p> ex. 11,22,33,44,55</p>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        // onBlur={handleBlur}
      />
       <br />
       <br />
       <Link to="/Que10">Next Que ➡️ </Link>
      <br />
      <Link to="/">Home Page 🏠</Link>
    </div>
  );
}
