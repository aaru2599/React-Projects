import React, { useState } from "react";

const children = () => {
  const [inputValue, setValue] = useState("");
  console.log("child call");
  return (
    <div>
      Child
      <input
        type="text"
        placeholder="text"
        value={inputValue}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
const Child=React.memo(children)
export default Child;
