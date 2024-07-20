import React from "react";
import useCounter from "./useCOunter";

const Counter = () => {
  const { count, decrement, increment, reset } = useCounter(1);
  return (
    <div>
      <div>Counter:{count}</div>

      <button disabled={count===10} className="border rounded" onClick={increment}>
        Increment
      </button>
      <button
        className="border rounded"
        onClick={decrement}
        disabled={count === 0}
      >
        Decrement
      </button>
      <button onClick={reset} className="border rounded">
        Reset
      </button>
    </div>
  );
};

export default Counter;
