import React, { useMemo, useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [inputVal, setInput] = useState("");
   const result=useMemo(()=>{
    console.log("calculating sum");
    let sum=0;
    for(let i=0;i<100;i++){
      sum=sum+i
    }

    return sum
   },[])
   console.log("result",result);
    console.log("parent call",inputVal);

  return (
    <div>
      Parent
      <input
        type="text"
        placeholder="text"
        value={inputVal}
        onChange={(e) => setInput(e.target.value)}
      />
      <Child />
    </div>
  );
};

export default Parent;
