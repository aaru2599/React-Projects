import React, { useState } from "react";

const OtpInput = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    setPhoneNo("")
    console.log("phoneNo",phoneNo);
    // const regEx=
  };
  return (
    <form
      onSubmit={handlePhoneSubmit}
      className="gap-2 bg-white p-4 flex flex-col justify-center items-center shadow-lg rounded"
    >
      <div className="text-[20px] font-semibold">Phone Number</div>
      <input
        type="text"
        className="border-2 border-gray-600 rounded"
        placeholder="Enter Phone number"
        value={phoneNo}
        onChange={(e) => setPhoneNo(e.target.value)}
      />
      <button type="submit" className="border-2 px-4 rounded bg-rose-200">
        Submit
      </button>
    </form>
  );
};

export default OtpInput;
