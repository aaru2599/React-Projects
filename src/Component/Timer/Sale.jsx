import React, { useEffect, useState } from "react";

const Sale = () => {
  const [timer, setTimer] = useState(3600+1800);
  // const time=300;
  console.log("component call");
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const hr = Math.floor(timer / 60 / 60);
  const min = Math.floor((timer % 3600) / 60);
  const sec = timer % 60;
  console.log("hr", hr);

  return (
    <div>
      {timer > 0 ? (
        <div>{`Sale is live in ${hr}:${min}:${sec} time`}</div>
      ) : (
        <div>Sale is live</div>
      )}
    </div>
  );
};

export default Sale;
