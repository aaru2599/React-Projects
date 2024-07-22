import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length, onChangeOtp }) => {
  const [otp, setotp] = useState(new Array(length).fill(""));
  console.log("otp", otp);
  const handleInputChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];

    // allows validation
    newOtp[index] = value.substring(value.length - 1);
    setotp(newOtp);
    const combinedOtp = newOtp.join("");
    console.log("combinedOtp", combinedOtp);
    if (combinedOtp.length === length) {
      onChangeOtp(combinedOtp);
    }

    // move to next

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
  };
  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };
  const inputRefs = useRef([]);
  console.log("inputRefs", inputRefs);
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  return (
    <div>
      <div>OtpInput</div>
      {otp.map((value, index) => {
        return (
          <input
            type="text"
            value={value}
            key={index}
            ref={(input) => (inputRefs.current[index] = input)}
            className="border w-[40px] h-[40px] p-[2px] m-1 text-center"
            onChange={(e) => handleInputChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
