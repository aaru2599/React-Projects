
import React from "react";
const Pill = ({ image, text, onClick }) => {
  return (
    <span className="flex items-center  m-2 bg-slate-400  px-3 rounded-full gap-2">
      <img src={image} height={30} width={30} alt=""  className="bg-green-400 rounded-full p-1"/>
      {/* <span className="bg-green-400 p-1 h-[25px] w-[25px] flex justify-center items-center rounded-full">{text.charAt(0)}</span> */}
      <span >{text}</span>
      <button onClick={onClick} className="bg-red-300 p-1 rounded-full h-[25px] w-[25px] flex justify-center items-center">X</button>

    </span>
  );
};

export default Pill;
