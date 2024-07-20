import React, { useState } from "react";
import Modal from "./Modal";

const ModalMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const modalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div>ModalMain</div>
      <button className="border rounded" onClick={openModal}>Open</button>
      <Modal onModal={isModalOpen} onClose={modalClose}>
        <div>Title</div>
        <div>This is a modal</div>
      </Modal>
    </div>
  );
};

export default ModalMain;
