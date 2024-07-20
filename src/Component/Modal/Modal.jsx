import React from "react";

const Modal = ({ onClose, onModal, children }) => {
  if (!onModal) return null;
  return (
    <div className="border fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 max-w-[500px] w-[100%] relative rounded shadow-lg">
        <div className="text-center font-bold ">Modal</div>
        <button className="absolute top-0 right-0 border rounded" onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
