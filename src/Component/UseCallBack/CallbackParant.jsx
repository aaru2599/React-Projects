import React, { useCallback, useState } from "react";
import CallbackChild from "./CallbackChild";

const CallbackParant = () => {
  const childFunc = useCallback((data) => {
    console.log(data);
  }, []);
  
  const [counter, setCounter] = useState(0);
  console.log("parant");
  console.log(counter);

  return (
    <div>
      <h2>CallbackParant</h2>
      <CallbackChild childFunc={childFunc} />
      <button onClick={() => setCounter(counter + 1)}>COunter</button>
    </div>
  );
};

export default CallbackParant;
