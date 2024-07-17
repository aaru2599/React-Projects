import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [sec, setSec] = useState(0);
  const [miliSec, setMiliSec] = useState(0);
  const [timerIndex, setIndex] = useState(null);

  useEffect(() => {
    if (time === 0 && timerIndex) {
      clearInterval(timerIndex);
      setIndex(null);
    }
  }, [time, timerIndex]);

  const handleStart = () => {
    if (sec || miliSec) {
      const totalMiliSec =
        (parseInt(sec || 0) * 60 + parseInt(miliSec || 0)) * 1000;
      setTime(totalMiliSec);
    }
    if (!timerIndex) {
      const interval = setInterval(() => {
        setTime((prev) => (prev > 0 ? prev - 100 : 0));
      }, 100);
      setIndex(interval)
    }
  };

  const handleStop = () => {
    if (timerIndex) {
      clearInterval(timerIndex);
      setIndex(null);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 100);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}:${milliseconds}`;
  };

  return (
    <div>
      <h2>Timer</h2>
      <div>
        <input
          type="number"
          value={sec}
          onChange={(e) => setSec(e.target.value)}
        />
        <input
          type="number"
          value={miliSec}
          onChange={(e) => setMiliSec(e.target.value)}
        />
      </div>
      <h2>{formatTime(time)}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Pause</button>
    </div>
  );
};

export default Timer;
