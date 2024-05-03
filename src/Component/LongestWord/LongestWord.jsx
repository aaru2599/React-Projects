import React, { useState } from "react";

const LongestWord = () => {
  const [inputVal, setInputVal] = useState("");
  const [result,setResult]=useState('')
const onClickCheck=()=>{
    const inputArr=inputVal.split(" ")
    let longestStr=''
    console.log("inputArr",inputArr);
    for(let i=0;i<inputArr.length;i++){
        const elem=inputArr[i];
       if(elem.length>longestStr.length){
        longestStr=elem
       }
    }
   setResult(longestStr);
}
  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={onClickCheck}>Check</button>
      <div>
        Longest Word:{result}
      </div>
    </div>
  );
};

export default LongestWord;
