import React, { useState } from "react";
const OffCanvas = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button
        onClick={handleToggle}
        className="px-4 py-2 text-white bg-blue-600"
      >
        Open Canvas
      </button>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="px-4 py-2 text-white bg-red-600"
          onClick={handleToggle}
        >
          {" "}
          close
        </button>
        <div className="bg-white">{children}</div>
      </div>
      {isOpen && (
        <div
          onClick={handleToggle}
          className="fixed inset-0 bg-black opacity-50"
        ></div>
      )}
    </div>
  );
};

export default OffCanvas;
