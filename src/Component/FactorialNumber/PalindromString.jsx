import React, { useState } from "react";

const PalindromString = () => {
  const [inputVal, setinputVal] = useState("");
  const [isPalindrom, setisPalindrom] = useState(false);
  const onPalindromCheck = () => {
    let start = 0;
    let last = inputVal.length - 1;
    console.log(start, last);
    while (start < last) {
      if (inputVal[start] !== inputVal[last]) {
        setisPalindrom(false);
        return;
      }
      start++;
      last--;
    }
    setisPalindrom(true);
    console.log("isPalindrom", isPalindrom);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setinputVal(e.target.value)}
        placeholder="Enter String"
      />
      <button onClick={onPalindromCheck}>Check</button>
      <div>{isPalindrom?"palindrom":"Not palindrom"}</div>
    </div>
  );
};

export default PalindromString;
