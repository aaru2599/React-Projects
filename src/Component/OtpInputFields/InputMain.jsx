import React, { useState } from "react";
import OtpInput from "./OtpInput";

const InputMain = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [showOtp, setshowOtp] = useState(false);
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    const pattern = /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/;
    const valid = pattern.test(phoneNo);
    if (valid) {
      console.log("sahi hai");
      setshowOtp(true);
      setPhoneNo(phoneNo);
    } else {
      alert("please enter valid Phone number");
    }
    console.log("phoneNo", phoneNo);
    // const regEx=
  };
  const onChangeOtp=(otp)=>{
console.log("Login successfull otp",otp);
  }
  return (
    <div className="flex bg-black justify-center items-center h-[100vh]">

      <div className="  gap-2 bg-white p-4 flex flex-col justify-center items-center shadow-lg rounded">
        <div className="text-[20px] font-semibold">Login With Phone</div>
        {showOtp ? (
          <div> <div>Enter the otp send on {phoneNo}</div><OtpInput length={4} onChangeOtp={onChangeOtp}/></div>
        ) : (
          <form
            onSubmit={handlePhoneSubmit}
            className=""
          >
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
        )}
      </div>
    </div>
  );
};

export default InputMain;
