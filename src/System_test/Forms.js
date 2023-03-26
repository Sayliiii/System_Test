// import React, { useState,useEffect } from "react";
// import { Outlet, Link } from "react-router-dom";
// import bgImg from '../System_test/img1.jpg'

// export default function Forms (){
//     const[input1,setInpu1] = useState()
//     const[input2,setInput2] = useState()
//     const [list, setList] = useState([]);
//     const [bgImage, setBgImage] = useState("");
  
//     useEffect(() => {
//       let arr = [];
//       for (let i = parseInt(input1); i <= parseInt(input2); i++) {
//         arr.push(i);
//       }
//       setList(arr);
//       // generate random image URL
//       const randomNum = Math.floor(Math.random() * 6) + 1;
//       const imageUrl = `./images/img${randomNum}.jpg`; // set image path
//       setBgImage(imageUrl);
//     }, [input1,input2]);
  
//     let array = list;
//     let resultsTable = [];
//     for (let i = 0; i < array.length; i++) {
//       const results = [];
//       const num = array[i];
  
//       for (let j = 0; j < array.length; j++) {
//         if (j !== i) {
//           results.push(array[j]);
//         }
//       }
  
//       const combos = findCombos(num, results);
//       resultsTable.push({ num: num, combos: combos });
//     }
  
//     const maxCombos = Math.max(
//       ...resultsTable.map((result) => result.combos.length)
//     );
  
//     function findCombos(num, arr, memo = {}) {
//       const key = num + "-" + arr;
//       if (key in memo) return memo[key];
//       if (num === 0) return [[]];
//       if (num < 0) return [];
  
//       const combos = [];
//       for (let i = 0; i < arr.length; i++) {
//         const currentNum = arr[i];
//         const remainingArr = arr.slice(i);
//         const remainingCombos = findCombos(num - currentNum, remainingArr, memo);
//         for (let j = 0; j < remainingCombos.length; j++) {
//           const combo = [currentNum].concat(remainingCombos[j]);
//           combos.push(combo);
//         }
//       }
//       memo[key] = combos;
//       return combos;
//     }
  
//     const options = input1 ? (
//       Array.from(
//         { length: 10 - parseInt(input1) },
//         (_, i) => i + parseInt(input1) + 1
//       )
//         .filter((val) => val !== parseInt(input1)) // filter out the selected value
//         .map((val) => (
//           <option key={val} value={val}>
//             {val}
//           </option>
//         ))
//     ) : (
//       <option value="">Select Value</option>
//     );
  
//     if (input1 === "10") {
//       options.unshift(
//         <option key="10" value="10">
//           10
//         </option>
//       );
//     }
//     const comboColors = [
//       "pink",
//       "yellow",
//       "brown",
//       "purple",
//       "burlywood"
//     ];
    
//     return (
//         <>
//             <div style={{textAlign:"center", backgroundImage:`url(${bgImg})` , height:"100vh", fontFamily:"cursive"}}>
//                 <br />
//             <h1>Form Assignment</h1> <br /> <br />
//             <select id="dropdown" value={input1} onChange={(e)=>setInpu1(e.target.value)}>
//         <option value="">Select Number</option>
//         <option value="option1">1</option>
//         <option value="option2">2</option>
//         <option value="option3">3</option>
//         <option value="option4">4</option>
//         <option value="option5">5</option>
//         <option value="option6">6</option>
//         <option value="option7">7</option>
//         <option value="option8">8</option>
//         <option value="option9">9</option>
//         <option value="option10">10</option>
//       </select>

//       <select id="dropdown" value={input2} onChange={(e)=>setInput2(e.target.value)} >
//         {options}
//       </select>
//       {maxCombos === 0 ? (
//           <p
//             style={{
//               color: "red",
//               fontSize: "30px",
//               width: "fit-content",
//               margin: "0 auto",
//               backgroundColor: "white"
//             }}
//           >
//             No Match Available
//           </p>
//         ) : (
//           <table
//             border="1"
//             style={{
//               margin: "auto",
//               backgroundColor: "crimson",
//               marginTop: "20px"
//             }}
//           >
//             <thead>
//               <tr>
//                 <th
//                   style={{ backgroundColor: "mediumpurple", padding: "10px" }}
//                 >
//                   Numbers
//                 </th>
//                 {Array.from({ length: maxCombos }, (_, i) => (
//                   <th
//                     key={i}
//                     style={{ backgroundColor: "skyblue", padding: "10px" }}
//                   >
//                     Combination {i + 1}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {resultsTable.map((result) => {
//                 return (
//                   <tr key={result.num}>
//                     <td style={{ backgroundColor: "darkgoldenrod" }}>
//                       {result.num}
//                     </td>
//                     {Array.from({ length: maxCombos }, (_, i) => (
//                       <td
//                         key={i}
//                         style={{
//                           backgroundColor:
//                             i === 0
//                               ? comboColors[0]
//                               : comboColors[i % comboColors.length],
//                           padding: "10px"
//                         }}
//                       >
//                         {result.combos[i] && result.combos[i].length > 0
//                           ? result.combos[i]
//                               .map((combo) => combo.toString())
//                               .join("+")
//                           : "NA"}
//                       </td>
//                     ))}
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         )}

// <br />
// <br />
//             <Link to="/">Home Page 🏠</Link>

//         </div>
//         </>
//     )
// }





import { useState, useEffect } from "react";
import bgImg from '../System_test/img1.jpg'

function Form() {
  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("");
  const [list, setList] = useState([]);
  const [bgImage, setBgImage] = useState("");

  const onChange1 = (e) => {
    setState1(e.target.value);
  };
  const onChange2 = (e) => {
    setState2(e.target.value);
  };
  useEffect(() => {
    let arr = [];
    for (let i = parseInt(state1); i <= parseInt(state2); i++) {
      arr.push(i);
    }
    setList(arr);
    // generate random image URL
    const randomNum = Math.floor(Math.random() * 6) + 1;
    const imageUrl = `./images/img${randomNum}.jpg`; // set image path
    setBgImage(imageUrl);
  }, [state1, state2]);

  let array = list;
  let resultsTable = [];
  for (let i = 0; i < array.length; i++) {
    const results = [];
    const num = array[i];

    for (let j = 0; j < array.length; j++) {
      if (j !== i) {
        results.push(array[j]);
      }
    }

    const combos = findCombos(num, results);
    resultsTable.push({ num: num, combos: combos });
  }

  const maxCombos = Math.max(
    ...resultsTable.map((result) => result.combos.length)
  );

  function findCombos(num, arr, memo = {}) {
    const key = num + "-" + arr;
    if (key in memo) return memo[key];
    if (num === 0) return [[]];
    if (num < 0) return [];

    const combos = [];
    for (let i = 0; i < arr.length; i++) {
      const currentNum = arr[i];
      const remainingArr = arr.slice(i);
      const remainingCombos = findCombos(num - currentNum, remainingArr, memo);
      for (let j = 0; j < remainingCombos.length; j++) {
        const combo = [currentNum].concat(remainingCombos[j]);
        combos.push(combo);
      }
    }
    memo[key] = combos;
    return combos;
  }

  const options = state1 ? (
    Array.from(
      { length: 10 - parseInt(state1) },
      (_, i) => i + parseInt(state1) + 1
    )
      .filter((val) => val !== parseInt(state1)) // filter out the selected value
      .map((val) => (
        <option key={val} value={val}>
          {val}
        </option>
      ))
  ) : (
    <option value="">Select Value</option>
  );

  if (state1 === "10") {
    options.unshift(
      <option key="10" value="10">
        10
      </option>
    );
  }
  const comboColors = [
    "lightsalmon",
    "darkseagreen",
    "darkkhaki",
    "cornsilk",
    "burlywood"
  ];

  return (
    <>
      <div
        className="container"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          minWidth: "100%",
          textAlign:"center"
        
        }}
      ><br /><br />
        <h1>Form Project</h1><br /><br />
        <select id="dropdown1" value={state1} onChange={onChange1}>
          <option value="">Select Value</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <select id="dropdown2" value={state2} onChange={onChange2}>
          {options}
        </select>
        {maxCombos === 0 ? (
          <p
            style={{
              color: "red",
              fontSize: "30px",
              width: "fit-content",
              margin: "0 auto",
              backgroundColor: "white"
            }}
          >
            No Match Available
          </p>
        ) : (
          <table
            border="1"
            style={{
              margin: "auto",
              backgroundColor: "crimson",
              marginTop: "20px"
            }}
          >
            <thead>
              <tr>
                <th
                  style={{ backgroundColor: "mediumpurple", padding: "10px" }}
                >
                  Numbers
                </th>
                {Array.from({ length: maxCombos }, (_, i) => (
                  <th
                    key={i}
                    style={{ backgroundColor: "skyblue", padding: "10px" }}
                  >
                    Combination {i + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {resultsTable.map((result) => {
                return (
                  <tr key={result.num}>
                    <td style={{ backgroundColor: "darkgoldenrod" }}>
                      {result.num}
                    </td>
                    {Array.from({ length: maxCombos }, (_, i) => (
                      <td
                        key={i}
                        style={{
                          backgroundColor:
                            i === 0
                              ? comboColors[0]
                              : comboColors[i % comboColors.length],
                          padding: "10px"
                        }}
                      >
                        {result.combos[i] && result.combos[i].length > 0
                          ? result.combos[i]
                              .map((combo) => combo.toString())
                              .join("+")
                          : "NA"}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
export default Form;
