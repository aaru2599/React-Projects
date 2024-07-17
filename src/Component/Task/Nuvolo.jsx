import React, { useState } from "react";
import { CiMedicalCross } from "react-icons/ci";
import { IoHammer, IoHammerOutline } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TiArrowRightOutline, TiArrowRightThick } from "react-icons/ti";
const data = [
  {
    NormalIcon: <IoHammerOutline />,
    FillIcon: <IoHammer fill="white" />,
    title: "Technical Workspace",
    Done: <MdOutlineDone fill="white" />,
  },
  {
    NormalIcon: <TiArrowRightOutline />,
    FillIcon: <TiArrowRightThick fill="white" />,
    title: "Technical Workspace",
    Done: <MdOutlineDone fill="white" />,
  },
];
const Nuvolo = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [updateV, setUpdateV] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (item) => {
    setActiveItem(item);
  };
  const handleButton = () => {
    setLoading(true);
    setTimeout(() => {
      setUpdateV(true);
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="  flex justify-center bg-slate-500">
      <div className=" border-4 border-black rounded   w-[400px] bg-white h-[100vh]">
        <header className="border-b p-2 flex justify-between items-center">
          <img
            className="w-[100px]"
            src="https://www.nuvolo.com/wp-content/uploads/2020/04/logo.svg"
            alt=""
          />
          <div>
            <RxCross2 />
          </div>
        </header>
        <section className="border-b min-h-[350px]">
          <div className="flex justify-between p-4 border-b">
            <div className="w-[50%]">
              <div>Database Status:</div>
              {loading && !updateV ? (
                <div className="text-yellow-300">Updating...</div>
              ) : updateV ? (
                <div className="text-green-400">Updated</div>
              ) : (
                <div className="text-red-300">Out of date</div>
              )}
              {}
            </div>
            <button
              onClick={handleButton}
              className="bg-blue-500 rounded w-[100px]"
              disabled={updateV}
            >
              Update
            </button>
          </div>
          <div className="">
            <div className="p-4">Select Application:</div>
            <div>
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleChange(index)}
                    className={`flex justify-between items-center p-4 cursor-pointer ${activeItem === index ? "bg-blue-500" : "bg-white"}`}
                  >
                    <div
                      className={`flex  gap-2 items-center  ${activeItem === index ? "text-white" : "text-blue-600"}`}
                    >
                      {activeItem === index ? (
                        <div>{item.FillIcon}</div>
                      ) : (
                        <div>{item.NormalIcon}</div>
                      )}
                      <div>{item.title}</div>
                    </div>
                    {activeItem === index && <div>{item.Done}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <footer></footer>
      </div>
    </div>
  );
};

export default Nuvolo;
