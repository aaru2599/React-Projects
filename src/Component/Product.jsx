import React from "react";

const Product = () => {
  const playSound = () => {
    const audio = new Audio("/src/noti.mp3");
    audio.play();
  };
  return (
    <div>
      <button onClick={playSound}>On</button>
      <button>Off</button>
    </div>
  );
};

export default Product;
