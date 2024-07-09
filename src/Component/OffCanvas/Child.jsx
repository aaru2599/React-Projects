import React from "react";
import OffCanvas from "./OffCanvas";
const Child = () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <div>
      <OffCanvas>
      <h2>Offcanwas content</h2>
      <div>content</div>
      </OffCanvas>
    </div>
  );
};

export default Child;
