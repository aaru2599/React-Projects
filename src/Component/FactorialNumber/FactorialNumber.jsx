import React, { useState } from "react";

const FactorialNumber = () => {
  const [inputVal, setINputVal] = useState(0);
  const [factorial, setFactorial] = useState(0);
  const onFactorialCheck = () => {
    const number = parseInt(inputVal);
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result = result * i;
    }
    setFactorial(result);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter any number"
        onChange={(e) => setINputVal(e.target.value)}
      />
      <button onClick={onFactorialCheck}>Check</button>
      <div>{factorial}</div>
    </div>
  );
};
export default FactorialNumber;
